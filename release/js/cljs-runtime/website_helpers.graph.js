goog.provide('website_helpers.graph');
website_helpers.graph.is_branch_node_QMARK_ = (function website_helpers$graph$is_branch_node_QMARK_(node){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),node.group)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),node.group)));
});
website_helpers.graph.is_distinguished_node_QMARK_ = (function website_helpers$graph$is_distinguished_node_QMARK_(node){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((4),node.group)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((5),node.group)));
});
website_helpers.graph.create_sim = (function website_helpers$graph$create_sim(viz_state){
var map__40901 = cljs.core.deref(viz_state);
var map__40901__$1 = cljs.core.__destructure_map(map__40901);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40901__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40901__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var center_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40901__$1,new cljs.core.Keyword(null,"center-x","center-x",2109659472));
var center_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40901__$1,new cljs.core.Keyword(null,"center-y","center-y",-233780987));
var G__40902 = d3.forceSimulation();
G__40902.stop();

G__40902.force("link",d3.forceLink().strength(0.08).id((function (p1__40887_SHARP_){
return p1__40887_SHARP_.index;
})));

G__40902.force("charge",d3.forceManyBody().strength((-70)));

G__40902.force("center",d3.forceCenter(center_x,center_y).strength(1.1));

G__40902.force("radial-categories",d3.forceRadial((150),center_x,center_y).strength((function (p1__40888_SHARP_){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),p1__40888_SHARP_.group)) && ((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("legend",p1__40888_SHARP_.label)))))){
return 0.03;
} else {
return (0);
}
})));

G__40902.force("radial-leaves",d3.forceRadial((500),center_x,center_y).strength((function (p1__40889_SHARP_){
if((((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),p1__40889_SHARP_.group)))) && ((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("legend",p1__40889_SHARP_.label)))))){
return 0.02;
} else {
return (0);
}
})));

G__40902.force("collide",d3.forceCollide((function (p1__40890_SHARP_){
if(website_helpers.graph.is_distinguished_node_QMARK_(p1__40890_SHARP_)){
return (70);
} else {
return (35);
}
})).strength(1.1));

G__40902.force("legendx",d3.forceX((0.5 * center_x)).strength((function (p1__40891_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("legend",p1__40891_SHARP_.label)){
return 0.2;
} else {
return (0);
}
})));

G__40902.force("legendy",d3.forceY((0.5 * center_y)).strength((function (p1__40892_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("legend",p1__40892_SHARP_.label)){
return 0.2;
} else {
return (0);
}
})));

G__40902.force("legendnodex",d3.forceX((0)).strength((function (p1__40893_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Legend",p1__40893_SHARP_.name)){
return 0.3;
} else {
return (0);
}
})));

G__40902.on("tick",(function (){
var temp__5825__auto___40927 = new cljs.core.Keyword(null,"links-sel","links-sel",1725983752).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(viz_state));
if(cljs.core.truth_(temp__5825__auto___40927)){
var s_40928 = temp__5825__auto___40927;
rid3.attrs.attrs(s_40928,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x1","x1",-1863922247),(function (p1__40894_SHARP_){
return p1__40894_SHARP_.source.x;
}),new cljs.core.Keyword(null,"y1","y1",589123466),(function (p1__40895_SHARP_){
return p1__40895_SHARP_.source.y;
}),new cljs.core.Keyword(null,"x2","x2",-1362513475),(function (p1__40896_SHARP_){
return p1__40896_SHARP_.target.x;
}),new cljs.core.Keyword(null,"y2","y2",-718691301),(function (p1__40897_SHARP_){
return p1__40897_SHARP_.target.y;
})], null));
} else {
}

var temp__5825__auto__ = new cljs.core.Keyword(null,"nodes-sel","nodes-sel",1504179930).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(viz_state));
if(cljs.core.truth_(temp__5825__auto__)){
var s = temp__5825__auto__;
return rid3.attrs.attrs(s,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"transform","transform",1381301764),(function (p1__40898_SHARP_){
return ["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__40898_SHARP_.x),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__40898_SHARP_.y),")"].join('');
}),new cljs.core.Keyword(null,"x","x",2099068185),(function (p1__40899_SHARP_){
return p1__40899_SHARP_.x;
}),new cljs.core.Keyword(null,"y","y",-1757859776),(function (p1__40900_SHARP_){
return p1__40900_SHARP_.y;
})], null));
} else {
return null;
}
}));

