"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9997],{15680:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>m,MDXProvider:()=>d,mdx:()=>f,useMDXComponents:()=>c,withMDXComponents:()=>s});var o=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},l.apply(this,arguments)}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=o.createContext({}),s=function(e){return function(t){var n=c(t.components);return o.createElement(e,l({},t,{components:n}))}},c=function(e){var t=o.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(m.Provider,{value:t},e.children)},y="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,r=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),s=c(n),d=a,y=s["".concat(r,".").concat(d)]||s[d]||u[d]||l;return n?o.createElement(y,p(p({ref:t},m),{},{components:n})):o.createElement(y,p({ref:t},m))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=h;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[y]="string"==typeof e?e:a,r[1]=p;for(var m=2;m<l;m++)r[m]=n[m];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},61749:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>p,metadata:()=>m,toc:()=>c});var o=n(58168),a=n(98587),l=(n(96540),n(15680)),r=["components"],p={id:"props",title:"Types of Props",keywords:["litho props","common props","litho style"]},i=void 0,m={unversionedId:"mainconcepts/props",id:"mainconcepts/props",title:"Types of Props",description:"The Components page details how to declare a component and its props as standard val properties. This page covers two more ways for a parent component to configure its children with props: Common props and Tree props.",source:"@site/../docs/mainconcepts/props.mdx",sourceDirName:"mainconcepts",slug:"/mainconcepts/props",permalink:"/docs/mainconcepts/props",draft:!1,editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/mainconcepts/props.mdx",tags:[],version:"current",frontMatter:{id:"props",title:"Types of Props",keywords:["litho props","common props","litho style"]},sidebar:"mainSidebar",previous:{title:"Components",permalink:"/docs/mainconcepts/components-basics"},next:{title:"Tree Props",permalink:"/docs/mainconcepts/treeprops"}},s={},c=[{value:"Common Props",id:"common-props",level:2},{value:"Combining a Style from above with a local Style",id:"combining-a-style-from-above-with-a-local-style",level:3},{value:"Working with Style",id:"working-with-style",level:3},{value:"Java - Kotlin compatibility",id:"java---kotlin-compatibility",level:3},{value:"See also",id:"see-also",level:3}],d={toc:c},y="wrapper";function u(e){var t=e.components,n=(0,a.A)(e,r);return(0,l.mdx)(y,(0,o.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("p",null,"The ",(0,l.mdx)("a",{parentName:"p",href:"/docs/mainconcepts/components-basics"},"Components")," page details how to declare a component and its ",(0,l.mdx)("strong",{parentName:"p"},"props")," as standard ",(0,l.mdx)("inlineCode",{parentName:"p"},"val")," properties. This page covers two more ways for a parent component to configure its children with props: ",(0,l.mdx)("a",{parentName:"p",href:"#common-props"},"Common props")," and ",(0,l.mdx)("a",{parentName:"p",href:"#tree-props"},"Tree props"),"."),(0,l.mdx)("h2",{id:"common-props"},"Common Props"),(0,l.mdx)("admonition",{type:"note"},(0,l.mdx)("p",{parentName:"admonition"},"A common prop is one of a set of properties that can be applied to any primitive component.")),(0,l.mdx)("p",null,"Common props are supported by all primitive components. They include View properties like ",(0,l.mdx)("inlineCode",{parentName:"p"},"onClick")," and ",(0,l.mdx)("inlineCode",{parentName:"p"},"background"),", visibility events like ",(0,l.mdx)("inlineCode",{parentName:"p"},"onVisible"),", as well as layout parameters like ",(0,l.mdx)("inlineCode",{parentName:"p"},"margin"),"."),(0,l.mdx)("p",null,"Common props are specified using the ",(0,l.mdx)("inlineCode",{parentName:"p"},"Style")," API, which enables one or more common props to be chained together into a Style object that is passed to the components as a prop, as shown in the following example:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-kotlin"},'val style = Style.margin(all = 4.px)\n    .backgroundColor(Color.RED)\n    .viewTag("my_view")\n')),(0,l.mdx)("p",null,"For a component to be configured with a Style, it should declare a Style prop (such as ",(0,l.mdx)("inlineCode",{parentName:"p"},"val style: Style? = null"),"). It should then pass that Style object to one of the components it renders to, usually the root component it returns from ",(0,l.mdx)("inlineCode",{parentName:"p"},"render"),". In this way, the Style will eventually end up on a primitive component (for example, ",(0,l.mdx)("inlineCode",{parentName:"p"},"Text")," or ",(0,l.mdx)("inlineCode",{parentName:"p"},"Row)"),". All common props end up being materialized by primitive components, as shown in the following example:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/kotlin/documentation/HelloComponent.kt start=start_styled_example end=end_styled_example",file:"sample/src/main/java/com/facebook/samples/litho/kotlin/documentation/HelloComponent.kt",start:"start_styled_example",end:"end_styled_example"},'class StyledHelloComponent(private val name: String, private val style: Style? = null) :\n    KComponent() {\n\n  override fun ComponentScope.render(): Component {\n    return Text(style = style, text = "Hello $name!")\n  }\n}\n\nval componentWithOnClick =\n    StyledHelloComponent(name = "Common Props", style = Style.onClick { log("clicked!") })\n')),(0,l.mdx)("h3",{id:"combining-a-style-from-above-with-a-local-style"},"Combining a Style from above with a local Style"),(0,l.mdx)("p",null,"The following 'more advanced' example shows how you can combine a Style taken from above with the Style the component itself wants to define:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/kotlin/documentation/ChildStylesExample.kt start=start_combine_style_example end=end_combine_style_example",file:"sample/src/main/java/com/facebook/samples/litho/kotlin/documentation/ChildStylesExample.kt",start:"start_combine_style_example",end:"end_combine_style_example"},'class OuterTextComponent : KComponent() {\n  override fun ComponentScope.render(): Component {\n    return InnerTextComponent(style = Style.margin(all = 8.dp))\n  }\n}\n\nclass InnerTextComponent(private val style: Style? = null) : KComponent() {\n  override fun ComponentScope.render(): Component {\n    return Text(\n        style = Style.padding(all = 8.dp).alpha(.5f) + style,\n        text = "I accept style from a parent!")\n  }\n}\n')),(0,l.mdx)("h3",{id:"working-with-style"},"Working with Style"),(0,l.mdx)("p",null,"In the above example, you may have noticed the use of ",(0,l.mdx)("inlineCode",{parentName:"p"},"+")," to combine the Style passed from ",(0,l.mdx)("inlineCode",{parentName:"p"},"OuterTextComponent")," and the styles that ",(0,l.mdx)("inlineCode",{parentName:"p"},"InnerTextComponent")," defines. The ",(0,l.mdx)("inlineCode",{parentName:"p"},"+")," operator combines two Styles into a single Style without mutating either:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-kotlin"},"val alphaStyle = Style.alpha(1f)\nval combinedStyle = alphaStyle + Style.padding(all = 8.dp).margin(all = 8.dp)\n\n// Result:\n//   alphaStyle: (alpha: 1f)\n//   combinedStyle: (alpha: 1f) <- (padding-all: 8.dp) <- (margin-all: 8.dp)\n")),(0,l.mdx)("p",null,"Note that ordering around ",(0,l.mdx)("inlineCode",{parentName:"p"},"+")," matters: if a Style property is defined twice, the ",(0,l.mdx)("strong",{parentName:"p"},"last")," definition takes precendence:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-kotlin"},"val alphaStyle = Style.alpha(1f)\nval combinedStyle = alphaStyle + Style.padding(all = 8.dp).alpha(.5f)\n\n// Result:\n//   combinedStyle will apply padding of 8.dp and alpha of .5f\n")),(0,l.mdx)("p",null,"Generally, ",(0,l.mdx)("inlineCode",{parentName:"p"},"Style")," objects are immutable: any time you combine styles or add new properties to a style, you get a new ",(0,l.mdx)("inlineCode",{parentName:"p"},"Style")," instance that contains all the properties of the previous style plus the new properties."),(0,l.mdx)("h3",{id:"java---kotlin-compatibility"},"Java - Kotlin compatibility"),(0,l.mdx)("p",null,"If you need to pass down a style from a Java class to a Kotlin component, use ",(0,l.mdx)("inlineCode",{parentName:"p"},"StyleCompat"),":"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-java",metastring:"file=sample/src/main/java/com/facebook/samples/litho/kotlin/documentation/OuterStyleComponentSpec.java start=start_combine_style_outer_example end=end_combine_style_outer_example",file:"sample/src/main/java/com/facebook/samples/litho/kotlin/documentation/OuterStyleComponentSpec.java",start:"start_combine_style_outer_example",end:"end_combine_style_outer_example"},"@LayoutSpec\nclass OuterStyleComponentSpec {\n\n  @OnCreateLayout\n  static Component onCreateLayout(ComponentContext c) {\n    return new InnerTextComponent(StyleCompat.marginDip(YogaEdge.ALL, 8).build());\n  }\n}\n")),(0,l.mdx)("p",null,"For passing style from Kotlin code to a Java Spec component, you can use ",(0,l.mdx)("inlineCode",{parentName:"p"},".kotlinStyle()"),", which is equivalent to setting all the common props the ",(0,l.mdx)("inlineCode",{parentName:"p"},"Style")," defines:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/kotlin/documentation/ChildStylesExample.kt start=start_combine_java_kotlin_style_example end=end_combine_java_kotlin_style_example",file:"sample/src/main/java/com/facebook/samples/litho/kotlin/documentation/ChildStylesExample.kt",start:"start_combine_java_kotlin_style_example",end:"end_combine_java_kotlin_style_example"},"class OuterStyleKComponent : KComponent() {\n  override fun ComponentScope.render(): Component {\n    val style = Style.margin(all = 8.dp)\n    return OuterStyleComponent.create(context).kotlinStyle(style).build()\n  }\n}\n")),(0,l.mdx)("h3",{id:"see-also"},"See also"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("strong",{parentName:"li"},(0,l.mdx)("a",{parentName:"strong",href:"/docs/mainconcepts/treeprops"},"Tree Props"))," - provides a way to give access to contextual objects, like a theme or logging utility, to all components in a sub-tree without having to manually pass them.")))}u.isMDXComponent=!0}}]);