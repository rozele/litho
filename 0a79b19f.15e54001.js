(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{161:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=i.a.createContext({}),l=function(e){var t=i.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return i.a.createElement(d.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(n),u=a,m=p["".concat(r,".").concat(u)]||p[u]||b[u]||o;return n?i.a.createElement(m,c(c({ref:t},d),{},{components:n})):i.a.createElement(m,c({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var d=2;d<o;d++)r[d]=n[d];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},59:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var a=n(2),i=n(6),o=(n(0),n(161)),r={id:"transition-definitions",title:"Advanced: More ways to define transitions"},c={unversionedId:"animations/transition-definitions",id:"animations/transition-definitions",isDocsHomePage:!1,title:"Advanced: More ways to define transitions",description:"Moved from old website without any change.",source:"@site/../docs/animations/transition-definitions.md",slug:"/animations/transition-definitions",permalink:"/docs/animations/transition-definitions",editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/animations/transition-definitions.md",version:"current",sidebar:"mainSidebar",previous:{title:"Customizing Transitions",permalink:"/docs/animations/transition-choreography"},next:{title:"Advanced: Transitions key scoping",permalink:"/docs/animations/transition-key-types"}},s=[{value:"@State Arguments",id:"state-arguments",children:[]},{value:"@Prop <code>Diff&lt;T&gt;</code> and @State <code>Diff&lt;T&gt;</code>",id:"prop-difft-and-state-difft",children:[]},{value:"@OnUpdateStateWithTransition",id:"onupdatestatewithtransition",children:[]}],d={rightToc:s};function l(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"admonition admonition-danger alert alert--danger"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"Content needs to be updated")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Moved from old website without any change.\nT81099238"))),Object(o.b)("h3",{id:"state-arguments"},"@State Arguments"),Object(o.b)("p",null,"Litho allows ",Object(o.b)("inlineCode",{parentName:"p"},"@OnCreateTransition")," methods to take ",Object(o.b)("inlineCode",{parentName:"p"},"@State")," arguments if the Transition definition should take value of the state into account."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'@OnCreateTransition\nstatic Transition onCreateTransition(\n      ComponentContext c, @State boolean animationsDisabled) {\n  if (animationsDisabled) {\n    return null;\n  }\n\n  return Transition.create("square").animate(AnimatedProperties.X);\n}\n')),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"In order to make this happen, the framework needs to postpone collection of ",Object(o.b)("inlineCode",{parentName:"p"},"Transition"),"s until ",Object(o.b)("inlineCode",{parentName:"p"},"MountState")," (always on UI thread), while normally this would be done on ",Object(o.b)("inlineCode",{parentName:"p"},"LayoutState")," (which may be processed on a background thread)."))),Object(o.b)("h3",{id:"prop-difft-and-state-difft"},"@Prop ",Object(o.b)("inlineCode",{parentName:"h3"},"Diff<T>")," and @State ",Object(o.b)("inlineCode",{parentName:"h3"},"Diff<T>")),Object(o.b)("p",null,"If your transitions should depend not only on the actual (updated) value of a ",Object(o.b)("inlineCode",{parentName:"p"},"@Prop")," or a ",Object(o.b)("inlineCode",{parentName:"p"},"@State"),", but rather ont the value change, you could use a generic ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"pathname:///javadoc/com/facebook/litho/Diff.html"}),"Diff")," for arguments, so you get access to both previous and next ",Object(o.b)("inlineCode",{parentName:"p"},"@State"),"/",Object(o.b)("inlineCode",{parentName:"p"},"@Prop")," values."),Object(o.b)("p",null,"Here's how we could change one of our samples to only animate expanding, but not collapsing."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"@OnCreateTransition\nstatic Transition onCreateTransition(ComponentContext c, @Prop Diff<Boolean> expanded) {\n  boolean isExpanding = !expanded.getPrevious() && expanded.getNext();\n  if (isExpanding) {\n    return Transition.allLayout().animator(ANIMATOR);\n  } else {\n    return null;\n  }\n}\n")),Object(o.b)("h3",{id:"onupdatestatewithtransition"},"@OnUpdateStateWithTransition"),Object(o.b)("p",null,"To define transitions that should run conditionally under certain circumstances, you can use ",Object(o.b)("inlineCode",{parentName:"p"},"@OnUpdateStateWithTranstion")," method."),Object(o.b)("p",null,"It works as regular ",Object(o.b)("inlineCode",{parentName:"p"},"@OnUpdateState")," methods, but also returns ",Object(o.b)("inlineCode",{parentName:"p"},"Transition")," that should be run whenever the method was invoked.\nAnother implementation for the above sample using ",Object(o.b)("inlineCode",{parentName:"p"},"@OnUpdateStateWithTransition")," may look like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"@OnEvent(ClickEvent.class)\nstatic void onClick(ComponentContext c) {\n  MyComponent.toggleWithTransition(c);\n}\n\n@OnUpdateStateWithTransition\nstatic Transition toggle(StateValue<Boolean> expanded) {\n  expanded.set(!expanded.get()); // Updating state value\n\n  boolean isExpanding = expanded.get();\n  if (isExpanding) {\n    return Transition.allLayout().animator(ANIMATOR);\n  } else {\n    return null;\n  }\n}\n")))}l.isMDXComponent=!0}}]);