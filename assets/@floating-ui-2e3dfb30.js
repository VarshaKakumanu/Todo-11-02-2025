import{r as C}from"./react-617a1c9d.js";import{r as Nt}from"./react-dom-8ac73497.js";const Vt=["top","right","bottom","left"],V=Math.min,k=Math.max,rt=Math.round,ot=Math.floor,X=t=>({x:t,y:t}),zt={left:"right",right:"left",bottom:"top",top:"bottom"},_t={start:"end",end:"start"};function dt(t,e,n){return k(t,V(e,n))}function j(t,e){return typeof t=="function"?t(e):t}function I(t){return t.split("-")[0]}function Q(t){return t.split("-")[1]}function ht(t){return t==="x"?"y":"x"}function gt(t){return t==="y"?"height":"width"}function q(t){return["top","bottom"].includes(I(t))?"y":"x"}function pt(t){return ht(q(t))}function jt(t,e,n){n===void 0&&(n=!1);const o=Q(t),i=pt(t),r=gt(i);let s=i==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[r]>e.floating[r]&&(s=st(s)),[s,st(s)]}function It(t){const e=st(t);return[mt(t),e,mt(e)]}function mt(t){return t.replace(/start|end/g,e=>_t[e])}function Yt(t,e,n){const o=["left","right"],i=["right","left"],r=["top","bottom"],s=["bottom","top"];switch(t){case"top":case"bottom":return n?e?i:o:e?o:i;case"left":case"right":return e?r:s;default:return[]}}function Xt(t,e,n,o){const i=Q(t);let r=Yt(I(t),n==="start",o);return i&&(r=r.map(s=>s+"-"+i),e&&(r=r.concat(r.map(mt)))),r}function st(t){return t.replace(/left|right|bottom|top/g,e=>zt[e])}function qt(t){return{top:0,right:0,bottom:0,left:0,...t}}function Pt(t){return typeof t!="number"?qt(t):{top:t,right:t,bottom:t,left:t}}function ct(t){const{x:e,y:n,width:o,height:i}=t;return{width:o,height:i,top:n,left:e,right:e+o,bottom:n+i,x:e,y:n}}function vt(t,e,n){let{reference:o,floating:i}=t;const r=q(e),s=pt(e),l=gt(s),c=I(e),f=r==="y",d=o.x+o.width/2-i.width/2,u=o.y+o.height/2-i.height/2,m=o[l]/2-i[l]/2;let a;switch(c){case"top":a={x:d,y:o.y-i.height};break;case"bottom":a={x:d,y:o.y+o.height};break;case"right":a={x:o.x+o.width,y:u};break;case"left":a={x:o.x-i.width,y:u};break;default:a={x:o.x,y:o.y}}switch(Q(e)){case"start":a[s]-=m*(n&&f?-1:1);break;case"end":a[s]+=m*(n&&f?-1:1);break}return a}const Ut=async(t,e,n)=>{const{placement:o="bottom",strategy:i="absolute",middleware:r=[],platform:s}=n,l=r.filter(Boolean),c=await(s.isRTL==null?void 0:s.isRTL(e));let f=await s.getElementRects({reference:t,floating:e,strategy:i}),{x:d,y:u}=vt(f,o,c),m=o,a={},h=0;for(let g=0;g<l.length;g++){const{name:w,fn:p}=l[g],{x:y,y:b,data:v,reset:x}=await p({x:d,y:u,initialPlacement:o,placement:m,strategy:i,middlewareData:a,rects:f,platform:s,elements:{reference:t,floating:e}});d=y??d,u=b??u,a={...a,[w]:{...a[w],...v}},x&&h<=50&&(h++,typeof x=="object"&&(x.placement&&(m=x.placement),x.rects&&(f=x.rects===!0?await s.getElementRects({reference:t,floating:e,strategy:i}):x.rects),{x:d,y:u}=vt(f,m,c)),g=-1)}return{x:d,y:u,placement:m,strategy:i,middlewareData:a}};async function tt(t,e){var n;e===void 0&&(e={});const{x:o,y:i,platform:r,rects:s,elements:l,strategy:c}=t,{boundary:f="clippingAncestors",rootBoundary:d="viewport",elementContext:u="floating",altBoundary:m=!1,padding:a=0}=j(e,t),h=Pt(a),w=l[m?u==="floating"?"reference":"floating":u],p=ct(await r.getClippingRect({element:(n=await(r.isElement==null?void 0:r.isElement(w)))==null||n?w:w.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(l.floating)),boundary:f,rootBoundary:d,strategy:c})),y=u==="floating"?{x:o,y:i,width:s.floating.width,height:s.floating.height}:s.reference,b=await(r.getOffsetParent==null?void 0:r.getOffsetParent(l.floating)),v=await(r.isElement==null?void 0:r.isElement(b))?await(r.getScale==null?void 0:r.getScale(b))||{x:1,y:1}:{x:1,y:1},x=ct(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:y,offsetParent:b,strategy:c}):y);return{top:(p.top-x.top+h.top)/v.y,bottom:(x.bottom-p.bottom+h.bottom)/v.y,left:(p.left-x.left+h.left)/v.x,right:(x.right-p.right+h.right)/v.x}}const Kt=t=>({name:"arrow",options:t,async fn(e){const{x:n,y:o,placement:i,rects:r,platform:s,elements:l,middlewareData:c}=e,{element:f,padding:d=0}=j(t,e)||{};if(f==null)return{};const u=Pt(d),m={x:n,y:o},a=pt(i),h=gt(a),g=await s.getDimensions(f),w=a==="y",p=w?"top":"left",y=w?"bottom":"right",b=w?"clientHeight":"clientWidth",v=r.reference[h]+r.reference[a]-m[a]-r.floating[h],x=m[a]-r.reference[a],R=await(s.getOffsetParent==null?void 0:s.getOffsetParent(f));let E=R?R[b]:0;(!E||!await(s.isElement==null?void 0:s.isElement(R)))&&(E=l.floating[b]||r.floating[h]);const T=v/2-x/2,$=E/2-g[h]/2-1,S=V(u[p],$),W=V(u[y],$),D=S,_=E-g[h]-W,O=E/2-g[h]/2+T,P=dt(D,O,_),B=!c.arrow&&Q(i)!=null&&O!==P&&r.reference[h]/2-(O<D?S:W)-g[h]/2<0,A=B?O<D?O-D:O-_:0;return{[a]:m[a]+A,data:{[a]:P,centerOffset:O-P-A,...B&&{alignmentOffset:A}},reset:B}}}),Gt=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n,o;const{placement:i,middlewareData:r,rects:s,initialPlacement:l,platform:c,elements:f}=e,{mainAxis:d=!0,crossAxis:u=!0,fallbackPlacements:m,fallbackStrategy:a="bestFit",fallbackAxisSideDirection:h="none",flipAlignment:g=!0,...w}=j(t,e);if((n=r.arrow)!=null&&n.alignmentOffset)return{};const p=I(i),y=q(l),b=I(l)===l,v=await(c.isRTL==null?void 0:c.isRTL(f.floating)),x=m||(b||!g?[st(l)]:It(l)),R=h!=="none";!m&&R&&x.push(...Xt(l,g,h,v));const E=[l,...x],T=await tt(e,w),$=[];let S=((o=r.flip)==null?void 0:o.overflows)||[];if(d&&$.push(T[p]),u){const O=jt(i,s,v);$.push(T[O[0]],T[O[1]])}if(S=[...S,{placement:i,overflows:$}],!$.every(O=>O<=0)){var W,D;const O=(((W=r.flip)==null?void 0:W.index)||0)+1,P=E[O];if(P)return{data:{index:O,overflows:S},reset:{placement:P}};let B=(D=S.filter(A=>A.overflows[0]<=0).sort((A,M)=>A.overflows[1]-M.overflows[1])[0])==null?void 0:D.placement;if(!B)switch(a){case"bestFit":{var _;const A=(_=S.filter(M=>{if(R){const L=q(M.placement);return L===y||L==="y"}return!0}).map(M=>[M.placement,M.overflows.filter(L=>L>0).reduce((L,Ht)=>L+Ht,0)]).sort((M,L)=>M[1]-L[1])[0])==null?void 0:_[0];A&&(B=A);break}case"initialPlacement":B=l;break}if(i!==B)return{reset:{placement:B}}}return{}}}};function bt(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function At(t){return Vt.some(e=>t[e]>=0)}const Jt=function(t){return t===void 0&&(t={}),{name:"hide",options:t,async fn(e){const{rects:n}=e,{strategy:o="referenceHidden",...i}=j(t,e);switch(o){case"referenceHidden":{const r=await tt(e,{...i,elementContext:"reference"}),s=bt(r,n.reference);return{data:{referenceHiddenOffsets:s,referenceHidden:At(s)}}}case"escaped":{const r=await tt(e,{...i,altBoundary:!0}),s=bt(r,n.floating);return{data:{escapedOffsets:s,escaped:At(s)}}}default:return{}}}}};async function Qt(t,e){const{placement:n,platform:o,elements:i}=t,r=await(o.isRTL==null?void 0:o.isRTL(i.floating)),s=I(n),l=Q(n),c=q(n)==="y",f=["left","top"].includes(s)?-1:1,d=r&&c?-1:1,u=j(e,t);let{mainAxis:m,crossAxis:a,alignmentAxis:h}=typeof u=="number"?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...u};return l&&typeof h=="number"&&(a=l==="end"?h*-1:h),c?{x:a*d,y:m*f}:{x:m*f,y:a*d}}const Zt=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var n,o;const{x:i,y:r,placement:s,middlewareData:l}=e,c=await Qt(e,t);return s===((n=l.offset)==null?void 0:n.placement)&&(o=l.arrow)!=null&&o.alignmentOffset?{}:{x:i+c.x,y:r+c.y,data:{...c,placement:s}}}}},te=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:o,placement:i}=e,{mainAxis:r=!0,crossAxis:s=!1,limiter:l={fn:w=>{let{x:p,y}=w;return{x:p,y}}},...c}=j(t,e),f={x:n,y:o},d=await tt(e,c),u=q(I(i)),m=ht(u);let a=f[m],h=f[u];if(r){const w=m==="y"?"top":"left",p=m==="y"?"bottom":"right",y=a+d[w],b=a-d[p];a=dt(y,a,b)}if(s){const w=u==="y"?"top":"left",p=u==="y"?"bottom":"right",y=h+d[w],b=h-d[p];h=dt(y,h,b)}const g=l.fn({...e,[m]:a,[u]:h});return{...g,data:{x:g.x-n,y:g.y-o}}}}},ee=function(t){return t===void 0&&(t={}),{options:t,fn(e){const{x:n,y:o,placement:i,rects:r,middlewareData:s}=e,{offset:l=0,mainAxis:c=!0,crossAxis:f=!0}=j(t,e),d={x:n,y:o},u=q(i),m=ht(u);let a=d[m],h=d[u];const g=j(l,e),w=typeof g=="number"?{mainAxis:g,crossAxis:0}:{mainAxis:0,crossAxis:0,...g};if(c){const b=m==="y"?"height":"width",v=r.reference[m]-r.floating[b]+w.mainAxis,x=r.reference[m]+r.reference[b]-w.mainAxis;a<v?a=v:a>x&&(a=x)}if(f){var p,y;const b=m==="y"?"width":"height",v=["top","left"].includes(I(i)),x=r.reference[u]-r.floating[b]+(v&&((p=s.offset)==null?void 0:p[u])||0)+(v?0:w.crossAxis),R=r.reference[u]+r.reference[b]+(v?0:((y=s.offset)==null?void 0:y[u])||0)-(v?w.crossAxis:0);h<x?h=x:h>R&&(h=R)}return{[m]:a,[u]:h}}}},ne=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){const{placement:n,rects:o,platform:i,elements:r}=e,{apply:s=()=>{},...l}=j(t,e),c=await tt(e,l),f=I(n),d=Q(n),u=q(n)==="y",{width:m,height:a}=o.floating;let h,g;f==="top"||f==="bottom"?(h=f,g=d===(await(i.isRTL==null?void 0:i.isRTL(r.floating))?"start":"end")?"left":"right"):(g=f,h=d==="end"?"top":"bottom");const w=a-c.top-c.bottom,p=m-c.left-c.right,y=V(a-c[h],w),b=V(m-c[g],p),v=!e.middlewareData.shift;let x=y,R=b;if(u?R=d||v?V(b,p):p:x=d||v?V(y,w):w,v&&!d){const T=k(c.left,0),$=k(c.right,0),S=k(c.top,0),W=k(c.bottom,0);u?R=m-2*(T!==0||$!==0?T+$:k(c.left,c.right)):x=a-2*(S!==0||W!==0?S+W:k(c.top,c.bottom))}await s({...e,availableWidth:R,availableHeight:x});const E=await i.getDimensions(r.floating);return m!==E.width||a!==E.height?{reset:{rects:!0}}:{}}}};function Z(t){return Tt(t)?(t.nodeName||"").toLowerCase():"#document"}function F(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function Y(t){var e;return(e=(Tt(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Tt(t){return t instanceof Node||t instanceof F(t).Node}function H(t){return t instanceof Element||t instanceof F(t).Element}function z(t){return t instanceof HTMLElement||t instanceof F(t).HTMLElement}function Rt(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof F(t).ShadowRoot}function nt(t){const{overflow:e,overflowX:n,overflowY:o,display:i}=N(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(i)}function oe(t){return["table","td","th"].includes(Z(t))}function ft(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function wt(t){const e=xt(),n=H(t)?N(t):t;return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(o=>(n.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(n.contain||"").includes(o))}function ie(t){let e=U(t);for(;z(e)&&!J(e);){if(wt(e))return e;if(ft(e))return null;e=U(e)}return null}function xt(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function J(t){return["html","body","#document"].includes(Z(t))}function N(t){return F(t).getComputedStyle(t)}function at(t){return H(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function U(t){if(Z(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Rt(t)&&t.host||Y(t);return Rt(e)?e.host:e}function Dt(t){const e=U(t);return J(e)?t.ownerDocument?t.ownerDocument.body:t.body:z(e)&&nt(e)?e:Dt(e)}function et(t,e,n){var o;e===void 0&&(e=[]),n===void 0&&(n=!0);const i=Dt(t),r=i===((o=t.ownerDocument)==null?void 0:o.body),s=F(i);return r?e.concat(s,s.visualViewport||[],nt(i)?i:[],s.frameElement&&n?et(s.frameElement):[]):e.concat(i,et(i,[],n))}function Mt(t){const e=N(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const i=z(t),r=i?t.offsetWidth:n,s=i?t.offsetHeight:o,l=rt(n)!==r||rt(o)!==s;return l&&(n=r,o=s),{width:n,height:o,$:l}}function yt(t){return H(t)?t:t.contextElement}function G(t){const e=yt(t);if(!z(e))return X(1);const n=e.getBoundingClientRect(),{width:o,height:i,$:r}=Mt(e);let s=(r?rt(n.width):n.width)/o,l=(r?rt(n.height):n.height)/i;return(!s||!Number.isFinite(s))&&(s=1),(!l||!Number.isFinite(l))&&(l=1),{x:s,y:l}}const re=X(0);function kt(t){const e=F(t);return!xt()||!e.visualViewport?re:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function se(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==F(t)?!1:e}function K(t,e,n,o){e===void 0&&(e=!1),n===void 0&&(n=!1);const i=t.getBoundingClientRect(),r=yt(t);let s=X(1);e&&(o?H(o)&&(s=G(o)):s=G(t));const l=se(r,n,o)?kt(r):X(0);let c=(i.left+l.x)/s.x,f=(i.top+l.y)/s.y,d=i.width/s.x,u=i.height/s.y;if(r){const m=F(r),a=o&&H(o)?F(o):o;let h=m,g=h.frameElement;for(;g&&o&&a!==h;){const w=G(g),p=g.getBoundingClientRect(),y=N(g),b=p.left+(g.clientLeft+parseFloat(y.paddingLeft))*w.x,v=p.top+(g.clientTop+parseFloat(y.paddingTop))*w.y;c*=w.x,f*=w.y,d*=w.x,u*=w.y,c+=b,f+=v,h=F(g),g=h.frameElement}}return ct({width:d,height:u,x:c,y:f})}function ce(t){let{elements:e,rect:n,offsetParent:o,strategy:i}=t;const r=i==="fixed",s=Y(o),l=e?ft(e.floating):!1;if(o===s||l&&r)return n;let c={scrollLeft:0,scrollTop:0},f=X(1);const d=X(0),u=z(o);if((u||!u&&!r)&&((Z(o)!=="body"||nt(s))&&(c=at(o)),z(o))){const m=K(o);f=G(o),d.x=m.x+o.clientLeft,d.y=m.y+o.clientTop}return{width:n.width*f.x,height:n.height*f.y,x:n.x*f.x-c.scrollLeft*f.x+d.x,y:n.y*f.y-c.scrollTop*f.y+d.y}}function le(t){return Array.from(t.getClientRects())}function Ft(t){return K(Y(t)).left+at(t).scrollLeft}function fe(t){const e=Y(t),n=at(t),o=t.ownerDocument.body,i=k(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),r=k(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let s=-n.scrollLeft+Ft(t);const l=-n.scrollTop;return N(o).direction==="rtl"&&(s+=k(e.clientWidth,o.clientWidth)-i),{width:i,height:r,x:s,y:l}}function ae(t,e){const n=F(t),o=Y(t),i=n.visualViewport;let r=o.clientWidth,s=o.clientHeight,l=0,c=0;if(i){r=i.width,s=i.height;const f=xt();(!f||f&&e==="fixed")&&(l=i.offsetLeft,c=i.offsetTop)}return{width:r,height:s,x:l,y:c}}function ue(t,e){const n=K(t,!0,e==="fixed"),o=n.top+t.clientTop,i=n.left+t.clientLeft,r=z(t)?G(t):X(1),s=t.clientWidth*r.x,l=t.clientHeight*r.y,c=i*r.x,f=o*r.y;return{width:s,height:l,x:c,y:f}}function Ot(t,e,n){let o;if(e==="viewport")o=ae(t,n);else if(e==="document")o=fe(Y(t));else if(H(e))o=ue(e,n);else{const i=kt(t);o={...e,x:e.x-i.x,y:e.y-i.y}}return ct(o)}function $t(t,e){const n=U(t);return n===e||!H(n)||J(n)?!1:N(n).position==="fixed"||$t(n,e)}function de(t,e){const n=e.get(t);if(n)return n;let o=et(t,[],!1).filter(l=>H(l)&&Z(l)!=="body"),i=null;const r=N(t).position==="fixed";let s=r?U(t):t;for(;H(s)&&!J(s);){const l=N(s),c=wt(s);!c&&l.position==="fixed"&&(i=null),(r?!c&&!i:!c&&l.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||nt(s)&&!c&&$t(t,s))?o=o.filter(d=>d!==s):i=l,s=U(s)}return e.set(t,o),o}function me(t){let{element:e,boundary:n,rootBoundary:o,strategy:i}=t;const s=[...n==="clippingAncestors"?ft(e)?[]:de(e,this._c):[].concat(n),o],l=s[0],c=s.reduce((f,d)=>{const u=Ot(e,d,i);return f.top=k(u.top,f.top),f.right=V(u.right,f.right),f.bottom=V(u.bottom,f.bottom),f.left=k(u.left,f.left),f},Ot(e,l,i));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function he(t){const{width:e,height:n}=Mt(t);return{width:e,height:n}}function ge(t,e,n){const o=z(e),i=Y(e),r=n==="fixed",s=K(t,!0,r,e);let l={scrollLeft:0,scrollTop:0};const c=X(0);if(o||!o&&!r)if((Z(e)!=="body"||nt(i))&&(l=at(e)),o){const u=K(e,!0,r,e);c.x=u.x+e.clientLeft,c.y=u.y+e.clientTop}else i&&(c.x=Ft(i));const f=s.left+l.scrollLeft-c.x,d=s.top+l.scrollTop-c.y;return{x:f,y:d,width:s.width,height:s.height}}function ut(t){return N(t).position==="static"}function Ct(t,e){return!z(t)||N(t).position==="fixed"?null:e?e(t):t.offsetParent}function Wt(t,e){const n=F(t);if(ft(t))return n;if(!z(t)){let i=U(t);for(;i&&!J(i);){if(H(i)&&!ut(i))return i;i=U(i)}return n}let o=Ct(t,e);for(;o&&oe(o)&&ut(o);)o=Ct(o,e);return o&&J(o)&&ut(o)&&!wt(o)?n:o||ie(t)||n}const pe=async function(t){const e=this.getOffsetParent||Wt,n=this.getDimensions,o=await n(t.floating);return{reference:ge(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function we(t){return N(t).direction==="rtl"}const xe={convertOffsetParentRelativeRectToViewportRelativeRect:ce,getDocumentElement:Y,getClippingRect:me,getOffsetParent:Wt,getElementRects:pe,getClientRects:le,getDimensions:he,getScale:G,isElement:H,isRTL:we};function ye(t,e){let n=null,o;const i=Y(t);function r(){var l;clearTimeout(o),(l=n)==null||l.disconnect(),n=null}function s(l,c){l===void 0&&(l=!1),c===void 0&&(c=1),r();const{left:f,top:d,width:u,height:m}=t.getBoundingClientRect();if(l||e(),!u||!m)return;const a=ot(d),h=ot(i.clientWidth-(f+u)),g=ot(i.clientHeight-(d+m)),w=ot(f),y={rootMargin:-a+"px "+-h+"px "+-g+"px "+-w+"px",threshold:k(0,V(1,c))||1};let b=!0;function v(x){const R=x[0].intersectionRatio;if(R!==c){if(!b)return s();R?s(!1,R):o=setTimeout(()=>{s(!1,1e-7)},1e3)}b=!1}try{n=new IntersectionObserver(v,{...y,root:i.ownerDocument})}catch{n=new IntersectionObserver(v,y)}n.observe(t)}return s(!0),r}function Te(t,e,n,o){o===void 0&&(o={});const{ancestorScroll:i=!0,ancestorResize:r=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:c=!1}=o,f=yt(t),d=i||r?[...f?et(f):[],...et(e)]:[];d.forEach(p=>{i&&p.addEventListener("scroll",n,{passive:!0}),r&&p.addEventListener("resize",n)});const u=f&&l?ye(f,n):null;let m=-1,a=null;s&&(a=new ResizeObserver(p=>{let[y]=p;y&&y.target===f&&a&&(a.unobserve(e),cancelAnimationFrame(m),m=requestAnimationFrame(()=>{var b;(b=a)==null||b.observe(e)})),n()}),f&&!c&&a.observe(f),a.observe(e));let h,g=c?K(t):null;c&&w();function w(){const p=K(t);g&&(p.x!==g.x||p.y!==g.y||p.width!==g.width||p.height!==g.height)&&n(),g=p,h=requestAnimationFrame(w)}return n(),()=>{var p;d.forEach(y=>{i&&y.removeEventListener("scroll",n),r&&y.removeEventListener("resize",n)}),u==null||u(),(p=a)==null||p.disconnect(),a=null,c&&cancelAnimationFrame(h)}}const ve=Zt,be=te,Ae=Gt,Re=ne,Oe=Jt,Et=Kt,Ce=ee,Ee=(t,e,n)=>{const o=new Map,i={platform:xe,...n},r={...i.platform,_c:o};return Ut(t,e,{...i,platform:r})};var it=typeof document<"u"?C.useLayoutEffect:C.useEffect;function lt(t,e){if(t===e)return!0;if(typeof t!=typeof e)return!1;if(typeof t=="function"&&t.toString()===e.toString())return!0;let n,o,i;if(t&&e&&typeof t=="object"){if(Array.isArray(t)){if(n=t.length,n!==e.length)return!1;for(o=n;o--!==0;)if(!lt(t[o],e[o]))return!1;return!0}if(i=Object.keys(t),n=i.length,n!==Object.keys(e).length)return!1;for(o=n;o--!==0;)if(!{}.hasOwnProperty.call(e,i[o]))return!1;for(o=n;o--!==0;){const r=i[o];if(!(r==="_owner"&&t.$$typeof)&&!lt(t[r],e[r]))return!1}return!0}return t!==t&&e!==e}function Bt(t){return typeof window>"u"?1:(t.ownerDocument.defaultView||window).devicePixelRatio||1}function St(t,e){const n=Bt(t);return Math.round(e*n)/n}function Lt(t){const e=C.useRef(t);return it(()=>{e.current=t}),e}function De(t){t===void 0&&(t={});const{placement:e="bottom",strategy:n="absolute",middleware:o=[],platform:i,elements:{reference:r,floating:s}={},transform:l=!0,whileElementsMounted:c,open:f}=t,[d,u]=C.useState({x:0,y:0,strategy:n,placement:e,middlewareData:{},isPositioned:!1}),[m,a]=C.useState(o);lt(m,o)||a(o);const[h,g]=C.useState(null),[w,p]=C.useState(null),y=C.useCallback(A=>{A!==R.current&&(R.current=A,g(A))},[]),b=C.useCallback(A=>{A!==E.current&&(E.current=A,p(A))},[]),v=r||h,x=s||w,R=C.useRef(null),E=C.useRef(null),T=C.useRef(d),$=c!=null,S=Lt(c),W=Lt(i),D=C.useCallback(()=>{if(!R.current||!E.current)return;const A={placement:e,strategy:n,middleware:m};W.current&&(A.platform=W.current),Ee(R.current,E.current,A).then(M=>{const L={...M,isPositioned:!0};_.current&&!lt(T.current,L)&&(T.current=L,Nt.flushSync(()=>{u(L)}))})},[m,e,n,W]);it(()=>{f===!1&&T.current.isPositioned&&(T.current.isPositioned=!1,u(A=>({...A,isPositioned:!1})))},[f]);const _=C.useRef(!1);it(()=>(_.current=!0,()=>{_.current=!1}),[]),it(()=>{if(v&&(R.current=v),x&&(E.current=x),v&&x){if(S.current)return S.current(v,x,D);D()}},[v,x,D,S,$]);const O=C.useMemo(()=>({reference:R,floating:E,setReference:y,setFloating:b}),[y,b]),P=C.useMemo(()=>({reference:v,floating:x}),[v,x]),B=C.useMemo(()=>{const A={position:n,left:0,top:0};if(!P.floating)return A;const M=St(P.floating,d.x),L=St(P.floating,d.y);return l?{...A,transform:"translate("+M+"px, "+L+"px)",...Bt(P.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:M,top:L}},[n,l,P.floating,d.x,d.y]);return C.useMemo(()=>({...d,update:D,refs:O,elements:P,floatingStyles:B}),[d,D,O,P,B])}const Se=t=>{function e(n){return{}.hasOwnProperty.call(n,"current")}return{name:"arrow",options:t,fn(n){const{element:o,padding:i}=typeof t=="function"?t(n):t;return o&&e(o)?o.current!=null?Et({element:o.current,padding:i}).fn(n):{}:o?Et({element:o,padding:i}).fn(n):{}}}},Me=(t,e)=>({...ve(t),options:[t,e]}),ke=(t,e)=>({...be(t),options:[t,e]}),Fe=(t,e)=>({...Ce(t),options:[t,e]}),$e=(t,e)=>({...Ae(t),options:[t,e]}),We=(t,e)=>({...Re(t),options:[t,e]}),Be=(t,e)=>({...Oe(t),options:[t,e]}),He=(t,e)=>({...Se(t),options:[t,e]});export{Te as a,We as b,He as c,$e as f,Be as h,Fe as l,Me as o,ke as s,De as u};
