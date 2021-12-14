goog.provide('ajax.xml_http_request');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__76427 = e.target.readyState;
var fexpr__76426 = new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null);
return (fexpr__76426.cljs$core$IFn$_invoke$arity$1 ? fexpr__76426.cljs$core$IFn$_invoke$arity$1(G__76427) : fexpr__76426.call(null,G__76427));
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (headers,header_line){
if(cljs.core.truth_(goog.string.isEmptyOrWhitespace(header_line))){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = (((typeof goog !== 'undefined') && (typeof goog.global !== 'undefined') && (typeof goog.global.XMLHttpRequest !== 'undefined'))?goog.global.XMLHttpRequest:(((typeof require !== 'undefined'))?(function (){var req = require;
return (req.cljs$core$IFn$_invoke$arity$1 ? req.cljs$core$IFn$_invoke$arity$1("xmlhttprequest") : req.call(null,"xmlhttprequest")).XMLHttpRequest;
})():null));
(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__76473,handler){
var map__76475 = p__76473;
var map__76475__$1 = (((((!((map__76475 == null))))?(((((map__76475.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__76475.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__76475):map__76475);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76475__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76475__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76475__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76475__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__76475__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__76475__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76475__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__76459_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state(p1__76459_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5753__auto___76575 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5753__auto___76575)){
var response_type_76576 = temp__5753__auto___76575;
(this$__$1.responseType = cljs.core.name(response_type_76576));
} else {
}

var seq__76483_76577 = cljs.core.seq(headers);
var chunk__76485_76578 = null;
var count__76486_76579 = (0);
var i__76487_76580 = (0);
while(true){
if((i__76487_76580 < count__76486_76579)){
var vec__76513_76581 = chunk__76485_76578.cljs$core$IIndexed$_nth$arity$2(null,i__76487_76580);
var k_76582 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76513_76581,(0),null);
var v_76583 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76513_76581,(1),null);
this$__$1.setRequestHeader(k_76582,v_76583);


var G__76584 = seq__76483_76577;
var G__76585 = chunk__76485_76578;
var G__76586 = count__76486_76579;
var G__76587 = (i__76487_76580 + (1));
seq__76483_76577 = G__76584;
chunk__76485_76578 = G__76585;
count__76486_76579 = G__76586;
i__76487_76580 = G__76587;
continue;
} else {
var temp__5753__auto___76589 = cljs.core.seq(seq__76483_76577);
if(temp__5753__auto___76589){
var seq__76483_76590__$1 = temp__5753__auto___76589;
if(cljs.core.chunked_seq_QMARK_(seq__76483_76590__$1)){
var c__4556__auto___76592 = cljs.core.chunk_first(seq__76483_76590__$1);
var G__76593 = cljs.core.chunk_rest(seq__76483_76590__$1);
var G__76594 = c__4556__auto___76592;
var G__76595 = cljs.core.count(c__4556__auto___76592);
var G__76596 = (0);
seq__76483_76577 = G__76593;
chunk__76485_76578 = G__76594;
count__76486_76579 = G__76595;
i__76487_76580 = G__76596;
continue;
} else {
var vec__76532_76597 = cljs.core.first(seq__76483_76590__$1);
var k_76598 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76532_76597,(0),null);
var v_76599 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76532_76597,(1),null);
this$__$1.setRequestHeader(k_76598,v_76599);


var G__76601 = cljs.core.next(seq__76483_76590__$1);
var G__76602 = null;
var G__76603 = (0);
var G__76604 = (0);
seq__76483_76577 = G__76601;
chunk__76485_76578 = G__76602;
count__76486_76579 = G__76603;
i__76487_76580 = G__76604;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__4126__auto__ = body;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());

return this$__$1;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers(this$__$1.getAllResponseHeaders());
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
}));

//# sourceMappingURL=ajax.xml_http_request.js.map
