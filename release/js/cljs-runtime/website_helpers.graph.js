goog.provide('website_helpers.graph');
/**
 * Turns hiccup like syntax into an HTML string.
 */
website_helpers.graph.html = (function website_helpers$graph$html(hiccup){
return sablono.server.render_static(sablono.interpreter.interpret(hiccup));
});
website_helpers.graph.create_sim = (function website_helpers$graph$create_sim(viz_state){
var map__60047 = cljs.core.deref(viz_state);
var map__60047__$1 = cljs.core.__destructure_map(map__60047);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60047__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60047__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var link_strength = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60047__$1,new cljs.core.Keyword(null,"link-strength","link-strength",-2036677116));
var charge_strength = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60047__$1,new cljs.core.Keyword(null,"charge-strength","charge-strength",1642158883));
var center_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60047__$1,new cljs.core.Keyword(null,"center-x","center-x",2109659472));
var center_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60047__$1,new cljs.core.Keyword(null,"center-y","center-y",-233780987));
var collide_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60047__$1,new cljs.core.Keyword(null,"collide-size","collide-size",-1869929356));
var G__60048 = d3.forceSimulation();
G__60048.stop();

G__60048.force("link",d3.forceLink().strength(link_strength).id((function (p1__60039_SHARP_){
return p1__60039_SHARP_.index;
})));

G__60048.force("charge",d3.forceManyBody().strength(charge_strength));

G__60048.force("center",d3.forceCenter(center_x,center_y));

G__60048.force("collide",d3.forceCollide(collide_size));

G__60048.on("tick",(function (){
var temp__5823__auto___60074 = new cljs.core.Keyword(null,"links-sel","links-sel",1725983752).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(viz_state));
if(cljs.core.truth_(temp__5823__auto___60074)){
var s_60075 = temp__5823__auto___60074;
rid3.attrs.attrs(s_60075,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x1","x1",-1863922247),(function (p1__60040_SHARP_){
return p1__60040_SHARP_.source.x;
}),new cljs.core.Keyword(null,"y1","y1",589123466),(function (p1__60041_SHARP_){
return p1__60041_SHARP_.source.y;
}),new cljs.core.Keyword(null,"x2","x2",-1362513475),(function (p1__60042_SHARP_){
return p1__60042_SHARP_.target.x;
}),new cljs.core.Keyword(null,"y2","y2",-718691301),(function (p1__60043_SHARP_){
return p1__60043_SHARP_.target.y;
})], null));
} else {
}

var temp__5823__auto__ = new cljs.core.Keyword(null,"nodes-sel","nodes-sel",1504179930).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(viz_state));
if(cljs.core.truth_(temp__5823__auto__)){
var s = temp__5823__auto__;
return rid3.attrs.attrs(s,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"transform","transform",1381301764),(function (p1__60044_SHARP_){
return ["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__60044_SHARP_.x),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__60044_SHARP_.y),")"].join('');
}),new cljs.core.Keyword(null,"x","x",2099068185),(function (p1__60045_SHARP_){
return p1__60045_SHARP_.x;
}),new cljs.core.Keyword(null,"y","y",-1757859776),(function (p1__60046_SHARP_){
return p1__60046_SHARP_.y;
})], null));
} else {
return null;
}
}));

