import{_ as b}from"./CsFj4bnD.js";import{a as y,f as l,g as a,j as o,i as c,w as i,t as r,E as P,B as w,F as B,A as v,G as C}from"./6Nz0sGWj.js";import{a as A,_ as k}from"./B4YwMBN9.js";import{u as p}from"./By9HGJae.js";import{q as m}from"./BMQZC1rx.js";import"./DlAUqK2U.js";import"./CI7kYaUk.js";const D={class:"group relative h-full"},L={class:"h-full after:absolute after:bottom-0 after:left-3 after:right-3 after:h-[5px] after:scale-x-0 after:rounded-md after:bg-gradient-to-r after:from-transparent after:via-primary-400 after:to-transparent after:shadow-lg after:transition-all after:duration-300 after:ease-in-out after:content-[''] group-hover:after:scale-x-100"},$={class:"flex flex-grow flex-col p-4"},N={class:"flex-grow"},S={class:"mb-2 text-sm"},q={class:"mb-2 text-base"},E={class:"text-sm"},F=y({__name:"Card",props:{blogPost:{}},setup(n){const t=n,e=s=>new Date(s).toLocaleDateString("de-CH",{day:"numeric",month:"long",year:"numeric"});return(s,_)=>{const f=b;return a(),l("div",D,[o("div",L,[c(f,{to:t.blogPost._path,class:"z-10 flex h-full flex-col no-underline opacity-80 hover:opacity-100"},{default:i(()=>[o("div",$,[o("div",N,[o("p",S,r(e(t.blogPost.dates.published)),1),o("h3",q,r(t.blogPost.title),1)]),o("p",E,r(t.blogPost.tags),1)])]),_:1},8,["to"])])])}}}),V=()=>({getAllPosts:async()=>{const{data:e}=await p("blogPosts",()=>m("/blog").sort({"dates.published":-1}).find());return e.value},getPostByPath:async e=>{const{data:s}=await p(`blogPost-${e}`,()=>m(`/blog/${e}`).findOne());return s.value}}),j={class:"grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3"},M={__name:"PostList",async setup(n){let t,e;const{getAllPosts:s}=V(),_=([t,e]=P(()=>s()),t=await t,e(),t);return(f,u)=>{const g=F,x=A,h=k;return a(),w(h,null,{default:i(()=>[c(x,null,{default:i(()=>[u[0]||(u[0]=o("h2",{class:"mb-8 font-sans text-2xl"},"Blog",-1)),o("ul",j,[(a(!0),l(B,null,v(C(_),d=>(a(),l("li",{key:d._path,class:"group relative col-span-1 flex flex-1 flex-col rounded-2xl bg-primary-900 text-white shadow-2xl"},[c(g,{"blog-post":d},null,8,["blog-post"])]))),128))])]),_:1})]),_:1})}}};export{M as default};
