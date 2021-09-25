(this.webpackJsonpmovie=this.webpackJsonpmovie||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),i=c(4),a=c.n(i),r=(c(13),c(3)),o=c(5),l=c(6),h=c(8),j=c(7),d=c(0),u=function(){return Object(d.jsx)("nav",{children:Object(d.jsx)("div",{className:"nav-wrapper container",children:Object(d.jsx)("a",{href:"/",className:"brand-logo",children:"Movie Finder"})})})},v=function(e){return Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("div",{className:"row",children:Object(d.jsx)("section",{className:"col s4 offset-s4",children:Object(d.jsx)("form",{action:"",onSubmit:e.handleSubmit,children:Object(d.jsx)("div",{className:"inputField",children:Object(d.jsx)("input",{onChange:e.handleChange,placeholder:"Search movie",type:"text"})})})})})})},m=function(e){return Object(d.jsx)("div",{className:"col s12 m6 l3",children:Object(d.jsxs)("div",{className:"card",children:[Object(d.jsx)("div",{className:"card-image waves-effect waves-block waves-light",children:null==e.image?Object(d.jsx)("img",{src:"https://pbs.twimg.com/profile_images/600060188872155136/st4Sp6Aw_400x400.jpg",alt:"card image",style:{width:"100%",height:360}}):Object(d.jsx)("img",{src:"http://image.tmdb.org/t/p/w185".concat(e.image),alt:"card image",style:{width:"100%",height:360}})}),Object(d.jsx)("div",{className:"card-content",children:Object(d.jsx)("p",{children:Object(d.jsx)("a",{href:"#",onClick:function(){return e.viewMovieInfo(e.movieId)},children:"View Details"})})})]})})},b=function(e){return Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("div",{className:"row",children:Object(d.jsx)("div",{className:"col s12",children:e.movies.map((function(t,c){return Object(d.jsx)(m,{image:t.poster_path,viewMovieInfo:e.viewMovieInfo,movieId:t.id},c)}))})})})},f=function(e){for(var t=[],c=function(c){var n=e.currentPage==c?"active":"";t.push(Object(d.jsx)("li",{className:"waves-effect ".concat(n," "),onClick:function(){return e.nextPage(c)},children:Object(d.jsx)("a",{href:"#",children:c})},c))},n=1;n<=e.pages+1;n++)c(n);return Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("div",{className:"row",children:Object(d.jsxs)("ul",{className:"pagination",children:[e.currentPage>1?Object(d.jsx)("li",{className:"waves-effect ",onClick:function(){return e.nextPage(e.currentPage-1)},children:Object(d.jsx)("a",{href:"#",children:"Prev"})}):"",t,e.currentPage<e.pages+1?Object(d.jsx)("li",{className:"waves-effect",onClick:function(){return e.nextPage(e.currentPage+1)},children:Object(d.jsx)("a",{href:"#",children:"Next"})}):""]})})})},g=function(e){return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsxs)("div",{className:"row",onClick:e.closeMovieInfo,style:{cursor:"pointer",paddingTop:50},children:[Object(d.jsx)("i",{className:"fas fa-arrow-left"}),Object(d.jsx)("span",{style:{marginLeft:10},children:"Go Back"})]}),Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col s12 m4",children:null==e.currentMovie.poster_path?Object(d.jsx)("img",{src:"https://pbs.twimg.com/profile_images/600060188872155136/st4Sp6Aw_400x400.jpg",alt:"Card Image",style:{width:"100%",height:360}}):Object(d.jsx)("img",{src:"http://image.tmdb.org/t/p/w185".concat(e.currentMovie.poster_path),alt:"Card Image",style:{width:"100%",height:360}})}),Object(d.jsx)("div",{className:"col s12 m8",children:Object(d.jsxs)("div",{className:"info-container",children:[Object(d.jsx)("p",{children:e.currentMovie.title}),Object(d.jsx)("p",{children:e.currentMovie.release_date.substring(5).split("-").concat(e.currentMovie.release_date.substring(0,4)).join("/")}),Object(d.jsx)("p",{children:e.currentMovie.overview})]})})]})]})},x=function(e){Object(h.a)(c,e);var t=Object(j.a)(c);function c(e){var n;return Object(o.a)(this,c),(n=t.call(this,e)).handleSubmit=function(e){e.preventDefault(),fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat("42da7ae5f5470ce1486e7b6587bda265","&query=").concat(n.state.searchItem)).then((function(e){return e.json()})).then((function(e){console.log(e),n.setState({movies:Object(r.a)(e.results),totalResults:e.total_results})}))},n.handleChange=function(e){n.setState({searchItem:e.target.value})},n.nextPage=function(e){fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat("42da7ae5f5470ce1486e7b6587bda265","&query=").concat(n.state.searchItem,"&page=").concat(e)).then((function(e){return e.json()})).then((function(t){console.log(t),n.setState({movies:Object(r.a)(t.results),currentPage:e})}))},n.viewMovieInfo=function(e){var t=n.state.movies.filter((function(t){return t.id==e})),c=t.length>0?t[0]:null;n.setState({currentMovie:c})},n.closeMovieInfo=function(){n.setState({currentMovie:null})},n.state={movies:[],searchItem:"",totalResults:0,currentPage:1,currentMovie:null},n.apiKey="42da7ae5f5470ce1486e7b6587bda265",n}return Object(l.a)(c,[{key:"render",value:function(){var e=Math.floor(this.state.totalResults/20);return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(u,{}),null==this.state.currentMovie?Object(d.jsxs)("div",{children:[Object(d.jsx)(v,{handleSubmit:this.handleSubmit,handleChange:this.handleChange}),Object(d.jsx)(b,{movies:this.state.movies,viewMovieInfo:this.viewMovieInfo})]}):Object(d.jsx)(g,{currentMovie:this.state.currentMovie,closeMovieInfo:this.closeMovieInfo}),this.state.totalResults>20&&null==this.state.currentMovie?Object(d.jsx)(f,{pages:e,nextPage:this.nextPage,currentPage:this.state.currentPage}):""]})}}]),c}(n.Component),p=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,16)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,a=t.getTTFB;c(e),n(e),s(e),i(e),a(e)}))};a.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(x,{})}),document.getElementById("root")),p()}},[[15,1,2]]]);
//# sourceMappingURL=main.b2514756.chunk.js.map