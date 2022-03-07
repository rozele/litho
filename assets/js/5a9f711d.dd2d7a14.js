"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8694],{75960:(e,n,a)=>{a.d(n,{Z:()=>u});var t=a(87462),o=a(67294),i=a(24544),r=a(7694),l=a(13618),s="0.41.1",d="0.41.2-SNAPSHOT",m="0.9.0",p="0.46.0",c=a(85350);const u=function(e){var n=e.language,a=e.code.replace(/{{site.lithoVersion}}/g,s).replace(/{{site.soloaderVersion}}/g,m).replace(/{{site.lithoSnapshotVersion}}/g,d).replace(/{{site.flipperVersion}}/g,p).trim(),u=(0,c.Z)().isDarkTheme?l.Z:r.Z;return o.createElement(i.ZP,(0,t.Z)({},i.lG,{code:a,language:n,theme:u}),(function(e){var n=e.className,a=e.style,t=e.tokens,i=e.getLineProps,r=e.getTokenProps;return o.createElement("pre",{className:n,style:a},t.map((function(e,n){return o.createElement("div",i({line:e,key:n}),e.map((function(e,n){return o.createElement("span",r({token:e,key:n}))})))})))}))}},63860:(e,n,a)=>{a.r(n),a.d(n,{frontMatter:()=>d,contentTitle:()=>m,metadata:()=>p,toc:()=>c,default:()=>h});var t=a(87462),o=a(63366),i=(a(67294),a(3905)),r=a(55064),l=a(58215),s=(a(75960),["components"]),d={id:"hooks-for-spec-developers",title:"Introducing Hooks for State"},m=void 0,p={unversionedId:"kotlin/hooks-for-spec-developers",id:"kotlin/hooks-for-spec-developers",isDocsHomePage:!1,title:"Introducing Hooks for State",description:"This page is meant to be used by someone who is familiar with the Java Spec API and is now learning the Kotlin API. If you're new to Litho, use this page to learn about hooks instead.",source:"@site/../docs/kotlin/hooks-for-spec-developers.mdx",sourceDirName:"kotlin",slug:"/kotlin/hooks-for-spec-developers",permalink:"/docs/kotlin/hooks-for-spec-developers",editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/kotlin/hooks-for-spec-developers.mdx",tags:[],version:"current",frontMatter:{id:"hooks-for-spec-developers",title:"Introducing Hooks for State"}},c=[{value:"useState",id:"usestate",children:[{value:"Side Effects in <code>@OnCreateInitialState</code>",id:"side-effects-in-oncreateinitialstate",children:[],level:3}],level:2},{value:"useEffect",id:"useeffect",children:[{value:"Changes to Attach/Detach Contract",id:"changes-to-attachdetach-contract",children:[],level:3},{value:"Listening to Prop/State Changes",id:"listening-to-propstate-changes",children:[],level:3}],level:2},{value:"useRef",id:"useref",children:[{value:"Example: Logging Seen State",id:"example-logging-seen-state",children:[],level:3}],level:2},{value:"useErrorBoundary",id:"useerrorboundary",children:[{value:"Example: Providing an Error State in UI",id:"example-providing-an-error-state-in-ui",children:[],level:3}],level:2},{value:"<code>useTransition</code>",id:"usetransition",children:[],level:2}],u={toc:c};function h(e){var n=e.components,a=(0,o.Z)(e,s);return(0,i.mdx)("wrapper",(0,t.Z)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,i.mdx)("h5",{parentName:"div"},(0,i.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,i.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.mdx)("div",{parentName:"div",className:"admonition-content"},(0,i.mdx)("p",{parentName:"div"},(0,i.mdx)("strong",{parentName:"p"},"This page is meant to be used by someone who is familiar with the Java Spec API and is now learning the Kotlin API.")," If you're new to Litho, use ",(0,i.mdx)("a",{parentName:"p",href:"/docs/mainconcepts/hooks-intro"},"this page")," to learn about hooks instead."))),(0,i.mdx)("p",null,"One of the biggest changes in the Litho Kotlin API is the introduction of hooks: most of the APIs implemented with lifecycle methods in the Java Specs API (such as @OnCreateInitialState and @OnAttached) have hooks equivalents in the Kotlin API."),(0,i.mdx)("p",null,"To familiarize yourself with the concept and rules for hooks, see the ",(0,i.mdx)("a",{parentName:"p",href:"/docs/mainconcepts/hooks-intro"},"Introduction to Hooks")," page."),(0,i.mdx)("p",null,"This page covers some of the main hooks and how they compare to their Spec API equivalents."),(0,i.mdx)("h2",{id:"usestate"},(0,i.mdx)("a",{parentName:"h2",href:"/docs/mainconcepts/use-state"},(0,i.mdx)("inlineCode",{parentName:"a"},"useState"))),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"useState")," allows a component to persist a variable across renders and replaces the ",(0,i.mdx)("inlineCode",{parentName:"p"},"@State"),", ",(0,i.mdx)("inlineCode",{parentName:"p"},"@OnCreateInitialState"),", and ",(0,i.mdx)("inlineCode",{parentName:"p"},"@OnUpdateState")," APIs. The code below shows a comparison of Spec API and Kotlin API code for the same component:"),(0,i.mdx)(r.default,{groupId:"state",defaultValue:"kotlin_state",values:[{label:"Kotlin",value:"kotlin_state"},{label:"Java",value:"java_state"}],mdxType:"Tabs"},(0,i.mdx)(l.default,{value:"kotlin_state",mdxType:"TabItem"},(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/kotlin/documentation/CheckboxComponent.kt start=start_example end=end_example",file:"sample/src/main/java/com/facebook/samples/litho/kotlin/documentation/CheckboxComponent.kt",start:"start_example",end:"end_example"},"class CheckboxComponent : KComponent() {\n  override fun ComponentScope.render(): Component? {\n    val isChecked = useState { false }\n\n    return Column(style = Style.onClick { isChecked.update(!isChecked.value) }) {\n      child(\n          Image(\n              drawable =\n                  drawableRes(\n                      if (isChecked.value) {\n                        android.R.drawable.checkbox_on_background\n                      } else {\n                        android.R.drawable.checkbox_off_background\n                      })))\n    }\n  }\n}\n"))),(0,i.mdx)(l.default,{value:"java_state",mdxType:"TabItem"},(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java",metastring:"file=sample/src/main/java/com/facebook/samples/litho/java/onboarding/CheckboxComponentSpec.java start=start_example end=end_example",file:"sample/src/main/java/com/facebook/samples/litho/java/onboarding/CheckboxComponentSpec.java",start:"start_example",end:"end_example"},"@LayoutSpec\npublic class CheckboxComponentSpec {\n\n  @OnCreateLayout\n  static Component onCreateLayout(ComponentContext c, @State boolean isChecked) {\n\n    return Column.create(c)\n        .child(\n            Image.create(c)\n                .drawableRes(\n                    isChecked\n                        ? android.R.drawable.checkbox_on_background\n                        : android.R.drawable.checkbox_off_background))\n        .clickHandler(CheckboxComponent.onCheckboxClicked(c))\n        .build();\n  }\n\n  @OnUpdateState\n  static void updateCheckbox(StateValue<Boolean> isChecked) {\n    isChecked.set(!isChecked.get());\n  }\n\n  @OnEvent(ClickEvent.class)\n  static void onCheckboxClicked(ComponentContext c) {\n    CheckboxComponent.updateCheckbox(c);\n  }\n}\n")))),(0,i.mdx)("h3",{id:"side-effects-in-oncreateinitialstate"},"Side Effects in ",(0,i.mdx)("inlineCode",{parentName:"h3"},"@OnCreateInitialState")),(0,i.mdx)("p",null,"A common pattern in the Java Spec API was to perform side effects in ",(0,i.mdx)("inlineCode",{parentName:"p"},"@OnCreateInitialState")," (such as attaching a listener). Instead, any side effects like this should now be done with the ",(0,i.mdx)("a",{parentName:"p",href:"/docs/mainconcepts/use-effect"},"useEffect Hook"),", which provides functionality to clean up and handle prop changes."),(0,i.mdx)("h2",{id:"useeffect"},(0,i.mdx)("a",{parentName:"h2",href:"/docs/mainconcepts/use-effect"},(0,i.mdx)("inlineCode",{parentName:"a"},"useEffect"))),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"useEffect")," hook gives the ability to safely perform side-effects from a component and corresponds to the Java Spec API's ",(0,i.mdx)("inlineCode",{parentName:"p"},"@OnAttached"),"/",(0,i.mdx)("inlineCode",{parentName:"p"},"@OnDetached")," lifecycle methods."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-kotlin"},'useEffect(username) {\n  println("I\'ve been attached with prop $username!")\n  onCleanup { println("I\'ve been detached with prop $username!") }\n}\n')),(0,i.mdx)("p",null,"In addition to the existing ",(0,i.mdx)("inlineCode",{parentName:"p"},"@OnAttached"),"/",(0,i.mdx)("inlineCode",{parentName:"p"},"@OnDetached")," functionality, it provides the ability to perform side-effects in response to changes in committed props or state. Both the effect lambda and the cleanup lambda are invoked on the main thread, meaning it's safe to perform UI-thread confined side effects."),(0,i.mdx)("h3",{id:"changes-to-attachdetach-contract"},"Changes to Attach/Detach Contract"),(0,i.mdx)("p",null,"In the Java Spec API, ",(0,i.mdx)("inlineCode",{parentName:"p"},"@OnAttached"),"/",(0,i.mdx)("inlineCode",{parentName:"p"},"@OnDetached")," would be called only once, when the component was first attached to/detached from the tree. This could lead to bugs where, for example, your component subscribes to a data store using a userId prop, and then that prop changes."),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"useEffect")," tries to solve this by taking a var-arg list of ",(0,i.mdx)("em",{parentName:"p"},"dependencies"),": any time any of these dependencies changes, the cleanup lambda (previously ",(0,i.mdx)("inlineCode",{parentName:"p"},"@OnDetached"),") will be called followed by the new effect lambda. If no dependencies are provided, the previous cleanup and new effect lambdas will be invoked again ",(0,i.mdx)("strong",{parentName:"p"},"every time a new layout is committed"),"."),(0,i.mdx)("h3",{id:"listening-to-propstate-changes"},"Listening to Prop/State Changes"),(0,i.mdx)("p",null,"An important functionality that ",(0,i.mdx)("inlineCode",{parentName:"p"},"useEffect")," adds over ",(0,i.mdx)("inlineCode",{parentName:"p"},"@OnAttached"),"/",(0,i.mdx)("inlineCode",{parentName:"p"},"@OnDetached")," is the ability to trigger code when props/state change. For example, this can be used to trigger an animation as a side-effect whenever some prop changes:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/kotlin/animations/animatedcounter/AnimatedCounter.kt start=start_example end=end_example",file:"sample/src/main/java/com/facebook/samples/litho/kotlin/animations/animatedcounter/AnimatedCounter.kt",start:"start_example",end:"end_example"},'class AnimatingCounter(private val count: Int) : KComponent() {\n  override fun ComponentScope.render(): Component? {\n    val animation = useRef<AnimatedAnimation?> { null }\n    val translationY = useBinding(0f)\n\n    useEffect(count) {\n      // Animate the text to a Y-offset based on count\n      val newAnimation = Animated.spring(translationY, to = count * 10.dp.toPixels().toFloat())\n      newAnimation.start()\n      animation.value = newAnimation\n\n      onCleanup { animation.value?.cancel() }\n    }\n\n    return Text(style = Style.translationY(translationY), text = "$count", textSize = 24.sp)\n  }\n}\n')),(0,i.mdx)("h2",{id:"useref"},(0,i.mdx)("a",{parentName:"h2",href:"/docs/mainconcepts/use-ref"},(0,i.mdx)("inlineCode",{parentName:"a"},"useRef"))),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"useRef")," hook allows a component to maintain a mutable reference that doesn't trigger a re-render when updated."),(0,i.mdx)("p",null,"It returns an instance of ",(0,i.mdx)("inlineCode",{parentName:"p"},"Ref")," which has a single mutable ",(0,i.mdx)("inlineCode",{parentName:"p"},"value")," property which should only be read/written on the UI thread. ",(0,i.mdx)("inlineCode",{parentName:"p"},"useRef")," can be used as a replacement for ",(0,i.mdx)("a",{parentName:"p",href:"/docs/mainconcepts/coordinate-state-actions/state-overview#lazy-state-updates"},"lazy state")," from the Spec API, though it has more uses beyond that."),(0,i.mdx)("h3",{id:"example-logging-seen-state"},"Example: Logging Seen State"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/kotlin/documentation/LogOnceComponent.kt start=start_useref_example end=end_useref_example",file:"sample/src/main/java/com/facebook/samples/litho/kotlin/documentation/LogOnceComponent.kt",start:"start_useref_example",end:"end_useref_example"},"class LogOnceComponent : KComponent() {\n  override fun ComponentScope.render(): Component {\n    val hasLoggedVisible = useRef<Boolean> { false }\n\n    return Text(\n        style =\n            Style.onVisible {\n              // onVisible executes on the main thread, so it's safe to read/write hasLoggedVisible\n              if (!hasLoggedVisible.value) {\n                doLogVisible(androidContext)\n                hasLoggedVisible.value = true\n              }\n            },\n        text = \"I'll let you know when I'm visible, but only once!\")\n  }\n}\n")),(0,i.mdx)("h2",{id:"useerrorboundary"},(0,i.mdx)("a",{parentName:"h2",href:"/docs/mainconcepts/use-error-boundary"},(0,i.mdx)("inlineCode",{parentName:"a"},"useErrorBoundary"))),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"useErrorBoundary")," hook allows KComponents to catch and handle errors higher up in the tree and provide appropriate fallback, logging or retry mechanisms. It corresponds to the Java Spec API's ",(0,i.mdx)("inlineCode",{parentName:"p"},"@OnError")," functionality."),(0,i.mdx)("h3",{id:"example-providing-an-error-state-in-ui"},"Example: Providing an Error State in UI"),(0,i.mdx)("p",null,"A KComponent becomes an error boundary when it declares a ",(0,i.mdx)("inlineCode",{parentName:"p"},"useErrorBoundary")," hook. The example below shows how the implementation of a boundary that renders an error state compares between the Java Spec API and the Kotlin API:"),(0,i.mdx)(r.default,{groupId:"error_boundary",defaultValue:"kotlin_state",values:[{label:"Kotlin",value:"kotlin_state"},{label:"Java",value:"java_state"}],mdxType:"Tabs"},(0,i.mdx)(l.default,{value:"kotlin_state",mdxType:"TabItem"},(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/kotlin/errors/KErrorBoundary.kt start=start_example end=end_example",file:"sample/src/main/java/com/facebook/samples/litho/kotlin/errors/KErrorBoundary.kt",start:"start_example",end:"end_example"},'class KErrorBoundary(private val childComponent: Component) : KComponent() {\n\n  override fun ComponentScope.render(): Component? {\n    val errorState = useState<Exception?> { null }\n    useErrorBoundary { exception: Exception -> errorState.update(exception) }\n\n    errorState.value?.let {\n      return Column(style = Style.margin(all = 16.dp)) {\n        child(KDebugComponent(message = "KComponent\'s Error Boundary", throwable = it))\n      }\n    }\n\n    return childComponent\n  }\n}\n'))),(0,i.mdx)(l.default,{value:"java_state",mdxType:"TabItem"},(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java",metastring:"file=sample/src/main/java/com/facebook/samples/litho/java/errors/ErrorBoundarySpec.java start=start_example end=end_example",file:"sample/src/main/java/com/facebook/samples/litho/java/errors/ErrorBoundarySpec.java",start:"start_example",end:"end_example"},'@LayoutSpec\npublic class ErrorBoundarySpec {\n\n  @OnCreateLayout\n  static Component onCreateLayout(\n      ComponentContext c, @Prop Component child, @State @Nullable Exception error) {\n\n    if (error != null) {\n      return DebugErrorComponent.create(c).message("Error Boundary").throwable(error).build();\n    }\n\n    return child;\n  }\n\n  @OnUpdateState\n  static void updateError(StateValue<Exception> error, @Param Exception e) {\n    error.set(e);\n  }\n\n  @OnError\n  static void onError(ComponentContext c, Exception error) {\n    ErrorBoundary.updateErrorSync(c, error);\n  }\n}\n')))),(0,i.mdx)("p",null,"Check out the main ",(0,i.mdx)("a",{parentName:"p",href:"/docs/mainconcepts/use-error-boundary"},(0,i.mdx)("inlineCode",{parentName:"a"},"useErrorBoundary"))," for more detailed information."),(0,i.mdx)("h2",{id:"usetransition"},(0,i.mdx)("inlineCode",{parentName:"h2"},"useTransition")),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"useTransition")," registers a transition to be applied when the current layout is committed. It corresponds to the Java Spec API's ",(0,i.mdx)("inlineCode",{parentName:"p"},"@OnCreateTransition")," functionality."),(0,i.mdx)(r.default,{groupId:"transition",defaultValue:"kotlin_transition",values:[{label:"Kotlin",value:"kotlin_transition"},{label:"Java",value:"java_transition"}],mdxType:"Tabs"},(0,i.mdx)(l.default,{value:"kotlin_transition",mdxType:"TabItem"},(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/kotlin/documentation/TransitionComponent.kt start=start_example end=end_example",file:"sample/src/main/java/com/facebook/samples/litho/kotlin/documentation/TransitionComponent.kt",start:"start_example",end:"end_example"},'class TransitionComponent : KComponent() {\n  override fun ComponentScope.render(): Component? {\n    val isHalfAlpha = useState { false }\n    useTransition(Transition.create("square").animate(AnimatedProperties.ALPHA))\n\n    return Column(style = Style.onClick { isHalfAlpha.update(!isHalfAlpha.value) }) {\n      child(\n          Row(\n              style =\n                  Style.backgroundColor(Color.YELLOW)\n                      .width(80.dp)\n                      .height(80.dp)\n                      .alpha(\n                          if (isHalfAlpha.value) {\n                            0.5f\n                          } else {\n                            1.0f\n                          })\n                      .transitionKey(context, "square")))\n    }\n  }\n}\n'))),(0,i.mdx)(l.default,{value:"java_transition",mdxType:"TabItem"},(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java",metastring:"file=sample/src/main/java/com/facebook/samples/litho/java/onboarding/AlphaTransitionComponentSpec.java start=start_example end=end_example",file:"sample/src/main/java/com/facebook/samples/litho/java/onboarding/AlphaTransitionComponentSpec.java",start:"start_example",end:"end_example"},'@LayoutSpec\npublic class AlphaTransitionComponentSpec {\n\n  private static final String SQUARE_KEY = "square";\n\n  @OnCreateLayout\n  static Component onCreateLayout(ComponentContext c, @State boolean isHalfAlpha) {\n    return Column.create(c)\n        .clickHandler(AlphaTransitionComponent.onClickEvent(c))\n        .child(\n            Row.create(c)\n                .backgroundColor(Color.YELLOW)\n                .widthDip(80)\n                .heightDip(80)\n                .alpha(isHalfAlpha ? 0.5f : 1.0f)\n                .transitionKey(SQUARE_KEY))\n        .build();\n  }\n\n  @OnCreateTransition\n  static Transition onCreateTransition(ComponentContext c) {\n    return Transition.create(SQUARE_KEY).animate(AnimatedProperties.ALPHA);\n  }\n\n  @OnEvent(ClickEvent.class)\n  static void onClickEvent(ComponentContext c, @FromEvent View view) {\n    AlphaTransitionComponent.onUpdateState(c);\n  }\n\n  @OnUpdateState\n  static void onUpdateState(StateValue<Boolean> isHalfAlpha) {\n    isHalfAlpha.set(!isHalfAlpha.get());\n  }\n}\n')))))}h.isMDXComponent=!0}}]);