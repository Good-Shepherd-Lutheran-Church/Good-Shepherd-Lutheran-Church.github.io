import{S as M,i as N,s as z,I as P,k as b,l as $,m as A,h as _,n as p,b as q,K as R,L as B,M as K,g as v,d as g,a2 as Y,y as Z,a as E,q as T,z as j,c as y,r as U,C as h,A as F,V as C,u as X,v as G,f as H,B as J,X as O,a3 as Q,N as W,T as I,U as S,Y as x,Z as V}from"./index.eee779a5.js";import{w as ee}from"./index.5cade3c6.js";import{R as te}from"./Rotate.94e3c4ca.js";import{s as D}from"./index.c9801e8d.js";function se(i){let t,l;const a=i[1].default,n=P(a,i,i[0],null);return{c(){t=b("div"),n&&n.c(),this.h()},l(e){t=$(e,"DIV",{class:!0});var s=A(t);n&&n.l(s),s.forEach(_),this.h()},h(){p(t,"class","Accordion-outer svelte-1yzsdut")},m(e,s){q(e,t,s),n&&n.m(t,null),l=!0},p(e,[s]){n&&n.p&&(!l||s&1)&&R(n,a,e,e[0],l?K(a,e[0],s,null):B(e[0]),null)},i(e){l||(v(n,e),l=!0)},o(e){g(n,e),l=!1},d(e){e&&_(t),n&&n.d(e)}}}function le(i,t,l){let{$$slots:a={},$$scope:n}=t;const e=ee(null);return Y("activeAccordionLabel",e),i.$$set=s=>{"$$scope"in s&&l(0,n=s.$$scope)},[n,a]}class fe extends M{constructor(t){super(),N(this,t,le,se,z,{})}}function ae(i){let t,l=i[1].text+"",a,n;return{c(){t=b("span"),a=T(l),this.h()},l(e){t=$(e,"SPAN",{class:!0});var s=A(t);a=U(s,l),s.forEach(_),this.h()},h(){p(t,"class",n=S(`label-icon ${i[1].class}`)+" svelte-p7eqct")},m(e,s){q(e,t,s),h(t,a)},p(e,s){s&2&&l!==(l=e[1].text+"")&&X(a,l),s&2&&n!==(n=S(`label-icon ${e[1].class}`)+" svelte-p7eqct")&&p(t,"class",n)},d(e){e&&_(t)}}}function w(i){let t,l,a;const n=i[6].default,e=P(n,i,i[7],null);return{c(){t=b("div"),e&&e.c(),this.h()},l(s){t=$(s,"DIV",{class:!0});var c=A(t);e&&e.l(c),c.forEach(_),this.h()},h(){p(t,"class","content-container svelte-p7eqct")},m(s,c){q(s,t,c),e&&e.m(t,null),a=!0},p(s,c){e&&e.p&&(!a||c&128)&&R(e,n,s,s[7],a?K(n,s[7],c,null):B(s[7]),null)},i(s){a||(v(e,s),x(()=>{a&&(l||(l=V(t,D,{},!0)),l.run(1))}),a=!0)},o(s){g(e,s),l||(l=V(t,D,{},!1)),l.run(0),a=!1},d(s){s&&_(t),e&&e.d(s),s&&l&&l.end()}}}function ne(i){let t,l,a,n,e,s,c,f,d,k;a=new te({props:{state:i[2]===i[3],$$slots:{default:[ae]},$$scope:{ctx:i}}});let o=i[2]===i[3]&&w(i);return{c(){t=b("div"),l=b("div"),Z(a.$$.fragment),n=E(),e=b("span"),s=T(i[0]),c=E(),o&&o.c(),this.h()},l(r){t=$(r,"DIV",{class:!0});var u=A(t);l=$(u,"DIV",{class:!0});var m=A(l);j(a.$$.fragment,m),n=y(m),e=$(m,"SPAN",{class:!0});var L=A(e);s=U(L,i[0]),L.forEach(_),m.forEach(_),c=y(u),o&&o.l(u),u.forEach(_),this.h()},h(){p(e,"class","label-text"),p(l,"class","label-container svelte-p7eqct"),p(t,"class","AccordionItem-outer svelte-p7eqct")},m(r,u){q(r,t,u),h(t,l),F(a,l,null),h(l,n),h(l,e),h(e,s),h(t,c),o&&o.m(t,null),f=!0,d||(k=[C(l,"click",i[5]),C(l,"keypress",i[5])],d=!0)},p(r,[u]){const m={};u&4&&(m.state=r[2]===r[3]),u&130&&(m.$$scope={dirty:u,ctx:r}),a.$set(m),(!f||u&1)&&X(s,r[0]),r[2]===r[3]?o?(o.p(r,u),u&4&&v(o,1)):(o=w(r),o.c(),v(o,1),o.m(t,null)):o&&(G(),g(o,1,1,()=>{o=null}),H())},i(r){f||(v(a.$$.fragment,r),v(o),f=!0)},o(r){g(a.$$.fragment,r),g(o),f=!1},d(r){r&&_(t),J(a),o&&o.d(),d=!1,O(k)}}}function oe(i,t,l){let a,{$$slots:n={},$$scope:e}=t,{label:s}=t,{icon:c={class:"material-symbols-outlined",text:"chevron_right"}}=t;const f=s+Math.round(Math.random()*1e5).toString();let d=Q("activeAccordionLabel");W(i,d,o=>l(2,a=o)),a===null&&I(d,a=f,a);function k(){a===f?I(d,a=null,a):I(d,a=f,a)}return i.$$set=o=>{"label"in o&&l(0,s=o.label),"icon"in o&&l(1,c=o.icon),"$$scope"in o&&l(7,e=o.$$scope)},[s,c,a,f,d,k,n,e]}class _e extends M{constructor(t){super(),N(this,t,oe,ne,z,{label:0,icon:1})}}export{fe as A,_e as a};