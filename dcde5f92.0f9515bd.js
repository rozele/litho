(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{140:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(2),i=n(6),o=(n(0),n(161)),r={id:"architecture-overview",title:"Architecture Overview"},l={unversionedId:"architecture-overview",id:"architecture-overview",isDocsHomePage:!1,title:"Architecture Overview",description:"Core Concepts",source:"@site/../docs/architecture-overview.md",slug:"/architecture-overview",permalink:"/docs/architecture-overview",editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/architecture-overview.md",version:"current"},c=[{value:"Core Concepts",id:"core-concepts",children:[]},{value:"Litho Lesson: Component to Screen",id:"litho-lesson-component-to-screen",children:[]},{value:"Layout",id:"layout",children:[{value:"Initializing Layout",id:"initializing-layout",children:[]},{value:"Calculating Layout",id:"calculating-layout",children:[]},{value:"Layout Diffing",id:"layout-diffing",children:[]}]},{value:"Mount",id:"mount",children:[{value:"Mount Diffing",id:"mount-diffing",children:[]}]}],u={rightToc:c};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"core-concepts"},"Core Concepts"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Component"),". A bundle of immutable data (Props) and pure functions that can transform the props into UI."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"LithoView"),". A subclass of ",Object(o.b)("inlineCode",{parentName:"li"},"android.view.ViewGroup")," that is used to render a ",Object(o.b)("inlineCode",{parentName:"li"},"Component"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"ComponentTree"),". A class that holds a single root ",Object(o.b)("inlineCode",{parentName:"li"},"Component")," and controls its lifecycle."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"LayoutState"),". Responsible for calculating a layout and holding onto the output of the calculation."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"MountState"),". Responsible for mounting the ",Object(o.b)("inlineCode",{parentName:"li"},"Component")," into a ",Object(o.b)("inlineCode",{parentName:"li"},"LithoView"),". Each ",Object(o.b)("inlineCode",{parentName:"li"},"LithoView")," has exactly one ",Object(o.b)("inlineCode",{parentName:"li"},"MountState"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"InternalNode"),". Class which represents a single node in the layout of a ",Object(o.b)("inlineCode",{parentName:"li"},"Component"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"LayoutOutput"),". Lightweight representation of the output of the layout pass. The ",Object(o.b)("inlineCode",{parentName:"li"},"LayoutState")," produces a List of ",Object(o.b)("inlineCode",{parentName:"li"},"LayoutOutput"),"s that are then mounted by the ",Object(o.b)("inlineCode",{parentName:"li"},"MountState"),".")),Object(o.b)("h2",{id:"litho-lesson-component-to-screen"},"Litho Lesson: Component to Screen"),Object(o.b)("p",null,"We recommend you start by watching this video: it covers most of the core concepts above, as well as the fundamentals of how a Litho component gets turned into a ",Object(o.b)("inlineCode",{parentName:"p"},"View")," on screen."),Object(o.b)("iframe",{"padding-top":"10px",width:"560",height:"315",src:"https://www.youtube-nocookie.com/embed/t9wTHnCx5RM",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),Object(o.b)("h2",{id:"layout"},"Layout"),Object(o.b)("h3",{id:"initializing-layout"},"Initializing Layout"),Object(o.b)("p",null,"Layout calculation is controlled by the ",Object(o.b)("inlineCode",{parentName:"p"},"ComponentTree"),". There are two mains ways that a ",Object(o.b)("inlineCode",{parentName:"p"},"ComponentTree")," will kick off a layout calculation:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"If the bounds are known in advance, then the user can call ",Object(o.b)("inlineCode",{parentName:"li"},"setSizeSpec"),"/",Object(o.b)("inlineCode",{parentName:"li"},"setSizeSpecAsync")," directly."),Object(o.b)("li",{parentName:"ol"},"When the ",Object(o.b)("inlineCode",{parentName:"li"},"ComponentTree")," is set on a ",Object(o.b)("inlineCode",{parentName:"li"},"LithoView"),", then ",Object(o.b)("inlineCode",{parentName:"li"},"LithoView#onMeasure()")," will cause a layout to be calculated, unless the ",Object(o.b)("inlineCode",{parentName:"li"},"ComponentTree")," already has a valid layout (e.g. from an earlier ",Object(o.b)("inlineCode",{parentName:"li"},"setSizeSpecAsync")," call).")),Object(o.b)("h3",{id:"calculating-layout"},"Calculating Layout"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"LayoutState#createTree"),". The first step in calculating layout is creating the tree of components (a tree of ",Object(o.b)("inlineCode",{parentName:"li"},"InternalNode"),"s). This is done by recursively resolving each Component in the hierarchy, which for ",Object(o.b)("inlineCode",{parentName:"li"},"Row")," and ",Object(o.b)("inlineCode",{parentName:"li"},"Column")," means creating a new ",Object(o.b)("inlineCode",{parentName:"li"},"InternalNode")," and adding each of their children, and for all other Components just means calling ",Object(o.b)("inlineCode",{parentName:"li"},"onCreateLayout"),"."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"LayoutState#measureTree"),". The second step in the calculation is measuring the tree. To do this the ",Object(o.b)("inlineCode",{parentName:"li"},"InternalNode"),"s just defer to their underlying Yoga nodes, and Yoga does the calculation for us."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"LayoutState#collectResults"),". Now that we have created and measured the tree, we collect the results into a lightweight representation of elements that need mounting and throw away the ",Object(o.b)("inlineCode",{parentName:"li"},"InternalNode")," tree.")),Object(o.b)("h3",{id:"layout-diffing"},"Layout Diffing"),Object(o.b)("p",null,"When calculating new layout on a ",Object(o.b)("inlineCode",{parentName:"p"},"ComponentTree")," that already has an existing layout, it is common that much of the layout is actually quite similar to before (e.g. you might change the color of an icon when you click on it, but leave the remaining UI the same). In order to take advantage of the similarities in cases such as this, we do something called ",Object(o.b)("inlineCode",{parentName:"p"},"layoutDiffing"),". Each ",Object(o.b)("inlineCode",{parentName:"p"},"LayoutState")," that we create has a tree of ",Object(o.b)("inlineCode",{parentName:"p"},"DiffNode"),"s that store the results of the layout that we calculated, including measurements. When creating a new ",Object(o.b)("inlineCode",{parentName:"p"},"LayoutState")," for a ",Object(o.b)("inlineCode",{parentName:"p"},"ComponentTree")," that already has one, we use the ",Object(o.b)("inlineCode",{parentName:"p"},"DiffNode")," tree to skip work where possible."),Object(o.b)("h2",{id:"mount"},"Mount"),Object(o.b)("p",null,"Mount (",Object(o.b)("inlineCode",{parentName:"p"},"MountState#mount"),") takes place for the first time when the ",Object(o.b)("inlineCode",{parentName:"p"},"LithoView")," is first laid out, and again every time the visible portion of the ",Object(o.b)("inlineCode",{parentName:"p"},"LithoView")," changes (provided that incremental mount is enabled). The mount step receives a ",Object(o.b)("inlineCode",{parentName:"p"},"Rect")," indicating the current visible area of the LithoView, and it uses that ",Object(o.b)("inlineCode",{parentName:"p"},"Rect")," to determine which of the ",Object(o.b)("inlineCode",{parentName:"p"},"LayoutOutput"),"s from the Layout phase need to be either mounted (if they are now on the screen and they weren't before) or unmounted (if they are no longer on the screen)."),Object(o.b)("p",null,"For each Component that needs to be mounted, we first acquire the ",Object(o.b)("inlineCode",{parentName:"p"},"View"),"/",Object(o.b)("inlineCode",{parentName:"p"},"Drawable")," defined in the ",Object(o.b)("inlineCode",{parentName:"p"},"MountSpec"),"'s ",Object(o.b)("inlineCode",{parentName:"p"},"onCreateMountContent")," method. If possible, we acquire the mount content from our recycling pool (which is stored on a per-context basis), but if the pool is empty, then we create a new one. After that, we call ",Object(o.b)("inlineCode",{parentName:"p"},"mount"),", and then ",Object(o.b)("inlineCode",{parentName:"p"},"bind"),". When unmounting, we call ",Object(o.b)("inlineCode",{parentName:"p"},"unbind")," and then ",Object(o.b)("inlineCode",{parentName:"p"},"unmount"),"."),Object(o.b)("p",null,"Each time mount is called, we also call ",Object(o.b)("inlineCode",{parentName:"p"},"MountState#processVisibilityOutputs"),", which determines whether any visibility events need to be fired, and fires them if so."),Object(o.b)("p",null,"Mounting (including firing visibility events) is bound to the UI thread, so operations called here should be as lightweight as possible."),Object(o.b)("h3",{id:"mount-diffing"},"Mount Diffing"),Object(o.b)("p",null,"Mount diffing is a technique that Litho uses to avoid unmounting and mounting content when it is not necessary. Before mounting, we look at the currently mounted content and compare it with the content that we want to mount. If the currently mounted content does not need updating, then we don't call ",Object(o.b)("inlineCode",{parentName:"p"},"unmount"),"/",Object(o.b)("inlineCode",{parentName:"p"},"mount"),"."))}b.isMDXComponent=!0},161:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),b=function(e){var t=i.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=b(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=b(n),d=a,h=p["".concat(r,".").concat(d)]||p[d]||s[d]||o;return n?i.a.createElement(h,l(l({ref:t},u),{},{components:n})):i.a.createElement(h,l({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var u=2;u<o;u++)r[u]=n[u];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);