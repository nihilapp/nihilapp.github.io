(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[949],{7913:function(e,t,r){"use strict";var n=r(5696);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,a=(o=r(7294))&&o.__esModule?o:{default:o},l=r(2199),c=r(1587),u=r(7215);var i={};function f(e,t,r,n){if(e&&l.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;i[t+"%"+r+(o?"%"+o:"")]=!0}}var s=function(e){var t,r=!1!==e.prefetch,o=c.useRouter(),s=a.default.useMemo((function(){var t=l.resolveHref(o,e.href,!0),r=n(t,2),a=r[0],c=r[1];return{href:a,as:e.as?l.resolveHref(o,e.as):c||a}}),[o,e.href,e.as]),d=s.href,p=s.as,v=a.default.useRef(d),y=a.default.useRef(p),h=e.children,m=e.replace,g=e.shallow,b=e.scroll,E=e.locale;"string"===typeof h&&(h=a.default.createElement("a",null,h));var w=(t=a.default.Children.only(h))&&"object"===typeof t&&t.ref,O=u.useIntersection({rootMargin:"200px"}),C=n(O,3),k=C[0],j=C[1],L=C[2],M=a.default.useCallback((function(e){y.current===p&&v.current===d||(L(),y.current=p,v.current=d),k(e),w&&("function"===typeof w?w(e):"object"===typeof w&&(w.current=e))}),[p,w,d,L,k]);a.default.useEffect((function(){var e=j&&r&&l.isLocalURL(d),t="undefined"!==typeof E?E:o&&o.locale,n=i[d+"%"+p+(t?"%"+t:"")];e&&!n&&f(o,d,p,{locale:t})}),[p,d,j,E,r,o]);var _={ref:M,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,a,c,u){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(r))&&(e.preventDefault(),t[o?"replace":"push"](r,n,{shallow:a,locale:u,scroll:c}))}(e,o,d,p,m,g,b,E)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),l.isLocalURL(d)&&f(o,d,p,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var x="undefined"!==typeof E?E:o&&o.locale,N=o&&o.isLocaleDomain&&l.getDomainLocale(p,x,o&&o.locales,o&&o.domainLocales);_.href=N||l.addBasePath(l.addLocale(p,x,o&&o.defaultLocale))}return a.default.cloneElement(t,_)};t.default=s,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},7215:function(e,t,r){"use strict";var n=r(5696);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,i=e.disabled||!l,f=o.useRef(),s=o.useState(!1),d=n(s,2),p=d[0],v=d[1],y=o.useState(t?t.current:null),h=n(y,2),m=h[0],g=h[1],b=o.useCallback((function(e){f.current&&(f.current(),f.current=void 0),i||p||e&&e.tagName&&(f.current=function(e,t,r){var n=function(e){var t,r={root:e.root||null,margin:e.rootMargin||""},n=u.find((function(e){return e.root===r.root&&e.margin===r.margin}));n?t=c.get(n):(t=c.get(r),u.push(r));if(t)return t;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return c.set(r,t={id:r,observer:a,elements:o}),t}(r),o=n.id,a=n.observer,l=n.elements;return l.set(e,t),a.observe(e),function(){if(l.delete(e),a.unobserve(e),0===l.size){a.disconnect(),c.delete(o);var t=u.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&u.splice(t,1)}}}(e,(function(e){return e&&v(e)}),{root:m,rootMargin:r}))}),[i,m,r,p]),E=o.useCallback((function(){v(!1)}),[]);return o.useEffect((function(){if(!l&&!p){var e=a.requestIdleCallback((function(){return v(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[p]),o.useEffect((function(){t&&g(t.current)}),[t]),[b,p,E]};var o=r(7294),a=r(8065),l="undefined"!==typeof IntersectionObserver;var c=new Map,u=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},1664:function(e,t,r){e.exports=r(7913)},8357:function(e,t,r){"use strict";r.d(t,{w_:function(){return i}});var n=r(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=n.createContext&&n.createContext(o),l=function(){return l=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},l.apply(this,arguments)},c=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};function u(e){return e&&e.map((function(e,t){return n.createElement(e.tag,l({key:t},e.attr),u(e.child))}))}function i(e){return function(t){return n.createElement(f,l({attr:l({},e.attr)},t),u(e.child))}}function f(e){var t=function(t){var r,o=e.attr,a=e.size,u=e.title,i=c(e,["attr","size","title"]),f=a||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,i,{className:r,style:l(l({color:e.color||t.color},t.style),e.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),u&&n.createElement("title",null,u),e.children)};return void 0!==a?n.createElement(a.Consumer,null,(function(e){return t(e)})):t(o)}}}]);