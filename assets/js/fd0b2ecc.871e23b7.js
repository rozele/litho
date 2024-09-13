"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9466],{15680:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>c,MDXProvider:()=>p,mdx:()=>g,useMDXComponents:()=>m,withMDXComponents:()=>s});var o=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},i.apply(this,arguments)}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),s=function(e){return function(t){var n=m(t.components);return o.createElement(e,i({},t,{components:n}))}},m=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=m(e.components);return o.createElement(c.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),s=m(n),p=a,u=s["".concat(r,".").concat(p)]||s[p]||h[p]||i;return n?o.createElement(u,l(l({ref:t},c),{},{components:n})):o.createElement(u,l({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=f;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[u]="string"==typeof e?e:a,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},45651:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>f,frontMatter:()=>d,metadata:()=>s,toc:()=>p});var o=n(58168),a=n(98587),i=(n(96540),n(15680)),r=n(86025),l=["components"],d={id:"sections-tutorial",title:"Sections Tutorial"},c=void 0,s={unversionedId:"sections-tutorial",id:"sections-tutorial",title:"Sections Tutorial",description:"This part builds on the work you did in the litho tutorial. Make sure you've read through that tutorial before returning to this one.",source:"@site/../docs/sections-tutorial.mdx",sourceDirName:".",slug:"/sections-tutorial",permalink:"/docs/sections-tutorial",draft:!1,editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/sections-tutorial.mdx",tags:[],version:"current",frontMatter:{id:"sections-tutorial",title:"Sections Tutorial"}},m={},p=[{value:"1. Refactoring ListSectionSpec",id:"1-refactoring-listsectionspec",level:2},{value:"2. Adding an H-scroll",id:"2-adding-an-h-scroll",level:2},{value:"Summary",id:"summary",level:2}],u={toc:p},h="wrapper";function f(e){var t=e.components,n=(0,a.A)(e,l);return(0,i.mdx)(h,(0,o.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("admonition",{type:"note"},(0,i.mdx)("p",{parentName:"admonition"},"This part builds on the work you did in ",(0,i.mdx)("a",{parentName:"p",href:"/docs/tutorial"},"the litho tutorial"),". Make sure you've read through that tutorial before returning to this one.")),(0,i.mdx)("p",null,"Recall in ",(0,i.mdx)("a",{parentName:"p",href:"/docs/tutorial"},"the litho tutorial")," that we left off with a vertically scrolling list with alternating background colors. In this optional part of this tutorial, we will add an horizontal scrolling unit at the top of the list by modifying ",(0,i.mdx)("inlineCode",{parentName:"p"},"ListSectionSpec")," to leverage the composability of the Litho and Sections API."),(0,i.mdx)("h2",{id:"1-refactoring-listsectionspec"},"1. Refactoring ListSectionSpec"),(0,i.mdx)("p",null,"Let us revisit ",(0,i.mdx)("a",{parentName:"p",href:"/docs/tutorial#3-creating-a-list-of-items"},"ListSectionSpec"),".  Each ",(0,i.mdx)("inlineCode",{parentName:"p"},"SingleComponentSection")," inside the for loop renders almost the same component, only the number changes.  In other words, each of our ",(0,i.mdx)("inlineCode",{parentName:"p"},"ListItem")," components are backed by a model object of the same type: ",(0,i.mdx)("inlineCode",{parentName:"p"},"int"),"."),(0,i.mdx)("p",null,"Litho provides another core section ",(0,i.mdx)("inlineCode",{parentName:"p"},"DataDiffSection")," that is specifically used to render components backed by a list of models. In this step we will refactor ",(0,i.mdx)("inlineCode",{parentName:"p"},"ListSectionSpec")," to use ",(0,i.mdx)("inlineCode",{parentName:"p"},"DataDiffSection"),"."),(0,i.mdx)("p",null,"First, lets generate our model objects.  For the sake of this example, we will just add a static method inside ",(0,i.mdx)("inlineCode",{parentName:"p"},"ListSectionSpec")," to generate our model objects.  In a real scenario this would be replaced with proper data fetching logic:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java"},"private static List<Integer> generateData(int count) {\n  final List<Integer> data = new ArrayList<>(count);\n  for (int i = 0; i < count; i++) {\n    data.add(i);\n  }\n  return data;\n}\n")),(0,i.mdx)("p",null,"Next, write a method that creates a ",(0,i.mdx)("inlineCode",{parentName:"p"},"ListItem")," component given a model object:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java"},'@OnEvent(RenderEvent.class)\nstatic RenderInfo onRender(final SectionContext c, @FromEvent Integer model) {\n  return ComponentRenderInfo.create()\n      .component(\n          ListItem.create(c)\n              .color(model % 2 == 0 ? Color.WHITE : Color.LTGRAY)\n              .title(model + ". Hello, world!")\n              .subtitle("Litho tutorial")\n              .build())\n      .build();\n}\n')),(0,i.mdx)("p",null,"Finally combine these two new methods with ",(0,i.mdx)("inlineCode",{parentName:"p"},"DataDiffSection")," by replacing our current ",(0,i.mdx)("inlineCode",{parentName:"p"},"onCreateChildren")," method with:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java"},"@OnCreateChildren\nstatic Children onCreateChildren(final SectionContext c) {\n  return Children.create()\n      .child(\n          DataDiffSection.<Integer>create(c)\n              .data(generateData(32))\n              .renderEventHandler(ListSection.onRender(c)))\n      .build();\n}\n")),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Woah, what's this ",(0,i.mdx)("inlineCode",{parentName:"strong"},"@OnEvent")," stuff??  Where in the world did ",(0,i.mdx)("inlineCode",{parentName:"strong"},"ListSection.onRender()")," come from??")),(0,i.mdx)("p",null,"Here's a quick explanation of what's going on:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("inlineCode",{parentName:"p"},"DataDiffSection")," emits a ",(0,i.mdx)("inlineCode",{parentName:"p"},"RenderEvent")," whenever an item needs to be rendered.")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"When creating a ",(0,i.mdx)("inlineCode",{parentName:"p"},"DataDiffSection")," we give it our custom ",(0,i.mdx)("inlineCode",{parentName:"p"},"RenderEventHandler"),", ",(0,i.mdx)("inlineCode",{parentName:"p"},"ListSection.onRender(c)"),".")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"This custom event handler will call the ",(0,i.mdx)("inlineCode",{parentName:"p"},"onRender")," method defined in ",(0,i.mdx)("inlineCode",{parentName:"p"},"ListSectionSpec")," with all the right parameters whenever it receives a ",(0,i.mdx)("inlineCode",{parentName:"p"},"RenderEvent"),".")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"All of this event handler code is auto-generated from the ",(0,i.mdx)("inlineCode",{parentName:"p"},"@OnEvent")," annotation."),(0,i.mdx)("p",{parentName:"li"},"You can read more Events and Litho's event handling system ",(0,i.mdx)("a",{parentName:"p",href:"/docs/codegen/events-for-specs"},"here"),"."))),(0,i.mdx)("p",null,"Run the app. You should see the same thing as before."),(0,i.mdx)("img",{src:(0,r.default)("/images/barebones4.png"),width:"300px"}),(0,i.mdx)("h2",{id:"2-adding-an-h-scroll"},"2. Adding an H-scroll"),(0,i.mdx)("p",null,"Remember how we used ",(0,i.mdx)("inlineCode",{parentName:"p"},"RecyclerCollectionComponent")," to create our list? Since ",(0,i.mdx)("inlineCode",{parentName:"p"},"RecyclerCollectionComponent")," is itself a Component, we can create one inside a Section and easily nest scrolling lists! While it doesn't quite make sense to nest a vertical list inside another vertical list, it's quite common to nest a horizontal list inside a vertical list.  We will do just that in this step."),(0,i.mdx)("p",null,"Update ",(0,i.mdx)("inlineCode",{parentName:"p"},"onCreateChildren()")," to add a ",(0,i.mdx)("inlineCode",{parentName:"p"},"SingleComponentSection")," before the ",(0,i.mdx)("inlineCode",{parentName:"p"},"DataDiffSection"),":"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java"},"@OnCreateChildren\nstatic Children onCreateChildren(final SectionContext c) {\n  return Children.create()\n      .child(\n          SingleComponentSection.create(c)\n              .component(\n                  RecyclerCollectionComponent.create(c)\n                      .disablePTR(true)\n                      .recyclerConfiguration(new ListRecyclerConfiguration(LinearLayoutManager.HORIZONTAL, /*reverse layout*/ false, SNAP_TO_CENTER))\n                      .section(\n                          DataDiffSection.<Integer>create(c)\n                              .data(generateData(32))\n                              .renderEventHandler(ListSection.onRender(c))\n                              .build())\n                      .canMeasureRecycler(true))\n              .build())\n        .child(\n            DataDiffSection.<Integer>create(c)\n                .data(generateData(32))\n                .renderEventHandler(ListSection.onRender(c)))\n        .build();\n  }\n")),(0,i.mdx)("p",null,"We're seeing a couple new props for ",(0,i.mdx)("inlineCode",{parentName:"p"},"RecyclerCollectionComponent")," here."),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"recyclerConfiguration")," is a configuration object for setting the layout of the components and the snapping behavior for the ",(0,i.mdx)("inlineCode",{parentName:"li"},"RecyclerCollectionComponent"),"."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"canMeasureRecycler")," needs to be set to true for a horizontal ",(0,i.mdx)("inlineCode",{parentName:"li"},"RecyclerCollectionComponent")," if you can't set a static height on it. The framework will measure the first child of the ",(0,i.mdx)("inlineCode",{parentName:"li"},"RecyclerCollectionComponent")," and use that child's height as the height of the entire horizontal scrolling list.")),(0,i.mdx)("p",null,"Run the app now, you should see something like this:"),(0,i.mdx)("img",{src:(0,r.default)("/images/barebones5.gif"),width:"300px"}),(0,i.mdx)("h2",{id:"summary"},"Summary"),(0,i.mdx)("p",null,"Congratulations on completing part 2 of this tutorial! This part of the tutorial introduced you to more advanced usages of Sections and should arm you with additional building blocks to help you build your own complex scrolling UI. Some more fun things you can try:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"SingleComponentSection")," has a few interesting props.  See if you can make the horizontal scrolling row stick to the top"),(0,i.mdx)("li",{parentName:"ul"},"The ",(0,i.mdx)("inlineCode",{parentName:"li"},"RenderEvent")," event has other fields that are helpful when creating components for each row.  See if you could make every 3rd row an h-scroll.")),(0,i.mdx)("p",null,"You can find the ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/facebook/litho/tree/master/sample-barebones"},"completed tutorial here"),". Be sure to check out ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/facebook/litho/tree/master/sample"},"this sample")," for more in-depth code as well as the Litho API documentation for additional information."))}f.isMDXComponent=!0}}]);