(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{15:function(t,e,s){},17:function(t,e,s){"use strict";s.r(e);var n,r=s(4),o=s.n(r),c=s(5),i=s(6),a=s(9),l=s(7),u=s(8),b=(s(14),s(15),s(2)),h=s.n(b),d=s(1),p=s(0),j=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t[t.NONE=0]="NONE",t[t.ALPHABET=1]="ALPHABET",t[t.LENGTH=2]="LENGTH"}(n||(n={}));var v=function(t){Object(a.a)(s,t);var e=Object(l.a)(s);function s(){var t;Object(c.a)(this,s);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))).state={isReversed:!1,sortType:n.NONE},t.sortAlphabet=function(){t.setState({sortType:n.ALPHABET})},t.sortLength=function(){t.setState({sortType:n.LENGTH})},t.sortReset=function(){t.setState({sortType:n.NONE,isReversed:!1})},t.sortReversed=function(){t.setState((function(t){return{isReversed:!t.isReversed}}))},t}return Object(i.a)(s,[{key:"render",value:function(){var t=this.state,e=t.sortType,s=t.isReversed,r=function(t,e){var s=e.sortType,r=e.isReversed,o=Object(u.a)(t);return s===n.ALPHABET?o.sort((function(t,e){return t.localeCompare(e)})):s===n.LENGTH&&o.sort((function(t,e){return t.length-e.length})),r&&o.reverse(),o}(j,this.state);return Object(p.jsxs)("div",{className:"section content",children:[Object(p.jsxs)("div",{className:"buttons",children:[Object(p.jsx)("button",{type:"button",className:h()("button","is-info",{"is-light":e!==n.ALPHABET}),onClick:this.sortAlphabet,children:"Sort alphabetically"}),Object(p.jsx)("button",{type:"button",className:h()("button","is-success",{"is-light":e!==n.LENGTH}),onClick:this.sortLength,children:"Sort by length"}),Object(p.jsx)("button",{type:"button",className:h()("button","is-warning",{"is-light":!s}),onClick:this.sortReversed,children:"Reverse"}),(e||s)&&Object(p.jsx)("button",{type:"button",className:"button is-danger",onClick:this.sortReset,children:"Reset"})]}),Object(p.jsx)("ul",{children:Object(p.jsx)("ul",{children:r.map((function(t){return Object(p.jsx)("li",{"data-cy":"Good",children:t},t)}))})})]})}}]),s}(d.Component);o.a.render(Object(p.jsx)(v,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.45883077.chunk.js.map