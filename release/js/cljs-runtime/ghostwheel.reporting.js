goog.provide('ghostwheel.reporting');
ghostwheel.reporting._STAR_all_tests_successful = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
ghostwheel.reporting.wrap = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(ghostwheel.logging.wrap_line,(80));
ghostwheel.reporting.inc_report_counter_BANG_ = cljs.test.inc_report_counter_BANG_;
ghostwheel.reporting.warning_style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ghostwheel.logging","background","ghostwheel.logging/background",41589606),new cljs.core.Keyword(null,"orange0","orange0",1459969095).cljs$core$IFn$_invoke$arity$1(ghostwheel.logging.ghostwheel_colors)], null);
ghostwheel.reporting.snippets = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ghostwheel.reporting","incomplete-coverage","ghostwheel.reporting/incomplete-coverage",1228796498)," => Test coverage incomplete:",new cljs.core.Keyword("ghostwheel.reporting","no-gen-testing","ghostwheel.reporting/no-gen-testing",1838578005)," => No generative testing performed"], null);
if((typeof ghostwheel !== 'undefined') && (typeof ghostwheel.reporting !== 'undefined') && (typeof ghostwheel.reporting.report !== 'undefined')){
} else {
ghostwheel.reporting.report = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__48095 = cljs.core.get_global_hierarchy;
return (fexpr__48095.cljs$core$IFn$_invoke$arity$0 ? fexpr__48095.cljs$core$IFn$_invoke$arity$0() : fexpr__48095.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("ghostwheel.reporting","report"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
ghostwheel.reporting.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033),(function (m){
return ghostwheel.logging.group.cljs$core$IFn$_invoke$arity$2(["Checking ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m))," ..."].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ghostwheel.logging","background","ghostwheel.logging/background",41589606),new cljs.core.Keyword(null,"base01","base01",277019065).cljs$core$IFn$_invoke$arity$1(ghostwheel.logging.ghostwheel_colors)], null));
}));
ghostwheel.reporting.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645),(function (m){
return ghostwheel.logging.group_end();
}));
ghostwheel.reporting.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"summary","summary",380847952),(function (m){
var map__48103 = m;
var map__48103__$1 = cljs.core.__destructure_map(map__48103);
var fail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48103__$1,new cljs.core.Keyword(null,"fail","fail",1706214930));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48103__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var pass = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48103__$1,new cljs.core.Keyword(null,"pass","pass",1574159993));
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48103__$1,new cljs.core.Keyword(null,"test","test",577538877));
var warn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48103__$1,new cljs.core.Keyword(null,"warn","warn",-436710552));
var passed_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pass,test);
var warnings_QMARK_ = (function (){var G__48106 = warn;
if((G__48106 == null)){
return null;
} else {
return (G__48106 > (0));
}
})();
var color = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(test,(0)))?new cljs.core.Keyword(null,"black","black",1294279647).cljs$core$IFn$_invoke$arity$1(ghostwheel.logging.ghostwheel_colors):((passed_QMARK_)?new cljs.core.Keyword(null,"green","green",-945526839).cljs$core$IFn$_invoke$arity$1(ghostwheel.logging.ghostwheel_colors):new cljs.core.Keyword(null,"red","red",-969428204).cljs$core$IFn$_invoke$arity$1(ghostwheel.logging.ghostwheel_colors)
));
var label = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(test,(0)))?"No active tests found":((passed_QMARK_)?["Passed all ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(test)," checks"].join(''):["Failed ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fail)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(test)," checks",(((error > (0)))?["; ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(error)," test error(s)"].join(''):null)].join('')
));
ghostwheel.logging.group_end();

if(cljs.core.truth_((function (){var or__4253__auto__ = (!(passed_QMARK_));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return warnings_QMARK_;
}
})())){
ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$0();
} else {
}

ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$2(label,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ghostwheel.logging","background","ghostwheel.logging/background",41589606),color], null));

if(cljs.core.truth_(warnings_QMARK_)){
ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(warn)," warning(s)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ghostwheel.logging","background","ghostwheel.logging/background",41589606),new cljs.core.Keyword(null,"orange0","orange0",1459969095).cljs$core$IFn$_invoke$arity$1(ghostwheel.logging.ghostwheel_colors)], null));
} else {
}

