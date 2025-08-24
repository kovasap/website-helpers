goog.provide('website_helpers.graph');
website_helpers.graph.is_branch_node_QMARK_ = (function website_helpers$graph$is_branch_node_QMARK_(node){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),node.group)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),node.group)));
});
website_helpers.graph.is_distinguished_node_QMARK_ = (function website_helpers$graph$is_distinguished_node_QMARK_(node){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((4),node.group)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((5),node.group)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((6),node.group)))));
});
website_helpers.graph.node_name_length_to_multiline = (30);
website_helpers.graph.should_multiline_node_QMARK_ = (function website_helpers$graph$should_multiline_node_QMARK_(node){
return (website_helpers.graph.node_name_length_to_multiline < cljs.core.count(node.name));
});
website_helpers.graph.create_sim = (function website_helpers$graph$create_sim(viz_state){
var map__49855 = cljs.core.deref(viz_state);
var map__49855__$1 = cljs.core.__destructure_map(map__49855);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49855__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49855__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var center_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49855__$1,new cljs.core.Keyword(null,"center-x","center-x",2109659472));
var center_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49855__$1,new cljs.core.Keyword(null,"center-y","center-y",-233780987));
var G__49856 = d3.forceSimulation();
G__49856.stop();

G__49856.force("link",d3.forceLink().strength(0.06).id((function (p1__49841_SHARP_){
return p1__49841_SHARP_.index;
})));

G__49856.force("charge",d3.forceManyBody().strength((-70)));

G__49856.force("center",d3.forceCenter(center_x,center_y).strength(1.1));

G__49856.force("radial-categories",d3.forceRadial((150),center_x,center_y).strength((function (p1__49842_SHARP_){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),p1__49842_SHARP_.group)) && ((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("legend",p1__49842_SHARP_.label)))))){
return 0.03;
} else {
return (0);
}
})));

G__49856.force("radial-leaves",d3.forceRadial((500),center_x,center_y).strength((function (p1__49843_SHARP_){
if((((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),p1__49843_SHARP_.group)))) && ((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("legend",p1__49843_SHARP_.label)))))){
return 0.02;
} else {
return (0);
}
})));

G__49856.force("collide",d3.forceCollide((function (p1__49844_SHARP_){
return (((website_helpers.graph.is_distinguished_node_QMARK_(p1__49844_SHARP_))?1.2:(1)) * ((website_helpers.graph.should_multiline_node_QMARK_(p1__49844_SHARP_))?(50):(35)));
})).strength(1.1));

G__49856.force("legendx",d3.forceX((0.5 * center_x)).strength((function (p1__49845_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("legend",p1__49845_SHARP_.label)){
return 0.2;
} else {
return (0);
}
})));

G__49856.force("legendy",d3.forceY((0.5 * center_y)).strength((function (p1__49846_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("legend",p1__49846_SHARP_.label)){
return 0.2;
} else {
return (0);
}
})));

G__49856.force("legendnodex",d3.forceX((0)).strength((function (p1__49847_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Legend",p1__49847_SHARP_.name)){
return 0.3;
} else {
return (0);
}
})));

G__49856.on("tick",(function (){
var temp__5825__auto___49881 = new cljs.core.Keyword(null,"links-sel","links-sel",1725983752).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(viz_state));
if(cljs.core.truth_(temp__5825__auto___49881)){
var s_49882 = temp__5825__auto___49881;
rid3.attrs.attrs(s_49882,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x1","x1",-1863922247),(function (p1__49848_SHARP_){
return p1__49848_SHARP_.source.x;
}),new cljs.core.Keyword(null,"y1","y1",589123466),(function (p1__49849_SHARP_){
return p1__49849_SHARP_.source.y;
}),new cljs.core.Keyword(null,"x2","x2",-1362513475),(function (p1__49850_SHARP_){
return p1__49850_SHARP_.target.x;
}),new cljs.core.Keyword(null,"y2","y2",-718691301),(function (p1__49851_SHARP_){
return p1__49851_SHARP_.target.y;
})], null));
} else {
}

