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
var map__51668 = cljs.core.deref(viz_state);
var map__51668__$1 = cljs.core.__destructure_map(map__51668);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51668__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51668__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var center_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51668__$1,new cljs.core.Keyword(null,"center-x","center-x",2109659472));
var center_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51668__$1,new cljs.core.Keyword(null,"center-y","center-y",-233780987));
var G__51669 = d3.forceSimulation();
G__51669.stop();

G__51669.force("link",d3.forceLink().strength(0.07).id((function (p1__51654_SHARP_){
return p1__51654_SHARP_.index;
})));

G__51669.force("charge",d3.forceManyBody().distanceMax((100)).strength((-70)));

G__51669.force("center",d3.forceCenter(center_x,center_y).strength(1.1));

G__51669.force("radial-categories",d3.forceRadial((150),center_x,center_y).strength((function (p1__51655_SHARP_){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),p1__51655_SHARP_.group)) && ((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("legend",p1__51655_SHARP_.label)))))){
return 0.03;
} else {
return (0);
}
})));

G__51669.force("radial-leaves",d3.forceRadial((500),center_x,center_y).strength((function (p1__51656_SHARP_){
if((((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),p1__51656_SHARP_.group)))) && ((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("legend",p1__51656_SHARP_.label)))))){
return 0.02;
} else {
return (0);
}
})));

G__51669.force("collide",d3.forceCollide((function (p1__51657_SHARP_){
return (((website_helpers.graph.is_distinguished_node_QMARK_(p1__51657_SHARP_))?1.2:(1)) * ((website_helpers.graph.should_multiline_node_QMARK_(p1__51657_SHARP_))?(50):(35)));
})).strength(1.1));

G__51669.force("legendx",d3.forceX((0.5 * center_x)).strength((function (p1__51658_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("legend",p1__51658_SHARP_.label)){
return 0.2;
} else {
return (0);
}
})));

G__51669.force("legendy",d3.forceY((0.5 * center_y)).strength((function (p1__51659_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("legend",p1__51659_SHARP_.label)){
return 0.2;
} else {
return (0);
}
})));

G__51669.force("legendnodex",d3.forceX((0)).strength((function (p1__51660_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Legend",p1__51660_SHARP_.name)){
return 0.3;
} else {
return (0);
}
})));

G__51669.on("tick",(function (){
var temp__5825__auto___51694 = new cljs.core.Keyword(null,"links-sel","links-sel",1725983752).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(viz_state));
if(cljs.core.truth_(temp__5825__auto___51694)){
var s_51695 = temp__5825__auto___51694;
rid3.attrs.attrs(s_51695,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x1","x1",-1863922247),(function (p1__51661_SHARP_){
return p1__51661_SHARP_.source.x;
}),new cljs.core.Keyword(null,"y1","y1",589123466),(function (p1__51662_SHARP_){
return p1__51662_SHARP_.source.y;
}),new cljs.core.Keyword(null,"x2","x2",-1362513475),(function (p1__51663_SHARP_){
return p1__51663_SHARP_.target.x;
}),new cljs.core.Keyword(null,"y2","y2",-718691301),(function (p1__51664_SHARP_){
return p1__51664_SHARP_.target.y;
})], null));
} else {
}

var temp__5825__auto__ = new cljs.core.Keyword(null,"nodes-sel","nodes-sel",1504179930).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(viz_state));
if(cljs.core.truth_(temp__5825__auto__)){
var s = temp__5825__auto__;
return rid3.attrs.attrs(s,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"transform","transform",1381301764),(function (p1__51665_SHARP_){
return ["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__51665_SHARP_.x),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__51665_SHARP_.y),")"].join('');
}),new cljs.core.Keyword(null,"x","x",2099068185),(function (p1__51666_SHARP_){
return p1__51666_SHARP_.x;
}),new cljs.core.Keyword(null,"y","y",-1757859776),(function (p1__51667_SHARP_){
return p1__51667_SHARP_.y;
})], null));
} else {
return null;
}
}));

