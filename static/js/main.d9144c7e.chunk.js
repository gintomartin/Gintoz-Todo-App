(this.webpackJsonpgintoztodoapp=this.webpackJsonpgintoztodoapp||[]).push([[0],{14:function(e,t,n){e.exports=n(27)},19:function(e,t,n){},20:function(e,t,n){},21:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),i=n(6),c=n.n(i),l=(n(19),n(11)),u=n(7),s=n(8),m=n(2),o=n(13),d=n(12),p=(n(20),n(21),n(9));var h=function(e){var t=e.items.map((function(t){return r.a.createElement("div",{className:"list",key:t.key},r.a.createElement("p",null,t.text,r.a.createElement("span",null,r.a.createElement(p.a,{className:"faicons",icon:"trash",onClick:function(){return e.deleteItem(t.key)}}))))}));return r.a.createElement("div",null,t)},f=n(3),I=n(10);f.b.add(I.a);var v=function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={items:[],currentItem:{text:"",key:""}},a.handleInput=a.handleInput.bind(Object(m.a)(a)),a.addItem=a.addItem.bind(Object(m.a)(a)),a.deleteItem=a.deleteItem.bind(Object(m.a)(a)),a}return Object(s.a)(n,[{key:"handleInput",value:function(e){this.setState({currentItem:{text:e.target.value,key:Date.now()}})}},{key:"addItem",value:function(e){e.preventDefault();var t=this.state.currentItem;if(console.log(t),""!==t.text){var n=[].concat(Object(l.a)(this.state.items),[t]);this.setState({items:n,currentItem:{text:"",key:""}})}}},{key:"deleteItem",value:function(e){var t=this.state.items.filter((function(t){return t.key!==e}));this.setState({items:t})}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement("form",{id:"to-do-form",onSubmit:this.addItem},r.a.createElement("input",{type:"text",placeholder:"Type here....",value:this.state.currentItem.text,onChange:this.handleInput}),r.a.createElement("button",{type:"submit"},"Add"))),r.a.createElement(h,{items:this.state.items,deleteItem:this.deleteItem}))}}]),n}(a.Component);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.d9144c7e.chunk.js.map