(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[27],{HJbn:function(e,t,a){e.exports={cardList:"antd-pro\\pages\\-list\\-card-list-cardList",card:"antd-pro\\pages\\-list\\-card-list-card",item:"antd-pro\\pages\\-list\\-card-list-item",extraImg:"antd-pro\\pages\\-list\\-card-list-extraImg",newButton:"antd-pro\\pages\\-list\\-card-list-newButton",cardAvatar:"antd-pro\\pages\\-list\\-card-list-cardAvatar",cardDescription:"antd-pro\\pages\\-list\\-card-list-cardDescription",pageHeaderContent:"antd-pro\\pages\\-list\\-card-list-pageHeaderContent",contentLink:"antd-pro\\pages\\-list\\-card-list-contentLink"}},OIMr:function(e,t,a){"use strict";var l=a("4Gf+"),n=a("GyWo");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("Rzmo");var r=l(a("RC+H"));a("/+mP");var d=l(a("vKT5"));a("okja");var s=l(a("jwFx"));a("hVLL");var c,u,i=l(a("OZJJ")),o=l(a("h+HB")),m=l(a("jx1L")),f=l(a("pvd2")),p=l(a("RPUv")),g=l(a("1KPh")),v=l(a("ZA+g")),E=n(a("4G06")),h=a("LneV"),y=l(a("xNuS")),w=l(a("zHco")),b=l(a("HJbn")),L=(c=(0,h.connect)(function(e){var t=e.list,a=e.loading;return{list:t,loading:a.models.list}}),c(u=function(e){function t(){return(0,m.default)(this,t),(0,p.default)(this,(0,g.default)(t).apply(this,arguments))}return(0,v.default)(t,e),(0,f.default)(t,[{key:"componentDidMount",value:function(){var e=this.props.dispatch;e({type:"list/fetch",payload:{count:8}})}},{key:"render",value:function(){var e=this.props,t=e.list.list,a=e.loading,l=E.default.createElement("div",{className:b.default.pageHeaderContent},E.default.createElement("p",null,"\u6bb5\u843d\u793a\u610f\uff1a\u8682\u8681\u91d1\u670d\u52a1\u8bbe\u8ba1\u5e73\u53f0 ant.design\uff0c\u7528\u6700\u5c0f\u7684\u5de5\u4f5c\u91cf\uff0c\u65e0\u7f1d\u63a5\u5165\u8682\u8681\u91d1\u670d\u751f\u6001\uff0c \u63d0\u4f9b\u8de8\u8d8a\u8bbe\u8ba1\u4e0e\u5f00\u53d1\u7684\u4f53\u9a8c\u89e3\u51b3\u65b9\u6848\u3002"),E.default.createElement("div",{className:b.default.contentLink},E.default.createElement("a",null,E.default.createElement("img",{alt:"",src:"https://gw.alipayobjects.com/zos/rmsportal/MjEImQtenlyueSmVEfUD.svg"})," ","\u5feb\u901f\u5f00\u59cb"),E.default.createElement("a",null,E.default.createElement("img",{alt:"",src:"https://gw.alipayobjects.com/zos/rmsportal/NbuDUAuBlIApFuDvWiND.svg"})," ","\u4ea7\u54c1\u7b80\u4ecb"),E.default.createElement("a",null,E.default.createElement("img",{alt:"",src:"https://gw.alipayobjects.com/zos/rmsportal/ohOEPSYdDTNnyMbGuyLb.svg"})," ","\u4ea7\u54c1\u6587\u6863"))),n=E.default.createElement("div",{className:b.default.extraImg},E.default.createElement("img",{alt:"\u8fd9\u662f\u4e00\u4e2a\u6807\u9898",src:"https://gw.alipayobjects.com/zos/rmsportal/RzwpdLnhmvDJToTdfDPe.png"}));return E.default.createElement(w.default,{title:"\u5361\u7247\u5217\u8868",content:l,extraContent:n},E.default.createElement("div",{className:b.default.cardList},E.default.createElement(s.default,{rowKey:"id",loading:a,grid:{gutter:24,lg:3,md:2,sm:1,xs:1},dataSource:[""].concat((0,o.default)(t)),renderItem:function(e){return e?E.default.createElement(s.default.Item,{key:e.id},E.default.createElement(i.default,{hoverable:!0,className:b.default.card,actions:[E.default.createElement("a",null,"\u64cd\u4f5c\u4e00"),E.default.createElement("a",null,"\u64cd\u4f5c\u4e8c")]},E.default.createElement(i.default.Meta,{avatar:E.default.createElement("img",{alt:"",className:b.default.cardAvatar,src:e.avatar}),title:E.default.createElement("a",null,e.title),description:E.default.createElement(y.default,{className:b.default.item,lines:3},e.description)}))):E.default.createElement(s.default.Item,null,E.default.createElement(r.default,{type:"dashed",className:b.default.newButton},E.default.createElement(d.default,{type:"plus"})," \u65b0\u589e\u4ea7\u54c1"))}})))}}]),t}(E.PureComponent))||u),N=L;t.default=N}}]);