return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2((5),ghostwheel.logging.group_end));
}));
ghostwheel.reporting.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"pass","pass",1574159993),(function (m){
var map__48124 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(m);
var map__48124__$1 = cljs.core.__destructure_map(map__48124);
var fn_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48124__$1,new cljs.core.Keyword("ghostwheel.reporting","fn-name","ghostwheel.reporting/fn-name",466254528));
var fspec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48124__$1,new cljs.core.Keyword("ghostwheel.reporting","fspec","ghostwheel.reporting/fspec",-1190332275));
var spec_checks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48124__$1,new cljs.core.Keyword("ghostwheel.reporting","spec-checks","ghostwheel.reporting/spec-checks",-803336688));
var check_coverage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48124__$1,new cljs.core.Keyword("ghostwheel.reporting","check-coverage","ghostwheel.reporting/check-coverage",-1277601858));
var marked_unsafe = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48124__$1,new cljs.core.Keyword("ghostwheel.reporting","marked-unsafe","ghostwheel.reporting/marked-unsafe",-275678850));
var report_output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48124__$1,new cljs.core.Keyword("ghostwheel.reporting","report-output","ghostwheel.reporting/report-output",-1798642788));
(ghostwheel.reporting.inc_report_counter_BANG_.cljs$core$IFn$_invoke$arity$1 ? ghostwheel.reporting.inc_report_counter_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pass","pass",1574159993)) : ghostwheel.reporting.inc_report_counter_BANG_.call(null,new cljs.core.Keyword(null,"pass","pass",1574159993)));

if(cljs.core.truth_(check_coverage)){
if(cljs.core.truth_(marked_unsafe)){
(ghostwheel.reporting.inc_report_counter_BANG_.cljs$core$IFn$_invoke$arity$1 ? ghostwheel.reporting.inc_report_counter_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"warn","warn",-436710552)) : ghostwheel.reporting.inc_report_counter_BANG_.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552)));

ghostwheel.logging.group.cljs$core$IFn$_invoke$arity$2(["WARNING: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name)," \u2013 Function marked as unsafe.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("ghostwheel.reporting","no-gen-testing","ghostwheel.reporting/no-gen-testing",1838578005).cljs$core$IFn$_invoke$arity$1(ghostwheel.reporting.snippets)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("ghostwheel.reporting","incomplete-coverage","ghostwheel.reporting/incomplete-coverage",1228796498).cljs$core$IFn$_invoke$arity$1(ghostwheel.reporting.snippets))].join(''),ghostwheel.reporting.warning_style);

return ghostwheel.logging.group_end();
} else {
if(cljs.core.not(fspec)){
(ghostwheel.reporting.inc_report_counter_BANG_.cljs$core$IFn$_invoke$arity$1 ? ghostwheel.reporting.inc_report_counter_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"warn","warn",-436710552)) : ghostwheel.reporting.inc_report_counter_BANG_.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552)));

ghostwheel.logging.group.cljs$core$IFn$_invoke$arity$2(["WARNING: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name)," \u2013 Missing fspec(s)",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("ghostwheel.reporting","no-gen-testing","ghostwheel.reporting/no-gen-testing",1838578005).cljs$core$IFn$_invoke$arity$1(ghostwheel.reporting.snippets)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("ghostwheel.reporting","incomplete-coverage","ghostwheel.reporting/incomplete-coverage",1228796498).cljs$core$IFn$_invoke$arity$1(ghostwheel.reporting.snippets))].join(''),ghostwheel.reporting.warning_style);

return ghostwheel.logging.group_end();
} else {
if(cljs.core.not(spec_checks)){
(ghostwheel.reporting.inc_report_counter_BANG_.cljs$core$IFn$_invoke$arity$1 ? ghostwheel.reporting.inc_report_counter_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"warn","warn",-436710552)) : ghostwheel.reporting.inc_report_counter_BANG_.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552)));

