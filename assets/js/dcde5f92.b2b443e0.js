"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1293],{15680:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>m,MDXProvider:()=>p,mdx:()=>y,useMDXComponents:()=>c,withMDXComponents:()=>u});var o=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},i.apply(this,arguments)}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=o.createContext({}),u=function(e){return function(t){var n=c(t.components);return o.createElement(e,i({},t,{components:n}))}},c=function(e){var t=o.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(m.Provider,{value:t},e.children)},s="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,m=d(e,["components","mdxType","originalType","parentName"]),u=c(n),p=a,s=u["".concat(r,".").concat(p)]||u[p]||h[p]||i;return n?o.createElement(s,l(l({ref:t},m),{},{components:n})):o.createElement(s,l({ref:t},m))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=f;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[s]="string"==typeof e?e:a,r[1]=l;for(var m=2;m<i;m++)r[m]=n[m];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},62921:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>m,toc:()=>c});var o=n(58168),a=n(98587),i=(n(96540),n(15680)),r=["components"],l={id:"architecture-overview",title:"Architecture Overview"},d=void 0,m={unversionedId:"architecture-overview",id:"architecture-overview",title:"Architecture Overview",description:"Core Concepts",source:"@site/../docs/architecture-overview.md",sourceDirName:".",slug:"/architecture-overview",permalink:"/docs/architecture-overview",draft:!1,editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/architecture-overview.md",tags:[],version:"current",frontMatter:{id:"architecture-overview",title:"Architecture Overview"}},u={},c=[{value:"Core Concepts",id:"core-concepts",level:2},{value:"Litho Lesson: Component to Screen",id:"litho-lesson-component-to-screen",level:2},{value:"Layout",id:"layout",level:2},{value:"Initializing Layout",id:"initializing-layout",level:3},{value:"Calculating Layout",id:"calculating-layout",level:3},{value:"Layout Diffing",id:"layout-diffing",level:3},{value:"Mount",id:"mount",level:2},{value:"Mount Diffing",id:"mount-diffing",level:3}],p={toc:c},s="wrapper";function h(e){var t=e.components,n=(0,a.A)(e,r);return(0,i.mdx)(s,(0,o.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h2",{id:"core-concepts"},"Core Concepts"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"Component"),". A bundle of immutable data (Props) and pure functions that can transform the props into UI."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"LithoView"),". A subclass of ",(0,i.mdx)("inlineCode",{parentName:"li"},"android.view.ViewGroup")," that is used to render a ",(0,i.mdx)("inlineCode",{parentName:"li"},"Component"),"."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"ComponentTree"),". A class that holds a single root ",(0,i.mdx)("inlineCode",{parentName:"li"},"Component")," and controls its lifecycle."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"LayoutState"),". Responsible for calculating a layout and holding onto the output of the calculation."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"MountState"),". Responsible for mounting the ",(0,i.mdx)("inlineCode",{parentName:"li"},"Component")," into a ",(0,i.mdx)("inlineCode",{parentName:"li"},"LithoView"),". Each ",(0,i.mdx)("inlineCode",{parentName:"li"},"LithoView")," has exactly one ",(0,i.mdx)("inlineCode",{parentName:"li"},"MountState"),"."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"InternalNode"),". Class which represents a single node in the layout of a ",(0,i.mdx)("inlineCode",{parentName:"li"},"Component"),"."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"LayoutOutput"),". Lightweight representation of the output of the layout pass. The ",(0,i.mdx)("inlineCode",{parentName:"li"},"LayoutState")," produces a List of ",(0,i.mdx)("inlineCode",{parentName:"li"},"LayoutOutput"),"s that are then mounted by the ",(0,i.mdx)("inlineCode",{parentName:"li"},"MountState"),".")),(0,i.mdx)("h2",{id:"litho-lesson-component-to-screen"},"Litho Lesson: Component to Screen"),(0,i.mdx)("p",null,"We recommend you start by watching this video: it covers most of the core concepts above, as well as the fundamentals of how a Litho component gets turned into a ",(0,i.mdx)("inlineCode",{parentName:"p"},"View")," on screen."),(0,i.mdx)("iframe",{"padding-top":"10px",width:"560",height:"315",src:"https://www.youtube-nocookie.com/embed/t9wTHnCx5RM",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,i.mdx)("h2",{id:"layout"},"Layout"),(0,i.mdx)("h3",{id:"initializing-layout"},"Initializing Layout"),(0,i.mdx)("p",null,"Layout calculation is controlled by the ",(0,i.mdx)("inlineCode",{parentName:"p"},"ComponentTree"),". There are two mains ways that a ",(0,i.mdx)("inlineCode",{parentName:"p"},"ComponentTree")," will kick off a layout calculation:"),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},"If the bounds are known in advance, then the user can call ",(0,i.mdx)("inlineCode",{parentName:"li"},"setSizeSpec"),"/",(0,i.mdx)("inlineCode",{parentName:"li"},"setSizeSpecAsync")," directly."),(0,i.mdx)("li",{parentName:"ol"},"When the ",(0,i.mdx)("inlineCode",{parentName:"li"},"ComponentTree")," is set on a ",(0,i.mdx)("inlineCode",{parentName:"li"},"LithoView"),", then ",(0,i.mdx)("inlineCode",{parentName:"li"},"LithoView#onMeasure()")," will cause a layout to be calculated, unless the ",(0,i.mdx)("inlineCode",{parentName:"li"},"ComponentTree")," already has a valid layout (e.g. from an earlier ",(0,i.mdx)("inlineCode",{parentName:"li"},"setSizeSpecAsync")," call).")),(0,i.mdx)("h3",{id:"calculating-layout"},"Calculating Layout"),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("inlineCode",{parentName:"li"},"LayoutState#createTree"),". The first step in calculating layout is creating the tree of components (a tree of ",(0,i.mdx)("inlineCode",{parentName:"li"},"InternalNode"),"s). This is done by recursively resolving each Component in the hierarchy, which for ",(0,i.mdx)("inlineCode",{parentName:"li"},"Row")," and ",(0,i.mdx)("inlineCode",{parentName:"li"},"Column")," means creating a new ",(0,i.mdx)("inlineCode",{parentName:"li"},"InternalNode")," and adding each of their children, and for all other Components just means calling ",(0,i.mdx)("inlineCode",{parentName:"li"},"onCreateLayout"),"."),(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("inlineCode",{parentName:"li"},"LayoutState#measureTree"),". The second step in the calculation is measuring the tree. To do this the ",(0,i.mdx)("inlineCode",{parentName:"li"},"InternalNode"),"s just defer to their underlying Yoga nodes, and Yoga does the calculation for us."),(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("inlineCode",{parentName:"li"},"LayoutState#collectResults"),". Now that we have created and measured the tree, we collect the results into a lightweight representation of elements that need mounting and throw away the ",(0,i.mdx)("inlineCode",{parentName:"li"},"InternalNode")," tree.")),(0,i.mdx)("h3",{id:"layout-diffing"},"Layout Diffing"),(0,i.mdx)("p",null,"When calculating new layout on a ",(0,i.mdx)("inlineCode",{parentName:"p"},"ComponentTree")," that already has an existing layout, it is common that much of the layout is actually quite similar to before (e.g. you might change the color of an icon when you click on it, but leave the remaining UI the same). In order to take advantage of the similarities in cases such as this, we do something called ",(0,i.mdx)("inlineCode",{parentName:"p"},"layoutDiffing"),". Each ",(0,i.mdx)("inlineCode",{parentName:"p"},"LayoutState")," that we create has a tree of ",(0,i.mdx)("inlineCode",{parentName:"p"},"DiffNode"),"s that store the results of the layout that we calculated, including measurements. When creating a new ",(0,i.mdx)("inlineCode",{parentName:"p"},"LayoutState")," for a ",(0,i.mdx)("inlineCode",{parentName:"p"},"ComponentTree")," that already has one, we use the ",(0,i.mdx)("inlineCode",{parentName:"p"},"DiffNode")," tree to skip work where possible."),(0,i.mdx)("h2",{id:"mount"},"Mount"),(0,i.mdx)("p",null,"Mount (",(0,i.mdx)("inlineCode",{parentName:"p"},"MountState#mount"),") takes place for the first time when the ",(0,i.mdx)("inlineCode",{parentName:"p"},"LithoView")," is first laid out, and again every time the visible portion of the ",(0,i.mdx)("inlineCode",{parentName:"p"},"LithoView")," changes (provided that incremental mount is enabled). The mount step receives a ",(0,i.mdx)("inlineCode",{parentName:"p"},"Rect")," indicating the current visible area of the LithoView, and it uses that ",(0,i.mdx)("inlineCode",{parentName:"p"},"Rect")," to determine which of the ",(0,i.mdx)("inlineCode",{parentName:"p"},"LayoutOutput"),"s from the Layout phase need to be either mounted (if they are now on the screen and they weren't before) or unmounted (if they are no longer on the screen)."),(0,i.mdx)("p",null,"For each Component that needs to be mounted, we first acquire the ",(0,i.mdx)("inlineCode",{parentName:"p"},"View"),"/",(0,i.mdx)("inlineCode",{parentName:"p"},"Drawable")," defined in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"MountSpec"),"'s ",(0,i.mdx)("inlineCode",{parentName:"p"},"onCreateMountContent")," method. If possible, we acquire the mount content from our recycling pool (which is stored on a per-context basis), but if the pool is empty, then we create a new one. After that, we call ",(0,i.mdx)("inlineCode",{parentName:"p"},"mount"),", and then ",(0,i.mdx)("inlineCode",{parentName:"p"},"bind"),". When unmounting, we call ",(0,i.mdx)("inlineCode",{parentName:"p"},"unbind")," and then ",(0,i.mdx)("inlineCode",{parentName:"p"},"unmount"),"."),(0,i.mdx)("p",null,"Each time mount is called, we also call ",(0,i.mdx)("inlineCode",{parentName:"p"},"MountState#processVisibilityOutputs"),", which determines whether any visibility events need to be fired, and fires them if so."),(0,i.mdx)("p",null,"Mounting (including firing visibility events) is bound to the UI thread, so operations called here should be as lightweight as possible."),(0,i.mdx)("h3",{id:"mount-diffing"},"Mount Diffing"),(0,i.mdx)("p",null,"Mount diffing is a technique that Litho uses to avoid unmounting and mounting content when it is not necessary. Before mounting, we look at the currently mounted content and compare it with the content that we want to mount. If the currently mounted content does not need updating, then we don't call ",(0,i.mdx)("inlineCode",{parentName:"p"},"unmount"),"/",(0,i.mdx)("inlineCode",{parentName:"p"},"mount"),"."))}h.isMDXComponent=!0}}]);