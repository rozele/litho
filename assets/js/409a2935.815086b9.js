"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7477],{15680:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>c,MDXProvider:()=>m,mdx:()=>f,useMDXComponents:()=>p,withMDXComponents:()=>d});var i=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(){return r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},r.apply(this,arguments)}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=i.createContext({}),d=function(e){return function(n){var t=p(n.components);return i.createElement(e,r({},n,{components:t}))}},p=function(e){var n=i.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},m=function(e){var n=p(e.components);return i.createElement(c.Provider,{value:n},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},h=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),m=a,g=d["".concat(o,".").concat(m)]||d[m]||u[m]||r;return t?i.createElement(g,s(s({ref:n},c),{},{components:t})):i.createElement(g,s({ref:n},c))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=h;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[g]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<r;c++)o[c]=t[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}h.displayName="MDXCreateElement"},24061:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var i=t(58168),a=t(98587),r=(t(96540),t(15680)),o=["components"],s={id:"working-ranges",title:"Prefetch and Pagination"},l=void 0,c={unversionedId:"sections/working-ranges",id:"sections/working-ranges",title:"Prefetch and Pagination",description:"This page covers the older Java codegen-based Sections API. If using the Kotlin Lazy Collection API, refer to the interactions docs for Lazy Collection for similar relevant content.",source:"@site/../docs/sections/working-ranges.md",sourceDirName:"sections",slug:"/sections/working-ranges",permalink:"/docs/sections/working-ranges",draft:!1,editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/sections/working-ranges.md",tags:[],version:"current",frontMatter:{id:"working-ranges",title:"Prefetch and Pagination"},sidebar:"mainSidebar",previous:{title:"Horizontal Scrolling and Measurement",permalink:"/docs/sections/hscrolls"},next:{title:"Scrolling and communicating with the UI",permalink:"/docs/sections/communicating-with-the-ui"}},d={},p=[{value:"Defining a range",id:"defining-a-range",level:2},{value:"Using the shouldEnterRange Function",id:"using-the-shouldenterrange-function",level:3},{value:"Using the shouldExitRange Function",id:"using-the-shouldexitrange-function",level:3},{value:"Receiving Range Events",id:"receiving-range-events",level:2}],m={toc:p},g="wrapper";function u(e){var n=e.components,t=(0,a.A)(e,o);return(0,r.mdx)(g,(0,i.A)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("admonition",{type:"caution"},(0,r.mdx)("p",{parentName:"admonition"},"This page covers the older Java codegen-based Sections API. If using the Kotlin Lazy Collection API, refer to the ",(0,r.mdx)("a",{parentName:"p",href:"/docs/kotlin/lazycollections/lazycollections-interactions"},"interactions docs for Lazy Collection")," for similar relevant content.")),(0,r.mdx)("p",null,"The Working Ranges API provides the means to perform complex operations such as data prefetching and cache warming."),(0,r.mdx)("p",null,"The API extends Sections with a set of appearance and visibility events when a Section enters and exits a given range of positions inside and outside the screen viewport. For example, a network request can be performed to start prefetching data as the last element of a list approaches the viewport."),(0,r.mdx)("p",null,"The API is split into two parts:"),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("a",{parentName:"li",href:"#defining-a-range"},"Defining a range")," - uses a WorkingRange class."),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("a",{parentName:"li",href:"#receiving-range-events"},"Receiving range events")," - events triggered when Sections interact with the defined ranges.")),(0,r.mdx)("h2",{id:"defining-a-range"},"Defining a range"),(0,r.mdx)("p",null,"To use the Working Range API, first, define a WorkingRange class that implements the ",(0,r.mdx)("a",{parentName:"p",href:"pathname:///javadoc/com/facebook/litho/WorkingRange.html"},"WorkingRange")," interface. This is achieved with the following:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},"public class AtLeastPartiallyVisibleRange implements WorkingRange { ... }\n")),(0,r.mdx)("p",null,"This interface provides two main functions: ",(0,r.mdx)("a",{parentName:"p",href:"#using-the-shouldenterrange-function"},"shouldEnterRange")," and ",(0,r.mdx)("a",{parentName:"p",href:"#using-the-shouldexitrange-function"},"shouldExitRange"),"."),(0,r.mdx)("p",null,"For both functions, the parameter ",(0,r.mdx)("inlineCode",{parentName:"p"},"position")," is the position of the item in the list. The ",(0,r.mdx)("inlineCode",{parentName:"p"},"firstVisibleIndex")," / ",(0,r.mdx)("inlineCode",{parentName:"p"},"lastVisibleIndex")," / ",(0,r.mdx)("inlineCode",{parentName:"p"},"firstFullyVisibleIndex")," / ",(0,r.mdx)("inlineCode",{parentName:"p"},"lastFullyVisibleIndex")," parameters are for the current visible range of the viewport."),(0,r.mdx)("h3",{id:"using-the-shouldenterrange-function"},"Using the shouldEnterRange Function"),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"shouldEnterRange")," is used to check if the item is ",(0,r.mdx)("strong",{parentName:"p"},"within a user-defined range"),". The following example checks if that means the position is at least partially visible on screen:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},"@Override\npublic boolean shouldEnterRange(\n    int position,\n    int firstVisibleIndex,\n    int lastVisibleIndex,\n    int firstFullyVisibleIndex,\n    int lastFullyVisibleIndex) {\n  return position >= firstVisibleIndex\n    && position <= lastVisibleIndex;\n}\n")),(0,r.mdx)("h3",{id:"using-the-shouldexitrange-function"},"Using the shouldExitRange Function"),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"shouldExitRange")," is used to check if the item is ",(0,r.mdx)("strong",{parentName:"p"},"outside of a user-defined range"),". The following example checks if that means the position is not visible, not even partially:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},"@Override\npublic boolean shouldExitRange(\n    int position,\n    int firstVisibleIndex,\n    int lastVisibleIndex,\n    int firstFullyVisibleIndex,\n    int lastFullyVisibleIndex) {\n  return position < firstVisibleIndex\n    || position > lastVisibleIndex;\n}\n")),(0,r.mdx)("admonition",{type:"caution"},(0,r.mdx)("p",{parentName:"admonition"},"For working ranges, the granularity in the ",(0,r.mdx)("a",{parentName:"p",href:"https://componentkit.org/"},"ComponentKit")," is measured with pixels whereas with Litho its positions. This means it's only possible to tell if the component is within a range of positions instead of how many pixels are in the range.")),(0,r.mdx)("h2",{id:"receiving-range-events"},"Receiving Range Events"),(0,r.mdx)("p",null,"After defining a working range, the callback functions are implemented inside the components that should receive the exit and enter range events on the ",(0,r.mdx)("inlineCode",{parentName:"p"},"@LayoutSpec")," that contains the ",(0,r.mdx)("inlineCode",{parentName:"p"},"RecyclerComponent"),", as follows:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},"@LayoutSpec\nclass ListContainerComponentSpec {\n\n  @OnRegisterRanges\n  static void registerWorkingRanges(\n      ComponentContext c,\n      @Prop AtLeastPartiallyVisibleRange myRange) {\n    ListContainerComponent.registerPrefetchWorkingRange(c, myRange);\n  }\n}\n")),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"@OnEnteredRange")," event is triggered when the component ",(0,r.mdx)("strong",{parentName:"p"},"enters")," the range:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},'@OnEnteredRange(name = "prefetch")\nstatic void onEnteredWorkingRange(\n    ComponentContext c,\n    @Prop MyService service) {\n  service.startPrefetch();\n}\n')),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"@OnExitedRange")," event is triggered when the component ",(0,r.mdx)("strong",{parentName:"p"},"exits")," the range:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},'@OnExitedRange(name = "prefetch")\nstatic void onExitedWorkingRange(\n    ComponentContext c,\n    @Prop MyService service) {\n  service.cancelAllPrefetches();\n}\n')),(0,r.mdx)("admonition",{type:"tip"},(0,r.mdx)("p",{parentName:"admonition"},"The name field in the annotation is used to enable multiple range events for a single layout. For example, 'paginate' becomes ",(0,r.mdx)("inlineCode",{parentName:"p"},"registerPaginateWorkingRange"),".")))}u.isMDXComponent=!0}}]);