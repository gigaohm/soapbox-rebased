(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{693:function(e,t,a){"use strict";a.r(t);var c,o,n,i,r,s,u=a(0),d=a(2),l=a(6),j=a(1),b=a(68),p=a.n(b),f=(a(3),a(8)),h=a(9),O=a(32),v=a(29),_=a(13),m=a(4),g=a.n(m),w=a(15),M=a.n(w),q=a(120),y=a(227),z=a(34),R=a(125),N=a(35),k=a(45),I=a(23),A=Object(h.c)({authorize:{id:"follow_request.authorize",defaultMessage:"Authorize"},reject:{id:"follow_request.reject",defaultMessage:"Reject"}}),L=Object(O.c)((n=o=function(e){function t(){return e.apply(this,arguments)||this}return Object(l.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.intl,a=e.account,c=e.onAuthorize,o=e.onReject,n={__html:a.get("note_emojified")};return Object(u.a)("div",{className:"account-authorize__wrapper"},void 0,Object(u.a)("div",{className:"account-authorize"},void 0,Object(u.a)(R.a,{href:"/@"+a.get("acct"),to:"/@"+a.get("acct"),className:"detailed-status__display-name"},void 0,Object(u.a)("div",{className:"account-authorize__avatar"},void 0,Object(u.a)(N.a,{account:a,size:48})),Object(u.a)(k.a,{account:a})),Object(u.a)("div",{className:"account__header__content",dangerouslySetInnerHTML:n})),Object(u.a)("div",{className:"account--panel"},void 0,Object(u.a)("div",{className:"account--panel__button"},void 0,Object(u.a)(I.a,{title:t.formatMessage(A.authorize),icon:"check",onClick:c})),Object(u.a)("div",{className:"account--panel__button"},void 0,Object(u.a)(I.a,{title:t.formatMessage(A.reject),icon:"times",onClick:o}))))},t}(_.a),Object(j.a)(o,"propTypes",{account:M.a.map.isRequired,onAuthorize:g.a.func.isRequired,onReject:g.a.func.isRequired,intl:g.a.object.isRequired}),c=n))||c,J=a(19),S=Object(f.connect)(function(){var a=Object(z.d)();return function(e,t){return{account:a(e,t.id)}}},function(e,t){var a=t.id;return{onAuthorize:function(){e(Object(J.v)(a))},onReject:function(){e(Object(J.J)(a))}}})(L),T=a(228);a.d(t,"default",function(){return D});var C=Object(h.c)({heading:{id:"column.follow_requests",defaultMessage:"Follow requests"}}),D=Object(f.connect)(function(e){return{accountIds:e.getIn(["user_lists","follow_requests","items"]),hasMore:!!e.getIn(["user_lists","follow_requests","next"])}})(i=Object(O.c)((s=r=function(o){function e(){for(var e,t=arguments.length,a=new Array(t),c=0;c<t;c++)a[c]=arguments[c];return e=o.call.apply(o,[this].concat(a))||this,Object(j.a)(Object(d.a)(e),"handleLoadMore",p()(function(){e.props.dispatch(Object(J.y)())},300,{leading:!0})),e}Object(l.a)(e,o);var t=e.prototype;return t.componentDidMount=function(){this.props.dispatch(Object(J.D)())},t.render=function(){var e=this.props,t=e.intl,a=e.accountIds,c=e.hasMore;if(!a)return Object(u.a)(y.a,{},void 0,Object(u.a)(q.a,{}));var o=Object(u.a)(v.a,{id:"empty_column.follow_requests",defaultMessage:"You don't have any follow requests yet. When you receive one, it will show up here."});return Object(u.a)(y.a,{icon:"user-plus",heading:t.formatMessage(C.heading),backBtnSlim:!0},void 0,Object(u.a)(T.a,{scrollKey:"follow_requests",onLoadMore:this.handleLoadMore,hasMore:c,emptyMessage:o},void 0,a.map(function(e){return Object(u.a)(S,{id:e},e)})))},e}(_.a),Object(j.a)(r,"propTypes",{params:g.a.object.isRequired,dispatch:g.a.func.isRequired,hasMore:g.a.bool,accountIds:M.a.orderedSet,intl:g.a.object.isRequired}),i=s))||i)||i}}]);
//# sourceMappingURL=follow_requests-3bb2ba4624f9c8763921.chunk.js.map