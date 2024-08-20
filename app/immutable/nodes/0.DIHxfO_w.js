import{s as D,n as $,f as S,a as N,u as U,g as X,b as Y,r as J,o as Q}from"../chunks/scheduler.DGpLaggK.js";import{S as V,i as I,e as x,c as k,k as A,l as h,g as C,d as y,s as E,a as H,f as L,h as b,u as Z,t as ee,b as te,j as se,o as B,p as F,q as K,A as j,m as q,n as z,r as P}from"../chunks/index.CbleGq3R.js";import{e as R}from"../chunks/each.D6YF6ztN.js";function ae(l){let e,t='<p class="px-4 py-2 bg-white text-slate-950 font-medium" id="contact">Connect with me ↓</p> <div class="flex flex-col gap-4 items-center justify-center" id="contact"><p><b class="pr-2">Email</b> <a href="alisinakarimi.2003@gmail.com" target="_blank" class="text-violet-400">alisinakarimi.2003@gmail.com<sup class=""><span class="text-xs scale-75 pl-0.5"><i class="fa-brands fa-envelope fa-solid fa-arrow-up-right-from-square text-xs scale-[75%]"></i></span></sup></a></p> <p><b class="pr-2">GitHub</b> <a href="https://github.com/AliSinaDevelo/" target="_blank" class="text-violet-400">AliSinaDevelo<sup class=""><span class="text-xs scale-75 pl-0.5"><i class="fa-brands fa-github fa-solid fa-arrow-up-right-from-square text-xs scale-[75%]"></i></span></sup></a></p> <p><b class="pr-2">LinkedIn</b> <a href="https://www.linkedin.com/in/alisina-karimi-43a834224/" target="_blank" class="text-violet-400">Alisina Karimi<sup class=""><span class="text-xs scale-75 pl-0.5"><i class="fa-brands fa-linkedin-in fa-solid fa-arrow-up-right-from-square text-xs scale-[75%] "></i></span></sup></a></p></div>';return{c(){e=x("footer"),e.innerHTML=t,this.h()},l(r){e=k(r,"FOOTER",{class:!0,"data-svelte-h":!0}),A(e)!=="svelte-1p7owri"&&(e.innerHTML=t),this.h()},h(){h(e,"class","py-20 sm:py-32 bg-black border-t border-solid border-violet-950 flex flex-col gap-4 sm:gap-8 justify-center items-center")},m(r,s){C(r,e,s)},p:$,i:$,o:$,d(r){r&&y(e)}}}class ne extends V{constructor(e){super(),I(this,e,null,ae,D,{})}}function W(l,e,t){const r=l.slice();return r[2]=e[t],r[4]=t,r}function G(l){let e,t,r=l[2].name+"",s,a;return{c(){e=x("a"),t=x("p"),s=ee(r),this.h()},l(i){e=k(i,"A",{href:!0,class:!0,target:!0});var u=H(e);t=k(u,"P",{});var g=H(t);s=te(g,r),g.forEach(y),u.forEach(y),this.h()},h(){h(e,"href",a=l[2].link),h(e,"class","duration-200 hover:text-violet-400"),h(e,"target",l[4]===2?"_blank":"")},m(i,u){C(i,e,u),b(e,t),b(t,s)},p(i,u){u&2&&r!==(r=i[2].name+"")&&se(s,r),u&2&&a!==(a=i[2].link)&&h(e,"href",a)},d(i){i&&y(e)}}}function le(l){let e,t,r='<b class="font-bold poppins">AliSina</b> <span class="">Karimi</span>',s,a,i,u,g="",v,o=R(l[1]),p=[];for(let c=0;c<o.length;c+=1)p[c]=G(W(l,o,c));return{c(){e=x("header"),t=x("h1"),t.innerHTML=r,s=E(),a=x("div");for(let c=0;c<p.length;c+=1)p[c].c();i=E(),u=x("a"),u.innerHTML=g,this.h()},l(c){e=k(c,"HEADER",{class:!0});var d=H(e);t=k(d,"H1",{class:!0,"data-svelte-h":!0}),A(t)!=="svelte-1cwh7d4"&&(t.innerHTML=r),s=L(d),a=k(d,"DIV",{class:!0});var n=H(a);for(let w=0;w<p.length;w+=1)p[w].l(n);i=L(n),u=k(n,"A",{href:!0,"data-svelte-h":!0}),A(u)!=="svelte-x4pr97"&&(u.innerHTML=g),n.forEach(y),d.forEach(y),this.h()},h(){h(t,"class","font-medium"),h(u,"href","#contact"),h(a,"class","sm:flex items-center gap-4 hidden"),h(e,"class",v="sticky z-[10] top-0 duration-200 px-6 flex items-center justify-between border-b border-solid "+(l[0]>0?" py-4 bg-slate-950 border-violet-950":" py-6 bg-transparent border-transparent"))},m(c,d){C(c,e,d),b(e,t),b(e,s),b(e,a);for(let n=0;n<p.length;n+=1)p[n]&&p[n].m(a,null);b(a,i),b(a,u)},p(c,[d]){if(d&2){o=R(c[1]);let n;for(n=0;n<o.length;n+=1){const w=W(c,o,n);p[n]?p[n].p(w,d):(p[n]=G(w),p[n].c(),p[n].m(a,i))}for(;n<p.length;n+=1)p[n].d(1);p.length=o.length}d&1&&v!==(v="sticky z-[10] top-0 duration-200 px-6 flex items-center justify-between border-b border-solid "+(c[0]>0?" py-4 bg-slate-950 border-violet-950":" py-6 bg-transparent border-transparent"))&&h(e,"class",v)},i:$,o:$,d(c){c&&y(e),Z(p,c)}}}function re(l,e,t){let{y:r}=e,{tabs:s=[{name:"Projects ",link:"#projects"},{name:"About me",link:"#about"},{name:"Blog (coming soon)",link:""},{name:"Curriculum Vitae",link:"/assets/cv/output/CurriculumVitae.pdf"}]}=e;return l.$$set=a=>{"y"in a&&t(0,r=a.y),"tabs"in a&&t(1,s=a.tabs)},[r,s]}class ie extends V{constructor(e){super(),I(this,e,re,le,D,{y:0,tabs:1})}}function oe(l){let e=!1,t=()=>{e=!1},r,s,a,i,u='<i class="fa-solid fa-arrow-up"></i>',g,v,o,p,c,d,n,w,O;S(l[5]),S(l[6]),o=new ie({props:{y:l[0],innerHeight:l[2]}});const M=l[4].default,_=N(M,l,l[3],null);return d=new ne({}),{c(){s=x("div"),a=x("div"),i=x("button"),i.innerHTML=u,v=E(),B(o.$$.fragment),p=E(),_&&_.c(),c=E(),B(d.$$.fragment),this.h()},l(f){s=k(f,"DIV",{class:!0});var m=H(s);a=k(m,"DIV",{class:!0});var T=H(a);i=k(T,"BUTTON",{class:!0,"data-svelte-h":!0}),A(i)!=="svelte-fu343j"&&(i.innerHTML=u),T.forEach(y),v=L(m),F(o.$$.fragment,m),p=L(m),_&&_.l(m),c=L(m),F(d.$$.fragment,m),m.forEach(y),this.h()},h(){h(i,"class","ml-auto rounded-full bg-slate-900 text-violet-400 px-3 sm:px-4 hover:bg-slate-800 cursor-pointer aspect-square grid place-items-center"),h(a,"class",g="fixed bottom-0 w-full duration-200 flex p-10 z-[10] "+(l[0]>0?" opacity-full pointer-events-auto":" pointer-events-none opacity-0")),h(s,"class","container relative flex flex-col max-w-[1400px] mx-auto w-full text-sm sm:text-base min-h-screen")},m(f,m){C(f,s,m),b(s,a),b(a,i),b(s,v),K(o,s,null),b(s,p),_&&_.m(s,null),b(s,c),K(d,s,null),n=!0,w||(O=[j(window,"scroll",()=>{e=!0,clearTimeout(r),r=setTimeout(t,100),l[5]()}),j(window,"resize",l[6]),j(i,"click",ce)],w=!0)},p(f,[m]){m&1&&!e&&(e=!0,clearTimeout(r),scrollTo(window.pageXOffset,f[0]),r=setTimeout(t,100)),(!n||m&1&&g!==(g="fixed bottom-0 w-full duration-200 flex p-10 z-[10] "+(f[0]>0?" opacity-full pointer-events-auto":" pointer-events-none opacity-0")))&&h(a,"class",g);const T={};m&1&&(T.y=f[0]),m&4&&(T.innerHeight=f[2]),o.$set(T),_&&_.p&&(!n||m&8)&&U(_,M,f,f[3],n?Y(M,f[3],m,null):X(f[3]),null)},i(f){n||(q(o.$$.fragment,f),q(_,f),q(d.$$.fragment,f),n=!0)},o(f){z(o.$$.fragment,f),z(_,f),z(d.$$.fragment,f),n=!1},d(f){f&&y(s),P(o),_&&_.d(f),P(d),w=!1,J(O)}}}function ce(){document.body.scrollIntoView()}function fe(l,e,t){let{$$slots:r={},$$scope:s}=e,a,i=0,u=0;Q(()=>{const o=document.createElement("link");o.rel="icon",o.href="/assets/favicon.png",o.type="image/png",document.head.appendChild(o)});function g(){t(0,a=window.pageYOffset)}function v(){t(2,u=window.innerHeight),t(1,i=window.innerWidth)}return l.$$set=o=>{"$$scope"in o&&t(3,s=o.$$scope)},[a,i,u,s,r,g,v]}class me extends V{constructor(e){super(),I(this,e,fe,oe,D,{})}}export{me as component};
