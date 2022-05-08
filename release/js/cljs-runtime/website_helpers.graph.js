goog.provide('website_helpers.graph');
/**
 * Turns hiccup like syntax into an HTML string.
 */
website_helpers.graph.html = (function website_helpers$graph$html(hiccup){
return sablono.server.render_static(sablono.interpreter.interpret(hiccup));
});
website_helpers.graph.create_sim = (function website_helpers$graph$create_sim(viz_state){
var map__76863 = cljs.core.deref(viz_state);
var map__76863__$1 = cljs.core.__destructure_map(map__76863);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76863__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76863__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var G__76864 = d3.forceSimulation();
G__76864.stop();

G__76864.force("link",d3.forceLink().strength(0.1).id((function (p1__76855_SHARP_){
return p1__76855_SHARP_.index;
})));

G__76864.force("charge",d3.forceManyBody().strength((-80)));

G__76864.force("center",d3.forceCenter((width / (2)),(height / (2))));

G__76864.force("collide",d3.forceCollide((50)));

G__76864.on("tick",(function (){
var temp__5753__auto___76884 = new cljs.core.Keyword(null,"links-sel","links-sel",1725983752).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(viz_state));
if(cljs.core.truth_(temp__5753__auto___76884)){
var s_76885 = temp__5753__auto___76884;
rid3.attrs.attrs(s_76885,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x1","x1",-1863922247),(function (p1__76856_SHARP_){
return p1__76856_SHARP_.source.x;
}),new cljs.core.Keyword(null,"y1","y1",589123466),(function (p1__76857_SHARP_){
return p1__76857_SHARP_.source.y;
}),new cljs.core.Keyword(null,"x2","x2",-1362513475),(function (p1__76858_SHARP_){
return p1__76858_SHARP_.target.x;
}),new cljs.core.Keyword(null,"y2","y2",-718691301),(function (p1__76859_SHARP_){
return p1__76859_SHARP_.target.y;
})], null));
} else {
}

var temp__5753__auto__ = new cljs.core.Keyword(null,"nodes-sel","nodes-sel",1504179930).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(viz_state));
if(cljs.core.truth_(temp__5753__auto__)){
var s = temp__5753__auto__;
return rid3.attrs.attrs(s,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"transform","transform",1381301764),(function (p1__76860_SHARP_){
return ["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__76860_SHARP_.x),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__76860_SHARP_.y),")"].join('');
}),new cljs.core.Keyword(null,"x","x",2099068185),(function (p1__76861_SHARP_){
return p1__76861_SHARP_.x;
}),new cljs.core.Keyword(null,"y","y",-1757859776),(function (p1__76862_SHARP_){
return p1__76862_SHARP_.y;
})], null));
} else {
return null;
}
}));

