goog.provide('clojure.core.rrb_vector.transients');
clojure.core.rrb_vector.transients.ensure_editable = (function clojure$core$rrb_vector$transients$ensure_editable(edit,node){
if((node.edit === edit)){
return node;
} else {
var new_arr = cljs.core.aclone(node.arr);
if(((33) === new_arr.length)){
(new_arr[(32)] = cljs.core.aclone((new_arr[(32)])));
} else {
}

return (new cljs.core.VectorNode(edit,new_arr));
}
});
clojure.core.rrb_vector.transients.editable_root = (function clojure$core$rrb_vector$transients$editable_root(root){
var new_arr = cljs.core.aclone(root.arr);
if(((33) === new_arr.length)){
(new_arr[(32)] = cljs.core.aclone((new_arr[(32)])));
} else {
}

return (new cljs.core.VectorNode(({}),new_arr));
});
clojure.core.rrb_vector.transients.editable_tail = (function clojure$core$rrb_vector$transients$editable_tail(tail){
var ret = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
cljs.core.array_copy(tail,(0),ret,(0),tail.length);

return ret;
});
clojure.core.rrb_vector.transients.push_tail_BANG_ = (function clojure$core$rrb_vector$transients$push_tail_BANG_(shift,cnt,root_edit,current_node,tail_node){
var ret = clojure.core.rrb_vector.transients.ensure_editable(root_edit,current_node);
if(clojure.core.rrb_vector.nodes.regular_QMARK_(ret)){
var n_61887 = ret;
var shift_61888__$1 = shift;
while(true){
var arr_61889 = n_61887.arr;
var subidx_61890 = (((cnt - (1)) >> shift_61888__$1) & (31));
if((shift_61888__$1 === (5))){
(arr_61889[subidx_61890] = tail_node);
} else {
var child_61891 = (arr_61889[subidx_61890]);
if((child_61891 == null)){
(arr_61889[subidx_61890] = clojure.core.rrb_vector.trees.new_path(tail_node.arr,root_edit,(shift_61888__$1 - (5)),tail_node));
} else {
var editable_child_61892 = clojure.core.rrb_vector.transients.ensure_editable(root_edit,child_61891);
(arr_61889[subidx_61890] = editable_child_61892);

var G__61893 = editable_child_61892;
var G__61894 = (shift_61888__$1 - (5));
n_61887 = G__61893;
shift_61888__$1 = G__61894;
continue;
}
}
break;
}

return ret;
} else {
var arr = ret.arr;
var rngs = clojure.core.rrb_vector.nodes.node_ranges(ret);
var li = ((rngs[(32)]) - (1));
var cret = (((shift === (5)))?null:(function (){var child = clojure.core.rrb_vector.transients.ensure_editable(root_edit,(arr[li]));
var ccnt = ((((li > (0)))?((rngs[li]) - (rngs[(li - (1))])):(rngs[(0)])) + (32));
if((!(clojure.core.rrb_vector.nodes.overflow_QMARK_(child,(shift - (5)),ccnt)))){
var G__61863 = (shift - (5));
var G__61864 = ccnt;
var G__61865 = root_edit;
var G__61866 = child;
var G__61867 = tail_node;
return (clojure.core.rrb_vector.transients.push_tail_BANG_.cljs$core$IFn$_invoke$arity$5 ? clojure.core.rrb_vector.transients.push_tail_BANG_.cljs$core$IFn$_invoke$arity$5(G__61863,G__61864,G__61865,G__61866,G__61867) : clojure.core.rrb_vector.transients.push_tail_BANG_.call(null,G__61863,G__61864,G__61865,G__61866,G__61867));
} else {
return null;
}
})());
if(cljs.core.truth_(cret)){
(arr[li] = cret);

(rngs[li] = ((rngs[li]) + (32)));

return ret;
} else {
if((li >= (31))){
var msg_61896 = ["Assigning index ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((li + (1)))," of vector"," object array to become a node, when that"," index should only be used for storing"," range arrays."].join('');
var data_61897 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"shift","shift",997140064),shift,new cljs.core.Keyword(null,"cnd","cnd",-521882032),cnt,new cljs.core.Keyword(null,"current-node","current-node",-814308842),current_node,new cljs.core.Keyword(null,"tail-node","tail-node",-1373693221),tail_node,new cljs.core.Keyword(null,"rngs","rngs",-8039697),rngs,new cljs.core.Keyword(null,"li","li",723558921),li,new cljs.core.Keyword(null,"cret","cret",2090504467),cret], null);
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(msg_61896,data_61897);
} else {
}

(arr[(li + (1))] = clojure.core.rrb_vector.trees.new_path(tail_node.arr,root_edit,(shift - (5)),tail_node));

(rngs[(li + (1))] = ((rngs[li]) + (32)));

(rngs[(32)] = ((rngs[(32)]) + (1)));

return ret;
}
}
});
clojure.core.rrb_vector.transients.pop_tail_BANG_ = (function clojure$core$rrb_vector$transients$pop_tail_BANG_(shift,cnt,root_edit,current_node){
var ret = clojure.core.rrb_vector.transients.ensure_editable(root_edit,current_node);
if(clojure.core.rrb_vector.nodes.regular_QMARK_(ret)){
var subidx = (((cnt - (2)) >> shift) & (31));
if((shift > (5))){
var child = (function (){var G__61872 = (shift - (5));
var G__61873 = cnt;
var G__61874 = root_edit;
var G__61875 = (ret.arr[subidx]);
return (clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4 ? clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4(G__61872,G__61873,G__61874,G__61875) : clojure.core.rrb_vector.transients.pop_tail_BANG_.call(null,G__61872,G__61873,G__61874,G__61875));
})();
if((((child == null)) && ((subidx === (0))))){
return null;
} else {
var arr = ret.arr;
(arr[subidx] = child);

return ret;
}
} else {
if((subidx === (0))){
return null;
} else {
var arr = ret.arr;
(arr[subidx] = null);

return ret;

}
}
} else {
var rngs = clojure.core.rrb_vector.nodes.node_ranges(ret);
var subidx = ((rngs[(32)]) - (1));
if((shift > (5))){
var child = (ret.arr[subidx]);
var child_cnt = (((subidx === (0)))?(rngs[(0)]):((rngs[subidx]) - (rngs[(subidx - (1))])));
var new_child = (function (){var G__61877 = (shift - (5));
var G__61878 = child_cnt;
var G__61879 = root_edit;
var G__61880 = child;
return (clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4 ? clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4(G__61877,G__61878,G__61879,G__61880) : clojure.core.rrb_vector.transients.pop_tail_BANG_.call(null,G__61877,G__61878,G__61879,G__61880));
})();
if((((new_child == null)) && ((subidx === (0))))){
return null;
} else {
if(clojure.core.rrb_vector.nodes.regular_QMARK_(child)){
var arr = ret.arr;
(rngs[subidx] = ((rngs[subidx]) - (32)));

(arr[subidx] = new_child);

if((new_child == null)){
(rngs[(32)] = ((rngs[(32)]) - (1)));
} else {
}

return ret;
} else {
var rng = clojure.core.rrb_vector.nodes.last_range(child);
var diff = (rng - (cljs.core.truth_(new_child)?clojure.core.rrb_vector.nodes.last_range(new_child):(0)));
var arr = ret.arr;
(rngs[subidx] = ((rngs[subidx]) - diff));

(arr[subidx] = new_child);

if((new_child == null)){
(rngs[(32)] = ((rngs[(32)]) - (1)));
} else {
}

return ret;

}
}
} else {
if((subidx === (0))){
return null;
} else {
var arr = ret.arr;
var child = (arr[subidx]);
(arr[subidx] = null);

(rngs[subidx] = (0));

(rngs[(32)] = ((rngs[(32)]) - (1)));

return ret;

}
}
}
});
clojure.core.rrb_vector.transients.do_assoc_BANG_ = (function clojure$core$rrb_vector$transients$do_assoc_BANG_(shift,root_edit,current_node,i,val){
var ret = clojure.core.rrb_vector.transients.ensure_editable(root_edit,current_node);
if(clojure.core.rrb_vector.nodes.regular_QMARK_(ret)){
var shift_61917__$1 = shift;
var node_61918 = ret;
while(true){
if((shift_61917__$1 === (0))){
var arr_61920 = node_61918.arr;
(arr_61920[(i & (31))] = val);
} else {
var arr_61922 = node_61918.arr;
var subidx_61923 = ((i >> shift_61917__$1) & (31));
var child_61924 = clojure.core.rrb_vector.transients.ensure_editable(root_edit,(arr_61922[subidx_61923]));
(arr_61922[subidx_61923] = child_61924);

var G__61925 = (shift_61917__$1 - (5));
var G__61926 = child_61924;
shift_61917__$1 = G__61925;
node_61918 = G__61926;
continue;
}
break;
}
} else {
var arr_61927 = ret.arr;
var rngs_61928 = clojure.core.rrb_vector.nodes.node_ranges(ret);
var subidx_61929 = ((i >> shift) & (31));
var subidx_61930__$1 = (function (){var subidx_61930__$1 = subidx_61929;
while(true){
if((i < ((rngs_61928[subidx_61930__$1]) | (0)))){
return subidx_61930__$1;
} else {
var G__61932 = (subidx_61930__$1 + (1));
subidx_61930__$1 = G__61932;
continue;
}
break;
}
})();
var i_61931__$1 = (((subidx_61930__$1 === (0)))?i:(i - (rngs_61928[(subidx_61930__$1 - (1))])));
(arr_61927[subidx_61930__$1] = (function (){var G__61881 = (shift - (5));
var G__61882 = root_edit;
var G__61883 = (arr_61927[subidx_61930__$1]);
var G__61884 = i_61931__$1;
var G__61885 = val;
return (clojure.core.rrb_vector.transients.do_assoc_BANG_.cljs$core$IFn$_invoke$arity$5 ? clojure.core.rrb_vector.transients.do_assoc_BANG_.cljs$core$IFn$_invoke$arity$5(G__61881,G__61882,G__61883,G__61884,G__61885) : clojure.core.rrb_vector.transients.do_assoc_BANG_.call(null,G__61881,G__61882,G__61883,G__61884,G__61885));
})());
}

return ret;
});

//# sourceMappingURL=clojure.core.rrb_vector.transients.js.map
