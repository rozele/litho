"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6562],{74646:(n,e,t)=>{t.d(e,{A:()=>c});var a=t(58168),i=t(96540),l=t(68382),o=t(45603),r=t(76062),s="0.50.0",d="0.51.0-SNAPSHOT",m="0.10.5",p="0.142.0",u=t(6342);const c=function(n){var e=n.language,t=n.code.replace(/{{site.lithoVersion}}/g,s).replace(/{{site.soloaderVersion}}/g,m).replace(/{{site.lithoSnapshotVersion}}/g,d).replace(/{{site.flipperVersion}}/g,p).trim(),c=(0,u.p)().isDarkTheme?r.A:o.A;return i.createElement(l.Ay,(0,a.A)({},l.Gs,{code:t,language:e,theme:c}),(function(n){var e=n.className,t=n.style,a=n.tokens,l=n.getLineProps,o=n.getTokenProps;return i.createElement("pre",{className:e,style:t},a.map((function(n,e){return i.createElement("div",l({line:n,key:e}),n.map((function(n,e){return i.createElement("span",o({token:n,key:e}))})))})))}))}},48074:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>u,contentTitle:()=>m,default:()=>f,frontMatter:()=>d,metadata:()=>p,toc:()=>c});var a=t(58168),i=t(98587),l=(t(96540),t(15680)),o=t(11470),r=t(19365),s=(t(74646),["components"]),d={id:"kotlin-transitions",title:"Transitions"},m=void 0,p={unversionedId:"kotlin/kotlin-transitions",id:"kotlin/kotlin-transitions",title:"Transitions",description:"Transitions are an important concept in Litho, and the Kotlin API provides a set of powerful hooks for transition support. This makes it possible to replicate the behaviors of both @OnCreateTransition and @OnUpdateStateWithTransition in Kotlin.",source:"@site/../docs/kotlin/kotlin-transitions.mdx",sourceDirName:"kotlin",slug:"/kotlin/kotlin-transitions",permalink:"/docs/kotlin/kotlin-transitions",draft:!1,editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/kotlin/kotlin-transitions.mdx",tags:[],version:"current",frontMatter:{id:"kotlin-transitions",title:"Transitions"},sidebar:"mainSidebar",previous:{title:"Component Lifecycle and Hooks",permalink:"/docs/kotlin/hooks-for-spec-developers"},next:{title:"Flexbox Containers",permalink:"/docs/kotlin/kotlin-flexbox-containers"}},u={},c=[{value:"useTransition APIs",id:"usetransition-apis",level:2},{value:"Which useTransition to use when?",id:"which-usetransition-to-use-when",level:2},{value:"Migrating from @OnCreateTransition/@OnUpdateStateWithTransition",id:"migrating-from-oncreatetransitiononupdatestatewithtransition",level:2},{value:"Scenarios",id:"scenarios",level:3},{value:"Simple transition without parameters",id:"simple-transition-without-parameters",level:4},{value:"Transition needs only current value of state/prop/derived value",id:"transition-needs-only-current-value-of-statepropderived-value",level:4},{value:"Evaluate transition only if state has changed",id:"evaluate-transition-only-if-state-has-changed",level:4},{value:"Dependency change from specific value to another",id:"dependency-change-from-specific-value-to-another",level:4},{value:"Another complex use-case",id:"another-complex-use-case",level:4},{value:"Interplay of state and transition",id:"interplay-of-state-and-transition",level:4}],x={toc:c},h="wrapper";function f(n){var e=n.components,t=(0,i.A)(n,s);return(0,l.mdx)(h,(0,a.A)({},x,t,{components:e,mdxType:"MDXLayout"}),(0,l.mdx)("p",null,"Transitions are an important concept in Litho, and the Kotlin API provides a set of powerful hooks for transition support. This makes it possible to replicate the behaviors of both ",(0,l.mdx)("inlineCode",{parentName:"p"},"@OnCreateTransition")," and ",(0,l.mdx)("inlineCode",{parentName:"p"},"@OnUpdateStateWithTransition")," in Kotlin."),(0,l.mdx)("h2",{id:"usetransition-apis"},"useTransition APIs"),(0,l.mdx)("p",null,(0,l.mdx)("inlineCode",{parentName:"p"},"useTransition")," registers a transition (or set of transitions) to be applied when the current layout is committed. Two variants of this API are available for different use-cases."),(0,l.mdx)("p",null,"When a transition is unconditional, and does not have any dependencies, such case can be represented by the simple and efficient useTransition API. This corresponds to the simplest use-case of the Spec API's ",(0,l.mdx)("inlineCode",{parentName:"p"},"@OnCreateTransition"),"."),(0,l.mdx)(o.default,{groupId:"transition",defaultValue:"kotlin_transition",values:[{label:"Kotlin API",value:"kotlin_transition"},{label:"Java API",value:"java_transition"}],mdxType:"Tabs"},(0,l.mdx)(r.default,{value:"kotlin_transition",mdxType:"TabItem"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/kotlin/documentation/AlphaTransitionComponent.kt start=component_start end=component_end",file:"sample/src/main/java/com/facebook/samples/litho/kotlin/documentation/AlphaTransitionComponent.kt",start:"component_start",end:"component_end"},"class AlphaTransitionKComponent : KComponent() {\n\n  override fun ComponentScope.render(): Component {\n    val isHalfAlpha = useState { false }\n    useTransition(Transition.create(SQUARE_KEY).animate(AnimatedProperties.ALPHA))\n    return Column(style = Style.onClick { isHalfAlpha.update { !it } }) {\n      child(\n          Row(\n              style =\n                  Style.transitionKey(context, SQUARE_KEY, Transition.TransitionKeyType.GLOBAL)\n                      .backgroundColor(Color.YELLOW)\n                      .width(80.dp)\n                      .height(80.dp)\n                      .alpha(if (isHalfAlpha.value) 0.5f else 1.0f)))\n    }\n  }\n}\n"))),(0,l.mdx)(r.default,{value:"java_transition",mdxType:"TabItem"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-java",metastring:"file=sample/src/main/java/com/facebook/samples/litho/java/animations/docs/AlphaTransitionComponentSpec.java start=start end=end",file:"sample/src/main/java/com/facebook/samples/litho/java/animations/docs/AlphaTransitionComponentSpec.java",start:"start",end:"end"},'@LayoutSpec\npublic class AlphaTransitionComponentSpec {\n\n  private static final String SQUARE_KEY = "square";\n\n  @OnCreateLayout\n  static Component onCreateLayout(ComponentContext c, @State boolean isHalfAlpha) {\n    return Column.create(c)\n        .clickHandler(AlphaTransitionComponent.onClickEvent(c))\n        .child(\n            Row.create(c)\n                .backgroundColor(YELLOW)\n                .widthDip(80)\n                .heightDip(80)\n                .alpha(isHalfAlpha ? 0.5f : 1.0f)\n                .transitionKey(SQUARE_KEY))\n        .build();\n  }\n\n  @OnCreateTransition\n  static Transition onCreateTransition(ComponentContext c) {\n    return Transition.create(SQUARE_KEY).animate(AnimatedProperties.ALPHA);\n  }\n\n  @OnEvent(ClickEvent.class)\n  static void onClickEvent(ComponentContext c, @FromEvent View view) {\n    AlphaTransitionComponent.onUpdateState(c);\n  }\n\n  @OnUpdateState\n  static void onUpdateState(StateValue<Boolean> isHalfAlpha) {\n    isHalfAlpha.set(!isHalfAlpha.get());\n  }\n}\n')))),(0,l.mdx)("p",null,"However, for more complex use-cases where the transition is directly anchored to a set of dependencies. These may be states, props, or derived values. In such case, the more powerful ",(0,l.mdx)("inlineCode",{parentName:"p"},"useTransition")," with dependency API may be used. This API makes it possible to re-evaluate the transition whenever any of the dependencies change. It also provides access to the previous and next values of the declared dependency so that they may participate in the evaluation of the resulting transition. This ensures full parity with all variations of ",(0,l.mdx)("inlineCode",{parentName:"p"},"@OnCreateTransition")," as well as the transition part of ",(0,l.mdx)("inlineCode",{parentName:"p"},"@OnUpdateStateWithTransition")),(0,l.mdx)(o.default,{groupId:"transition",defaultValue:"kotlin_transition",values:[{label:"Kotlin API",value:"kotlin_transition"}],mdxType:"Tabs"},(0,l.mdx)(r.default,{value:"kotlin_transition",mdxType:"TabItem"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/kotlin/animations/transitions/TriStateComponent.kt start=start_example end=end_example",file:"sample/src/main/java/com/facebook/samples/litho/kotlin/animations/transitions/TriStateComponent.kt",start:"start_example",end:"end_example"},'val state = useState { TriState.HEIGHT }\nuseTransition(state.value) {\n  val (previous, next) = diffOf(state.value)\n  val animator =\n      when (if (previous == null || next == null) 0 else previous.ordinal + next.ordinal) {\n        1 -> Transition.SPRING_WITH_OVERSHOOT\n        2 -> Transition.timing(1_000, AccelerateDecelerateInterpolator())\n        3 -> Transition.springWithConfig(250.0, 10.0)\n        else -> Transition.timing(0)\n      }\n  Transition.create(Transition.TransitionKeyType.GLOBAL, "fancy-component")\n      .animate(*AnimatedProperties.AUTO_LAYOUT_PROPERTIES)\n      .animator(animator)\n}\n')))),(0,l.mdx)("h2",{id:"which-usetransition-to-use-when"},"Which useTransition to use when?"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Scenario"),(0,l.mdx)("th",{parentName:"tr",align:null},"simple useTransition"),(0,l.mdx)("th",{parentName:"tr",align:null},"useTransition with dependencies"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"The same transition is always applied unconditionally"),(0,l.mdx)("td",{parentName:"tr",align:null},"\u2705"),(0,l.mdx)("td",{parentName:"tr",align:null})),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Transition only needs access to the current value of state, prop or derived value"),(0,l.mdx)("td",{parentName:"tr",align:null},"\u2705"),(0,l.mdx)("td",{parentName:"tr",align:null})),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Transition may change depending on some value"),(0,l.mdx)("td",{parentName:"tr",align:null}),(0,l.mdx)("td",{parentName:"tr",align:null},"\u2705")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Transition is only applied whenever specific value changes"),(0,l.mdx)("td",{parentName:"tr",align:null}),(0,l.mdx)("td",{parentName:"tr",align:null},"\u2705")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Resulting transition depends on the previous and/or next value of some dependency"),(0,l.mdx)("td",{parentName:"tr",align:null}),(0,l.mdx)("td",{parentName:"tr",align:null},"\u2705")))),(0,l.mdx)(o.default,{groupId:"transition",defaultValue:"kotlin_transition",values:[{label:"Kotlin API",value:"kotlin_transition"}],mdxType:"Tabs"},(0,l.mdx)(r.default,{value:"kotlin_transition",mdxType:"TabItem"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/kotlin/animations/transitions/DeltaDemoComponent.kt start=start_example end=end_example",file:"sample/src/main/java/com/facebook/samples/litho/kotlin/animations/transitions/DeltaDemoComponent.kt",start:"start_example",end:"end_example"},'override fun ComponentScope.render(): Component {\n  val number = useState { 0 }\n  val delta = useBinding(0)\n  useTransition(number.value) {\n    val (previous, next) = diffOf(number.value)\n    val d = if (previous == null || next == null) next ?: 0 else next - previous\n    delta.set(d)\n    Transition.create(Transition.TransitionKeyType.GLOBAL, "bubble")\n        .animate(AnimatedProperties.SCALE)\n        .animator(Transition.springWithConfig(250.0, 10.0))\n  }\n  val text = buildString {\n    val d = delta.get()\n    if (d == 0) append("Tap me") else append(if (d > 0) "+" else "-").append(d.absoluteValue)\n  }\n  return Text(\n      text,\n      alignment = TextAlignment.CENTER,\n      verticalGravity = VerticalGravity.CENTER,\n      style =\n          Style.width(100.dp)\n              .height(100.dp)\n              .alignSelf(YogaAlign.CENTER)\n              .transitionKey(context, "bubble", Transition.TransitionKeyType.GLOBAL)\n              .margin(all = 10.dp)\n              .scale(lerp((number.value - MIN) / (MAX - MIN).toFloat(), 0.5f, 1.5f))\n              .background(RoundedRect(0xff6ab071, 8.dp))\n              .onClick { number.update(Random.nextInt(MIN, MAX)) })\n}\n')))),(0,l.mdx)("h2",{id:"migrating-from-oncreatetransitiononupdatestatewithtransition"},"Migrating from @OnCreateTransition/@OnUpdateStateWithTransition"),(0,l.mdx)("p",null,"The table below shows a comparison of different scenarios implemented via Spec-Gen API and their equivalent Kotlin API"),(0,l.mdx)("h3",{id:"scenarios"},"Scenarios"),(0,l.mdx)("h4",{id:"simple-transition-without-parameters"},"Simple transition without parameters"),(0,l.mdx)("table",null,(0,l.mdx)("tr",null,(0,l.mdx)("th",null,"Spec-Gen API"),(0,l.mdx)("th",null,"Kotlin API")),(0,l.mdx)("tr",null,(0,l.mdx)("td",null,(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-kotlin"},"@OnCreateTransition\nfun createTransition(context: ComponentContext): Transition {\n  return Transition.allLayout()\n}\n"))),(0,l.mdx)("td",null,(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-kotlin"},"useTransition(Transition.allLayout())\n"))))),(0,l.mdx)("h4",{id:"transition-needs-only-current-value-of-statepropderived-value"},"Transition needs only current value of state/prop/derived value"),(0,l.mdx)("table",null,(0,l.mdx)("tr",null,(0,l.mdx)("th",null,"Spec-Gen API"),(0,l.mdx)("th",null,"Kotlin API")),(0,l.mdx)("tr",null,(0,l.mdx)("td",null,(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-kotlin"},"@OnCreateTransition\nfun createTransition(\n  context: ComponentContext\n  @State someEnum: EnumType\n): Transition {\n  return when(someEnum) {\n    EnumType.VALUE_1 -> Transition.parallel(...)\n    EnumType.VALUE_2 -> Transition.create(...)\n    else -> null\n}\n"))),(0,l.mdx)("td",null,(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-kotlin"},"useTransition(\n  when(someEnum) {\n    EnumType.VALUE_1 -> Transition.parallel(...)\n    EnumType.VALUE_2 -> Transition.create(...)\n    else -> null\n  }\n)\n"))))),(0,l.mdx)("h4",{id:"evaluate-transition-only-if-state-has-changed"},"Evaluate transition only if state has changed"),(0,l.mdx)("table",null,(0,l.mdx)("tr",null,(0,l.mdx)("th",null,"Spec-Gen API"),(0,l.mdx)("th",null,"Kotlin API")),(0,l.mdx)("tr",null,(0,l.mdx)("td",null,(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-kotlin"},"@OnCreateTransition\nfun createTransition(\n  context: ComponentContext,\n  @State isEnabled: Diff<Boolean>\n): Transition {\n  val hasStateChanged = isEnabled.previous != isEnabled.next\n  return if (hasStateChanged) {\n    Transition.allLayout()\n  } else {\n    null\n  }\n}\n"))),(0,l.mdx)("td",null,(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-kotlin"},"useTransition(isEnabled) {\n  Transition.allLayout()\n}\n"))))),(0,l.mdx)("h4",{id:"dependency-change-from-specific-value-to-another"},"Dependency change from specific value to another"),(0,l.mdx)("table",null,(0,l.mdx)("tr",null,(0,l.mdx)("th",null,"Spec-Gen API"),(0,l.mdx)("th",null,"Kotlin API")),(0,l.mdx)("tr",null,(0,l.mdx)("td",null,(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-kotlin"},"@OnCreateTransition\nfun onCreateTransition(\n  c: ComponentContext,\n  @Prop storyContext: StoryContext,\n  @State hidden: Diff<Boolean>,\n  @State collapsed: Diff<Boolean>,\n): Transition? {\n  if (collapsed.previous == false && collapsed.next == true) {\n    return \u2026\n  }\n  if (collapsed.previous == true && collapsed.next == false) {\n    return \u2026\n  }\n  if (hidden.previous == false && hidden.next == true) {\n    return \u2026\n  }\n  ...\n  return null\n}\n"))),(0,l.mdx)("td",null,(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-kotlin"},"useTransition(storyContext, hidden, collapsed) {\n  val hidden = diffOf(hidden)\n  val collapsed = diffOf(collapsed)\n  if (collapsed.previous == false && collapsed.next == true) {\n    return@useTransition \u2026\n  }\n  if (collapsed.previous == true && collapsed.next == false) {\n    return@useTransition \u2026\n  }\n  if (hidden.previous == false && hidden.next == true) {\n    return@useTransition \u2026\n  }\n  ...\n  null\n}\n"))))),(0,l.mdx)("h4",{id:"another-complex-use-case"},"Another complex use-case"),(0,l.mdx)("table",null,(0,l.mdx)("tr",null,(0,l.mdx)("th",null,"Spec-Gen API"),(0,l.mdx)("th",null,"Kotlin API")),(0,l.mdx)("tr",null,(0,l.mdx)("td",null,(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-kotlin"},"@OnCreateTransition\nfun onCreateTransition(\n  c: ComponentContext,\n  @Prop playerType: PlayerType,\n  @State visibility: Diff<Visibility>\n): Transition {\n  when {\n    visibility.previous == INVISIBLE -> return ...\n\n    visibility.next == INVISIBLE -> return ...\n\n    visibility.previous == PARTLY_VISIBLE &&\n      visibility.next == VISIBLE -> return ...\n\n    visibility.previous == VISIBLE &&\n      visibility.next == PARTLY_VISIBLE -> return ...\n\n    else -> return ...\n  }\n}\n"))),(0,l.mdx)("td",null,(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-kotlin"},"useTransition(playerType, visibility) {\n  val visibility = diffOf(visibility)\n  when {\n    visibility.previous == INVISIBLE -> Transition(...)\n\n    visibility.next == INVISIBLE -> Transition(...)\n\n    visibility.previous == PARTLY_VISIBLE &&\n      visibility.next == VISIBLE -> Transition(...)\n\n    visibility.previous == VISIBLE &&\n      visibility.next == PARTLY_VISIBLE -> Transition(...)\n\n    else -> Transition(...)\n  }\n}\n"))))),(0,l.mdx)("h4",{id:"interplay-of-state-and-transition"},"Interplay of state and transition"),(0,l.mdx)("table",null,(0,l.mdx)("tr",null,(0,l.mdx)("th",null,"Spec-Gen API"),(0,l.mdx)("th",null,"Kotlin API")),(0,l.mdx)("tr",null,(0,l.mdx)("td",null,(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-kotlin"},"@OnEvent(ClickEvent::class)\nfun triggerClickEvent(c: ComponentContext) {\n  SomeComponent.onUpdateShiftWithTransition(c, newShiftValue)\n}\n\n@OnUpdateStateWithTransition\nfun onUpdateShift(\n  shiftPx: StateValue<Int>, \n  newShiftValue: Int\n): Transition {\n  shiftPx.set(newShiftValue)\n  return Transition.create(SHIFT_TRANSITION_KEY)\n    .animate(AnimatedProperties.Y)\n}\n"))),(0,l.mdx)("td",null,(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-kotlin"},"fun ComponentScope.render() {\n  ...\n  useTransition(shiftPx) {\n    Transition.create(SHIFT_TRANSITION_KEY)\n      .animate(AnimatedProperties.Y)\n  }\n  ...\n  return SomeComponent(\n    style = Style.onClick { shiftPx.update(newShiftValue) })\n}\n"))))))}f.isMDXComponent=!0}}]);