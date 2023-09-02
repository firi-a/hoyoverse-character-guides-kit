import{s as j,n as _,f as b}from"../chunks/scheduler.63274e7e.js";import{S as E,i as I,g as h,h as u,j as p,f as o,k as m,a as w,y as g,z as L,s as q,c as A}from"../chunks/index.71095f26.js";import{b as f}from"../chunks/paths.f8190c55.js";function S(l){return(l==null?void 0:l.length)!==void 0?l:Array.from(l)}const C=[{id:1,name:"Arlan"},{id:2,name:"Asta"},{id:3,name:"Bailu"},{id:4,name:"Blade"},{id:5,name:"Bronya"},{id:6,name:"Clara"},{id:7,name:"Dan Heng"},{id:8,name:"Fu Xuan"},{id:9,name:"Gepard"},{id:10,name:"Himeko"},{id:11,name:"Hook"},{id:12,name:"Herta"},{id:13,name:"Inbibitor Lunae"},{id:14,name:"Jing Yuan"},{id:15,name:"Kafka"},{id:16,name:"Luka"},{id:17,name:"Luocha"},{id:18,name:"Lynx"},{id:19,name:"March 7th"},{id:20,name:"Trailblazer"},{id:21,name:"Natasha"},{id:22,name:"Pela"},{id:23,name:"Qingque"},{id:24,name:"Sampo"},{id:25,name:"Seele"},{id:26,name:"Serval"},{id:27,name:"Silver Wolf"},{id:28,name:"Sushang"},{id:29,name:"Tingyun"},{id:30,name:"Welt"},{id:31,name:"Yanqing"},{id:32,name:"Yukong"}];function D(){return{characters:C.map(l=>({name:l.name.toLowerCase()}))}}const M=Object.freeze(Object.defineProperty({__proto__:null,load:D},Symbol.toStringTag,{value:"Module"}));function x(l,s,i){const n=l.slice();return n[1]=s[i].name,n}function y(l){let s,i,n,e,t,c,a;return{c(){s=h("div"),i=h("a"),n=h("img"),a=q(),this.h()},l(r){s=u(r,"DIV",{class:!0});var d=p(s);i=u(d,"A",{class:!0,href:!0});var v=p(i);n=u(v,"IMG",{class:!0,src:!0,alt:!0}),v.forEach(o),a=A(d),d.forEach(o),this.h()},h(){m(n,"class","rounded-2xl w-32 p-1.5 transition ease-in-out delay-50 hover:scale-110 duration-500"),b(n.src,e=f+"/img/"+l[1]+".webp")||m(n,"src",e),m(n,"alt",t=l[1]+"'s portrait"),m(i,"class","name text-base svelte-1m7xjr"),m(i,"href",c=f+"/characters/hsr/"+l[1]),m(s,"class","")},m(r,d){w(r,s,d),g(s,i),g(i,n),g(s,a)},p(r,d){d&1&&!b(n.src,e=f+"/img/"+r[1]+".webp")&&m(n,"src",e),d&1&&t!==(t=r[1]+"'s portrait")&&m(n,"alt",t),d&1&&c!==(c=f+"/characters/hsr/"+r[1])&&m(i,"href",c)},d(r){r&&o(s)}}}function H(l){let s,i,n=S(l[0].characters),e=[];for(let t=0;t<n.length;t+=1)e[t]=y(x(l,n,t));return{c(){s=h("div"),i=h("section");for(let t=0;t<e.length;t+=1)e[t].c();this.h()},l(t){s=u(t,"DIV",{class:!0});var c=p(s);i=u(c,"SECTION",{class:!0});var a=p(i);for(let r=0;r<e.length;r+=1)e[r].l(a);a.forEach(o),c.forEach(o),this.h()},h(){m(i,"class","flex flex-wrap max-w-5xl"),m(s,"class","flex justify-center my-32 select-none")},m(t,c){w(t,s,c),g(s,i);for(let a=0;a<e.length;a+=1)e[a]&&e[a].m(i,null)},p(t,[c]){if(c&1){n=S(t[0].characters);let a;for(a=0;a<n.length;a+=1){const r=x(t,n,a);e[a]?e[a].p(r,c):(e[a]=y(r),e[a].c(),e[a].m(i,null))}for(;a<e.length;a+=1)e[a].d(1);e.length=n.length}},i:_,o:_,d(t){t&&o(s),L(e,t)}}}function T(l,s,i){let{data:n}=s;return l.$$set=e=>{"data"in e&&i(0,n=e.data)},[n]}class O extends E{constructor(s){super(),I(this,s,T,H,j,{data:0})}}export{O as component,M as universal};