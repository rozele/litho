"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7880],{3905:(e,r,t)=>{t.r(r),t.d(r,{MDXContext:()=>l,MDXProvider:()=>d,mdx:()=>y,useMDXComponents:()=>m,withMDXComponents:()=>c});var o=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function p(){return p=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},p.apply(this,arguments)}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},p=Object.keys(e);for(o=0;o<p.length;o++)t=p[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(o=0;o<p.length;o++)t=p[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=o.createContext({}),c=function(e){return function(r){var t=m(r.components);return o.createElement(e,p({},r,{components:t}))}},m=function(e){var r=o.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},d=function(e){var r=m(e.components);return o.createElement(l.Provider,{value:r},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},h=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,p=e.originalType,a=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),c=m(t),d=n,u=c["".concat(a,".").concat(d)]||c[d]||f[d]||p;return t?o.createElement(u,s(s({ref:r},l),{},{components:t})):o.createElement(u,s({ref:r},l))}));function y(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var p=t.length,a=new Array(p);a[0]=h;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s[u]="string"==typeof e?e:n,a[1]=s;for(var l=2;l<p;l++)a[l]=t[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}h.displayName="MDXCreateElement"},95659:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>m});var o=t(87462),n=t(63366),p=(t(67294),t(3905)),a=["components"],s={id:"treeprops",title:"Tree Props",keywords:["tree props","treeprops","treeprop"]},i=void 0,l={unversionedId:"mainconcepts/treeprops",id:"mainconcepts/treeprops",title:"Tree Props",description:"The Types of Props page details different types of Litho props. This page covers one more type of props - Tree Props.",source:"@site/../docs/mainconcepts/treeprops.mdx",sourceDirName:"mainconcepts",slug:"/mainconcepts/treeprops",permalink:"/docs/mainconcepts/treeprops",draft:!1,editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/mainconcepts/treeprops.mdx",tags:[],version:"current",frontMatter:{id:"treeprops",title:"Tree Props",keywords:["tree props","treeprops","treeprop"]},sidebar:"mainSidebar",previous:{title:"Types of Props",permalink:"/docs/mainconcepts/props"},next:{title:"Introduction to Hooks",permalink:"/docs/mainconcepts/hooks-intro"}},c={},m=[{value:"Tree Props",id:"tree-props",level:2},{value:"Declaring a Tree Prop",id:"declaring-a-tree-prop",level:3},{value:"Using a Tree Prop",id:"using-a-tree-prop",level:3},{value:"When to Use Tree Props",id:"when-to-use-tree-props",level:3}],d={toc:m},u="wrapper";function f(e){var r=e.components,t=(0,n.Z)(e,a);return(0,p.mdx)(u,(0,o.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,p.mdx)("p",null,"The ",(0,p.mdx)("a",{parentName:"p",href:"/docs/mainconcepts/props"},"Types of Props")," page details different types of Litho props. This page covers one more type of props - Tree Props."),(0,p.mdx)("h2",{id:"tree-props"},"Tree Props"),(0,p.mdx)("admonition",{type:"note"},(0,p.mdx)("p",{parentName:"admonition"},"A tree prop is a special type of prop that is transparently passed from a parent component to its children.")),(0,p.mdx)("p",null,"A TreeProp is a special type of prop which is transparently passed from a parent component to its children. It provides a convenient way to share contextual data or utilities in a tree without having to explicitly pass ",(0,p.mdx)("inlineCode",{parentName:"p"},"val")," properties to every component in your hierarchy."),(0,p.mdx)("h3",{id:"declaring-a-tree-prop"},"Declaring a Tree Prop"),(0,p.mdx)("p",null,"In order to declare a TreeProp you need to use ",(0,p.mdx)("inlineCode",{parentName:"p"},"TreePropProvider"),":"),(0,p.mdx)("pre",null,(0,p.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/kotlin/treeprops/TreePropsExampleComponent.kt start=declaring_tree_prop_start end=declaring_tree_prop_end",file:"sample/src/main/java/com/facebook/samples/litho/kotlin/treeprops/TreePropsExampleComponent.kt",start:"declaring_tree_prop_start",end:"declaring_tree_prop_end"},"return TreePropProvider(\n    Typeface::class.java to Typeface.DEFAULT_BOLD,\n    String::class.java to getTextTitle(),\n    Int::class.java to Color.RED) {\n      TreePropsChildComponent()\n    }\n")),(0,p.mdx)("admonition",{type:"note"},(0,p.mdx)("p",{parentName:"admonition"},"You can only declare one TreeProp for any one given type. If a child of ParentComponent also defines a TreeProp of the given type, it will override the value of that TreeProp for all its children (but not for itself).")),(0,p.mdx)("h3",{id:"using-a-tree-prop"},"Using a Tree Prop"),(0,p.mdx)("p",null,"The child component can access the TreeProp value through a ",(0,p.mdx)("inlineCode",{parentName:"p"},"ComponentScope.getTreeProp<>()")," method that has the same type that was declared in the parents ",(0,p.mdx)("inlineCode",{parentName:"p"},"TreePropProvider")," call:"),(0,p.mdx)("pre",null,(0,p.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/kotlin/treeprops/TreePropsChildComponent.kt start=using_tree_prop_start end=using_tree_prop_end",file:"sample/src/main/java/com/facebook/samples/litho/kotlin/treeprops/TreePropsChildComponent.kt",start:"using_tree_prop_start",end:"using_tree_prop_end"},"val color = getTreeProp<Int>()\nval typeface = getTreeProp<Typeface>()\nval title = getTreeProp<String>()\n")),(0,p.mdx)("h3",{id:"when-to-use-tree-props"},"When to Use Tree Props"),(0,p.mdx)("p",null,"Tree Props are powerful, but if overused, they can make your component code more difficult to understand. The best practice is to only use tree props for properties that the whole tree needs to know about (such as theming information or loggers) and not just as a more convenient way to get props to the leaves of a tree of components."))}f.isMDXComponent=!0}}]);