return G__40902;
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
var seq__40903_40929 = cljs.core.seq(new$);
var chunk__40904_40930 = null;
var count__40905_40931 = (0);
var i__40906_40932 = (0);
while(true){
if((i__40906_40932 < count__40905_40931)){
var n_40933 = chunk__40904_40930.cljs$core$IIndexed$_nth$arity$2(null,i__40906_40932);
var temp__5825__auto___40934 = (orig[(function (){var G__40909 = (id.cljs$core$IFn$_invoke$arity$1 ? id.cljs$core$IFn$_invoke$arity$1(n_40933) : id.call(null,n_40933));
return (orig_map.cljs$core$IFn$_invoke$arity$1 ? orig_map.cljs$core$IFn$_invoke$arity$1(G__40909) : orig_map.call(null,G__40909));
})()]);
if(cljs.core.truth_(temp__5825__auto___40934)){
var old_40935 = temp__5825__auto___40934;
var temp__5825__auto___40936__$1 = old_40935.x;
if(cljs.core.truth_(temp__5825__auto___40936__$1)){
var x_40937 = temp__5825__auto___40936__$1;
(n_40933.x = x_40937);
} else {
}

var temp__5825__auto___40938__$1 = old_40935.y;
if(cljs.core.truth_(temp__5825__auto___40938__$1)){
var y_40939 = temp__5825__auto___40938__$1;
(n_40933.y = y_40939);
} else {
}

var temp__5825__auto___40940__$1 = old_40935.vx;
if(cljs.core.truth_(temp__5825__auto___40940__$1)){
var vx_40941 = temp__5825__auto___40940__$1;
(n_40933.vx = vx_40941);
} else {
}

var temp__5825__auto___40942__$1 = old_40935.vy;
if(cljs.core.truth_(temp__5825__auto___40942__$1)){
var vy_40943 = temp__5825__auto___40942__$1;
(n_40933.vy = vy_40943);
} else {
}

var temp__5825__auto___40944__$1 = old_40935.fx;
if(cljs.core.truth_(temp__5825__auto___40944__$1)){
var fx_40945 = temp__5825__auto___40944__$1;
(n_40933.fx = fx_40945);
} else {
}

var temp__5825__auto___40946__$1 = old_40935.fy;
if(cljs.core.truth_(temp__5825__auto___40946__$1)){
var fy_40947 = temp__5825__auto___40946__$1;
(n_40933.fy = fy_40947);
} else {
}
} else {
}


var G__40948 = seq__40903_40929;
var G__40949 = chunk__40904_40930;
var G__40950 = count__40905_40931;
var G__40951 = (i__40906_40932 + (1));
seq__40903_40929 = G__40948;
chunk__40904_40930 = G__40949;
count__40905_40931 = G__40950;
i__40906_40932 = G__40951;
continue;
} else {
var temp__5825__auto___40952 = cljs.core.seq(seq__40903_40929);
if(temp__5825__auto___40952){
var seq__40903_40953__$1 = temp__5825__auto___40952;
if(cljs.core.chunked_seq_QMARK_(seq__40903_40953__$1)){
var c__5568__auto___40954 = cljs.core.chunk_first(seq__40903_40953__$1);
var G__40955 = cljs.core.chunk_rest(seq__40903_40953__$1);
var G__40956 = c__5568__auto___40954;
var G__40957 = cljs.core.count(c__5568__auto___40954);
var G__40958 = (0);
seq__40903_40929 = G__40955;
chunk__40904_40930 = G__40956;
count__40905_40931 = G__40957;
i__40906_40932 = G__40958;
continue;
} else {
var n_40959 = cljs.core.first(seq__40903_40953__$1);
var temp__5825__auto___40960__$1 = (orig[(function (){var G__40910 = (id.cljs$core$IFn$_invoke$arity$1 ? id.cljs$core$IFn$_invoke$arity$1(n_40959) : id.call(null,n_40959));
return (orig_map.cljs$core$IFn$_invoke$arity$1 ? orig_map.cljs$core$IFn$_invoke$arity$1(G__40910) : orig_map.call(null,G__40910));
})()]);
if(cljs.core.truth_(temp__5825__auto___40960__$1)){
var old_40961 = temp__5825__auto___40960__$1;
var temp__5825__auto___40962__$2 = old_40961.x;
if(cljs.core.truth_(temp__5825__auto___40962__$2)){
var x_40963 = temp__5825__auto___40962__$2;
(n_40959.x = x_40963);
} else {
}

var temp__5825__auto___40964__$2 = old_40961.y;
if(cljs.core.truth_(temp__5825__auto___40964__$2)){
var y_40965 = temp__5825__auto___40964__$2;
(n_40959.y = y_40965);
} else {
}

var temp__5825__auto___40966__$2 = old_40961.vx;
if(cljs.core.truth_(temp__5825__auto___40966__$2)){
var vx_40967 = temp__5825__auto___40966__$2;
(n_40959.vx = vx_40967);
} else {
}

var temp__5825__auto___40968__$2 = old_40961.vy;
if(cljs.core.truth_(temp__5825__auto___40968__$2)){
var vy_40969 = temp__5825__auto___40968__$2;
(n_40959.vy = vy_40969);
} else {
}

var temp__5825__auto___40970__$2 = old_40961.fx;
if(cljs.core.truth_(temp__5825__auto___40970__$2)){
var fx_40971 = temp__5825__auto___40970__$2;
(n_40959.fx = fx_40971);
} else {
}

var temp__5825__auto___40972__$2 = old_40961.fy;
if(cljs.core.truth_(temp__5825__auto___40972__$2)){
var fy_40973 = temp__5825__auto___40972__$2;
(n_40959.fy = fy_40973);
} else {
}
} else {
}


var G__40974 = cljs.core.next(seq__40903_40953__$1);
var G__40975 = null;
var G__40976 = (0);
var G__40977 = (0);
seq__40903_40929 = G__40974;
chunk__40904_40930 = G__40975;
count__40905_40931 = G__40976;
i__40906_40932 = G__40977;
continue;
}
} else {
}
}
break;
}

