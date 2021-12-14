goog.provide('todo_app.events');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("todo-app.events","initialize-db","todo-app.events/initialize-db",1702293187),(function (_,___$1){
return todo_app.db.default_db;
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("todo-app.events","add-todos->db","todo-app.events/add-todos->db",-1218618389),(function (db,p__64374){
var vec__64375 = p__64374;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64375,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64375,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"todos","todos",630308868),response);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("todo-app.events","failure","todo-app.events/failure",67271958),(function (db,_){
console.error("Something is wrong!");

return db;
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("todo-app.events","fetch-todos!","todo-app.events/fetch-todos!",1943540322),(function (_,p__64378){
var vec__64379 = p__64378;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64379,(0),null);
console.info("Fetching todos!");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"uri","uri",-774711847),"http://localhost:3000/api/todos",new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format(),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todo-app.events","add-todos->db","todo-app.events/add-todos->db",-1218618389)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todo-app.events","failure","todo-app.events/failure",67271958)], null)], null)], null);
}));

//# sourceMappingURL=todo_app.events.js.map
