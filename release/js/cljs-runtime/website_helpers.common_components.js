goog.provide('website_helpers.common_components');
website_helpers.common_components.sync_url_params_BANG_ = (function website_helpers$common_components$sync_url_params_BANG_(vars){
var url = (new URL(window.location));
var seq__45421 = cljs.core.seq(vars);
var chunk__45422 = null;
var count__45423 = (0);
var i__45424 = (0);
while(true){
if((i__45424 < count__45423)){
var vec__45431 = chunk__45422.cljs$core$IIndexed$_nth$arity$2(null,i__45424);
var var$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45431,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45431,(1),null);
if(cljs.core.truth_(value)){
url.searchParams.set(var$,value);
} else {
url.searchParams.delete(var$);
}

window.history.pushState(null,"",url.toString());


var G__45441 = seq__45421;
var G__45442 = chunk__45422;
var G__45443 = count__45423;
var G__45444 = (i__45424 + (1));
seq__45421 = G__45441;
chunk__45422 = G__45442;
count__45423 = G__45443;
i__45424 = G__45444;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__45421);
if(temp__5825__auto__){
var seq__45421__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45421__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__45421__$1);
var G__45445 = cljs.core.chunk_rest(seq__45421__$1);
var G__45446 = c__5568__auto__;
var G__45447 = cljs.core.count(c__5568__auto__);
var G__45448 = (0);
seq__45421 = G__45445;
chunk__45422 = G__45446;
count__45423 = G__45447;
i__45424 = G__45448;
continue;
} else {
var vec__45434 = cljs.core.first(seq__45421__$1);
var var$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45434,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45434,(1),null);
if(cljs.core.truth_(value)){
url.searchParams.set(var$,value);
} else {
url.searchParams.delete(var$);
}

window.history.pushState(null,"",url.toString());


var G__45449 = cljs.core.next(seq__45421__$1);
var G__45450 = null;
var G__45451 = (0);
var G__45452 = (0);
seq__45421 = G__45449;
chunk__45422 = G__45450;
count__45423 = G__45451;
i__45424 = G__45452;
continue;
}
} else {
return null;
}
}
break;
}
});
website_helpers.common_components.input_style = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"7px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"white"], null);
website_helpers.common_components.dropdown_check_list = (function website_helpers$common_components$dropdown_check_list(vars,title,on_change){
var opened = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"tag-list",new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["dropdown-check-list",(cljs.core.truth_(cljs.core.deref(opened))?"visible":null)], null),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto",new cljs.core.Keyword(null,"max-height","max-height",-612563804),"200px"], null),new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),"100"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"anchor",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(opened,cljs.core.not(cljs.core.deref(opened)));
})], null),title], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"items"], null)], null),(function (){var iter__5523__auto__ = (function website_helpers$common_components$dropdown_check_list_$_iter__45437(s__45438){
return (new cljs.core.LazySeq(null,(function (){
var s__45438__$1 = s__45438;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__45438__$1);
if(temp__5825__auto__){
var s__45438__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__45438__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__45438__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__45440 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__45439 = (0);
while(true){
if((i__45439 < size__5522__auto__)){
var var$ = cljs.core._nth(c__5521__auto__,i__45439);
cljs.core.chunk_append(b__45440,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),var$], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"style","style",-496642736),website_helpers.common_components.input_style,new cljs.core.Keyword(null,"checked","checked",-50955819),(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(vars),var$))?"checked":""),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__45439,var$,c__5521__auto__,size__5522__auto__,b__45440,s__45438__$2,temp__5825__auto__,opened){
return (function (_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(vars,cljs.core.assoc,var$,cljs.core.not(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(vars),var$)));

website_helpers.common_components.sync_url_params_BANG_(cljs.core.deref(vars));

return (on_change.cljs$core$IFn$_invoke$arity$0 ? on_change.cljs$core$IFn$_invoke$arity$0() : on_change.call(null));
});})(i__45439,var$,c__5521__auto__,size__5522__auto__,b__45440,s__45438__$2,temp__5825__auto__,opened))
], null)], null),var$], null));

var G__45453 = (i__45439 + (1));
i__45439 = G__45453;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45440),website_helpers$common_components$dropdown_check_list_$_iter__45437(cljs.core.chunk_rest(s__45438__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45440),null);
}
} else {
var var$ = cljs.core.first(s__45438__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),var$], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"style","style",-496642736),website_helpers.common_components.input_style,new cljs.core.Keyword(null,"checked","checked",-50955819),(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(vars),var$))?"checked":""),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (var$,s__45438__$2,temp__5825__auto__,opened){
return (function (_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(vars,cljs.core.assoc,var$,cljs.core.not(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(vars),var$)));

website_helpers.common_components.sync_url_params_BANG_(cljs.core.deref(vars));

return (on_change.cljs$core$IFn$_invoke$arity$0 ? on_change.cljs$core$IFn$_invoke$arity$0() : on_change.call(null));
});})(var$,s__45438__$2,temp__5825__auto__,opened))
], null)], null),var$], null),website_helpers$common_components$dropdown_check_list_$_iter__45437(cljs.core.rest(s__45438__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.keys(cljs.core.deref(vars))));
})())], null);
});
});

//# sourceMappingURL=website_helpers.common_components.js.map
