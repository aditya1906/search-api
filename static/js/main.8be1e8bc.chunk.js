(this["webpackJsonpsearch-api"]=this["webpackJsonpsearch-api"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),s=a.n(c),i=(a(13),a(1)),o=a(2),l=a(4),u=a(3),m=a(5),h=(a(14),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("input",{className:"search-field",onChange:this.props.onSearchChange,placeholder:"Search User",type:"text",name:"textInput"})}}]),t}(n.Component)),p=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.imgSrc,a=e.name,n=e.email;return r.a.createElement("div",{className:"card"},r.a.createElement("img",{src:t,alt:a}),r.a.createElement("div",{className:"description"},r.a.createElement("p",{className:"name"},a),r.a.createElement("p",{className:"email"},n)))}}]),t}(n.Component),f=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.users,t=e.map((function(t,a){var n="".concat(e[a].name.first," ").concat(e[a].name.last);return r.a.createElement(p,{key:a,name:n,email:e[a].email,imgSrc:e[a].picture.large})}));return r.a.createElement("div",{className:"card-group"},t)}}]),t}(n.Component),d=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"loading"}),r.a.createElement("p",null,"Loading"))}}]),t}(n.Component),b=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{height:"75vh",overflowY:"scroll",border:"1px solid #ffd700"}},this.props.children)}}]),t}(r.a.Component),j=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).onSearchChange=function(t){var a=e.state.fetchUsers.filter((function(e){return e.name.first.toLowerCase().includes(t.target.value.toLowerCase())||e.name.last.toLowerCase().includes(t.target.value.toLowerCase())||e.email.toLowerCase().includes(t.target.value.toLowerCase())}));e.setState({users:a}),e.setState({animate:!e.state.animate})},e.state={fetchUsers:[],users:[],animate:!0},e}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://randomuser.me/api/?results=10&nat=au,nz&inc=name,nat,picture,email").then((function(e){return e.json()})).then((function(t){e.setState({fetchUsers:t.results}),e.setState({users:t.results})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"app"},r.a.createElement("h1",null,"Awesome Search API"),r.a.createElement(h,{onSearchChange:this.onSearchChange}),r.a.createElement(b,null,0!==this.state.fetchUsers.length?r.a.createElement("div",{className:this.state.animate?"fade":"hide"},r.a.createElement(f,{users:this.state.users})):r.a.createElement(d,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.8be1e8bc.chunk.js.map