(this.webpackJsonpcinema=this.webpackJsonpcinema||[]).push([[0],{25:function(e,t,a){e.exports=a(50)},30:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(22),o=a.n(r),m=a(6),i=(a(30),function(){return c.a.createElement("div",{className:"rmdb-header"},c.a.createElement("div",{className:"rmdb-header-content"},c.a.createElement(m.b,{to:"/"},c.a.createElement("img",{className:"rmdb-logo",src:"./images/reactMovie_logo.png",alt:"rmdb-log"})),c.a.createElement("img",{className:"rmdb-tmdb-logo",src:"./images/tmdb_logo.png",alt:"tmdb-logo"})))}),l=a(19),s=a(10),u=a(11),d=a(12),h=a(13),v="https://api.themoviedb.org/3/",g="12fa40673f3d6c3c034962aaab93d7d2",p="https://image.tmdb.org/t/p/",b=(a(35),function(e){return c.a.createElement("div",{className:"rmdb-heroimage",style:{background:"linear-gradient(to bottom, rgba(0,0,0,0)\n                 39%,rgba(0,0,0,0)\n                 41%,rgba(0,0,0,0.65)\n                 100%),\n                 url('".concat(e.image,"'), #1c1c1c")}},c.a.createElement("div",{className:"rmdb-heroimage-conent"},c.a.createElement("div",{className:"rmdb-heroimage-text"},c.a.createElement("h1",null,e.title),c.a.createElement("p",null,e.text))))}),f=(a(36),a(7)),E=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={value:""},e.timeout=null,e.doSearch=function(t){e.setState({value:t.target.value}),clearTimeout(e.timeout),e.timeout=setTimeout((function(){e.props.callback(e.state.value)}),500)},e}return Object(u.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"rmdb-searchbar"},c.a.createElement("div",{className:"rmdb-searchbar-content"},c.a.createElement(f.a,{className:"rmdb-fa-search",icon:"search",size:"2x"}),c.a.createElement("input",{type:"text",className:"rmdb-searchbar-input",placeholder:"search",onChange:this.doSearch,value:this.state.value})))}}]),a}(n.Component),N=(a(40),function(e){return c.a.createElement("div",{className:"rmdb-moviethumb"},e.clickable?c.a.createElement(m.b,{to:{pathname:"/".concat(e.movieId),movieName:"".concat(e.movieName)}},c.a.createElement("img",{src:e.image,alt:"moviethumb"})):c.a.createElement("img",{src:e.image,alt:"moviethumb"}))}),k=(a(41),function(e){return c.a.createElement("div",{className:"rmdb-loadmorebtn",onClick:e.onClick},c.a.createElement("p",null,e.text))}),y=(a(42),function(){return c.a.createElement("div",{className:"loader"})}),I=(a(43),function(e){return c.a.createElement("div",{className:"rmdb-grid"},e.header&&!e.loading?c.a.createElement("h1",null,e.header):null,c.a.createElement("div",{className:"rmdb-grid-content"},e.children.map((function(e,t){return c.a.createElement("div",{key:t,className:"rmdb-grid-element"},e)}))))}),_=(a(44),function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={movies:[],heroImage:null,loading:!1,currentpage:0,totalpages:0,searchterm:""},e.searchItems=function(t){var a="";e.setState({movies:[],loading:!0,searchterm:t}),a=""===t?"".concat(v,"movie/popular?api_key=").concat(g,"&language=en-US&page=1"):"".concat(v,"search/movie?api_key=").concat(g,"&language=en-US&query=").concat(t),e.fetchItems(a)},e.loadmoreitems=function(){var t;e.setState({loading:!0}),t="".concat(v,"movie/popular?api_key=").concat(g,"&language=en-US&page=").concat(e.state.currentpage+1),e.fetchItems(t)},e.fetchItems=function(t){fetch(t).then((function(e){return e.json()})).then((function(t){e.setState({movies:[].concat(Object(l.a)(e.state.movies),Object(l.a)(t.results)),heroImage:e.state.heroImage||t.results[0],loading:!1,currentpage:t.page,totalpages:t.total_pages})})).catch((function(e){return console.error("Error:",e)}))},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.setState({loading:!0});var e="".concat(v,"movie/popular?api_key=").concat(g,"&language=en-US&page=1");this.fetchItems(e)}},{key:"render",value:function(){return c.a.createElement("div",{className:"rmdb-home"},this.state.heroImage?c.a.createElement("div",null,c.a.createElement(b,{image:"".concat(p).concat("w1280").concat(this.state.heroImage.backdrop_path),title:this.state.heroImage.original_title,text:this.state.heroImage.overview}),c.a.createElement(E,{callback:this.searchItems})):null,c.a.createElement("div",{className:"rmdb-home-grid"},c.a.createElement(I,{header:this.state.searchterm?"search Result":"popular Movies",loading:this.state.loading},this.state.movies.map((function(e,t){return c.a.createElement(N,{key:t,clickable:!0,image:e.poster_path?"".concat(p).concat("w500").concat(e.poster_path):"./images/no_image.jpg",movieId:e.id,movieName:e.original_title})}))),this.state.loading?c.a.createElement(y,null):null,this.state.currentpage<=this.state.totalpages&&!this.state.loading?c.a.createElement(k,{text:"Load More",onClick:this.loadmoreitems}):null))}}]),a}(n.Component)),j=a(8),O=(a(45),function(e){return c.a.createElement("div",{className:"rmdb-navigation"},c.a.createElement("div",{className:"rmdb-navigation-content"},c.a.createElement(m.b,{to:"/"},c.a.createElement("p",null,"Home")),c.a.createElement("p",null),c.a.createElement("p",null,e.movie)))}),S=(a(46),function(e){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0}).format(e)}),x=function(e){return c.a.createElement("div",{className:"rmdb-movieinfobar "},c.a.createElement("div",{className:"rmdb-movieinfobar-content"},c.a.createElement("div",{className:"rmdb-movieinfobar-content-col"},c.a.createElement(f.a,{className:"fa-time",name:"clock-o",size:"2x"}),c.a.createElement("span",{className:"rmdb-movieinfobar-info"},"Running time:",function(e){var t=Math.floor(e/60),a=e%60;return"".concat(t,"h ").concat(a,"m")}(e.time))),c.a.createElement("div",{className:"rmdb-movieinfobar-content-col"},c.a.createElement(f.a,{className:"fa-budget",name:"money",size:"2x"}),c.a.createElement("span",{className:"rmdb-movieinfobar-info"},"Budget:",S(e.budget))),c.a.createElement("div",{className:"rmdb-movieinfobar-content-col"},c.a.createElement(f.a,{className:"fa-revenue",name:"ticket",size:"2x"}),c.a.createElement("span",{className:"rmdb-movieinfobar-info"}," Revenue: ",S(e.revenue)))))},w=(a(47),function(e){return c.a.createElement("div",{className:"rmdb-actor"},c.a.createElement("img",{src:e.actor.profile_path?"".concat(p).concat("w154").concat(e.actor.profile_path):"./images/no_image.jpg",alt:"actorthumb"}),c.a.createElement("span",{className:"rmdb-actor-name"},e.actor.name),c.a.createElement("span",{className:"rmdb-actor-characters"},e.actor.character))}),C=(a(48),function(e){return c.a.createElement("div",{className:"rmdb-movieinfo",style:{background:e.movie.backdrop_path?"url('".concat(p).concat("w1280").concat(e.movie.backdrop_path,"')"):"#000"}},c.a.createElement("div",{className:"rmdb-movieinfo-content"},c.a.createElement("div",{className:"rmdb-movieinfo-thumb"},c.a.createElement(N,{image:e.movie.poster_path?"".concat(p).concat("w500").concat(e.movie.backdrop_path):"./images/no_image.jpg",clickable:!1})),c.a.createElement("div",{className:"rmdb-movieinfo-text"},c.a.createElement("h1",null,e.movie.title),c.a.createElement("h3",null,"PLOT"),c.a.createElement("p",null,e.movie.overview),c.a.createElement("h3",null,"IMBD RATTING"),c.a.createElement("div",{className:"imdb-rating"},c.a.createElement("meter",{min:"0",max:"100",optimum:"100",low:"40",high:"70",value:10*e.movie.vote_averge}),c.a.createElement("p",{className:"rmdb-score"},e.movie.vote_averge)),e.directors.length>1?c.a.createElement("h3",null,"DIRECTORS"):c.a.createElement("h3",null,"DIRECTOR"),e.directors.map((function(e,t){return c.a.createElement("p",{key:t,className:"rmdb-director"},e.name)}))),c.a.createElement(f.a,{className:"fa-film",name:"fim",size:"5x"})))}),D=(a(49),function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={movie:null,actors:null,directors:[],loading:!1},e.fetchItems=function(t){fetch(t).then((function(e){return e.json()})).then((function(t){t.status_code?e.setState({loading:!1}):e.setState({movie:t},(function(){var t="".concat(v,"movie/").concat(e.props.match.params.movieId,"/credits?api_key=").concat(g);fetch(t).then((function(e){return e.json()})).then((function(t){var a=t.crew.filter((function(e){return"Director"===e.job}));e.setState({actors:t.cast,directors:a,loading:!1})}))}))})).catch((function(e){return console.error("Error",e)}))},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.setState({loading:!0});var e="".concat(v,"movie/").concat(this.props.match.params.movieId,"?api_key=").concat(g,"&language=en-US");this.fetchItems(e)}},{key:"render",value:function(){return c.a.createElement("div",{className:"rmdb-movie"},this.state.movie?c.a.createElement("div",null,c.a.createElement(O,null),c.a.createElement(C,{movie:this.state.movie,directors:this.state.directors}),c.a.createElement(x,{time:this.state.movie.runtime,budget:this.state.movie.budget,revenue:this.state.movie.revenue})):null,this.state.actors?c.a.createElement("div",{className:"rmdb-movie-grid"},c.a.createElement(I,{header:"Actors"},this.state.actors.map((function(e,t){return c.a.createElement(w,{key:t,actor:e})})))):null,this.state.actors||this.state.loading?null:c.a.createElement("h1",null,"No movie found! "),this.state.loading?c.a.createElement(y,null):null,"}")}}]),a}(n.Component)),R=function(){return c.a.createElement("div",null,c.a.createElement("h1",null,"PAGE NOT FOUND"))},T=function(){return c.a.createElement(m.a,{basename:"/cinema/"},c.a.createElement(c.a.Fragment,null,c.a.createElement(i,null),c.a.createElement(j.c,null,c.a.createElement(j.a,{path:"/",component:_,exact:!0}),c.a.createElement(j.a,{path:"/:movieId",component:D,exact:!0}),c.a.createElement(j.a,{component:R}))))};o.a.render(c.a.createElement(T,null),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.84ab46cc.chunk.js.map