import{S as A,i as b,s as j,C as S,k as g,l as d,m as G,h as m,n as _,p as c,b as y,F as q,G as C,H as N,g as P,d as D,q as F,a as H,r as B,c as I,E as h,u as O,J as k,Q as v}from"./index.57459108.js";function J(s){let e,n;const f=s[7].default,a=S(f,s,s[6],null);return{c(){e=g("div"),a&&a.c(),this.h()},l(t){e=d(t,"DIV",{class:!0});var l=G(e);a&&a.l(l),l.forEach(m),this.h()},h(){_(e,"class","AutoGrid-outer svelte-migc1t"),c(e,"grid-template-columns",`repeat(auto-${s[0]}, minmax(${s[1]}, ${s[2]}))`),c(e,"row-gap",s[3]),c(e,"column-gap",s[4]),c(e,"justify-content",s[5])},m(t,l){y(t,e,l),a&&a.m(e,null),n=!0},p(t,[l]){a&&a.p&&(!n||l&64)&&q(a,f,t,t[6],n?N(f,t[6],l,null):C(t[6]),null),l&7&&c(e,"grid-template-columns",`repeat(auto-${t[0]}, minmax(${t[1]}, ${t[2]}))`),l&8&&c(e,"row-gap",t[3]),l&16&&c(e,"column-gap",t[4]),l&32&&c(e,"justify-content",t[5])},i(t){n||(P(a,t),n=!0)},o(t){D(a,t),n=!1},d(t){t&&m(e),a&&a.d(t)}}}function Q(s,e,n){let{$$slots:f={},$$scope:a}=e,{fitOrFill:t="fit"}=e,{min:l="100px"}=e,{max:i="max-content"}=e,{rowGap:o="1rem"}=e,{columnGap:u="0.5rem"}=e,{justify:E="center"}=e;return s.$$set=r=>{"fitOrFill"in r&&n(0,t=r.fitOrFill),"min"in r&&n(1,l=r.min),"max"in r&&n(2,i=r.max),"rowGap"in r&&n(3,o=r.rowGap),"columnGap"in r&&n(4,u=r.columnGap),"justify"in r&&n(5,E=r.justify),"$$scope"in r&&n(6,a=r.$$scope)},[t,l,i,o,u,E,a,f]}class L extends A{constructor(e){super(),b(this,e,Q,J,j,{fitOrFill:0,min:1,max:2,rowGap:3,columnGap:4,justify:5})}}function w(s){let e,n=s[2].text+"",f,a;return{c(){e=g("span"),f=F(n),this.h()},l(t){e=d(t,"SPAN",{class:!0});var l=G(e);f=B(l,n),l.forEach(m),this.h()},h(){_(e,"class",a=v(`icon ${s[2].class}`)+" svelte-h765r5")},m(t,l){y(t,e,l),h(e,f)},p(t,l){l&4&&n!==(n=t[2].text+"")&&O(f,n),l&4&&a!==(a=v(`icon ${t[2].class}`)+" svelte-h765r5")&&_(e,"class",a)},d(t){t&&m(e)}}}function V(s){let e,n,f,a,t=s[2]!==null&&w(s);return{c(){e=g("a"),n=g("span"),f=F(s[1]),a=H(),t&&t.c(),this.h()},l(l){e=d(l,"A",{href:!0,target:!0,class:!0});var i=G(e);n=d(i,"SPAN",{class:!0});var o=G(n);f=B(o,s[1]),o.forEach(m),a=I(i),t&&t.l(i),i.forEach(m),this.h()},h(){_(n,"class","text"),_(e,"href",s[0]),_(e,"target",s[3]),_(e,"class","Button-outer svelte-h765r5")},m(l,i){y(l,e,i),h(e,n),h(n,f),h(e,a),t&&t.m(e,null)},p(l,[i]){i&2&&O(f,l[1]),l[2]!==null?t?t.p(l,i):(t=w(l),t.c(),t.m(e,null)):t&&(t.d(1),t=null),i&1&&_(e,"href",l[0]),i&8&&_(e,"target",l[3])},i:k,o:k,d(l){l&&m(e),t&&t.d()}}}function z(s,e,n){let{href:f}=e,{text:a}=e,{icon:t=null}=e,{target:l="_self"}=e,{linkEntry:i=null}=e,{external:o=!1}=e;return i&&(f=i.href,a=i.text,i.target!==void 0&&(l=i.target)),(o||l==="_blank")&&(t={class:"material-symbols-outlined",text:"open_in_new"}),s.$$set=u=>{"href"in u&&n(0,f=u.href),"text"in u&&n(1,a=u.text),"icon"in u&&n(2,t=u.icon),"target"in u&&n(3,l=u.target),"linkEntry"in u&&n(4,i=u.linkEntry),"external"in u&&n(5,o=u.external)},[f,a,t,l,i,o]}class M extends A{constructor(e){super(),b(this,e,z,V,j,{href:0,text:1,icon:2,target:3,linkEntry:4,external:5})}}export{L as A,M as B};