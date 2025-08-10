goog.provide('website_helpers.graph');
website_helpers.graph.is_branch_node_QMARK_ = (function website_helpers$graph$is_branch_node_QMARK_(node){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),node.group)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),node.group)));
});
website_helpers.graph.is_distinguished_node_QMARK_ = (function website_helpers$graph$is_distinguished_node_QMARK_(node){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((4),node.group)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((5),node.group)));
});
website_helpers.graph.create_sim = (function website_helpers$graph$create_sim(viz_state){
var map__54274 = cljs.core.deref(viz_state);
var map__54274__$1 = cljs.core.__destructure_map(map__54274);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54274__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54274__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var center_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54274__$1,new cljs.core.Keyword(null,"center-x","center-x",2109659472));
var center_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54274__$1,new cljs.core.Keyword(null,"center-y","center-y",-233780987));
var G__54275 = d3.forceSimulation();
G__54275.stop();

G__54275.force("link",d3.forceLink().strength(0.08).id((function (p1__54260_SHARP_){
return p1__54260_SHARP_.index;
})));

G__54275.force("charge",d3.forceManyBody().strength((-70)));

G__54275.force("center",d3.forceCenter(center_x,center_y).strength(1.1));

G__54275.force("radial-categories",d3.forceRadial((150),center_x,center_y).strength((function (p1__54261_SHARP_){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),p1__54261_SHARP_.group)) && ((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("legend",p1__54261_SHARP_.label)))))){
return 0.03;
} else {
return (0);
}
})));

G__54275.force("radial-leaves",d3.forceRadial((500),center_x,center_y).strength((function (p1__54262_SHARP_){
if((((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),p1__54262_SHARP_.group)))) && ((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("legend",p1__54262_SHARP_.label)))))){
return 0.02;
} else {
return (0);
}
})));

G__54275.force("collide",d3.forceCollide((function (p1__54263_SHARP_){
if(website_helpers.graph.is_distinguished_node_QMARK_(p1__54263_SHARP_)){
return (70);
} else {
return (35);
}
})).strength(1.1));

G__54275.force("legendx",d3.forceX((0.5 * center_x)).strength((function (p1__54264_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("legend",p1__54264_SHARP_.label)){
return 0.2;
} else {
return (0);
}
})));

G__54275.force("legendy",d3.forceY((0.5 * center_y)).strength((function (p1__54265_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("legend",p1__54265_SHARP_.label)){
return 0.2;
} else {
return (0);
}
})));

G__54275.force("legendnodex",d3.forceX((0)).strength((function (p1__54266_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Legend",p1__54266_SHARP_.name)){
return 0.3;
} else {
return (0);
}
})));

G__54275.on("tick",(function (){
var temp__5825__auto___54300 = new cljs.core.Keyword(null,"links-sel","links-sel",1725983752).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(viz_state));
if(cljs.core.truth_(temp__5825__auto___54300)){
var s_54301 = temp__5825__auto___54300;
rid3.attrs.attrs(s_54301,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x1","x1",-1863922247),(function (p1__54267_SHARP_){
return p1__54267_SHARP_.source.x;
}),new cljs.core.Keyword(null,"y1","y1",589123466),(function (p1__54268_SHARP_){
return p1__54268_SHARP_.source.y;
}),new cljs.core.Keyword(null,"x2","x2",-1362513475),(function (p1__54269_SHARP_){
return p1__54269_SHARP_.target.x;
}),new cljs.core.Keyword(null,"y2","y2",-718691301),(function (p1__54270_SHARP_){
return p1__54270_SHARP_.target.y;
})], null));
} else {
}

var temp__5825__auto__ = new cljs.core.Keyword(null,"nodes-sel","nodes-sel",1504179930).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(viz_state));
if(cljs.core.truth_(temp__5825__auto__)){
var s = temp__5825__auto__;
return rid3.attrs.attrs(s,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"transform","transform",1381301764),(function (p1__54271_SHARP_){
return ["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__54271_SHARP_.x),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__54271_SHARP_.y),")"].join('');
}),new cljs.core.Keyword(null,"x","x",2099068185),(function (p1__54272_SHARP_){
return p1__54272_SHARP_.x;
}),new cljs.core.Keyword(null,"y","y",-1757859776),(function (p1__54273_SHARP_){
return p1__54273_SHARP_.y;
})], null));
} else {
return null;
}
}));

