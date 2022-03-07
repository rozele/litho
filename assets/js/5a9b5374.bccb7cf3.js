"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7611,4957,8723,8e3,5730],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>c,MDXProvider:()=>u,mdx:()=>f,useMDXComponents:()=>d,withMDXComponents:()=>p});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a.apply(this,arguments)}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=o.createContext({}),p=function(e){return function(t){var n=d(t.components);return o.createElement(e,a({},t,{components:n}))}},d=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return o.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,r=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),u=i,h=p["".concat(r,".").concat(u)]||p[u]||m[u]||a;return n?o.createElement(h,l(l({ref:t},c),{},{components:n})):o.createElement(h,l({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var c=2;c<a;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},58215:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var o=n(67294);const i=function(e){var t=e.children,n=e.hidden,i=e.className;return o.createElement("div",{role:"tabpanel",hidden:n,className:i},t)}},55064:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u});var o=n(87462),i=n(67294),a=n(72389),r=n(79443);const l=function(){var e=(0,i.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var s=n(83039),c=n(86010);const p="tabItem_1uMI";function d(e){var t,n,o,a=e.lazy,r=e.block,d=e.defaultValue,u=e.values,m=e.groupId,h=e.className,f=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=u?u:f.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),g=(0,s.duplicates)(y,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===d?d:null!=(t=null!=d?d:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=f[0])?void 0:o.props.value;if(null!==v&&!y.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var x=l(),k=x.tabGroupChoices,b=x.setTabGroupChoices,w=(0,i.useState)(v),C=w[0],N=w[1],T=[],O=(0,s.useScrollPositionBlocker)().blockElementScrollPositionUntilNextRender;if(null!=m){var V=k[m];null!=V&&V!==C&&y.some((function(e){return e.value===V}))&&N(V)}var _=function(e){var t=e.currentTarget,n=T.indexOf(t),o=y[n].value;o!==C&&(O(t),N(o),null!=m&&b(m,o))},E=function(e){var t,n=null;switch(e.key){case"ArrowRight":var o=T.indexOf(e.currentTarget)+1;n=T[o]||T[0];break;case"ArrowLeft":var i=T.indexOf(e.currentTarget)-1;n=T[i]||T[T.length-1]}null==(t=n)||t.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.default)("tabs",{"tabs--block":r},h)},y.map((function(e){var t=e.value,n=e.label;return i.createElement("li",{role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,className:(0,c.default)("tabs__item",p,{"tabs__item--active":C===t}),key:t,ref:function(e){return T.push(e)},onKeyDown:E,onFocus:_,onClick:_},null!=n?n:t)}))),a?(0,i.cloneElement)(f.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function u(e){var t=(0,a.default)();return i.createElement(d,(0,o.Z)({key:String(t)},e))}},82924:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n(67294).createContext(void 0)},85350:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(67294),i=n(82924);const a=function(){var e=(0,o.useContext)(i.Z);if(null==e)throw new Error('"useThemeContext" is used outside of "Layout" component. Please see https://docusaurus.io/docs/api/themes/configuration#usethemecontext.');return e}},75960:(e,t,n)=>{n.d(t,{Z:()=>m});var o=n(87462),i=n(67294),a=n(24544),r=n(7694),l=n(13618),s="0.41.1",c="0.41.2-SNAPSHOT",p="0.9.0",d="0.46.0",u=n(85350);const m=function(e){var t=e.language,n=e.code.replace(/{{site.lithoVersion}}/g,s).replace(/{{site.soloaderVersion}}/g,p).replace(/{{site.lithoSnapshotVersion}}/g,c).replace(/{{site.flipperVersion}}/g,d).trim(),m=(0,u.Z)().isDarkTheme?l.Z:r.Z;return i.createElement(a.ZP,(0,o.Z)({},a.lG,{code:n,language:t,theme:m}),(function(e){var t=e.className,n=e.style,o=e.tokens,a=e.getLineProps,r=e.getTokenProps;return i.createElement("pre",{className:t,style:n},o.map((function(e,t){return i.createElement("div",a({line:e,key:t}),e.map((function(e,t){return i.createElement("span",r({token:e,key:t}))})))})))}))}},49028:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>c,toc:()=>p,default:()=>u});var o=n(87462),i=n(63366),a=(n(67294),n(3905)),r=(n(55064),n(58215),n(75960),["components"]),l={id:"testing-actions",title:"Interactions"},s=void 0,c={unversionedId:"kotlin/testing-actions",id:"kotlin/testing-actions",isDocsHomePage:!1,title:"Interactions",description:"We define Interactions as any type of action that user can perform on your Components, a good example is touching or clicking a Button.",source:"@site/../docs/kotlin/testing-actions.mdx",sourceDirName:"kotlin",slug:"/kotlin/testing-actions",permalink:"/docs/kotlin/testing-actions",editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/kotlin/testing-actions.mdx",tags:[],version:"current",frontMatter:{id:"testing-actions",title:"Interactions"},sidebar:"mainSidebar",previous:{title:"Assertions",permalink:"/docs/kotlin/testing-assertions"},next:{title:"Layout Specs",permalink:"/docs/mainconcepts/uicomposition/layout-specs"}},p=[{value:"<code>act{InteractionsScope.() -&gt; Unit}</code>",id:"actinteractionsscope---unit",children:[],level:2},{value:"<code>idle()</code>",id:"idle",children:[],level:2},{value:"Interactions with LithoViewRule",id:"interactions-with-lithoviewrule",children:[{value:"How to test click action",id:"how-to-test-click-action",children:[],level:3},{value:"How to test <code>VisiblityEvent</code>",id:"how-to-test-visiblityevent",children:[],level:3},{value:"How to test State Update",id:"how-to-test-state-update",children:[],level:3}],level:2}],d={toc:p};function u(e){var t=e.components,n=(0,i.Z)(e,r);return(0,a.mdx)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,"We define ",(0,a.mdx)("inlineCode",{parentName:"p"},"Interactions")," as any type of action that user can perform on your ",(0,a.mdx)("inlineCode",{parentName:"p"},"Components"),", a good example is touching or clicking a ",(0,a.mdx)("inlineCode",{parentName:"p"},"Button"),"."),(0,a.mdx)("h2",{id:"actinteractionsscope---unit"},(0,a.mdx)("inlineCode",{parentName:"h2"},"act{InteractionsScope.() -> Unit}")),(0,a.mdx)("p",null,"Currently in ",(0,a.mdx)("inlineCode",{parentName:"p"},"Litho")," we update the state of the ",(0,a.mdx)("inlineCode",{parentName:"p"},"Components")," asynchronously - off the Main Thread.\nOnce the background operations are finished, we post them to the Main Thread to update the ",(0,a.mdx)("inlineCode",{parentName:"p"},"Component"),".\nDuring tests we need to make sure that everything is in sync in Main Thread and in the Background Thread, just like in real life use case.\nThat is why we have an ",(0,a.mdx)("inlineCode",{parentName:"p"},"act{}")," function.  It removes the responsibility from you to use the Loopers and manage the thread synchronisation. You only need to call one of the defined interactions from ",(0,a.mdx)("inlineCode",{parentName:"p"},"InteractionsScope")," and we will take care of all of the rest."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=litho-core-kotlin/src/test/kotlin/com/facebook/litho/examples/LithoViewRuleExampleTest.kt start=act_example_start end=act_example_end",file:"litho-core-kotlin/src/test/kotlin/com/facebook/litho/examples/LithoViewRuleExampleTest.kt",start:"act_example_start",end:"act_example_end"},'lithoViewRule.act(testLithoView) { clickOnTag("test_view") }\n')),(0,a.mdx)("p",null,"Currently we expose the following interactions via ",(0,a.mdx)("inlineCode",{parentName:"p"},"act()"),":"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"clickOnText")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"clickOnTag")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"clickOnContentDescription")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"clickOnRootView"))),(0,a.mdx)("p",null,"You can chain interactions to invoke multiple of them in a given order:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-kotlin"},' lithoViewRule\n        .act { clickOnText("Menu") }\n        .act { clickOnText("File") }\n        .act { clickOnText("New") }\n        .act { clickOnText("New Project...") }\n')),(0,a.mdx)("h2",{id:"idle"},(0,a.mdx)("inlineCode",{parentName:"h2"},"idle()")),(0,a.mdx)("p",null,"You should use ",(0,a.mdx)("inlineCode",{parentName:"p"},"act()")," for events that trigger async updates (for example ",(0,a.mdx)("inlineCode",{parentName:"p"},"clicks"),").\nOtherwise, there are sometimes async events triggered by layout (for example visibility events, or when you immediately update the state in render call)\nthat you can manually wait for to finish by calling: ",(0,a.mdx)("inlineCode",{parentName:"p"},"idle()"),".\nFor example, you may need to do this if your component defines a visibility event that triggers an async state update: in that case, idle should be called after layout to make sure the update is reflected in the UI before making test assertions."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=litho-core-kotlin/src/test/kotlin/com/facebook/litho/examples/LithoViewRuleExampleTest.kt start=idle_component_start end=idle_component_end",file:"litho-core-kotlin/src/test/kotlin/com/facebook/litho/examples/LithoViewRuleExampleTest.kt",start:"idle_component_start",end:"idle_component_end"},"  override fun ComponentScope.render(): Component? {\n    val visibilityEventCalled = useState { false }\n    stateRef = AtomicReference(visibilityEventCalled.value)\n    return Column(\n        style =\n            Style.width(10.dp).height(10.dp).onVisible { visibilityEventCalled.update(true) })\n  }\n}\n\nlithoViewRule.render { TestComponent() }\nassertThat(stateRef.get()).isEqualTo(false)\nlithoViewRule.idle()\nassertThat(stateRef.get()).isEqualTo(true)\n")),(0,a.mdx)("h2",{id:"interactions-with-lithoviewrule"},"Interactions with LithoViewRule"),(0,a.mdx)("h3",{id:"how-to-test-click-action"},"How to test click action"),(0,a.mdx)("p",null,"Currently we support four types of clicks:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"clickOnText")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"clickOnTag")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"clickOnContentDescription")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"clickOnRootView"))),(0,a.mdx)("p",null,"In order to test the click interaction, let's create a ",(0,a.mdx)("inlineCode",{parentName:"p"},"TestComponent")," that shows or hides the Text after the click action is performed on a ",(0,a.mdx)("inlineCode",{parentName:"p"},"Row"),":"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=litho-core-kotlin/src/test/kotlin/com/facebook/litho/examples/LithoViewRuleExampleTest.kt start=component_for_action_start end=component_for_action_end",file:"litho-core-kotlin/src/test/kotlin/com/facebook/litho/examples/LithoViewRuleExampleTest.kt",start:"component_for_action_start",end:"component_for_action_end"},'class TestComponent : KComponent() {\n  override fun ComponentScope.render(): Component? {\n    val showText = useState { false }\n    return Row(\n        style =\n            Style.width(100.px)\n                .height(100.px)\n                .onClick { showText.update(!showText.value) }\n                .contentDescription("row")) {\n      if (showText.value) {\n        child(Text(text = "Text"))\n      }\n    }\n  }\n}\n')),(0,a.mdx)("p",null,"Our test case will perform three steps:"),(0,a.mdx)("ol",null,(0,a.mdx)("li",{parentName:"ol"},"Confirm that the ",(0,a.mdx)("inlineCode",{parentName:"li"},"Component")," is not being rendered if we didn't click on the ",(0,a.mdx)("inlineCode",{parentName:"li"},"Row"),".",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},"In order to do this we will find the ",(0,a.mdx)("inlineCode",{parentName:"li"},"Component")," based on the Text or its Class by using either: ",(0,a.mdx)("inlineCode",{parentName:"li"},"findViewWithTextOrNull(String)")," or ",(0,a.mdx)("inlineCode",{parentName:"li"},"findComponent(Class<out Component?>)")," and assert that its null."))),(0,a.mdx)("li",{parentName:"ol"},"Perform an action on our ",(0,a.mdx)("inlineCode",{parentName:"li"},"LithoView")," with the help of ",(0,a.mdx)("inlineCode",{parentName:"li"},"LithoViewRule.act{}"),".",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},"We will click on content description of the row which will trigger the state update"))),(0,a.mdx)("li",{parentName:"ol"},"Confirm that the ",(0,a.mdx)("inlineCode",{parentName:"li"},"Component")," is being rendered and it's not null",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},"Once again we can use any of the available methods to just find our ",(0,a.mdx)("inlineCode",{parentName:"li"},"Component"))))),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=litho-core-kotlin/src/test/kotlin/com/facebook/litho/examples/LithoViewRuleExampleTest.kt start=test_interaction_start end=test_interaction_end",file:"litho-core-kotlin/src/test/kotlin/com/facebook/litho/examples/LithoViewRuleExampleTest.kt",start:"test_interaction_start",end:"test_interaction_end"},'val testLithoView = lithoViewRule.render { TestComponent() }\nLithoStats.resetAllCounters()\n/** Find [Component] based on the text or [Component] class */\nassertThat(testLithoView.findViewWithTextOrNull("Text")).isNull()\nassertThat(testLithoView.findComponent(Text::class)).isNull()\n\n/** perform interaction defined in [LithoViewRule] */\nlithoViewRule.act(testLithoView) { clickOnContentDescription("row") }\n\n/** check number of state updates */\nassertThat(LithoStats.getComponentTriggeredAsyncStateUpdateCount()).isEqualTo(1)\n\n/** Find [Component] based on the text or [Component] class */\nassertThat(testLithoView.findViewWithTextOrNull("Text")).isNotNull()\nassertThat(testLithoView.findComponent(Text::class)).isNotNull()\n')),(0,a.mdx)("h3",{id:"how-to-test-visiblityevent"},"How to test ",(0,a.mdx)("inlineCode",{parentName:"h3"},"VisiblityEvent")),(0,a.mdx)("p",null,"In order to test ",(0,a.mdx)("inlineCode",{parentName:"p"},"VisiblityEvent")," instead of using ",(0,a.mdx)("inlineCode",{parentName:"p"},"LithoViewRule.render(Component)")," we will separate the methods that are being called under the render call.\nThis allows us to check the state of the component before and after the visibility event is triggered:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=litho-core-kotlin/src/test/kotlin/com/facebook/litho/examples/LithoViewRuleExampleTest.kt start=visibility_test_start end=visibility_test_end",file:"litho-core-kotlin/src/test/kotlin/com/facebook/litho/examples/LithoViewRuleExampleTest.kt",start:"visibility_test_start",end:"visibility_test_end"},"val testLithoView =\n    lithoViewRule.createTestLithoView { TestComponent() }.attachToWindow().measure()\n/** Before the onVisible is called */\nassertThat(testLithoView.findComponent(InnerComponent::class)).isNull()\n/** Layout component and idle, triggering visibility event and any async updates */\ntestLithoView.layout()\nlithoViewRule.idle()\n/** After the onVisible is called */\nassertThat(testLithoView).containsExactlyOne(InnerComponent::class)\n")),(0,a.mdx)("p",null,"Remember to call ",(0,a.mdx)("inlineCode",{parentName:"p"},"idle()")," after ",(0,a.mdx)("inlineCode",{parentName:"p"},"layout()")," if there is any background work happening in your ",(0,a.mdx)("inlineCode",{parentName:"p"},"onVisible")," call."),(0,a.mdx)("h3",{id:"how-to-test-state-update"},"How to test State Update"),(0,a.mdx)("p",null,"If you want to test a state update, the best thing to do is to trigger the event that causes the state update, as we are not exposing state of the ",(0,a.mdx)("inlineCode",{parentName:"p"},"Component"),".\nTake a look at the code example above in the ",(0,a.mdx)("inlineCode",{parentName:"p"},"clicking")," section, where we trigger the State Update by the ",(0,a.mdx)("inlineCode",{parentName:"p"},"Click Action"),"."))}u.isMDXComponent=!0},24544:(e,t,n)=>{n.d(t,{ZP:()=>h,lG:()=>r});var o=n(87410);const i={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var a=n(67294),r={Prism:o.default,theme:i};function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},s.apply(this,arguments)}var c=/\r\n|\r|\n/,p=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},d=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},u=function(e,t){var n=e.plain,o=Object.create(null),i=e.styles.reduce((function(e,n){var o=n.languages,i=n.style;return o&&!o.includes(t)||n.types.forEach((function(t){var n=s({},e[t],i);e[t]=n})),e}),o);return i.root=n,i.plain=s({},n,{backgroundColor:null}),i};function m(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}const h=function(e){function t(){for(var t=this,n=[],o=arguments.length;o--;)n[o]=arguments[o];e.apply(this,n),l(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?u(e.theme,e.language):void 0;return t.themeDict=n})),l(this,"getLineProps",(function(e){var n=e.key,o=e.className,i=e.style,a=s({},m(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),r=t.getThemeDict(t.props);return void 0!==r&&(a.style=r.plain),void 0!==i&&(a.style=void 0!==a.style?s({},a.style,i):i),void 0!==n&&(a.key=n),o&&(a.className+=" "+o),a})),l(this,"getStyleForToken",(function(e){var n=e.types,o=e.empty,i=n.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===i&&"plain"===n[0])return o?{display:"inline-block"}:void 0;if(1===i&&!o)return a[n[0]];var r=o?{display:"inline-block"}:{},l=n.map((function(e){return a[e]}));return Object.assign.apply(Object,[r].concat(l))}})),l(this,"getTokenProps",(function(e){var n=e.key,o=e.className,i=e.style,a=e.token,r=s({},m(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==i&&(r.style=void 0!==r.style?s({},r.style,i):i),void 0!==n&&(r.key=n),o&&(r.className+=" "+o),r})),l(this,"tokenize",(function(e,t,n,o){var i={code:t,grammar:n,language:o,tokens:[]};e.hooks.run("before-tokenize",i);var a=i.tokens=e.tokenize(i.code,i.grammar,i.language);return e.hooks.run("after-tokenize",i),a}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,o=e.code,i=e.children,a=this.getThemeDict(this.props),r=t.languages[n];return i({tokens:function(e){for(var t=[[]],n=[e],o=[0],i=[e.length],a=0,r=0,l=[],s=[l];r>-1;){for(;(a=o[r]++)<i[r];){var u=void 0,m=t[r],h=n[r][a];if("string"==typeof h?(m=r>0?m:["plain"],u=h):(m=d(m,h.type),h.alias&&(m=d(m,h.alias)),u=h.content),"string"==typeof u){var f=u.split(c),y=f.length;l.push({types:m,content:f[0]});for(var g=1;g<y;g++)p(l),s.push(l=[]),l.push({types:m,content:f[g]})}else r++,t.push(m),n.push(u),o.push(0),i.push(u.length)}r--,t.pop(),n.pop(),o.pop(),i.pop()}return p(l),s}(void 0!==r?this.tokenize(t,o,r,n):[o]),className:"prism-code language-"+n,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component)},13618:(e,t,n)=>{n.d(t,{Z:()=>o});const o={plain:{color:"#F8F8F2",backgroundColor:"#282A36"},styles:[{types:["prolog","constant","builtin"],style:{color:"rgb(189, 147, 249)"}},{types:["inserted","function"],style:{color:"rgb(80, 250, 123)"}},{types:["deleted"],style:{color:"rgb(255, 85, 85)"}},{types:["changed"],style:{color:"rgb(255, 184, 108)"}},{types:["punctuation","symbol"],style:{color:"rgb(248, 248, 242)"}},{types:["string","char","tag","selector"],style:{color:"rgb(255, 121, 198)"}},{types:["keyword","variable"],style:{color:"rgb(189, 147, 249)",fontStyle:"italic"}},{types:["comment"],style:{color:"rgb(98, 114, 164)"}},{types:["attr-name"],style:{color:"rgb(241, 250, 140)"}}]}},7694:(e,t,n)=>{n.d(t,{Z:()=>o});const o={plain:{color:"#393A34",backgroundColor:"#f6f8fa"},styles:[{types:["comment","prolog","doctype","cdata"],style:{color:"#999988",fontStyle:"italic"}},{types:["namespace"],style:{opacity:.7}},{types:["string","attr-value"],style:{color:"#e3116c"}},{types:["punctuation","operator"],style:{color:"#393A34"}},{types:["entity","url","symbol","number","boolean","variable","constant","property","regex","inserted"],style:{color:"#36acaa"}},{types:["atrule","keyword","attr-name","selector"],style:{color:"#00a4db"}},{types:["function","deleted","tag"],style:{color:"#d73a49"}},{types:["function-variable"],style:{color:"#6f42c1"}},{types:["tag","selector","keyword"],style:{color:"#00009f"}}]}}}]);