goog.provide('website_helpers.page_graph');
website_helpers.page_graph.PageTree = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),website_helpers.page_graph.PageTree], null)], null);
website_helpers.page_graph.example_page_tree = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"manifesto.md",new cljs.core.Keyword(null,"size","size",1098693007),(10074)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"climbing",new cljs.core.Keyword(null,"size","size",1098693007),(4096),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"media.md",new cljs.core.Keyword(null,"size","size",1098693007),(592)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"safety-checklist.md",new cljs.core.Keyword(null,"size","size",1098693007),(3276)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"event-reports",new cljs.core.Keyword(null,"size","size",1098693007),(4096),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"2019-10-7-namaste-wall-zion.md",new cljs.core.Keyword(null,"size","size",1098693007),(1899)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"2020-8-10-lake-erie.md",new cljs.core.Keyword(null,"size","size",1098693007),(1225)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"2020-8-12-mile-high-club.md",new cljs.core.Keyword(null,"size","size",1098693007),(10662)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"first-512.md",new cljs.core.Keyword(null,"size","size",1098693007),(214)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"mcmahon-hall.md",new cljs.core.Keyword(null,"size","size",1098693007),(928)], null)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"datavis",new cljs.core.Keyword(null,"size","size",1098693007),(4096),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"reddit-tree.md",new cljs.core.Keyword(null,"size","size",1098693007),(551)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"seattle-rain.md",new cljs.core.Keyword(null,"size","size",1098693007),(2105)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"gamedev",new cljs.core.Keyword(null,"size","size",1098693007),(4096),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"common-patterns.md",new cljs.core.Keyword(null,"size","size",1098693007),(2276)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"gamedev-context.md",new cljs.core.Keyword(null,"size","size",1098693007),(246)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"my-projects.md",new cljs.core.Keyword(null,"size","size",1098693007),(1131)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"game-ideas",new cljs.core.Keyword(null,"size","size",1098693007),(4096),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"farming-video-game.md",new cljs.core.Keyword(null,"size","size",1098693007),(786)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"roguelike-base-builder.md",new cljs.core.Keyword(null,"size","size",1098693007),(2019)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"safe-building-designer.md",new cljs.core.Keyword(null,"size","size",1098693007),(507)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"mechanic-ideas",new cljs.core.Keyword(null,"size","size",1098693007),(4096),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"character-alignment.md",new cljs.core.Keyword(null,"size","size",1098693007),(436)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"low-friction-turn-based-tactics.md",new cljs.core.Keyword(null,"size","size",1098693007),(3187)], null)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"gaming",new cljs.core.Keyword(null,"size","size",1098693007),(4096),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"buying-games.md",new cljs.core.Keyword(null,"size","size",1098693007),(912)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"chess.md",new cljs.core.Keyword(null,"size","size",1098693007),(297)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"fps-principles.md",new cljs.core.Keyword(null,"size","size",1098693007),(6329)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"oxygen-not-included.md",new cljs.core.Keyword(null,"size","size",1098693007),(472)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"recommendations.md",new cljs.core.Keyword(null,"size","size",1098693007),(326)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"health-and-longevity",new cljs.core.Keyword(null,"size","size",1098693007),(4096),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"aging-science.md",new cljs.core.Keyword(null,"size","size",1098693007),(94)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"avoiding-accidents.md",new cljs.core.Keyword(null,"size","size",1098693007),(244)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"biomarker-correlator.md",new cljs.core.Keyword(null,"size","size",1098693007),(188)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"causes-of-death.md",new cljs.core.Keyword(null,"size","size",1098693007),(703)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"chronic-stress.md",new cljs.core.Keyword(null,"size","size",1098693007),(26)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"circadian-rhythm.md",new cljs.core.Keyword(null,"size","size",1098693007),(72)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"continuous-glucose-monitoring.md",new cljs.core.Keyword(null,"size","size",1098693007),(1384)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"cooking.md",new cljs.core.Keyword(null,"size","size",1098693007),(9101)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"dental-health.md",new cljs.core.Keyword(null,"size","size",1098693007),(135)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"dna-testing.md",new cljs.core.Keyword(null,"size","size",1098693007),(670)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"exercise.md",new cljs.core.Keyword(null,"size","size",1098693007),(29)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"fasting.md",new cljs.core.Keyword(null,"size","size",1098693007),(4493)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"finding-care.md",new cljs.core.Keyword(null,"size","size",1098693007),(275)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"food.md",new cljs.core.Keyword(null,"size","size",1098693007),(16612)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"influences.md",new cljs.core.Keyword(null,"size","size",1098693007),(8329)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"misc-research.md",new cljs.core.Keyword(null,"size","size",1098693007),(409)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"my-physiological-states.md",new cljs.core.Keyword(null,"size","size",1098693007),(636)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"sleep.md",new cljs.core.Keyword(null,"size","size",1098693007),(4462)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"tracking-health.md",new cljs.core.Keyword(null,"size","size",1098693007),(4196)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"hydroponics",new cljs.core.Keyword(null,"size","size",1098693007),(4096),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"journal.md",new cljs.core.Keyword(null,"size","size",1098693007),(1525)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"my-setup.md",new cljs.core.Keyword(null,"size","size",1098693007),(4052)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"investing-and-finances",new cljs.core.Keyword(null,"size","size",1098693007),(4096),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"comprehensive-housing-return-estimator.md",new cljs.core.Keyword(null,"size","size",1098693007),(11714)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"financial-independence.md",new cljs.core.Keyword(null,"size","size",1098693007),(745)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"housing.md",new cljs.core.Keyword(null,"size","size",1098693007),(1515)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"influences.md",new cljs.core.Keyword(null,"size","size",1098693007),(1368)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"monthly-costs-of-car-ownership.md",new cljs.core.Keyword(null,"size","size",1098693007),(475)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"strategies.md",new cljs.core.Keyword(null,"size","size",1098693007),(1243)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"taxes.md",new cljs.core.Keyword(null,"size","size",1098693007),(2727)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"lifelogging",new cljs.core.Keyword(null,"size","size",1098693007),(4096),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"camera.md",new cljs.core.Keyword(null,"size","size",1098693007),(869)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"influences.md",new cljs.core.Keyword(null,"size","size",1098693007),(250)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"what-and-why.md",new cljs.core.Keyword(null,"size","size",1098693007),(8752)], null)], null)], null)], null);
website_helpers.page_graph.get_links = (function website_helpers$page_graph$get_links(all_subtrees){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__5523__auto__ = (function website_helpers$page_graph$get_links_$_iter__60125(s__60126){
return (new cljs.core.LazySeq(null,(function (){
var s__60126__$1 = s__60126;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__60126__$1);
if(temp__5823__auto__){
var s__60126__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60126__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__60126__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__60128 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__60127 = (0);
while(true){
if((i__60127 < size__5522__auto__)){
var subtree = cljs.core._nth(c__5521__auto__,i__60127);
cljs.core.chunk_append(b__60128,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__5523__auto__ = ((function (i__60127,subtree,c__5521__auto__,size__5522__auto__,b__60128,s__60126__$2,temp__5823__auto__){
return (function website_helpers$page_graph$get_links_$_iter__60125_$_iter__60129(s__60130){
return (new cljs.core.LazySeq(null,((function (i__60127,subtree,c__5521__auto__,size__5522__auto__,b__60128,s__60126__$2,temp__5823__auto__){
return (function (){
var s__60130__$1 = s__60130;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__60130__$1);
if(temp__5823__auto____$1){
var s__60130__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__60130__$2)){
var c__5521__auto____$1 = cljs.core.chunk_first(s__60130__$2);
var size__5522__auto____$1 = cljs.core.count(c__5521__auto____$1);
var b__60132 = cljs.core.chunk_buffer(size__5522__auto____$1);
if((function (){var i__60131 = (0);
while(true){
if((i__60131 < size__5522__auto____$1)){
var child = cljs.core._nth(c__5521__auto____$1,i__60131);
cljs.core.chunk_append(b__60132,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(child),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(subtree),new cljs.core.Keyword(null,"value","value",305978217),(3)], null));

var G__60178 = (i__60131 + (1));
i__60131 = G__60178;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60132),website_helpers$page_graph$get_links_$_iter__60125_$_iter__60129(cljs.core.chunk_rest(s__60130__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60132),null);
}
} else {
var child = cljs.core.first(s__60130__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(child),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(subtree),new cljs.core.Keyword(null,"value","value",305978217),(3)], null),website_helpers$page_graph$get_links_$_iter__60125_$_iter__60129(cljs.core.rest(s__60130__$2)));
}
} else {
return null;
}
break;
}
});})(i__60127,subtree,c__5521__auto__,size__5522__auto__,b__60128,s__60126__$2,temp__5823__auto__))
,null,null));
});})(i__60127,subtree,c__5521__auto__,size__5522__auto__,b__60128,s__60126__$2,temp__5823__auto__))
;
return iter__5523__auto__(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(subtree));
})()));

var G__60179 = (i__60127 + (1));
i__60127 = G__60179;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60128),website_helpers$page_graph$get_links_$_iter__60125(cljs.core.chunk_rest(s__60126__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60128),null);
}
} else {
var subtree = cljs.core.first(s__60126__$2);
return cljs.core.cons(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__5523__auto__ = ((function (subtree,s__60126__$2,temp__5823__auto__){
return (function website_helpers$page_graph$get_links_$_iter__60125_$_iter__60133(s__60134){
return (new cljs.core.LazySeq(null,(function (){
var s__60134__$1 = s__60134;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__60134__$1);
if(temp__5823__auto____$1){
var s__60134__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__60134__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__60134__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__60136 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__60135 = (0);
while(true){
if((i__60135 < size__5522__auto__)){
var child = cljs.core._nth(c__5521__auto__,i__60135);
cljs.core.chunk_append(b__60136,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(child),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(subtree),new cljs.core.Keyword(null,"value","value",305978217),(3)], null));

var G__60180 = (i__60135 + (1));
i__60135 = G__60180;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60136),website_helpers$page_graph$get_links_$_iter__60125_$_iter__60133(cljs.core.chunk_rest(s__60134__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60136),null);
}
} else {
var child = cljs.core.first(s__60134__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(child),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(subtree),new cljs.core.Keyword(null,"value","value",305978217),(3)], null),website_helpers$page_graph$get_links_$_iter__60125_$_iter__60133(cljs.core.rest(s__60134__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(subtree,s__60126__$2,temp__5823__auto__))
;
return iter__5523__auto__(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(subtree));
})()),website_helpers$page_graph$get_links_$_iter__60125(cljs.core.rest(s__60126__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(all_subtrees);
})());
});
website_helpers.page_graph.get_category_links = (function website_helpers$page_graph$get_category_links(nodes,categories_to_idx){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__5523__auto__ = (function website_helpers$page_graph$get_category_links_$_iter__60138(s__60139){
return (new cljs.core.LazySeq(null,(function (){
var s__60139__$1 = s__60139;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__60139__$1);
if(temp__5823__auto__){
var s__60139__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60139__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__60139__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__60141 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__60140 = (0);
while(true){
if((i__60140 < size__5522__auto__)){
var node = cljs.core._nth(c__5521__auto__,i__60140);
cljs.core.chunk_append(b__60141,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__5523__auto__ = ((function (i__60140,node,c__5521__auto__,size__5522__auto__,b__60141,s__60139__$2,temp__5823__auto__){
return (function website_helpers$page_graph$get_category_links_$_iter__60138_$_iter__60142(s__60143){
return (new cljs.core.LazySeq(null,((function (i__60140,node,c__5521__auto__,size__5522__auto__,b__60141,s__60139__$2,temp__5823__auto__){
return (function (){
var s__60143__$1 = s__60143;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__60143__$1);
if(temp__5823__auto____$1){
var s__60143__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__60143__$2)){
var c__5521__auto____$1 = cljs.core.chunk_first(s__60143__$2);
var size__5522__auto____$1 = cljs.core.count(c__5521__auto____$1);
var b__60145 = cljs.core.chunk_buffer(size__5522__auto____$1);
if((function (){var i__60144 = (0);
while(true){
if((i__60144 < size__5522__auto____$1)){
var category = cljs.core._nth(c__5521__auto____$1,i__60144);
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(categories_to_idx,category);
if(cljs.core.truth_(idx)){
cljs.core.chunk_append(b__60145,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(node),new cljs.core.Keyword(null,"target","target",253001721),idx,new cljs.core.Keyword(null,"value","value",305978217),(3)], null));

var G__60181 = (i__60144 + (1));
i__60144 = G__60181;
continue;
} else {
var G__60182 = (i__60144 + (1));
i__60144 = G__60182;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60145),website_helpers$page_graph$get_category_links_$_iter__60138_$_iter__60142(cljs.core.chunk_rest(s__60143__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60145),null);
}
} else {
var category = cljs.core.first(s__60143__$2);
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(categories_to_idx,category);
if(cljs.core.truth_(idx)){
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(node),new cljs.core.Keyword(null,"target","target",253001721),idx,new cljs.core.Keyword(null,"value","value",305978217),(3)], null),website_helpers$page_graph$get_category_links_$_iter__60138_$_iter__60142(cljs.core.rest(s__60143__$2)));
} else {
var G__60183 = cljs.core.rest(s__60143__$2);
s__60143__$1 = G__60183;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__60140,node,c__5521__auto__,size__5522__auto__,b__60141,s__60139__$2,temp__5823__auto__))
,null,null));
});})(i__60140,node,c__5521__auto__,size__5522__auto__,b__60141,s__60139__$2,temp__5823__auto__))
;
return iter__5523__auto__(new cljs.core.Keyword(null,"categories","categories",178386610).cljs$core$IFn$_invoke$arity$1(node));
})()));

var G__60184 = (i__60140 + (1));
i__60140 = G__60184;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60141),website_helpers$page_graph$get_category_links_$_iter__60138(cljs.core.chunk_rest(s__60139__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60141),null);
}
} else {
var node = cljs.core.first(s__60139__$2);
return cljs.core.cons(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__5523__auto__ = ((function (node,s__60139__$2,temp__5823__auto__){
return (function website_helpers$page_graph$get_category_links_$_iter__60138_$_iter__60146(s__60147){
return (new cljs.core.LazySeq(null,(function (){
var s__60147__$1 = s__60147;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__60147__$1);
if(temp__5823__auto____$1){
var s__60147__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__60147__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__60147__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__60149 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__60148 = (0);
while(true){
if((i__60148 < size__5522__auto__)){
var category = cljs.core._nth(c__5521__auto__,i__60148);
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(categories_to_idx,category);
if(cljs.core.truth_(idx)){
cljs.core.chunk_append(b__60149,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(node),new cljs.core.Keyword(null,"target","target",253001721),idx,new cljs.core.Keyword(null,"value","value",305978217),(3)], null));

var G__60185 = (i__60148 + (1));
i__60148 = G__60185;
continue;
} else {
var G__60186 = (i__60148 + (1));
i__60148 = G__60186;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60149),website_helpers$page_graph$get_category_links_$_iter__60138_$_iter__60146(cljs.core.chunk_rest(s__60147__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60149),null);
}
} else {
var category = cljs.core.first(s__60147__$2);
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(categories_to_idx,category);
if(cljs.core.truth_(idx)){
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(node),new cljs.core.Keyword(null,"target","target",253001721),idx,new cljs.core.Keyword(null,"value","value",305978217),(3)], null),website_helpers$page_graph$get_category_links_$_iter__60138_$_iter__60146(cljs.core.rest(s__60147__$2)));
} else {
var G__60187 = cljs.core.rest(s__60147__$2);
s__60147__$1 = G__60187;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});})(node,s__60139__$2,temp__5823__auto__))
;
return iter__5523__auto__(new cljs.core.Keyword(null,"categories","categories",178386610).cljs$core$IFn$_invoke$arity$1(node));
})()),website_helpers$page_graph$get_category_links_$_iter__60138(cljs.core.rest(s__60139__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(nodes);
})());
});
website_helpers.page_graph.update_nodes = (function website_helpers$page_graph$update_nodes(var_args){
var args__5775__auto__ = [];
var len__5769__auto___60188 = arguments.length;
var i__5770__auto___60189 = (0);
while(true){
if((i__5770__auto___60189 < len__5769__auto___60188)){
args__5775__auto__.push((arguments[i__5770__auto___60189]));

var G__60190 = (i__5770__auto___60189 + (1));
i__5770__auto___60189 = G__60190;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return website_helpers.page_graph.update_nodes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(website_helpers.page_graph.update_nodes.cljs$core$IFn$_invoke$arity$variadic = (function (nodes,update_fns){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__5523__auto__ = (function website_helpers$page_graph$iter__60152(s__60153){
return (new cljs.core.LazySeq(null,(function (){
var s__60153__$1 = s__60153;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__60153__$1);
if(temp__5823__auto__){
var s__60153__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60153__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__60153__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__60155 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__60154 = (0);
while(true){
if((i__60154 < size__5522__auto__)){
var n = cljs.core._nth(c__5521__auto__,i__60154);
cljs.core.chunk_append(b__60155,(function (){var fexpr__60156 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.comp,update_fns);
return (fexpr__60156.cljs$core$IFn$_invoke$arity$1 ? fexpr__60156.cljs$core$IFn$_invoke$arity$1(n) : fexpr__60156.call(null,n));
})());

var G__60191 = (i__60154 + (1));
i__60154 = G__60191;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60155),website_helpers$page_graph$iter__60152(cljs.core.chunk_rest(s__60153__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60155),null);
}
} else {
var n = cljs.core.first(s__60153__$2);
return cljs.core.cons((function (){var fexpr__60157 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.comp,update_fns);
return (fexpr__60157.cljs$core$IFn$_invoke$arity$1 ? fexpr__60157.cljs$core$IFn$_invoke$arity$1(n) : fexpr__60157.call(null,n));
})(),website_helpers$page_graph$iter__60152(cljs.core.rest(s__60153__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(nodes);
})());
}));

(website_helpers.page_graph.update_nodes.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(website_helpers.page_graph.update_nodes.cljs$lang$applyTo = (function (seq60150){
var G__60151 = cljs.core.first(seq60150);
var seq60150__$1 = cljs.core.next(seq60150);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60151,seq60150__$1);
}));

website_helpers.page_graph.scale_size = (function website_helpers$page_graph$scale_size(node){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.Keyword(null,"size","size",1098693007),(function (p1__60158_SHARP_){
if((p1__60158_SHARP_ == null)){
return (20);
} else {
return Math.sqrt((p1__60158_SHARP_ / (10)));
}
}));
});
website_helpers.page_graph.assign_group = (function website_helpers$page_graph$assign_group(node){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.Keyword(null,"group","group",582596132),((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"categories","categories",178386610).cljs$core$IFn$_invoke$arity$1(node),"Recent"))?(4):(((new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(node) == null))?(1):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(node))))?(2):((((0) <= cljs.core.count(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(node))))?(3):null)))));
});
website_helpers.page_graph.strip_extension = (function website_helpers$page_graph$strip_extension(node){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(".",cljs.core.last(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(node)))){
return node;
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.Keyword(null,"name","name",1843675177),(function (p1__60159_SHARP_){
return cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__60159_SHARP_,/\./));
})),new cljs.core.Keyword(null,"path","path",-188191168),(function (p1__60160_SHARP_){
return clojure.string.replace(cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__60160_SHARP_,/\./)),/content\//,"");
})),new cljs.core.Keyword(null,"tree-path","tree-path",683503647),(function (p1__60161_SHARP_){
return cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__60161_SHARP_,/\./));
}));
}
});
website_helpers.page_graph.fix_path = (function website_helpers$page_graph$fix_path(node){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.Keyword(null,"tree-path","tree-path",683503647),(function (p1__60162_SHARP_){
return clojure.string.replace(p1__60162_SHARP_,/\/home/,"docs/");
}));
});
/**
 * Capitalize every word in a string
 */