ghostwheel.logging.group.cljs$core$IFn$_invoke$arity$2(["WARNING: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name)," \u2013 Number of tests set to 0",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("ghostwheel.reporting","no-gen-testing","ghostwheel.reporting/no-gen-testing",1838578005).cljs$core$IFn$_invoke$arity$1(ghostwheel.reporting.snippets)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("ghostwheel.reporting","incomplete-coverage","ghostwheel.reporting/incomplete-coverage",1228796498).cljs$core$IFn$_invoke$arity$1(ghostwheel.reporting.snippets))].join(''),ghostwheel.reporting.warning_style);

return ghostwheel.logging.group_end();
} else {
return null;

}
}
}
} else {
return null;
}
}));
ghostwheel.reporting.explain_problem_str = (function ghostwheel$reporting$explain_problem_str(failure_type,problem){
var map__48134 = problem;
var map__48134__$1 = cljs.core.__destructure_map(map__48134);
var pred = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48134__$1,new cljs.core.Keyword(null,"pred","pred",1927423397));
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48134__$1,new cljs.core.Keyword(null,"val","val",128701612));
var in$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48134__$1,new cljs.core.Keyword(null,"in","in",-1531184865));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48134__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48134__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var G__48138 = failure_type;
var G__48138__$1 = (((G__48138 instanceof cljs.core.Keyword))?G__48138.fqn:null);
switch (G__48138__$1) {
case "check-failed":
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"val","val",128701612),val,new cljs.core.Keyword(null,"in","in",-1531184865),in$,new cljs.core.Keyword(null,"not","not",-595976884),pred], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ret","ret",-468222814)], null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"at","at",1476951349),path], null):null),((cljs.core.seq(via))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"via","via",-1904457336),via], null):null)], null));

break;
case "instrument":
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"val","val",128701612),val,new cljs.core.Keyword(null,"in","in",-1531184865),in$,new cljs.core.Keyword(null,"not","not",-595976884),pred,new cljs.core.Keyword(null,"at","at",1476951349),path], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.seq(via))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"via","via",-1904457336),via], null):null)], null));

break;
case "else":
return problem;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48138__$1)].join('')));

}
});
ghostwheel.reporting.issue_msg = "\nPlease file an issue at https://github.com/gnl/ghostwheel/issues if you encounter false positives or negatives in side effect detection.";
ghostwheel.reporting.report_unexpected_side_effects = (function ghostwheel$reporting$report_unexpected_side_effects(message){
var map__48145 = message;
var map__48145__$1 = cljs.core.__destructure_map(map__48145);
var fn_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48145__$1,new cljs.core.Keyword("ghostwheel.reporting","fn-name","ghostwheel.reporting/fn-name",466254528));
var found_fx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48145__$1,new cljs.core.Keyword("ghostwheel.reporting","found-fx","ghostwheel.reporting/found-fx",-263226799));
ghostwheel.logging.log_bold("Possible side effects detected in function marked as safe:\n");

cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(ghostwheel.logging.log,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__48148){
var vec__48149 = p__48148;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48149,(0),null);
var form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48149,(1),null);
var details = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48149,(2),null);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [type], null),(cljs.core.truth_(form)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"at","at",-1177484420,null),form], null):null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(details)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"kind","kind",923265724,null),details], null):null)], 0)));
}),found_fx)));

ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$1(ghostwheel.reporting.wrap(["=> Either remove the side effects, rename the function to '",[cljs.core.name(fn_name),"!'"].join('')," to mark it as unsafe, or add ^::g/ignore-fx to its metadata to disable this warning and consider the function safe for automated generative testing."].join('')));

return ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$1(ghostwheel.reporting.wrap(ghostwheel.reporting.issue_msg));
});
ghostwheel.reporting.report_unexpected_safety = (function ghostwheel$reporting$report_unexpected_safety(message){
var safe_name = clojure.string.replace(cljs.core.name(new cljs.core.Keyword("ghostwheel.reporting","fn-name","ghostwheel.reporting/fn-name",466254528).cljs$core$IFn$_invoke$arity$1(message)),/!$/,"");
ghostwheel.logging.log_bold("No side effects detected in function marked as unsafe.");

ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$1(ghostwheel.reporting.wrap(["=> If safe, rename to '",safe_name,"'. If unsafe, rename the called unsafe functions to suffix them with a '!', or add the ^::g/ignore-fx metadata to disable this check."].join('')));

ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$1(ghostwheel.reporting.wrap(ghostwheel.reporting.issue_msg));

return ghostwheel.logging.log;
});
ghostwheel.reporting.report_spec_check = (function ghostwheel$reporting$report_spec_check(p__48167){
var map__48168 = p__48167;
var map__48168__$1 = cljs.core.__destructure_map(map__48168);
var spec_checks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48168__$1,new cljs.core.Keyword("ghostwheel.reporting","spec-checks","ghostwheel.reporting/spec-checks",-803336688));
var fn_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48168__$1,new cljs.core.Keyword("ghostwheel.reporting","fn-name","ghostwheel.reporting/fn-name",466254528));
var seq__48169 = cljs.core.seq(spec_checks);
var chunk__48173 = null;
var count__48174 = (0);
var i__48175 = (0);
while(true){
if((i__48175 < count__48174)){
var check = chunk__48173.cljs$core$IIndexed$_nth$arity$2(null,i__48175);
var test_ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(check,new cljs.core.Keyword("clojure.test.check","ret","clojure.test.check/ret",1393978960));
if(cljs.core.not(new cljs.core.Keyword(null,"pass?","pass?",-424635753).cljs$core$IFn$_invoke$arity$1(test_ret))){
var spec_error_48251 = new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(test_ret);
var data_48252 = spec_error_48251.data;
var msg_48253 = (function (){try{return spec_error_48251.message;
}catch (e48211){if((e48211 instanceof Object)){
var _ = e48211;
return null;
} else {
throw e48211;

}
}})();
if(cljs.core.not(data_48252)){
ghostwheel.logging.log_bold(msg_48253);
} else {
var temp__5753__auto___48258 = new cljs.core.Keyword("cljs.spec.test.alpha","args","cljs.spec.test.alpha/args",78409593).cljs$core$IFn$_invoke$arity$1(data_48252);
if(cljs.core.truth_(temp__5753__auto___48258)){
var args_48259 = temp__5753__auto___48258;
ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$1("\nCall:");

ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$1(cljs.core.cons(cljs.core.with_meta(fn_name,null),args_48259));
} else {
}

ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$0();

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592).cljs$core$IFn$_invoke$arity$1(data_48252),new cljs.core.Keyword(null,"instrument","instrument",-960698844))){
ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(clojure.string.split_lines(msg_48253))),"\n"].join(''));
} else {
}

ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$1([(function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__48217_48260 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__48218_48261 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__48219_48262 = true;
var _STAR_print_fn_STAR__temp_val__48220_48263 = ((function (seq__48169,chunk__48173,count__48174,i__48175,_STAR_print_newline_STAR__orig_val__48217_48260,_STAR_print_fn_STAR__orig_val__48218_48261,_STAR_print_newline_STAR__temp_val__48219_48262,sb__4795__auto__,spec_error_48251,data_48252,msg_48253,test_ret,check,map__48168,map__48168__$1,spec_checks,fn_name){
return (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});})(seq__48169,chunk__48173,count__48174,i__48175,_STAR_print_newline_STAR__orig_val__48217_48260,_STAR_print_fn_STAR__orig_val__48218_48261,_STAR_print_newline_STAR__temp_val__48219_48262,sb__4795__auto__,spec_error_48251,data_48252,msg_48253,test_ret,check,map__48168,map__48168__$1,spec_checks,fn_name))
;
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__48219_48262);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__48220_48263);

try{expound.alpha.custom_printer(null)(data_48252);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__48218_48261);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__48217_48260);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})(),"\n"].join(''));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ghostwheel.logging._STAR_report_output_STAR_,new cljs.core.Keyword(null,"js-console","js-console",1240105791))){
ghostwheel.logging.group_collapsed.cljs$core$IFn$_invoke$arity$2("Raw error data:",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ghostwheel.logging","background","ghostwheel.logging/background",41589606),new cljs.core.Keyword(null,"base0","base0",128742798).cljs$core$IFn$_invoke$arity$1(ghostwheel.logging.ghostwheel_colors)], null));

ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$1(msg_48253);

ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$1(data_48252);

ghostwheel.logging.group_end();
} else {
}
}


