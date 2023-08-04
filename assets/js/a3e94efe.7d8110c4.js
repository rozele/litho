"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6039],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>s,MDXProvider:()=>p,mdx:()=>C,useMDXComponents:()=>m,withMDXComponents:()=>d});var o=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(){return a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},a.apply(this,arguments)}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=o.createContext({}),d=function(e){return function(n){var t=m(n.components);return o.createElement(e,a({},n,{components:t}))}},m=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=m(e.components);return o.createElement(s.Provider,{value:n},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},g=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=m(t),p=i,h=d["".concat(l,".").concat(p)]||d[p]||u[p]||a;return t?o.createElement(h,r(r({ref:n},s),{},{components:t})):o.createElement(h,r({ref:n},s))}));function C(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=g;var r={};for(var c in n)hasOwnProperty.call(n,c)&&(r[c]=n[c]);r.originalType=e,r[h]="string"==typeof e?e:i,l[1]=r;for(var s=2;s<a;s++)l[s]=t[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}g.displayName="MDXCreateElement"},97288:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>m});var o=t(87462),i=t(63366),a=(t(67294),t(3905)),l=["components"],r={id:"lazycollections-sections-migration",title:"Migrating Sections"},c=void 0,s={unversionedId:"kotlin/lazycollections/lazycollections-sections-migration",id:"kotlin/lazycollections/lazycollections-sections-migration",title:"Migrating Sections",description:"This page provides guidance for migrating an existing list rendered with Sections to Lazy Collections.",source:"@site/../docs/kotlin/lazycollections/lazycollections-sections-migration.mdx",sourceDirName:"kotlin/lazycollections",slug:"/kotlin/lazycollections/lazycollections-sections-migration",permalink:"/docs/kotlin/lazycollections/lazycollections-sections-migration",draft:!1,editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/kotlin/lazycollections/lazycollections-sections-migration.mdx",tags:[],version:"current",frontMatter:{id:"lazycollections-sections-migration",title:"Migrating Sections"},sidebar:"mainSidebar",previous:{title:"Migrating MountSpecs",permalink:"/docs/kotlin/migrating-from-mountspecs-to-primitives"},next:{title:"Cheatsheet",permalink:"/docs/kotlin/kotlin-api-cheatsheet"}},d={},m=[{value:"Advantages of migrating to Lazy Collections",id:"advantages-of-migrating-to-lazy-collections",level:2},{value:"Migration overview",id:"migration-overview",level:2},{value:"Replace the <code>RecyclerCollectionComponent</code>",id:"replace-the-recyclercollectioncomponent",level:2},{value:"Migrate the <code>GroupSectionSpec</code>",id:"migrate-the-groupsectionspec",level:2},{value:"Replace the <code>SingleComponentSection</code>s",id:"replace-the-singlecomponentsections",level:2},{value:"Replace the <code>DataDiffSection</code>s",id:"replace-the-datadiffsections",level:2},{value:"Migrate Event Handlers",id:"migrate-event-handlers",level:2},{value:"Migrate Section State",id:"migrate-section-state",level:2}],p={toc:m},h="wrapper";function u(e){var n=e.components,t=(0,i.Z)(e,l);return(0,a.mdx)(h,(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,"This page provides guidance for migrating an existing list rendered with Sections to ",(0,a.mdx)("a",{parentName:"p",href:"/docs/kotlin/lazycollections/"},"Lazy Collections"),"."),(0,a.mdx)("h2",{id:"advantages-of-migrating-to-lazy-collections"},"Advantages of migrating to Lazy Collections"),(0,a.mdx)("p",null,"The advantages of Lazy Collections over Sections include:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"No code generation."),(0,a.mdx)("li",{parentName:"ul"},"A cleaner API for building scrolling lists."),(0,a.mdx)("li",{parentName:"ul"},"Simple inline declaration (similar to a ",(0,a.mdx)("inlineCode",{parentName:"li"},"Row")," and ",(0,a.mdx)("inlineCode",{parentName:"li"},"Column"),")."),(0,a.mdx)("li",{parentName:"ul"},"List items have direct access to the containing components props and state."),(0,a.mdx)("li",{parentName:"ul"},"Automatic diffing of content updates.")),(0,a.mdx)("h2",{id:"migration-overview"},"Migration overview"),(0,a.mdx)("p",null,"The migration to Lazy Collections involves the following three steps:"),(0,a.mdx)("ol",null,(0,a.mdx)("li",{parentName:"ol"},"Replacing the component that renders the section tree with a Lazy Collection component \u2014 see ",(0,a.mdx)("a",{parentName:"li",href:"#replace-the-recyclercollectioncomponent"},"Replace the ",(0,a.mdx)("inlineCode",{parentName:"a"},"RecyclerCollectionComponent")),"."),(0,a.mdx)("li",{parentName:"ol"},"Adding each component from the section tree as a child of the Lazy Collection \u2014 see ",(0,a.mdx)("a",{parentName:"li",href:"#migrate-the-groupsectionspec"},"Migrate the ",(0,a.mdx)("inlineCode",{parentName:"a"},"GroupSectionSpec"))," and ",(0,a.mdx)("a",{parentName:"li",href:"#replace-the-datadiffsections"},"Migrate the ",(0,a.mdx)("inlineCode",{parentName:"a"},"DataDiffSection")),"."),(0,a.mdx)("li",{parentName:"ol"},"Migrating any event handlers or state \u2014 see ",(0,a.mdx)("a",{parentName:"li",href:"#migrate-event-handlers"},"Migrate Event Handlers")," and ",(0,a.mdx)("a",{parentName:"li",href:"#migrate-section-state"},"Migrate Section State"),".")),(0,a.mdx)("p",null,"Each of the above steps is detailed in the following sections."),(0,a.mdx)("h2",{id:"replace-the-recyclercollectioncomponent"},"Replace the ",(0,a.mdx)("inlineCode",{parentName:"h2"},"RecyclerCollectionComponent")),(0,a.mdx)("p",null,"Sections are typically rendered by a ",(0,a.mdx)("inlineCode",{parentName:"p"},"RecyclerCollectionComponent"),":"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-kotlin"},"val component = RecyclerCollectionComponent.create(c)\n  .section(...)\n  .build()\n")),(0,a.mdx)("p",null,"This should be replaced with a Lazy Collection component, such as ",(0,a.mdx)("inlineCode",{parentName:"p"},"LazyList"),". For information on migrating the ",(0,a.mdx)("inlineCode",{parentName:"p"},"RecyclerCollectionComponent"),"'s configuration options, see the ",(0,a.mdx)("a",{parentName:"p",href:"/docs/kotlin/lazycollections/lazycollections-layout"},"Layout and Styling")," page."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-kotlin"},"val component = LazyList {\n  // Content will be added inline\n}\n")),(0,a.mdx)("admonition",{type:"info"},(0,a.mdx)("p",{parentName:"admonition"},"Lazy Collections can only be used inside ",(0,a.mdx)("inlineCode",{parentName:"p"},"KComponent"),"s. If migrating a Spec component then first convert it to a ",(0,a.mdx)("inlineCode",{parentName:"p"},"KComponent")," or implement the Lazy Collection inside a ",(0,a.mdx)("inlineCode",{parentName:"p"},"KComponent")," container.")),(0,a.mdx)("p",null,"Next, migrate the content from the Section into the Lazy Collection, as detailed below."),(0,a.mdx)("h2",{id:"migrate-the-groupsectionspec"},"Migrate the ",(0,a.mdx)("inlineCode",{parentName:"h2"},"GroupSectionSpec")),(0,a.mdx)("p",null,"A ",(0,a.mdx)("inlineCode",{parentName:"p"},"GroupSectionSpec")," is used to structure other Sections into a hierarchy. It's key part is an ",(0,a.mdx)("inlineCode",{parentName:"p"},"onCreateChildren")," method that creates and combines ",(0,a.mdx)("inlineCode",{parentName:"p"},"SingleComponentSection"),"s, ",(0,a.mdx)("inlineCode",{parentName:"p"},"DataDiffSection"),"s and other custom ",(0,a.mdx)("inlineCode",{parentName:"p"},"GroupSection"),"s into a list of children. If ",(0,a.mdx)("inlineCode",{parentName:"p"},"onCreateChildren"),"'s body is relatively simple, you can inline it inside Lazy Collection in the parent component, like in the code snippet above. In case of a complex children composition logic that benefits from encapsulation, you can replace ",(0,a.mdx)("inlineCode",{parentName:"p"},"GroupSectionSpec")," class with a custom ",(0,a.mdx)("inlineCode",{parentName:"p"},"KComponent")," that wraps Lazy Collection together with its children, and use it instead of ",(0,a.mdx)("inlineCode",{parentName:"p"},"RecyclerCollectionComponent")," in the parent component. For examples of the second approach check out the code snippets below."),(0,a.mdx)("h2",{id:"replace-the-singlecomponentsections"},"Replace the ",(0,a.mdx)("inlineCode",{parentName:"h2"},"SingleComponentSection"),"s"),(0,a.mdx)("p",null,"The easiest part of Sections children migration is dealing with ",(0,a.mdx)("inlineCode",{parentName:"p"},"SingleComponentSection"),"s. The following ",(0,a.mdx)("inlineCode",{parentName:"p"},"GroupSectionSpec")," renders two components as ",(0,a.mdx)("inlineCode",{parentName:"p"},"SingleComponentSection"),"s:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/kotlin/documentation/SimpleGroupSectionSpec.kt start=start_example end=end_example",file:"sample/src/main/java/com/facebook/samples/litho/kotlin/documentation/SimpleGroupSectionSpec.kt",start:"start_example",end:"end_example"},"@GroupSectionSpec\nobject SimpleGroupSectionSpec {\n\n  @OnCreateChildren\n  fun onCreateChildren(c: SectionContext, @Prop title: String): Children =\n      Children.create()\n          // highlight-start\n          .child(SingleComponentSection.create(c).component(Text.create(c).text(title).build()))\n          .child(SingleComponentSection.create(c).component(MyComponent()))\n          // highlight-end\n          .build()\n}\n")),(0,a.mdx)("p",null,"The component from each ",(0,a.mdx)("inlineCode",{parentName:"p"},"SingleComponentSection")," should be added as a child to the Lazy Collection. Lazy Collections support both Kotlin API components and Spec children. ",(0,a.mdx)("inlineCode",{parentName:"p"},"SingleComponentSection")," config options are available as parameters on ",(0,a.mdx)("inlineCode",{parentName:"p"},"child")," method, such as ",(0,a.mdx)("inlineCode",{parentName:"p"},"isSticky"),"."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/kotlin/collection/SectionsMigrations.kt start=start_simple_group end=end_simple_group",file:"sample/src/main/java/com/facebook/samples/litho/kotlin/collection/SectionsMigrations.kt",start:"start_simple_group",end:"end_simple_group"},"class SimpleGroupMigration(private val title: String) : KComponent() {\n  override fun ComponentScope.render(): Component {\n    return LazyList {\n      // Add SingleComponentSection components as children:\n      child(Text(title))\n      child(MyComponent())\n    }\n  }\n}\n")),(0,a.mdx)("p",null,"Next, consider a list rendered with a ",(0,a.mdx)("inlineCode",{parentName:"p"},"DataDiffSection"),"."),(0,a.mdx)("h2",{id:"replace-the-datadiffsections"},"Replace the ",(0,a.mdx)("inlineCode",{parentName:"h2"},"DataDiffSection"),"s"),(0,a.mdx)("p",null,"A ",(0,a.mdx)("inlineCode",{parentName:"p"},"DataDiffSection")," is used to render a collection of homogeneous data. This type of Section can be defined as a child in a ",(0,a.mdx)("inlineCode",{parentName:"p"},"GroupSectionSpec"),", or directly passed to a ",(0,a.mdx)("inlineCode",{parentName:"p"},"RecyclerCollectionComponent"),". It requires the following event handlers:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"renderEventHandler")," - determines how to render a list item."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"onCheckIsSameItemEventHandler")," - determines if items have the same identity."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"onCheckIsSameContentEventHandler")," - determines if items have updated content.")),(0,a.mdx)("p",null,"Consider the following ",(0,a.mdx)("inlineCode",{parentName:"p"},"GroupSectionSpec")," that contains a ",(0,a.mdx)("inlineCode",{parentName:"p"},"DataDiffSection")," to render a list of the following type:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/kotlin/documentation/ListSectionSpec.kt start=start_data_type end=end_data_type",file:"sample/src/main/java/com/facebook/samples/litho/kotlin/documentation/ListSectionSpec.kt",start:"start_data_type",end:"end_data_type"},"class Model(val id: String, val field1: String, val field2: String)\n")),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/kotlin/documentation/ListSectionSpec.kt start=start_example end=end_example",file:"sample/src/main/java/com/facebook/samples/litho/kotlin/documentation/ListSectionSpec.kt",start:"start_example",end:"end_example"},'@GroupSectionSpec\nobject ListSectionSpec {\n\n  @OnCreateChildren\n  fun onCreateChildren(c: SectionContext, @Prop models: List<Model>): Children =\n      Children.create()\n          .child(\n              DataDiffSection.create<Model>(c)\n                  .data(models)\n                  .renderEventHandler(ListSection.onRenderItem(c))\n                  .onCheckIsSameItemEventHandler(ListSection.onCheckIsSameItem(c))\n                  .onCheckIsSameContentEventHandler(ListSection.onCheckIsSameContent(c)))\n          .build()\n\n  @OnEvent(RenderEvent::class)\n  fun onRenderItem(c: SectionContext, @FromEvent model: Model): RenderInfo =\n      ComponentRenderInfo.create()\n          // highlight-start\n          .component(Text.create(c).text("${model.field1} ${model.field2}").build())\n          // highlight-end\n          .build()\n\n  @OnEvent(OnCheckIsSameItemEvent::class)\n  fun onCheckIsSameItem(\n      c: SectionContext,\n      @FromEvent previousItem: Model,\n      @FromEvent nextItem: Model\n  ): Boolean =\n      // highlight-start\n      previousItem.id == nextItem.id\n      // highlight-end\n\n  @OnEvent(OnCheckIsSameContentEvent::class)\n  fun onCheckIsSameContent(\n      sectionContext: SectionContext,\n      @FromEvent previousItem: Model,\n      @FromEvent nextItem: Model\n  ): Boolean = previousItem.field1 == nextItem.field1 && previousItem.field2 == nextItem.field2\n}\n')),(0,a.mdx)("p",null,"A component for each list item should be added to the Lazy Collection as a child. It's the same component that is passed to the ",(0,a.mdx)("inlineCode",{parentName:"p"},"component")," parameter during ",(0,a.mdx)("inlineCode",{parentName:"p"},"ComponentRenderInfo")," creation in ",(0,a.mdx)("inlineCode",{parentName:"p"},"RenderEvent")," handler method."),(0,a.mdx)("p",null,"The child ",(0,a.mdx)("inlineCode",{parentName:"p"},"id")," parameter should be unique and consistent across re-renders and will likely be the value that is compared in ",(0,a.mdx)("inlineCode",{parentName:"p"},"onCheckIsSameItem"),". See the ",(0,a.mdx)("a",{parentName:"p",href:"/docs/kotlin/lazycollections/lazycollections-working-with-updates#child-identity"},"guidelines for child ids"),"."),(0,a.mdx)("p",null,"It is not necessary to migrate the checks from ",(0,a.mdx)("inlineCode",{parentName:"p"},"onCheckIsSameContent")," as the Lazy Collection will automatically compare the child component props. However, additional steps may be required to eliminate unnecessary layouts if child takes props that do not provide an ",(0,a.mdx)("inlineCode",{parentName:"p"},"equals()"),". For more information, see the ",(0,a.mdx)("a",{parentName:"p",href:"/docs/kotlin/lazycollections/lazycollections-working-with-updates##avoiding-unecessary-layouts"},"Avoiding Unnecessary Layouts")," page."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/kotlin/collection/SectionsMigrations.kt start=start_list end=end_list",file:"sample/src/main/java/com/facebook/samples/litho/kotlin/collection/SectionsMigrations.kt",start:"start_list",end:"end_list"},'class ListMigration(private val models: List<Model>) : KComponent() {\n  override fun ComponentScope.render(): Component {\n    return LazyList {\n      // Add DataDiffSection contents as children with ids\n      children(items = models, id = { it.id }) { model ->\n        // highlight-start\n        Text("${model.field1} ${model.field2}")\n        // highlight-end\n      }\n    }\n  }\n}\n')),(0,a.mdx)("h2",{id:"migrate-event-handlers"},"Migrate Event Handlers"),(0,a.mdx)("p",null,"Event handlers that are defined as ",(0,a.mdx)("inlineCode",{parentName:"p"},"@OnEvent")," functions (such as visibility or click handling) can be passed as lambdas to the appropriate ",(0,a.mdx)("inlineCode",{parentName:"p"},"Style")," functions. Note that using lambdas as props could cause ",(0,a.mdx)("a",{parentName:"p",href:"/docs/kotlin/lazycollections/lazycollections-working-with-updates#using-lambdas-as-props"},"unnecessary updates"),", so they should be wrapped in a ",(0,a.mdx)("inlineCode",{parentName:"p"},"useCallback")," hook."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/kotlin/documentation/EventHandlerSectionSpec.kt start=start_example end=end_example",file:"sample/src/main/java/com/facebook/samples/litho/kotlin/documentation/EventHandlerSectionSpec.kt",start:"start_example",end:"end_example"},'@GroupSectionSpec\nobject EventHandlerSectionSpec {\n\n  @OnCreateChildren\n  fun onCreateChildren(c: SectionContext): Children =\n      Children.create()\n          .child(\n              SingleComponentSection.create(c)\n                  .component(\n                      Text.create(c)\n                          .text("Say Hello")\n                          .clickHandler(EventHandlerSection.onClick(c))\n                          .build()))\n          .build()\n\n  @OnEvent(ClickEvent::class)\n  fun onClick(c: SectionContext) {\n    println("Hello World!")\n  }\n}\n')),(0,a.mdx)("p",null,"Migrating the above Section to a Lazy Collection's yields:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/kotlin/collection/SectionsMigrations.kt start=start_event_handler end=end_event_handler",file:"sample/src/main/java/com/facebook/samples/litho/kotlin/collection/SectionsMigrations.kt",start:"start_event_handler",end:"end_event_handler"},'class EventHandlerMigration : KComponent() {\n  override fun ComponentScope.render(): Component {\n    val onClick = useCallback { _: ClickEvent -> println("Hello World!") }\n\n    return LazyList {\n      // Using Style.onClick(..)\n      child(Text("Say Hello", style = Style.onClick(action = onClick)))\n\n      // Or using the Spec api with eventHandler(..)\n      child(Text.create(context).text("Say Hello").clickHandler(eventHandler(onClick)).build())\n    }\n  }\n}\n')),(0,a.mdx)("h2",{id:"migrate-section-state"},"Migrate Section State"),(0,a.mdx)("p",null,"State managed by a ",(0,a.mdx)("inlineCode",{parentName:"p"},"Section")," should be moved into the component that manages the Lazy Collection. It may be beneficial to consider defining the Lazy Collection inside a dedicated ",(0,a.mdx)("inlineCode",{parentName:"p"},"KComponent")," so that it can maintain its own state."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/kotlin/documentation/StateSectionSpec.kt start=start_example end=end_example",file:"sample/src/main/java/com/facebook/samples/litho/kotlin/documentation/StateSectionSpec.kt",start:"start_example",end:"end_example"},'@GroupSectionSpec\nobject StateSectionSpec {\n\n  @OnCreateInitialState\n  fun createInitialState(c: SectionContext, counter: StateValue<Int>) {\n    counter.set(0)\n  }\n\n  @OnCreateChildren\n  fun onCreateChildren(c: SectionContext, @State counter: Int): Children =\n      Children.create()\n          .child(\n              SingleComponentSection.create(c)\n                  .component(\n                      Text.create(c)\n                          .text("Increment: $counter")\n                          .clickHandler(StateSection.onClick(c))\n                          .build()))\n          .build()\n\n  @OnEvent(ClickEvent::class)\n  fun onClick(c: SectionContext) {\n    StateSection.incrementCounter(c)\n  }\n\n  @OnUpdateState\n  fun incrementCounter(counter: StateValue<Int>) {\n    counter.set((counter.get() ?: 0) + 1)\n  }\n}\n')),(0,a.mdx)("p",null,"Migrating the above Section to a Lazy Collection yields the following:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/kotlin/collection/SectionsMigrations.kt start=start_state end=end_state",file:"sample/src/main/java/com/facebook/samples/litho/kotlin/collection/SectionsMigrations.kt",start:"start_state",end:"end_state"},'class StateMigration : KComponent() {\n  override fun ComponentScope.render(): Component {\n    val counter = useState { 0 }\n    val onClick = useCallback { _: ClickEvent -> counter.update { it + 1 } }\n\n    return LazyList {\n      child(Text("Increment ${counter.value}", style = Style.onClick(action = onClick)))\n    }\n  }\n}\n')))}u.isMDXComponent=!0}}]);