website_helpers.page_graph.capitalize_words = (function website_helpers$page_graph$capitalize_words(s){
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.capitalize,clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),/\b/)));
});
website_helpers.page_graph.prettify_name = (function website_helpers$page_graph$prettify_name(node){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.Keyword(null,"name","name",1843675177),(function (p1__60163_SHARP_){
return website_helpers.page_graph.capitalize_words(clojure.string.replace(p1__60163_SHARP_,/-/," "));
}));
});
website_helpers.page_graph.page_tree_to_graph = (function website_helpers$page_graph$page_tree_to_graph(page_tree){
var all_subtrees = cljs.core.tree_seq(cljs.core.associative_QMARK_,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"home",new cljs.core.Keyword(null,"children","children",-940561982),page_tree,new cljs.core.Keyword(null,"idx","idx",1053688473),(0)], null));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),website_helpers.page_graph.update_nodes.cljs$core$IFn$_invoke$arity$variadic(all_subtrees,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([website_helpers.page_graph.prettify_name,website_helpers.page_graph.fix_path,website_helpers.page_graph.strip_extension,website_helpers.page_graph.scale_size,website_helpers.page_graph.assign_group], 0)),new cljs.core.Keyword(null,"links","links",-654507394),website_helpers.page_graph.get_links(all_subtrees)], null);
});
cljs.core.tree_seq(cljs.core.associative_QMARK_,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"home",new cljs.core.Keyword(null,"idx","idx",1053688473),(0),new cljs.core.Keyword(null,"children","children",-940561982),(function (){var categories = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["c",null,"a 1",null], null), null);
var notes = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,n){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(n,new cljs.core.Keyword(null,"idx","idx",1053688473),((1) + i));
}),website_helpers.notes.example_notes);
return website_helpers.notes.notes_by_category_to_children_tree(website_helpers.notes.organize_notes_by_category(notes,categories),website_helpers.notes.index_categories(categories,cljs.core.count(notes)));
})()], null));
website_helpers.page_graph.page_graph_data_simple = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Home",new cljs.core.Keyword(null,"size","size",1098693007),(5),new cljs.core.Keyword(null,"id","id",-1388402092),"Home"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Mind",new cljs.core.Keyword(null,"size","size",1098693007),(5),new cljs.core.Keyword(null,"id","id",-1388402092),"Mind"], null)], null),new cljs.core.Keyword(null,"links","links",-654507394),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"source","source",-433931539),(0),new cljs.core.Keyword(null,"target","target",253001721),(1),new cljs.core.Keyword(null,"value","value",305978217),(2)], null)], null)], null));
website_helpers.page_graph.example_page_graph_data = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(website_helpers.page_graph.page_tree_to_graph(website_helpers.page_graph.example_page_tree));
website_helpers.page_graph.page_graph = (function website_helpers$page_graph$page_graph(var_args){
var G__60165 = arguments.length;
switch (G__60165) {
case 1:
return website_helpers.page_graph.page_graph.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return website_helpers.page_graph.page_graph.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});
goog.exportSymbol('website_helpers.page_graph.page_graph', website_helpers.page_graph.page_graph);

(website_helpers.page_graph.page_graph.cljs$core$IFn$_invoke$arity$1 = (function (page_tree){
return website_helpers.page_graph.page_graph.cljs$core$IFn$_invoke$arity$2(page_tree,({}));
}));

(website_helpers.page_graph.page_graph.cljs$core$IFn$_invoke$arity$2 = (function (page_tree,options){
var page_graph_data = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(website_helpers.page_graph.page_tree_to_graph(page_tree));
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [website_helpers.graph.viz,reagent.core.track.cljs$core$IFn$_invoke$arity$variadic(website_helpers.graph.prechew,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([page_graph_data], 0)),"https://kovasap.github.io/",cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(options,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0))], null)], null);
});
}));

