(this["webpackJsonptic-tak-toe"]=this["webpackJsonptic-tak-toe"]||[]).push([[0],{13:function(e,n,t){},14:function(e,n,t){},15:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(3),i=t.n(c),l=(t(13),t(4)),o=t(5),s=t(1),u=t(7),m=t(6),h=function(e){var n=e.winner,t=e.hasDrawn,a=e.currentPlayer,c="".concat(a.name," has turn");return n&&(c="".concat(a.name," has won")),t&&(c="Game has drawn"),r.a.createElement("h3",{className:"msgBox"},c)},y=function(e){var n=e.id,t=e.value,a=e.onClick,c=!!t;return r.a.createElement("button",{disabled:c,onClick:function(){return a(n)},className:"tile"},t)},d=function(e){var n=e.isGameOver?"disabled board":"board";return r.a.createElement("div",{className:n},e.tiles.map((function(n,t){return r.a.createElement(y,{onClick:e.onClick,value:n,key:t,id:t})})))},f=function(e){Object(u.a)(t,e);var n=Object(m.a)(t);function t(e){var a;return Object(l.a)(this,t),(a=n.call(this,e)).state={currentPlayer:a.props.player1,nextPlayer:a.props.player2,tiles:["","","","","","","","",""],winner:"",hasDrawn:!1},a.handleClick=a.handleClick.bind(Object(s.a)(a)),a}return Object(o.a)(t,[{key:"handleClick",value:function(e){this.setState((function(n){var t=n.tiles.slice(),a=n.currentPlayer,r=n.nextPlayer;return t[e]=a.symbol,function(e,n){return[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]].some((function(t){return t.every((function(t){return e[t]===n}))}))}(t,a.symbol)?{winner:a.name,tiles:t}:function(e,n,t){return e.every((function(e){return e===n||e===t}))}(t,a.symbol,r.symbol)?{hasDrawn:!0,tiles:t}:{tiles:t,currentPlayer:r,nextPlayer:a}}))}},{key:"render",value:function(){var e=this.state,n=e.winner,t=e.hasDrawn,a=e.currentPlayer;return r.a.createElement("div",{className:"game"},r.a.createElement("h1",null,"Tic-Tac-Toe"),r.a.createElement(h,{winner:n,hasDrawn:t,currentPlayer:a}),r.a.createElement(d,{isGameOver:n||t,onClick:this.handleClick,tiles:this.state.tiles}))}}]),t}(r.a.Component),v=(t(14),function(e){return r.a.createElement(f,{player1:{name:"Tom",symbol:"0"},player2:{name:"Jerry",symbol:"X"}})});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,n,t){e.exports=t(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.dbe6b0cc.chunk.js.map