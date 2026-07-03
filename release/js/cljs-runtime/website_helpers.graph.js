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
var map__50116 = cljs.core.deref(viz_state);
var map__50116__$1 = cljs.core.__destructure_map(map__50116);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50116__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50116__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var center_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50116__$1,new cljs.core.Keyword(null,"center-x","center-x",2109659472));
var center_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50116__$1,new cljs.core.Keyword(null,"center-y","center-y",-233780987));
var legend_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50116__$1,new cljs.core.Keyword(null,"legend-x","legend-x",-1640214744));
var legend_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50116__$1,new cljs.core.Keyword(null,"legend-y","legend-y",-1159784392));
var legend_title_offset_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50116__$1,new cljs.core.Keyword(null,"legend-title-offset-x","legend-title-offset-x",1475074958));
var legend_title_offset_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50116__$1,new cljs.core.Keyword(null,"legend-title-offset-y","legend-title-offset-y",200845880));
var G__50117 = d3.forceSimulation();
G__50117.stop();

G__50117.force("link",d3.forceLink().strength(0.07).id((function (p1__50101_SHARP_){
return p1__50101_SHARP_.index;
})));

G__50117.force("charge",d3.forceManyBody().distanceMax((800)).strength((-80)));

G__50117.force("center",d3.forceCenter(center_x,center_y).strength(1.1));

G__50117.force("radial-categories",d3.forceRadial((150),center_x,center_y).strength((function (p1__50102_SHARP_){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),p1__50102_SHARP_.group)) && ((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("legend",p1__50102_SHARP_.label)))))){
return 0.03;
} else {
return (0);
}
})));

G__50117.force("radial-leaves",d3.forceRadial((500),center_x,center_y).strength((function (p1__50103_SHARP_){
if((((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),p1__50103_SHARP_.group)))) && ((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("legend",p1__50103_SHARP_.label)))))){
return 0.02;
} else {
return (0);
}
})));

G__50117.force("collide",d3.forceCollide((function (p1__50104_SHARP_){
return (((website_helpers.graph.is_distinguished_node_QMARK_(p1__50104_SHARP_))?1.2:(1)) * ((website_helpers.graph.should_multiline_node_QMARK_(p1__50104_SHARP_))?(50):(35)));
})).strength(1.1));

G__50117.force("legendx",d3.forceX(legend_x).strength((function (p1__50105_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("legend",p1__50105_SHARP_.label)){
return 0.2;
} else {
return (0);
}
})));

G__50117.force("legendy",d3.forceY(legend_y).strength((function (p1__50106_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("legend",p1__50106_SHARP_.label)){
return 0.2;
} else {
return (0);
}
})));

G__50117.force("legendnodex",d3.forceX((legend_title_offset_x + legend_x)).strength((function (p1__50107_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Legend",p1__50107_SHARP_.name)){
return 0.3;
} else {
return (0);
}
})));

G__50117.force("legendnodey",d3.forceY((legend_title_offset_y + legend_x)).strength((function (p1__50108_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Legend",p1__50108_SHARP_.name)){
return 0.3;
} else {
return (0);
}
})));

G__50117.on("tick",(function (){
var temp__5825__auto___50142 = new cljs.core.Keyword(null,"links-sel","links-sel",1725983752).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(viz_state));
if(cljs.core.truth_(temp__5825__auto___50142)){
var s_50143 = temp__5825__auto___50142;
rid3.attrs.attrs(s_50143,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x1","x1",-1863922247),(function (p1__50109_SHARP_){
return p1__50109_SHARP_.source.x;
}),new cljs.core.Keyword(null,"y1","y1",589123466),(function (p1__50110_SHARP_){
return p1__50110_SHARP_.source.y;
}),new cljs.core.Keyword(null,"x2","x2",-1362513475),(function (p1__50111_SHARP_){
return p1__50111_SHARP_.target.x;
}),new cljs.core.Keyword(null,"y2","y2",-718691301),(function (p1__50112_SHARP_){
return p1__50112_SHARP_.target.y;
})], null));
} else {
}

var temp__5825__auto__ = new cljs.core.Keyword(null,"nodes-sel","nodes-sel",1504179930).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(viz_state));
if(cljs.core.truth_(temp__5825__auto__)){
var s = temp__5825__auto__;
return rid3.attrs.attrs(s,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"transform","transform",1381301764),(function (p1__50113_SHARP_){
return ["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__50113_SHARP_.x),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__50113_SHARP_.y),")"].join('');
}),new cljs.core.Keyword(null,"x","x",2099068185),(function (p1__50114_SHARP_){
return p1__50114_SHARP_.x;
}),new cljs.core.Keyword(null,"y","y",-1757859776),(function (p1__50115_SHARP_){
return p1__50115_SHARP_.y;
})], null));
} else {
return null;
}
}));

