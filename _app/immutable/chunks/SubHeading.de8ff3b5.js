import{S as R,i as F,s as w,x as L,k as g,a as j,y as T,l as E,m as C,c as D,z as G,h,n as z,p as v,b as B,E as b,A as H,v as K,d as k,B as q,f as M,g as U,R as J,J as N,q as O,r as P,D as I,u as Q}from"./index.a21862cb.js";import{I as A}from"./Image.6f5a8c40.js";function S(a){let e;return{c(){e=g(a[5]?"div":null),this.h()},l(s){e=E(s,((a[5]?"div":null)||"null").toUpperCase(),{class:!0}),C(e).forEach(h),this.h()},h(){J(a[5]?"div":null)(e,{class:"hrule svelte-lo7z3"})},m(s,m){B(s,e,m)},p:N,d(s){s&&h(e)}}}function W(a){let e,s,m,u,d,o,t;return{c(){e=g(a[6]?"div":null),s=g("div"),m=j(),u=g("div"),d=O(a[6]),o=j(),t=g("div"),this.h()},l(f){e=E(f,((a[6]?"div":null)||"null").toUpperCase(),{class:!0});var i=C(e);s=E(i,"DIV",{class:!0}),C(s).forEach(h),m=D(i),u=E(i,"DIV",{class:!0});var r=C(u);d=P(r,a[6]),r.forEach(h),o=D(i),t=E(i,"DIV",{class:!0}),C(t).forEach(h),i.forEach(h),this.h()},h(){z(s,"class","start-border svelte-lo7z3"),z(u,"class","label-actual svelte-lo7z3"),v(u,"padding",a[7]?"0.5rem":"0.2rem"),z(t,"class","end-border svelte-lo7z3"),J(a[6]?"div":null)(e,{class:"label svelte-lo7z3"}),I(e,"label-tab",a[0]),I(e,"label-box",a[7]),v(e,"justify-self",a[10]),v(e,"margin-inline-start",a[10]==="start"?"1rem":"revert"),v(e,"margin-inline-end",a[10]==="end"?"1rem":"revert")},m(f,i){B(f,e,i),b(e,s),b(e,m),b(e,u),b(u,d),b(e,o),b(e,t)},p(f,i){i&64&&Q(d,f[6]),i&128&&v(u,"padding",f[7]?"0.5rem":"0.2rem"),i&1&&I(e,"label-tab",f[0]),i&128&&I(e,"label-box",f[7]),i&1024&&v(e,"justify-self",f[10]),i&1024&&v(e,"margin-inline-start",f[10]==="start"?"1rem":"revert"),i&1024&&v(e,"margin-inline-end",f[10]==="end"?"1rem":"revert")},d(f){f&&h(e)}}}function X(a){let e,s=a[5]?"div":null,m,u=a[6]?"div":null,d,o,t,f,i=(a[5]?"div":null)&&S(a),r=(a[6]?"div":null)&&W(a);var _=a[2]||a[1]?A:null;function y(l){return{props:{src:l[2],srcset:l[3],alt:l[4],imageEntry:l[1]}}}return _&&(t=L(_,y(a))),{c(){e=g("div"),i&&i.c(),m=j(),r&&r.c(),d=j(),o=g("div"),t&&T(t.$$.fragment),this.h()},l(l){e=E(l,"DIV",{class:!0});var n=C(e);i&&i.l(n),m=D(n),r&&r.l(n),d=D(n),o=E(n,"DIV",{class:!0});var c=C(o);t&&G(t.$$.fragment,c),c.forEach(h),n.forEach(h),this.h()},h(){z(o,"class","image-wrapper svelte-lo7z3"),z(e,"class","SubHeading-outer svelte-lo7z3"),v(e,"--lineWidth",a[8]),v(e,"--lineColor",a[9])},m(l,n){B(l,e,n),i&&i.m(e,null),b(e,m),r&&r.m(e,null),b(e,d),b(e,o),t&&H(t,o,null),f=!0},p(l,[n]){l[5]||null?s?w(s,l[5]?"div":null)?(i.d(1),i=S(l),s=l[5]?"div":null,i.c(),i.m(e,m)):i.p(l,n):(i=S(l),s=l[5]?"div":null,i.c(),i.m(e,m)):s&&(i.d(1),i=null,s=l[5]?"div":null),l[6]||null?u?w(u,l[6]?"div":null)?(r.d(1),r=W(l),u=l[6]?"div":null,r.c(),r.m(e,d)):r.p(l,n):(r=W(l),u=l[6]?"div":null,r.c(),r.m(e,d)):u&&(r.d(1),r=null,u=l[6]?"div":null);const c={};if(n&4&&(c.src=l[2]),n&8&&(c.srcset=l[3]),n&16&&(c.alt=l[4]),n&2&&(c.imageEntry=l[1]),n&6&&_!==(_=l[2]||l[1]?A:null)){if(t){K();const V=t;k(V.$$.fragment,1,0,()=>{q(V,1)}),M()}_?(t=L(_,y(l)),T(t.$$.fragment),U(t.$$.fragment,1),H(t,o,null)):t=null}else _&&t.$set(c);n&256&&v(e,"--lineWidth",l[8]),n&512&&v(e,"--lineColor",l[9])},i(l){f||(t&&U(t.$$.fragment,l),f=!0)},o(l){t&&k(t.$$.fragment,l),f=!1},d(l){l&&h(e),i&&i.d(l),r&&r.d(l),t&&q(t)}}}function Y(a,e,s){let{imageEntry:m=null}=e,{src:u=null}=e,{srcset:d=null}=e,{alt:o=null}=e,{hrule:t=!1}=e,{label:f=null}=e,{labelTab:i=!0}=e,{labelBox:r=!1}=e,{lineWidth:_="2px"}=e,{lineColor:y="#0004"}=e,{justifyLabel:l="center"}=e;return r===!0&&(i=!1),a.$$set=n=>{"imageEntry"in n&&s(1,m=n.imageEntry),"src"in n&&s(2,u=n.src),"srcset"in n&&s(3,d=n.srcset),"alt"in n&&s(4,o=n.alt),"hrule"in n&&s(5,t=n.hrule),"label"in n&&s(6,f=n.label),"labelTab"in n&&s(0,i=n.labelTab),"labelBox"in n&&s(7,r=n.labelBox),"lineWidth"in n&&s(8,_=n.lineWidth),"lineColor"in n&&s(9,y=n.lineColor),"justifyLabel"in n&&s(10,l=n.justifyLabel)},[i,m,u,d,o,t,f,r,_,y,l]}class x extends R{constructor(e){super(),F(this,e,Y,X,w,{imageEntry:1,src:2,srcset:3,alt:4,hrule:5,label:6,labelTab:0,labelBox:7,lineWidth:8,lineColor:9,justifyLabel:10})}}export{x as S};
