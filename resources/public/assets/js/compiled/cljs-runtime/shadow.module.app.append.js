
shadow.cljs.devtools.client.env.module_loaded('app');

try { todo_app.core.init(); } catch (e) { console.error("An error occurred when calling (todo-app.core/init)"); throw(e); }