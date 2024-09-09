"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5505],{15680:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>p,MDXProvider:()=>m,mdx:()=>y,useMDXComponents:()=>d,withMDXComponents:()=>l});var o=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a.apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),l=function(e){return function(t){var n=d(t.components);return o.createElement(e,a({},t,{components:n}))}},d=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=d(e.components);return o.createElement(p.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=d(n),m=r,u=l["".concat(i,".").concat(m)]||l[m]||h[m]||a;return n?o.createElement(u,c(c({ref:t},p),{},{components:n})):o.createElement(u,c({ref:t},p))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:r,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},94198:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>c,metadata:()=>p,toc:()=>d});var o=n(58168),r=n(98587),a=(n(96540),n(15680)),i=["components"],c={id:"glossary",title:"Glossary"},s=void 0,p={unversionedId:"glossary",id:"glossary",title:"Glossary",description:"Spec? Prop? State? Tree? What do all of these terms mean when it comes to Litho and Section Components?",source:"@site/../docs/glossary.md",sourceDirName:".",slug:"/glossary",permalink:"/docs/glossary",draft:!1,editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/glossary.md",tags:[],version:"current",frontMatter:{id:"glossary",title:"Glossary"}},l={},d=[{value:"Component",id:"component",level:2},{value:"Spec",id:"spec",level:2},{value:"@Prop",id:"prop",level:2},{value:"@State",id:"state",level:2},{value:"@LayoutSpec",id:"layoutspec",level:2},{value:"@MountSpec",id:"mountspec",level:2},{value:"@GroupSectionSpec",id:"groupsectionspec",level:2},{value:"@DiffSectionSpec",id:"diffsectionspec",level:2},{value:"ChangeSet",id:"changeset",level:2}],m={toc:d},u="wrapper";function h(e){var t=e.components,n=(0,r.A)(e,i);return(0,a.mdx)(u,(0,o.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,"Spec? Prop? State? Tree? What do all of these terms mean when it comes to Litho and Section Components?"),(0,a.mdx)("h2",{id:"component"},"Component"),(0,a.mdx)("p",null,"A single logical unit describing a piece of UI.  Components are either comprised of other components or contain logic to draw an Android View or Android Drawable on screen. Section Components components are sometimes referred to Sections."),(0,a.mdx)("h2",{id:"spec"},"Spec"),(0,a.mdx)("p",null,"Spec classes (files that end in Spec.java) are classes you write to ",(0,a.mdx)("em",{parentName:"p"},"specify")," the behavior of a custom component.  You can think of spec classes as a collection of functions that the framework will call to interact with your component."),(0,a.mdx)("p",null,"Litho and Section Components' code-generation framework reads your spec to auto-generate code specific to each spec."),(0,a.mdx)("h2",{id:"prop"},"@Prop"),(0,a.mdx)("p",null,"An annotation added to function parameters in your Spec class to describe ",(0,a.mdx)("strong",{parentName:"p"},"immutable")," values that will be passed into the component during creation. Props can represent values that can be changed from outside the framework.  You can update a prop value from outside the framework calling ",(0,a.mdx)("inlineCode",{parentName:"p"},"LithoView#setComponent(Component)")," or ",(0,a.mdx)("inlineCode",{parentName:"p"},"ComponentTree#setRoot(Component)"),"."),(0,a.mdx)("p",null,"When a new component is set, the framework will compare the new props with previous props and, if they differ, update that component. This behavior recurses down the component hierarchy until every component in the tree has had the chance to update."),(0,a.mdx)("h2",{id:"state"},"@State"),(0,a.mdx)("p",null,"An annotation added to function parameters in your Spec class to describe ",(0,a.mdx)("strong",{parentName:"p"},"immutable")," values that are stored ",(0,a.mdx)("em",{parentName:"p"},"inside this component")," and ",(0,a.mdx)("em",{parentName:"p"},"only matter for this component and its children"),"."),(0,a.mdx)("p",null,"State values are initially set in a function annotated with @OnCreateInitialState and should only be updated by functions annotated with @UpdateState. Whenever a state update is made, the framework will update that component and recurse down its children until every component in the sub-tree has had the chance to update."),(0,a.mdx)("h2",{id:"layoutspec"},"@LayoutSpec"),(0,a.mdx)("p",null,'A Litho Annotation added to a spec class that tells the framework "This component is comprised of other components arranged in a specific layout". The majority of specs you write will be LayoutSpecs.'),(0,a.mdx)("h2",{id:"mountspec"},"@MountSpec"),(0,a.mdx)("p",null,'A Litho Annotation added to a spec class that tells the framework "This component describes an Android View or Drawable to be drawn on screen". This is the escape hatch from Litho into traditional Android rendering.'),(0,a.mdx)("h2",{id:"groupsectionspec"},"@GroupSectionSpec"),(0,a.mdx)("p",null,"The equivalent of @LayoutSpec for Section Components"),(0,a.mdx)("h2",{id:"diffsectionspec"},"@DiffSectionSpec"),(0,a.mdx)("p",null,'The equivalent of @MountSpec for Section Components. This annotation tells the\nframework "This component will produce a changeset for changing the items in a\nrecycler view".'),(0,a.mdx)("h2",{id:"changeset"},"ChangeSet"),(0,a.mdx)("p",null,'A list of insert / update / delete / move "commands" that describe how to update\nthe underlying recycler view.'))}h.isMDXComponent=!0}}]);