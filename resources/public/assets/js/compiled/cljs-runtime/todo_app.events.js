goog.provide('todo_app.events');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("todo-app.events","initialize-db","todo-app.events/initialize-db",1702293187),(function (_,___$1){
return todo_app.db.default_db;
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("todo-app.events","add-todos->db","todo-app.events/add-todos->db",-1218618389),(function (db,p__61326){
var vec__61327 = p__61326;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61327,(0),null);
var map__61330 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61327,(1),null);
var map__61330__$1 = (((((!((map__61330 == null))))?(((((map__61330.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61330.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61330):map__61330);
var response = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61330__$1,new cljs.core.Keyword(null,"response","response",-1068424192));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"todos","todos",630308868),response);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("todo-app.events","failure","todo-app.events/failure",67271958),(function (db,_){
console.error("Something is wrong!");

return db;
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("todo-app.events","fetch-todos!","todo-app.events/fetch-todos!",1943540322),(function (_,p__61332){
var vec__61333 = p__61332;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61333,(0),null);
console.info("Fetching todos!");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"uri","uri",-774711847),"http://localhost:3000/api/todos",new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format(),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todo-app.events","add-todos->db","todo-app.events/add-todos->db",-1218618389)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todo-app.events","failure","todo-app.events/failure",67271958)], null)], null)], null);
}));

//# sourceMappingURL=todo_app.events.js.map