return G__54275;
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
var seq__54276_54302 = cljs.core.seq(new$);
var chunk__54277_54303 = null;
var count__54278_54304 = (0);
var i__54279_54305 = (0);
while(true){
if((i__54279_54305 < count__54278_54304)){
var n_54306 = chunk__54277_54303.cljs$core$IIndexed$_nth$arity$2(null,i__54279_54305);
var temp__5825__auto___54307 = (orig[(function (){var G__54282 = (id.cljs$core$IFn$_invoke$arity$1 ? id.cljs$core$IFn$_invoke$arity$1(n_54306) : id.call(null,n_54306));
return (orig_map.cljs$core$IFn$_invoke$arity$1 ? orig_map.cljs$core$IFn$_invoke$arity$1(G__54282) : orig_map.call(null,G__54282));
})()]);
if(cljs.core.truth_(temp__5825__auto___54307)){
var old_54308 = temp__5825__auto___54307;
var temp__5825__auto___54309__$1 = old_54308.x;
if(cljs.core.truth_(temp__5825__auto___54309__$1)){
var x_54310 = temp__5825__auto___54309__$1;
(n_54306.x = x_54310);
} else {
}

var temp__5825__auto___54311__$1 = old_54308.y;
if(cljs.core.truth_(temp__5825__auto___54311__$1)){
var y_54312 = temp__5825__auto___54311__$1;
(n_54306.y = y_54312);
} else {
}

var temp__5825__auto___54313__$1 = old_54308.vx;
if(cljs.core.truth_(temp__5825__auto___54313__$1)){
var vx_54314 = temp__5825__auto___54313__$1;
(n_54306.vx = vx_54314);
} else {
}

var temp__5825__auto___54315__$1 = old_54308.vy;
if(cljs.core.truth_(temp__5825__auto___54315__$1)){
var vy_54316 = temp__5825__auto___54315__$1;
(n_54306.vy = vy_54316);
} else {
}

var temp__5825__auto___54317__$1 = old_54308.fx;
if(cljs.core.truth_(temp__5825__auto___54317__$1)){
var fx_54318 = temp__5825__auto___54317__$1;
(n_54306.fx = fx_54318);
} else {
}

var temp__5825__auto___54319__$1 = old_54308.fy;
if(cljs.core.truth_(temp__5825__auto___54319__$1)){
var fy_54320 = temp__5825__auto___54319__$1;
(n_54306.fy = fy_54320);
} else {
}
} else {
}


var G__54321 = seq__54276_54302;
var G__54322 = chunk__54277_54303;
var G__54323 = count__54278_54304;
var G__54324 = (i__54279_54305 + (1));
seq__54276_54302 = G__54321;
chunk__54277_54303 = G__54322;
count__54278_54304 = G__54323;
i__54279_54305 = G__54324;
continue;
} else {
var temp__5825__auto___54325 = cljs.core.seq(seq__54276_54302);
if(temp__5825__auto___54325){
var seq__54276_54326__$1 = temp__5825__auto___54325;
if(cljs.core.chunked_seq_QMARK_(seq__54276_54326__$1)){
var c__5568__auto___54327 = cljs.core.chunk_first(seq__54276_54326__$1);
var G__54328 = cljs.core.chunk_rest(seq__54276_54326__$1);
var G__54329 = c__5568__auto___54327;
var G__54330 = cljs.core.count(c__5568__auto___54327);
var G__54331 = (0);
seq__54276_54302 = G__54328;
chunk__54277_54303 = G__54329;
count__54278_54304 = G__54330;
i__54279_54305 = G__54331;
continue;
} else {
var n_54332 = cljs.core.first(seq__54276_54326__$1);
var temp__5825__auto___54333__$1 = (orig[(function (){var G__54283 = (id.cljs$core$IFn$_invoke$arity$1 ? id.cljs$core$IFn$_invoke$arity$1(n_54332) : id.call(null,n_54332));
return (orig_map.cljs$core$IFn$_invoke$arity$1 ? orig_map.cljs$core$IFn$_invoke$arity$1(G__54283) : orig_map.call(null,G__54283));
})()]);
if(cljs.core.truth_(temp__5825__auto___54333__$1)){
var old_54334 = temp__5825__auto___54333__$1;
var temp__5825__auto___54335__$2 = old_54334.x;
if(cljs.core.truth_(temp__5825__auto___54335__$2)){
var x_54336 = temp__5825__auto___54335__$2;
(n_54332.x = x_54336);
} else {
}

var temp__5825__auto___54337__$2 = old_54334.y;
if(cljs.core.truth_(temp__5825__auto___54337__$2)){
var y_54338 = temp__5825__auto___54337__$2;
(n_54332.y = y_54338);
} else {
}

var temp__5825__auto___54339__$2 = old_54334.vx;
if(cljs.core.truth_(temp__5825__auto___54339__$2)){
var vx_54340 = temp__5825__auto___54339__$2;
(n_54332.vx = vx_54340);
} else {
}

var temp__5825__auto___54341__$2 = old_54334.vy;
if(cljs.core.truth_(temp__5825__auto___54341__$2)){
var vy_54342 = temp__5825__auto___54341__$2;
(n_54332.vy = vy_54342);
} else {
}

var temp__5825__auto___54343__$2 = old_54334.fx;
if(cljs.core.truth_(temp__5825__auto___54343__$2)){
var fx_54344 = temp__5825__auto___54343__$2;
(n_54332.fx = fx_54344);
} else {
}

var temp__5825__auto___54345__$2 = old_54334.fy;
if(cljs.core.truth_(temp__5825__auto___54345__$2)){
var fy_54346 = temp__5825__auto___54345__$2;
(n_54332.fy = fy_54346);
} else {
}
} else {
}


var G__54347 = cljs.core.next(seq__54276_54326__$1);
var G__54348 = null;
var G__54349 = (0);
var G__54350 = (0);
seq__54276_54302 = G__54347;
chunk__54277_54303 = G__54348;
count__54278_54304 = G__54349;
i__54279_54305 = G__54350;
continue;
}
} else {
}
}
break;
}

