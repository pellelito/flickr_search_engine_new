(this.webpackJsonpflicker_search=this.webpackJsonpflicker_search||[]).push([[0],{31:function(e,t,a){e.exports=a(61)},36:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(28),l=a.n(c),o=(a(36),a(8)),i=a(9),s=a(11),u=a(10),m=a(13),p=a(1);var h={backgroundImage:"linear-gradient(to right, #4880EC, #019CAD)",color:"#fff",textAlign:"center",padding:"10px"},f={color:"#fff",textDecoration:"none"},g=function(){return r.a.createElement("header",{style:h},r.a.createElement("h1",null,"Flickr Search Engine"),r.a.createElement(m.b,{style:f,to:"/"},"Home"),r.a.createElement(m.b,{style:f,to:"/about"},"About"))},v=a(30),b=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={query:[]},e.onSubmit=function(t){t.preventDefault(),e.props.searchImg(e.state.query),e.setState({query:""})},e.onChange=function(t){return e.setState(Object(v.a)({},t.target.name,t.target.value))},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.onSubmit,style:{display:"flex"}},r.a.createElement("input",{type:"text",name:"query",style:{flex:"10",padding:"5px"},placeholder:"Search Flickr",value:this.state.query,onChange:this.onChange}),r.a.createElement("input",{type:"submit",value:"Search",className:"btn",style:{flex:"1"}}))}}]),a}(n.Component),d=(a(42),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=[],a=this.props.images;return a.map((function(n){var r=e.props.getImageUrl(n.farm,n.server,n.id,n.secret);return t.push(r),a="",null})),r.a.createElement("div",{class:"row"},r.a.Children.toArray(t.map((function(e,t){return r.a.createElement("div",{class:"column"},r.a.createElement("img",{src:e,alt:"flickr-img"}))}))))}}]),a}(n.Component));var E=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"About"),r.a.createElement("p",null,"This is the Flicker Search Engine app v1.0 It's a part of Javascript/React course sept 2020"))},y=(a(43),a(17)),k=a.n(y),j=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={images:[]},e.searchImg=function(t){k.a.get("https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=2438610fd70916149c4e3c8f70ab7788&format=json&nojsoncallback=1&text="+t).then((function(t){e.setState({images:t.data.photos.photo})})).catch((function(e){console.log(e)})),k.a.get("https://api.chucknorris.io/jokes/random").then((function(e){console.log(e.data.value)}))},e}return Object(i.a)(a,[{key:"getImageUrl",value:function(e,t,a,n){return"https://farm".concat(e,".staticflickr.com/").concat(t,"/").concat(a,"_").concat(n,"_m.jpg")}},{key:"render",value:function(){var e=this;return r.a.createElement(m.a,null,r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"container"},r.a.createElement(g,null),r.a.createElement(p.a,{exact:!0,path:"/",render:function(t){return r.a.createElement(r.a.Fragment,null,r.a.createElement(b,{searchImg:e.searchImg}),r.a.createElement(d,{images:e.state.images,getImageUrl:e.getImageUrl}))}}),r.a.createElement(p.a,{path:"/about",component:E}))))}}]),a}(n.Component);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.15fbaec6.chunk.js.map