(window.webpackJsonpreview=window.webpackJsonpreview||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(2),r=n(4),u=n(3),o=n(5),i=n(0),l=n.n(i),s=n(7),h=n.n(s),p=(n(13),function(e){function t(){return Object(a.a)(this,t),Object(r.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("header",{id:"head"},l.a.createElement("h1",null,"Counters R Fun !"))}}]),t}(l.a.Component)),b=(n(14),function(e){function t(){return Object(a.a)(this,t),Object(r.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("footer",null,"\xa9 2018 Code Fellows")}}]),t}(l.a.Component)),f=(n(15),function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(r.a)(this,Object(u.a)(t).call(this,e))).handleUp=function(e){var t=n.state.count+1;n.updateCounter(t)},n.handleDown=function(e){var t=n.state.count-1;n.updateCounter(t)},n.state={count:0},n}return Object(o.a)(t,e),Object(c.a)(t,[{key:"updateCounter",value:function(e){var t="";e>0?t="positive":e<0&&(t="negative"),this.setState({count:e,polarity:t})}},{key:"render",value:function(){var e=["count",this.state.polarity].join(" ");return l.a.createElement("section",{className:"counter"},l.a.createElement("a",{href:"#",className:"down clicker",onClick:this.handleDown},"-"),l.a.createElement("span",{className:e},this.state.count),l.a.createElement("a",{href:"#",className:"up clicker",onClick:this.handleUp},"+"))}}]),t}(l.a.Component)),j=function(e){function t(){return Object(a.a)(this,t),Object(r.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(p,null),l.a.createElement(f,null),l.a.createElement(b,null))}}]),t}(l.a.Component),m=function(e){function t(){return Object(a.a)(this,t),Object(r.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement(j,null)}}]),t}(l.a.Component),O=document.getElementById("root");h.a.render(l.a.createElement(m,null),O)}],[[8,1,2]]]);
//# sourceMappingURL=main.9ab2c976.chunk.js.map