import{D as Kt,r as p,E as Xt,F as Zt,H as Jt,n as D,_ as w,A as Qt,j as g,s as oe,p as $,L as en,I as gt,z as tn,J as nn,Q as on,c as vt,K as rn,N as Ne}from"./index-3d6879f2.js";import{e as ie,a as bt,h as an,_ as un,b as sn,c as ln,d as cn,g as dn}from"./defineProperty-179e1ab7.js";import"./hoist-non-react-statics.cjs-49d8c031.js";var S=function(t,i){var o=arguments;if(i==null||!Kt.call(i,"css"))return p.createElement.apply(void 0,o);var e=o.length,a=new Array(e);a[0]=Xt,a[1]=Zt(t,i);for(var u=2;u<e;u++)a[u]=o[u];return p.createElement.apply(null,a)};function Pe(){for(var n=arguments.length,t=new Array(n),i=0;i<n;i++)t[i]=arguments[i];return Jt(t)}var pn=function(){var t=Pe.apply(void 0,arguments),i="animation-"+t.name;return{name:i,styles:"@keyframes "+i+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}};const fn=D.section`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  padding-top: 40px;

  @media screen and (min-width: 768px) {
    padding-top: 72px;
  }

  @media screen and (min-width: 1440px) {
    background-image: linear-gradient(
        to left,
        transparent -100px,
        rgba(4, 4, 4, 0.5) 150px,
        black 470px
      ),
      url(${n=>n.bgi[0]});

    background-repeat: no-repeat;
    background-position: right;
    background-size: contain;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: linear-gradient(
          to left,
          transparent -100px,
          rgba(4, 4, 4, 0.5) 150px,
          black 470px
        ),
        url(${n=>n.bgi[1]});

      background-size: contain;
    }
  }
`,hn=D.h1`
  color: #efede8;
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.16;
  margin: 0;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 1.37;
    margin-bottom: 32px;
  }

  @media screen and (min-width: 1440px){
    margin-bottom: 0;
  }
`,mn=D.div`
  @media screen and (min-width: 1440px){
    display: flex;
    justify-content: space-between;
    margin-bottom: 26px;
  }
`;function Ue(n,t){var i=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);t&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})),i.push.apply(i,o)}return i}function y(n){for(var t=1;t<arguments.length;t++){var i=arguments[t]!=null?arguments[t]:{};t%2?Ue(Object(i),!0).forEach(function(o){ie(n,o,i[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(i)):Ue(Object(i)).forEach(function(o){Object.defineProperty(n,o,Object.getOwnPropertyDescriptor(i,o))})}return n}function gn(n){if(Array.isArray(n))return n}function vn(n,t){var i=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(i!=null){var o,e,a,u,l=[],r=!0,s=!1;try{if(a=(i=i.call(n)).next,t===0){if(Object(i)!==i)return;r=!1}else for(;!(r=(o=a.call(i)).done)&&(l.push(o.value),l.length!==t);r=!0);}catch(c){s=!0,e=c}finally{try{if(!r&&i.return!=null&&(u=i.return(),Object(u)!==u))return}finally{if(s)throw e}}return l}}function bn(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function K(n,t){return gn(n)||vn(n,t)||bt(n,t)||bn()}function xn(n,t){if(n==null)return{};var i={},o=Object.keys(n),e,a;for(a=0;a<o.length;a++)e=o[a],!(t.indexOf(e)>=0)&&(i[e]=n[e]);return i}function X(n,t){if(n==null)return{};var i=xn(n,t),o,e;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(e=0;e<a.length;e++)o=a[e],!(t.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(n,o)&&(i[o]=n[o])}return i}var En=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function Cn(n){var t=n.defaultInputValue,i=t===void 0?"":t,o=n.defaultMenuIsOpen,e=o===void 0?!1:o,a=n.defaultValue,u=a===void 0?null:a,l=n.inputValue,r=n.menuIsOpen,s=n.onChange,c=n.onInputChange,d=n.onMenuClose,m=n.onMenuOpen,h=n.value,v=X(n,En),b=p.useState(l!==void 0?l:i),f=K(b,2),x=f[0],E=f[1],F=p.useState(r!==void 0?r:e),C=K(F,2),I=C[0],A=C[1],M=p.useState(h!==void 0?h:u),O=K(M,2),V=O[0],T=O[1],j=p.useCallback(function(z,Z){typeof s=="function"&&s(z,Z),T(z)},[s]),B=p.useCallback(function(z,Z){var J;typeof c=="function"&&(J=c(z,Z)),E(J!==void 0?J:z)},[c]),W=p.useCallback(function(){typeof m=="function"&&m(),A(!0)},[m]),G=p.useCallback(function(){typeof d=="function"&&d(),A(!1)},[d]),k=l!==void 0?l:x,R=r!==void 0?r:I,_=h!==void 0?h:V;return y(y({},v),{},{inputValue:k,menuIsOpen:R,onChange:j,onInputChange:B,onMenuClose:G,onMenuOpen:W,value:_})}function Sn(n){if(Array.isArray(n))return an(n)}function yn(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function Fn(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Re(n){return Sn(n)||yn(n)||bt(n)||Fn()}function wn(n,t){return t||(t=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}const On=Math.min,Dn=Math.max,pe=Math.round,ue=Math.floor,fe=n=>({x:n,y:n});function In(n){return{...n,top:n.y,left:n.x,right:n.x+n.width,bottom:n.y+n.height}}function xt(n){return Ct(n)?(n.nodeName||"").toLowerCase():"#document"}function U(n){var t;return(n==null||(t=n.ownerDocument)==null?void 0:t.defaultView)||window}function Et(n){var t;return(t=(Ct(n)?n.ownerDocument:n.document)||window.document)==null?void 0:t.documentElement}function Ct(n){return n instanceof Node||n instanceof U(n).Node}function Ie(n){return n instanceof Element||n instanceof U(n).Element}function Le(n){return n instanceof HTMLElement||n instanceof U(n).HTMLElement}function _e(n){return typeof ShadowRoot>"u"?!1:n instanceof ShadowRoot||n instanceof U(n).ShadowRoot}function St(n){const{overflow:t,overflowX:i,overflowY:o,display:e}=ke(n);return/auto|scroll|overlay|hidden|clip/.test(t+o+i)&&!["inline","contents"].includes(e)}function An(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Mn(n){return["html","body","#document"].includes(xt(n))}function ke(n){return U(n).getComputedStyle(n)}function Vn(n){if(xt(n)==="html")return n;const t=n.assignedSlot||n.parentNode||_e(n)&&n.host||Et(n);return _e(t)?t.host:t}function yt(n){const t=Vn(n);return Mn(t)?n.ownerDocument?n.ownerDocument.body:n.body:Le(t)&&St(t)?t:yt(t)}function he(n,t,i){var o;t===void 0&&(t=[]),i===void 0&&(i=!0);const e=yt(n),a=e===((o=n.ownerDocument)==null?void 0:o.body),u=U(e);return a?t.concat(u,u.visualViewport||[],St(e)?e:[],u.frameElement&&i?he(u.frameElement):[]):t.concat(e,he(e,[],i))}function Pn(n){const t=ke(n);let i=parseFloat(t.width)||0,o=parseFloat(t.height)||0;const e=Le(n),a=e?n.offsetWidth:i,u=e?n.offsetHeight:o,l=pe(i)!==a||pe(o)!==u;return l&&(i=a,o=u),{width:i,height:o,$:l}}function Te(n){return Ie(n)?n:n.contextElement}function xe(n){const t=Te(n);if(!Le(t))return fe(1);const i=t.getBoundingClientRect(),{width:o,height:e,$:a}=Pn(t);let u=(a?pe(i.width):i.width)/o,l=(a?pe(i.height):i.height)/e;return(!u||!Number.isFinite(u))&&(u=1),(!l||!Number.isFinite(l))&&(l=1),{x:u,y:l}}const Rn=fe(0);function Ln(n){const t=U(n);return!An()||!t.visualViewport?Rn:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function kn(n,t,i){return t===void 0&&(t=!1),!i||t&&i!==U(n)?!1:t}function We(n,t,i,o){t===void 0&&(t=!1),i===void 0&&(i=!1);const e=n.getBoundingClientRect(),a=Te(n);let u=fe(1);t&&(o?Ie(o)&&(u=xe(o)):u=xe(n));const l=kn(a,i,o)?Ln(a):fe(0);let r=(e.left+l.x)/u.x,s=(e.top+l.y)/u.y,c=e.width/u.x,d=e.height/u.y;if(a){const m=U(a),h=o&&Ie(o)?U(o):o;let v=m.frameElement;for(;v&&o&&h!==m;){const b=xe(v),f=v.getBoundingClientRect(),x=ke(v),E=f.left+(v.clientLeft+parseFloat(x.paddingLeft))*b.x,F=f.top+(v.clientTop+parseFloat(x.paddingTop))*b.y;r*=b.x,s*=b.y,c*=b.x,d*=b.y,r+=E,s+=F,v=U(v).frameElement}}return In({width:c,height:d,x:r,y:s})}function Tn(n,t){let i=null,o;const e=Et(n);function a(){clearTimeout(o),i&&i.disconnect(),i=null}function u(l,r){l===void 0&&(l=!1),r===void 0&&(r=1),a();const{left:s,top:c,width:d,height:m}=n.getBoundingClientRect();if(l||t(),!d||!m)return;const h=ue(c),v=ue(e.clientWidth-(s+d)),b=ue(e.clientHeight-(c+m)),f=ue(s),E={rootMargin:-h+"px "+-v+"px "+-b+"px "+-f+"px",threshold:Dn(0,On(1,r))||1};let F=!0;function C(I){const A=I[0].intersectionRatio;if(A!==r){if(!F)return u();A?u(!1,A):o=setTimeout(()=>{u(!1,1e-7)},100)}F=!1}try{i=new IntersectionObserver(C,{...E,root:e.ownerDocument})}catch{i=new IntersectionObserver(C,E)}i.observe(n)}return u(!0),a}function Bn(n,t,i,o){o===void 0&&(o={});const{ancestorScroll:e=!0,ancestorResize:a=!0,elementResize:u=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:r=!1}=o,s=Te(n),c=e||a?[...s?he(s):[],...he(t)]:[];c.forEach(x=>{e&&x.addEventListener("scroll",i,{passive:!0}),a&&x.addEventListener("resize",i)});const d=s&&l?Tn(s,i):null;let m=-1,h=null;u&&(h=new ResizeObserver(x=>{let[E]=x;E&&E.target===s&&h&&(h.unobserve(t),cancelAnimationFrame(m),m=requestAnimationFrame(()=>{h&&h.observe(t)})),i()}),s&&!r&&h.observe(s),h.observe(t));let v,b=r?We(n):null;r&&f();function f(){const x=We(n);b&&(x.x!==b.x||x.y!==b.y||x.width!==b.width||x.height!==b.height)&&i(),b=x,v=requestAnimationFrame(f)}return i(),()=>{c.forEach(x=>{e&&x.removeEventListener("scroll",i),a&&x.removeEventListener("resize",i)}),d&&d(),h&&h.disconnect(),h=null,r&&cancelAnimationFrame(v)}}var Ae=p.useLayoutEffect,jn=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],me=function(){};function $n(n,t){return t?t[0]==="-"?n+t:n+"__"+t:n}function Hn(n,t){for(var i=arguments.length,o=new Array(i>2?i-2:0),e=2;e<i;e++)o[e-2]=arguments[e];var a=[].concat(o);if(t&&n)for(var u in t)t.hasOwnProperty(u)&&t[u]&&a.push("".concat($n(n,u)));return a.filter(function(l){return l}).map(function(l){return String(l).trim()}).join(" ")}var Ge=function(t){return Kn(t)?t.filter(Boolean):un(t)==="object"&&t!==null?[t]:[]},Ft=function(t){t.className,t.clearValue,t.cx,t.getStyles,t.getClassNames,t.getValue,t.hasValue,t.isMulti,t.isRtl,t.options,t.selectOption,t.selectProps,t.setValue,t.theme;var i=X(t,jn);return y({},i)},P=function(t,i,o){var e=t.cx,a=t.getStyles,u=t.getClassNames,l=t.className;return{css:a(i,t),className:e(o??{},u(i,t),l)}};function be(n){return[document.documentElement,document.body,window].indexOf(n)>-1}function zn(n){return be(n)?window.innerHeight:n.clientHeight}function wt(n){return be(n)?window.pageYOffset:n.scrollTop}function ge(n,t){if(be(n)){window.scrollTo(0,t);return}n.scrollTop=t}function Nn(n){var t=getComputedStyle(n),i=t.position==="absolute",o=/(auto|scroll)/;if(t.position==="fixed")return document.documentElement;for(var e=n;e=e.parentElement;)if(t=getComputedStyle(e),!(i&&t.position==="static")&&o.test(t.overflow+t.overflowY+t.overflowX))return e;return document.documentElement}function Un(n,t,i,o){return i*((n=n/o-1)*n*n+1)+t}function se(n,t){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:me,e=wt(n),a=t-e,u=10,l=0;function r(){l+=u;var s=Un(l,e,a,i);ge(n,s),l<i?window.requestAnimationFrame(r):o(n)}r()}function Ye(n,t){var i=n.getBoundingClientRect(),o=t.getBoundingClientRect(),e=t.offsetHeight/3;o.bottom+e>i.bottom?ge(n,Math.min(t.offsetTop+t.clientHeight-n.offsetHeight+e,n.scrollHeight)):o.top-e<i.top&&ge(n,Math.max(t.offsetTop-e,0))}function _n(n){var t=n.getBoundingClientRect();return{bottom:t.bottom,height:t.height,left:t.left,right:t.right,top:t.top,width:t.width}}function qe(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function Wn(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var Ot=!1,Gn={get passive(){return Ot=!0}},le=typeof window<"u"?window:{};le.addEventListener&&le.removeEventListener&&(le.addEventListener("p",me,Gn),le.removeEventListener("p",me,!1));var Yn=Ot;function qn(n){return n!=null}function Kn(n){return Array.isArray(n)}function ce(n,t,i){return n?t:i}var Xn=function(t){for(var i=arguments.length,o=new Array(i>1?i-1:0),e=1;e<i;e++)o[e-1]=arguments[e];var a=Object.entries(t).filter(function(u){var l=K(u,1),r=l[0];return!o.includes(r)});return a.reduce(function(u,l){var r=K(l,2),s=r[0],c=r[1];return u[s]=c,u},{})},Zn=["children","innerProps"],Jn=["children","innerProps"];function Qn(n){var t=n.maxHeight,i=n.menuEl,o=n.minHeight,e=n.placement,a=n.shouldScroll,u=n.isFixedPosition,l=n.controlHeight,r=Nn(i),s={placement:"bottom",maxHeight:t};if(!i||!i.offsetParent)return s;var c=r.getBoundingClientRect(),d=c.height,m=i.getBoundingClientRect(),h=m.bottom,v=m.height,b=m.top,f=i.offsetParent.getBoundingClientRect(),x=f.top,E=u?window.innerHeight:zn(r),F=wt(r),C=parseInt(getComputedStyle(i).marginBottom,10),I=parseInt(getComputedStyle(i).marginTop,10),A=x-I,M=E-b,O=A+F,V=d-F-b,T=h-E+F+C,j=F+b-I,B=160;switch(e){case"auto":case"bottom":if(M>=v)return{placement:"bottom",maxHeight:t};if(V>=v&&!u)return a&&se(r,T,B),{placement:"bottom",maxHeight:t};if(!u&&V>=o||u&&M>=o){a&&se(r,T,B);var W=u?M-C:V-C;return{placement:"bottom",maxHeight:W}}if(e==="auto"||u){var G=t,k=u?A:O;return k>=o&&(G=Math.min(k-C-l,t)),{placement:"top",maxHeight:G}}if(e==="bottom")return a&&ge(r,T),{placement:"bottom",maxHeight:t};break;case"top":if(A>=v)return{placement:"top",maxHeight:t};if(O>=v&&!u)return a&&se(r,j,B),{placement:"top",maxHeight:t};if(!u&&O>=o||u&&A>=o){var R=t;return(!u&&O>=o||u&&A>=o)&&(R=u?A-I:O-I),a&&se(r,j,B),{placement:"top",maxHeight:R}}return{placement:"bottom",maxHeight:t};default:throw new Error('Invalid placement provided "'.concat(e,'".'))}return s}function ei(n){var t={bottom:"top",top:"bottom"};return n?t[n]:"bottom"}var Dt=function(t){return t==="auto"?"bottom":t},ti=function(t,i){var o,e=t.placement,a=t.theme,u=a.borderRadius,l=a.spacing,r=a.colors;return y((o={label:"menu"},ie(o,ei(e),"100%"),ie(o,"position","absolute"),ie(o,"width","100%"),ie(o,"zIndex",1),o),i?{}:{backgroundColor:r.neutral0,borderRadius:u,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:l.menuGutter,marginTop:l.menuGutter})},It=p.createContext(null),ni=function(t){var i=t.children,o=t.minMenuHeight,e=t.maxMenuHeight,a=t.menuPlacement,u=t.menuPosition,l=t.menuShouldScrollIntoView,r=t.theme,s=p.useContext(It)||{},c=s.setPortalPlacement,d=p.useRef(null),m=p.useState(e),h=K(m,2),v=h[0],b=h[1],f=p.useState(null),x=K(f,2),E=x[0],F=x[1],C=r.spacing.controlHeight;return Ae(function(){var I=d.current;if(I){var A=u==="fixed",M=l&&!A,O=Qn({maxHeight:e,menuEl:I,minHeight:o,placement:a,shouldScroll:M,isFixedPosition:A,controlHeight:C});b(O.maxHeight),F(O.placement),c==null||c(O.placement)}},[e,a,u,l,o,c,C]),i({ref:d,placerProps:y(y({},t),{},{placement:E||Dt(a),maxHeight:v})})},ii=function(t){var i=t.children,o=t.innerRef,e=t.innerProps;return S("div",w({},P(t,"menu",{menu:!0}),{ref:o},e),i)},oi=ii,ri=function(t,i){var o=t.maxHeight,e=t.theme.spacing.baseUnit;return y({maxHeight:o,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},i?{}:{paddingBottom:e,paddingTop:e})},ai=function(t){var i=t.children,o=t.innerProps,e=t.innerRef,a=t.isMulti;return S("div",w({},P(t,"menuList",{"menu-list":!0,"menu-list--is-multi":a}),{ref:e},o),i)},At=function(t,i){var o=t.theme,e=o.spacing.baseUnit,a=o.colors;return y({textAlign:"center"},i?{}:{color:a.neutral40,padding:"".concat(e*2,"px ").concat(e*3,"px")})},ui=At,si=At,li=function(t){var i=t.children,o=i===void 0?"No options":i,e=t.innerProps,a=X(t,Zn);return S("div",w({},P(y(y({},a),{},{children:o,innerProps:e}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),e),o)},ci=function(t){var i=t.children,o=i===void 0?"Loading...":i,e=t.innerProps,a=X(t,Jn);return S("div",w({},P(y(y({},a),{},{children:o,innerProps:e}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),e),o)},di=function(t){var i=t.rect,o=t.offset,e=t.position;return{left:i.left,position:e,top:o,width:i.width,zIndex:1}},pi=function(t){var i=t.appendTo,o=t.children,e=t.controlElement,a=t.innerProps,u=t.menuPlacement,l=t.menuPosition,r=p.useRef(null),s=p.useRef(null),c=p.useState(Dt(u)),d=K(c,2),m=d[0],h=d[1],v=p.useMemo(function(){return{setPortalPlacement:h}},[]),b=p.useState(null),f=K(b,2),x=f[0],E=f[1],F=p.useCallback(function(){if(e){var M=_n(e),O=l==="fixed"?0:window.pageYOffset,V=M[m]+O;(V!==(x==null?void 0:x.offset)||M.left!==(x==null?void 0:x.rect.left)||M.width!==(x==null?void 0:x.rect.width))&&E({offset:V,rect:M})}},[e,l,m,x==null?void 0:x.offset,x==null?void 0:x.rect.left,x==null?void 0:x.rect.width]);Ae(function(){F()},[F]);var C=p.useCallback(function(){typeof s.current=="function"&&(s.current(),s.current=null),e&&r.current&&(s.current=Bn(e,r.current,F,{elementResize:"ResizeObserver"in window}))},[e,F]);Ae(function(){C()},[C]);var I=p.useCallback(function(M){r.current=M,C()},[C]);if(!i&&l!=="fixed"||!x)return null;var A=S("div",w({ref:I},P(y(y({},t),{},{offset:x.offset,position:l,rect:x.rect}),"menuPortal",{"menu-portal":!0}),a),o);return S(It.Provider,{value:v},i?Qt.createPortal(A,i):A)},fi=function(t){var i=t.isDisabled,o=t.isRtl;return{label:"container",direction:o?"rtl":void 0,pointerEvents:i?"none":void 0,position:"relative"}},hi=function(t){var i=t.children,o=t.innerProps,e=t.isDisabled,a=t.isRtl;return S("div",w({},P(t,"container",{"--is-disabled":e,"--is-rtl":a}),o),i)},mi=function(t,i){var o=t.theme.spacing,e=t.isMulti,a=t.hasValue,u=t.selectProps.controlShouldRenderValue;return y({alignItems:"center",display:e&&a&&u?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},i?{}:{padding:"".concat(o.baseUnit/2,"px ").concat(o.baseUnit*2,"px")})},gi=function(t){var i=t.children,o=t.innerProps,e=t.isMulti,a=t.hasValue;return S("div",w({},P(t,"valueContainer",{"value-container":!0,"value-container--is-multi":e,"value-container--has-value":a}),o),i)},vi=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},bi=function(t){var i=t.children,o=t.innerProps;return S("div",w({},P(t,"indicatorsContainer",{indicators:!0}),o),i)},Ke,xi=["size"],Ei=["innerProps","isRtl","size"],Ci={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},Mt=function(t){var i=t.size,o=X(t,xi);return S("svg",w({height:i,width:i,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:Ci},o))},Be=function(t){return S(Mt,w({size:20},t),S("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},Vt=function(t){return S(Mt,w({size:20},t),S("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},Pt=function(t,i){var o=t.isFocused,e=t.theme,a=e.spacing.baseUnit,u=e.colors;return y({label:"indicatorContainer",display:"flex",transition:"color 150ms"},i?{}:{color:o?u.neutral60:u.neutral20,padding:a*2,":hover":{color:o?u.neutral80:u.neutral40}})},Si=Pt,yi=function(t){var i=t.children,o=t.innerProps;return S("div",w({},P(t,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),o),i||S(Vt,null))},Fi=Pt,wi=function(t){var i=t.children,o=t.innerProps;return S("div",w({},P(t,"clearIndicator",{indicator:!0,"clear-indicator":!0}),o),i||S(Be,null))},Oi=function(t,i){var o=t.isDisabled,e=t.theme,a=e.spacing.baseUnit,u=e.colors;return y({label:"indicatorSeparator",alignSelf:"stretch",width:1},i?{}:{backgroundColor:o?u.neutral10:u.neutral20,marginBottom:a*2,marginTop:a*2})},Di=function(t){var i=t.innerProps;return S("span",w({},i,P(t,"indicatorSeparator",{"indicator-separator":!0})))},Ii=pn(Ke||(Ke=wn([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),Ai=function(t,i){var o=t.isFocused,e=t.size,a=t.theme,u=a.colors,l=a.spacing.baseUnit;return y({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:e,lineHeight:1,marginRight:e,textAlign:"center",verticalAlign:"middle"},i?{}:{color:o?u.neutral60:u.neutral20,padding:l*2})},Ee=function(t){var i=t.delay,o=t.offset;return S("span",{css:Pe({animation:"".concat(Ii," 1s ease-in-out ").concat(i,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:o?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},Mi=function(t){var i=t.innerProps,o=t.isRtl,e=t.size,a=e===void 0?4:e,u=X(t,Ei);return S("div",w({},P(y(y({},u),{},{innerProps:i,isRtl:o,size:a}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),i),S(Ee,{delay:0,offset:o}),S(Ee,{delay:160,offset:!0}),S(Ee,{delay:320,offset:!o}))},Vi=function(t,i){var o=t.isDisabled,e=t.isFocused,a=t.theme,u=a.colors,l=a.borderRadius,r=a.spacing;return y({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:r.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},i?{}:{backgroundColor:o?u.neutral5:u.neutral0,borderColor:o?u.neutral10:e?u.primary:u.neutral20,borderRadius:l,borderStyle:"solid",borderWidth:1,boxShadow:e?"0 0 0 1px ".concat(u.primary):void 0,"&:hover":{borderColor:e?u.primary:u.neutral30}})},Pi=function(t){var i=t.children,o=t.isDisabled,e=t.isFocused,a=t.innerRef,u=t.innerProps,l=t.menuIsOpen;return S("div",w({ref:a},P(t,"control",{control:!0,"control--is-disabled":o,"control--is-focused":e,"control--menu-is-open":l}),u,{"aria-disabled":o||void 0}),i)},Ri=Pi,Li=["data"],ki=function(t,i){var o=t.theme.spacing;return i?{}:{paddingBottom:o.baseUnit*2,paddingTop:o.baseUnit*2}},Ti=function(t){var i=t.children,o=t.cx,e=t.getStyles,a=t.getClassNames,u=t.Heading,l=t.headingProps,r=t.innerProps,s=t.label,c=t.theme,d=t.selectProps;return S("div",w({},P(t,"group",{group:!0}),r),S(u,w({},l,{selectProps:d,theme:c,getStyles:e,getClassNames:a,cx:o}),s),S("div",null,i))},Bi=function(t,i){var o=t.theme,e=o.colors,a=o.spacing;return y({label:"group",cursor:"default",display:"block"},i?{}:{color:e.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:a.baseUnit*3,paddingRight:a.baseUnit*3,textTransform:"uppercase"})},ji=function(t){var i=Ft(t);i.data;var o=X(i,Li);return S("div",w({},P(t,"groupHeading",{"group-heading":!0}),o))},$i=Ti,Hi=["innerRef","isDisabled","isHidden","inputClassName"],zi=function(t,i){var o=t.isDisabled,e=t.value,a=t.theme,u=a.spacing,l=a.colors;return y(y({visibility:o?"hidden":"visible",transform:e?"translateZ(0)":""},Ni),i?{}:{margin:u.baseUnit/2,paddingBottom:u.baseUnit/2,paddingTop:u.baseUnit/2,color:l.neutral80})},Rt={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},Ni={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":y({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},Rt)},Ui=function(t){return y({label:"input",color:"inherit",background:0,opacity:t?0:1,width:"100%"},Rt)},_i=function(t){var i=t.cx,o=t.value,e=Ft(t),a=e.innerRef,u=e.isDisabled,l=e.isHidden,r=e.inputClassName,s=X(e,Hi);return S("div",w({},P(t,"input",{"input-container":!0}),{"data-value":o||""}),S("input",w({className:i({input:!0},r),ref:a,style:Ui(l),disabled:u},s)))},Wi=_i,Gi=function(t,i){var o=t.theme,e=o.spacing,a=o.borderRadius,u=o.colors;return y({label:"multiValue",display:"flex",minWidth:0},i?{}:{backgroundColor:u.neutral10,borderRadius:a/2,margin:e.baseUnit/2})},Yi=function(t,i){var o=t.theme,e=o.borderRadius,a=o.colors,u=t.cropWithEllipsis;return y({overflow:"hidden",textOverflow:u||u===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},i?{}:{borderRadius:e/2,color:a.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},qi=function(t,i){var o=t.theme,e=o.spacing,a=o.borderRadius,u=o.colors,l=t.isFocused;return y({alignItems:"center",display:"flex"},i?{}:{borderRadius:a/2,backgroundColor:l?u.dangerLight:void 0,paddingLeft:e.baseUnit,paddingRight:e.baseUnit,":hover":{backgroundColor:u.dangerLight,color:u.danger}})},Lt=function(t){var i=t.children,o=t.innerProps;return S("div",o,i)},Ki=Lt,Xi=Lt;function Zi(n){var t=n.children,i=n.innerProps;return S("div",w({role:"button"},i),t||S(Be,{size:14}))}var Ji=function(t){var i=t.children,o=t.components,e=t.data,a=t.innerProps,u=t.isDisabled,l=t.removeProps,r=t.selectProps,s=o.Container,c=o.Label,d=o.Remove;return S(s,{data:e,innerProps:y(y({},P(t,"multiValue",{"multi-value":!0,"multi-value--is-disabled":u})),a),selectProps:r},S(c,{data:e,innerProps:y({},P(t,"multiValueLabel",{"multi-value__label":!0})),selectProps:r},i),S(d,{data:e,innerProps:y(y({},P(t,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(i||"option")},l),selectProps:r}))},Qi=Ji,eo=function(t,i){var o=t.isDisabled,e=t.isFocused,a=t.isSelected,u=t.theme,l=u.spacing,r=u.colors;return y({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},i?{}:{backgroundColor:a?r.primary:e?r.primary25:"transparent",color:o?r.neutral20:a?r.neutral0:"inherit",padding:"".concat(l.baseUnit*2,"px ").concat(l.baseUnit*3,"px"),":active":{backgroundColor:o?void 0:a?r.primary:r.primary50}})},to=function(t){var i=t.children,o=t.isDisabled,e=t.isFocused,a=t.isSelected,u=t.innerRef,l=t.innerProps;return S("div",w({},P(t,"option",{option:!0,"option--is-disabled":o,"option--is-focused":e,"option--is-selected":a}),{ref:u,"aria-disabled":o},l),i)},no=to,io=function(t,i){var o=t.theme,e=o.spacing,a=o.colors;return y({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},i?{}:{color:a.neutral50,marginLeft:e.baseUnit/2,marginRight:e.baseUnit/2})},oo=function(t){var i=t.children,o=t.innerProps;return S("div",w({},P(t,"placeholder",{placeholder:!0}),o),i)},ro=oo,ao=function(t,i){var o=t.isDisabled,e=t.theme,a=e.spacing,u=e.colors;return y({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},i?{}:{color:o?u.neutral40:u.neutral80,marginLeft:a.baseUnit/2,marginRight:a.baseUnit/2})},uo=function(t){var i=t.children,o=t.isDisabled,e=t.innerProps;return S("div",w({},P(t,"singleValue",{"single-value":!0,"single-value--is-disabled":o}),e),i)},so=uo,lo={ClearIndicator:wi,Control:Ri,DropdownIndicator:yi,DownChevron:Vt,CrossIcon:Be,Group:$i,GroupHeading:ji,IndicatorsContainer:bi,IndicatorSeparator:Di,Input:Wi,LoadingIndicator:Mi,Menu:oi,MenuList:ai,MenuPortal:pi,LoadingMessage:ci,NoOptionsMessage:li,MultiValue:Qi,MultiValueContainer:Ki,MultiValueLabel:Xi,MultiValueRemove:Zi,Option:no,Placeholder:ro,SelectContainer:hi,SingleValue:so,ValueContainer:gi},co=function(t){return y(y({},lo),t.components)},Xe=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function po(n,t){return!!(n===t||Xe(n)&&Xe(t))}function fo(n,t){if(n.length!==t.length)return!1;for(var i=0;i<n.length;i++)if(!po(n[i],t[i]))return!1;return!0}function ho(n,t){t===void 0&&(t=fo);var i=null;function o(){for(var e=[],a=0;a<arguments.length;a++)e[a]=arguments[a];if(i&&i.lastThis===this&&t(e,i.lastArgs))return i.lastResult;var u=n.apply(this,e);return i={lastResult:u,lastArgs:e,lastThis:this},u}return o.clear=function(){i=null},o}var mo={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},go=function(t){return S("span",w({css:mo},t))},Ze=go,vo={guidance:function(t){var i=t.isSearchable,o=t.isMulti,e=t.tabSelectsValue,a=t.context,u=t.isInitialFocus;switch(a){case"menu":return"Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(e?", press Tab to select the option and exit the menu":"",".");case"input":return u?"".concat(t["aria-label"]||"Select"," is focused ").concat(i?",type to refine list":"",", press Down to open the menu, ").concat(o?" press left to focus selected values":""):"";case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(t){var i=t.action,o=t.label,e=o===void 0?"":o,a=t.labels,u=t.isDisabled;switch(i){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(e,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(a.length>1?"s":""," ").concat(a.join(","),", selected.");case"select-option":return u?"option ".concat(e," is disabled. Select another option."):"option ".concat(e,", selected.");default:return""}},onFocus:function(t){var i=t.context,o=t.focused,e=t.options,a=t.label,u=a===void 0?"":a,l=t.selectValue,r=t.isDisabled,s=t.isSelected,c=t.isAppleDevice,d=function(b,f){return b&&b.length?"".concat(b.indexOf(f)+1," of ").concat(b.length):""};if(i==="value"&&l)return"value ".concat(u," focused, ").concat(d(l,o),".");if(i==="menu"&&c){var m=r?" disabled":"",h="".concat(s?" selected":"").concat(m);return"".concat(u).concat(h,", ").concat(d(e,o),".")}return""},onFilter:function(t){var i=t.inputValue,o=t.resultsMessage;return"".concat(o).concat(i?" for search term "+i:"",".")}},bo=function(t){var i=t.ariaSelection,o=t.focusedOption,e=t.focusedValue,a=t.focusableOptions,u=t.isFocused,l=t.selectValue,r=t.selectProps,s=t.id,c=t.isAppleDevice,d=r.ariaLiveMessages,m=r.getOptionLabel,h=r.inputValue,v=r.isMulti,b=r.isOptionDisabled,f=r.isSearchable,x=r.menuIsOpen,E=r.options,F=r.screenReaderStatus,C=r.tabSelectsValue,I=r.isLoading,A=r["aria-label"],M=r["aria-live"],O=p.useMemo(function(){return y(y({},vo),d||{})},[d]),V=p.useMemo(function(){var k="";if(i&&O.onChange){var R=i.option,_=i.options,z=i.removedValue,Z=i.removedValues,J=i.value,re=function(q){return Array.isArray(q)?null:q},L=z||R||re(J),H=L?m(L):"",Y=_||Z||void 0,Q=Y?Y.map(m):[],N=y({isDisabled:L&&b(L,l),label:H,labels:Q},i);k=O.onChange(N)}return k},[i,O,b,l,m]),T=p.useMemo(function(){var k="",R=o||e,_=!!(o&&l&&l.includes(o));if(R&&O.onFocus){var z={focused:R,label:m(R),isDisabled:b(R,l),isSelected:_,options:a,context:R===o?"menu":"value",selectValue:l,isAppleDevice:c};k=O.onFocus(z)}return k},[o,e,m,b,O,a,l,c]),j=p.useMemo(function(){var k="";if(x&&E.length&&!I&&O.onFilter){var R=F({count:a.length});k=O.onFilter({inputValue:h,resultsMessage:R})}return k},[a,h,x,O,E,F,I]),B=(i==null?void 0:i.action)==="initial-input-focus",W=p.useMemo(function(){var k="";if(O.guidance){var R=e?"value":x?"menu":"input";k=O.guidance({"aria-label":A,context:R,isDisabled:o&&b(o,l),isMulti:v,isSearchable:f,tabSelectsValue:C,isInitialFocus:B})}return k},[A,o,e,v,b,f,x,O,l,C,B]),G=S(p.Fragment,null,S("span",{id:"aria-selection"},V),S("span",{id:"aria-focused"},T),S("span",{id:"aria-results"},j),S("span",{id:"aria-guidance"},W));return S(p.Fragment,null,S(Ze,{id:s},B&&G),S(Ze,{"aria-live":M,"aria-atomic":"false","aria-relevant":"additions text",role:"log"},u&&!B&&G))},xo=bo,Me=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],Eo=new RegExp("["+Me.map(function(n){return n.letters}).join("")+"]","g"),kt={};for(var Ce=0;Ce<Me.length;Ce++)for(var Se=Me[Ce],ye=0;ye<Se.letters.length;ye++)kt[Se.letters[ye]]=Se.base;var Tt=function(t){return t.replace(Eo,function(i){return kt[i]})},Co=ho(Tt),Je=function(t){return t.replace(/^\s+|\s+$/g,"")},So=function(t){return"".concat(t.label," ").concat(t.value)},yo=function(t){return function(i,o){if(i.data.__isNew__)return!0;var e=y({ignoreCase:!0,ignoreAccents:!0,stringify:So,trim:!0,matchFrom:"any"},t),a=e.ignoreCase,u=e.ignoreAccents,l=e.stringify,r=e.trim,s=e.matchFrom,c=r?Je(o):o,d=r?Je(l(i)):l(i);return a&&(c=c.toLowerCase(),d=d.toLowerCase()),u&&(c=Co(c),d=Tt(d)),s==="start"?d.substr(0,c.length)===c:d.indexOf(c)>-1}},Fo=["innerRef"];function wo(n){var t=n.innerRef,i=X(n,Fo),o=Xn(i,"onExited","in","enter","exit","appear");return S("input",w({ref:t},o,{css:Pe({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var Oo=function(t){t.cancelable&&t.preventDefault(),t.stopPropagation()};function Do(n){var t=n.isEnabled,i=n.onBottomArrive,o=n.onBottomLeave,e=n.onTopArrive,a=n.onTopLeave,u=p.useRef(!1),l=p.useRef(!1),r=p.useRef(0),s=p.useRef(null),c=p.useCallback(function(f,x){if(s.current!==null){var E=s.current,F=E.scrollTop,C=E.scrollHeight,I=E.clientHeight,A=s.current,M=x>0,O=C-I-F,V=!1;O>x&&u.current&&(o&&o(f),u.current=!1),M&&l.current&&(a&&a(f),l.current=!1),M&&x>O?(i&&!u.current&&i(f),A.scrollTop=C,V=!0,u.current=!0):!M&&-x>F&&(e&&!l.current&&e(f),A.scrollTop=0,V=!0,l.current=!0),V&&Oo(f)}},[i,o,e,a]),d=p.useCallback(function(f){c(f,f.deltaY)},[c]),m=p.useCallback(function(f){r.current=f.changedTouches[0].clientY},[]),h=p.useCallback(function(f){var x=r.current-f.changedTouches[0].clientY;c(f,x)},[c]),v=p.useCallback(function(f){if(f){var x=Yn?{passive:!1}:!1;f.addEventListener("wheel",d,x),f.addEventListener("touchstart",m,x),f.addEventListener("touchmove",h,x)}},[h,m,d]),b=p.useCallback(function(f){f&&(f.removeEventListener("wheel",d,!1),f.removeEventListener("touchstart",m,!1),f.removeEventListener("touchmove",h,!1))},[h,m,d]);return p.useEffect(function(){if(t){var f=s.current;return v(f),function(){b(f)}}},[t,v,b]),function(f){s.current=f}}var Qe=["boxSizing","height","overflow","paddingRight","position"],et={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function tt(n){n.preventDefault()}function nt(n){n.stopPropagation()}function it(){var n=this.scrollTop,t=this.scrollHeight,i=n+this.offsetHeight;n===0?this.scrollTop=1:i===t&&(this.scrollTop=n-1)}function ot(){return"ontouchstart"in window||navigator.maxTouchPoints}var rt=!!(typeof window<"u"&&window.document&&window.document.createElement),ne=0,te={capture:!1,passive:!1};function Io(n){var t=n.isEnabled,i=n.accountForScrollbars,o=i===void 0?!0:i,e=p.useRef({}),a=p.useRef(null),u=p.useCallback(function(r){if(rt){var s=document.body,c=s&&s.style;if(o&&Qe.forEach(function(v){var b=c&&c[v];e.current[v]=b}),o&&ne<1){var d=parseInt(e.current.paddingRight,10)||0,m=document.body?document.body.clientWidth:0,h=window.innerWidth-m+d||0;Object.keys(et).forEach(function(v){var b=et[v];c&&(c[v]=b)}),c&&(c.paddingRight="".concat(h,"px"))}s&&ot()&&(s.addEventListener("touchmove",tt,te),r&&(r.addEventListener("touchstart",it,te),r.addEventListener("touchmove",nt,te))),ne+=1}},[o]),l=p.useCallback(function(r){if(rt){var s=document.body,c=s&&s.style;ne=Math.max(ne-1,0),o&&ne<1&&Qe.forEach(function(d){var m=e.current[d];c&&(c[d]=m)}),s&&ot()&&(s.removeEventListener("touchmove",tt,te),r&&(r.removeEventListener("touchstart",it,te),r.removeEventListener("touchmove",nt,te)))}},[o]);return p.useEffect(function(){if(t){var r=a.current;return u(r),function(){l(r)}}},[t,u,l]),function(r){a.current=r}}var Ao=function(t){var i=t.target;return i.ownerDocument.activeElement&&i.ownerDocument.activeElement.blur()},Mo={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function Vo(n){var t=n.children,i=n.lockEnabled,o=n.captureEnabled,e=o===void 0?!0:o,a=n.onBottomArrive,u=n.onBottomLeave,l=n.onTopArrive,r=n.onTopLeave,s=Do({isEnabled:e,onBottomArrive:a,onBottomLeave:u,onTopArrive:l,onTopLeave:r}),c=Io({isEnabled:i}),d=function(h){s(h),c(h)};return S(p.Fragment,null,i&&S("div",{onClick:Ao,css:Mo}),t(d))}var Po={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},Ro=function(t){var i=t.name,o=t.onFocus;return S("input",{required:!0,name:i,tabIndex:-1,"aria-hidden":"true",onFocus:o,css:Po,value:"",onChange:function(){}})},Lo=Ro;function je(n){var t;return typeof window<"u"&&window.navigator!=null?n.test(((t=window.navigator.userAgentData)===null||t===void 0?void 0:t.platform)||window.navigator.platform):!1}function ko(){return je(/^iPhone/i)}function Bt(){return je(/^Mac/i)}function To(){return je(/^iPad/i)||Bt()&&navigator.maxTouchPoints>1}function Bo(){return ko()||To()}function jo(){return Bt()||Bo()}var $o=function(t){return t.label},Ho=function(t){return t.label},zo=function(t){return t.value},No=function(t){return!!t.isDisabled},Uo={clearIndicator:Fi,container:fi,control:Vi,dropdownIndicator:Si,group:ki,groupHeading:Bi,indicatorsContainer:vi,indicatorSeparator:Oi,input:zi,loadingIndicator:Ai,loadingMessage:si,menu:ti,menuList:ri,menuPortal:di,multiValue:Gi,multiValueLabel:Yi,multiValueRemove:qi,noOptionsMessage:ui,option:eo,placeholder:io,singleValue:ao,valueContainer:mi},_o={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},Wo=4,jt=4,Go=38,Yo=jt*2,qo={baseUnit:jt,controlHeight:Go,menuGutter:Yo},Fe={borderRadius:Wo,colors:_o,spacing:qo},Ko={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:qe(),captureMenuScroll:!qe(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:yo(),formatGroupLabel:$o,getOptionLabel:Ho,getOptionValue:zo,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:No,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!Wn(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(t){var i=t.count;return"".concat(i," result").concat(i!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function at(n,t,i,o){var e=zt(n,t,i),a=Nt(n,t,i),u=Ht(n,t),l=ve(n,t);return{type:"option",data:t,isDisabled:e,isSelected:a,label:u,value:l,index:o}}function de(n,t){return n.options.map(function(i,o){if("options"in i){var e=i.options.map(function(u,l){return at(n,u,t,l)}).filter(function(u){return st(n,u)});return e.length>0?{type:"group",data:i,options:e,index:o}:void 0}var a=at(n,i,t,o);return st(n,a)?a:void 0}).filter(qn)}function $t(n){return n.reduce(function(t,i){return i.type==="group"?t.push.apply(t,Re(i.options.map(function(o){return o.data}))):t.push(i.data),t},[])}function ut(n,t){return n.reduce(function(i,o){return o.type==="group"?i.push.apply(i,Re(o.options.map(function(e){return{data:e.data,id:"".concat(t,"-").concat(o.index,"-").concat(e.index)}}))):i.push({data:o.data,id:"".concat(t,"-").concat(o.index)}),i},[])}function Xo(n,t){return $t(de(n,t))}function st(n,t){var i=n.inputValue,o=i===void 0?"":i,e=t.data,a=t.isSelected,u=t.label,l=t.value;return(!_t(n)||!a)&&Ut(n,{label:u,value:l,data:e},o)}function Zo(n,t){var i=n.focusedValue,o=n.selectValue,e=o.indexOf(i);if(e>-1){var a=t.indexOf(i);if(a>-1)return i;if(e<t.length)return t[e]}return null}function Jo(n,t){var i=n.focusedOption;return i&&t.indexOf(i)>-1?i:t[0]}var we=function(t,i){var o,e=(o=t.find(function(a){return a.data===i}))===null||o===void 0?void 0:o.id;return e||null},Ht=function(t,i){return t.getOptionLabel(i)},ve=function(t,i){return t.getOptionValue(i)};function zt(n,t,i){return typeof n.isOptionDisabled=="function"?n.isOptionDisabled(t,i):!1}function Nt(n,t,i){if(i.indexOf(t)>-1)return!0;if(typeof n.isOptionSelected=="function")return n.isOptionSelected(t,i);var o=ve(n,t);return i.some(function(e){return ve(n,e)===o})}function Ut(n,t,i){return n.filterOption?n.filterOption(t,i):!0}var _t=function(t){var i=t.hideSelectedOptions,o=t.isMulti;return i===void 0?o:i},Qo=1,Wt=function(n){sn(i,n);var t=ln(i);function i(o){var e;if(cn(this,i),e=t.call(this,o),e.state={ariaSelection:null,focusedOption:null,focusedOptionId:null,focusableOptionsWithIds:[],focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0,instancePrefix:""},e.blockOptionHover=!1,e.isComposing=!1,e.commonProps=void 0,e.initialTouchX=0,e.initialTouchY=0,e.openAfterFocus=!1,e.scrollToFocusedOptionOnUpdate=!1,e.userIsDragging=void 0,e.isAppleDevice=jo(),e.controlRef=null,e.getControlRef=function(r){e.controlRef=r},e.focusedOptionRef=null,e.getFocusedOptionRef=function(r){e.focusedOptionRef=r},e.menuListRef=null,e.getMenuListRef=function(r){e.menuListRef=r},e.inputRef=null,e.getInputRef=function(r){e.inputRef=r},e.focus=e.focusInput,e.blur=e.blurInput,e.onChange=function(r,s){var c=e.props,d=c.onChange,m=c.name;s.name=m,e.ariaOnChange(r,s),d(r,s)},e.setValue=function(r,s,c){var d=e.props,m=d.closeMenuOnSelect,h=d.isMulti,v=d.inputValue;e.onInputChange("",{action:"set-value",prevInputValue:v}),m&&(e.setState({inputIsHiddenAfterUpdate:!h}),e.onMenuClose()),e.setState({clearFocusValueOnUpdate:!0}),e.onChange(r,{action:s,option:c})},e.selectOption=function(r){var s=e.props,c=s.blurInputOnSelect,d=s.isMulti,m=s.name,h=e.state.selectValue,v=d&&e.isOptionSelected(r,h),b=e.isOptionDisabled(r,h);if(v){var f=e.getOptionValue(r);e.setValue(h.filter(function(x){return e.getOptionValue(x)!==f}),"deselect-option",r)}else if(!b)d?e.setValue([].concat(Re(h),[r]),"select-option",r):e.setValue(r,"select-option");else{e.ariaOnChange(r,{action:"select-option",option:r,name:m});return}c&&e.blurInput()},e.removeValue=function(r){var s=e.props.isMulti,c=e.state.selectValue,d=e.getOptionValue(r),m=c.filter(function(v){return e.getOptionValue(v)!==d}),h=ce(s,m,m[0]||null);e.onChange(h,{action:"remove-value",removedValue:r}),e.focusInput()},e.clearValue=function(){var r=e.state.selectValue;e.onChange(ce(e.props.isMulti,[],null),{action:"clear",removedValues:r})},e.popValue=function(){var r=e.props.isMulti,s=e.state.selectValue,c=s[s.length-1],d=s.slice(0,s.length-1),m=ce(r,d,d[0]||null);e.onChange(m,{action:"pop-value",removedValue:c})},e.getFocusedOptionId=function(r){return we(e.state.focusableOptionsWithIds,r)},e.getFocusableOptionsWithIds=function(){return ut(de(e.props,e.state.selectValue),e.getElementId("option"))},e.getValue=function(){return e.state.selectValue},e.cx=function(){for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return Hn.apply(void 0,[e.props.classNamePrefix].concat(s))},e.getOptionLabel=function(r){return Ht(e.props,r)},e.getOptionValue=function(r){return ve(e.props,r)},e.getStyles=function(r,s){var c=e.props.unstyled,d=Uo[r](s,c);d.boxSizing="border-box";var m=e.props.styles[r];return m?m(d,s):d},e.getClassNames=function(r,s){var c,d;return(c=(d=e.props.classNames)[r])===null||c===void 0?void 0:c.call(d,s)},e.getElementId=function(r){return"".concat(e.state.instancePrefix,"-").concat(r)},e.getComponents=function(){return co(e.props)},e.buildCategorizedOptions=function(){return de(e.props,e.state.selectValue)},e.getCategorizedOptions=function(){return e.props.menuIsOpen?e.buildCategorizedOptions():[]},e.buildFocusableOptions=function(){return $t(e.buildCategorizedOptions())},e.getFocusableOptions=function(){return e.props.menuIsOpen?e.buildFocusableOptions():[]},e.ariaOnChange=function(r,s){e.setState({ariaSelection:y({value:r},s)})},e.onMenuMouseDown=function(r){r.button===0&&(r.stopPropagation(),r.preventDefault(),e.focusInput())},e.onMenuMouseMove=function(r){e.blockOptionHover=!1},e.onControlMouseDown=function(r){if(!r.defaultPrevented){var s=e.props.openMenuOnClick;e.state.isFocused?e.props.menuIsOpen?r.target.tagName!=="INPUT"&&r.target.tagName!=="TEXTAREA"&&e.onMenuClose():s&&e.openMenu("first"):(s&&(e.openAfterFocus=!0),e.focusInput()),r.target.tagName!=="INPUT"&&r.target.tagName!=="TEXTAREA"&&r.preventDefault()}},e.onDropdownIndicatorMouseDown=function(r){if(!(r&&r.type==="mousedown"&&r.button!==0)&&!e.props.isDisabled){var s=e.props,c=s.isMulti,d=s.menuIsOpen;e.focusInput(),d?(e.setState({inputIsHiddenAfterUpdate:!c}),e.onMenuClose()):e.openMenu("first"),r.preventDefault()}},e.onClearIndicatorMouseDown=function(r){r&&r.type==="mousedown"&&r.button!==0||(e.clearValue(),r.preventDefault(),e.openAfterFocus=!1,r.type==="touchend"?e.focusInput():setTimeout(function(){return e.focusInput()}))},e.onScroll=function(r){typeof e.props.closeMenuOnScroll=="boolean"?r.target instanceof HTMLElement&&be(r.target)&&e.props.onMenuClose():typeof e.props.closeMenuOnScroll=="function"&&e.props.closeMenuOnScroll(r)&&e.props.onMenuClose()},e.onCompositionStart=function(){e.isComposing=!0},e.onCompositionEnd=function(){e.isComposing=!1},e.onTouchStart=function(r){var s=r.touches,c=s&&s.item(0);c&&(e.initialTouchX=c.clientX,e.initialTouchY=c.clientY,e.userIsDragging=!1)},e.onTouchMove=function(r){var s=r.touches,c=s&&s.item(0);if(c){var d=Math.abs(c.clientX-e.initialTouchX),m=Math.abs(c.clientY-e.initialTouchY),h=5;e.userIsDragging=d>h||m>h}},e.onTouchEnd=function(r){e.userIsDragging||(e.controlRef&&!e.controlRef.contains(r.target)&&e.menuListRef&&!e.menuListRef.contains(r.target)&&e.blurInput(),e.initialTouchX=0,e.initialTouchY=0)},e.onControlTouchEnd=function(r){e.userIsDragging||e.onControlMouseDown(r)},e.onClearIndicatorTouchEnd=function(r){e.userIsDragging||e.onClearIndicatorMouseDown(r)},e.onDropdownIndicatorTouchEnd=function(r){e.userIsDragging||e.onDropdownIndicatorMouseDown(r)},e.handleInputChange=function(r){var s=e.props.inputValue,c=r.currentTarget.value;e.setState({inputIsHiddenAfterUpdate:!1}),e.onInputChange(c,{action:"input-change",prevInputValue:s}),e.props.menuIsOpen||e.onMenuOpen()},e.onInputFocus=function(r){e.props.onFocus&&e.props.onFocus(r),e.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(e.openAfterFocus||e.props.openMenuOnFocus)&&e.openMenu("first"),e.openAfterFocus=!1},e.onInputBlur=function(r){var s=e.props.inputValue;if(e.menuListRef&&e.menuListRef.contains(document.activeElement)){e.inputRef.focus();return}e.props.onBlur&&e.props.onBlur(r),e.onInputChange("",{action:"input-blur",prevInputValue:s}),e.onMenuClose(),e.setState({focusedValue:null,isFocused:!1})},e.onOptionHover=function(r){if(!(e.blockOptionHover||e.state.focusedOption===r)){var s=e.getFocusableOptions(),c=s.indexOf(r);e.setState({focusedOption:r,focusedOptionId:c>-1?e.getFocusedOptionId(r):null})}},e.shouldHideSelectedOptions=function(){return _t(e.props)},e.onValueInputFocus=function(r){r.preventDefault(),r.stopPropagation(),e.focus()},e.onKeyDown=function(r){var s=e.props,c=s.isMulti,d=s.backspaceRemovesValue,m=s.escapeClearsValue,h=s.inputValue,v=s.isClearable,b=s.isDisabled,f=s.menuIsOpen,x=s.onKeyDown,E=s.tabSelectsValue,F=s.openMenuOnFocus,C=e.state,I=C.focusedOption,A=C.focusedValue,M=C.selectValue;if(!b&&!(typeof x=="function"&&(x(r),r.defaultPrevented))){switch(e.blockOptionHover=!0,r.key){case"ArrowLeft":if(!c||h)return;e.focusValue("previous");break;case"ArrowRight":if(!c||h)return;e.focusValue("next");break;case"Delete":case"Backspace":if(h)return;if(A)e.removeValue(A);else{if(!d)return;c?e.popValue():v&&e.clearValue()}break;case"Tab":if(e.isComposing||r.shiftKey||!f||!E||!I||F&&e.isOptionSelected(I,M))return;e.selectOption(I);break;case"Enter":if(r.keyCode===229)break;if(f){if(!I||e.isComposing)return;e.selectOption(I);break}return;case"Escape":f?(e.setState({inputIsHiddenAfterUpdate:!1}),e.onInputChange("",{action:"menu-close",prevInputValue:h}),e.onMenuClose()):v&&m&&e.clearValue();break;case" ":if(h)return;if(!f){e.openMenu("first");break}if(!I)return;e.selectOption(I);break;case"ArrowUp":f?e.focusOption("up"):e.openMenu("last");break;case"ArrowDown":f?e.focusOption("down"):e.openMenu("first");break;case"PageUp":if(!f)return;e.focusOption("pageup");break;case"PageDown":if(!f)return;e.focusOption("pagedown");break;case"Home":if(!f)return;e.focusOption("first");break;case"End":if(!f)return;e.focusOption("last");break;default:return}r.preventDefault()}},e.state.instancePrefix="react-select-"+(e.props.instanceId||++Qo),e.state.selectValue=Ge(o.value),o.menuIsOpen&&e.state.selectValue.length){var a=e.getFocusableOptionsWithIds(),u=e.buildFocusableOptions(),l=u.indexOf(e.state.selectValue[0]);e.state.focusableOptionsWithIds=a,e.state.focusedOption=u[l],e.state.focusedOptionId=we(a,u[l])}return e}return dn(i,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&Ye(this.menuListRef,this.focusedOptionRef)}},{key:"componentDidUpdate",value:function(e){var a=this.props,u=a.isDisabled,l=a.menuIsOpen,r=this.state.isFocused;(r&&!u&&e.isDisabled||r&&l&&!e.menuIsOpen)&&this.focusInput(),r&&u&&!e.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!r&&!u&&e.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(Ye(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(e,a){this.props.onInputChange(e,a)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(e){var a=this,u=this.state,l=u.selectValue,r=u.isFocused,s=this.buildFocusableOptions(),c=e==="first"?0:s.length-1;if(!this.props.isMulti){var d=s.indexOf(l[0]);d>-1&&(c=d)}this.scrollToFocusedOptionOnUpdate=!(r&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:s[c],focusedOptionId:this.getFocusedOptionId(s[c])},function(){return a.onMenuOpen()})}},{key:"focusValue",value:function(e){var a=this.state,u=a.selectValue,l=a.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var r=u.indexOf(l);l||(r=-1);var s=u.length-1,c=-1;if(u.length){switch(e){case"previous":r===0?c=0:r===-1?c=s:c=r-1;break;case"next":r>-1&&r<s&&(c=r+1);break}this.setState({inputIsHidden:c!==-1,focusedValue:u[c]})}}}},{key:"focusOption",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",a=this.props.pageSize,u=this.state.focusedOption,l=this.getFocusableOptions();if(l.length){var r=0,s=l.indexOf(u);u||(s=-1),e==="up"?r=s>0?s-1:l.length-1:e==="down"?r=(s+1)%l.length:e==="pageup"?(r=s-a,r<0&&(r=0)):e==="pagedown"?(r=s+a,r>l.length-1&&(r=l.length-1)):e==="last"&&(r=l.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:l[r],focusedValue:null,focusedOptionId:this.getFocusedOptionId(l[r])})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(Fe):y(y({},Fe),this.props.theme):Fe}},{key:"getCommonProps",value:function(){var e=this.clearValue,a=this.cx,u=this.getStyles,l=this.getClassNames,r=this.getValue,s=this.selectOption,c=this.setValue,d=this.props,m=d.isMulti,h=d.isRtl,v=d.options,b=this.hasValue();return{clearValue:e,cx:a,getStyles:u,getClassNames:l,getValue:r,hasValue:b,isMulti:m,isRtl:h,options:v,selectOption:s,selectProps:d,setValue:c,theme:this.getTheme()}}},{key:"hasValue",value:function(){var e=this.state.selectValue;return e.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var e=this.props,a=e.isClearable,u=e.isMulti;return a===void 0?u:a}},{key:"isOptionDisabled",value:function(e,a){return zt(this.props,e,a)}},{key:"isOptionSelected",value:function(e,a){return Nt(this.props,e,a)}},{key:"filterOption",value:function(e,a){return Ut(this.props,e,a)}},{key:"formatOptionLabel",value:function(e,a){if(typeof this.props.formatOptionLabel=="function"){var u=this.props.inputValue,l=this.state.selectValue;return this.props.formatOptionLabel(e,{context:a,inputValue:u,selectValue:l})}else return this.getOptionLabel(e)}},{key:"formatGroupLabel",value:function(e){return this.props.formatGroupLabel(e)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var e=this.props,a=e.isDisabled,u=e.isSearchable,l=e.inputId,r=e.inputValue,s=e.tabIndex,c=e.form,d=e.menuIsOpen,m=e.required,h=this.getComponents(),v=h.Input,b=this.state,f=b.inputIsHidden,x=b.ariaSelection,E=this.commonProps,F=l||this.getElementId("input"),C=y(y(y({"aria-autocomplete":"list","aria-expanded":d,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":m,role:"combobox","aria-activedescendant":this.isAppleDevice?void 0:this.state.focusedOptionId||""},d&&{"aria-controls":this.getElementId("listbox")}),!u&&{"aria-readonly":!0}),this.hasValue()?(x==null?void 0:x.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return u?p.createElement(v,w({},E,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:F,innerRef:this.getInputRef,isDisabled:a,isHidden:f,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:s,form:c,type:"text",value:r},C)):p.createElement(wo,w({id:F,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:me,onFocus:this.onInputFocus,disabled:a,tabIndex:s,inputMode:"none",form:c,value:""},C))}},{key:"renderPlaceholderOrValue",value:function(){var e=this,a=this.getComponents(),u=a.MultiValue,l=a.MultiValueContainer,r=a.MultiValueLabel,s=a.MultiValueRemove,c=a.SingleValue,d=a.Placeholder,m=this.commonProps,h=this.props,v=h.controlShouldRenderValue,b=h.isDisabled,f=h.isMulti,x=h.inputValue,E=h.placeholder,F=this.state,C=F.selectValue,I=F.focusedValue,A=F.isFocused;if(!this.hasValue()||!v)return x?null:p.createElement(d,w({},m,{key:"placeholder",isDisabled:b,isFocused:A,innerProps:{id:this.getElementId("placeholder")}}),E);if(f)return C.map(function(O,V){var T=O===I,j="".concat(e.getOptionLabel(O),"-").concat(e.getOptionValue(O));return p.createElement(u,w({},m,{components:{Container:l,Label:r,Remove:s},isFocused:T,isDisabled:b,key:j,index:V,removeProps:{onClick:function(){return e.removeValue(O)},onTouchEnd:function(){return e.removeValue(O)},onMouseDown:function(W){W.preventDefault()}},data:O}),e.formatOptionLabel(O,"value"))});if(x)return null;var M=C[0];return p.createElement(c,w({},m,{data:M,isDisabled:b}),this.formatOptionLabel(M,"value"))}},{key:"renderClearIndicator",value:function(){var e=this.getComponents(),a=e.ClearIndicator,u=this.commonProps,l=this.props,r=l.isDisabled,s=l.isLoading,c=this.state.isFocused;if(!this.isClearable()||!a||r||!this.hasValue()||s)return null;var d={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return p.createElement(a,w({},u,{innerProps:d,isFocused:c}))}},{key:"renderLoadingIndicator",value:function(){var e=this.getComponents(),a=e.LoadingIndicator,u=this.commonProps,l=this.props,r=l.isDisabled,s=l.isLoading,c=this.state.isFocused;if(!a||!s)return null;var d={"aria-hidden":"true"};return p.createElement(a,w({},u,{innerProps:d,isDisabled:r,isFocused:c}))}},{key:"renderIndicatorSeparator",value:function(){var e=this.getComponents(),a=e.DropdownIndicator,u=e.IndicatorSeparator;if(!a||!u)return null;var l=this.commonProps,r=this.props.isDisabled,s=this.state.isFocused;return p.createElement(u,w({},l,{isDisabled:r,isFocused:s}))}},{key:"renderDropdownIndicator",value:function(){var e=this.getComponents(),a=e.DropdownIndicator;if(!a)return null;var u=this.commonProps,l=this.props.isDisabled,r=this.state.isFocused,s={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return p.createElement(a,w({},u,{innerProps:s,isDisabled:l,isFocused:r}))}},{key:"renderMenu",value:function(){var e=this,a=this.getComponents(),u=a.Group,l=a.GroupHeading,r=a.Menu,s=a.MenuList,c=a.MenuPortal,d=a.LoadingMessage,m=a.NoOptionsMessage,h=a.Option,v=this.commonProps,b=this.state.focusedOption,f=this.props,x=f.captureMenuScroll,E=f.inputValue,F=f.isLoading,C=f.loadingMessage,I=f.minMenuHeight,A=f.maxMenuHeight,M=f.menuIsOpen,O=f.menuPlacement,V=f.menuPosition,T=f.menuPortalTarget,j=f.menuShouldBlockScroll,B=f.menuShouldScrollIntoView,W=f.noOptionsMessage,G=f.onMenuScrollToTop,k=f.onMenuScrollToBottom;if(!M)return null;var R=function(H,Y){var Q=H.type,N=H.data,ee=H.isDisabled,q=H.isSelected,ae=H.label,Gt=H.value,$e=b===N,He=ee?void 0:function(){return e.onOptionHover(N)},Yt=ee?void 0:function(){return e.selectOption(N)},ze="".concat(e.getElementId("option"),"-").concat(Y),qt={id:ze,onClick:Yt,onMouseMove:He,onMouseOver:He,tabIndex:-1,role:"option","aria-selected":e.isAppleDevice?void 0:q};return p.createElement(h,w({},v,{innerProps:qt,data:N,isDisabled:ee,isSelected:q,key:ze,label:ae,type:Q,value:Gt,isFocused:$e,innerRef:$e?e.getFocusedOptionRef:void 0}),e.formatOptionLabel(H.data,"menu"))},_;if(this.hasOptions())_=this.getCategorizedOptions().map(function(L){if(L.type==="group"){var H=L.data,Y=L.options,Q=L.index,N="".concat(e.getElementId("group"),"-").concat(Q),ee="".concat(N,"-heading");return p.createElement(u,w({},v,{key:N,data:H,options:Y,Heading:l,headingProps:{id:ee,data:L.data},label:e.formatGroupLabel(L.data)}),L.options.map(function(q){return R(q,"".concat(Q,"-").concat(q.index))}))}else if(L.type==="option")return R(L,"".concat(L.index))});else if(F){var z=C({inputValue:E});if(z===null)return null;_=p.createElement(d,v,z)}else{var Z=W({inputValue:E});if(Z===null)return null;_=p.createElement(m,v,Z)}var J={minMenuHeight:I,maxMenuHeight:A,menuPlacement:O,menuPosition:V,menuShouldScrollIntoView:B},re=p.createElement(ni,w({},v,J),function(L){var H=L.ref,Y=L.placerProps,Q=Y.placement,N=Y.maxHeight;return p.createElement(r,w({},v,J,{innerRef:H,innerProps:{onMouseDown:e.onMenuMouseDown,onMouseMove:e.onMenuMouseMove},isLoading:F,placement:Q}),p.createElement(Vo,{captureEnabled:x,onTopArrive:G,onBottomArrive:k,lockEnabled:j},function(ee){return p.createElement(s,w({},v,{innerRef:function(ae){e.getMenuListRef(ae),ee(ae)},innerProps:{role:"listbox","aria-multiselectable":v.isMulti,id:e.getElementId("listbox")},isLoading:F,maxHeight:N,focusedOption:b}),_)}))});return T||V==="fixed"?p.createElement(c,w({},v,{appendTo:T,controlElement:this.controlRef,menuPlacement:O,menuPosition:V}),re):re}},{key:"renderFormField",value:function(){var e=this,a=this.props,u=a.delimiter,l=a.isDisabled,r=a.isMulti,s=a.name,c=a.required,d=this.state.selectValue;if(c&&!this.hasValue()&&!l)return p.createElement(Lo,{name:s,onFocus:this.onValueInputFocus});if(!(!s||l))if(r)if(u){var m=d.map(function(b){return e.getOptionValue(b)}).join(u);return p.createElement("input",{name:s,type:"hidden",value:m})}else{var h=d.length>0?d.map(function(b,f){return p.createElement("input",{key:"i-".concat(f),name:s,type:"hidden",value:e.getOptionValue(b)})}):p.createElement("input",{name:s,type:"hidden",value:""});return p.createElement("div",null,h)}else{var v=d[0]?this.getOptionValue(d[0]):"";return p.createElement("input",{name:s,type:"hidden",value:v})}}},{key:"renderLiveRegion",value:function(){var e=this.commonProps,a=this.state,u=a.ariaSelection,l=a.focusedOption,r=a.focusedValue,s=a.isFocused,c=a.selectValue,d=this.getFocusableOptions();return p.createElement(xo,w({},e,{id:this.getElementId("live-region"),ariaSelection:u,focusedOption:l,focusedValue:r,isFocused:s,selectValue:c,focusableOptions:d,isAppleDevice:this.isAppleDevice}))}},{key:"render",value:function(){var e=this.getComponents(),a=e.Control,u=e.IndicatorsContainer,l=e.SelectContainer,r=e.ValueContainer,s=this.props,c=s.className,d=s.id,m=s.isDisabled,h=s.menuIsOpen,v=this.state.isFocused,b=this.commonProps=this.getCommonProps();return p.createElement(l,w({},b,{className:c,innerProps:{id:d,onKeyDown:this.onKeyDown},isDisabled:m,isFocused:v}),this.renderLiveRegion(),p.createElement(a,w({},b,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:m,isFocused:v,menuIsOpen:h}),p.createElement(r,w({},b,{isDisabled:m}),this.renderPlaceholderOrValue(),this.renderInput()),p.createElement(u,w({},b,{isDisabled:m}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(e,a){var u=a.prevProps,l=a.clearFocusValueOnUpdate,r=a.inputIsHiddenAfterUpdate,s=a.ariaSelection,c=a.isFocused,d=a.prevWasFocused,m=a.instancePrefix,h=e.options,v=e.value,b=e.menuIsOpen,f=e.inputValue,x=e.isMulti,E=Ge(v),F={};if(u&&(v!==u.value||h!==u.options||b!==u.menuIsOpen||f!==u.inputValue)){var C=b?Xo(e,E):[],I=b?ut(de(e,E),"".concat(m,"-option")):[],A=l?Zo(a,E):null,M=Jo(a,C),O=we(I,M);F={selectValue:E,focusedOption:M,focusedOptionId:O,focusableOptionsWithIds:I,focusedValue:A,clearFocusValueOnUpdate:!1}}var V=r!=null&&e!==u?{inputIsHidden:r,inputIsHiddenAfterUpdate:void 0}:{},T=s,j=c&&d;return c&&!j&&(T={value:ce(x,E,E[0]||null),options:E,action:"initial-input-focus"},j=!d),(s==null?void 0:s.action)==="initial-input-focus"&&(T=null),y(y(y({},F),V),{},{prevProps:e,ariaSelection:T,prevWasFocused:j})}}]),i}(p.Component);Wt.defaultProps=Ko;var er=p.forwardRef(function(n,t){var i=Cn(n);return p.createElement(Wt,w({ref:t},i))}),lt=er;const tr=D.form`
  
`,nr=D.div`
  position: relative;
`,ir=D.div`
  position: relative;

  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }

  @media screen and (min-width: 1440px){
    margin-bottom: 0;
  }
`,or=D.input`
  width: 335px;
  padding: 14px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  border-radius: 12px;
  color: var(--white, #efede8);
  background-color: rgba(239, 237, 232, 0);
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28;
  outline: none;

  :focus,
  :valid {
    border-color: #ef8964;
  }

  @media screen and (min-width: 768px) {
    width: 236px;
    font-size: 16px;
    line-height: 1.5;
  }
`,ct=D.button`
  position: absolute;
  top: 14px;
  right: ${n=>n.right};
  padding: 0;
  width: 18px;
  height: 18px;
  border: none;
  background-color: rgba(0, 0, 0, 0);
  cursor: pointer;

  @media screen and (min-width: 768px) {
    top: 17px;
  }
`,dt=D.svg`
  width: 18px;
  height: 18px;
  stroke: ${n=>n.color};
`;function rr({setParams:n,initialCategory:t,initialRecommended:i}){const[o,e]=p.useState(""),[a,u]=p.useState(""),[l,r]=p.useState(""),[s,c]=p.useState(""),[d,m]=p.useState(!0);p.useEffect(()=>{if(d){m(!1);return}n({search:l,category:o,groupBloodNotAllowed:a})},[l,a,o]);const h=C=>{e(C.value)},v=C=>{u(C.value)},b=()=>o?t.find(C=>C.value===C):"",f=()=>a?i.find(C=>C.value===a):"",x=C=>{c(C.currentTarget.value)},E=()=>{r(""),c("")},F=C=>{C.preventDefault(),r(s)};return g.jsxs(ir,{children:[g.jsxs(nr,{children:[g.jsxs(tr,{onSubmit:F,children:[g.jsx(or,{type:"text",name:"request",pattern:"^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",placeholder:"Search",value:s,onChange:x,required:!0,autoComplete:"off"}),g.jsx(ct,{right:"14px",type:"submit",children:g.jsx(dt,{color:"#EFEDE8",children:g.jsx("use",{href:oe+"#icon-search"})})})]}),s&&g.jsx(ct,{right:"40px",onClick:E,children:g.jsx(dt,{color:"#E6533C",children:g.jsx("use",{href:oe+"#icon-clear"})})})]}),g.jsx(lt,{onChange:h,value:b(),options:t,classNamePrefix:"custom-select",className:"custom-select-container",placeholder:"Categories"}),g.jsx(lt,{onChange:v,value:f(),options:i,classNamePrefix:"custom-select-second",className:"custom-select-second-container",placeholder:"All"})]})}const ar=D.ul`
  width: 100%;
  height: 1268px;
  overflow-y: scroll;
  overflow-x: hidden;

  @media screen and (min-width: 768px) {
    height: 800px;
    display: flex;
    flex-wrap: wrap;
    row-gap: 32px;
    column-gap: 16px;
    

    ::-webkit-scrollbar {
      background-color: var(--default-avatar-fill);
      width: 8px;
      border-radius: 12px;
    }
    ::-webkit-scrollbar-track {
      background-color: rgba(0, 0, 0, 0);
    }
    ::-webkit-scrollbar-thumb {
      border-radius: 12px;
      background-color: var(--orange-1);
    }
  }

  @media screen and (min-width: 1440px) {
    width: 850px;
    height: 487px;
  }
`,ur=D.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,pt=D.p`
  color: rgba(239, 237, 232, 0.30);
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28;

  @media screen and (min-width: 768px) {
  width: 580px;  
  font-size: 16px;
  line-height: 1.5;
  }
`,ft=D.span`
  color: var(--orange);
`,sr=$.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 335px;
  height: 141px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background-color: rgba(239, 237, 232, 0.05);
  padding: 16px;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }

  @media screen and (min-width: 1440px) {
    width: 405px;
  }
`,lr=$.div`
  display: flex;
  justify-content: space-between;
`,cr=$.span`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 7.5px 5px 7.5px;
  border-radius: 4px;
  color: #fff;
  background-color: rgba(239, 237, 232, 0.05);
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`,dr=$.div`
  display: flex;
  align-items: center;
`,pr=$.button`
  display: flex;
  align-items: center;
  gap: 8px;
  border: none;
  background-color: rgba(239, 237, 232, 0);
  color: #e6533c;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28;
  cursor: pointer;
`,fr=$.svg`
  width: 16px;
  height: 16px;
  stroke: #e6533c;
`,hr=$.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 16px;
  row-gap: 8px;
`,mr=$.svg`
  width: 24px;
  height: 24px;
  stroke: #e6533c;
`,gr=$.h2`
  color: #efede8;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.2;
  min-width: 100px;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  line-height: 1.33;
  }
`,Oe=$.p`
  color: rgba(239, 237, 232, 0.4);

  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
`,De=$.span`
  color: #efede8;
  color: #efede8;
`,ht=$.p`
  color: #efede8;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  margin-right: 16px;
`,mt=$.span`
  display: inline-block;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: ${n=>n.color};
  margin-right: 8px;
`,vr=$.div`
  
  display: flex;
  flex-wrap: wrap;
  column-gap: 16px;
`;D.div`;
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;const br=D.div`
  position: absolute;
  width: 335px;
  padding: 48px 0;
  text-align: center;
  border-radius: 12px;
  border: 1px;
  background: linear-gradient(0deg, #10100f, #10100f),
    linear-gradient(0deg, rgba(239, 237, 232, 0.2), rgba(239, 237, 232, 0.2));

  @media screen and (min-width: 768px) {
    width: 430px;
    padding: 64px 0
  }
`,xr=D.button`
  position: absolute;
  top: 14px;
  right: 14px;
  cursor: pointer;
  background-color: rgba(0,0,0,0);
  color: var(--white);
  height: 22px;
  padding: 0;
`,Er=D.img`
  display: inline-block;
  width: 123px;
  height: 97px;
  margin-bottom: 3px;
  @media screen and (min-width: 768px) {
    margin-bottom: 16px;
  }
`,Cr=D.p`
  margin-bottom: 16px;
  font-family: Roboto;
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: left;
  color: var(--white);
  text-align: center;
`,Sr=D.p`
  margin-bottom: 24px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0px;
  text-align: left;
  color: var(--border);
  text-align: center;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }
`,yr=D.span`
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0px;
  text-align: left;
  color: var(--orange);
  text-align: center;
`,Fr=D.button`
  
  margin-bottom: 16px;
  padding: 14px 32px;
  border-radius: 12px;
  background: #E6533C;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 0em;
  text-align: center;
  color: var(--white);

    &:hover {
      background-color: #E6533C;
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 0 2px #E6533C;
    }
`,wr=D(en)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0px;
  text-align: left;
  color: var(--border);
`,Or=D.svg`
  width: 16px;
  height: 16px;
  stroke: var(--input-border);
  margin-left: 8px;
`,Dr="/fs-86-react-node-Sokilskill/assets/3d-food-icon-by-OdafeUI-46dd5bc9.png",Ir=({onClose:n,actualCalories:t})=>{const i=p.useCallback(o=>{o.key==="Escape"&&n()},[n]);return p.useEffect(()=>(document.addEventListener("keydown",i),()=>{document.removeEventListener("keydown",i)}),[i]),g.jsx(g.Fragment,{children:g.jsxs(br,{onClick:o=>o.stopPropagation(),children:[g.jsx(xr,{children:g.jsx(gt,{onClick:n,size:"22px"})}),g.jsx(Er,{src:Dr,alt:""}),g.jsx(Cr,{children:"Well done"}),g.jsxs(Sr,{children:["Calories: ",g.jsx(yr,{children:t})]}),g.jsx(Fr,{type:"button",onClick:n,children:"Next product"}),g.jsxs(wr,{to:"/diary",children:["To the diary",g.jsx(Or,{children:g.jsx("use",{href:oe+"#icon-arrow"})})]})]})})},Ar=D.div`;
  z-index: 9999;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`,Mr=D.div`
  position: absolute;
  width: 335px;
  padding: 48px 24px;
  border-radius: 12px;
  border: 1px;
  background: linear-gradient(0deg, #10100f, #10100f),
    linear-gradient(0deg, rgba(239, 237, 232, 0.2), rgba(239, 237, 232, 0.2));

  @media screen and (min-width: 768px) {
    width: 479px;
  }
`,Vr=D.button`
  background-color: rgba(0, 0, 0, 0);
  position: absolute;
  top: 14px;
  right: 14px;
  cursor: pointer;
  color: var(--white);
  padding: 0px;
  width: 22px;
  height: 22px;
`,Pr=D.p`
  
  font-family: Roboto;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0px;
  text-align: left;
  color: var(--calendar-arrows);

`,Rr=D.span`
  font-family: Roboto;
  font-weight: 400;
  letter-spacing: 0px;
  text-align: left;
  color: var(--white);
  font-size: 12px;
  line-height: 1.5;
  
`,Lr=D.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 24px;

  @media screen and (min-width: 768px) {
    gap: 64px;
  }
`,kr=D.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`,Tr=D.input`
  width: 100%;
  height: 34px;
  padding: 8px 14px 8px 14px;
  border-radius: 12px;
  border: 1px solid var(--orange);
  background: rgba(0, 0, 0, 0);
  color: var(--white);
  outline: none;

  :hover,
  :focus {
    border: 1px solid var(--orange-1);
  }
  @media screen and (min-width: 768px) {
    height: 40px;
  }
`;D.div`
 
  
`;const Br=D.div`
  display: flex;
  align-items: center;
  position: relative;

  @media screen and (min-width: 768px) {
    width: 155px;
    height: 40px;
  }
`,jr=D.span`
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;

  position: absolute;
  top: 8px;
  right: 10px;
  pointer-events: none;
  color: var(--calendar-arrows);

  @media screen and (min-width: 768px) {
    top:11px;
    right: 14px;
  }
`,$r=D.div`
  display: flex;
`,Hr=D.button`
  padding: 12px 32px 12px 32px;
  border-radius: 12px;
  background: var(--orange);
  font-family: Roboto;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.12;
  color: var(--white);
  margin-right: 14px;

  &:hover,
  :focus {
    background-color: var(--orange-1);
    outline: none;
  }

  @media screen and (min-width: 768px) {
    padding: 14px 32px;
    line-height: 1.5; 
  }
`,zr=D.button`
  padding: 11px 35px 11px 35px;
  border-radius: 12px;
  background: rgba(0, 0, 0, 0);
  font-family: Roboto;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.12;
  color: var(--white);
  border: 1px solid var(--border);

  &:hover,
  :focus {
    border: 1px solid var(--orange);
    outline: none;
  }

  @media screen and (min-width: 768px) {
    padding: 13px 39px;
    font-size: 20px;
    line-height: 1.2;
  }
`,Nr=D.div`
    width: 287px;
    height: 34px;
    border-radius: 12px;
    border: 1px solid var(--orange);
    background-color: rgba(0,0,0,0);
    padding: 8px 14px;
    

    @media screen and (min-width: 768px){
    width: 244px;
    height: 40px;
  }

`,Ur=D.p`
color: var(--input-border);

font-family: Roboto;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 1.28;

@media screen and (min-width: 768px){
    font-size: 16px;
    line-height: 1.5;
  }
`,_r=()=>{on.warn("error",{position:"top-center",theme:"dark"})};function Wr(n){let t=n.getDate(),i=n.getMonth()+1;const o=n.getFullYear();return t=t<10?`0${t}`:t,i=i<10?`0${i}`:i,`${o}-${i}-${t}`}const Gr=({onClose:n,open:t,title:i,calories:o,id:e})=>{const[a,u]=p.useState(!1),[l,r]=p.useState(0),[s,c]=p.useState(""),d=`${i[0].toUpperCase()+i.slice(1,111)}`,m=p.useCallback(b=>{b.key==="Escape"&&n()},[n]);p.useEffect(()=>(document.addEventListener("keydown",m),()=>{document.removeEventListener("keydown",m)}),[m]);const h=b=>{const f=Number(b.target.value)*o/100;f&&r(f),c(b.target.value)},v=async b=>{b.preventDefault();const f={date:Wr(new Date),productData:{productId:`${e}`,amount:Number(s)}};nn(f).then(x=>{u(!0)}).catch(x=>{_r()})};return g.jsx(g.Fragment,{children:g.jsxs(Ar,{onClick:n,children:[g.jsx(tn,{}),a?g.jsx(Ir,{onClose:n,actualCalories:l}):g.jsxs(Mr,{onClick:b=>b.stopPropagation(),children:[g.jsx(Vr,{children:g.jsx(gt,{onClick:n,size:"22px"})}),g.jsxs(Lr,{name:"addProductForm",onSubmit:v,children:[g.jsxs(kr,{children:[g.jsx(Nr,{children:g.jsx(Ur,{children:d})}),g.jsxs(Br,{children:[g.jsx(Tr,{type:"text",value:s,onChange:h,required:!0,pattern:"[0-9]{1,5}",min:1}),g.jsx(jr,{children:"grams"})]}),g.jsxs(Pr,{children:["Calories: "," ",g.jsx(Rr,{children:l})]})]}),g.jsxs($r,{children:[g.jsx(Hr,{type:"submit",children:"Add to diary"}),g.jsx(zr,{type:"button",onClick:n,children:"Cancel"})]})]})]})]})})};let Ve;const Yr=()=>{window.screen.width<1440?Ve=!0:Ve=!1};Yr();function qr({productItem:n}){const[t,i]=p.useState(!1),o=()=>{i(!1),document.body.style.overflow="auto"},{weight:e,calories:a,category:u,title:l,groupBloodNotAllowed:r,_id:s}=n,c=vt(h=>h.profile.profile.blood),d=()=>{if(l){const h=l[0].toUpperCase();let v;return Ve?(v=`${h+l.slice(1,19)}`,l.length>19?`${v}...`:v):(v=`${h+l.slice(1,24)}`,l.length>24?`${v}...`:v)}return""},m=()=>{if(u){const v=`${u[0].toUpperCase()+u.slice(1,10)}`;return u.length>10?`${v}...`:v}return""};return g.jsxs(g.Fragment,{children:[g.jsxs(sr,{children:[g.jsxs(lr,{children:[g.jsx(cr,{children:"DIET"}),g.jsxs(dr,{children:[r[c]?g.jsxs(g.Fragment,{children:[g.jsx(mt,{color:"#E9101D"}),g.jsx(ht,{children:"Not recommended"})]}):g.jsxs(g.Fragment,{children:[g.jsx(mt,{color:"#419B09"}),g.jsx(ht,{children:"Recommended"})]}),g.jsxs(pr,{onClick:()=>i(!0),children:["Add",g.jsx(fr,{children:g.jsx("use",{href:oe+"#icon-arrow"})})]})]})]}),g.jsxs(hr,{children:[g.jsx(mr,{children:g.jsx("use",{href:oe+"#icon-icon"})}),g.jsx(gr,{children:d()}),g.jsxs(vr,{children:[g.jsxs(Oe,{children:["Calories: ",g.jsxs(De,{children:[" ",a]})]}),g.jsxs(Oe,{children:["Category: ",g.jsx(De,{children:m()})]}),g.jsxs(Oe,{children:["Weight: ",g.jsx(De,{children:e})]})]})]})]}),t&&g.jsx(Gr,{onClose:o,title:l,calories:a,id:s})]})}function Kr({products:n,isFetching:t}){return g.jsx(ar,{className:"custom-list",children:n.length===0&&!t?g.jsxs(ur,{children:[g.jsxs(pt,{children:[g.jsx(ft,{children:"Sorry, no results were found "}),"for the product filters you selected. You may want to consider other search options to find the product you want. Our range is wide and you have the opportunity to find more options that suit your needs."]}),g.jsx(pt,{children:g.jsx(ft,{children:"Try changing the search parameters."})})]}):n.map(i=>g.jsx(qr,{productItem:i},i._id))})}const Xr="/fs-86-react-node-Sokilskill/assets/side-view-people-training-gym-071babdb.jpg",Zr="/fs-86-react-node-Sokilskill/assets/side-view-people-training-gym@max-9cb7ca4d.jpg",Jr=[{id:"fdg12sdgdfdffsfd",value:"all",label:"All"},{id:"fdg12234sdfsdgsfd",value:"recommended",label:"Recommended"},{id:"fdg12asdf123gdfsdgsfd",value:"not-recommended",label:"Not recommended"}];function na(){vt(E=>E.auth.token);const[n,t]=p.useState(""),[i,o]=p.useState(""),[e,a]=p.useState(""),[u,l]=p.useState(1),[r,s]=p.useState(!1),[c,d]=p.useState(0),[m,h]=p.useState([]),[v,b]=p.useState([]);p.useEffect(()=>{const E=document.querySelector(".custom-list");return E.addEventListener("scroll",f),function(){E.removeEventListener("scroll",f)}},[c,m]),p.useEffect(()=>{rn().then(F=>{b(F.data)}),Ne({params:{page:u,category:n,groupBloodNotAllowed:i,search:e}}).then(({data:F})=>{h(F.data),d(F.total),l(2)})},[]),p.useEffect(()=>{r&&Ne({params:{page:u,category:n,groupBloodNotAllowed:i,search:e}}).then(({data:F})=>{h([...m,...F.data]),d(F.total),l(C=>C+1)}).finally(()=>s(!1))},[r]);const f=E=>{E.target.scrollHeight-(E.target.scrollTop+window.innerHeight)<600&&m.length<c&&s(!0)},x=E=>{h([]),t(E.category),o(E.groupBloodNotAllowed),a(E.search),l(1),s(!0),d(0)};return g.jsx(fn,{bgi:[Xr,Zr],children:g.jsxs("div",{className:"container",children:[g.jsxs(mn,{children:[g.jsx(hn,{children:"Products"}),g.jsx(rr,{setParams:x,initialCategory:v,initialRecommended:Jr})]}),g.jsx(Kr,{products:m,isFetching:r})]})})}export{na as default};
