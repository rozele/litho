(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{161:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return g}));var a=t(0),i=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=i.a.createContext({}),p=function(e){var n=i.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},b=function(e){var n=p(e.components);return i.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},m=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=p(t),m=a,g=b["".concat(o,".").concat(m)]||b[m]||d[m]||r;return t?i.a.createElement(g,s(s({ref:n},l),{},{components:t})):i.a.createElement(g,s({ref:n},l))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<r;l++)o[l]=t[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},86:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return s})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return p}));var a=t(2),i=t(6),r=(t(0),t(161)),o={id:"working-ranges",title:"Advanced: Prefetch and pagination"},s={unversionedId:"sections/working-ranges",id:"sections/working-ranges",isDocsHomePage:!1,title:"Advanced: Prefetch and pagination",description:"The Working Ranges API provides the means to perform certain complex operations such as data prefetching or cache warming. It extends Sections with a set of appearance and visibility events when a Section enters and exits a given range of positions inside and outside the screen viewport. For example, you can perform a network request to start prefetching data as the last element of a list approaches the viewport.",source:"@site/../docs/sections/working-ranges.md",slug:"/sections/working-ranges",permalink:"/docs/sections/working-ranges",editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/sections/working-ranges.md",version:"current",sidebar:"mainSidebar",previous:{title:"API \ud83d\udcc4: annotations, events and lifecycles",permalink:"/docs/sections/api-overview"},next:{title:"Advanced: Granular Dependency Injection",permalink:"/docs/sections/services"}},c=[{value:"Defining a range",id:"defining-a-range",children:[]},{value:"Receiving Range events",id:"receiving-range-events",children:[]}],l={rightToc:c};function p(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The Working Ranges API provides the means to perform certain complex operations such as data prefetching or cache warming. It extends Sections with a set of appearance and visibility events when a Section enters and exits a given range of positions inside and outside the screen viewport. For example, you can perform a network request to start prefetching data as the last element of a list approaches the viewport."),Object(r.b)("p",null,"The API is split in two parts: one defines what a range is, and the other are the Events triggered when Sections interact with the defined ranges."),Object(r.b)("h2",{id:"defining-a-range"},"Defining a range"),Object(r.b)("p",null,"To use the working range API, you first need to define your own working range class that implements the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"pathname:///javadoc/com/facebook/litho/WorkingRange.html"}),Object(r.b)("inlineCode",{parentName:"a"},"WorkingRange"))," interface. This interface provides two main functions: ",Object(r.b)("inlineCode",{parentName:"p"},"shouldEnterRange")," and ",Object(r.b)("inlineCode",{parentName:"p"},"shouldExitRange"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"public class AtLeastPartiallyVisibleRange implements WorkingRange { ... }\n")),Object(r.b)("p",null,"For both functions the parameter ",Object(r.b)("inlineCode",{parentName:"p"},"position")," is the position of the item in the list, and the ",Object(r.b)("inlineCode",{parentName:"p"},"firstVisibleIndex")," / ",Object(r.b)("inlineCode",{parentName:"p"},"lastVisibleIndex")," / ",Object(r.b)("inlineCode",{parentName:"p"},"firstFullyVisibleIndex")," / ",Object(r.b)("inlineCode",{parentName:"p"},"lastFullyVisibleIndex")," parameters are current visible range of the viewport."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"shouldEnterRange")," is used to check if the ",Object(r.b)("strong",{parentName:"p"},"item is within a user-defined range"),". In this example we check that means that the position is at least partially visible on screen."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"@Override\npublic boolean shouldEnterRange(\n    int position,\n    int firstVisibleIndex,\n    int lastVisibleIndex,\n    int firstFullyVisibleIndex,\n    int lastFullyVisibleIndex) {\n  return position >= firstVisibleIndex\n    && position <= lastVisibleIndex;\n}\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"shouldExitRange")," is used to check if the ",Object(r.b)("strong",{parentName:"p"},"item is outside a user-defined the range"),". In this example we check that means that the position completely not visible, not even partially."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"@Override\npublic boolean shouldExitRange(\n    int position,\n    int firstVisibleIndex,\n    int lastVisibleIndex,\n    int firstFullyVisibleIndex,\n    int lastFullyVisibleIndex) {\n  return position < firstVisibleIndex\n    || position > lastVisibleIndex;\n}\n")),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Compared to the working ranges in ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://componentkit.org/"}),"ComponentKit"),", the granularity in ComponentKit is pixels whereas in Litho the granularity is positions. This means we can only tell the component if it's in the range instead of how many pixels are in the range."))),Object(r.b)("h2",{id:"receiving-range-events"},"Receiving Range events"),Object(r.b)("p",null,"After defining a working range, now we implement the callback functions inside the components that should receive the exit and enter range events on the ",Object(r.b)("inlineCode",{parentName:"p"},"@LayoutSpec")," that contains our ",Object(r.b)("inlineCode",{parentName:"p"},"RecyclerComponent"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"@LayoutSpec\nclass ListContainerComponentSpec {\n\n  @OnRegisterRanges\n  static void registerWorkingRanges(\n      ComponentContext c,\n      @Prop AtLeastPartiallyVisibleRange myRange) {\n    ListContainerComponent.registerPrefetchWorkingRange(c, myRange);\n  }\n}\n")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"@OnEnteredRange")," event is triggered ",Object(r.b)("strong",{parentName:"p"},"when the component enters the range"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'@OnEnteredRange(name = "prefetch")\nstatic void onEnteredWorkingRange(\n    ComponentContext c,\n    @Prop MyService service) {\n  service.startPrefetch();\n}\n')),Object(r.b)("p",null,"And the ",Object(r.b)("inlineCode",{parentName:"p"},"@OnExitedRange")," event is triggered ",Object(r.b)("strong",{parentName:"p"},"when the component exits the range"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'@OnExitedRange(name = "prefetch")\nstatic void onExitedWorkingRange(\n    ComponentContext c,\n    @Prop MyService service) {\n  service.cancelAllPrefetches();\n}\n')),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},'The name field in the annotation is used to allow multiple range events for a single layout. For example "paginate" becomes ',Object(r.b)("inlineCode",{parentName:"p"},"registerPaginateWorkingRange"),"."))))}p.isMDXComponent=!0}}]);