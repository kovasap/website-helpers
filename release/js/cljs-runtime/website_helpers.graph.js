goog.provide('website_helpers.graph');
/**
 * Turns hiccup like syntax into an HTML string.
 */
website_helpers.graph.html = (function website_helpers$graph$html(hiccup){
return sablono.server.render_static(sablono.interpreter.interpret(hiccup));
});
website_helpers.graph.create_sim = (function website_helpers$graph$create_sim(viz_state){
var map__54013 = cljs.core.deref(viz_state);
var map__54013__$1 = cljs.core.__destructure_map(map__54013);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54013__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54013__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var G__54014 = d3.forceSimulation();
G__54014.stop();

G__54014.force("link",d3.forceLink().strength(0.1).id((function (p1__54005_SHARP_){
return p1__54005_SHARP_.index;
})));

G__54014.force("charge",d3.forceManyBody().strength((-100)));

G__54014.force("center",d3.forceCenter((width / (2)),(height / (2))));

G__54014.on("tick",(function (){
var temp__5753__auto___54034 = new cljs.core.Keyword(null,"links-sel","links-sel",1725983752).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(viz_state));
if(cljs.core.truth_(temp__5753__auto___54034)){
var s_54035 = temp__5753__auto___54034;
rid3.attrs.attrs(s_54035,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x1","x1",-1863922247),(function (p1__54006_SHARP_){
return p1__54006_SHARP_.source.x;
}),new cljs.core.Keyword(null,"y1","y1",589123466),(function (p1__54007_SHARP_){
return p1__54007_SHARP_.source.y;
}),new cljs.core.Keyword(null,"x2","x2",-1362513475),(function (p1__54008_SHARP_){
return p1__54008_SHARP_.target.x;
}),new cljs.core.Keyword(null,"y2","y2",-718691301),(function (p1__54009_SHARP_){
return p1__54009_SHARP_.target.y;
})], null));
} else {
}

var temp__5753__auto__ = new cljs.core.Keyword(null,"nodes-sel","nodes-sel",1504179930).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(viz_state));
if(cljs.core.truth_(temp__5753__auto__)){
var s = temp__5753__auto__;
return rid3.attrs.attrs(s,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"transform","transform",1381301764),(function (p1__54010_SHARP_){
return ["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__54010_SHARP_.x),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__54010_SHARP_.y),")"].join('');
}),new cljs.core.Keyword(null,"x","x",2099068185),(function (p1__54011_SHARP_){
return p1__54011_SHARP_.x;
}),new cljs.core.Keyword(null,"y","y",-1757859776),(function (p1__54012_SHARP_){
return p1__54012_SHARP_.y;
})], null));
} else {
return null;
}
}));

