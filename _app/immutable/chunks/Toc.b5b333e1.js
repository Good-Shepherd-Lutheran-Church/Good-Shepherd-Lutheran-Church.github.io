import{S as H,i as V,s as y,X as O,J as g,T as q,V as K,I as C,N as S,k as b,q as z,a as A,l as w,m as p,r as M,h as u,c as N,n as d,P as k,D as X,p as v,b as T,E as m,u as B,g as I,v as Q,f as R,d as D,M as U,y as Z,z as x,A as $,B as ee}from"./index.d0bb8602.js";import{w as P}from"./index.380b7251.js";function le(i){let e=!1,l=()=>{e=!1},a,o,c;return O(i[4]),O(i[5]),{c:g,l:g,m(t,n){o||(c=[q(window,"scroll",()=>{e=!0,clearTimeout(a),a=setTimeout(l,100),i[4]()}),q(window,"resize",i[5])],o=!0)},p(t,[n]){n&2&&!e&&(e=!0,clearTimeout(a),scrollTo(window.pageXOffset,t[1]),a=setTimeout(l,100))},i:g,o:g,d(t){o=!1,K(c)}}}let E=P({xs:!1,sm:void 0,md:void 0,lg:void 0,xl:void 0});const Y=P(!0);function te(i,e,l){let a,o=g,c,t=g;C(i,Y,_=>l(6,a=_)),C(i,E,_=>l(7,c=_)),i.$$.on_destroy.push(()=>o()),i.$$.on_destroy.push(()=>t());let{breakpoints:n={xl:1200,lg:992,md:768,sm:576,xs:0}}=e,{zeroScrollMargin:s=50}=e,r,f;function h(){l(1,f=window.pageYOffset)}function W(){l(0,r=window.outerWidth)}return i.$$set=_=>{"breakpoints"in _&&l(2,n=_.breakpoints),"zeroScrollMargin"in _&&l(3,s=_.zeroScrollMargin)},i.$$.update=()=>{i.$$.dirty&5&&r!==void 0&&(S(E,c.sm=r<n.sm,c),S(E,c.md=r<n.md,c),S(E,c.lg=r<n.lg,c),S(E,c.xl=r<n.xl,c)),i.$$.dirty&10&&f!==void 0&&S(Y,a=f<=s,a)},[r,f,n,s,h,W]}class he extends H{constructor(e){super(),V(this,e,te,le,y,{breakpoints:2,zeroScrollMargin:3})}}function se(i){let e,l,a,o,c,t,n,s,r;return{c(){e=b("div"),l=b("div"),a=b("span"),o=z(i[1]),t=A(),n=b("span"),s=z(i[1]),this.h()},l(f){e=w(f,"DIV",{class:!0});var h=p(e);l=w(h,"DIV",{class:!0});var W=p(l);a=w(W,"SPAN",{class:!0});var _=p(a);o=M(_,i[1]),_.forEach(u),t=N(W),n=w(W,"SPAN",{class:!0});var L=p(n);s=M(L,i[1]),L.forEach(u),W.forEach(u),h.forEach(u),this.h()},h(){d(a,"class",c=k(`visible ${i[0]}`)+" svelte-ti8adh"),d(n,"class",r=k(`spacer ${i[0]}`)+" svelte-ti8adh"),d(l,"class","inner svelte-ti8adh"),X(l,"force-hover",i[4]),v(l,"--baseWeight",i[2]),v(l,"--hoverWeight",i[3]),d(e,"class","HoverBold-outer svelte-ti8adh")},m(f,h){T(f,e,h),m(e,l),m(l,a),m(a,o),m(l,t),m(l,n),m(n,s)},p(f,[h]){h&2&&B(o,f[1]),h&1&&c!==(c=k(`visible ${f[0]}`)+" svelte-ti8adh")&&d(a,"class",c),h&2&&B(s,f[1]),h&1&&r!==(r=k(`spacer ${f[0]}`)+" svelte-ti8adh")&&d(n,"class",r),h&16&&X(l,"force-hover",f[4]),h&4&&v(l,"--baseWeight",f[2]),h&8&&v(l,"--hoverWeight",f[3])},i:g,o:g,d(f){f&&u(e)}}}function ie(i,e,l){let{iconClass:a=null}=e,{text:o}=e,{baseWeight:c=400}=e,{hoverWeight:t=500}=e,{hoverState:n=!1}=e;return i.$$set=s=>{"iconClass"in s&&l(0,a=s.iconClass),"text"in s&&l(1,o=s.text),"baseWeight"in s&&l(2,c=s.baseWeight),"hoverWeight"in s&&l(3,t=s.hoverWeight),"hoverState"in s&&l(4,n=s.hoverState)},[a,o,c,t,n]}class ae extends H{constructor(e){super(),V(this,e,ie,se,y,{iconClass:0,text:1,baseWeight:2,hoverWeight:3,hoverState:4})}}function J(i,e,l){const a=i.slice();return a[5]=e[l],a}function j(i){let e,l;return{c(){e=b("h3"),l=z(i[0]),this.h()},l(a){e=w(a,"H3",{class:!0});var o=p(e);l=M(o,i[0]),o.forEach(u),this.h()},h(){d(e,"class","label")},m(a,o){T(a,e,o),m(e,l)},p(a,o){o&1&&B(l,a[0])},d(a){a&&u(e)}}}function F(i){let e,l=i[1].text+"",a,o;return{c(){e=b("div"),a=z(l),this.h()},l(c){e=w(c,"DIV",{class:!0});var t=p(e);a=M(t,l),t.forEach(u),this.h()},h(){d(e,"class",o=k(`divider ${i[1].class}`)+" svelte-14xpd8p")},m(c,t){T(c,e,t),m(e,a)},p(c,t){t&2&&l!==(l=c[1].text+"")&&B(a,l),t&2&&o!==(o=k(`divider ${c[1].class}`)+" svelte-14xpd8p")&&d(e,"class",o)},d(c){c&&u(e)}}}function G(i){let e,l,a,o,c,t=i[1]&&F(i);return a=new ae({props:{text:i[5][1]}}),{c(){t&&t.c(),e=A(),l=b("a"),Z(a.$$.fragment),this.h()},l(n){t&&t.l(n),e=N(n),l=w(n,"A",{href:!0,class:!0});var s=p(l);x(a.$$.fragment,s),s.forEach(u),this.h()},h(){d(l,"href",o=`#${i[5][0]}`),d(l,"class","toc-link svelte-14xpd8p"),v(l,"padding-block",i[1]!==null?"0px":"0.3rem")},m(n,s){t&&t.m(n,s),T(n,e,s),T(n,l,s),$(a,l,null),c=!0},p(n,s){n[1]?t?t.p(n,s):(t=F(n),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null);const r={};s&16&&(r.text=n[5][1]),a.$set(r),(!c||s&16&&o!==(o=`#${n[5][0]}`))&&d(l,"href",o),s&2&&v(l,"padding-block",n[1]!==null?"0px":"0.3rem")},i(n){c||(I(a.$$.fragment,n),c=!0)},o(n){D(a.$$.fragment,n),c=!1},d(n){t&&t.d(n),n&&u(e),n&&u(l),ee(a)}}}function oe(i){let e,l,a,o=i[0]&&j(i),c=[...i[4]],t=[];for(let s=0;s<c.length;s+=1)t[s]=G(J(i,c,s));const n=s=>D(t[s],1,1,()=>{t[s]=null});return{c(){e=b("div"),o&&o.c(),l=A();for(let s=0;s<t.length;s+=1)t[s].c();this.h()},l(s){e=w(s,"DIV",{class:!0});var r=p(e);o&&o.l(r),l=N(r);for(let f=0;f<t.length;f+=1)t[f].l(r);r.forEach(u),this.h()},h(){d(e,"class","Toc-outer svelte-14xpd8p"),v(e,"display",i[3]?"none":"grid"),v(e,"grid-column",i[2])},m(s,r){T(s,e,r),o&&o.m(e,null),m(e,l);for(let f=0;f<t.length;f+=1)t[f]&&t[f].m(e,null);a=!0},p(s,[r]){if(s[0]?o?o.p(s,r):(o=j(s),o.c(),o.m(e,l)):o&&(o.d(1),o=null),r&18){c=[...s[4]];let f;for(f=0;f<c.length;f+=1){const h=J(s,c,f);t[f]?(t[f].p(h,r),I(t[f],1)):(t[f]=G(h),t[f].c(),I(t[f],1),t[f].m(e,null))}for(Q(),f=c.length;f<t.length;f+=1)n(f);R()}r&8&&v(e,"display",s[3]?"none":"grid"),r&4&&v(e,"grid-column",s[2])},i(s){if(!a){for(let r=0;r<c.length;r+=1)I(t[r]);a=!0}},o(s){t=t.filter(Boolean);for(let r=0;r<t.length;r+=1)D(t[r]);a=!1},d(s){s&&u(e),o&&o.d(),U(t,s)}}}const ne=P(new Map);function re(i,e,l){let a,o=g;C(i,ne,r=>l(4,a=r)),i.$$.on_destroy.push(()=>o());let{label:c="This Page"}=e,{divider:t=null}=e,{cols:n="1 / 2"}=e,{hide:s=!1}=e;return i.$$set=r=>{"label"in r&&l(0,c=r.label),"divider"in r&&l(1,t=r.divider),"cols"in r&&l(2,n=r.cols),"hide"in r&&l(3,s=r.hide)},[c,t,n,s,a]}class ue extends H{constructor(e){super(),V(this,e,re,oe,y,{label:0,divider:1,cols:2,hide:3})}}export{ae as H,ue as T,he as W,E as b,Y as s,ne as t};