return G__76864;
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
var seq__76865_76887 = cljs.core.seq(new$);
var chunk__76866_76888 = null;
var count__76867_76889 = (0);
var i__76868_76890 = (0);
while(true){
if((i__76868_76890 < count__76867_76889)){
var n_76891 = chunk__76866_76888.cljs$core$IIndexed$_nth$arity$2(null,i__76868_76890);
var temp__5753__auto___76892 = (orig[(function (){var G__76871 = (id.cljs$core$IFn$_invoke$arity$1 ? id.cljs$core$IFn$_invoke$arity$1(n_76891) : id.call(null,n_76891));
return (orig_map.cljs$core$IFn$_invoke$arity$1 ? orig_map.cljs$core$IFn$_invoke$arity$1(G__76871) : orig_map.call(null,G__76871));
})()]);
if(cljs.core.truth_(temp__5753__auto___76892)){
var old_76893 = temp__5753__auto___76892;
var temp__5753__auto___76894__$1 = old_76893.x;
if(cljs.core.truth_(temp__5753__auto___76894__$1)){
var x_76895 = temp__5753__auto___76894__$1;
(n_76891.x = x_76895);
} else {
}

var temp__5753__auto___76896__$1 = old_76893.y;
if(cljs.core.truth_(temp__5753__auto___76896__$1)){
var y_76897 = temp__5753__auto___76896__$1;
(n_76891.y = y_76897);
} else {
}

var temp__5753__auto___76898__$1 = old_76893.vx;
if(cljs.core.truth_(temp__5753__auto___76898__$1)){
var vx_76899 = temp__5753__auto___76898__$1;
(n_76891.vx = vx_76899);
} else {
}

var temp__5753__auto___76900__$1 = old_76893.vy;
if(cljs.core.truth_(temp__5753__auto___76900__$1)){
var vy_76901 = temp__5753__auto___76900__$1;
(n_76891.vy = vy_76901);
} else {
}

var temp__5753__auto___76902__$1 = old_76893.fx;
if(cljs.core.truth_(temp__5753__auto___76902__$1)){
var fx_76903 = temp__5753__auto___76902__$1;
(n_76891.fx = fx_76903);
} else {
}

var temp__5753__auto___76904__$1 = old_76893.fy;
if(cljs.core.truth_(temp__5753__auto___76904__$1)){
var fy_76905 = temp__5753__auto___76904__$1;
(n_76891.fy = fy_76905);
} else {
}
} else {
}


var G__76906 = seq__76865_76887;
var G__76907 = chunk__76866_76888;
var G__76908 = count__76867_76889;
var G__76909 = (i__76868_76890 + (1));
seq__76865_76887 = G__76906;
chunk__76866_76888 = G__76907;
count__76867_76889 = G__76908;
i__76868_76890 = G__76909;
continue;
} else {
var temp__5753__auto___76910 = cljs.core.seq(seq__76865_76887);
if(temp__5753__auto___76910){
var seq__76865_76911__$1 = temp__5753__auto___76910;
if(cljs.core.chunked_seq_QMARK_(seq__76865_76911__$1)){
var c__4679__auto___76912 = cljs.core.chunk_first(seq__76865_76911__$1);
var G__76913 = cljs.core.chunk_rest(seq__76865_76911__$1);
var G__76914 = c__4679__auto___76912;
var G__76915 = cljs.core.count(c__4679__auto___76912);
var G__76916 = (0);
seq__76865_76887 = G__76913;
chunk__76866_76888 = G__76914;
count__76867_76889 = G__76915;
i__76868_76890 = G__76916;
continue;
} else {
var n_76917 = cljs.core.first(seq__76865_76911__$1);
var temp__5753__auto___76918__$1 = (orig[(function (){var G__76872 = (id.cljs$core$IFn$_invoke$arity$1 ? id.cljs$core$IFn$_invoke$arity$1(n_76917) : id.call(null,n_76917));
return (orig_map.cljs$core$IFn$_invoke$arity$1 ? orig_map.cljs$core$IFn$_invoke$arity$1(G__76872) : orig_map.call(null,G__76872));
})()]);
if(cljs.core.truth_(temp__5753__auto___76918__$1)){
var old_76919 = temp__5753__auto___76918__$1;
var temp__5753__auto___76920__$2 = old_76919.x;
if(cljs.core.truth_(temp__5753__auto___76920__$2)){
var x_76921 = temp__5753__auto___76920__$2;
(n_76917.x = x_76921);
} else {
}

var temp__5753__auto___76922__$2 = old_76919.y;
if(cljs.core.truth_(temp__5753__auto___76922__$2)){
var y_76923 = temp__5753__auto___76922__$2;
(n_76917.y = y_76923);
} else {
}

var temp__5753__auto___76924__$2 = old_76919.vx;
if(cljs.core.truth_(temp__5753__auto___76924__$2)){
var vx_76925 = temp__5753__auto___76924__$2;
(n_76917.vx = vx_76925);
} else {
}

var temp__5753__auto___76930__$2 = old_76919.vy;
if(cljs.core.truth_(temp__5753__auto___76930__$2)){
var vy_76931 = temp__5753__auto___76930__$2;
(n_76917.vy = vy_76931);
} else {
}

var temp__5753__auto___76932__$2 = old_76919.fx;
if(cljs.core.truth_(temp__5753__auto___76932__$2)){
var fx_76933 = temp__5753__auto___76932__$2;
(n_76917.fx = fx_76933);
} else {
}

var temp__5753__auto___76934__$2 = old_76919.fy;
if(cljs.core.truth_(temp__5753__auto___76934__$2)){
var fy_76935 = temp__5753__auto___76934__$2;
(n_76917.fy = fy_76935);
} else {
}
} else {
}


var G__76936 = cljs.core.next(seq__76865_76911__$1);
var G__76937 = null;
var G__76938 = (0);
var G__76939 = (0);
seq__76865_76887 = G__76936;
chunk__76866_76888 = G__76937;
count__76867_76889 = G__76938;
i__76868_76890 = G__76939;
continue;
}
} else {
}
}
break;
}