return G__54014;
});
website_helpers.graph.create_drag = (function website_helpers$graph$create_drag(sim){
return d3.drag().on("start",(function website_helpers$graph$create_drag_$_started(event,d,_){
if((event.active === (0))){
sim.alphaTarget(0.3).restart();
} else {
}

(d.fx = d.x);

return (d.fy = d.y);
})).on("drag",(function website_helpers$graph$create_drag_$_dragged(event,d,_){
(d.fx = event.x);

return (d.fy = event.y);
})).on("end",(function website_helpers$graph$create_drag_$_ended(event,d,_){
if((event.active === (0))){
sim.alphaTarget((0));
} else {
}

(d.fx = null);

return (d.fy = null);
}));
});
website_helpers.graph.merge_nodes = (function website_helpers$graph$merge_nodes(orig,new$,id){
var orig_map = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,n){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(id.cljs$core$IFn$_invoke$arity$1 ? id.cljs$core$IFn$_invoke$arity$1(n) : id.call(null,n)),i], null);
}),orig));
var seq__54015_54036 = cljs.core.seq(new$);
var chunk__54016_54037 = null;
var count__54017_54038 = (0);
var i__54018_54039 = (0);
while(true){
if((i__54018_54039 < count__54017_54038)){
var n_54040 = chunk__54016_54037.cljs$core$IIndexed$_nth$arity$2(null,i__54018_54039);
var temp__5753__auto___54041 = (orig[(function (){var G__54021 = (id.cljs$core$IFn$_invoke$arity$1 ? id.cljs$core$IFn$_invoke$arity$1(n_54040) : id.call(null,n_54040));
return (orig_map.cljs$core$IFn$_invoke$arity$1 ? orig_map.cljs$core$IFn$_invoke$arity$1(G__54021) : orig_map.call(null,G__54021));
})()]);
if(cljs.core.truth_(temp__5753__auto___54041)){
var old_54042 = temp__5753__auto___54041;
var temp__5753__auto___54043__$1 = old_54042.x;
if(cljs.core.truth_(temp__5753__auto___54043__$1)){
var x_54044 = temp__5753__auto___54043__$1;
(n_54040.x = x_54044);
} else {
}

var temp__5753__auto___54045__$1 = old_54042.y;
if(cljs.core.truth_(temp__5753__auto___54045__$1)){
var y_54046 = temp__5753__auto___54045__$1;
(n_54040.y = y_54046);
} else {
}

var temp__5753__auto___54047__$1 = old_54042.vx;
if(cljs.core.truth_(temp__5753__auto___54047__$1)){
var vx_54048 = temp__5753__auto___54047__$1;
(n_54040.vx = vx_54048);
} else {
}

var temp__5753__auto___54049__$1 = old_54042.vy;
if(cljs.core.truth_(temp__5753__auto___54049__$1)){
var vy_54050 = temp__5753__auto___54049__$1;
(n_54040.vy = vy_54050);
} else {
}

var temp__5753__auto___54051__$1 = old_54042.fx;
if(cljs.core.truth_(temp__5753__auto___54051__$1)){
var fx_54052 = temp__5753__auto___54051__$1;
(n_54040.fx = fx_54052);
} else {
}

var temp__5753__auto___54053__$1 = old_54042.fy;
if(cljs.core.truth_(temp__5753__auto___54053__$1)){
var fy_54054 = temp__5753__auto___54053__$1;
(n_54040.fy = fy_54054);
} else {
}
} else {
}


var G__54055 = seq__54015_54036;
var G__54056 = chunk__54016_54037;
var G__54057 = count__54017_54038;
var G__54058 = (i__54018_54039 + (1));
seq__54015_54036 = G__54055;
chunk__54016_54037 = G__54056;
count__54017_54038 = G__54057;
i__54018_54039 = G__54058;
continue;
} else {
var temp__5753__auto___54059 = cljs.core.seq(seq__54015_54036);
if(temp__5753__auto___54059){
var seq__54015_54060__$1 = temp__5753__auto___54059;
if(cljs.core.chunked_seq_QMARK_(seq__54015_54060__$1)){
var c__4679__auto___54061 = cljs.core.chunk_first(seq__54015_54060__$1);
var G__54062 = cljs.core.chunk_rest(seq__54015_54060__$1);
var G__54063 = c__4679__auto___54061;
var G__54064 = cljs.core.count(c__4679__auto___54061);
var G__54065 = (0);
seq__54015_54036 = G__54062;
chunk__54016_54037 = G__54063;
count__54017_54038 = G__54064;
i__54018_54039 = G__54065;
continue;
} else {
var n_54066 = cljs.core.first(seq__54015_54060__$1);
var temp__5753__auto___54067__$1 = (orig[(function (){var G__54022 = (id.cljs$core$IFn$_invoke$arity$1 ? id.cljs$core$IFn$_invoke$arity$1(n_54066) : id.call(null,n_54066));
return (orig_map.cljs$core$IFn$_invoke$arity$1 ? orig_map.cljs$core$IFn$_invoke$arity$1(G__54022) : orig_map.call(null,G__54022));
})()]);
if(cljs.core.truth_(temp__5753__auto___54067__$1)){
var old_54068 = temp__5753__auto___54067__$1;
var temp__5753__auto___54069__$2 = old_54068.x;
if(cljs.core.truth_(temp__5753__auto___54069__$2)){
var x_54070 = temp__5753__auto___54069__$2;
(n_54066.x = x_54070);
} else {
}

var temp__5753__auto___54072__$2 = old_54068.y;
if(cljs.core.truth_(temp__5753__auto___54072__$2)){
var y_54073 = temp__5753__auto___54072__$2;
(n_54066.y = y_54073);
} else {
}

var temp__5753__auto___54074__$2 = old_54068.vx;
if(cljs.core.truth_(temp__5753__auto___54074__$2)){
var vx_54075 = temp__5753__auto___54074__$2;
(n_54066.vx = vx_54075);
} else {
}

var temp__5753__auto___54076__$2 = old_54068.vy;
if(cljs.core.truth_(temp__5753__auto___54076__$2)){
var vy_54077 = temp__5753__auto___54076__$2;
(n_54066.vy = vy_54077);
} else {
}

var temp__5753__auto___54078__$2 = old_54068.fx;
if(cljs.core.truth_(temp__5753__auto___54078__$2)){
var fx_54079 = temp__5753__auto___54078__$2;
(n_54066.fx = fx_54079);
} else {
}

var temp__5753__auto___54080__$2 = old_54068.fy;
if(cljs.core.truth_(temp__5753__auto___54080__$2)){
var fy_54081 = temp__5753__auto___54080__$2;
(n_54066.fy = fy_54081);
} else {
}
} else {
}


var G__54082 = cljs.core.next(seq__54015_54060__$1);
var G__54083 = null;
var G__54084 = (0);
var G__54085 = (0);
seq__54015_54036 = G__54082;
chunk__54016_54037 = G__54083;
count__54017_54038 = G__54084;
i__54018_54039 = G__54085;
continue;
}
} else {
}
}
break;
}