return G__50117;
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
var seq__50118_50144 = cljs.core.seq(new$);
var chunk__50119_50145 = null;
var count__50120_50146 = (0);
var i__50121_50147 = (0);
while(true){
if((i__50121_50147 < count__50120_50146)){
var n_50148 = chunk__50119_50145.cljs$core$IIndexed$_nth$arity$2(null,i__50121_50147);
var temp__5825__auto___50149 = (orig[(function (){var G__50124 = (id.cljs$core$IFn$_invoke$arity$1 ? id.cljs$core$IFn$_invoke$arity$1(n_50148) : id.call(null,n_50148));
return (orig_map.cljs$core$IFn$_invoke$arity$1 ? orig_map.cljs$core$IFn$_invoke$arity$1(G__50124) : orig_map.call(null,G__50124));
})()]);
if(cljs.core.truth_(temp__5825__auto___50149)){
var old_50150 = temp__5825__auto___50149;
var temp__5825__auto___50151__$1 = old_50150.x;
if(cljs.core.truth_(temp__5825__auto___50151__$1)){
var x_50152 = temp__5825__auto___50151__$1;
(n_50148.x = x_50152);
} else {
}

var temp__5825__auto___50153__$1 = old_50150.y;
if(cljs.core.truth_(temp__5825__auto___50153__$1)){
var y_50154 = temp__5825__auto___50153__$1;
(n_50148.y = y_50154);
} else {
}

var temp__5825__auto___50155__$1 = old_50150.vx;
if(cljs.core.truth_(temp__5825__auto___50155__$1)){
var vx_50156 = temp__5825__auto___50155__$1;
(n_50148.vx = vx_50156);
} else {
}

var temp__5825__auto___50157__$1 = old_50150.vy;
if(cljs.core.truth_(temp__5825__auto___50157__$1)){
var vy_50158 = temp__5825__auto___50157__$1;
(n_50148.vy = vy_50158);
} else {
}

var temp__5825__auto___50159__$1 = old_50150.fx;
if(cljs.core.truth_(temp__5825__auto___50159__$1)){
var fx_50160 = temp__5825__auto___50159__$1;
(n_50148.fx = fx_50160);
} else {
}

var temp__5825__auto___50161__$1 = old_50150.fy;
if(cljs.core.truth_(temp__5825__auto___50161__$1)){
var fy_50162 = temp__5825__auto___50161__$1;
(n_50148.fy = fy_50162);
} else {
}
} else {
}


var G__50163 = seq__50118_50144;
var G__50164 = chunk__50119_50145;
var G__50165 = count__50120_50146;
var G__50166 = (i__50121_50147 + (1));
seq__50118_50144 = G__50163;
chunk__50119_50145 = G__50164;
count__50120_50146 = G__50165;
i__50121_50147 = G__50166;
continue;
} else {
var temp__5825__auto___50167 = cljs.core.seq(seq__50118_50144);
if(temp__5825__auto___50167){
var seq__50118_50168__$1 = temp__5825__auto___50167;
if(cljs.core.chunked_seq_QMARK_(seq__50118_50168__$1)){
var c__5568__auto___50169 = cljs.core.chunk_first(seq__50118_50168__$1);
var G__50170 = cljs.core.chunk_rest(seq__50118_50168__$1);
var G__50171 = c__5568__auto___50169;
var G__50172 = cljs.core.count(c__5568__auto___50169);
var G__50173 = (0);
seq__50118_50144 = G__50170;
chunk__50119_50145 = G__50171;
count__50120_50146 = G__50172;
i__50121_50147 = G__50173;
continue;
} else {
var n_50174 = cljs.core.first(seq__50118_50168__$1);
var temp__5825__auto___50175__$1 = (orig[(function (){var G__50125 = (id.cljs$core$IFn$_invoke$arity$1 ? id.cljs$core$IFn$_invoke$arity$1(n_50174) : id.call(null,n_50174));
return (orig_map.cljs$core$IFn$_invoke$arity$1 ? orig_map.cljs$core$IFn$_invoke$arity$1(G__50125) : orig_map.call(null,G__50125));
})()]);
if(cljs.core.truth_(temp__5825__auto___50175__$1)){
var old_50176 = temp__5825__auto___50175__$1;
var temp__5825__auto___50177__$2 = old_50176.x;
if(cljs.core.truth_(temp__5825__auto___50177__$2)){
var x_50178 = temp__5825__auto___50177__$2;
(n_50174.x = x_50178);
} else {
}

var temp__5825__auto___50179__$2 = old_50176.y;
if(cljs.core.truth_(temp__5825__auto___50179__$2)){
var y_50180 = temp__5825__auto___50179__$2;
(n_50174.y = y_50180);
} else {
}

var temp__5825__auto___50181__$2 = old_50176.vx;
if(cljs.core.truth_(temp__5825__auto___50181__$2)){
var vx_50182 = temp__5825__auto___50181__$2;
(n_50174.vx = vx_50182);
} else {
}

var temp__5825__auto___50183__$2 = old_50176.vy;
if(cljs.core.truth_(temp__5825__auto___50183__$2)){
var vy_50184 = temp__5825__auto___50183__$2;
(n_50174.vy = vy_50184);
} else {
}

var temp__5825__auto___50185__$2 = old_50176.fx;
if(cljs.core.truth_(temp__5825__auto___50185__$2)){
var fx_50186 = temp__5825__auto___50185__$2;
(n_50174.fx = fx_50186);
} else {
}

var temp__5825__auto___50187__$2 = old_50176.fy;
if(cljs.core.truth_(temp__5825__auto___50187__$2)){
var fy_50188 = temp__5825__auto___50187__$2;
(n_50174.fy = fy_50188);
} else {
}
} else {
}


var G__50189 = cljs.core.next(seq__50118_50168__$1);
var G__50190 = null;
var G__50191 = (0);
var G__50192 = (0);
seq__50118_50144 = G__50189;
chunk__50119_50145 = G__50190;
count__50120_50146 = G__50191;
i__50121_50147 = G__50192;
continue;
}
} else {
}
}
break;
}