return new$;
});
website_helpers.graph.update_sim_BANG_ = (function website_helpers$graph$update_sim_BANG_(sim,alpha_target,p__54285){
var map__54286 = p__54285;
var map__54286__$1 = cljs.core.__destructure_map(map__54286);
var links = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54286__$1,new cljs.core.Keyword(null,"links","links",-654507394));
var nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54286__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var old_nodes = sim.nodes();
var new_nodes = website_helpers.graph.merge_nodes(old_nodes,nodes,(function (p1__54284_SHARP_){
return p1__54284_SHARP_.name;
}));
var G__54287 = sim;
G__54287.nodes(new_nodes);

G__54287.force("link").links(links);

G__54287.alpha(alpha_target);

G__54287.restart();

return G__54287;
});
website_helpers.graph.get_clj = (function website_helpers$graph$get_clj(node){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(node,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
});
website_helpers.graph.viz = (function website_helpers$graph$viz(graph_data,base_link,state_override_map){
var ratom = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(graph_data);
var viz_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"width","width",-384071477),(2000),new cljs.core.Keyword(null,"height","height",1025178622),(1500),new cljs.core.Keyword(null,"center-x","center-x",2109659472),(1000),new cljs.core.Keyword(null,"center-y","center-y",-233780987),(750),new cljs.core.Keyword(null,"initial-alpha","initial-alpha",-515968256),(4),new cljs.core.Keyword(null,"hover-text-sel","hover-text-sel",-1797118521),null,new cljs.core.Keyword(null,"links-sel","links-sel",1725983752),null,new cljs.core.Keyword(null,"nodes-sel","nodes-sel",1504179930),null], null),state_override_map], 0)));
var sim = website_helpers.graph.create_sim(viz_state);
var drag = website_helpers.graph.create_drag(sim);
var group_color = d3.scaleOrdinal(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#ff7f00","#377eb8","#4daf4a","#ffff00","#984ea3"], null));
var category_color = d3.scaleOrdinal(d3.schemeCategory10);
var add_circle = (function (sel){
return rid3.attrs.attrs(sel.append("ellipse"),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#000",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),1.5,new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159),(function (p1__54288_SHARP_){
return new cljs.core.Keyword(null,"stroke-opacity-mod","stroke-opacity-mod",1678567237).cljs$core$IFn$_invoke$arity$1(website_helpers.graph.get_clj(p1__54288_SHARP_));
}),new cljs.core.Keyword(null,"rx","rx",1627208482),(function (p1__54289_SHARP_){
return (((website_helpers.graph.is_branch_node_QMARK_(p1__54289_SHARP_))?1.3:(1)) * ((15) + ((3) * cljs.core.count(p1__54289_SHARP_.name))));
}),new cljs.core.Keyword(null,"ry","ry",-334598563),(function (p1__54290_SHARP_){
return (((website_helpers.graph.is_branch_node_QMARK_(p1__54290_SHARP_))?1.3:(1)) * ((function (){var x__5130__auto__ = (25);
var y__5131__auto__ = p1__54290_SHARP_.size;
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})() / 1.8));
}),new cljs.core.Keyword(null,"fill","fill",883462889),(function (p1__54291_SHARP_){
var G__54298 = p1__54291_SHARP_.group;
return (group_color.cljs$core$IFn$_invoke$arity$1 ? group_color.cljs$core$IFn$_invoke$arity$1(G__54298) : group_color.call(null,G__54298));
}),new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),(function (p1__54292_SHARP_){
return (0.6 * new cljs.core.Keyword(null,"opacity-mod","opacity-mod",1105734118).cljs$core$IFn$_invoke$arity$1(website_helpers.graph.get_clj(p1__54292_SHARP_)));
})], null));
});
var add_text = (function (sel){
return rid3.attrs.attrs(sel.append("text"),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696),"middle",new cljs.core.Keyword(null,"opacity","opacity",397153780),(function (p1__54293_SHARP_){
return (1.0 * new cljs.core.Keyword(null,"opacity-mod","opacity-mod",1105734118).cljs$core$IFn$_invoke$arity$1(website_helpers.graph.get_clj(p1__54293_SHARP_)));
}),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(function (p1__54294_SHARP_){
if(website_helpers.graph.is_branch_node_QMARK_(p1__54294_SHARP_)){
return "med";
} else {
return "small";
}
}),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),(function (p1__54295_SHARP_){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((4),p1__54295_SHARP_.group)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((5),p1__54295_SHARP_.group)))){
return "bold";
} else {
return "normal";
}
}),new cljs.core.Keyword(null,"y","y",-1757859776),(5)], null)).text((function (p1__54296_SHARP_){
return p1__54296_SHARP_.name;
}));
});
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rid3.core.viz,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"force-graph",new cljs.core.Keyword(null,"ratom","ratom",-126521267),ratom,new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (svg,ratom__$1){
var map__54299 = cljs.core.deref(viz_state);
var map__54299__$1 = cljs.core.__destructure_map(map__54299);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54299__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54299__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var initial_alpha = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54299__$1,new cljs.core.Keyword(null,"initial-alpha","initial-alpha",-515968256));
rid3.attrs.attrs(svg,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),[(0),(0),width,height]], null));