return G__51669;
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
var seq__51670_51696 = cljs.core.seq(new$);
var chunk__51671_51697 = null;
var count__51672_51698 = (0);
var i__51673_51699 = (0);
while(true){
if((i__51673_51699 < count__51672_51698)){
var n_51700 = chunk__51671_51697.cljs$core$IIndexed$_nth$arity$2(null,i__51673_51699);
var temp__5825__auto___51701 = (orig[(function (){var G__51676 = (id.cljs$core$IFn$_invoke$arity$1 ? id.cljs$core$IFn$_invoke$arity$1(n_51700) : id.call(null,n_51700));
return (orig_map.cljs$core$IFn$_invoke$arity$1 ? orig_map.cljs$core$IFn$_invoke$arity$1(G__51676) : orig_map.call(null,G__51676));
})()]);
if(cljs.core.truth_(temp__5825__auto___51701)){
var old_51702 = temp__5825__auto___51701;
var temp__5825__auto___51703__$1 = old_51702.x;
if(cljs.core.truth_(temp__5825__auto___51703__$1)){
var x_51704 = temp__5825__auto___51703__$1;
(n_51700.x = x_51704);
} else {
}

var temp__5825__auto___51705__$1 = old_51702.y;
if(cljs.core.truth_(temp__5825__auto___51705__$1)){
var y_51706 = temp__5825__auto___51705__$1;
(n_51700.y = y_51706);
} else {
}

var temp__5825__auto___51707__$1 = old_51702.vx;
if(cljs.core.truth_(temp__5825__auto___51707__$1)){
var vx_51708 = temp__5825__auto___51707__$1;
(n_51700.vx = vx_51708);
} else {
}

var temp__5825__auto___51709__$1 = old_51702.vy;
if(cljs.core.truth_(temp__5825__auto___51709__$1)){
var vy_51710 = temp__5825__auto___51709__$1;
(n_51700.vy = vy_51710);
} else {
}

var temp__5825__auto___51711__$1 = old_51702.fx;
if(cljs.core.truth_(temp__5825__auto___51711__$1)){
var fx_51712 = temp__5825__auto___51711__$1;
(n_51700.fx = fx_51712);
} else {
}

var temp__5825__auto___51713__$1 = old_51702.fy;
if(cljs.core.truth_(temp__5825__auto___51713__$1)){
var fy_51714 = temp__5825__auto___51713__$1;
(n_51700.fy = fy_51714);
} else {
}
} else {
}


var G__51715 = seq__51670_51696;
var G__51716 = chunk__51671_51697;
var G__51717 = count__51672_51698;
var G__51718 = (i__51673_51699 + (1));
seq__51670_51696 = G__51715;
chunk__51671_51697 = G__51716;
count__51672_51698 = G__51717;
i__51673_51699 = G__51718;
continue;
} else {
var temp__5825__auto___51719 = cljs.core.seq(seq__51670_51696);
if(temp__5825__auto___51719){
var seq__51670_51720__$1 = temp__5825__auto___51719;
if(cljs.core.chunked_seq_QMARK_(seq__51670_51720__$1)){
var c__5568__auto___51721 = cljs.core.chunk_first(seq__51670_51720__$1);
var G__51722 = cljs.core.chunk_rest(seq__51670_51720__$1);
var G__51723 = c__5568__auto___51721;
var G__51724 = cljs.core.count(c__5568__auto___51721);
var G__51725 = (0);
seq__51670_51696 = G__51722;
chunk__51671_51697 = G__51723;
count__51672_51698 = G__51724;
i__51673_51699 = G__51725;
continue;
} else {
var n_51726 = cljs.core.first(seq__51670_51720__$1);
var temp__5825__auto___51727__$1 = (orig[(function (){var G__51677 = (id.cljs$core$IFn$_invoke$arity$1 ? id.cljs$core$IFn$_invoke$arity$1(n_51726) : id.call(null,n_51726));
return (orig_map.cljs$core$IFn$_invoke$arity$1 ? orig_map.cljs$core$IFn$_invoke$arity$1(G__51677) : orig_map.call(null,G__51677));
})()]);
if(cljs.core.truth_(temp__5825__auto___51727__$1)){
var old_51728 = temp__5825__auto___51727__$1;
var temp__5825__auto___51729__$2 = old_51728.x;
if(cljs.core.truth_(temp__5825__auto___51729__$2)){
var x_51730 = temp__5825__auto___51729__$2;
(n_51726.x = x_51730);
} else {
}

var temp__5825__auto___51731__$2 = old_51728.y;
if(cljs.core.truth_(temp__5825__auto___51731__$2)){
var y_51732 = temp__5825__auto___51731__$2;
(n_51726.y = y_51732);
} else {
}

var temp__5825__auto___51733__$2 = old_51728.vx;
if(cljs.core.truth_(temp__5825__auto___51733__$2)){
var vx_51734 = temp__5825__auto___51733__$2;
(n_51726.vx = vx_51734);
} else {
}

var temp__5825__auto___51735__$2 = old_51728.vy;
if(cljs.core.truth_(temp__5825__auto___51735__$2)){
var vy_51736 = temp__5825__auto___51735__$2;
(n_51726.vy = vy_51736);
} else {
}

var temp__5825__auto___51737__$2 = old_51728.fx;
if(cljs.core.truth_(temp__5825__auto___51737__$2)){
var fx_51738 = temp__5825__auto___51737__$2;
(n_51726.fx = fx_51738);
} else {
}

var temp__5825__auto___51739__$2 = old_51728.fy;
if(cljs.core.truth_(temp__5825__auto___51739__$2)){
var fy_51740 = temp__5825__auto___51739__$2;
(n_51726.fy = fy_51740);
} else {
}
} else {
}


var G__51741 = cljs.core.next(seq__51670_51720__$1);
var G__51742 = null;
var G__51743 = (0);
var G__51744 = (0);
seq__51670_51696 = G__51741;
chunk__51671_51697 = G__51742;
count__51672_51698 = G__51743;
i__51673_51699 = G__51744;
continue;
}
} else {
}
}
break;
}