return new$;
});
website_helpers.graph.update_sim_BANG_ = (function website_helpers$graph$update_sim_BANG_(sim,alpha_target,p__40912){
var map__40913 = p__40912;
var map__40913__$1 = cljs.core.__destructure_map(map__40913);
var links = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40913__$1,new cljs.core.Keyword(null,"links","links",-654507394));
var nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40913__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var old_nodes = sim.nodes();
var new_nodes = website_helpers.graph.merge_nodes(old_nodes,nodes,(function (p1__40911_SHARP_){
return p1__40911_SHARP_.name;
}));
var G__40914 = sim;
G__40914.nodes(new_nodes);

G__40914.force("link").links(links);

G__40914.alpha(alpha_target);

G__40914.restart();

return G__40914;
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
return rid3.attrs.attrs(sel.append("ellipse"),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#000",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),1.5,new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159),(function (p1__40915_SHARP_){
return new cljs.core.Keyword(null,"stroke-opacity-mod","stroke-opacity-mod",1678567237).cljs$core$IFn$_invoke$arity$1(website_helpers.graph.get_clj(p1__40915_SHARP_));
}),new cljs.core.Keyword(null,"rx","rx",1627208482),(function (p1__40916_SHARP_){
return (((website_helpers.graph.is_branch_node_QMARK_(p1__40916_SHARP_))?1.3:(1)) * ((15) + ((3) * cljs.core.count(p1__40916_SHARP_.name))));
}),new cljs.core.Keyword(null,"ry","ry",-334598563),(function (p1__40917_SHARP_){
return (((website_helpers.graph.is_branch_node_QMARK_(p1__40917_SHARP_))?1.3:(1)) * ((function (){var x__5130__auto__ = (25);
var y__5131__auto__ = p1__40917_SHARP_.size;
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})() / 1.8));
}),new cljs.core.Keyword(null,"fill","fill",883462889),(function (p1__40918_SHARP_){
var G__40925 = p1__40918_SHARP_.group;
return (group_color.cljs$core$IFn$_invoke$arity$1 ? group_color.cljs$core$IFn$_invoke$arity$1(G__40925) : group_color.call(null,G__40925));
}),new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),(function (p1__40919_SHARP_){
return (0.6 * new cljs.core.Keyword(null,"opacity-mod","opacity-mod",1105734118).cljs$core$IFn$_invoke$arity$1(website_helpers.graph.get_clj(p1__40919_SHARP_)));
})], null));
});
var add_text = (function (sel){
return rid3.attrs.attrs(sel.append("text"),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696),"middle",new cljs.core.Keyword(null,"opacity","opacity",397153780),(function (p1__40920_SHARP_){
return (1.0 * new cljs.core.Keyword(null,"opacity-mod","opacity-mod",1105734118).cljs$core$IFn$_invoke$arity$1(website_helpers.graph.get_clj(p1__40920_SHARP_)));
}),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(function (p1__40921_SHARP_){
if(website_helpers.graph.is_branch_node_QMARK_(p1__40921_SHARP_)){
return "med";
} else {
return "small";
}
}),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),(function (p1__40922_SHARP_){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((4),p1__40922_SHARP_.group)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((5),p1__40922_SHARP_.group)))){
return "bold";
} else {
return "normal";
}
}),new cljs.core.Keyword(null,"y","y",-1757859776),(5)], null)).text((function (p1__40923_SHARP_){
return p1__40923_SHARP_.name;
}));
});
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rid3.core.viz,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"force-graph",new cljs.core.Keyword(null,"ratom","ratom",-126521267),ratom,new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (svg,ratom__$1){
var map__40926 = cljs.core.deref(viz_state);
var map__40926__$1 = cljs.core.__destructure_map(map__40926);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40926__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40926__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var initial_alpha = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40926__$1,new cljs.core.Keyword(null,"initial-alpha","initial-alpha",-515968256));
rid3.attrs.attrs(svg,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),[(0),(0),width,height]], null));

