"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4037],{75960:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(87462),o=n(67294),r=n(24544),p=n(7694),m=n(13618),i="0.41.1",l="0.41.2-SNAPSHOT",s="0.9.0",c="0.46.0",d=n(85350);const u=function(e){var t=e.language,n=e.code.replace(/{{site.lithoVersion}}/g,i).replace(/{{site.soloaderVersion}}/g,s).replace(/{{site.lithoSnapshotVersion}}/g,l).replace(/{{site.flipperVersion}}/g,c).trim(),u=(0,d.Z)().isDarkTheme?m.Z:p.Z;return o.createElement(r.ZP,(0,a.Z)({},r.lG,{code:n,language:t,theme:u}),(function(e){var t=e.className,n=e.style,a=e.tokens,r=e.getLineProps,p=e.getTokenProps;return o.createElement("pre",{className:t,style:n},a.map((function(e,t){return o.createElement("div",r({line:e,key:t}),e.map((function(e,t){return o.createElement("span",p({token:e,key:t}))})))})))}))}},91106:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>s,contentTitle:()=>c,metadata:()=>d,toc:()=>u,default:()=>x});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),p=n(44996),m=n(55064),i=n(58215),l=(n(75960),["components"]),s={id:"treeprops",title:"TreeProps"},c=void 0,d={unversionedId:"mainconcepts/passing-data-to-components/treeprops",id:"mainconcepts/passing-data-to-components/treeprops",isDocsHomePage:!1,title:"TreeProps",description:"A TreeProp is a special type of prop that is transparently passed from a parent component to its children. It provides a convenient way to share contextual data or utilities in a tree without having to explicitly pass props to every component in your hierarchy.",source:"@site/../docs/mainconcepts/passing-data-to-components/treeprops.mdx",sourceDirName:"mainconcepts/passing-data-to-components",slug:"/mainconcepts/passing-data-to-components/treeprops",permalink:"/docs/mainconcepts/passing-data-to-components/treeprops",editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/mainconcepts/passing-data-to-components/treeprops.mdx",tags:[],version:"current",frontMatter:{id:"treeprops",title:"TreeProps"},sidebar:"mainSidebar",previous:{title:"Props",permalink:"/docs/mainconcepts/passing-data-to-components/props"},next:{title:"Animation basics",permalink:"/docs/animations/transition-basics"}},u=[{value:"Declaring a TreeProp",id:"declaring-a-treeprop",children:[],level:2},{value:"Using a TreeProp",id:"using-a-treeprop",children:[],level:2},{value:"TreeProps with Lists",id:"treeprops-with-lists",children:[],level:2}],h={toc:u};function x(e){var t=e.components,n=(0,o.Z)(e,l);return(0,r.mdx)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("p",null,"A TreeProp is a special type of ",(0,r.mdx)("a",{parentName:"p",href:"/docs/mainconcepts/passing-data-to-components/props"},"prop")," that is transparently passed from a parent component to its children. It provides a convenient way to share contextual data or utilities in a tree without having to explicitly pass props to every component in your hierarchy."),(0,r.mdx)("p",null,"A good example of a TreeProp is a 'prefetcher', which fetches network images ahead of render time. Since images are commonplace, the prefetcher is widely used. The prefetcher implementation might be defined for any Component that needs to use it, without having to pass it as a prop in the entire component hierarchy."),(0,r.mdx)("h2",{id:"declaring-a-treeprop"},"Declaring a TreeProp"),(0,r.mdx)(m.default,{groupId:"tree_prop_tab_group",defaultValue:"kotlin",values:[{label:"Kotlin API",value:"kotlin"},{label:"Spec API",value:"java"}],mdxType:"Tabs"},(0,r.mdx)(i.default,{value:"kotlin",mdxType:"TabItem"},(0,r.mdx)("p",null,"In order to declare a TreeProp you need to use ",(0,r.mdx)("inlineCode",{parentName:"p"},"TreePropProvider"),":"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/documentation/treeprops/ParentKComponent.kt start=start_example end=end_example",file:"sample/src/main/java/com/facebook/samples/litho/documentation/treeprops/ParentKComponent.kt",start:"start_example",end:"end_example"},"class ParentKComponent(private val prefetcher: Prefetcher, private val imageUri: Uri) :\n    KComponent() {\n\n  override fun ComponentScope.render(): Component? {\n    return TreePropProvider(Prefetcher::class.java to prefetcher) { ChildKComponent(imageUri) }\n  }\n}\n"))),(0,r.mdx)(i.default,{value:"java",mdxType:"TabItem"},(0,r.mdx)("p",null,"Each TreeProp is declared and created from a method annotated with ",(0,r.mdx)("inlineCode",{parentName:"p"},"@OnCreateTreeProp"),":"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java",metastring:"file=sample/src/main/java/com/facebook/samples/litho/documentation/treeprops/ParentComponentSpec.java start=start_example end=end_example",file:"sample/src/main/java/com/facebook/samples/litho/documentation/treeprops/ParentComponentSpec.java",start:"start_example",end:"end_example"},"@LayoutSpec\npublic class ParentComponentSpec {\n\n  @OnCreateTreeProp\n  static Prefetcher onCreatePrefetcher(ComponentContext c, @Prop Prefetcher prefetcher) {\n    return prefetcher;\n  }\n\n  @OnCreateLayout\n  static Component onCreateLayout(ComponentContext c, @Prop Uri imageUri) {\n    return ChildComponent.create(c).imageUri(imageUri).build();\n  }\n}\n")))),(0,r.mdx)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,r.mdx)("h5",{parentName:"div"},(0,r.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,r.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.mdx)("div",{parentName:"div",className:"admonition-content"},(0,r.mdx)("p",{parentName:"div"},"You can only declare one TreeProp for any one given type. If a child of ",(0,r.mdx)("inlineCode",{parentName:"p"},"ParentComponent")," also defines a TreeProp of type ",(0,r.mdx)("inlineCode",{parentName:"p"},"Prefetcher"),", it will override the value of that TreeProp for all its children (but not for itself)."))),(0,r.mdx)("h2",{id:"using-a-treeprop"},"Using a TreeProp"),(0,r.mdx)(m.default,{groupId:"tree_prop_tab_group",defaultValue:"kotlin",values:[{label:"Kotlin API",value:"kotlin"},{label:"Spec API",value:"java"}],mdxType:"Tabs"},(0,r.mdx)(i.default,{value:"kotlin",mdxType:"TabItem"},(0,r.mdx)("p",null,"The child component can access the TreeProp value through a ",(0,r.mdx)("inlineCode",{parentName:"p"},"ComponentScope.getTreeProp<Type>()")," method call, where ",(0,r.mdx)("inlineCode",{parentName:"p"},"Type")," is the same type which was provided in ",(0,r.mdx)("inlineCode",{parentName:"p"},"TreePropProvider")," call in one of its parents."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/documentation/treeprops/ChildKComponent.kt start=start_example end=end_example",file:"sample/src/main/java/com/facebook/samples/litho/documentation/treeprops/ChildKComponent.kt",start:"start_example",end:"end_example"},'class ChildKComponent(private val imageUri: Uri) : KComponent() {\n\n  override fun ComponentScope.render(): Component {\n    val prefetcher = getTreeProp<Prefetcher>()\n\n    prefetcher?.prefetch(imageUri)\n    // ...\n    return Text("Prefetch image when this component is created")\n  }\n}\n'))),(0,r.mdx)(i.default,{value:"java",mdxType:"TabItem"},(0,r.mdx)("p",null,"The child component can access the TreeProp value through a parameter annotated with ",(0,r.mdx)("inlineCode",{parentName:"p"},"@TreeProp")," that has the same type as the return type of one of the ",(0,r.mdx)("inlineCode",{parentName:"p"},"@OnCreateTreeProp")," methods defined in the ancestors of child component."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java",metastring:"file=sample/src/main/java/com/facebook/samples/litho/documentation/treeprops/ChildComponentSpec.java start=start_example end=end_example",file:"sample/src/main/java/com/facebook/samples/litho/documentation/treeprops/ChildComponentSpec.java",start:"start_example",end:"end_example"},'@LayoutSpec\nclass ChildComponentSpec {\n  @OnCreateLayout\n  static Component onCreateLayout(\n      ComponentContext c, @Prop Uri imageUri, @Nullable @TreeProp Prefetcher prefetcher) {\n    if (prefetcher != null) {\n      prefetcher.prefetch(imageUri);\n    }\n    // ...\n    return Column.create(c)\n        .child(Text.create(c).text("Prefetch image when this component is created"))\n        .build();\n  }\n}\n')))),(0,r.mdx)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,r.mdx)("h5",{parentName:"div"},(0,r.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,r.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"IMPORTANT")),(0,r.mdx)("div",{parentName:"div",className:"admonition-content"},(0,r.mdx)("p",{parentName:"div"},"Once created, the TreeProp value is passed down to all children but isn't accessible from the component that created the TreeProp."))),(0,r.mdx)("p",null,"If you want to access a TreeProp from the component that created it, you can transform it into ",(0,r.mdx)("a",{parentName:"p",href:"/docs/mainconcepts/coordinate-state-actions/state-overview"},"State")," as follows:"),(0,r.mdx)(m.default,{groupId:"tree_prop_tab_group",defaultValue:"kotlin",values:[{label:"Kotlin API",value:"kotlin"},{label:"Spec API",value:"java"}],mdxType:"Tabs"},(0,r.mdx)(i.default,{value:"kotlin",mdxType:"TabItem"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/documentation/treeprops/ParentComponentTreePropAsStateKComponent.kt start=start_example end=end_example",file:"sample/src/main/java/com/facebook/samples/litho/documentation/treeprops/ParentComponentTreePropAsStateKComponent.kt",start:"start_example",end:"end_example"},'class ParentComponentTreePropAsStateKComponent() : KComponent() {\n\n  override fun ComponentScope.render(): Component? {\n    val importantHelper = useState { ImportantHelper() }\n\n    return TreePropProvider(ImportantHelper::class.java to importantHelper) {\n      Column() { child(Text(text = "ImportantHelper can be used as State in render function")) }\n    }\n  }\n}\n'))),(0,r.mdx)(i.default,{value:"java",mdxType:"TabItem"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java",metastring:"file=sample/src/main/java/com/facebook/samples/litho/documentation/treeprops/ParentComponentTreePropAsStateSpec.java start=start_example end=end_example",file:"sample/src/main/java/com/facebook/samples/litho/documentation/treeprops/ParentComponentTreePropAsStateSpec.java",start:"start_example",end:"end_example"},'@LayoutSpec\npublic class ParentComponentTreePropAsStateSpec {\n\n  @OnCreateInitialState\n  static void createInitialState(ComponentContext c, StateValue<ImportantHelper> helper) {\n    helper.set(new ImportantHelper());\n  }\n\n  @OnCreateTreeProp\n  static ImportantHelper onCreateHelper(ComponentContext c, @State ImportantHelper helper) {\n    return helper;\n  }\n\n  @OnCreateLayout\n  static Component onCreateLayout(ComponentContext c, @State ImportantHelper helper) {\n    return Column.create(c)\n        .child(\n            Text.create(c).text("ImportantHelper can be used as State in onCreateLayout").build())\n        .build();\n  }\n}\n')))),(0,r.mdx)("h2",{id:"treeprops-with-lists"},"TreeProps with Lists"),(0,r.mdx)("p",null,"TreeProps can be used in Components, Sections and Lazy Collections. They can even be modified between them."),(0,r.mdx)("p",null,"The following code is an example of a logging data structure that is passed down from the root component to capture information about the hierarchy."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java",metastring:"file=sample/src/main/java/com/facebook/samples/litho/documentation/treeprops/LogContext.java start=start_example end=end_example",file:"sample/src/main/java/com/facebook/samples/litho/documentation/treeprops/LogContext.java",start:"start_example",end:"end_example"},'public class LogContext {\n  public final String tag;\n\n  public LogContext(String tag) {\n    this.tag = tag;\n  }\n\n  public static LogContext append(@Nullable LogContext parentContext, String tag) {\n    if (parentContext == null) {\n      return new LogContext(tag);\n    }\n    return new LogContext(parentContext.tag + ":" + tag);\n  }\n\n  public String toString() {\n    return tag;\n  }\n}\n')),(0,r.mdx)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,r.mdx)("h5",{parentName:"div"},(0,r.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,r.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.mdx)("div",{parentName:"div",className:"admonition-content"},(0,r.mdx)("p",{parentName:"div"},"Immutable TreeProps are easier to understand so try to follow that design pattern whenever possible."))),(0,r.mdx)("p",null,"The following diagram shows the component hierarchy."),(0,r.mdx)("img",{src:(0,p.default)("/images/treeprop-sections.png")}),(0,r.mdx)(m.default,{groupId:"tree_prop_tab_group",defaultValue:"kotlin",values:[{label:"Kotlin API",value:"kotlin"},{label:"Spec API",value:"java"}],mdxType:"Tabs"},(0,r.mdx)(i.default,{value:"kotlin",mdxType:"TabItem"},(0,r.mdx)("p",null,"Start by setting up the ",(0,r.mdx)("inlineCode",{parentName:"p"},"RootComponent")," with the ",(0,r.mdx)("inlineCode",{parentName:"p"},"LazyList")," as one of its children:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/documentation/treeprops/RootKComponent.kt start=start_example end=end_example",file:"sample/src/main/java/com/facebook/samples/litho/documentation/treeprops/RootKComponent.kt",start:"start_example",end:"end_example"},'class RootKComponent : KComponent() {\n\n  override fun ComponentScope.render(): Component? {\n    return TreePropProvider(LogContext::class.java to LogContext("root")) {\n      Column() {\n        child(LeafKComponent())\n        child(LazyList(style = Style.height(500.dp)) { child(TopGroupKComponent()) })\n      }\n    }\n  }\n}\n')),(0,r.mdx)("p",null,"The TopGroupKComponent takes in the root TreeProp and adds its ",(0,r.mdx)("inlineCode",{parentName:"p"},'"top"')," tag to it:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/documentation/treeprops/TopGroupKComponent.kt start=start_example end=end_example",file:"sample/src/main/java/com/facebook/samples/litho/documentation/treeprops/TopGroupKComponent.kt",start:"start_example",end:"end_example"},'class TopGroupKComponent : KComponent() {\n\n  override fun ComponentScope.render(): Component? {\n    val parentLogContext = getTreeProp<LogContext>()\n    val topGroupLogContext = LogContext.append(parentLogContext, "top")\n\n    return TreePropProvider(LogContext::class.java to topGroupLogContext) {\n      Column {\n        child(LeafKComponent())\n        child(BottomGroupKComponent())\n      }\n    }\n  }\n}\n')),(0,r.mdx)("p",null,"The bottom part here has been omitted for brevity, but you can find it in the repository under ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/facebook/litho/tree/master/sample/src/main/java/com/facebook/samples/litho/documentation/treeprops"},"samples"),"."),(0,r.mdx)("p",null,"The leaf node renders the TreeProp as text in the example case but would normally perform some sort of logging based on the context:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/documentation/treeprops/LeafKComponent.kt start=start_example end=end_example",file:"sample/src/main/java/com/facebook/samples/litho/documentation/treeprops/LeafKComponent.kt",start:"start_example",end:"end_example"},'class LeafKComponent() : KComponent() {\n\n  override fun ComponentScope.render(): Component {\n    val parentLogContext = getTreeProp<LogContext>()\n    return Text(text = LogContext.append(parentLogContext, "leaf").toString())\n  }\n}\n'))),(0,r.mdx)(i.default,{value:"java",mdxType:"TabItem"},(0,r.mdx)("p",null,"Start by setting up the ",(0,r.mdx)("inlineCode",{parentName:"p"},"RootComponent")," with the ",(0,r.mdx)("inlineCode",{parentName:"p"},"RecyclerCollectionComponent")," as one of its children:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java",metastring:"file=sample/src/main/java/com/facebook/samples/litho/documentation/treeprops/RootComponentSpec.java start=start_example end=end_example",file:"sample/src/main/java/com/facebook/samples/litho/documentation/treeprops/RootComponentSpec.java",start:"start_example",end:"end_example"},'@LayoutSpec\npublic class RootComponentSpec {\n  @OnCreateLayout\n  static Component onCreateLayout(ComponentContext c) {\n    return Column.create(c)\n        .child(LeafComponent.create(c))\n        .child(\n            RecyclerCollectionComponent.create(c)\n                .section(TopGroupSection.create(new SectionContext(c)).build())\n                .heightDip(500)\n                .build())\n        .build();\n  }\n\n  @OnCreateTreeProp\n  static LogContext onCreateTestTreeProp(ComponentContext c) {\n    return new LogContext("root");\n  }\n}\n')),(0,r.mdx)("p",null,"The TopGroupSection takes in the root TreeProp and adds its ",(0,r.mdx)("inlineCode",{parentName:"p"},'"top"')," tag to it:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java",metastring:"file=sample/src/main/java/com/facebook/samples/litho/documentation/treeprops/TopGroupSectionSpec.java start=start_example end=end_example",file:"sample/src/main/java/com/facebook/samples/litho/documentation/treeprops/TopGroupSectionSpec.java",start:"start_example",end:"end_example"},'@GroupSectionSpec\npublic class TopGroupSectionSpec {\n\n  @OnCreateChildren\n  protected static Children onCreateChildren(SectionContext c) {\n    return Children.create()\n        .child(SingleComponentSection.create(c).component(LeafComponent.create(c)))\n        .child(BottomGroupSection.create(c).build())\n        .build();\n  }\n\n  @OnCreateTreeProp\n  static LogContext onCreateTestTreeProp(SectionContext c, @TreeProp LogContext parentLogContext) {\n    return LogContext.append(parentLogContext, "top");\n  }\n}\n')),(0,r.mdx)("p",null,"The bottom part has been omitted here for brevity, but you can find it in the repository under ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/facebook/litho/tree/master/sample/src/main/java/com/facebook/samples/litho/documentation/treeprops"},"samples"),"."),(0,r.mdx)("p",null,"The leaf node simply renders the TreeProp as text in our example case here, but would normally perform some sort of logging based on the context:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java",metastring:"file=sample/src/main/java/com/facebook/samples/litho/documentation/treeprops/LeafComponentSpec.java start=start_example end=end_example",file:"sample/src/main/java/com/facebook/samples/litho/documentation/treeprops/LeafComponentSpec.java",start:"start_example",end:"end_example"},'@LayoutSpec\npublic class LeafComponentSpec {\n  @OnCreateLayout\n  static Component onCreateLayout(ComponentContext c, @TreeProp LogContext parentLogContext) {\n    return Text.create(c).text(LogContext.append(parentLogContext, "leaf").toString()).build();\n  }\n}\n')))),(0,r.mdx)("p",null,"The on-screen result is three rows of text that read:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},'"root:leaf"')),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},'"root:top:leaf"')),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},'"root:top:bottom:leaf"'))),(0,r.mdx)("p",null,"This illustrates how TreeProps propagate through both component and section trees and can be used to selectively share information with their children."))}x.isMDXComponent=!0}}]);