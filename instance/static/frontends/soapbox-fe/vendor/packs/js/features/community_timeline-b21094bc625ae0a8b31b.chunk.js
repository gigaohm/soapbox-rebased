(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{692:function(e,t,n){"use strict";n.r(t);var i,o,a,c,s=n(0),l=n(2),r=n(6),d=n(1),u=n(3),m=n.n(u),h=n(8),p=n(9),b=n(32),y=n(29),g=n(4),j=n.n(g),O=n(581),f=n(229),M=n(126),v=Object(b.c)(i=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.settings,n=e.onChange;return Object(s.a)("div",{},void 0,Object(s.a)("div",{className:"column-settings__row"},void 0,Object(s.a)(M.a,{prefix:"community_timeline",settings:t,settingPath:["shows","reblog"],onChange:n,label:Object(s.a)(y.a,{id:"home.column_settings.show_reblogs",defaultMessage:"Show reposts"})})),Object(s.a)("div",{className:"column-settings__row"},void 0,Object(s.a)(M.a,{prefix:"community_timeline",settings:t,settingPath:["shows","reply"],onChange:n,label:Object(s.a)(y.a,{id:"home.column_settings.show_replies",defaultMessage:"Show replies"})})),Object(s.a)("div",{className:"column-settings__row"},void 0,Object(s.a)(M.a,{settings:t,settingPath:["other","onlyMedia"],onChange:n,label:Object(s.a)(y.a,{id:"community.column_settings.media_only",defaultMessage:"Media Only"})})))},t}(m.a.PureComponent))||i,w=n(20),_=Object(h.connect)(function(e){return{settings:Object(w.f)(e).get("community")}},function(n){return{onChange:function(e,t){n(Object(w.d)(["community"].concat(e),t))}}})(v),C=n(582),I=n(24),P=n(73);n.d(t,"default",function(){return L});var x=Object(p.c)({title:{id:"column.community",defaultMessage:"Local timeline"}}),L=Object(h.connect)(function(e){var t=Object(w.f)(e).getIn(["community","other","onlyMedia"]),n="community";return{timelineId:n,onlyMedia:t,hasUnread:0<e.getIn(["timelines",n+(t?":media":""),"unread"])}})(o=Object(b.c)((c=a=function(i){function e(){for(var o,e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return o=i.call.apply(i,[this].concat(t))||this,Object(d.a)(Object(l.a)(o),"handleLoadMore",function(e){var t=o.props,n=t.dispatch,i=t.onlyMedia;n(Object(I.u)({maxId:e,onlyMedia:i}))}),o}Object(r.a)(e,i);var t=e.prototype;return t.componentDidMount=function(){var e=this.props,t=e.dispatch,n=e.onlyMedia;t(Object(I.u)({onlyMedia:n})),this.disconnect=t(Object(P.c)({onlyMedia:n}))},t.componentDidUpdate=function(e){var t,n,i;e.onlyMedia!==this.props.onlyMedia&&(n=(t=this.props).dispatch,i=t.onlyMedia,this.disconnect(),n(Object(I.u)({onlyMedia:i})),this.disconnect=n(Object(P.c)({onlyMedia:i})))},t.componentWillUnmount=function(){this.disconnect&&(this.disconnect(),this.disconnect=null)},t.render=function(){var e=this.props,t=e.intl,n=e.hasUnread,i=e.onlyMedia,o=e.timelineId;return Object(s.a)(f.a,{label:t.formatMessage(x.title)},void 0,Object(s.a)(C.a,{activeItem:"local",active:n},void 0,Object(s.a)(_,{})),Object(s.a)(O.a,{scrollKey:o+"_timeline",timelineId:o+(i?":media":""),onLoadMore:this.handleLoadMore,emptyMessage:Object(s.a)(y.a,{id:"empty_column.community",defaultMessage:"The local timeline is empty. Write something publicly to get the ball rolling!"})}))},e}(m.a.PureComponent),Object(d.a)(a,"contextTypes",{router:j.a.object}),o=c))||o)||o}}]);
//# sourceMappingURL=community_timeline-b21094bc625ae0a8b31b.chunk.js.map