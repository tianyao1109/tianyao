(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{IyzB:function(e,t,a){"use strict";var s=a("4Gf+");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=s(a("OjS7")),i=s(a("BZ3U")),n=a("dCQc"),c={namespace:"activities",state:{list:[]},effects:{fetchList:i.default.mark(function e(t,a){var s,r,c;return i.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return s=a.call,r=a.put,e.next=3,s(n.queryActivities);case 3:return c=e.sent,e.next=6,r({type:"saveList",payload:Array.isArray(c)?c:[]});case 6:case"end":return e.stop()}},e,this)})},reducers:{saveList:function(e,t){return(0,r.default)({},e,{list:t.payload})}}};t.default=c}}]);