var G__48264 = seq__48169;
var G__48265 = chunk__48173;
var G__48266 = count__48174;
var G__48267 = (i__48175 + (1));
seq__48169 = G__48264;
chunk__48173 = G__48265;
count__48174 = G__48266;
i__48175 = G__48267;
continue;
} else {
var G__48268 = seq__48169;
var G__48269 = chunk__48173;
var G__48270 = count__48174;
var G__48271 = (i__48175 + (1));
seq__48169 = G__48268;
chunk__48173 = G__48269;
count__48174 = G__48270;
i__48175 = G__48271;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__48169);
if(temp__5753__auto__){
var seq__48169__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48169__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__48169__$1);
var G__48272 = cljs.core.chunk_rest(seq__48169__$1);
var G__48273 = c__4679__auto__;
var G__48274 = cljs.core.count(c__4679__auto__);
var G__48275 = (0);
seq__48169 = G__48272;
chunk__48173 = G__48273;
count__48174 = G__48274;
i__48175 = G__48275;
continue;
} else {
var check = cljs.core.first(seq__48169__$1);
var test_ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(check,new cljs.core.Keyword("clojure.test.check","ret","clojure.test.check/ret",1393978960));
if(cljs.core.not(new cljs.core.Keyword(null,"pass?","pass?",-424635753).cljs$core$IFn$_invoke$arity$1(test_ret))){
var spec_error_48276 = new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(test_ret);
var data_48277 = spec_error_48276.data;
var msg_48278 = (function (){try{return spec_error_48276.message;
}catch (e48222){if((e48222 instanceof Object)){
var _ = e48222;
return null;
} else {
throw e48222;

}
}})();
if(cljs.core.not(data_48277)){
ghostwheel.logging.log_bold(msg_48278);
} else {
var temp__5753__auto___48279__$1 = new cljs.core.Keyword("cljs.spec.test.alpha","args","cljs.spec.test.alpha/args",78409593).cljs$core$IFn$_invoke$arity$1(data_48277);
if(cljs.core.truth_(temp__5753__auto___48279__$1)){
var args_48280 = temp__5753__auto___48279__$1;
ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$1("\nCall:");

ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$1(cljs.core.cons(cljs.core.with_meta(fn_name,null),args_48280));
} else {
}

ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$0();

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592).cljs$core$IFn$_invoke$arity$1(data_48277),new cljs.core.Keyword(null,"instrument","instrument",-960698844))){
ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(clojure.string.split_lines(msg_48278))),"\n"].join(''));
} else {
}

ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$1([(function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__48228_48281 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__48229_48282 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__48230_48283 = true;
var _STAR_print_fn_STAR__temp_val__48231_48284 = ((function (seq__48169,chunk__48173,count__48174,i__48175,_STAR_print_newline_STAR__orig_val__48228_48281,_STAR_print_fn_STAR__orig_val__48229_48282,_STAR_print_newline_STAR__temp_val__48230_48283,sb__4795__auto__,spec_error_48276,data_48277,msg_48278,test_ret,check,seq__48169__$1,temp__5753__auto__,map__48168,map__48168__$1,spec_checks,fn_name){
return (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});})(seq__48169,chunk__48173,count__48174,i__48175,_STAR_print_newline_STAR__orig_val__48228_48281,_STAR_print_fn_STAR__orig_val__48229_48282,_STAR_print_newline_STAR__temp_val__48230_48283,sb__4795__auto__,spec_error_48276,data_48277,msg_48278,test_ret,check,seq__48169__$1,temp__5753__auto__,map__48168,map__48168__$1,spec_checks,fn_name))
;
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__48230_48283);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__48231_48284);

try{expound.alpha.custom_printer(null)(data_48277);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__48229_48282);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__48228_48281);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})(),"\n"].join(''));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ghostwheel.logging._STAR_report_output_STAR_,new cljs.core.Keyword(null,"js-console","js-console",1240105791))){
ghostwheel.logging.group_collapsed.cljs$core$IFn$_invoke$arity$2("Raw error data:",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ghostwheel.logging","background","ghostwheel.logging/background",41589606),new cljs.core.Keyword(null,"base0","base0",128742798).cljs$core$IFn$_invoke$arity$1(ghostwheel.logging.ghostwheel_colors)], null));

ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$1(msg_48278);

ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$1(data_48277);

ghostwheel.logging.group_end();
} else {
}
}