(website_helpers.page_graph.page_graph.cljs$lang$maxFixedArity = 2);

website_helpers.page_graph.notes_to_graph = (function website_helpers$page_graph$notes_to_graph(notes,selected_categories,all_categories){
var categories_to_show = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count(selected_categories)))?cljs.core.set(cljs.core.keys(all_categories)):selected_categories);
var idxed_notes = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,n){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(n,new cljs.core.Keyword(null,"idx","idx",1053688473),((1) + i));
}),website_helpers.notes.get_notes_for_categories(notes,selected_categories));
var categories_to_idx = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(website_helpers.notes.index_categories(categories_to_show,((1) + cljs.core.count(idxed_notes))),"Home",(0));
var category_to_node = (function (c){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),c,new cljs.core.Keyword(null,"idx","idx",1053688473),cljs.core.get.cljs$core$IFn$_invoke$arity$2(categories_to_idx,c),new cljs.core.Keyword(null,"path","path",-188191168),["?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c),"=true"].join(''),new cljs.core.Keyword(null,"tree-path","tree-path",683503647),"",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)], null);
});
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),website_helpers.page_graph.update_nodes.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"home",new cljs.core.Keyword(null,"idx","idx",1053688473),(0),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1)], null)], null)], null),idxed_notes,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2(category_to_node,categories_to_show)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([website_helpers.page_graph.prettify_name,website_helpers.page_graph.fix_path,website_helpers.page_graph.strip_extension,website_helpers.page_graph.scale_size,website_helpers.page_graph.assign_group], 0)),new cljs.core.Keyword(null,"links","links",-654507394),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(website_helpers.page_graph.get_category_links(idxed_notes,categories_to_idx),(function (){var iter__5523__auto__ = (function website_helpers$page_graph$notes_to_graph_$_iter__60166(s__60167){
return (new cljs.core.LazySeq(null,(function (){
var s__60167__$1 = s__60167;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__60167__$1);
if(temp__5823__auto__){
var s__60167__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60167__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__60167__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__60169 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__60168 = (0);
while(true){
if((i__60168 < size__5522__auto__)){
var vec__60170 = cljs.core._nth(c__5521__auto__,i__60168);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60170,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60170,(1),null);
cljs.core.chunk_append(b__60169,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"source","source",-433931539),(0),new cljs.core.Keyword(null,"target","target",253001721),i,new cljs.core.Keyword(null,"value","value",305978217),(3)], null));

var G__60193 = (i__60168 + (1));
i__60168 = G__60193;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60169),website_helpers$page_graph$notes_to_graph_$_iter__60166(cljs.core.chunk_rest(s__60167__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60169),null);
}
} else {
var vec__60173 = cljs.core.first(s__60167__$2);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60173,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60173,(1),null);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"source","source",-433931539),(0),new cljs.core.Keyword(null,"target","target",253001721),i,new cljs.core.Keyword(null,"value","value",305978217),(3)], null),website_helpers$page_graph$notes_to_graph_$_iter__60166(cljs.core.rest(s__60167__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(categories_to_idx);
})())], null);
});
website_helpers.page_graph.page_graph_from_notes = (function website_helpers$page_graph$page_graph_from_notes(var_args){
var G__60177 = arguments.length;
switch (G__60177) {
case 1:
return website_helpers.page_graph.page_graph_from_notes.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return website_helpers.page_graph.page_graph_from_notes.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});
goog.exportSymbol('website_helpers.page_graph.page_graph_from_notes', website_helpers.page_graph.page_graph_from_notes);

(website_helpers.page_graph.page_graph_from_notes.cljs$core$IFn$_invoke$arity$1 = (function (notes){
return website_helpers.page_graph.page_graph_from_notes.cljs$core$IFn$_invoke$arity$2(notes,({}));
}));

(website_helpers.page_graph.page_graph_from_notes.cljs$core$IFn$_invoke$arity$2 = (function (notes,options){
return (function (){
var all_categories = website_helpers.utils.get_url_param_selections(cljs.core.set(cljs.core.keys(website_helpers.notes.filter_category_selections(notes))),website_helpers.global.url_params);
var page_graph_data = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(website_helpers.page_graph.notes_to_graph(notes,website_helpers.utils.get_selected_vars(all_categories),all_categories));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [website_helpers.graph.viz,reagent.core.track.cljs$core$IFn$_invoke$arity$variadic(website_helpers.graph.prechew,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([page_graph_data], 0)),"https://kovasap.github.io/",cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(options,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0))], null)], null);
});
}));

(website_helpers.page_graph.page_graph_from_notes.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=website_helpers.page_graph.js.map