return new$;
});
website_helpers.graph.update_sim_BANG_ = (function website_helpers$graph$update_sim_BANG_(sim,alpha_target,p__54024){
var map__54025 = p__54024;
var map__54025__$1 = cljs.core.__destructure_map(map__54025);
var links = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54025__$1,new cljs.core.Keyword(null,"links","links",-654507394));
var nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54025__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var old_nodes = sim.nodes();
var new_nodes = website_helpers.graph.merge_nodes(old_nodes,nodes,(function (p1__54023_SHARP_){
return p1__54023_SHARP_.name;
}));
var G__54026 = sim;
G__54026.nodes(new_nodes);

G__54026.force("link").links(links);

G__54026.alpha(alpha_target);

G__54026.restart();

return G__54026;
});
website_helpers.graph.viz = (function website_helpers$graph$viz(ratom,base_link){
var viz_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",-384071477),(1000),new cljs.core.Keyword(null,"height","height",1025178622),(1000),new cljs.core.Keyword(null,"hover-text-sel","hover-text-sel",-1797118521),null,new cljs.core.Keyword(null,"links-sel","links-sel",1725983752),null,new cljs.core.Keyword(null,"nodes-sel","nodes-sel",1504179930),null], null));
var sim = website_helpers.graph.create_sim(viz_state);
var drag = website_helpers.graph.create_drag(sim);
var color = d3.scaleOrdinal(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#377eb8","#4daf4a","#984ea3","#ff7f00"], null));
var add_circle = (function (sel){
return rid3.attrs.attrs(sel.append("ellipse"),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#fff",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),1.5,new cljs.core.Keyword(null,"rx","rx",1627208482),(function (p1__54027_SHARP_){
return ((5) * cljs.core.count(p1__54027_SHARP_.name));
}),new cljs.core.Keyword(null,"ry","ry",-334598563),(function (p1__54028_SHARP_){
var x__4336__auto__ = (25);
var y__4337__auto__ = p1__54028_SHARP_.size;
return ((x__4336__auto__ > y__4337__auto__) ? x__4336__auto__ : y__4337__auto__);
}),new cljs.core.Keyword(null,"fill","fill",883462889),(function (p1__54029_SHARP_){
var G__54032 = p1__54029_SHARP_.group;
return (color.cljs$core$IFn$_invoke$arity$1 ? color.cljs$core$IFn$_invoke$arity$1(G__54032) : color.call(null,G__54032));
}),new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),0.7], null));
});
var add_text = (function (sel){
return rid3.attrs.attrs(sel.append("text"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696),"middle"], null)).text((function (p1__54030_SHARP_){
return p1__54030_SHARP_.name;
}));
});
return (function (ratom__$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rid3.core.viz,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"force-graph",new cljs.core.Keyword(null,"ratom","ratom",-126521267),ratom__$1,new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (svg,ratom__$2){
var map__54033_54086 = cljs.core.deref(viz_state);
var map__54033_54087__$1 = cljs.core.__destructure_map(map__54033_54086);
var width_54088 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54033_54087__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height_54089 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54033_54087__$1,new cljs.core.Keyword(null,"height","height",1025178622));
rid3.attrs.attrs(svg,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),width_54088,new cljs.core.Keyword(null,"height","height",1025178622),height_54089,new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),[(0),(0),width_54088,height_54089]], null));

return website_helpers.graph.update_sim_BANG_(sim,(1),cljs.core.deref(ratom__$2));
}),new cljs.core.Keyword(null,"did-update","did-update",-2143702256),(function (svg,ratom__$2){
return website_helpers.graph.update_sim_BANG_(sim,0.3,cljs.core.deref(ratom__$2));
})], null),new cljs.core.Keyword(null,"pieces","pieces",-1436634023),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"elem-with-data","elem-with-data",-1845237220),new cljs.core.Keyword(null,"class","class",-2030961996),"links",new cljs.core.Keyword(null,"tag","tag",-1290361223),"line",new cljs.core.Keyword(null,"prepare-dataset","prepare-dataset",1819340010),(function (ratom__$2){
return new cljs.core.Keyword(null,"links","links",-654507394).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ratom__$2));
}),new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (sel,_ratom){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(viz_state,cljs.core.assoc,new cljs.core.Keyword(null,"links-sel","links-sel",1725983752),sel);

return rid3.attrs.attrs(sel,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#999",new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159),0.6,new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(function (p1__54031_SHARP_){
return Math.sqrt(p1__54031_SHARP_.value);
})], null));
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"elem-with-data","elem-with-data",-1845237220),new cljs.core.Keyword(null,"class","class",-2030961996),"nodes",new cljs.core.Keyword(null,"tag","tag",-1290361223),"g",new cljs.core.Keyword(null,"prepare-dataset","prepare-dataset",1819340010),(function (ratom__$2){
return new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ratom__$2));
}),new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (sel,_ratom){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(viz_state,cljs.core.assoc,new cljs.core.Keyword(null,"nodes-sel","nodes-sel",1504179930),sel);

add_circle(sel);

add_text(sel);

return sel.on("dblclick",(function (_event,node){
return window.open([cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_link),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node.path)].join(''));
})).call(drag);
})], null)], null)], null)], null);
});
});
website_helpers.graph.prechew = (function website_helpers$graph$prechew(app_state){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(app_state),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),cljs.core.clj__GT_js),new cljs.core.Keyword(null,"links","links",-654507394),cljs.core.clj__GT_js);
});

//# sourceMappingURL=website_helpers.graph.js.map