var G__48285 = cljs.core.next(seq__48169__$1);
var G__48286 = null;
var G__48287 = (0);
var G__48288 = (0);
seq__48169 = G__48285;
chunk__48173 = G__48286;
count__48174 = G__48287;
i__48175 = G__48288;
continue;
} else {
var G__48289 = cljs.core.next(seq__48169__$1);
var G__48290 = null;
var G__48291 = (0);
var G__48292 = (0);
seq__48169 = G__48289;
chunk__48173 = G__48290;
count__48174 = G__48291;
i__48175 = G__48292;
continue;
}
}
} else {
return null;
}
}
break;
}
});
ghostwheel.reporting.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"fail","fail",1706214930),(function (m){
var message = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(m);
var map__48232 = message;
var map__48232__$1 = cljs.core.__destructure_map(map__48232);
var fn_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48232__$1,new cljs.core.Keyword("ghostwheel.reporting","fn-name","ghostwheel.reporting/fn-name",466254528));
var failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48232__$1,new cljs.core.Keyword("ghostwheel.reporting","failure","ghostwheel.reporting/failure",-713780845));
var summary = (function (){var G__48233 = failure;
var G__48233__$1 = (((G__48233 instanceof cljs.core.Keyword))?G__48233.fqn:null);
switch (G__48233__$1) {
case "ghostwheel.reporting/unexpected-fx":
return "Possible side effects detected";

break;
case "ghostwheel.reporting/unexpected-safety":
return "Expected side effects not detected";

break;
case "ghostwheel.reporting/spec-failure":
return "Spec check";

break;
default:
return null;

}
})();
var start_group = ghostwheel.logging.group;
(ghostwheel.reporting.inc_report_counter_BANG_.cljs$core$IFn$_invoke$arity$1 ? ghostwheel.reporting.inc_report_counter_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"fail","fail",1706214930)) : ghostwheel.reporting.inc_report_counter_BANG_.call(null,new cljs.core.Keyword(null,"fail","fail",1706214930)));

var G__48235_48294 = ["FAILED: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name)," \u2013 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(summary)].join('');
var G__48236_48295 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ghostwheel.logging","background","ghostwheel.logging/background",41589606),new cljs.core.Keyword(null,"red","red",-969428204).cljs$core$IFn$_invoke$arity$1(ghostwheel.logging.ghostwheel_colors)], null);
(start_group.cljs$core$IFn$_invoke$arity$2 ? start_group.cljs$core$IFn$_invoke$arity$2(G__48235_48294,G__48236_48295) : start_group.call(null,G__48235_48294,G__48236_48295));

var G__48237_48296 = failure;
var G__48237_48297__$1 = (((G__48237_48296 instanceof cljs.core.Keyword))?G__48237_48296.fqn:null);
switch (G__48237_48297__$1) {
case "ghostwheel.reporting/unexpected-fx":
ghostwheel.reporting.report_unexpected_side_effects(message);

break;
case "ghostwheel.reporting/unexpected-safety":
ghostwheel.reporting.report_unexpected_safety(message);

break;
case "ghostwheel.reporting/spec-failure":
ghostwheel.reporting.report_spec_check(message);

break;
default:
ghostwheel.logging.log_bold(["Undefined failure reason: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(failure)].join(''));

ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$1(message);

}

return ghostwheel.logging.group_end();
}));
ghostwheel.reporting.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"error","error",-978969032),(function (m){
return ghostwheel.logging.DBG.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m], 0));
}));
ghostwheel.reporting.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563),(function (m){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(ghostwheel.reporting._STAR_all_tests_successful,(function (p1__48238_SHARP_,p2__48239_SHARP_){
var and__4251__auto__ = p1__48238_SHARP_;
if(cljs.core.truth_(and__4251__auto__)){
return p2__48239_SHARP_;
} else {
return and__4251__auto__;
}
}),cljs.test.successful_QMARK_(m));
}));
ghostwheel.reporting.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return null;
}));

//# sourceMappingURL=ghostwheel.reporting.js.map
