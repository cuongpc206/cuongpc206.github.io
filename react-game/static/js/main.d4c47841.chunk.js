(window["webpackJsonpreact-game"]=window["webpackJsonpreact-game"]||[]).push([[0],{30:function(t,e,n){t.exports=n(65)},35:function(t,e,n){},36:function(t,e,n){t.exports=n.p+"static/media/logo.5d5d9eef.svg"},37:function(t,e,n){},42:function(t,e){},44:function(t,e){},65:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),i=n(24),s=n.n(i),r=(n(35),n(25)),o=n(26),u=n(28),l=n(27),h=n(29),m=(n(36),n(37),n(38),function(t){function e(t){var n;return Object(r.a)(this,e),(n=Object(u.a)(this,Object(l.a)(e).call(this,t))).state={quiz:[{question:"C\xe2u 1 : Con ch\xf3 c\xf3 m\u1ea5y ch\xe2n ?",answer:["A : 1 ch\xe2n","B : 2 ch\xe2n","C : 3 ch\xe2n","D : 4 ch\xe2n"],correct:"D : 4 ch\xe2n"},{question:"C\xe2u 2 : Con m\xe8o c\xf3 m\u1ea5y ch\xe2n ?",answer:["A : 10 ch\xe2n","B : 20 ch\xe2n","C : 30 ch\xe2n","D : 4 ch\xe2n"],correct:"D : 4 ch\xe2n"},{question:"C\xe2u 3 : 1 + 1 = ?",answer:["A : 1","B : 2","C : 3","D : 4 "],correct:"B : 2"}],numberquestion:0,totalcorrect:0,isAnswered:!1,status:["exit","exit","exit","exit"]},n}return Object(h.a)(e,t),Object(o.a)(e,[{key:"check",value:function(t,e,n,a,c){var i=this.state.quiz[e].correct;if(!a){var s=this.state.status.slice();s=["exit","exit","exit","exit"],e<=2?i===t?(n+=1,s[c]+=" exit1"):s[c]+=" exit1":e=0,this.setState({numberquestion:e,totalcorrect:n,isAnswered:!0,status:s})}}},{key:"reset",value:function(t,e){var n=this.state.status.slice();n=["exit","exit","exit","exit"],this.setState({numberquestion:0,totalcorrect:0,status:n})}},{key:"next",value:function(t){var e=this.state.status.slice();e=["exit","exit","exit","exit"],t+=1,this.setState({numberquestion:t,isAnswered:!1,status:e})}},{key:"back",value:function(t){t>0?t-=1:t=0,this.setState({numberquestion:t})}},{key:"render",value:function(){var t=this,e=this.state.numberquestion,n=this.state.totalcorrect,a=this.state.isAnswered,i=this.state.status;if(e<=2){var s=this.state.quiz[e].question,r=this.state.quiz[e].answer.map((function(s,r){return c.a.createElement("li",{key:s},c.a.createElement("h3",{className:i[r],onClick:function(){return t.check(s,e,n,a,r)}},c.a.createElement("p",null,s)))}));return c.a.createElement("div",{className:"App"},c.a.createElement("h1",null,"Quiz"),c.a.createElement("h2",null,s),r,a,c.a.createElement("button",{className:"next",onClick:function(){return t.next(e)}},c.a.createElement("b",null,"Next")),c.a.createElement("button",{className:"back",onClick:function(){return t.back(e)}},c.a.createElement("b",null,"Back")))}return c.a.createElement("div",{className:"App"},c.a.createElement("h1",null,"B\u1ea1n \u0111\xe3 tr\u1ea3 l\u1eddi \u0111\xfang ",n," c\xe2u"),c.a.createElement("button",{className:"click",onClick:function(){return t.reset(e,n)}},c.a.createElement("b",null,"Ch\u01a1i l\u1ea1i")))}}]),e}(c.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[30,1,2]]]);
//# sourceMappingURL=main.d4c47841.chunk.js.map