return G__60048;
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
var seq__60049_60076 = cljs.core.seq(new$);
var chunk__60050_60077 = null;
var count__60051_60078 = (0);
var i__60052_60079 = (0);
while(true){
if((i__60052_60079 < count__60051_60078)){
var n_60080 = chunk__60050_60077.cljs$core$IIndexed$_nth$arity$2(null,i__60052_60079);
var temp__5823__auto___60081 = (orig[(function (){var G__60055 = (id.cljs$core$IFn$_invoke$arity$1 ? id.cljs$core$IFn$_invoke$arity$1(n_60080) : id.call(null,n_60080));
return (orig_map.cljs$core$IFn$_invoke$arity$1 ? orig_map.cljs$core$IFn$_invoke$arity$1(G__60055) : orig_map.call(null,G__60055));
})()]);
if(cljs.core.truth_(temp__5823__auto___60081)){
var old_60082 = temp__5823__auto___60081;
var temp__5823__auto___60083__$1 = old_60082.x;
if(cljs.core.truth_(temp__5823__auto___60083__$1)){
var x_60084 = temp__5823__auto___60083__$1;
(n_60080.x = x_60084);
} else {
}

var temp__5823__auto___60085__$1 = old_60082.y;
if(cljs.core.truth_(temp__5823__auto___60085__$1)){
var y_60086 = temp__5823__auto___60085__$1;
(n_60080.y = y_60086);
} else {
}

var temp__5823__auto___60087__$1 = old_60082.vx;
if(cljs.core.truth_(temp__5823__auto___60087__$1)){
var vx_60088 = temp__5823__auto___60087__$1;
(n_60080.vx = vx_60088);
} else {
}

var temp__5823__auto___60089__$1 = old_60082.vy;
if(cljs.core.truth_(temp__5823__auto___60089__$1)){
var vy_60090 = temp__5823__auto___60089__$1;
(n_60080.vy = vy_60090);
} else {
}

var temp__5823__auto___60091__$1 = old_60082.fx;
if(cljs.core.truth_(temp__5823__auto___60091__$1)){
var fx_60092 = temp__5823__auto___60091__$1;
(n_60080.fx = fx_60092);
} else {
}

var temp__5823__auto___60093__$1 = old_60082.fy;
if(cljs.core.truth_(temp__5823__auto___60093__$1)){
var fy_60094 = temp__5823__auto___60093__$1;
(n_60080.fy = fy_60094);
} else {
}
} else {
}


var G__60095 = seq__60049_60076;
var G__60096 = chunk__60050_60077;
var G__60097 = count__60051_60078;
var G__60098 = (i__60052_60079 + (1));
seq__60049_60076 = G__60095;
chunk__60050_60077 = G__60096;
count__60051_60078 = G__60097;
i__60052_60079 = G__60098;
continue;
} else {
var temp__5823__auto___60099 = cljs.core.seq(seq__60049_60076);
if(temp__5823__auto___60099){
var seq__60049_60100__$1 = temp__5823__auto___60099;
if(cljs.core.chunked_seq_QMARK_(seq__60049_60100__$1)){
var c__5568__auto___60101 = cljs.core.chunk_first(seq__60049_60100__$1);
var G__60102 = cljs.core.chunk_rest(seq__60049_60100__$1);
var G__60103 = c__5568__auto___60101;
var G__60104 = cljs.core.count(c__5568__auto___60101);
var G__60105 = (0);
seq__60049_60076 = G__60102;
chunk__60050_60077 = G__60103;
count__60051_60078 = G__60104;
i__60052_60079 = G__60105;
continue;
} else {
var n_60106 = cljs.core.first(seq__60049_60100__$1);
var temp__5823__auto___60107__$1 = (orig[(function (){var G__60056 = (id.cljs$core$IFn$_invoke$arity$1 ? id.cljs$core$IFn$_invoke$arity$1(n_60106) : id.call(null,n_60106));
return (orig_map.cljs$core$IFn$_invoke$arity$1 ? orig_map.cljs$core$IFn$_invoke$arity$1(G__60056) : orig_map.call(null,G__60056));
})()]);
if(cljs.core.truth_(temp__5823__auto___60107__$1)){
var old_60108 = temp__5823__auto___60107__$1;
var temp__5823__auto___60109__$2 = old_60108.x;
if(cljs.core.truth_(temp__5823__auto___60109__$2)){
var x_60110 = temp__5823__auto___60109__$2;
(n_60106.x = x_60110);
} else {
}

var temp__5823__auto___60111__$2 = old_60108.y;
if(cljs.core.truth_(temp__5823__auto___60111__$2)){
var y_60112 = temp__5823__auto___60111__$2;
(n_60106.y = y_60112);
} else {
}

var temp__5823__auto___60113__$2 = old_60108.vx;
if(cljs.core.truth_(temp__5823__auto___60113__$2)){
var vx_60114 = temp__5823__auto___60113__$2;
(n_60106.vx = vx_60114);
} else {
}

var temp__5823__auto___60115__$2 = old_60108.vy;
if(cljs.core.truth_(temp__5823__auto___60115__$2)){
var vy_60116 = temp__5823__auto___60115__$2;
(n_60106.vy = vy_60116);
} else {
}

var temp__5823__auto___60117__$2 = old_60108.fx;
if(cljs.core.truth_(temp__5823__auto___60117__$2)){
var fx_60118 = temp__5823__auto___60117__$2;
(n_60106.fx = fx_60118);
} else {
}

var temp__5823__auto___60119__$2 = old_60108.fy;
if(cljs.core.truth_(temp__5823__auto___60119__$2)){
var fy_60120 = temp__5823__auto___60119__$2;
(n_60106.fy = fy_60120);
} else {
}
} else {
}


var G__60121 = cljs.core.next(seq__60049_60100__$1);
var G__60122 = null;
var G__60123 = (0);
var G__60124 = (0);
seq__60049_60076 = G__60121;
chunk__60050_60077 = G__60122;
count__60051_60078 = G__60123;
i__60052_60079 = G__60124;
continue;
}
} else {
}
}
break;
}

