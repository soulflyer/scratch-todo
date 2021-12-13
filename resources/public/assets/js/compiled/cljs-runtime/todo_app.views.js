goog.provide('todo_app.views');
todo_app.views.main_panel = (function todo_app$views$main_panel(){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todo-app.events","fetch-todos!","todo-app.events/fetch-todos!",1943540322)], null));

var todos = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todo-app.subs","todos","todo-app.subs/todos",-199900789)], null));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["****************"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(todos)], 0));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__61336_SHARP_){
return cljs.core.identity(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.Keyword("todo","label","todo/label",1746630262).cljs$core$IFn$_invoke$arity$1(p1__61336_SHARP_)], null));
}),cljs.core.deref(todos))], null);
});

//# sourceMappingURL=todo_app.views.js.map
