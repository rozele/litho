(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{104:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(2),o=n(6),i=(n(0),n(161)),a={id:"uses",title:"Uses"},c={unversionedId:"uses",id:"uses",isDocsHomePage:!1,title:"Uses",description:"Litho's primary use case is RecyclerViews with complex content as it delivers",source:"@site/../docs/uses.md",slug:"/uses",permalink:"/docs/uses",editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/uses.md",version:"current"},s=[],u={rightToc:s};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Litho's primary use case is ",Object(i.b)("em",{parentName:"p"},"RecyclerViews")," with complex content as it delivers\ngreat scroll performance even with complex items with a wide variety of\ncontent, which is quite challenging to achieve using traditional Android views."),Object(i.b)("p",null,"You might also consider adopting Litho simply for its declarative API for\nbuilding user interfaces. Litho's functional programming model with a\nunidirectional data flow tends to be much easier to reason about even as your\nproduct gets more complex."),Object(i.b)("p",null,"Very dynamic UIs with animations and gestures are currently hard to implement\nin Litho. New APIs for layout transitions and gestures in Litho are coming\nsoon."))}l.isMDXComponent=!0},161:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=r,d=p["".concat(a,".").concat(m)]||p[m]||f[m]||i;return n?o.a.createElement(d,c(c({ref:t},u),{},{components:n})):o.a.createElement(d,c({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);