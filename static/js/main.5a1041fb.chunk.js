(this["webpackJsonptest-app"]=this["webpackJsonptest-app"]||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/plus.c767ee98.svg"},,function(e,t,n){e.exports=n(24)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(8),o=n.n(c),l=(n(16),n(1)),i=n(2),s=n(4),u=n(3),m=n(5),p=(n(17),n(18),function(e){return r.a.createElement("div",{className:"cart"},r.a.createElement("p",null,"Hello, shoppers!"))}),f=n(6),d=n(10),h=(n(19),n(9)),v=n.n(h),b=(n(20),function(e){return r.a.createElement("div",{className:"categoryItem"},r.a.createElement("li",null,e.children),r.a.createElement("div",{className:"category-btn"},r.a.createElement("div",null,r.a.createElement("img",{onClick:e.increaseItemCount,className:"btn-plus",src:v.a,alt:"Text"}))))}),E=function(e){return r.a.createElement("ul",{className:"category"},e.item.map((function(t){return r.a.createElement(b,{decreaseItemCount:e.decreaseItemCount},t)})))},j=(n(21),n(22),function(e){return r.a.createElement("div",{className:"categorytitle"},r.a.createElement("h1",null,e.title),r.a.createElement("div",null,r.a.createElement("div",{className:"categorybar"})))}),y=function(e){return r.a.createElement("div",{className:"BuildControl"},Object(f.a)(Array(e.title)).map((function(e){return r.a.createElement(j,{title:e=e.replace("_"," ")})})),r.a.createElement(E,{item:e.item,decreaseItemCount:e.decreaseItemCount}))},O=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"decreaseItemCount",value:function(e){e.preventDefault(),console.log(e.target)}},{key:"render",value:function(){var e=this,t=Object.entries(this.props.allshop).map((function(t){var n=Object(d.a)(t,3),a=n[0],c=n[1];n[2];return Object(f.a)(Array(Object.keys(c))).map((function(t,n){return r.a.createElement(y,{key:n,item:t,title:a,decreaseItemCount:e.decreaseItemCount})}))}));return r.a.createElement("div",{className:"buildcontrols"},t)}}]),t}(a.Component),g=(n(23),function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={categories:{car:{volvo:"1",mazda:"2",corrola:"1"},tel:{mtn:"1",airtel:"2"},confectionaries:{cake:"1",candy:"2"},food:{rice:"1",beans:"2"},clothings:{shirt:"1",Trouser:"2"},home_Appliances:{shirt:"1",Trouser:"2"}}},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"shop"},r.a.createElement(O,{allshop:this.state.categories}),r.a.createElement(p,null))}}]),t}(a.Component)),C=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(g,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[11,1,2]]]);
//# sourceMappingURL=main.5a1041fb.chunk.js.map