return website_helpers.graph.update_sim_BANG_(sim,initial_alpha,cljs.core.deref(ratom__$1));
}),new cljs.core.Keyword(null,"did-update","did-update",-2143702256),(function (svg,ratom__$1){
return website_helpers.graph.update_sim_BANG_(sim,0.5,cljs.core.deref(ratom__$1));
})], null),new cljs.core.Keyword(null,"pieces","pieces",-1436634023),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"elem-with-data","elem-with-data",-1845237220),new cljs.core.Keyword(null,"class","class",-2030961996),"links",new cljs.core.Keyword(null,"tag","tag",-1290361223),"line",new cljs.core.Keyword(null,"prepare-dataset","prepare-dataset",1819340010),(function (ratom__$1){
return new cljs.core.Keyword(null,"links","links",-654507394).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ratom__$1));
}),new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (sel,_ratom){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(viz_state,cljs.core.assoc,new cljs.core.Keyword(null,"links-sel","links-sel",1725983752),sel);

return rid3.attrs.attrs(sel,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#999",new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159),0.6,new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(function (p1__40924_SHARP_){
return (Math.sqrt(p1__40924_SHARP_.value) / (2));
})], null));
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"elem-with-data","elem-with-data",-1845237220),new cljs.core.Keyword(null,"class","class",-2030961996),"nodes",new cljs.core.Keyword(null,"tag","tag",-1290361223),"g",new cljs.core.Keyword(null,"prepare-dataset","prepare-dataset",1819340010),(function (ratom__$1){
return new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ratom__$1));
}),new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (sel,_ratom){
var start__40880__auto__ = (Date.now() / 1000.0);
var ret__40881__auto__ = (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(viz_state,cljs.core.assoc,new cljs.core.Keyword(null,"nodes-sel","nodes-sel",1504179930),sel);

add_circle(sel);

add_text(sel);

return sel.on("dblclick",(function (_event,node){
return window.open([cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_link),clojure.string.replace(node.path,/ /,"+")].join(''));
})).call(drag);
})()
;
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Mounted viz"," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((Date.now() / 1000.0) - start__40880__auto__))," secs"].join('')], 0));

return ret__40881__auto__;
})], null)], null)], null)], null);
});

//# sourceMappingURL=website_helpers.graph.js.map