var temp__5825__auto__ = new cljs.core.Keyword(null,"nodes-sel","nodes-sel",1504179930).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(viz_state));
if(cljs.core.truth_(temp__5825__auto__)){
var s = temp__5825__auto__;
return rid3.attrs.attrs(s,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"transform","transform",1381301764),(function (p1__49852_SHARP_){
return ["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__49852_SHARP_.x),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__49852_SHARP_.y),")"].join('');
}),new cljs.core.Keyword(null,"x","x",2099068185),(function (p1__49853_SHARP_){
return p1__49853_SHARP_.x;
}),new cljs.core.Keyword(null,"y","y",-1757859776),(function (p1__49854_SHARP_){
return p1__49854_SHARP_.y;
})], null));
} else {
return null;
}
}));

return G__49856;
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
var seq__49857_49883 = cljs.core.seq(new$);
var chunk__49858_49884 = null;
var count__49859_49885 = (0);
var i__49860_49886 = (0);
while(true){
if((i__49860_49886 < count__49859_49885)){
var n_49887 = chunk__49858_49884.cljs$core$IIndexed$_nth$arity$2(null,i__49860_49886);
var temp__5825__auto___49888 = (orig[(function (){var G__49863 = (id.cljs$core$IFn$_invoke$arity$1 ? id.cljs$core$IFn$_invoke$arity$1(n_49887) : id.call(null,n_49887));
return (orig_map.cljs$core$IFn$_invoke$arity$1 ? orig_map.cljs$core$IFn$_invoke$arity$1(G__49863) : orig_map.call(null,G__49863));
})()]);
if(cljs.core.truth_(temp__5825__auto___49888)){
var old_49893 = temp__5825__auto___49888;
var temp__5825__auto___49894__$1 = old_49893.x;
if(cljs.core.truth_(temp__5825__auto___49894__$1)){
var x_49895 = temp__5825__auto___49894__$1;
(n_49887.x = x_49895);
} else {
}

var temp__5825__auto___49896__$1 = old_49893.y;
if(cljs.core.truth_(temp__5825__auto___49896__$1)){
var y_49897 = temp__5825__auto___49896__$1;
(n_49887.y = y_49897);
} else {
}

var temp__5825__auto___49898__$1 = old_49893.vx;
if(cljs.core.truth_(temp__5825__auto___49898__$1)){
var vx_49899 = temp__5825__auto___49898__$1;
(n_49887.vx = vx_49899);
} else {
}

var temp__5825__auto___49900__$1 = old_49893.vy;
if(cljs.core.truth_(temp__5825__auto___49900__$1)){
var vy_49901 = temp__5825__auto___49900__$1;
(n_49887.vy = vy_49901);
} else {
}

var temp__5825__auto___49902__$1 = old_49893.fx;
if(cljs.core.truth_(temp__5825__auto___49902__$1)){
var fx_49903 = temp__5825__auto___49902__$1;
(n_49887.fx = fx_49903);
} else {
}

var temp__5825__auto___49904__$1 = old_49893.fy;
if(cljs.core.truth_(temp__5825__auto___49904__$1)){
var fy_49905 = temp__5825__auto___49904__$1;
(n_49887.fy = fy_49905);
} else {
}
} else {
}


var G__49906 = seq__49857_49883;
var G__49907 = chunk__49858_49884;
var G__49908 = count__49859_49885;
var G__49909 = (i__49860_49886 + (1));
seq__49857_49883 = G__49906;
chunk__49858_49884 = G__49907;
count__49859_49885 = G__49908;
i__49860_49886 = G__49909;
continue;
} else {
var temp__5825__auto___49910 = cljs.core.seq(seq__49857_49883);
if(temp__5825__auto___49910){
var seq__49857_49911__$1 = temp__5825__auto___49910;
if(cljs.core.chunked_seq_QMARK_(seq__49857_49911__$1)){
var c__5568__auto___49912 = cljs.core.chunk_first(seq__49857_49911__$1);
var G__49913 = cljs.core.chunk_rest(seq__49857_49911__$1);
var G__49914 = c__5568__auto___49912;
var G__49915 = cljs.core.count(c__5568__auto___49912);
var G__49916 = (0);
seq__49857_49883 = G__49913;
chunk__49858_49884 = G__49914;
count__49859_49885 = G__49915;
i__49860_49886 = G__49916;
continue;
} else {
var n_49917 = cljs.core.first(seq__49857_49911__$1);
var temp__5825__auto___49918__$1 = (orig[(function (){var G__49864 = (id.cljs$core$IFn$_invoke$arity$1 ? id.cljs$core$IFn$_invoke$arity$1(n_49917) : id.call(null,n_49917));
return (orig_map.cljs$core$IFn$_invoke$arity$1 ? orig_map.cljs$core$IFn$_invoke$arity$1(G__49864) : orig_map.call(null,G__49864));
})()]);
if(cljs.core.truth_(temp__5825__auto___49918__$1)){
var old_49919 = temp__5825__auto___49918__$1;
var temp__5825__auto___49920__$2 = old_49919.x;
if(cljs.core.truth_(temp__5825__auto___49920__$2)){
var x_49921 = temp__5825__auto___49920__$2;
(n_49917.x = x_49921);
} else {
}

var temp__5825__auto___49922__$2 = old_49919.y;
if(cljs.core.truth_(temp__5825__auto___49922__$2)){
var y_49923 = temp__5825__auto___49922__$2;
(n_49917.y = y_49923);
} else {
}

var temp__5825__auto___49924__$2 = old_49919.vx;
if(cljs.core.truth_(temp__5825__auto___49924__$2)){
var vx_49925 = temp__5825__auto___49924__$2;
(n_49917.vx = vx_49925);
} else {
}

var temp__5825__auto___49926__$2 = old_49919.vy;
if(cljs.core.truth_(temp__5825__auto___49926__$2)){
var vy_49927 = temp__5825__auto___49926__$2;
(n_49917.vy = vy_49927);
} else {
}

var temp__5825__auto___49928__$2 = old_49919.fx;
if(cljs.core.truth_(temp__5825__auto___49928__$2)){
var fx_49933 = temp__5825__auto___49928__$2;
(n_49917.fx = fx_49933);
} else {
}

var temp__5825__auto___49934__$2 = old_49919.fy;
if(cljs.core.truth_(temp__5825__auto___49934__$2)){
var fy_49935 = temp__5825__auto___49934__$2;
(n_49917.fy = fy_49935);
} else {
}
} else {
}


var G__49936 = cljs.core.next(seq__49857_49911__$1);
var G__49937 = null;
var G__49938 = (0);
var G__49939 = (0);
seq__49857_49883 = G__49936;
chunk__49858_49884 = G__49937;
count__49859_49885 = G__49938;
i__49860_49886 = G__49939;
continue;
}
} else {
}
}
break;
}