return website_helpers.graph.update_sim_BANG_(sim,initial_alpha,cljs.core.deref(ratom__$1));
}),new cljs.core.Keyword(null,"did-update","did-update",-2143702256),(function (svg,ratom__$1){
return website_helpers.graph.update_sim_BANG_(sim,0.5,cljs.core.deref(ratom__$1));
})], null),new cljs.core.Keyword(null,"pieces","pieces",-1436634023),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"elem-with-data","elem-with-data",-1845237220),new cljs.core.Keyword(null,"class","class",-2030961996),"links",new cljs.core.Keyword(null,"tag","tag",-1290361223),"line",new cljs.core.Keyword(null,"prepare-dataset","prepare-dataset",1819340010),(function (ratom__$1){
return new cljs.core.Keyword(null,"links","links",-654507394).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ratom__$1));
}),new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (sel,_ratom){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(viz_state,cljs.core.assoc,new cljs.core.Keyword(null,"links-sel","links-sel",1725983752),sel);

return rid3.attrs.attrs(sel,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#999",new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159),0.6,new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(function (p1__54297_SHARP_){
return (Math.sqrt(p1__54297_SHARP_.value) / (2));
})], null));
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"elem-with-data","elem-with-data",-1845237220),new cljs.core.Keyword(null,"class","class",-2030961996),"nodes",new cljs.core.Keyword(null,"tag","tag",-1290361223),"g",new cljs.core.Keyword(null,"prepare-dataset","prepare-dataset",1819340010),(function (ratom__$1){
return new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ratom__$1));
}),new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (sel,_ratom){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(viz_state,cljs.core.assoc,new cljs.core.Keyword(null,"nodes-sel","nodes-sel",1504179930),sel);

add_circle(sel);

add_text(sel);

return sel.on("dblclick",(function (_event,node){
return window.open([cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_link),clojure.string.replace(node.path,/ /,"+")].join(''));
})).call(drag);
})], null)], null)], null)], null);
});

//# sourceMappingURL=website_helpers.graph.js.map
