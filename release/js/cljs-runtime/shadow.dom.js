goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_50755 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_50755(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_50766 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_50766(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__49654 = coll;
var G__49655 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__49654,G__49655) : shadow.dom.lazy_native_coll_seq.call(null,G__49654,G__49655));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4253__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__49719 = arguments.length;
switch (G__49719) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__49730 = arguments.length;
switch (G__49730) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__49775 = arguments.length;
switch (G__49775) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__49808 = arguments.length;
switch (G__49808) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__49843 = arguments.length;
switch (G__49843) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__49859 = arguments.length;
switch (G__49859) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e49878){if((e49878 instanceof Object)){
var e = e49878;
return console.log("didnt support attachEvent",el,e);
} else {
throw e49878;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__49884 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__49885 = null;
var count__49886 = (0);
var i__49887 = (0);
while(true){
if((i__49887 < count__49886)){
var el = chunk__49885.cljs$core$IIndexed$_nth$arity$2(null,i__49887);
var handler_50874__$1 = ((function (seq__49884,chunk__49885,count__49886,i__49887,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__49884,chunk__49885,count__49886,i__49887,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_50874__$1);


var G__50880 = seq__49884;
var G__50881 = chunk__49885;
var G__50882 = count__49886;
var G__50883 = (i__49887 + (1));
seq__49884 = G__50880;
chunk__49885 = G__50881;
count__49886 = G__50882;
i__49887 = G__50883;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__49884);
if(temp__5753__auto__){
var seq__49884__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49884__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__49884__$1);
var G__50888 = cljs.core.chunk_rest(seq__49884__$1);
var G__50889 = c__4679__auto__;
var G__50890 = cljs.core.count(c__4679__auto__);
var G__50891 = (0);
seq__49884 = G__50888;
chunk__49885 = G__50889;
count__49886 = G__50890;
i__49887 = G__50891;
continue;
} else {
var el = cljs.core.first(seq__49884__$1);
var handler_50892__$1 = ((function (seq__49884,chunk__49885,count__49886,i__49887,el,seq__49884__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__49884,chunk__49885,count__49886,i__49887,el,seq__49884__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_50892__$1);


var G__50893 = cljs.core.next(seq__49884__$1);
var G__50894 = null;
var G__50895 = (0);
var G__50896 = (0);
seq__49884 = G__50893;
chunk__49885 = G__50894;
count__49886 = G__50895;
i__49887 = G__50896;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__49905 = arguments.length;
switch (G__49905) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__49906 = cljs.core.seq(events);
var chunk__49907 = null;
var count__49908 = (0);
var i__49909 = (0);
while(true){
if((i__49909 < count__49908)){
var vec__49921 = chunk__49907.cljs$core$IIndexed$_nth$arity$2(null,i__49909);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49921,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49921,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__50904 = seq__49906;
var G__50905 = chunk__49907;
var G__50906 = count__49908;
var G__50907 = (i__49909 + (1));
seq__49906 = G__50904;
chunk__49907 = G__50905;
count__49908 = G__50906;
i__49909 = G__50907;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__49906);
if(temp__5753__auto__){
var seq__49906__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49906__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__49906__$1);
var G__50908 = cljs.core.chunk_rest(seq__49906__$1);
var G__50909 = c__4679__auto__;
var G__50910 = cljs.core.count(c__4679__auto__);
var G__50911 = (0);
seq__49906 = G__50908;
chunk__49907 = G__50909;
count__49908 = G__50910;
i__49909 = G__50911;
continue;
} else {
var vec__49924 = cljs.core.first(seq__49906__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49924,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49924,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__50912 = cljs.core.next(seq__49906__$1);
var G__50913 = null;
var G__50914 = (0);
var G__50915 = (0);
seq__49906 = G__50912;
chunk__49907 = G__50913;
count__49908 = G__50914;
i__49909 = G__50915;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__49933 = cljs.core.seq(styles);
var chunk__49934 = null;
var count__49935 = (0);
var i__49936 = (0);
while(true){
if((i__49936 < count__49935)){
var vec__49952 = chunk__49934.cljs$core$IIndexed$_nth$arity$2(null,i__49936);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49952,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49952,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__50917 = seq__49933;
var G__50918 = chunk__49934;
var G__50919 = count__49935;
var G__50920 = (i__49936 + (1));
seq__49933 = G__50917;
chunk__49934 = G__50918;
count__49935 = G__50919;
i__49936 = G__50920;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__49933);
if(temp__5753__auto__){
var seq__49933__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49933__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__49933__$1);
var G__50921 = cljs.core.chunk_rest(seq__49933__$1);
var G__50922 = c__4679__auto__;
var G__50923 = cljs.core.count(c__4679__auto__);
var G__50924 = (0);
seq__49933 = G__50921;
chunk__49934 = G__50922;
count__49935 = G__50923;
i__49936 = G__50924;
continue;
} else {
var vec__49956 = cljs.core.first(seq__49933__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49956,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49956,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__50925 = cljs.core.next(seq__49933__$1);
var G__50926 = null;
var G__50927 = (0);
var G__50928 = (0);
seq__49933 = G__50925;
chunk__49934 = G__50926;
count__49935 = G__50927;
i__49936 = G__50928;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__49959_50929 = key;
var G__49959_50930__$1 = (((G__49959_50929 instanceof cljs.core.Keyword))?G__49959_50929.fqn:null);
switch (G__49959_50930__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_50956 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4253__auto__ = goog.string.startsWith(ks_50956,"data-");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return goog.string.startsWith(ks_50956,"aria-");
}
})())){
el.setAttribute(ks_50956,value);
} else {
(el[ks_50956] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__49993){
var map__49995 = p__49993;
var map__49995__$1 = cljs.core.__destructure_map(map__49995);
var props = map__49995__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49995__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__49997 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49997,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49997,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49997,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__50001 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__50001,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__50001;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__50017 = arguments.length;
switch (G__50017) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__50046){
var vec__50048 = p__50046;
var seq__50049 = cljs.core.seq(vec__50048);
var first__50050 = cljs.core.first(seq__50049);
var seq__50049__$1 = cljs.core.next(seq__50049);
var nn = first__50050;
var first__50050__$1 = cljs.core.first(seq__50049__$1);
var seq__50049__$2 = cljs.core.next(seq__50049__$1);
var np = first__50050__$1;
var nc = seq__50049__$2;
var node = vec__50048;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__50055 = nn;
var G__50056 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__50055,G__50056) : create_fn.call(null,G__50055,G__50056));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__50059 = nn;
var G__50060 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__50059,G__50060) : create_fn.call(null,G__50059,G__50060));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__50063 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50063,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50063,(1),null);
var seq__50067_51012 = cljs.core.seq(node_children);
var chunk__50068_51013 = null;
var count__50069_51014 = (0);
var i__50070_51015 = (0);
while(true){
if((i__50070_51015 < count__50069_51014)){
var child_struct_51018 = chunk__50068_51013.cljs$core$IIndexed$_nth$arity$2(null,i__50070_51015);
var children_51019 = shadow.dom.dom_node(child_struct_51018);
if(cljs.core.seq_QMARK_(children_51019)){
var seq__50095_51020 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_51019));
var chunk__50097_51021 = null;
var count__50098_51022 = (0);
var i__50099_51023 = (0);
while(true){
if((i__50099_51023 < count__50098_51022)){
var child_51024 = chunk__50097_51021.cljs$core$IIndexed$_nth$arity$2(null,i__50099_51023);
if(cljs.core.truth_(child_51024)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_51024);


var G__51025 = seq__50095_51020;
var G__51026 = chunk__50097_51021;
var G__51027 = count__50098_51022;
var G__51028 = (i__50099_51023 + (1));
seq__50095_51020 = G__51025;
chunk__50097_51021 = G__51026;
count__50098_51022 = G__51027;
i__50099_51023 = G__51028;
continue;
} else {
var G__51029 = seq__50095_51020;
var G__51030 = chunk__50097_51021;
var G__51031 = count__50098_51022;
var G__51032 = (i__50099_51023 + (1));
seq__50095_51020 = G__51029;
chunk__50097_51021 = G__51030;
count__50098_51022 = G__51031;
i__50099_51023 = G__51032;
continue;
}
} else {
var temp__5753__auto___51033 = cljs.core.seq(seq__50095_51020);
if(temp__5753__auto___51033){
var seq__50095_51034__$1 = temp__5753__auto___51033;
if(cljs.core.chunked_seq_QMARK_(seq__50095_51034__$1)){
var c__4679__auto___51036 = cljs.core.chunk_first(seq__50095_51034__$1);
var G__51037 = cljs.core.chunk_rest(seq__50095_51034__$1);
var G__51038 = c__4679__auto___51036;
var G__51039 = cljs.core.count(c__4679__auto___51036);
var G__51040 = (0);
seq__50095_51020 = G__51037;
chunk__50097_51021 = G__51038;
count__50098_51022 = G__51039;
i__50099_51023 = G__51040;
continue;
} else {
var child_51044 = cljs.core.first(seq__50095_51034__$1);
if(cljs.core.truth_(child_51044)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_51044);


var G__51045 = cljs.core.next(seq__50095_51034__$1);
var G__51046 = null;
var G__51047 = (0);
var G__51048 = (0);
seq__50095_51020 = G__51045;
chunk__50097_51021 = G__51046;
count__50098_51022 = G__51047;
i__50099_51023 = G__51048;
continue;
} else {
var G__51049 = cljs.core.next(seq__50095_51034__$1);
var G__51050 = null;
var G__51051 = (0);
var G__51052 = (0);
seq__50095_51020 = G__51049;
chunk__50097_51021 = G__51050;
count__50098_51022 = G__51051;
i__50099_51023 = G__51052;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_51019);
}


var G__51053 = seq__50067_51012;
var G__51054 = chunk__50068_51013;
var G__51055 = count__50069_51014;
var G__51056 = (i__50070_51015 + (1));
seq__50067_51012 = G__51053;
chunk__50068_51013 = G__51054;
count__50069_51014 = G__51055;
i__50070_51015 = G__51056;
continue;
} else {
var temp__5753__auto___51057 = cljs.core.seq(seq__50067_51012);
if(temp__5753__auto___51057){
var seq__50067_51058__$1 = temp__5753__auto___51057;
if(cljs.core.chunked_seq_QMARK_(seq__50067_51058__$1)){
var c__4679__auto___51059 = cljs.core.chunk_first(seq__50067_51058__$1);
var G__51060 = cljs.core.chunk_rest(seq__50067_51058__$1);
var G__51061 = c__4679__auto___51059;
var G__51062 = cljs.core.count(c__4679__auto___51059);
var G__51063 = (0);
seq__50067_51012 = G__51060;
chunk__50068_51013 = G__51061;
count__50069_51014 = G__51062;
i__50070_51015 = G__51063;
continue;
} else {
var child_struct_51064 = cljs.core.first(seq__50067_51058__$1);
var children_51065 = shadow.dom.dom_node(child_struct_51064);
if(cljs.core.seq_QMARK_(children_51065)){
var seq__50108_51066 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_51065));
var chunk__50110_51067 = null;
var count__50111_51068 = (0);
var i__50112_51069 = (0);
while(true){
if((i__50112_51069 < count__50111_51068)){
var child_51070 = chunk__50110_51067.cljs$core$IIndexed$_nth$arity$2(null,i__50112_51069);
if(cljs.core.truth_(child_51070)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_51070);


var G__51073 = seq__50108_51066;
var G__51074 = chunk__50110_51067;
var G__51075 = count__50111_51068;
var G__51076 = (i__50112_51069 + (1));
seq__50108_51066 = G__51073;
chunk__50110_51067 = G__51074;
count__50111_51068 = G__51075;
i__50112_51069 = G__51076;
continue;
} else {
var G__51077 = seq__50108_51066;
var G__51078 = chunk__50110_51067;
var G__51079 = count__50111_51068;
var G__51080 = (i__50112_51069 + (1));
seq__50108_51066 = G__51077;
chunk__50110_51067 = G__51078;
count__50111_51068 = G__51079;
i__50112_51069 = G__51080;
continue;
}
} else {
var temp__5753__auto___51084__$1 = cljs.core.seq(seq__50108_51066);
if(temp__5753__auto___51084__$1){
var seq__50108_51085__$1 = temp__5753__auto___51084__$1;
if(cljs.core.chunked_seq_QMARK_(seq__50108_51085__$1)){
var c__4679__auto___51086 = cljs.core.chunk_first(seq__50108_51085__$1);
var G__51087 = cljs.core.chunk_rest(seq__50108_51085__$1);
var G__51088 = c__4679__auto___51086;
var G__51089 = cljs.core.count(c__4679__auto___51086);
var G__51090 = (0);
seq__50108_51066 = G__51087;
chunk__50110_51067 = G__51088;
count__50111_51068 = G__51089;
i__50112_51069 = G__51090;
continue;
} else {
var child_51091 = cljs.core.first(seq__50108_51085__$1);
if(cljs.core.truth_(child_51091)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_51091);


var G__51092 = cljs.core.next(seq__50108_51085__$1);
var G__51093 = null;
var G__51094 = (0);
var G__51095 = (0);
seq__50108_51066 = G__51092;
chunk__50110_51067 = G__51093;
count__50111_51068 = G__51094;
i__50112_51069 = G__51095;
continue;
} else {
var G__51096 = cljs.core.next(seq__50108_51085__$1);
var G__51097 = null;
var G__51098 = (0);
var G__51099 = (0);
seq__50108_51066 = G__51096;
chunk__50110_51067 = G__51097;
count__50111_51068 = G__51098;
i__50112_51069 = G__51099;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_51065);
}


var G__51100 = cljs.core.next(seq__50067_51058__$1);
var G__51101 = null;
var G__51102 = (0);
var G__51103 = (0);
seq__50067_51012 = G__51100;
chunk__50068_51013 = G__51101;
count__50069_51014 = G__51102;
i__50070_51015 = G__51103;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__50147 = cljs.core.seq(node);
var chunk__50148 = null;
var count__50149 = (0);
var i__50150 = (0);
while(true){
if((i__50150 < count__50149)){
var n = chunk__50148.cljs$core$IIndexed$_nth$arity$2(null,i__50150);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__51108 = seq__50147;
var G__51109 = chunk__50148;
var G__51110 = count__50149;
var G__51111 = (i__50150 + (1));
seq__50147 = G__51108;
chunk__50148 = G__51109;
count__50149 = G__51110;
i__50150 = G__51111;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__50147);
if(temp__5753__auto__){
var seq__50147__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50147__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__50147__$1);
var G__51112 = cljs.core.chunk_rest(seq__50147__$1);
var G__51113 = c__4679__auto__;
var G__51114 = cljs.core.count(c__4679__auto__);
var G__51115 = (0);
seq__50147 = G__51112;
chunk__50148 = G__51113;
count__50149 = G__51114;
i__50150 = G__51115;
continue;
} else {
var n = cljs.core.first(seq__50147__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__51116 = cljs.core.next(seq__50147__$1);
var G__51117 = null;
var G__51118 = (0);
var G__51119 = (0);
seq__50147 = G__51116;
chunk__50148 = G__51117;
count__50149 = G__51118;
i__50150 = G__51119;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__50176 = arguments.length;
switch (G__50176) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__50180 = arguments.length;
switch (G__50180) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__50189 = arguments.length;
switch (G__50189) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4253__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4870__auto__ = [];
var len__4864__auto___51128 = arguments.length;
var i__4865__auto___51129 = (0);
while(true){
if((i__4865__auto___51129 < len__4864__auto___51128)){
args__4870__auto__.push((arguments[i__4865__auto___51129]));

var G__51130 = (i__4865__auto___51129 + (1));
i__4865__auto___51129 = G__51130;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__50237_51135 = cljs.core.seq(nodes);
var chunk__50238_51136 = null;
var count__50239_51137 = (0);
var i__50240_51138 = (0);
while(true){
if((i__50240_51138 < count__50239_51137)){
var node_51139 = chunk__50238_51136.cljs$core$IIndexed$_nth$arity$2(null,i__50240_51138);
fragment.appendChild(shadow.dom._to_dom(node_51139));


var G__51140 = seq__50237_51135;
var G__51141 = chunk__50238_51136;
var G__51142 = count__50239_51137;
var G__51143 = (i__50240_51138 + (1));
seq__50237_51135 = G__51140;
chunk__50238_51136 = G__51141;
count__50239_51137 = G__51142;
i__50240_51138 = G__51143;
continue;
} else {
var temp__5753__auto___51144 = cljs.core.seq(seq__50237_51135);
if(temp__5753__auto___51144){
var seq__50237_51145__$1 = temp__5753__auto___51144;
if(cljs.core.chunked_seq_QMARK_(seq__50237_51145__$1)){
var c__4679__auto___51146 = cljs.core.chunk_first(seq__50237_51145__$1);
var G__51147 = cljs.core.chunk_rest(seq__50237_51145__$1);
var G__51148 = c__4679__auto___51146;
var G__51149 = cljs.core.count(c__4679__auto___51146);
var G__51150 = (0);
seq__50237_51135 = G__51147;
chunk__50238_51136 = G__51148;
count__50239_51137 = G__51149;
i__50240_51138 = G__51150;
continue;
} else {
var node_51151 = cljs.core.first(seq__50237_51145__$1);
fragment.appendChild(shadow.dom._to_dom(node_51151));


var G__51152 = cljs.core.next(seq__50237_51145__$1);
var G__51153 = null;
var G__51154 = (0);
var G__51155 = (0);
seq__50237_51135 = G__51152;
chunk__50238_51136 = G__51153;
count__50239_51137 = G__51154;
i__50240_51138 = G__51155;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq50222){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50222));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__50258_51156 = cljs.core.seq(scripts);
var chunk__50259_51157 = null;
var count__50260_51158 = (0);
var i__50261_51159 = (0);
while(true){
if((i__50261_51159 < count__50260_51158)){
var vec__50279_51160 = chunk__50259_51157.cljs$core$IIndexed$_nth$arity$2(null,i__50261_51159);
var script_tag_51161 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50279_51160,(0),null);
var script_body_51162 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50279_51160,(1),null);
eval(script_body_51162);


var G__51164 = seq__50258_51156;
var G__51165 = chunk__50259_51157;
var G__51166 = count__50260_51158;
var G__51167 = (i__50261_51159 + (1));
seq__50258_51156 = G__51164;
chunk__50259_51157 = G__51165;
count__50260_51158 = G__51166;
i__50261_51159 = G__51167;
continue;
} else {
var temp__5753__auto___51168 = cljs.core.seq(seq__50258_51156);
if(temp__5753__auto___51168){
var seq__50258_51169__$1 = temp__5753__auto___51168;
if(cljs.core.chunked_seq_QMARK_(seq__50258_51169__$1)){
var c__4679__auto___51170 = cljs.core.chunk_first(seq__50258_51169__$1);
var G__51171 = cljs.core.chunk_rest(seq__50258_51169__$1);
var G__51172 = c__4679__auto___51170;
var G__51173 = cljs.core.count(c__4679__auto___51170);
var G__51174 = (0);
seq__50258_51156 = G__51171;
chunk__50259_51157 = G__51172;
count__50260_51158 = G__51173;
i__50261_51159 = G__51174;
continue;
} else {
var vec__50284_51175 = cljs.core.first(seq__50258_51169__$1);
var script_tag_51176 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50284_51175,(0),null);
var script_body_51177 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50284_51175,(1),null);
eval(script_body_51177);


var G__51178 = cljs.core.next(seq__50258_51169__$1);
var G__51179 = null;
var G__51180 = (0);
var G__51181 = (0);
seq__50258_51156 = G__51178;
chunk__50259_51157 = G__51179;
count__50260_51158 = G__51180;
i__50261_51159 = G__51181;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__50295){
var vec__50296 = p__50295;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50296,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50296,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__50316 = arguments.length;
switch (G__50316) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__50338 = cljs.core.seq(style_keys);
var chunk__50339 = null;
var count__50340 = (0);
var i__50341 = (0);
while(true){
if((i__50341 < count__50340)){
var it = chunk__50339.cljs$core$IIndexed$_nth$arity$2(null,i__50341);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__51183 = seq__50338;
var G__51184 = chunk__50339;
var G__51185 = count__50340;
var G__51186 = (i__50341 + (1));
seq__50338 = G__51183;
chunk__50339 = G__51184;
count__50340 = G__51185;
i__50341 = G__51186;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__50338);
if(temp__5753__auto__){
var seq__50338__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50338__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__50338__$1);
var G__51187 = cljs.core.chunk_rest(seq__50338__$1);
var G__51188 = c__4679__auto__;
var G__51189 = cljs.core.count(c__4679__auto__);
var G__51190 = (0);
seq__50338 = G__51187;
chunk__50339 = G__51188;
count__50340 = G__51189;
i__50341 = G__51190;
continue;
} else {
var it = cljs.core.first(seq__50338__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__51192 = cljs.core.next(seq__50338__$1);
var G__51193 = null;
var G__51194 = (0);
var G__51195 = (0);
seq__50338 = G__51192;
chunk__50339 = G__51193;
count__50340 = G__51194;
i__50341 = G__51195;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k50363,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__50384 = k50363;
var G__50384__$1 = (((G__50384 instanceof cljs.core.Keyword))?G__50384.fqn:null);
switch (G__50384__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k50363,else__4505__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__50388){
var vec__50390 = p__50388;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50390,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50390,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50362){
var self__ = this;
var G__50362__$1 = this;
return (new cljs.core.RecordIter((0),G__50362__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this50364,other50365){
var self__ = this;
var this50364__$1 = this;
return (((!((other50365 == null)))) && ((((this50364__$1.constructor === other50365.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50364__$1.x,other50365.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50364__$1.y,other50365.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50364__$1.__extmap,other50365.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k50363){
var self__ = this;
var this__4509__auto____$1 = this;
var G__50422 = k50363;
var G__50422__$1 = (((G__50422 instanceof cljs.core.Keyword))?G__50422.fqn:null);
switch (G__50422__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k50363);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__50362){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__50423 = cljs.core.keyword_identical_QMARK_;
var expr__50424 = k__4511__auto__;
if(cljs.core.truth_((pred__50423.cljs$core$IFn$_invoke$arity$2 ? pred__50423.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__50424) : pred__50423.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__50424)))){
return (new shadow.dom.Coordinate(G__50362,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__50423.cljs$core$IFn$_invoke$arity$2 ? pred__50423.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__50424) : pred__50423.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__50424)))){
return (new shadow.dom.Coordinate(self__.x,G__50362,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__50362),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__50362){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__50362,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__50367){
var extmap__4542__auto__ = (function (){var G__50430 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__50367,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__50367)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__50430);
} else {
return G__50430;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__50367),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__50367),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k50451,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__50464 = k50451;
var G__50464__$1 = (((G__50464 instanceof cljs.core.Keyword))?G__50464.fqn:null);
switch (G__50464__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k50451,else__4505__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__50466){
var vec__50467 = p__50466;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50467,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50467,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Size{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50450){
var self__ = this;
var G__50450__$1 = this;
return (new cljs.core.RecordIter((0),G__50450__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this50452,other50453){
var self__ = this;
var this50452__$1 = this;
return (((!((other50453 == null)))) && ((((this50452__$1.constructor === other50453.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50452__$1.w,other50453.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50452__$1.h,other50453.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50452__$1.__extmap,other50453.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k50451){
var self__ = this;
var this__4509__auto____$1 = this;
var G__50489 = k50451;
var G__50489__$1 = (((G__50489 instanceof cljs.core.Keyword))?G__50489.fqn:null);
switch (G__50489__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k50451);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__50450){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__50494 = cljs.core.keyword_identical_QMARK_;
var expr__50495 = k__4511__auto__;
if(cljs.core.truth_((pred__50494.cljs$core$IFn$_invoke$arity$2 ? pred__50494.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__50495) : pred__50494.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__50495)))){
return (new shadow.dom.Size(G__50450,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__50494.cljs$core$IFn$_invoke$arity$2 ? pred__50494.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__50495) : pred__50494.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__50495)))){
return (new shadow.dom.Size(self__.w,G__50450,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__50450),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__50450){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__50450,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__50459){
var extmap__4542__auto__ = (function (){var G__50511 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__50459,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__50459)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__50511);
} else {
return G__50511;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__50459),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__50459),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4738__auto__ = opts;
var l__4739__auto__ = a__4738__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4739__auto__)){
var G__51206 = (i + (1));
var G__51207 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__51206;
ret = G__51207;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__50543){
var vec__50544 = p__50543;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50544,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50544,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__50554 = arguments.length;
switch (G__50554) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__51212 = ps;
var G__51213 = (i + (1));
el__$1 = G__51212;
i = G__51213;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__50591 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50591,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50591,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50591,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__50596_51218 = cljs.core.seq(props);
var chunk__50597_51219 = null;
var count__50598_51220 = (0);
var i__50599_51221 = (0);
while(true){
if((i__50599_51221 < count__50598_51220)){
var vec__50610_51222 = chunk__50597_51219.cljs$core$IIndexed$_nth$arity$2(null,i__50599_51221);
var k_51223 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50610_51222,(0),null);
var v_51224 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50610_51222,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_51223);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_51223),v_51224);


var G__51227 = seq__50596_51218;
var G__51228 = chunk__50597_51219;
var G__51229 = count__50598_51220;
var G__51230 = (i__50599_51221 + (1));
seq__50596_51218 = G__51227;
chunk__50597_51219 = G__51228;
count__50598_51220 = G__51229;
i__50599_51221 = G__51230;
continue;
} else {
var temp__5753__auto___51231 = cljs.core.seq(seq__50596_51218);
if(temp__5753__auto___51231){
var seq__50596_51232__$1 = temp__5753__auto___51231;
if(cljs.core.chunked_seq_QMARK_(seq__50596_51232__$1)){
var c__4679__auto___51233 = cljs.core.chunk_first(seq__50596_51232__$1);
var G__51234 = cljs.core.chunk_rest(seq__50596_51232__$1);
var G__51235 = c__4679__auto___51233;
var G__51236 = cljs.core.count(c__4679__auto___51233);
var G__51237 = (0);
seq__50596_51218 = G__51234;
chunk__50597_51219 = G__51235;
count__50598_51220 = G__51236;
i__50599_51221 = G__51237;
continue;
} else {
var vec__50616_51238 = cljs.core.first(seq__50596_51232__$1);
var k_51239 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50616_51238,(0),null);
var v_51240 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50616_51238,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_51239);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_51239),v_51240);


var G__51241 = cljs.core.next(seq__50596_51232__$1);
var G__51242 = null;
var G__51243 = (0);
var G__51244 = (0);
seq__50596_51218 = G__51241;
chunk__50597_51219 = G__51242;
count__50598_51220 = G__51243;
i__50599_51221 = G__51244;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__50620 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50620,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50620,(1),null);
var seq__50623_51245 = cljs.core.seq(node_children);
var chunk__50625_51246 = null;
var count__50626_51247 = (0);
var i__50627_51248 = (0);
while(true){
if((i__50627_51248 < count__50626_51247)){
var child_struct_51249 = chunk__50625_51246.cljs$core$IIndexed$_nth$arity$2(null,i__50627_51248);
if((!((child_struct_51249 == null)))){
if(typeof child_struct_51249 === 'string'){
var text_51250 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_51250),child_struct_51249].join(''));
} else {
var children_51251 = shadow.dom.svg_node(child_struct_51249);
if(cljs.core.seq_QMARK_(children_51251)){
var seq__50644_51252 = cljs.core.seq(children_51251);
var chunk__50646_51253 = null;
var count__50647_51254 = (0);
var i__50648_51255 = (0);
while(true){
if((i__50648_51255 < count__50647_51254)){
var child_51256 = chunk__50646_51253.cljs$core$IIndexed$_nth$arity$2(null,i__50648_51255);
if(cljs.core.truth_(child_51256)){
node.appendChild(child_51256);


var G__51257 = seq__50644_51252;
var G__51258 = chunk__50646_51253;
var G__51259 = count__50647_51254;
var G__51260 = (i__50648_51255 + (1));
seq__50644_51252 = G__51257;
chunk__50646_51253 = G__51258;
count__50647_51254 = G__51259;
i__50648_51255 = G__51260;
continue;
} else {
var G__51261 = seq__50644_51252;
var G__51262 = chunk__50646_51253;
var G__51263 = count__50647_51254;
var G__51264 = (i__50648_51255 + (1));
seq__50644_51252 = G__51261;
chunk__50646_51253 = G__51262;
count__50647_51254 = G__51263;
i__50648_51255 = G__51264;
continue;
}
} else {
var temp__5753__auto___51265 = cljs.core.seq(seq__50644_51252);
if(temp__5753__auto___51265){
var seq__50644_51266__$1 = temp__5753__auto___51265;
if(cljs.core.chunked_seq_QMARK_(seq__50644_51266__$1)){
var c__4679__auto___51268 = cljs.core.chunk_first(seq__50644_51266__$1);
var G__51269 = cljs.core.chunk_rest(seq__50644_51266__$1);
var G__51270 = c__4679__auto___51268;
var G__51271 = cljs.core.count(c__4679__auto___51268);
var G__51272 = (0);
seq__50644_51252 = G__51269;
chunk__50646_51253 = G__51270;
count__50647_51254 = G__51271;
i__50648_51255 = G__51272;
continue;
} else {
var child_51273 = cljs.core.first(seq__50644_51266__$1);
if(cljs.core.truth_(child_51273)){
node.appendChild(child_51273);


var G__51274 = cljs.core.next(seq__50644_51266__$1);
var G__51275 = null;
var G__51276 = (0);
var G__51277 = (0);
seq__50644_51252 = G__51274;
chunk__50646_51253 = G__51275;
count__50647_51254 = G__51276;
i__50648_51255 = G__51277;
continue;
} else {
var G__51278 = cljs.core.next(seq__50644_51266__$1);
var G__51279 = null;
var G__51280 = (0);
var G__51281 = (0);
seq__50644_51252 = G__51278;
chunk__50646_51253 = G__51279;
count__50647_51254 = G__51280;
i__50648_51255 = G__51281;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_51251);
}
}


var G__51282 = seq__50623_51245;
var G__51283 = chunk__50625_51246;
var G__51284 = count__50626_51247;
var G__51285 = (i__50627_51248 + (1));
seq__50623_51245 = G__51282;
chunk__50625_51246 = G__51283;
count__50626_51247 = G__51284;
i__50627_51248 = G__51285;
continue;
} else {
var G__51286 = seq__50623_51245;
var G__51287 = chunk__50625_51246;
var G__51288 = count__50626_51247;
var G__51289 = (i__50627_51248 + (1));
seq__50623_51245 = G__51286;
chunk__50625_51246 = G__51287;
count__50626_51247 = G__51288;
i__50627_51248 = G__51289;
continue;
}
} else {
var temp__5753__auto___51290 = cljs.core.seq(seq__50623_51245);
if(temp__5753__auto___51290){
var seq__50623_51291__$1 = temp__5753__auto___51290;
if(cljs.core.chunked_seq_QMARK_(seq__50623_51291__$1)){
var c__4679__auto___51292 = cljs.core.chunk_first(seq__50623_51291__$1);
var G__51293 = cljs.core.chunk_rest(seq__50623_51291__$1);
var G__51294 = c__4679__auto___51292;
var G__51295 = cljs.core.count(c__4679__auto___51292);
var G__51296 = (0);
seq__50623_51245 = G__51293;
chunk__50625_51246 = G__51294;
count__50626_51247 = G__51295;
i__50627_51248 = G__51296;
continue;
} else {
var child_struct_51297 = cljs.core.first(seq__50623_51291__$1);
if((!((child_struct_51297 == null)))){
if(typeof child_struct_51297 === 'string'){
var text_51298 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_51298),child_struct_51297].join(''));
} else {
var children_51301 = shadow.dom.svg_node(child_struct_51297);
if(cljs.core.seq_QMARK_(children_51301)){
var seq__50664_51302 = cljs.core.seq(children_51301);
var chunk__50666_51303 = null;
var count__50667_51304 = (0);
var i__50668_51305 = (0);
while(true){
if((i__50668_51305 < count__50667_51304)){
var child_51307 = chunk__50666_51303.cljs$core$IIndexed$_nth$arity$2(null,i__50668_51305);
if(cljs.core.truth_(child_51307)){
node.appendChild(child_51307);


var G__51308 = seq__50664_51302;
var G__51309 = chunk__50666_51303;
var G__51310 = count__50667_51304;
var G__51311 = (i__50668_51305 + (1));
seq__50664_51302 = G__51308;
chunk__50666_51303 = G__51309;
count__50667_51304 = G__51310;
i__50668_51305 = G__51311;
continue;
} else {
var G__51312 = seq__50664_51302;
var G__51313 = chunk__50666_51303;
var G__51314 = count__50667_51304;
var G__51315 = (i__50668_51305 + (1));
seq__50664_51302 = G__51312;
chunk__50666_51303 = G__51313;
count__50667_51304 = G__51314;
i__50668_51305 = G__51315;
continue;
}
} else {
var temp__5753__auto___51316__$1 = cljs.core.seq(seq__50664_51302);
if(temp__5753__auto___51316__$1){
var seq__50664_51317__$1 = temp__5753__auto___51316__$1;
if(cljs.core.chunked_seq_QMARK_(seq__50664_51317__$1)){
var c__4679__auto___51318 = cljs.core.chunk_first(seq__50664_51317__$1);
var G__51319 = cljs.core.chunk_rest(seq__50664_51317__$1);
var G__51320 = c__4679__auto___51318;
var G__51321 = cljs.core.count(c__4679__auto___51318);
var G__51322 = (0);
seq__50664_51302 = G__51319;
chunk__50666_51303 = G__51320;
count__50667_51304 = G__51321;
i__50668_51305 = G__51322;
continue;
} else {
var child_51323 = cljs.core.first(seq__50664_51317__$1);
if(cljs.core.truth_(child_51323)){
node.appendChild(child_51323);


var G__51324 = cljs.core.next(seq__50664_51317__$1);
var G__51325 = null;
var G__51326 = (0);
var G__51327 = (0);
seq__50664_51302 = G__51324;
chunk__50666_51303 = G__51325;
count__50667_51304 = G__51326;
i__50668_51305 = G__51327;
continue;
} else {
var G__51328 = cljs.core.next(seq__50664_51317__$1);
var G__51329 = null;
var G__51330 = (0);
var G__51331 = (0);
seq__50664_51302 = G__51328;
chunk__50666_51303 = G__51329;
count__50667_51304 = G__51330;
i__50668_51305 = G__51331;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_51301);
}
}


var G__51332 = cljs.core.next(seq__50623_51291__$1);
var G__51333 = null;
var G__51334 = (0);
var G__51335 = (0);
seq__50623_51245 = G__51332;
chunk__50625_51246 = G__51333;
count__50626_51247 = G__51334;
i__50627_51248 = G__51335;
continue;
} else {
var G__51336 = cljs.core.next(seq__50623_51291__$1);
var G__51337 = null;
var G__51338 = (0);
var G__51339 = (0);
seq__50623_51245 = G__51336;
chunk__50625_51246 = G__51337;
count__50626_51247 = G__51338;
i__50627_51248 = G__51339;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___51341 = arguments.length;
var i__4865__auto___51342 = (0);
while(true){
if((i__4865__auto___51342 < len__4864__auto___51341)){
args__4870__auto__.push((arguments[i__4865__auto___51342]));

var G__51343 = (i__4865__auto___51342 + (1));
i__4865__auto___51342 = G__51343;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq50683){
var G__50688 = cljs.core.first(seq50683);
var seq50683__$1 = cljs.core.next(seq50683);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50688,seq50683__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__50704 = arguments.length;
switch (G__50704) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4251__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4251__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4251__auto__;
}
})())){
var c__41615__auto___51351 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41616__auto__ = (function (){var switch__41530__auto__ = (function (state_50711){
var state_val_50712 = (state_50711[(1)]);
if((state_val_50712 === (1))){
var state_50711__$1 = state_50711;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50711__$1,(2),once_or_cleanup);
} else {
if((state_val_50712 === (2))){
var inst_50708 = (state_50711[(2)]);
var inst_50709 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_50711__$1 = (function (){var statearr_50714 = state_50711;
(statearr_50714[(7)] = inst_50708);

return statearr_50714;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_50711__$1,inst_50709);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__41531__auto__ = null;
var shadow$dom$state_machine__41531__auto____0 = (function (){
var statearr_50716 = [null,null,null,null,null,null,null,null];
(statearr_50716[(0)] = shadow$dom$state_machine__41531__auto__);

(statearr_50716[(1)] = (1));

return statearr_50716;
});
var shadow$dom$state_machine__41531__auto____1 = (function (state_50711){
while(true){
var ret_value__41532__auto__ = (function (){try{while(true){
var result__41533__auto__ = switch__41530__auto__(state_50711);
if(cljs.core.keyword_identical_QMARK_(result__41533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41533__auto__;
}
break;
}
}catch (e50717){var ex__41534__auto__ = e50717;
var statearr_50718_51354 = state_50711;
(statearr_50718_51354[(2)] = ex__41534__auto__);


if(cljs.core.seq((state_50711[(4)]))){
var statearr_50720_51355 = state_50711;
(statearr_50720_51355[(1)] = cljs.core.first((state_50711[(4)])));

} else {
throw ex__41534__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41532__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51357 = state_50711;
state_50711 = G__51357;
continue;
} else {
return ret_value__41532__auto__;
}
break;
}
});
shadow$dom$state_machine__41531__auto__ = function(state_50711){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__41531__auto____0.call(this);
case 1:
return shadow$dom$state_machine__41531__auto____1.call(this,state_50711);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__41531__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__41531__auto____0;
shadow$dom$state_machine__41531__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__41531__auto____1;
return shadow$dom$state_machine__41531__auto__;
})()
})();
var state__41617__auto__ = (function (){var statearr_50723 = f__41616__auto__();
(statearr_50723[(6)] = c__41615__auto___51351);

return statearr_50723;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41617__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
