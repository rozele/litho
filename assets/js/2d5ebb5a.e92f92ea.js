"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3273],{74646:(n,e,t)=>{t.d(e,{A:()=>c});var o=t(58168),i=t(96540),a=t(68382),r=t(45603),m=t(76062),l="0.50.0",d="0.51.0-SNAPSHOT",p="0.10.5",u="0.142.0",s=t(6342);const c=function(n){var e=n.language,t=n.code.replace(/{{site.lithoVersion}}/g,l).replace(/{{site.soloaderVersion}}/g,p).replace(/{{site.lithoSnapshotVersion}}/g,d).replace(/{{site.flipperVersion}}/g,u).trim(),c=(0,s.p)().isDarkTheme?m.A:r.A;return i.createElement(a.Ay,(0,o.A)({},a.Gs,{code:t,language:e,theme:c}),(function(n){var e=n.className,t=n.style,o=n.tokens,a=n.getLineProps,r=n.getTokenProps;return i.createElement("pre",{className:e,style:t},o.map((function(n,e){return i.createElement("div",a({line:n,key:e}),n.map((function(n,e){return i.createElement("span",r({token:n,key:e}))})))})))}))}},71776:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>m,metadata:()=>d,toc:()=>u});var o=t(58168),i=t(98587),a=(t(96540),t(15680)),r=(t(11470),t(19365),t(74646),["components"]),m={id:"migrating-from-mountspecs-to-primitives",title:"Migrating MountSpecs"},l=void 0,d={unversionedId:"kotlin/migrating-from-mountspecs-to-primitives",id:"kotlin/migrating-from-mountspecs-to-primitives",title:"Migrating MountSpecs",description:"This page outlines the process of migrating from MountSpecs to Primitive Components.",source:"@site/../docs/kotlin/migrating-from-mountspecs-to-primitives.mdx",sourceDirName:"kotlin",slug:"/kotlin/migrating-from-mountspecs-to-primitives",permalink:"/docs/kotlin/migrating-from-mountspecs-to-primitives",draft:!1,editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/kotlin/migrating-from-mountspecs-to-primitives.mdx",tags:[],version:"current",frontMatter:{id:"migrating-from-mountspecs-to-primitives",title:"Migrating MountSpecs"},sidebar:"mainSidebar",previous:{title:"Event Handling",permalink:"/docs/kotlin/event-handling"},next:{title:"Migrating Sections",permalink:"/docs/kotlin/lazycollections/lazycollections-sections-migration"}},p={},u=[{value:"Setup - Adding Dependencies",id:"setup---adding-dependencies",level:2},{value:"Example",id:"example",level:2},{value:"Migrating <code>MountSpec</code> to <code>PrimitiveComponent</code>",id:"migrating-mountspec-to-primitivecomponent",level:2},{value:"Creating components",id:"creating-components",level:3},{value:"Passing props",id:"passing-props",level:3},{value:"Common props",id:"common-props",level:4},{value:"Creating mountable content",id:"creating-mountable-content",level:3},{value:"Measurement",id:"measurement",level:3},{value:"<code>@OnMeasure</code>",id:"onmeasure",level:4},{value:"<code>@OnBoundsDefined</code>",id:"onboundsdefined",level:4},{value:"Mounting content",id:"mounting-content",level:3},{value:"<code>@OnMount/@OnUnmount</code> and <code>@ShouldUpdate</code>",id:"onmountonunmount-and-shouldupdate",level:4},{value:"<code>@OnBind/@OnUnbind</code>",id:"onbindonunbind",level:4},{value:"<code>@OnBindDynamicValue</code>",id:"onbinddynamicvalue",level:4},{value:"Pre-allocation",id:"pre-allocation",level:3},{value:"Pre-filling content pool",id:"pre-filling-content-pool",level:3},{value:"<code>hasChildLithoViews</code>",id:"haschildlithoviews",level:3},{value:"<code>@ShouldExcludeFromIncrementalMount</code>",id:"shouldexcludefromincrementalmount",level:3},{value:"Others",id:"others",level:3},{value:"<code>isPureRender</code>",id:"ispurerender",level:4},{value:"<code>@OnPrepare</code> and<code>@OnLoadStyle</code>",id:"onprepare-andonloadstyle",level:4}],s={toc:u},c="wrapper";function h(n){var e=n.components,t=(0,i.A)(n,r);return(0,a.mdx)(c,(0,o.A)({},s,t,{components:e,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,"This page outlines the process of migrating from ",(0,a.mdx)("a",{parentName:"p",href:"/docs/codegen/mount-specs"},"MountSpecs")," to ",(0,a.mdx)("a",{parentName:"p",href:"/docs/mainconcepts/primitivecomponents/primitive-component"},"Primitive Components"),"."),(0,a.mdx)("p",null,"Unlike MountSpecs, Primitive Components consist of two separate pieces:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"PrimitiveComponent.render()")," - a method that returns a ",(0,a.mdx)("inlineCode",{parentName:"li"},"Primitive")," and ",(0,a.mdx)("inlineCode",{parentName:"li"},"Style")," that will be applied to it."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"Primitive")," - an object that encapsulates the logic for creating, measuring, and setting properties on the mount content (a ",(0,a.mdx)("inlineCode",{parentName:"li"},"View")," or a ",(0,a.mdx)("inlineCode",{parentName:"li"},"Drawable"),").")),(0,a.mdx)("p",null,"The following two sections contain information on how to migrate MountSpec static lifecycle methods into a Primitive Component ",(0,a.mdx)("inlineCode",{parentName:"p"},"render()")," and the ",(0,a.mdx)("inlineCode",{parentName:"p"},"Primitive")," it returns. The ",(0,a.mdx)("a",{parentName:"p",href:"/docs/kotlin/kotlin-api-cheatsheet"},"Cheatsheet")," can also be consulted for a set of links for the migration of individual aspects of existing code."),(0,a.mdx)("h2",{id:"setup---adding-dependencies"},"Setup - Adding Dependencies"),(0,a.mdx)("p",null,"To use the Kotlin Litho API you'll need to add the following dependencies into your BUCK file:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-python",metastring:'title="BUCK"',title:'"BUCK"'},'deps = [\n    "//fbandroid/libraries/components:litho_core_kotlin",\n    "//fbandroid/libraries/components/litho-widget-kotlin/src/main/kotlin/com/facebook/litho/kotlin/widget:widget", # for widgets\n],\n')),(0,a.mdx)("p",null,"More details on the setup steps are outlined in the ",(0,a.mdx)("a",{parentName:"p",href:"/docs/kotlin/kotlin-intro"},"Introduction and Setup")," page."),(0,a.mdx)("h2",{id:"example"},"Example"),(0,a.mdx)("p",null,"The below example shows a comparison of a simple component implemented with MountSpec and Primitive Component API."),(0,a.mdx)("table",null,(0,a.mdx)("tr",null,(0,a.mdx)("th",null,"MountSpec"),(0,a.mdx)("th",null,"PrimitiveComponent")),(0,a.mdx)("tr",null,(0,a.mdx)("td",null,(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-kotlin"},"@MountSpec\nobject FooComponentSpec {\n  @OnCreateMountContent\n  fun onCreateMountContent(\n    context: Context\n  ): View {\n    return View(context)\n  }\n\n  @OnMeasure\n  fun onMeasure(\n      c: ComponentContext,\n      layout: ComponentLayout,\n      widthSpec: Int,\n      heightSpec: Int,\n      size: Size\n  ) {\n    size.width = 100\n    size.height = 200\n  }\n\n  @OnMount\n  fun onMount(\n      c: ComponentContext,\n      view: View,\n      @Prop description: String\n  ) {\n    view.contentDescription = description\n  }\n\n  @OnUnmount\n  fun onUnmount(\n      c: ComponentContext,\n      view: View\n  ) {\n    view.contentDescription = null\n  }\n\n  @ShouldUpdate\n  fun shouldUpdate(\n    @Prop description: Diff<String>\n  ): Boolean {\n      return description.previous\n              != description.next\n  }\n}\n"))),(0,a.mdx)("td",null,(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-kotlin"},"class FooComponent(\n  private val description: String\n): PrimitiveComponent() {\n  override fun PrimitiveComponentScope.render(): LithoPrimitive {\n    return LithoPrimitive(\n      layoutBehavior = FooLayoutBehavior,\n      mountBehavior = MountBehavior(\n        ViewAllocator { context -> View(context) }\n      ) {\n        description.bindTo(View::setContentDescription, null)\n      }\n    )\n  }\n}\n\nprivate object FooLayoutBehavior: LayoutBehavior {\n  override fun LayoutScope.layout(\n    sizeConstraints: SizeConstraints\n  ): PrimitiveLayoutResult {\n    return PrimitiveLayoutResult(\n      width = 100,\n      height = 200\n    )\n  }\n}\n"))))),(0,a.mdx)("p",null,"The Primitive Component API is composable, its most important building blocks are:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"ViewAllocator")," - responsible for creating the content it hosts. Content can be a ",(0,a.mdx)("inlineCode",{parentName:"li"},"View")," or a ",(0,a.mdx)("inlineCode",{parentName:"li"},"Drawable"),". For the latter, the ",(0,a.mdx)("inlineCode",{parentName:"li"},"DrawableAllocator")," should be used."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"LayoutBehavior")," - responsible for measuring and determining the final size of the ",(0,a.mdx)("inlineCode",{parentName:"li"},"Component"),"."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"MountBehavior")," - responsible for setting and unsetting properties on the content.")),(0,a.mdx)("p",null,"For more information about Primitive Component API refer to the ",(0,a.mdx)("a",{parentName:"p",href:"/docs/mainconcepts/primitivecomponents/overview"},"documentation"),"."),(0,a.mdx)("h2",{id:"migrating-mountspec-to-primitivecomponent"},"Migrating ",(0,a.mdx)("inlineCode",{parentName:"h2"},"MountSpec")," to ",(0,a.mdx)("inlineCode",{parentName:"h2"},"PrimitiveComponent")),(0,a.mdx)("h3",{id:"creating-components"},"Creating components"),(0,a.mdx)("p",null,"In the MountSpec API the component spec class serves as a description which is used by the annotation processor to generate the actual component at compile time. In the Primitive Component API the component is a regular class and annotation processing is no longer needed. To get more details you can read ",(0,a.mdx)("a",{parentName:"p",href:"/docs/mainconcepts/primitivecomponents/primitive-component"},"Creating a Primitive Component")," page."),(0,a.mdx)("table",null,(0,a.mdx)("tr",null,(0,a.mdx)("th",null,"MountSpec"),(0,a.mdx)("th",null,"PrimitiveComponent")),(0,a.mdx)("tr",null,(0,a.mdx)("td",null,(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-kotlin"},"@MountSpec\nobject FooComponentSpec {\n  ...\n}\n"))),(0,a.mdx)("td",null,(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-kotlin"},"class FooComponent: PrimitiveComponent() {\n  ...\n}\n"))))),(0,a.mdx)("h3",{id:"passing-props"},"Passing props"),(0,a.mdx)("p",null,"In Spec API for every method parameter annotated with ",(0,a.mdx)("inlineCode",{parentName:"p"},"@Prop")," annotation, a builder method is generated for setting a value of that property when instantiating the component. In Kotlin API props are passed as constructor parameters, and ",(0,a.mdx)("inlineCode",{parentName:"p"},"@PropDefault"),"s are replaced by default values of these parameters."),(0,a.mdx)("table",null,(0,a.mdx)("tr",null,(0,a.mdx)("th",null,"MountSpec"),(0,a.mdx)("th",null,"PrimitiveComponent")),(0,a.mdx)("tr",null,(0,a.mdx)("td",null,(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-kotlin"},"@MountSpec\nobject FooComponentSpec {\n\n  @PropDefault const val progress = 0f\n\n  @OnMount\n  fun onMount(\n      c: ComponentContext,\n      view: View,\n      @Prop description: String,\n      @Prop(optional = true) progress: Float\n  ) {\n    view.contentDescription = description\n  }\n}\n"))),(0,a.mdx)("td",null,(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-kotlin"},"class FooComponent(\n  private val description: String,\n  private val progress: Float = 0f\n): PrimitiveComponent() {\n  ...\n}\n"))))),(0,a.mdx)("h4",{id:"common-props"},"Common props"),(0,a.mdx)("p",null,"In Spec API common props such as ",(0,a.mdx)("inlineCode",{parentName:"p"},"margin"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"clickHandler"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"alpha")," could be applied to any \u0441omponent using its generated builder methods. In Primitive Component API similar to other Kotlin API components, if a component wants to accept common props they should be passed via ",(0,a.mdx)("inlineCode",{parentName:"p"},"Style")," prop."),(0,a.mdx)("table",null,(0,a.mdx)("tr",null,(0,a.mdx)("th",null,"MountSpec"),(0,a.mdx)("th",null,"PrimitiveComponent")),(0,a.mdx)("tr",null,(0,a.mdx)("td",null,(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-kotlin"},"FooComponent.create(c)\n  .scale(2f)\n  .build()\n"))),(0,a.mdx)("td",null,(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-kotlin"},"// Allow accepting [Style] for customizing common props\nclass FooComponent(\n  private val style: Style? = null\n): PrimitiveComponent() {\n  override fun PrimitiveComponentScope.render(): LithoPrimitive {\n    return LithoPrimitive(\n      ...\n      style = style\n    )\n  }\n}\n\n// Pass properly configured [Style] instance to a Component\nFooComponent(\n  style = Style.scale(2f)\n)\n"))))),(0,a.mdx)("h3",{id:"creating-mountable-content"},"Creating mountable content"),(0,a.mdx)("p",null,"In MountSpec API content creation is configured in the method annotated with ",(0,a.mdx)("inlineCode",{parentName:"p"},"@OnCreateMountContent")," annotation by returning a proper ",(0,a.mdx)("inlineCode",{parentName:"p"},"View")," or ",(0,a.mdx)("inlineCode",{parentName:"p"},"Drawable")," instance. In Primitive Components API it is implemented by creating a ",(0,a.mdx)("inlineCode",{parentName:"p"},"ViewAllocator")," or a ",(0,a.mdx)("inlineCode",{parentName:"p"},"DrawableAllocator")," and passing it to ",(0,a.mdx)("inlineCode",{parentName:"p"},"MountBehavior"),"."),(0,a.mdx)("p",null,"More information on Primitive content creation can be found on the dedicated ",(0,a.mdx)("a",{parentName:"p",href:"/docs/mainconcepts/primitivecomponents/primitive/#content-creation"},"Lifecycle of a Primitive Component")," page."),(0,a.mdx)("table",null,(0,a.mdx)("tr",null,(0,a.mdx)("th",null,"MountSpec"),(0,a.mdx)("th",null,"PrimitiveComponent")),(0,a.mdx)("tr",null,(0,a.mdx)("td",null,(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-kotlin"},"@MountSpec\nobject FooComponentSpec {\n  @OnCreateMountContent\n  fun onCreateMountContent(\n    context: Context\n  ): View {\n    return View(context)\n  }\n}\n"))),(0,a.mdx)("td",null,(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-kotlin"},"class FooComponent: PrimitiveComponent() {\n  override fun PrimitiveComponentScope.render(): LithoPrimitive {\n    return LithoPrimitive(\n      ...\n      mountBehavior = MountBehavior(\n        ViewAllocator { context -> View(context) }\n      ) {\n        ...\n      }\n    )\n  }\n}\n"))))),(0,a.mdx)("h3",{id:"measurement"},"Measurement"),(0,a.mdx)("h4",{id:"onmeasure"},(0,a.mdx)("inlineCode",{parentName:"h4"},"@OnMeasure")),(0,a.mdx)("p",null,"Measuring a component using MountSpec API is done by implementing a method annotated with ",(0,a.mdx)("inlineCode",{parentName:"p"},"@OnMeasure")," annotation. The size of a component is returned by setting ",(0,a.mdx)("inlineCode",{parentName:"p"},"width")," and ",(0,a.mdx)("inlineCode",{parentName:"p"},"height")," values on the ",(0,a.mdx)("inlineCode",{parentName:"p"},"Size")," input parameter. In Primitive Component API the measurement logic is defined in an implementation of ",(0,a.mdx)("inlineCode",{parentName:"p"},"LayoutBehavior")," interface. The size of a component is returned in ",(0,a.mdx)("inlineCode",{parentName:"p"},"PrimitiveLayoutResult"),"."),(0,a.mdx)("p",null,"More information on Primitive Component content measurement can be found ",(0,a.mdx)("a",{parentName:"p",href:"/docs/mainconcepts/primitivecomponents/primitive-measuring"},"here"),"."),(0,a.mdx)("table",null,(0,a.mdx)("tr",null,(0,a.mdx)("th",null,"MountSpec"),(0,a.mdx)("th",null,"PrimitiveComponent")),(0,a.mdx)("tr",null,(0,a.mdx)("td",null,(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-kotlin"},"@MountSpec\nobject FooComponentSpec {\n  @OnMeasure\n  fun onMeasure(\n      c: ComponentContext,\n      layout: ComponentLayout,\n      widthSpec: Int,\n      heightSpec: Int,\n      size: Size\n  ) {\n    size.width = 100\n    size.height = 200\n  }\n}\n"))),(0,a.mdx)("td",null,(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-kotlin"},"class FooComponent: PrimitiveComponent() {\n  override fun PrimitiveComponentScope.render(): LithoPrimitive {\n    return LithoPrimitive(\n      ...\n      layoutBehavior = FooLayoutBehavior\n    )\n  }\n}\n\nprivate object FooLayoutBehavior: LayoutBehavior {\n  override fun LayoutScope.layout(\n    sizeConstraints: SizeConstraints\n  ): PrimitiveLayoutResult {\n    return PrimitiveLayoutResult(\n      width = 100,\n      height = 200\n    )\n  }\n}\n"))))),(0,a.mdx)("h4",{id:"onboundsdefined"},(0,a.mdx)("inlineCode",{parentName:"h4"},"@OnBoundsDefined")),(0,a.mdx)("p",null,"The method annotated with ",(0,a.mdx)("inlineCode",{parentName:"p"},"@OnBoundsDefined")," annotation can ",(0,a.mdx)("a",{parentName:"p",href:"/docs/codegen/mount-specs/#inter-stage-inputs-and-outputs"},"receive outputs")," from method annotated with ",(0,a.mdx)("inlineCode",{parentName:"p"},"@OnMeasure")," annotation and is executed after layout calculation. It can be used to perform additional operations after final size of the Component is known, but before the Component is mounted. In Primitive Component API the logic needs to be merged into a single ",(0,a.mdx)("inlineCode",{parentName:"p"},"layout()")," method."),(0,a.mdx)("table",null,(0,a.mdx)("tr",null,(0,a.mdx)("th",null,"MountSpec"),(0,a.mdx)("th",null,"PrimitiveComponent")),(0,a.mdx)("tr",null,(0,a.mdx)("td",null,(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-kotlin"},"@MountSpec\nobject FooComponentSpec {\n  @OnMeasure\n  fun onMeasure(\n      c: ComponentContext,\n      layout: ComponentLayout,\n      widthSpec: Int,\n      heightSpec: Int,\n      size: Size,\n      measuredWidth: Output<Integer>,\n      measuredHeight: Output<Integer>\n  ) {\n    val width = ...\n    val height = ...\n\n    measuredWidth.set(width)\n    measuredHeight.set(height)\n\n    size.width = width\n    size.height = height\n  }\n\n  @OnBoundsDefined\n  fun onBoundsDefined(\n      c: ComponentContext,\n      layout: ComponentLayout,\n      @FromMeasure\n      measuredWidth: Int?,\n      @FromMeasure\n      measuredHeight: Int?) {\n    // Use measuredWidth and measuredHeight.\n  }\n}\n"))),(0,a.mdx)("td",null,(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-kotlin"},"class FooComponent: PrimitiveComponent() {\n  override fun PrimitiveComponentScope.render(): LithoPrimitive {\n    return LithoPrimitive(\n      ...\n      layoutBehavior = FooLayoutBehavior\n    )\n  }\n}\n\nprivate object FooLayoutBehavior: LayoutBehavior {\n  override fun LayoutScope.layout(\n    sizeConstraints: SizeConstraints\n  ): PrimitiveLayoutResult {\n    val width = ...\n    val height = ...\n\n    // Use width and height.\n\n    return PrimitiveLayoutResult(\n      width = width,\n      height = height\n    )\n  }\n}\n"))))),(0,a.mdx)("admonition",{type:"note"},(0,a.mdx)("p",{parentName:"admonition"},"For most common measurement use cases, there are a few ",(0,a.mdx)("a",{parentName:"p",href:"/docs/mainconcepts/primitivecomponents/primitive-measuring"},"built-in")," ",(0,a.mdx)("inlineCode",{parentName:"p"},"LayoutBehavior")," implementations available.")),(0,a.mdx)("h3",{id:"mounting-content"},"Mounting content"),(0,a.mdx)("h4",{id:"onmountonunmount-and-shouldupdate"},(0,a.mdx)("inlineCode",{parentName:"h4"},"@OnMount/@OnUnmount")," and ",(0,a.mdx)("inlineCode",{parentName:"h4"},"@ShouldUpdate")),(0,a.mdx)("p",null,"In MountSpec API the properties can be set and unset on the content in methods annotated with ",(0,a.mdx)("inlineCode",{parentName:"p"},"@OnMount")," and ",(0,a.mdx)("inlineCode",{parentName:"p"},"@OnUnmount"),". Additionally a method annotated with ",(0,a.mdx)("inlineCode",{parentName:"p"},"@ShouldUpdate")," can be added to tell the framework when the content should be re-mounted - if ",(0,a.mdx)("inlineCode",{parentName:"p"},"@ShouldUpdate")," method returns true, then ",(0,a.mdx)("inlineCode",{parentName:"p"},"@OnUnmount")," method will be invoked, followed by ",(0,a.mdx)("inlineCode",{parentName:"p"},"@OnMount")," method. In Primitive Components, the ",(0,a.mdx)("inlineCode",{parentName:"p"},"bind(deps){}")," API should be used. The ",(0,a.mdx)("inlineCode",{parentName:"p"},"deps")," parameter is used as a replacement of ",(0,a.mdx)("inlineCode",{parentName:"p"},"@ShouldUpdate")," method - the ",(0,a.mdx)("inlineCode",{parentName:"p"},"deps")," are automatically checked to determine if re-mount should happen."),(0,a.mdx)("p",null,"More information on mounting content with Primitive Component API can be found ",(0,a.mdx)("a",{parentName:"p",href:"/docs/mainconcepts/primitivecomponents/primitive/#mounting-and-unmounting-content-properties"},"here"),"."),(0,a.mdx)("table",null,(0,a.mdx)("tr",null,(0,a.mdx)("th",null,"MountSpec"),(0,a.mdx)("th",null,"PrimitiveComponent")),(0,a.mdx)("tr",null,(0,a.mdx)("td",null,(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-kotlin"},"@MountSpec\nobject FooComponentSpec {\n  @OnMount\n  fun onMount(\n      c: ComponentContext,\n      view: View,\n      @Prop description: String\n  ) {\n    view.contentDescription = description\n  }\n\n  @OnUnmount\n  fun onUnmount(\n      c: ComponentContext,\n      view: View\n  ) {\n    view.contentDescription = null\n  }\n\n  @ShouldUpdate\n  fun shouldUpdate(\n    @Prop description: Diff<String>\n  ): Boolean {\n      return description.previous\n              != description.next\n  }\n}\n"))),(0,a.mdx)("td",null,(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-kotlin"},"class FooComponent(\n  private val description: String\n): PrimitiveComponent() {\n  override fun PrimitiveComponentScope.render(): LithoPrimitive {\n    return LithoPrimitive(\n      ...\n      mountBehavior = MountBehavior(...) {\n        bind(description) { content ->\n          content.contentDescription = description\n          onUnbind {\n            content.contentDescription = null\n          }\n        }\n        // Or an equivalent but shorter version:\n        description.bindTo(View::setContentDescription, null)\n      }\n    )\n  }\n}\n"))))),(0,a.mdx)("h4",{id:"onbindonunbind"},(0,a.mdx)("inlineCode",{parentName:"h4"},"@OnBind/@OnUnbind")),(0,a.mdx)("p",null,"The ",(0,a.mdx)("inlineCode",{parentName:"p"},"@OnBind")," and ",(0,a.mdx)("inlineCode",{parentName:"p"},"@OnUnbind")," are similar to ",(0,a.mdx)("inlineCode",{parentName:"p"},"@OnMount")," and ",(0,a.mdx)("inlineCode",{parentName:"p"},"@OnUnmount"),", the only difference is that ",(0,a.mdx)("inlineCode",{parentName:"p"},"@OnBind")," and ",(0,a.mdx)("inlineCode",{parentName:"p"},"@OnUnbind")," are called on each update, regardless of the value returned from ",(0,a.mdx)("inlineCode",{parentName:"p"},"@ShouldUpdate")," annotated method. In Primitive Components API ",(0,a.mdx)("inlineCode",{parentName:"p"},"@OnBind")," and ",(0,a.mdx)("inlineCode",{parentName:"p"},"@OnUnbind")," can be replaced with ",(0,a.mdx)("inlineCode",{parentName:"p"},"bind(Any()){}"),". Using ",(0,a.mdx)("inlineCode",{parentName:"p"},"Any()")," as ",(0,a.mdx)("inlineCode",{parentName:"p"},"deps")," will ensure that the content will be re-mounted every time."),(0,a.mdx)("table",null,(0,a.mdx)("tr",null,(0,a.mdx)("th",null,"MountSpec"),(0,a.mdx)("th",null,"PrimitiveComponent")),(0,a.mdx)("tr",null,(0,a.mdx)("td",null,(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-kotlin"},"@MountSpec\nobject FooComponentSpec {\n  @OnBind\n  fun onBind(\n      c: ComponentContext,\n      view: View,\n      @Prop description: String\n  ) {\n    view.contentDescription = description\n  }\n\n  @OnUnbind\n  fun onUnbind(\n      c: ComponentContext,\n      view: View\n  ) {\n    view.contentDescription = null\n  }\n}\n"))),(0,a.mdx)("td",null,(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-kotlin"},"class FooComponent(\n  private val description: String\n): PrimitiveComponent() {\n  override fun PrimitiveComponentScope.render(): LithoPrimitive {\n    return LithoPrimitive(\n      ...\n      mountBehavior = MountBehavior(...) {\n        bind(Any()) { content ->\n          content.contentDescription = description\n          onUnbind {\n            content.contentDescription = null\n          }\n        }\n      }\n    )\n  }\n}\n"))))),(0,a.mdx)("h4",{id:"onbinddynamicvalue"},(0,a.mdx)("inlineCode",{parentName:"h4"},"@OnBindDynamicValue")),(0,a.mdx)("p",null,"Dynamic props are properties that are applied directly to a ",(0,a.mdx)("inlineCode",{parentName:"p"},"View")," or ",(0,a.mdx)("inlineCode",{parentName:"p"},"Drawable")," without triggering a new layout or mount. In MountSpec API the dynamic value is set on a content by annotating a method with ",(0,a.mdx)("inlineCode",{parentName:"p"},"@OnBindDynamicValue")," annotation. In PrimitiveComponents API ",(0,a.mdx)("inlineCode",{parentName:"p"},"bindDynamic")," API should be used."),(0,a.mdx)("table",null,(0,a.mdx)("tr",null,(0,a.mdx)("th",null,"MountSpec"),(0,a.mdx)("th",null,"PrimitiveComponent")),(0,a.mdx)("tr",null,(0,a.mdx)("td",null,(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-kotlin"},"@MountSpec\nobject FooComponentSpec {\n  @OnBindDynamicValue\n  fun onBindAlpha(\n    content: View,\n    @Prop(dynamic = true) alphaValue: Float\n  ) {\n    content.alpha = alphaValue\n  }\n}\n"))),(0,a.mdx)("td",null,(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-kotlin"},"class FooComponent(\n  private val alpha: DynamicValue<Float>,\n): PrimitiveComponent() {\n  override fun PrimitiveComponentScope.render(): LithoPrimitive {\n    return LithoPrimitive(\n      ...\n      mountBehavior = MountBehavior(...) {\n        bindDynamic(alpha) { content, alphaValue ->\n          content.alpha = alphaValue\n          onUnbindDynamic {\n            content.alpha = 1f\n          }\n        }\n      }\n    )\n  }\n}\n"))))),(0,a.mdx)("h3",{id:"pre-allocation"},"Pre-allocation"),(0,a.mdx)("p",null,"In MountSpec API pre-allocation is configured by providing the parameters to ",(0,a.mdx)("inlineCode",{parentName:"p"},"@MountSpec")," annotation. In Primitive Component API the pre-allocation is configured via ",(0,a.mdx)("inlineCode",{parentName:"p"},"ViewAllocator"),"/",(0,a.mdx)("inlineCode",{parentName:"p"},"DrawableAllocator"),"."),(0,a.mdx)("p",null,"More information on Primitive Component pre-allocation can be found ",(0,a.mdx)("a",{parentName:"p",href:"/docs/mainconcepts/primitivecomponents/primitive-preallocation/#configuring-pools"},"here"),"."),(0,a.mdx)("table",null,(0,a.mdx)("tr",null,(0,a.mdx)("th",null,"MountSpec"),(0,a.mdx)("th",null,"PrimitiveComponent")),(0,a.mdx)("tr",null,(0,a.mdx)("td",null,(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-kotlin"},"@MountSpec(canPreallocate = true, poolSize = 5)\nobject FooComponentSpec {\n  ...\n}\n"))),(0,a.mdx)("td",null,(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-kotlin"},"class FooComponent: PrimitiveComponent() {\n  override fun PrimitiveComponentScope.render(): LithoPrimitive {\n    return LithoPrimitive(\n      mountBehavior = MountBehavior(\n        ViewAllocator(\n          canPreallocate = true,\n          poolSize = 5\n        ) { context -> View(context) }\n      ) {\n        ...\n      }\n    )\n  }\n}\n"))))),(0,a.mdx)("h3",{id:"pre-filling-content-pool"},"Pre-filling content pool"),(0,a.mdx)("p",null,"Content can be manually pre-filled ahead of time using one of the methods from ",(0,a.mdx)("inlineCode",{parentName:"p"},"MountItemsPool"),", such as ",(0,a.mdx)("inlineCode",{parentName:"p"},"prefillMountContentPool"),". For MountSpec API the Component instance should be passed as the ",(0,a.mdx)("inlineCode",{parentName:"p"},"ContentAllocator")," parameter. In Primitive Components API a ",(0,a.mdx)("inlineCode",{parentName:"p"},"ViewAllocator"),"/",(0,a.mdx)("inlineCode",{parentName:"p"},"DrawableAllocator")," should be passed instead. In order to do that, the allocator can be defined inside of a ",(0,a.mdx)("inlineCode",{parentName:"p"},"companion object")," which will allow for accessing it without creating an instance of the Component."),(0,a.mdx)("p",null,"More information on pre-filling content pools with Primitive Component API can be found ",(0,a.mdx)("a",{parentName:"p",href:"/docs/mainconcepts/primitivecomponents/primitive-preallocation/#pre-filling-content-pool"},"here"),"."),(0,a.mdx)("table",null,(0,a.mdx)("tr",null,(0,a.mdx)("th",null,"MountSpec"),(0,a.mdx)("th",null,"PrimitiveComponent")),(0,a.mdx)("tr",null,(0,a.mdx)("td",null,(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-kotlin"},"// Preallocate 40 FooComponent components.\nMountItemsPool.prefillMountContentPool(\n  androidContext,\n  40,\n  FooComponent.create(c).build()\n)\n"))),(0,a.mdx)("td",null,(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-kotlin"},"class FooComponent: PrimitiveComponent() {\n  override fun PrimitiveComponentScope.render(): LithoPrimitive {\n    return LithoPrimitive(\n      mountBehavior = MountBehavior(ALLOCATOR) {\n        ...\n      }\n    )\n  }\n\n  companion object {\n    val ALLOCATOR = ViewAllocator { context ->\n      View(context)\n    }\n  }\n}\n\n// Preallocate 40 FooComponent components.\nMountItemsPool.prefillMountContentPool(\n  androidContext,\n  40,\n  FooComponent.ALLOCATOR\n)\n"))))),(0,a.mdx)("h3",{id:"haschildlithoviews"},(0,a.mdx)("inlineCode",{parentName:"h3"},"hasChildLithoViews")),(0,a.mdx)("p",null,"Configuring ",(0,a.mdx)("inlineCode",{parentName:"p"},"hasChildLithoViews")," in MountSpec API is done by passing the boolean value to ",(0,a.mdx)("inlineCode",{parentName:"p"},"@MountSpec"),"'s parameter. In Primitive Components API there is a ",(0,a.mdx)("inlineCode",{parentName:"p"},"doesMountRenderTreeHosts")," flag available inside of ",(0,a.mdx)("inlineCode",{parentName:"p"},"MountConfigurationScope"),"."),(0,a.mdx)("table",null,(0,a.mdx)("tr",null,(0,a.mdx)("th",null,"MountSpec"),(0,a.mdx)("th",null,"PrimitiveComponent")),(0,a.mdx)("tr",null,(0,a.mdx)("td",null,(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-kotlin"},"@MountSpec(hasChildLithoViews = true)\nobject FooComponentSpec {\n  ...\n}\n"))),(0,a.mdx)("td",null,(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-kotlin"},"class FooComponent: PrimitiveComponent() {\n  override fun PrimitiveComponentScope.render(): LithoPrimitive {\n    return LithoPrimitive(\n      ...\n      mountBehavior = MountBehavior(\n        ViewAllocator { context -> View(context) }\n      ) {\n        doesMountRenderTreeHosts = true\n      }\n    )\n  }\n}\n"))))),(0,a.mdx)("h3",{id:"shouldexcludefromincrementalmount"},(0,a.mdx)("inlineCode",{parentName:"h3"},"@ShouldExcludeFromIncrementalMount")),(0,a.mdx)("p",null,"Excluding a Component from Incremental Mount in MountSpec API is done by creating a method annotated with ",(0,a.mdx)("inlineCode",{parentName:"p"},"@ShouldExcludeFromIncrementalMount")," annotation. If such method returns ",(0,a.mdx)("inlineCode",{parentName:"p"},"true"),", then the Component will be excluded from Incremental Mount. In Primitive Components API there is a ",(0,a.mdx)("inlineCode",{parentName:"p"},"shouldExcludeFromIncrementalMount")," flag available inside of ",(0,a.mdx)("inlineCode",{parentName:"p"},"MountConfigurationScope"),"."),(0,a.mdx)("table",null,(0,a.mdx)("tr",null,(0,a.mdx)("th",null,"MountSpec"),(0,a.mdx)("th",null,"PrimitiveComponent")),(0,a.mdx)("tr",null,(0,a.mdx)("td",null,(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-kotlin"},"@MountSpec(hasChildLithoViews = true)\nobject FooComponentSpec {\n  @ShouldExcludeFromIncrementalMount\n  fun shouldPreMount(\n    @Prop excludeFromIncrementalMount: Boolean\n  ): Boolean {\n    return excludeFromIncrementalMount\n  }\n}\n"))),(0,a.mdx)("td",null,(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-kotlin"},"class FooComponent(\n  private val excludeFromIncrementalMount: Boolean\n): PrimitiveComponent() {\n  override fun PrimitiveComponentScope.render(): LithoPrimitive {\n    return LithoPrimitive(\n      ...\n      mountBehavior = MountBehavior(\n        ViewAllocator { context -> View(context) }\n      ) {\n        shouldExcludeFromIncrementalMount = excludeFromIncrementalMount\n      }\n    )\n  }\n}\n"))))),(0,a.mdx)("h3",{id:"others"},"Others"),(0,a.mdx)("h4",{id:"ispurerender"},(0,a.mdx)("inlineCode",{parentName:"h4"},"isPureRender")),(0,a.mdx)("p",null,"In Primitive Component API there is no equivalent of ",(0,a.mdx)("inlineCode",{parentName:"p"},"@MountSpec(isPureRender = true)"),". All Primitive Components are pure render. When migrating from MountSpec to Primitive Component, the ",(0,a.mdx)("inlineCode",{parentName:"p"},"isPureRender")," parameter should be ignored."),(0,a.mdx)("h4",{id:"onprepare-andonloadstyle"},(0,a.mdx)("inlineCode",{parentName:"h4"},"@OnPrepare")," and",(0,a.mdx)("inlineCode",{parentName:"h4"},"@OnLoadStyle")),(0,a.mdx)("p",null,"In Primitive Component API there is no equivalent of ",(0,a.mdx)("inlineCode",{parentName:"p"},"@OnPrepare")," and ",(0,a.mdx)("inlineCode",{parentName:"p"},"@OnLoadStyle"),". When migrating from MountSpec to Primitive Component, the ",(0,a.mdx)("inlineCode",{parentName:"p"},"@OnPrepare")," and ",(0,a.mdx)("inlineCode",{parentName:"p"},"@OnLoadStyle")," logic should be placed in Primitive Component's ",(0,a.mdx)("inlineCode",{parentName:"p"},"render()")," method."))}h.isMDXComponent=!0}}]);