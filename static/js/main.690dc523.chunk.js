(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){e.exports=a(54)},23:function(e,t,a){},25:function(e,t,a){},46:function(e,t,a){},48:function(e,t,a){},50:function(e,t,a){},52:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(14),r=a.n(s),i=(a(23),a(25),a(1)),o=a(2),l=a(5),h=a(4),u=a(6),p=a(15),m=a.n(p),d=(a(46),a(48),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.props.value&&this.props.onSearch()}},{key:"render",value:function(){return c.a.createElement("div",{className:"search-wrapper"},c.a.createElement("input",{type:"text",onChange:this.props.onChange,value:this.props.value,className:"search-input"}),c.a.createElement("button",{type:"button",onClick:this.props.onSearch,className:"search-btn"},"search"))}}]),t}(c.a.Component));function b(e){return e<10?"0"+e:e.toString()}a(50);var f,g=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"table-wrapper"},c.a.createElement(v,null),c.a.createElement(E,{data:this.props.data}))}}]),t}(c.a.Component),v=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"table-header"},c.a.createElement("span",null,"INDEX"),c.a.createElement("span",null,"ID"),c.a.createElement("span",null,"TITLE"),c.a.createElement("span",null,"AUTHOR"),c.a.createElement("span",null,"COMMENTS"),c.a.createElement("span",null,"POINTS"),c.a.createElement("span",null,"CREATE_AT"))}}]),t}(c.a.Component),E=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.data.map(function(e,t){return c.a.createElement(j,{key:e.objectID,data:e,index:t})});return c.a.createElement("div",{className:"table-list"},e)}}]),t}(c.a.Component),j=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.data,t=e.title,a=e.author,n=e.num_comments,s=e.points,r=e.url,i=e.created_at,o=e.objectID,l=function(e){var t=new Date(e),a=t.getFullYear(),n=t.getMonth()+1,c=t.getDate(),s=t.getHours(),r=t.getMinutes(),i=t.getSeconds(),o=[a,n,c].map(b),l=[s,r,i].map(b);return o.join("-")+" "+l.join(":")}(i);return c.a.createElement("div",{className:"table-list-item"},c.a.createElement("span",null,this.props.index+1),c.a.createElement("span",null,o),c.a.createElement("span",null,c.a.createElement("a",{href:r,target:"_blank",className:"title-link",rel:"noreferrer noopener"},t)),c.a.createElement("span",null,a),c.a.createElement("span",null,n),c.a.createElement("span",null,s),c.a.createElement("span",null,l))}}]),t}(c.a.Component),O=a(17),y=(a(52),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("button",{className:"load-more-button",onClick:this.props.onClick},"More"))}}]),t}(c.a.Component)),k=function(e){return c.a.createElement("div",{className:"loading"},"loading...")},S=(f=y,function(e){var t=e.isSearching,a=Object(O.a)(e,["isSearching"]);return c.a.createElement(c.a.Fragment,null,t?c.a.createElement(k,null):c.a.createElement(f,a))}),C=a(16),w=function(){function e(){Object(i.a)(this,e),this.result={}}return Object(o.a)(e,[{key:"getHits",value:function(e,t){var a=this.result[e];return a&&(a=a["".concat(e,"_").concat(t)])||null}},{key:"setHits",value:function(e,t,a){var n="".concat(e,"_").concat(t),c=this.result[e];c?c[n]=a:this.result[e]=Object(C.a)({},n,a)}}]),e}(),I="redux",H=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(h.a)(t).call(this,e))).db=new w,a.state={searchItem:"",searchKey:I,isSearching:!1,error:void 0,page:0,hits:[]},a.bindFunctions(),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"app-wrapper"},c.a.createElement(d,{onChange:this.handleSearchInputChange,onSearch:this.handleSearchBtnClick,value:this.state.searchKey}),c.a.createElement(g,{data:this.state.hits}),c.a.createElement(S,{isSearching:this.state.isSearching,onClick:this.handleLoadMore}))}},{key:"bindFunctions",value:function(){this.handleSearchBtnClick=this.handleSearchBtnClick.bind(this),this.handleSearchInputChange=this.handleSearchInputChange.bind(this),this.handleLoadMore=this.handleLoadMore.bind(this),this.updateHitsList=this.updateHitsList.bind(this)}},{key:"handleLoadMore",value:function(){if(console.log("handleLoadMore ".concat(this.state.searchKey,"  ").concat(this.state.searchItem,"  ").concat(this.state.page)),this.state.searchItem){var e=this.state.page+1,t=this.db.getHits(this.state.searchItem,e);if(t&&t.length>0){console.log("\u4e0d\u7528\u52a0\u8f7d\u66f4\u591a\u4e86\uff0c\u672c\u5730\u5df2\u7ecf\u6709\u4e86");var a=this.state.hits;a=a.concat(t),this.setState({hits:a,page:e})}else this.fetchHits(this.state.searchItem,this.state.page+1)}else this.setState({error:new Error("can't load more")})}},{key:"handleSearchBtnClick",value:function(){var e=this,t=this.state.searchKey;console.log("\u8981\u67e5\u7684key",t),console.log("\u5f53\u524d\u663e\u793a\u7684\u67e5\u8be2key",this.state.searchItem);var a=this.db.getHits(t,0);if(a&&a.length>0)return console.log("\u627e\u5230\u6570\u636e\u4e86\uff0c\u4e0d\u7528\u8bf7\u6c42\u4e86"),void this.updateHitsList(t,0,a);this.setState({page:0,searchItem:t,hits:[]},function(){e.fetchHits(t,0)})}},{key:"fetchHits",value:function(e){var t=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(this.state.isSearching)alert("searching, wait plz...");else{this.setState({isSearching:!0});var n="".concat("https://hn.algolia.com/api/v1").concat("/search","?").concat("query=").concat(e,"&").concat("page=").concat(a,"&").concat("hitsPerPage=").concat("100");m()(n).then(function(a){var n=a.data,c=n.hits,s=n.page;if(!(c&&c.length>0))throw new Error("there is no more data about "+t.state.searchKey);t.updateHitsList(e,s,c),t.db.setHits(e,s,c)}).catch(function(e){t.setState({error:e,isSearching:!1})})}}},{key:"updateHitsList",value:function(e,t,a){if(console.log("updateHitsList ".concat(e," ").concat(this.state.searchItem," ").concat(t)),e===this.state.searchItem){var n=this.state.hits;n=n.concat(a),this.setState({hits:n,page:t,isSearching:!1})}else this.setState({hits:a,page:t,isSearching:!1,searchItem:e})}},{key:"handleSearchInputChange",value:function(e){var t=e.target.value;this.setState({searchKey:t})}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,2,1]]]);
//# sourceMappingURL=main.690dc523.chunk.js.map