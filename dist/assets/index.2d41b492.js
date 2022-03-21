var T=Object.defineProperty;var Z=(i,e,n)=>e in i?T(i,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):i[e]=n;var m=(i,e,n)=>(Z(i,typeof e!="symbol"?e+"":e,n),n);import{r as V,o as d,c as f,a as l,d as O,u as o,b as x,e as N,n as S,f as b,g as j,w as B,h as p,F as C,i as y,j as M,t as v,k as E,l as D,m as I}from"./vendor.fe842b07.js";const R=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(t){if(t.ep)return;t.ep=!0;const s=n(t);fetch(t.href,s)}};R();let L=!0;function z(){const i=localStorage.getItem("mode");return i||"auto"}function X(i){const e=document.querySelector("html");i==="dark"?e==null||e.classList.add("dark"):e==null||e.classList.remove("dark")}const _=V(z());function $(){return L?L=!1:_.value=_.value==="auto"?"dark":"auto",localStorage.setItem("mode",_.value),X(_.value),_}var g=(i,e)=>{const n=i.__vccOpts||i;for(const[a,t]of e)n[a]=t;return n};const Y={},H={width:"2em",height:"2em",viewBox:"0 0 256 256"},q=l("path",{fill:"currentColor",d:"M128 60a68 68 0 1 0 68 68a68.1 68.1 0 0 0-68-68Zm0 120a52 52 0 1 1 52-52a52 52 0 0 1-52 52Zm-8-144V16a8 8 0 0 1 16 0v20a8 8 0 0 1-16 0ZM43.1 54.5a8.1 8.1 0 1 1 11.4-11.4l14.1 14.2a8 8 0 0 1 0 11.3a8.1 8.1 0 0 1-11.3 0ZM36 136H16a8 8 0 0 1 0-16h20a8 8 0 0 1 0 16Zm32.6 51.4a8 8 0 0 1 0 11.3l-14.1 14.2a8.3 8.3 0 0 1-5.7 2.3a8.5 8.5 0 0 1-5.7-2.3a8.1 8.1 0 0 1 0-11.4l14.2-14.1a8 8 0 0 1 11.3 0ZM136 220v20a8 8 0 0 1-16 0v-20a8 8 0 0 1 16 0Zm76.9-18.5a8.1 8.1 0 0 1 0 11.4a8.5 8.5 0 0 1-5.7 2.3a8.3 8.3 0 0 1-5.7-2.3l-14.1-14.2a8 8 0 0 1 11.3-11.3ZM248 128a8 8 0 0 1-8 8h-20a8 8 0 0 1 0-16h20a8 8 0 0 1 8 8Zm-60.6-59.4a8 8 0 0 1 0-11.3l14.1-14.2a8.1 8.1 0 0 1 11.4 11.4l-14.2 14.1a8.1 8.1 0 0 1-11.3 0Z"},null,-1),P=[q];function G(i,e){return d(),f("svg",H,P)}var K=g(Y,[["render",G]]);const J={},Q={width:"2em",height:"2em",viewBox:"0 0 256 256"},U=l("path",{fill:"currentColor",d:"M246 88a6 6 0 0 1-6 6h-18v18a6 6 0 0 1-12 0V94h-18a6 6 0 0 1 0-12h18V64a6 6 0 0 1 12 0v18h18a6 6 0 0 1 6 6Zm-94-42h10v10a6 6 0 0 0 12 0V46h10a6 6 0 0 0 0-12h-10V24a6 6 0 0 0-12 0v10h-10a6 6 0 0 0 0 12Zm70.4 104.7a6.3 6.3 0 0 1 0 3.6A98 98 0 1 1 101.6 33.6a6.1 6.1 0 0 1 4 .2a5.8 5.8 0 0 1 3.7 5.9a6.8 6.8 0 0 1-.2 1.4a86 86 0 0 0 105.8 105.8l1.6-.3a6.3 6.3 0 0 1 5.9 4.1Zm-14.9 10.1A98.1 98.1 0 0 1 95.2 48.5a86 86 0 1 0 112.3 112.3Z"},null,-1),W=[U];function ee(i,e){return d(),f("svg",Q,W)}var te=g(J,[["render",ee]]);const ne={},se={width:"1em",height:"1em",viewBox:"0 0 24 24"},ae=l("path",{fill:"currentColor",d:"M21 3.001c-1.4 0-2.584 1.167-2.707 1.293L17.207 5.38l-1.091-1.088a.999.999 0 0 0-1.413.001L13.46 5.537A8.353 8.353 0 0 0 10.5 5C5.813 5 2 8.813 2 13.5S5.813 22 10.5 22s8.5-3.813 8.5-8.5c0-.909-.144-1.8-.428-2.658l1.345-1.345a1.002 1.002 0 0 0-.001-1.415l-1.293-1.29l1.088-1.088c.229-.229.845-.703 1.289-.703h1v-2h-1zm-4.511 7.978c.339.804.511 1.652.511 2.521c0 3.584-2.916 6.5-6.5 6.5S4 17.084 4 13.5S6.916 7 10.5 7c.96 0 1.89.21 2.762.624c.381.181.837.103 1.136-.196l1.014-1.014l2.384 2.377l-1.092 1.092a.998.998 0 0 0-.215 1.096z"},null,-1),ie=l("path",{fill:"currentColor",d:"M6 13.5a4.47 4.47 0 0 0 1.318 3.182l1.414-1.414C8.26 14.795 8 14.168 8 13.5s.26-1.295.732-1.768A2.484 2.484 0 0 1 10.5 11V9a4.469 4.469 0 0 0-3.182 1.318A4.47 4.47 0 0 0 6 13.5z"},null,-1),re=[ae,ie];function oe(i,e){return d(),f("svg",se,re)}var A=g(ne,[["render",oe]]);const le={},ce={width:"1em",height:"1em",viewBox:"0 0 20 20"},ue=l("path",{style:{color:"red"},fill:"currentColor",d:"M17 6L3 1v18h2v-6.87z"},null,-1),he=[ue];function de(i,e){return d(),f("svg",ce,he)}var fe=g(le,[["render",de]]);const me={},ge={width:"1em",height:"1em",viewBox:"0 0 21 21"},_e=l("g",{fill:"none","fill-rule":"evenodd",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round"},[l("path",{d:"M3.5 6.5c1.378-2.412 4.024-4 7-4a8 8 0 0 1 8 8m-1 4c-1.408 2.287-4.118 4-7 4a8 8 0 0 1-8-8"}),l("path",{d:"M8.5 6.5h-5v-5m9 13h5v5"})],-1),pe=[_e];function ve(i,e){return d(),f("svg",ge,pe)}var xe=g(me,[["render",ve]]);const Ce={},ye={width:"1em",height:"1em",viewBox:"0 0 24 24"},Me=l("path",{fill:"currentColor",d:"M12 20a7 7 0 0 1-7-7a7 7 0 0 1 7-7a7 7 0 0 1 7 7a7 7 0 0 1-7 7m7.03-12.61l1.42-1.42c-.45-.51-.9-.97-1.41-1.41L17.62 6c-1.55-1.26-3.5-2-5.62-2a9 9 0 0 0-9 9a9 9 0 0 0 9 9c5 0 9-4.03 9-9c0-2.12-.74-4.07-1.97-5.61M11 14h2V8h-2m4-7H9v2h6V1Z"},null,-1),$e=[Me];function we(i,e){return d(),f("svg",ye,$e)}var ke=g(Ce,[["render",we]]);const Be=l("div",{class:"p-2"},"Minesweeper",-1),Le=O({setup(i){const e=$();return(n,a)=>(d(),f("div",{class:"bg-blue flex items-center",onClick:a[0]||(a[0]=(...t)=>o($)&&o($)(...t))},[Be,o(e)==="auto"?(d(),x(o(K),{key:0})):(d(),x(o(te),{key:1}))]))}}),F=(i,e=500)=>{let n=0,a=[];return function(t){n++,a.push(t),setTimeout(()=>{n>=2&&a.every(s=>s===t)&&i.call(null,a[0]),a=[],n=0},e)}};class Ae{constructor(e=10,n=10){m(this,"game");m(this,"generateBombs",(e,n,a)=>{for(;n>0;){const t=Math.floor(Math.random()*e[0].length),s=Math.floor(Math.random()*e.length);e[t][s].isMine===!1&&e[t][s]!==a&&(e[t][s].isMine=!0,n--)}});m(this,"getAroundBombNumber",e=>{for(let a=0;a<e.length;a++)for(let t=0;t<e[0].length;t++)n(e[a][t]);function n(a){if(a.isMine===!0){a.count=0;return}let t=a.y-1,s=a.x-1,c=0;for(let r=t;r<=t+2&&r<e.length;r++)for(let u=s;u<=s+2&&u<e[0].length;u++)r>=0&&u>=0&&e[r][u].isMine===!0&&c++;a.count=c}});m(this,"clearAround",(e,n)=>{let a=n.y-1,t=n.x-1;for(let s=a;s<=a+2&&s<e.length;s++)for(let c=t;c<=t+2&&c<e[0].length;c++)if(s>=0&&c>=0&&e[s][c]!=n){const r=e[s][c];if(r.isMine===!0)return;r.count===0&&r.isOpen===!1&&(r.isOpen=!0,this.clearAround(e,r)),r.isOpen=!0}});m(this,"handleChangeClick",e=>{this.game.count=e.count,this.game.length=e.length});m(this,"handleRefreshClick",()=>{this.game.state="pending",this.create(this.game.length)});m(this,"handleLeftClick",e=>{if(F(this.handleLeftClickTwice),this.game.state==="pending"&&(this.generateBombs(this.game.blocks,this.game.count,e),this.getAroundBombNumber(this.game.blocks),this.game.state="playing"),this.game.state==="playing"&&e.isFlag!==!0){if(e.isOpen===!1&&(e.isOpen=!0),e.count===0&&this.clearAround(this.game.blocks,e),e.isMine===!0){this.game.state="fail";for(let n=0;n<this.game.blocks.length;n++)for(let a=0;a<this.game.blocks[0].length;a++)this.game.blocks[n][a].isMine===!0&&(this.game.blocks[n][a].isOpen=!0);S(()=>{alert("boom")})}else if(e.isMine===!1){let n=0;for(let a=0;a<this.game.blocks.length;a++)for(let t=0;t<this.game.blocks[0].length;t++)this.game.blocks[a][t].isOpen===!1&&n++;n===this.game.count&&(this.game.state="won",b({spread:180,particleCount:150}))}}});m(this,"handleRightClick",(e,n)=>{e.preventDefault(),this.game.state==="playing"&&(n.isOpen||(n.isFlag?this.game.flagCount--:this.game.flagCount++,n.isFlag=!n.isFlag))});m(this,"handleLeftClickTwice",e=>{if(e.isOpen===!1)return;let n=e.y-1,a=e.x-1;for(let t=n;t<=n+2&&t<this.game.blocks.length;t++)for(let s=a;s<=a+2&&s<this.game.blocks[0].length;s++)t>=0&&s>=0&&this.game.blocks[t][s]!=e&&this.handleLeftClick(this.game.blocks[t][s])});this.game=N({length:e,count:n,flagCount:0,costTime:0,state:"pending",blocks:[]})}create(e){let n=[];this.game.costTime=0,this.game.flagCount=0,n=Array.from({length:e},(a,t)=>Array.from({length:e},(s,c)=>({x:c,y:t,isMine:!1,isOpen:!1,isFlag:!1}))),this.game.blocks=n}}const h=new Ae(10,10),Oe=i=>{let e="";switch(i){case 1:e="text-blue-400";break;case 2:e="text-red-400";break;case 3:e="text-yellow-400";break;case 4:e="text-green-400";break;case 5:e="text-pink-400";break;case 6:e="text-purple-400";break;case 7:e="text-gray-400";break;case 8:e="text-indigo-400"}return e};const Fe={class:"h-screen text-center flex items-center flex-col p-4"},Te={class:"flex m-3 al"},Ze=["onClick"],Ve={class:"flex gap-10 text-lg font-mono"},Ne={class:"flex gap-6 mb-1"},Se={class:"flex items-center"},be={class:"flex items-center"},je={class:"flex flex-col gap-0.5 pb-8"},Ee={class:"flex gap-0.5"},De=["onClick","onContextmenu"],Ie=l("footer",{class:"font-mono"},"Tips:\u9F20\u6807\u5DE6\u952E\u5355\u51FB\u70B9\u5F00\u4E00\u4E2A\u65B9\u683C,\u53CC\u51FB\u81EA\u52A8\u5C55\u5F00\u5468\u56F4\u672A\u63D2\u65D7\u5B50\u7684\u65B9\u683C,\u53F3\u952E\u63D2\u65D7\u5B50",-1),Re=O({setup(i){j(()=>{h.create(10)});const e=[{title:"Easy",count:10,length:9},{title:"Medium",count:40,length:16},{title:"Hard",count:88,length:16}];B(()=>h.game.count,()=>{h.game.state="pending",h.create(h.game.length)});let n;B(()=>h.game.state,s=>{s==="playing"&&(h.game.costTime=0,n=setInterval(()=>{h.game.costTime++},1e3)),(s==="won"||s==="fail"||s==="pending")&&clearInterval(n)});const a=F(h.handleLeftClickTwice);function t(s){h.handleLeftClick(s),a(s)}return(s,c)=>(d(),f("div",Fe,[p(Le),l("div",Te,[l("button",{onClick:c[0]||(c[0]=(...r)=>o(h).handleRefreshClick&&o(h).handleRefreshClick(...r)),class:"py-1 px-2 mx-1 text-black bg-orange-500 rounded-lg"},[p(o(xe))]),(d(),f(C,null,y(e,r=>l("button",{onClick:u=>o(h).handleChangeClick(r),class:"py-1 px-2 mx-1 text-black bg-orange-500 rounded-lg"},v(r.title),9,Ze)),64))]),l("div",Ve,[l("div",Ne,[l("div",Se,[p(o(ke)),M(" :"+v(o(h).game.costTime),1)]),l("div",be,[p(o(A)),M(" :"+v(o(h).game.count-o(h).game.flagCount),1)])])]),l("div",je,[(d(!0),f(C,null,y(o(h).game.blocks,r=>(d(),f("div",Ee,[(d(!0),f(C,null,y(r,u=>{var w;return d(),f("button",{onClick:k=>t(u),onContextmenu:k=>o(h).handleRightClick(k,u),class:E(["w-8 h-8 border border-gray-400 flex items-center justify-center bg-slate-500 font-bold",[{open:u.isOpen===!0},o(Oe)((w=u.count)!=null?w:0)]])},[M(v(u.isOpen?u.count==0?"":u.count:"")+" ",1),u.isOpen&&u.isMine?(d(),x(o(A),{key:0})):u.isFlag&&u.isOpen===!1?(d(),x(o(fe),{key:1})):D("",!0)],42,De)}),256))]))),256))]),Ie]))}});I(Re).mount("#app");