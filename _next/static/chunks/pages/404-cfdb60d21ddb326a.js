(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[197],{7942:function(e,n,t){"use strict";var r=t(3848);n.default=void 0;var o,a=(o=t(7294))&&o.__esModule?o:{default:o},i=t(4957),l=t(9898),c=t(639);var f={};function u(e,n,t,r){if(e&&i.isLocalURL(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;f[n+"%"+t+(o?"%"+o:"")]=!0}}var s=function(e){var n,t=!1!==e.prefetch,o=l.useRouter(),s=a.default.useMemo((function(){var n=i.resolveHref(o,e.href,!0),t=r(n,2),a=t[0],l=t[1];return{href:a,as:e.as?i.resolveHref(o,e.as):l||a}}),[o,e.href,e.as]),p=s.href,d=s.as,v=e.children,h=e.replace,g=e.shallow,m=e.scroll,x=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var b=(n=a.default.Children.only(v))&&"object"===typeof n&&n.ref,w=c.useIntersection({rootMargin:"200px"}),y=r(w,2),_=y[0],k=y[1],E=a.default.useCallback((function(e){_(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,_]);a.default.useEffect((function(){var e=k&&t&&i.isLocalURL(p),n="undefined"!==typeof x?x:o&&o.locale,r=f[p+"%"+d+(n?"%"+n:"")];e&&!r&&u(o,p,d,{locale:n})}),[d,p,k,x,t,o]);var L={ref:E,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,a,l,c){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(t))&&(e.preventDefault(),null==l&&r.indexOf("#")>=0&&(l=!1),n[o?"replace":"push"](t,r,{shallow:a,locale:c,scroll:l}))}(e,o,p,d,h,g,m,x)},onMouseEnter:function(e){n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),i.isLocalURL(p)&&u(o,p,d,{priority:!0})}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var M="undefined"!==typeof x?x:o&&o.locale,C=o&&o.isLocaleDomain&&i.getDomainLocale(d,M,o&&o.locales,o&&o.domainLocales);L.href=C||i.addBasePath(i.addLocale(d,M,o&&o.defaultLocale))}return a.default.cloneElement(n,L)};n.default=s},639:function(e,n,t){"use strict";var r=t(3848);Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!i,c=o.useRef(),f=o.useState(!1),u=r(f,2),s=u[0],p=u[1],d=o.useCallback((function(e){c.current&&(c.current(),c.current=void 0),t||s||e&&e.tagName&&(c.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=l.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return l.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,a=r.observer,i=r.elements;return i.set(e,n),a.observe(e),function(){i.delete(e),a.unobserve(e),0===i.size&&(a.disconnect(),l.delete(o))}}(e,(function(e){return e&&p(e)}),{rootMargin:n}))}),[t,n,s]);return o.useEffect((function(){if(!i&&!s){var e=a.requestIdleCallback((function(){return p(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[s]),[d,s]};var o=t(7294),a=t(6286),i="undefined"!==typeof IntersectionObserver;var l=new Map},9206:function(e,n,t){"use strict";t.r(n);var r=t(7294),o=t(1172),a=t(1664),i=t(5706),l=t(6478),c=t(5602);n.default=function(){var e=(0,o.iv)("margin-top:50px;&>h2{padding:20px 10px;color:#ffffff;background-color:#333333;border-radius:10px;text-align:center;line-height:1;margin-bottom:40px;font-weight:900;letter-spacing:-1px;}&>p{text-align:center;color:#333333;font-weight:500;letter-spacing:-1px;&>a{display:inline-block;margin-top:20px;padding:10px;line-height:1;border-radius:10px;background-color:#33333330;color:#555555;&:hover{color:#ffffff;background-color:#333333;}}}@media all and (min-width: 1024px){&>h2{font-size:",c.p[6],";}&>p{font-size:",c.p[3],";}}@media all and (min-width: 768px) and (max-width: 1023px){&>h2{font-size:",c.p[5],";}&>p{font-size:",c.p[3],";}}@media all and (min-width: 480px) and (max-width: 767px){&>h2{font-size:",c.p[5],";}&>p{font-size:",c.p[2],";}}@media all and (max-width: 479px){&>h2{font-size:",c.p[4],";}&>p{font-size:",c.p[2],";}}","",""),n=(0,l.h)({title:"404",url:"/404"});return(0,o.tZ)(r.Fragment,null,(0,o.tZ)(i.Z,{meta:n},(0,o.tZ)("div",{id:"notpound-page",css:e},(0,o.tZ)("h2",null,"404 \uc5d0\ub7ec"),(0,o.tZ)("p",null,"\ud398\uc774\uc9c0\ub97c \ucc3e\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,o.tZ)("p",null,(0,o.tZ)(a.default,{href:"/",passHref:!0},(0,o.tZ)("a",null,"\ud648\uc73c\ub85c"))))))}},9014:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/404",function(){return t(9206)}])},1664:function(e,n,t){e.exports=t(7942)}},function(e){e.O(0,[445,37,888,774,179],(function(){return n=9014,e(e.s=n);var n}));var n=e.O();_N_E=n}]);