return new$;
});
website_helpers.graph.update_sim_BANG_ = (function website_helpers$graph$update_sim_BANG_(sim,alpha_target,p__51679){
var map__51680 = p__51679;
var map__51680__$1 = cljs.core.__destructure_map(map__51680);
var links = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51680__$1,new cljs.core.Keyword(null,"links","links",-654507394));
var nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51680__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var old_nodes = sim.nodes();
var new_nodes = website_helpers.graph.merge_nodes(old_nodes,nodes,(function (p1__51678_SHARP_){
return p1__51678_SHARP_.name;
}));
var G__51681 = sim;
G__51681.nodes(new_nodes);

G__51681.force("link").links(links);

G__51681.alpha(alpha_target);

G__51681.restart();

return G__51681;
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
return rid3.attrs.attrs(sel.selectAll("ellipse"),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#000",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),1.5,new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159),(function (p1__51682_SHARP_){
return new cljs.core.Keyword(null,"stroke-opacity-mod","stroke-opacity-mod",1678567237).cljs$core$IFn$_invoke$arity$1(website_helpers.graph.get_clj(p1__51682_SHARP_));
}),new cljs.core.Keyword(null,"rx","rx",1627208482),(function (p1__51683_SHARP_){
return (((website_helpers.graph.is_branch_node_QMARK_(p1__51683_SHARP_))?1.3:(1)) * ((website_helpers.graph.should_multiline_node_QMARK_(p1__51683_SHARP_))?((15) + ((2) * cljs.core.count(p1__51683_SHARP_.name))):((15) + ((3) * cljs.core.count(p1__51683_SHARP_.name)))));
}),new cljs.core.Keyword(null,"ry","ry",-334598563),(function (p1__51684_SHARP_){
return (((website_helpers.graph.is_branch_node_QMARK_(p1__51684_SHARP_))?1.3:(1)) * ((website_helpers.graph.should_multiline_node_QMARK_(p1__51684_SHARP_))?(function (){var x__5130__auto__ = (25);
var y__5131__auto__ = p1__51684_SHARP_.size;
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})():((function (){var x__5130__auto__ = (25);
var y__5131__auto__ = p1__51684_SHARP_.size;
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})() / 1.8)));
}),new cljs.core.Keyword(null,"fill","fill",883462889),(function (p1__51685_SHARP_){
var G__51692 = p1__51685_SHARP_.group;
return (group_color.cljs$core$IFn$_invoke$arity$1 ? group_color.cljs$core$IFn$_invoke$arity$1(G__51692) : group_color.call(null,G__51692));
}),new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),(function (p1__51686_SHARP_){
return (0.6 * new cljs.core.Keyword(null,"opacity-mod","opacity-mod",1105734118).cljs$core$IFn$_invoke$arity$1(website_helpers.graph.get_clj(p1__51686_SHARP_)));
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

return text_sel.filter((function (p1__51687_SHARP_){
return (!(website_helpers.graph.should_multiline_node_QMARK_(p1__51687_SHARP_)));
})).text((function (p1__51688_SHARP_){
return p1__51688_SHARP_.name;
}));
});
var update_text = (function (sel){
return rid3.attrs.attrs(sel.selectAll("text"),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696),"middle",new cljs.core.Keyword(null,"opacity","opacity",397153780),(function (p1__51689_SHARP_){
return (1.0 * new cljs.core.Keyword(null,"opacity-mod","opacity-mod",1105734118).cljs$core$IFn$_invoke$arity$1(website_helpers.graph.get_clj(p1__51689_SHARP_)));
}),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(function (p1__51690_SHARP_){
if(website_helpers.graph.is_branch_node_QMARK_(p1__51690_SHARP_)){
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
var map__51693 = cljs.core.deref(viz_state);
var map__51693__$1 = cljs.core.__destructure_map(map__51693);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51693__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51693__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var initial_alpha = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51693__$1,new cljs.core.Keyword(null,"initial-alpha","initial-alpha",-515968256));
rid3.attrs.attrs(svg,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),[(0),(0),width,height]], null));

return website_helpers.graph.update_sim_BANG_(sim,initial_alpha,cljs.core.deref(ratom));
}),new cljs.core.Keyword(null,"did-update","did-update",-2143702256),(function (svg,ratom){
return website_helpers.graph.update_sim_BANG_(sim,0.5,cljs.core.deref(ratom));
})], null),new cljs.core.Keyword(null,"pieces","pieces",-1436634023),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"elem-with-data","elem-with-data",-1845237220),new cljs.core.Keyword(null,"class","class",-2030961996),"links",new cljs.core.Keyword(null,"tag","tag",-1290361223),"line",new cljs.core.Keyword(null,"prepare-dataset","prepare-dataset",1819340010),(function (ratom){
return new cljs.core.Keyword(null,"links","links",-654507394).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ratom));
}),new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (sel,_ratom){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(viz_state,cljs.core.assoc,new cljs.core.Keyword(null,"links-sel","links-sel",1725983752),sel);

return rid3.attrs.attrs(sel,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#999",new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159),0.6,new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(function (p1__51691_SHARP_){
return (Math.sqrt(p1__51691_SHARP_.value) / (2));
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
