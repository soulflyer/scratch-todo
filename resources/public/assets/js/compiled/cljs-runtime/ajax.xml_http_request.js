goog.provide('ajax.xml_http_request');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__61462 = e.target.readyState;
var fexpr__61461 = new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null);
return (fexpr__61461.cljs$core$IFn$_invoke$arity$1 ? fexpr__61461.cljs$core$IFn$_invoke$arity$1(G__61462) : fexpr__61461.call(null,G__61462));
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

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__61478,handler){
var map__61479 = p__61478;
var map__61479__$1 = (((((!((map__61479 == null))))?(((((map__61479.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61479.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61479):map__61479);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61479__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61479__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61479__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61479__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__61479__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__61479__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61479__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__61476_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state(p1__61476_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5753__auto___61514 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5753__auto___61514)){
var response_type_61515 = temp__5753__auto___61514;
(this$__$1.responseType = cljs.core.name(response_type_61515));
} else {
}

var seq__61481_61516 = cljs.core.seq(headers);
var chunk__61482_61517 = null;
var count__61483_61518 = (0);
var i__61484_61519 = (0);
while(true){
if((i__61484_61519 < count__61483_61518)){
var vec__61494_61520 = chunk__61482_61517.cljs$core$IIndexed$_nth$arity$2(null,i__61484_61519);
var k_61521 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61494_61520,(0),null);
var v_61522 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61494_61520,(1),null);
this$__$1.setRequestHeader(k_61521,v_61522);


var G__61523 = seq__61481_61516;
var G__61524 = chunk__61482_61517;
var G__61525 = count__61483_61518;
var G__61526 = (i__61484_61519 + (1));
seq__61481_61516 = G__61523;
chunk__61482_61517 = G__61524;
count__61483_61518 = G__61525;
i__61484_61519 = G__61526;
continue;
} else {
var temp__5753__auto___61527 = cljs.core.seq(seq__61481_61516);
if(temp__5753__auto___61527){
var seq__61481_61528__$1 = temp__5753__auto___61527;
if(cljs.core.chunked_seq_QMARK_(seq__61481_61528__$1)){
var c__4556__auto___61529 = cljs.core.chunk_first(seq__61481_61528__$1);
var G__61530 = cljs.core.chunk_rest(seq__61481_61528__$1);
var G__61531 = c__4556__auto___61529;
var G__61532 = cljs.core.count(c__4556__auto___61529);
var G__61533 = (0);
seq__61481_61516 = G__61530;
chunk__61482_61517 = G__61531;
count__61483_61518 = G__61532;
i__61484_61519 = G__61533;
continue;
} else {
var vec__61497_61537 = cljs.core.first(seq__61481_61528__$1);
var k_61538 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61497_61537,(0),null);
var v_61539 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61497_61537,(1),null);
this$__$1.setRequestHeader(k_61538,v_61539);


var G__61540 = cljs.core.next(seq__61481_61528__$1);
var G__61541 = null;
var G__61542 = (0);
var G__61543 = (0);
seq__61481_61516 = G__61540;
chunk__61482_61517 = G__61541;
count__61483_61518 = G__61542;
i__61484_61519 = G__61543;
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
