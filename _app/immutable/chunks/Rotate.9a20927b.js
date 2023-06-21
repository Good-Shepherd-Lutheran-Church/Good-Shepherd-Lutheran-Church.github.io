import{_ as A,$ as D,S as M,i as j,s as E,N as P,k as O,l as W,m as q,h as k,n as z,p as F,b as I,P as N,Q,R as T,g as U,d as V,D as B,E as G}from"./index.bedb1794.js";import{w as H}from"./index.bbbe3bef.js";function J(e){const n=e-1;return n*n*n+1}function $(e,{delay:n=0,duration:s=400,easing:d=J,axis:o="y"}={}){const t=getComputedStyle(e),i=+t.opacity,f=o==="y"?"height":"width",p=parseFloat(t[f]),a=o==="y"?["top","bottom"]:["left","right"],c=a.map(l=>`${l[0].toUpperCase()}${l.slice(1)}`),r=parseFloat(t[`padding${c[0]}`]),u=parseFloat(t[`padding${c[1]}`]),_=parseFloat(t[`margin${c[0]}`]),y=parseFloat(t[`margin${c[1]}`]),g=parseFloat(t[`border${c[0]}Width`]),m=parseFloat(t[`border${c[1]}Width`]);return{delay:n,duration:s,easing:d,css:l=>`overflow: hidden;opacity: ${Math.min(l*20,1)*i};${f}: ${l*p}px;padding-${a[0]}: ${l*r}px;padding-${a[1]}: ${l*u}px;margin-${a[0]}: ${l*_}px;margin-${a[1]}: ${l*y}px;border-${a[0]}-width: ${l*g}px;border-${a[1]}-width: ${l*m}px;`}}function S(e){return Object.prototype.toString.call(e)==="[object Date]"}function w(e,n,s,d){if(typeof s=="number"||S(s)){const o=d-s,t=(s-n)/(e.dt||1/60),i=e.opts.stiffness*o,f=e.opts.damping*t,p=(i-f)*e.inv_mass,a=(t+p)*e.dt;return Math.abs(a)<e.opts.precision&&Math.abs(o)<e.opts.precision?d:(e.settled=!1,S(s)?new Date(s.getTime()+a):s+a)}else{if(Array.isArray(s))return s.map((o,t)=>w(e,n[t],s[t],d[t]));if(typeof s=="object"){const o={};for(const t in s)o[t]=w(e,n[t],s[t],d[t]);return o}else throw new Error(`Cannot spring ${typeof s} values`)}}function K(e,n={}){const s=H(e),{stiffness:d=.15,damping:o=.8,precision:t=.01}=n;let i,f,p,a=e,c=e,r=1,u=0,_=!1;function y(m,l={}){c=m;const R=p={};return e==null||l.hard||g.stiffness>=1&&g.damping>=1?(_=!0,i=A(),a=m,s.set(e=c),Promise.resolve()):(l.soft&&(u=1/((l.soft===!0?.5:+l.soft)*60),r=0),f||(i=A(),_=!1,f=D(h=>{if(_)return _=!1,f=null,!1;r=Math.min(r+u,1);const b={inv_mass:r,opts:g,settled:!0,dt:(h-i)*60/1e3},C=w(b,a,e,c);return i=h,a=e,s.set(e=C),b.settled&&(f=null),!b.settled})),new Promise(h=>{f.promise.then(()=>{R===p&&h()})}))}const g={set:y,update:(m,l)=>y(m(c,e),l),subscribe:s.subscribe,stiffness:d,damping:o,precision:t};return g}function L(e){let n,s;const d=e[7].default,o=P(d,e,e[6],null);return{c(){n=O("div"),o&&o.c(),this.h()},l(t){n=W(t,"DIV",{class:!0});var i=q(n);o&&o.l(i),i.forEach(k),this.h()},h(){z(n,"class","Rotate-outer svelte-13p2itg"),F(n,"rotate",e[0].toString()+"deg")},m(t,i){I(t,n,i),o&&o.m(n,null),s=!0},p(t,[i]){o&&o.p&&(!s||i&64)&&N(o,d,t,t[6],s?T(d,t[6],i,null):Q(t[6]),null),i&1&&F(n,"rotate",t[0].toString()+"deg")},i(t){s||(U(o,t),s=!0)},o(t){V(o,t),s=!1},d(t){t&&k(n),o&&o.d(t)}}}function X(e,n,s){let d,{$$slots:o={},$$scope:t}=n,{state:i}=n,{startAngle:f=0}=n,{endAngle:p=90}=n,{options:a={damping:.4,stiffness:.2,precision:.3}}=n,c=K(f,a);return B(e,c,r=>s(0,d=r)),e.$$set=r=>{"state"in r&&s(2,i=r.state),"startAngle"in r&&s(3,f=r.startAngle),"endAngle"in r&&s(4,p=r.endAngle),"options"in r&&s(5,a=r.options),"$$scope"in r&&s(6,t=r.$$scope)},e.$$.update=()=>{e.$$.dirty&28&&G(c,d=i?p:f,d)},[d,c,i,f,p,a,t,o]}class v extends M{constructor(n){super(),j(this,n,X,L,E,{state:2,startAngle:3,endAngle:4,options:5})}}export{v as R,$ as a,K as s};