return new$;
});
website_helpers.graph.update_sim_BANG_ = (function website_helpers$graph$update_sim_BANG_(sim,alpha_target,p__76874){
var map__76875 = p__76874;
var map__76875__$1 = cljs.core.__destructure_map(map__76875);
var links = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76875__$1,new cljs.core.Keyword(null,"links","links",-654507394));
var nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76875__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var old_nodes = sim.nodes();
var new_nodes = website_helpers.graph.merge_nodes(old_nodes,nodes,(function (p1__76873_SHARP_){
return p1__76873_SHARP_.name;
}));
var G__76876 = sim;
G__76876.nodes(new_nodes);

G__76876.force("link").links(links);

G__76876.alpha(alpha_target);

G__76876.restart();

return G__76876;
});
website_helpers.graph.viz = (function website_helpers$graph$viz(ratom,base_link){
var viz_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",-384071477),(1200),new cljs.core.Keyword(null,"height","height",1025178622),(1500),new cljs.core.Keyword(null,"hover-text-sel","hover-text-sel",-1797118521),null,new cljs.core.Keyword(null,"links-sel","links-sel",1725983752),null,new cljs.core.Keyword(null,"nodes-sel","nodes-sel",1504179930),null], null));
var sim = website_helpers.graph.create_sim(viz_state);
var drag = website_helpers.graph.create_drag(sim);
var color = d3.scaleOrdinal(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#377eb8","#4daf4a","#984ea3","#ff7f00"], null));
var add_circle = (function (sel){
return rid3.attrs.attrs(sel.append("ellipse"),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#fff",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),1.5,new cljs.core.Keyword(null,"rx","rx",1627208482),(function (p1__76877_SHARP_){
return ((5) * cljs.core.count(p1__76877_SHARP_.name));
}),new cljs.core.Keyword(null,"ry","ry",-334598563),(function (p1__76878_SHARP_){
var x__4336__auto__ = (25);
var y__4337__auto__ = p1__76878_SHARP_.size;
return ((x__4336__auto__ > y__4337__auto__) ? x__4336__auto__ : y__4337__auto__);
}),new cljs.core.Keyword(null,"fill","fill",883462889),(function (p1__76879_SHARP_){
var G__76882 = p1__76879_SHARP_.group;
return (color.cljs$core$IFn$_invoke$arity$1 ? color.cljs$core$IFn$_invoke$arity$1(G__76882) : color.call(null,G__76882));
}),new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),0.7], null));
});
var add_text = (function (sel){
return rid3.attrs.attrs(sel.append("text"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696),"middle"], null)).text((function (p1__76880_SHARP_){
return p1__76880_SHARP_.name;
}));
});
return (function (ratom__$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rid3.core.viz,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"force-graph",new cljs.core.Keyword(null,"ratom","ratom",-126521267),ratom__$1,new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (svg,ratom__$2){
var map__76883_76940 = cljs.core.deref(viz_state);
var map__76883_76941__$1 = cljs.core.__destructure_map(map__76883_76940);
var width_76942 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76883_76941__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height_76943 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76883_76941__$1,new cljs.core.Keyword(null,"height","height",1025178622));
rid3.attrs.attrs(svg,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),width_76942,new cljs.core.Keyword(null,"height","height",1025178622),height_76943,new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),[(0),(0),width_76942,height_76943]], null));

return website_helpers.graph.update_sim_BANG_(sim,(4),cljs.core.deref(ratom__$2));
}),new cljs.core.Keyword(null,"did-update","did-update",-2143702256),(function (svg,ratom__$2){
return website_helpers.graph.update_sim_BANG_(sim,0.5,cljs.core.deref(ratom__$2));
})], null),new cljs.core.Keyword(null,"pieces","pieces",-1436634023),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"elem-with-data","elem-with-data",-1845237220),new cljs.core.Keyword(null,"class","class",-2030961996),"links",new cljs.core.Keyword(null,"tag","tag",-1290361223),"line",new cljs.core.Keyword(null,"prepare-dataset","prepare-dataset",1819340010),(function (ratom__$2){
return new cljs.core.Keyword(null,"links","links",-654507394).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ratom__$2));
}),new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (sel,_ratom){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(viz_state,cljs.core.assoc,new cljs.core.Keyword(null,"links-sel","links-sel",1725983752),sel);

return rid3.attrs.attrs(sel,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#999",new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159),0.6,new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(function (p1__76881_SHARP_){
return Math.sqrt(p1__76881_SHARP_.value);
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
