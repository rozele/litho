"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3762],{15680:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>c,MDXProvider:()=>l,mdx:()=>g,useMDXComponents:()=>m,withMDXComponents:()=>d});var o=t(96540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(){return a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},a.apply(this,arguments)}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=o.createContext({}),d=function(e){return function(n){var t=m(n.components);return o.createElement(e,a({},n,{components:t}))}},m=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},l=function(e){var n=m(e.components);return o.createElement(c.Provider,{value:n},e.children)},f="mdxType",h={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,r=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=m(t),l=i,f=d["".concat(r,".").concat(l)]||d[l]||h[l]||a;return t?o.createElement(f,s(s({ref:n},c),{},{components:t})):o.createElement(f,s({ref:n},c))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,r=new Array(a);r[0]=u;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s[f]="string"==typeof e?e:i,r[1]=s;for(var c=2;c<a;c++)r[c]=t[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},39011:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>p,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>m});var o=t(58168),i=t(98587),a=(t(96540),t(15680)),r=["components"],s={id:"diff-sections",title:"Writing Your Own DiffSection"},p=void 0,c={unversionedId:"sections/diff-sections",id:"sections/diff-sections",title:"Writing Your Own DiffSection",description:"This page contains information needed to build a bespoke DiffSection.",source:"@site/../docs/sections/diff-sections.md",sourceDirName:"sections",slug:"/sections/diff-sections",permalink:"/docs/sections/diff-sections",draft:!1,editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/sections/diff-sections.md",tags:[],version:"current",frontMatter:{id:"diff-sections",title:"Writing Your Own DiffSection"},sidebar:"mainSidebar",previous:{title:"Mixing with Android Views",permalink:"/docs/sections/view-support"},next:{title:"Sections Implementation Architecture",permalink:"/docs/sections/architecture"}},d={},m=[{value:"DiffSectionSpec",id:"diffsectionspec",level:2},{value:"Making changes to the List with ChangeSet",id:"making-changes-to-the-list-with-changeset",level:2}],l={toc:m},f="wrapper";function h(e){var n=e.components,t=(0,i.A)(e,r);return(0,a.mdx)(f,(0,o.A)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,"This page contains information needed to build a bespoke ",(0,a.mdx)("inlineCode",{parentName:"p"},"DiffSection"),"."),(0,a.mdx)("p",null,"The Sections API (accessed from the 'API' menu) already provides two implementations that cover the most frequent use cases of ",(0,a.mdx)("inlineCode",{parentName:"p"},"SingleComponentSection")," and ",(0,a.mdx)("inlineCode",{parentName:"p"},"DataDiffSection"),". If the given implementation is not sufficient for the required use case, then a bespoke ",(0,a.mdx)("inlineCode",{parentName:"p"},"DiffSection")," should be created, as the complexity and chances of introducing subtle errors are both high."),(0,a.mdx)("h2",{id:"diffsectionspec"},"DiffSectionSpec"),(0,a.mdx)("p",null,"A ",(0,a.mdx)("em",{parentName:"p"},"diff section spec")," defines a section that explicitly outputs 'insert', 'update', and 'remove' changes on the section hierarchy."),(0,a.mdx)("p",null,"Diff section specs explicitly manage insertions, removals, and updates that a section performs whenever its states and props change.  Diff Sections are represented as leaves of every ",(0,a.mdx)("a",{parentName:"p",href:"/docs/sections/architecture#what-is-a-sectiontree"},"section tree")," as they are the sections that actually specify the changes to be made to a list."),(0,a.mdx)("p",null,"One example of the use of a custom diff section is if the data to be displayed is received in the form of incremental updates or diffs, which may occur when using a specialised diffing algorithm to process data."),(0,a.mdx)("admonition",{type:"note"},(0,a.mdx)("p",{parentName:"admonition"},(0,a.mdx)("inlineCode",{parentName:"p"},"DataDiffSection")," utilises a familiar Android's ",(0,a.mdx)("a",{parentName:"p",href:"https://developer.android.com/reference/android/support/v7/util/DiffUtil.html"},"DiffUtil"),".")),(0,a.mdx)("p",null,"The following code provides an example of using ",(0,a.mdx)("a",{parentName:"p",href:"pathname:///javadoc/com/facebook/litho/sections/common/SingleComponentSection.html"},"SingleComponentSection")," to describe how to write diff section specs:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-java"},"@DiffSectionSpec\nclass SingleComponentSectionSpec {\n\n  @OnDiff\n  static void onCreateChangeSet(\n      SectionContext c,\n      ChangeSet changeSet,\n      @Prop Diff<Component> component,\n      ...) {\n\n    if (component.getNext() == null) {\n      changeSet.delete(0);\n    } else if (component.getPrevious() == null) {\n      changeSet.insert(\n          0,\n          ComponentRenderInfo.create()\n              .component(component.getNext())\n              ...\n              .build());\n    } else {\n      changeSet.update(\n          0,\n          ComponentRenderInfo.create()\n              .component(component.getNext())\n              ...\n              .build());\n    }\n  }\n}\n")),(0,a.mdx)("p",null,"As shown at the top of the above code, diff section specs use the ",(0,a.mdx)("inlineCode",{parentName:"p"},"@DiffSectionSpec")," annotation. Implementing a diff section spec requires little boilerplate; there is a need to write just one method annotated with ",(0,a.mdx)("inlineCode",{parentName:"p"},"@OnDiff"),"."),(0,a.mdx)("p",null,"The method annotated with ",(0,a.mdx)("inlineCode",{parentName:"p"},"@OnDiff")," must have, as its first and second argument, a ",(0,a.mdx)("a",{parentName:"p",href:"pathname:///javadoc/com/facebook/litho/sections/SectionContext.html"},"SectionContext")," and a ",(0,a.mdx)("a",{parentName:"p",href:"pathname:///javadoc/com/facebook/litho/sections/ChangeSet.html"},"ChangeSet")," respectively. Following these two arguments, the ",(0,a.mdx)("inlineCode",{parentName:"p"},"@OnDiff")," method can also accept any number of arguments annotated with ",(0,a.mdx)("inlineCode",{parentName:"p"},"@Prop")," or ",(0,a.mdx)("inlineCode",{parentName:"p"},"@State"),"."),(0,a.mdx)("p",null,"These props and state have a special type: ",(0,a.mdx)("inlineCode",{parentName:"p"},"Diff<T>"),".  If the prop is defined in another annotated method like ",(0,a.mdx)("inlineCode",{parentName:"p"},"@Prop String prop1"),", it must be defined as ",(0,a.mdx)("inlineCode",{parentName:"p"},"@Prop Diff<String> prop1")," when being used in the ",(0,a.mdx)("inlineCode",{parentName:"p"},"@OnDiff")," method. The reason for this ",(0,a.mdx)("inlineCode",{parentName:"p"},"Diff<T>")," type wrapper is to enables the comparison of previous prop values with new prop values when computing changes."),(0,a.mdx)("h2",{id:"making-changes-to-the-list-with-changeset"},"Making changes to the List with ChangeSet"),(0,a.mdx)("p",null,"The ",(0,a.mdx)("inlineCode",{parentName:"p"},"ChangeSet")," argument of the ",(0,a.mdx)("inlineCode",{parentName:"p"},"@OnDiff")," method is used by the Diff section spec to specify how the section changes in response to new data.  The ",(0,a.mdx)("inlineCode",{parentName:"p"},"@OnDiff")," method will always be called with both the current ",(0,a.mdx)("em",{parentName:"p"},"and previous")," props and the state values (hence the ",(0,a.mdx)("inlineCode",{parentName:"p"},"Diff<T>")," type). The expectation is to have the ability to use the current and previous values to determine how to update the items being rendered."),(0,a.mdx)("p",null,"When the changes to be made have been determined, call the corresponding method on the ",(0,a.mdx)("inlineCode",{parentName:"p"},"ChangeSet")," object. These methods correspond to ",(0,a.mdx)("inlineCode",{parentName:"p"},"RecyclerView.Adapter"),"'s ",(0,a.mdx)("inlineCode",{parentName:"p"},"notifyItem*")," methods. To gain an idea of how this works, see ",(0,a.mdx)("a",{parentName:"p",href:"https://github.com/facebook/litho/blob/d766e3b4965edf84eda0090f58d0020aa302d650/litho-sections-core/src/main/java/com/facebook/litho/sections/common/SingleComponentSectionSpec.java#L25"},"SingleComponentSectionSpec#onDiff"),":"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"If there isn't a new ",(0,a.mdx)("inlineCode",{parentName:"li"},"Component")," (",(0,a.mdx)("inlineCode",{parentName:"li"},"component.getNext() == null"),") then change the list by removing that row."),(0,a.mdx)("li",{parentName:"ul"},"Else if there is a new ",(0,a.mdx)("inlineCode",{parentName:"li"},"Component")," and no previous component, insert a new row."),(0,a.mdx)("li",{parentName:"ul"},"If both an old component and a new component exist, update that row to the new component.")),(0,a.mdx)("admonition",{type:"note"},(0,a.mdx)("p",{parentName:"admonition"},"The indexes used in the ",(0,a.mdx)("inlineCode",{parentName:"p"},"ChangeSet")," method calls are ",(0,a.mdx)("em",{parentName:"p"},"relative to the current section"),".  For example, index 0 in ",(0,a.mdx)("inlineCode",{parentName:"p"},"SingleComponentSectionSpec")," may be index 100 in the final list, depending on the section hierarchy. The framework will take care of translating local indexes to global indexes when processing the ",(0,a.mdx)("inlineCode",{parentName:"p"},"ChangeSet"),".")))}h.isMDXComponent=!0}}]);