return new$;
});
website_helpers.graph.update_sim_BANG_ = (function website_helpers$graph$update_sim_BANG_(sim,alpha_target,p__50127){
var map__50128 = p__50127;
var map__50128__$1 = cljs.core.__destructure_map(map__50128);
var links = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50128__$1,new cljs.core.Keyword(null,"links","links",-654507394));
var nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50128__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var old_nodes = sim.nodes();
var new_nodes = website_helpers.graph.merge_nodes(old_nodes,nodes,(function (p1__50126_SHARP_){
return p1__50126_SHARP_.name;
}));
var G__50129 = sim;
G__50129.nodes(new_nodes);

G__50129.force("link").links(links);

G__50129.alpha(alpha_target);

G__50129.restart();

return G__50129;
});
website_helpers.graph.get_clj = (function website_helpers$graph$get_clj(node){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(node,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
});
website_helpers.graph.viz = (function website_helpers$graph$viz(graph_data,base_link,state_override_map){
var viz_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"initial-alpha","initial-alpha",-515968256),new cljs.core.Keyword(null,"center-y","center-y",-233780987),new cljs.core.Keyword(null,"hover-text-sel","hover-text-sel",-1797118521),new cljs.core.Keyword(null,"links-sel","links-sel",1725983752),new cljs.core.Keyword(null,"legend-x","legend-x",-1640214744),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"legend-title-offset-x","legend-title-offset-x",1475074958),new cljs.core.Keyword(null,"center-x","center-x",2109659472),new cljs.core.Keyword(null,"legend-y","legend-y",-1159784392),new cljs.core.Keyword(null,"legend-title-offset-y","legend-title-offset-y",200845880),new cljs.core.Keyword(null,"nodes-sel","nodes-sel",1504179930),new cljs.core.Keyword(null,"height","height",1025178622)],[(4),(750),null,null,(500),(2000),(50),(1000),(350),(50),null,(1500)]),state_override_map], 0)));
var sim = website_helpers.graph.create_sim(viz_state);
var drag = website_helpers.graph.create_drag(sim);
var group_color = d3.scaleOrdinal(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#ffffff","#377eb8","#4daf4a","#ffff00","#ff7f00","#984ea3"], null));
var category_color = d3.scaleOrdinal(d3.schemeCategory10);
var add_circles = (function (sel){
return sel.append("ellipse");
});
var update_circles = (function (sel){
return rid3.attrs.attrs(sel.selectAll("ellipse"),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#000",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),1.5,new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159),(function (p1__50130_SHARP_){
return new cljs.core.Keyword(null,"stroke-opacity-mod","stroke-opacity-mod",1678567237).cljs$core$IFn$_invoke$arity$1(website_helpers.graph.get_clj(p1__50130_SHARP_));
}),new cljs.core.Keyword(null,"rx","rx",1627208482),(function (p1__50131_SHARP_){
return (((website_helpers.graph.is_branch_node_QMARK_(p1__50131_SHARP_))?1.3:(1)) * ((website_helpers.graph.should_multiline_node_QMARK_(p1__50131_SHARP_))?((15) + ((2) * cljs.core.count(p1__50131_SHARP_.name))):((15) + ((3) * cljs.core.count(p1__50131_SHARP_.name)))));
}),new cljs.core.Keyword(null,"ry","ry",-334598563),(function (p1__50132_SHARP_){
return (((website_helpers.graph.is_branch_node_QMARK_(p1__50132_SHARP_))?1.3:(1)) * ((website_helpers.graph.should_multiline_node_QMARK_(p1__50132_SHARP_))?(function (){var x__5130__auto__ = (25);
var y__5131__auto__ = p1__50132_SHARP_.size;
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})():((function (){var x__5130__auto__ = (25);
var y__5131__auto__ = p1__50132_SHARP_.size;
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})() / 1.8)));
}),new cljs.core.Keyword(null,"fill","fill",883462889),(function (p1__50133_SHARP_){
var G__50140 = p1__50133_SHARP_.group;
return (group_color.cljs$core$IFn$_invoke$arity$1 ? group_color.cljs$core$IFn$_invoke$arity$1(G__50140) : group_color.call(null,G__50140));
}),new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),(function (p1__50134_SHARP_){
return (0.6 * new cljs.core.Keyword(null,"opacity-mod","opacity-mod",1105734118).cljs$core$IFn$_invoke$arity$1(website_helpers.graph.get_clj(p1__50134_SHARP_)));
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

return text_sel.filter((function (p1__50135_SHARP_){
return (!(website_helpers.graph.should_multiline_node_QMARK_(p1__50135_SHARP_)));
})).text((function (p1__50136_SHARP_){
return p1__50136_SHARP_.name;
}));
});
var update_text = (function (sel){
return rid3.attrs.attrs(sel.selectAll("text"),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696),"middle",new cljs.core.Keyword(null,"opacity","opacity",397153780),(function (p1__50137_SHARP_){
return (1.0 * new cljs.core.Keyword(null,"opacity-mod","opacity-mod",1105734118).cljs$core$IFn$_invoke$arity$1(website_helpers.graph.get_clj(p1__50137_SHARP_)));
}),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(function (p1__50138_SHARP_){
if(website_helpers.graph.is_branch_node_QMARK_(p1__50138_SHARP_)){
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
var map__50141 = cljs.core.deref(viz_state);
var map__50141__$1 = cljs.core.__destructure_map(map__50141);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50141__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50141__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var initial_alpha = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50141__$1,new cljs.core.Keyword(null,"initial-alpha","initial-alpha",-515968256));
rid3.attrs.attrs(svg,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),[(0),(0),width,height]], null));

return website_helpers.graph.update_sim_BANG_(sim,initial_alpha,cljs.core.deref(ratom));
}),new cljs.core.Keyword(null,"did-update","did-update",-2143702256),(function (svg,ratom){
return website_helpers.graph.update_sim_BANG_(sim,0.5,cljs.core.deref(ratom));
})], null),new cljs.core.Keyword(null,"pieces","pieces",-1436634023),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"elem-with-data","elem-with-data",-1845237220),new cljs.core.Keyword(null,"class","class",-2030961996),"links",new cljs.core.Keyword(null,"tag","tag",-1290361223),"line",new cljs.core.Keyword(null,"prepare-dataset","prepare-dataset",1819340010),(function (ratom){
return new cljs.core.Keyword(null,"links","links",-654507394).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ratom));
}),new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (sel,_ratom){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(viz_state,cljs.core.assoc,new cljs.core.Keyword(null,"links-sel","links-sel",1725983752),sel);

return rid3.attrs.attrs(sel,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#999",new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159),0.6,new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(function (p1__50139_SHARP_){
return (Math.sqrt(p1__50139_SHARP_.value) / (2));
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