return new$;
});
website_helpers.graph.update_sim_BANG_ = (function website_helpers$graph$update_sim_BANG_(sim,alpha_target,p__49866){
var map__49867 = p__49866;
var map__49867__$1 = cljs.core.__destructure_map(map__49867);
var links = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49867__$1,new cljs.core.Keyword(null,"links","links",-654507394));
var nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49867__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var old_nodes = sim.nodes();
var new_nodes = website_helpers.graph.merge_nodes(old_nodes,nodes,(function (p1__49865_SHARP_){
return p1__49865_SHARP_.name;
}));
var G__49868 = sim;
G__49868.nodes(new_nodes);

G__49868.force("link").links(links);

G__49868.alpha(alpha_target);

G__49868.restart();

return G__49868;
});
website_helpers.graph.get_clj = (function website_helpers$graph$get_clj(node){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(node,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
});
website_helpers.graph.viz = (function website_helpers$graph$viz(graph_data,base_link,state_override_map){
var viz_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"width","width",-384071477),(2000),new cljs.core.Keyword(null,"height","height",1025178622),(1500),new cljs.core.Keyword(null,"center-x","center-x",2109659472),(1000),new cljs.core.Keyword(null,"center-y","center-y",-233780987),(750),new cljs.core.Keyword(null,"initial-alpha","initial-alpha",-515968256),(4),new cljs.core.Keyword(null,"hover-text-sel","hover-text-sel",-1797118521),null,new cljs.core.Keyword(null,"links-sel","links-sel",1725983752),null,new cljs.core.Keyword(null,"nodes-sel","nodes-sel",1504179930),null], null),state_override_map], 0)));
var sim = website_helpers.graph.create_sim(viz_state);
var drag = website_helpers.graph.create_drag(sim);
var group_color = d3.scaleOrdinal(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#ffffff","#377eb8","#4daf4a","#ffff00","#ff7f00","#984ea3"], null));
var category_color = d3.scaleOrdinal(d3.schemeCategory10);
var add_circles = (function (sel){
return sel.append("ellipse");
});
var update_circles = (function (sel){
return rid3.attrs.attrs(sel.selectAll("ellipse"),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#000",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),1.5,new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159),(function (p1__49869_SHARP_){
return new cljs.core.Keyword(null,"stroke-opacity-mod","stroke-opacity-mod",1678567237).cljs$core$IFn$_invoke$arity$1(website_helpers.graph.get_clj(p1__49869_SHARP_));
}),new cljs.core.Keyword(null,"rx","rx",1627208482),(function (p1__49870_SHARP_){
return (((website_helpers.graph.is_branch_node_QMARK_(p1__49870_SHARP_))?1.3:(1)) * ((website_helpers.graph.should_multiline_node_QMARK_(p1__49870_SHARP_))?((15) + ((2) * cljs.core.count(p1__49870_SHARP_.name))):((15) + ((3) * cljs.core.count(p1__49870_SHARP_.name)))));
}),new cljs.core.Keyword(null,"ry","ry",-334598563),(function (p1__49871_SHARP_){
return (((website_helpers.graph.is_branch_node_QMARK_(p1__49871_SHARP_))?1.3:(1)) * ((website_helpers.graph.should_multiline_node_QMARK_(p1__49871_SHARP_))?(function (){var x__5130__auto__ = (25);
var y__5131__auto__ = p1__49871_SHARP_.size;
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})():((function (){var x__5130__auto__ = (25);
var y__5131__auto__ = p1__49871_SHARP_.size;
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})() / 1.8)));
}),new cljs.core.Keyword(null,"fill","fill",883462889),(function (p1__49872_SHARP_){
var G__49879 = p1__49872_SHARP_.group;
return (group_color.cljs$core$IFn$_invoke$arity$1 ? group_color.cljs$core$IFn$_invoke$arity$1(G__49879) : group_color.call(null,G__49879));
}),new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),(function (p1__49873_SHARP_){
return (0.6 * new cljs.core.Keyword(null,"opacity-mod","opacity-mod",1105734118).cljs$core$IFn$_invoke$arity$1(website_helpers.graph.get_clj(p1__49873_SHARP_)));
})], null));
});
var remove_circles = (function (sel){
return sel.selectAll("ellipse").remove();
});
var add_text = (function (sel){
var text_sel = sel.append("text");
rid3.attrs.attrs(text_sel.filter(website_helpers.graph.should_multiline_node_QMARK_).append("tspan"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),"0",new cljs.core.Keyword(null,"dy","dy",1719547243),"-0.7em"], null)).text((function (node){
var words = clojure.string.split.cljs$core$IFn$_invoke$arity$2(node.name,/\s/);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.take.cljs$core$IFn$_invoke$arity$2((cljs.core.count(words) / (2)),words));
}));