return new$;
});
website_helpers.graph.update_sim_BANG_ = (function website_helpers$graph$update_sim_BANG_(sim,alpha_target,p__60058){
var map__60059 = p__60058;
var map__60059__$1 = cljs.core.__destructure_map(map__60059);
var links = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60059__$1,new cljs.core.Keyword(null,"links","links",-654507394));
var nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60059__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var old_nodes = sim.nodes();
var new_nodes = website_helpers.graph.merge_nodes(old_nodes,nodes,(function (p1__60057_SHARP_){
return p1__60057_SHARP_.name;
}));
var G__60060 = sim;
G__60060.nodes(new_nodes);

G__60060.force("link").links(links);

G__60060.alpha(alpha_target);

G__60060.restart();

return G__60060;
});
website_helpers.graph.viz = (function website_helpers$graph$viz(ratom,base_link,state_override_map){
var viz_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"initial-alpha","initial-alpha",-515968256),new cljs.core.Keyword(null,"charge-strength","charge-strength",1642158883),new cljs.core.Keyword(null,"link-strength","link-strength",-2036677116),new cljs.core.Keyword(null,"center-y","center-y",-233780987),new cljs.core.Keyword(null,"hover-text-sel","hover-text-sel",-1797118521),new cljs.core.Keyword(null,"links-sel","links-sel",1725983752),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"center-x","center-x",2109659472),new cljs.core.Keyword(null,"collide-size","collide-size",-1869929356),new cljs.core.Keyword(null,"nodes-sel","nodes-sel",1504179930),new cljs.core.Keyword(null,"height","height",1025178622)],[(4),(-50),0.08,(750),null,null,(2000),(1000),(30),null,(1500)]),state_override_map], 0)));
var sim = website_helpers.graph.create_sim(viz_state);
var drag = website_helpers.graph.create_drag(sim);
var color = d3.scaleOrdinal(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#377eb8","#4daf4a","#984ea3","#ff7f00"], null));
var add_circle = (function (sel){
return rid3.attrs.attrs(sel.append("ellipse"),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#fff",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),1.5,new cljs.core.Keyword(null,"rx","rx",1627208482),(function (p1__60061_SHARP_){
return (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),p1__60061_SHARP_.group))?(3):4.5) * cljs.core.count(p1__60061_SHARP_.name));
}),new cljs.core.Keyword(null,"ry","ry",-334598563),(function (p1__60062_SHARP_){
return ((function (){var x__5130__auto__ = (25);
var y__5131__auto__ = p1__60062_SHARP_.size;
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})() / 1.8);
}),new cljs.core.Keyword(null,"fill","fill",883462889),(function (p1__60063_SHARP_){
var G__60068 = p1__60063_SHARP_.group;
return (color.cljs$core$IFn$_invoke$arity$1 ? color.cljs$core$IFn$_invoke$arity$1(G__60068) : color.call(null,G__60068));
}),new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),0.7], null));
});
var add_text = (function (sel){
return rid3.attrs.attrs(sel.append("text"),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696),"middle",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(function (p1__60064_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),p1__60064_SHARP_.group)){
return "small";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((4),p1__60064_SHARP_.group)){
return "small";
} else {
return "x-small";

}
}
}),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),(function (p1__60065_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((4),p1__60065_SHARP_.group)){
return "bold";
} else {
return "normal";
}
}),new cljs.core.Keyword(null,"y","y",-1757859776),(5)], null)).text((function (p1__60066_SHARP_){
return p1__60066_SHARP_.name;
}));
});
return (function (ratom__$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rid3.core.viz,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"force-graph",new cljs.core.Keyword(null,"ratom","ratom",-126521267),ratom__$1,new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (svg,ratom__$2){
var map__60069 = cljs.core.deref(viz_state);
var map__60069__$1 = cljs.core.__destructure_map(map__60069);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60069__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60069__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var initial_alpha = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60069__$1,new cljs.core.Keyword(null,"initial-alpha","initial-alpha",-515968256));
rid3.attrs.attrs(svg,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),[(0),(0),width,height]], null));

