goog.provide('todo_app.core');
todo_app.core.dev_setup = (function todo_app$core$dev_setup(){
if(todo_app.config.debug_QMARK_){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["dev mode"], 0));
} else {
return null;
}
});
todo_app.core.mount_root = (function todo_app$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_();

var root_el = document.getElementById("app");
reagent.dom.unmount_component_at_node(root_el);

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [todo_app.views.main_panel], null),root_el);
});
todo_app.core.init = (function todo_app$core$init(){
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todo-app.events","initialize-db","todo-app.events/initialize-db",1702293187)], null));

todo_app.core.dev_setup();

return todo_app.core.mount_root();
});

//# sourceMappingURL=todo_app.core.js.map
