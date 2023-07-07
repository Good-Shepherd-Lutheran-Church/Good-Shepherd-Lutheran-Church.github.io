import{a0 as k,a1 as D,S as M,i as E,s as I,C as P,k as q,l as F,m as G,h as w,n as H,p as S,b as N,F as O,G as T,H as V,g as z,d as B,I as J,N as K}from"./index.dc699f8b.js";import{w as L}from"./paths.d93b8e73.js";function R(t){return Object.prototype.toString.call(t)==="[object Date]"}function u(t,i,s,l){if(typeof s=="number"||R(s)){const n=l-s,e=(s-i)/(t.dt||1/60),o=t.opts.stiffness*n,r=t.opts.damping*e,c=(o-r)*t.inv_mass,f=(e+c)*t.dt;return Math.abs(f)<t.opts.precision&&Math.abs(n)<t.opts.precision?l:(t.settled=!1,R(s)?new Date(s.getTime()+f):s+f)}else{if(Array.isArray(s))return s.map((n,e)=>u(t,i[e],s[e],l[e]));if(typeof s=="object"){const n={};for(const e in s)n[e]=u(t,i[e],s[e],l[e]);return n}else throw new Error(`Cannot spring ${typeof s} values`)}}function Q(t,i={}){const s=L(t),{stiffness:l=.15,damping:n=.8,precision:e=.01}=i;let o,r,c,f=t,d=t,a=1,y=0,_=!1;function A(h,m={}){d=h;const j=c={};return t==null||m.hard||p.stiffness>=1&&p.damping>=1?(_=!0,o=k(),f=h,s.set(t=d),Promise.resolve()):(m.soft&&(y=1/((m.soft===!0?.5:+m.soft)*60),a=0),r||(o=k(),_=!1,r=D(g=>{if(_)return _=!1,r=null,!1;a=Math.min(a+y,1);const b={inv_mass:a,opts:p,settled:!0,dt:(g-o)*60/1e3},C=u(b,f,t,d);return o=g,f=t,s.set(t=C),b.settled&&(r=null),!b.settled})),new Promise(g=>{r.promise.then(()=>{j===c&&g()})}))}const p={set:A,update:(h,m)=>A(h(d,t),m),subscribe:s.subscribe,stiffness:l,damping:n,precision:e};return p}function U(t){let i,s;const l=t[7].default,n=P(l,t,t[6],null);return{c(){i=q("div"),n&&n.c(),this.h()},l(e){i=F(e,"DIV",{class:!0});var o=G(i);n&&n.l(o),o.forEach(w),this.h()},h(){H(i,"class","Rotate-outer svelte-13p2itg"),S(i,"rotate",t[0].toString()+"deg")},m(e,o){N(e,i,o),n&&n.m(i,null),s=!0},p(e,[o]){n&&n.p&&(!s||o&64)&&O(n,l,e,e[6],s?V(l,e[6],o,null):T(e[6]),null),o&1&&S(i,"rotate",e[0].toString()+"deg")},i(e){s||(z(n,e),s=!0)},o(e){B(n,e),s=!1},d(e){e&&w(i),n&&n.d(e)}}}function W(t,i,s){let l,{$$slots:n={},$$scope:e}=i,{state:o}=i,{startAngle:r=0}=i,{endAngle:c=90}=i,{options:f={damping:.4,stiffness:.2,precision:.3}}=i,d=Q(r,f);return J(t,d,a=>s(0,l=a)),t.$$set=a=>{"state"in a&&s(2,o=a.state),"startAngle"in a&&s(3,r=a.startAngle),"endAngle"in a&&s(4,c=a.endAngle),"options"in a&&s(5,f=a.options),"$$scope"in a&&s(6,e=a.$$scope)},t.$$.update=()=>{t.$$.dirty&28&&K(d,l=o?c:r,l)},[l,d,o,r,c,f,e,n]}class Z extends M{constructor(i){super(),E(this,i,W,U,I,{state:2,startAngle:3,endAngle:4,options:5})}}export{Z as R,Q as s};