return website_helpers.graph.update_sim_BANG_(sim,initial_alpha,cljs.core.deref(ratom__$2));
}),new cljs.core.Keyword(null,"did-update","did-update",-2143702256),(function (svg,ratom__$2){
return website_helpers.graph.update_sim_BANG_(sim,0.5,cljs.core.deref(ratom__$2));
})], null),new cljs.core.Keyword(null,"pieces","pieces",-1436634023),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"elem-with-data","elem-with-data",-1845237220),new cljs.core.Keyword(null,"class","class",-2030961996),"links",new cljs.core.Keyword(null,"tag","tag",-1290361223),"line",new cljs.core.Keyword(null,"prepare-dataset","prepare-dataset",1819340010),(function (ratom__$2){
return new cljs.core.Keyword(null,"links","links",-654507394).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ratom__$2));
}),new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (sel,_ratom){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(viz_state,cljs.core.assoc,new cljs.core.Keyword(null,"links-sel","links-sel",1725983752),sel);

return rid3.attrs.attrs(sel,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#999",new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159),0.6,new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(function (p1__60067_SHARP_){
return (Math.sqrt(p1__60067_SHARP_.value) / (2));
})], null));
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"elem-with-data","elem-with-data",-1845237220),new cljs.core.Keyword(null,"class","class",-2030961996),"nodes",new cljs.core.Keyword(null,"tag","tag",-1290361223),"g",new cljs.core.Keyword(null,"prepare-dataset","prepare-dataset",1819340010),(function (ratom__$2){
return new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ratom__$2));
}),new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (sel,_ratom){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(viz_state,cljs.core.assoc,new cljs.core.Keyword(null,"nodes-sel","nodes-sel",1504179930),sel);

add_circle(sel);

add_text(sel);

return sel.on("dblclick",(function (_event,node){
return window.open([cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_link),clojure.string.replace(node.path,/ /,"+")].join(''));
})).call(drag);
})], null)], null)], null)], null);
});
});
website_helpers.graph.prechew = (function website_helpers$graph$prechew(app_state){
cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function website_helpers$graph$prechew_$_iter__60070(s__60071){
return (new cljs.core.LazySeq(null,(function (){
var s__60071__$1 = s__60071;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__60071__$1);
if(temp__5823__auto__){
var s__60071__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60071__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__60071__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__60073 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__60072 = (0);
while(true){
if((i__60072 < size__5522__auto__)){
var node = cljs.core._nth(c__5521__auto__,i__60072);
cljs.core.chunk_append(b__60073,cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(node),new cljs.core.Keyword(null,"categories","categories",178386610).cljs$core$IFn$_invoke$arity$1(node)], 0)));

var G__60137 = (i__60072 + (1));
i__60072 = G__60137;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60073),website_helpers$graph$prechew_$_iter__60070(cljs.core.chunk_rest(s__60071__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60073),null);
}
} else {
var node = cljs.core.first(s__60071__$2);
return cljs.core.cons(cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(node),new cljs.core.Keyword(null,"categories","categories",178386610).cljs$core$IFn$_invoke$arity$1(node)], 0)),website_helpers$graph$prechew_$_iter__60070(cljs.core.rest(s__60071__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app_state)));
})());

return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(app_state),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),cljs.core.clj__GT_js),new cljs.core.Keyword(null,"links","links",-654507394),cljs.core.clj__GT_js);
});

//# sourceMappingURL=website_helpers.graph.js.map