rid3.attrs.attrs(text_sel.filter(website_helpers.graph.should_multiline_node_QMARK_).append("tspan"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),"0",new cljs.core.Keyword(null,"dy","dy",1719547243),"1.4em"], null)).text((function (node){
var words = clojure.string.split.cljs$core$IFn$_invoke$arity$2(node.name,/\s/);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.drop.cljs$core$IFn$_invoke$arity$2((cljs.core.count(words) / (2)),words));
}));

return text_sel.filter((function (p1__49874_SHARP_){
return (!(website_helpers.graph.should_multiline_node_QMARK_(p1__49874_SHARP_)));
})).text((function (p1__49875_SHARP_){
return p1__49875_SHARP_.name;
}));
});
var update_text = (function (sel){
return rid3.attrs.attrs(sel.selectAll("text"),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696),"middle",new cljs.core.Keyword(null,"opacity","opacity",397153780),(function (p1__49876_SHARP_){
return (1.0 * new cljs.core.Keyword(null,"opacity-mod","opacity-mod",1105734118).cljs$core$IFn$_invoke$arity$1(website_helpers.graph.get_clj(p1__49876_SHARP_)));
}),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(function (p1__49877_SHARP_){
if(website_helpers.graph.is_branch_node_QMARK_(p1__49877_SHARP_)){
return "med";
} else {
return "small";
}
}),new cljs.core.Keyword(null,"y","y",-1757859776),(5)], null));
});
var remove_text = (function (sel){
return sel.selectAll("text").remove();
});
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rid3.core.viz,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"force-graph",new cljs.core.Keyword(null,"ratom","ratom",-126521267),graph_data,new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (svg,ratom){
var map__49880 = cljs.core.deref(viz_state);
var map__49880__$1 = cljs.core.__destructure_map(map__49880);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49880__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49880__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var initial_alpha = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49880__$1,new cljs.core.Keyword(null,"initial-alpha","initial-alpha",-515968256));
rid3.attrs.attrs(svg,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),[(0),(0),width,height]], null));

return website_helpers.graph.update_sim_BANG_(sim,initial_alpha,cljs.core.deref(ratom));
}),new cljs.core.Keyword(null,"did-update","did-update",-2143702256),(function (svg,ratom){
return website_helpers.graph.update_sim_BANG_(sim,0.5,cljs.core.deref(ratom));
})], null),new cljs.core.Keyword(null,"pieces","pieces",-1436634023),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"elem-with-data","elem-with-data",-1845237220),new cljs.core.Keyword(null,"class","class",-2030961996),"links",new cljs.core.Keyword(null,"tag","tag",-1290361223),"line",new cljs.core.Keyword(null,"prepare-dataset","prepare-dataset",1819340010),(function (ratom){
return new cljs.core.Keyword(null,"links","links",-654507394).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ratom));
}),new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (sel,_ratom){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(viz_state,cljs.core.assoc,new cljs.core.Keyword(null,"links-sel","links-sel",1725983752),sel);

return rid3.attrs.attrs(sel,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#999",new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159),0.6,new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(function (p1__49878_SHARP_){
return (Math.sqrt(p1__49878_SHARP_.value) / (2));
})], null));
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"elem-with-data","elem-with-data",-1845237220),new cljs.core.Keyword(null,"class","class",-2030961996),"nodes",new cljs.core.Keyword(null,"tag","tag",-1290361223),"g",new cljs.core.Keyword(null,"prepare-dataset","prepare-dataset",1819340010),(function (ratom){
return new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ratom));
}),new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (sel,_ratom){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(viz_state,cljs.core.assoc,new cljs.core.Keyword(null,"nodes-sel","nodes-sel",1504179930),sel);

remove_text(sel);

remove_circles(sel);

add_circles(sel);

add_text(sel);

update_circles(sel);

update_text(sel);

return sel.on("dblclick",(function (_event,node){
return window.open([cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_link),clojure.string.replace(node.path,/ /,"+")].join(''));
})).call(drag);
})], null)], null)], null)], null);
});

//# sourceMappingURL=website_helpers.graph.js.map
