(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{161:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return y}));var a=t(0),o=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),p=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},m=function(e){var n=p(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=p(t),d=a,y=m["".concat(r,".").concat(d)]||m[d]||b[d]||i;return t?o.a.createElement(y,s(s({ref:n},l),{},{components:t})):o.a.createElement(y,s({ref:n},l))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,r=new Array(i);r[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var l=2;l<i;l++)r[l]=t[l];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},93:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return s})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return p}));var a=t(2),o=t(6),i=(t(0),t(161)),r={id:"transition-key-types",title:"Advanced: Transitions key scoping"},s={unversionedId:"animations/transition-key-types",id:"animations/transition-key-types",isDocsHomePage:!1,title:"Advanced: Transitions key scoping",description:"In all the samples we have presented so far, we followed very common pattern when defining transitions transition key is assigned within ComponentSpec, while transitions themselves are defined in another.",source:"@site/../docs/animations/transition-key-types.md",slug:"/animations/transition-key-types",permalink:"/docs/animations/transition-key-types",editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/animations/transition-key-types.md",version:"current",sidebar:"mainSidebar",previous:{title:"Advanced: More ways to define transitions",permalink:"/docs/animations/transition-definitions"},next:{title:"Overview",permalink:"/docs/accessibility/accessibility-overview"}},c=[],l={rightToc:c};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"In all the samples we have presented so far, we followed very common pattern when defining transitions: assigning transition keys and creating transitions happened within one ",Object(i.b)("inlineCode",{parentName:"p"},"ComponentSpec"),". However, there are situations where this is not the case: transition key is assigned within ",Object(i.b)("inlineCode",{parentName:"p"},"ComponentSpec"),", while transitions themselves are defined in another."),Object(i.b)("p",null,"If you try to do everything exactly how we did it up until now it will not work. It will simply look like there are no transitions defined."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java",metastring:"file=../../sample/src/main/java/com/facebook/samples/litho/animations/docs/keyscope/GlobalKeyParentComponentSpec.java start=not_working_start end=not_working_end",file:"../../sample/src/main/java/com/facebook/samples/litho/animations/docs/keyscope/GlobalKeyParentComponentSpec.java",start:"not_working_start",end:"not_working_end"}),"@LayoutSpec\npublic class GlobalKeyParentComponentSpec {\n  @OnCreateLayout\n  static Component onCreateLayout(ComponentContext c) {\n    return GlobalKeyTransitionComponent.create(c).build();\n  }\n\n  @OnCreateTransition\n  static Transition onCreateTransition(ComponentContext c) {\n    return Transition.create(GlobalKeyTransitionComponentSpec.SQUARE_KEY)\n        .animate(AnimatedProperties.X);\n  }\n}\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java",metastring:"file=../../sample/src/main/java/com/facebook/samples/litho/animations/docs/keyscope/GlobalKeyTransitionComponentSpec.java start=not_working_start end=not_working_end",file:"../../sample/src/main/java/com/facebook/samples/litho/animations/docs/keyscope/GlobalKeyTransitionComponentSpec.java",start:"not_working_start",end:"not_working_end"}),'@LayoutSpec\npublic class GlobalKeyTransitionComponentSpec {\n  public static final String SQUARE_KEY = "square";\n\n  @OnCreateLayout\n  static Component onCreateLayout(ComponentContext c, @State boolean toRight) {\n    return Column.create(c)\n        .child(\n            SolidColor.create(c)\n                .color(YELLOW)\n                .widthDip(80)\n                .heightDip(80)\n                .transitionKey(SQUARE_KEY))\n        .alignItems(toRight ? YogaAlign.FLEX_END : YogaAlign.FLEX_START)\n        .clickHandler(GlobalKeyTransitionComponent.onClickEvent(c))\n        .build();\n  }\n\n  @OnEvent(ClickEvent.class)\n  static void onClickEvent(ComponentContext c, @FromEvent View view) {\n    GlobalKeyTransitionComponent.onUpdateState(c);\n  }\n\n  @OnUpdateState\n  static void onUpdateState(StateValue<Boolean> toRight) {\n    toRight.set(!toRight.get());\n  }\n}\n')),Object(i.b)("p",null,"The reason is that, by default, transition keys are only visible within the scope of the component spec where it is used. This \u201cvisibility\u201d of transition keys is determined by ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"pathname:///javadoc/com/facebook/litho/Transition.TransitionKeyType.html"}),Object(i.b)("inlineCode",{parentName:"a"},"TransitionKeyType")),". There are two options:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"pathname:///javadoc/com/facebook/litho/Transition.TransitionKeyType.html#LOCAL"}),Object(i.b)("strong",{parentName:"a"},Object(i.b)("inlineCode",{parentName:"strong"},"LOCAL")))," - the default type, only visible within ",Object(i.b)("inlineCode",{parentName:"li"},"ComponentSpec")," where it is used"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"pathname:///javadoc/com/facebook/litho/Transition.TransitionKeyType.html#GLOBAL"}),Object(i.b)("strong",{parentName:"a"},Object(i.b)("inlineCode",{parentName:"strong"},"GLOBAL")))," - makes a transition key visible through the whole ",Object(i.b)("inlineCode",{parentName:"li"},"ComponentTree"),". The drawback here is that the keys should be unique within the tree. Thus it usually takes an extra effort to use several component of the same type that assign ",Object(i.b)("inlineCode",{parentName:"li"},"GLOBAL")," transition keys within one tree and avoid transition keys collisions.")),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Litho throws an exception when a transition keys collision occurs, which may not be trivial to debug and resolve in case of ",Object(i.b)("inlineCode",{parentName:"p"},"GLOBAL")," transition keys. Thus we encourage you to use ",Object(i.b)("inlineCode",{parentName:"p"},"LOCAL")," transition keys and assign transition keys within the same Spec that defines transitions that target those keys."))),Object(i.b)("p",null,"There are two steps to take to change transition key type:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Use ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"pathname:///javadoc/com/facebook/litho/Component.Builder.html#transitionKeyType-com.facebook.litho.Transition.TransitionKeyType-"}),Object(i.b)("inlineCode",{parentName:"a"},"Component.Builder#transitionKeyType()"))," when assigning a key to a ",Object(i.b)("inlineCode",{parentName:"li"},"Component"),"."),Object(i.b)("li",{parentName:"ol"},"When creating a ",Object(i.b)("inlineCode",{parentName:"li"},"Transition")," use a version of ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"pathname:///javadoc/com/facebook/litho/Transition.html#create-com.facebook.litho.Transition.TransitionKeyType-java.lang.String-"}),Object(i.b)("inlineCode",{parentName:"a"},"Transition.create()"))," that takes ",Object(i.b)("inlineCode",{parentName:"li"},"TransitionKeyType")," argument along with the key itself.")),Object(i.b)("p",null,"Here is how we would fix the sample using ",Object(i.b)("inlineCode",{parentName:"p"},"TransitionKeyType.GLOBAL"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java",metastring:"file=../../sample/src/main/java/com/facebook/samples/litho/animations/docs/keyscope/GlobalKeyParentComponentSpec.java start=start_working end=end_working",file:"../../sample/src/main/java/com/facebook/samples/litho/animations/docs/keyscope/GlobalKeyParentComponentSpec.java",start:"start_working",end:"end_working"}),"@LayoutSpec\npublic class GlobalKeyParentComponentSpec {\n  @OnCreateLayout\n  static Component onCreateLayout(ComponentContext c) {\n    return GlobalKeyTransitionComponent.create(c).build();\n  }\n\n  @OnCreateTransition\n  static Transition onCreateTransition(ComponentContext c) {\n    return Transition.create(\n            Transition.TransitionKeyType.GLOBAL, GlobalKeyTransitionComponentSpec.SQUARE_KEY)\n        .animate(AnimatedProperties.X);\n  }\n}\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java",metastring:"file=../../sample/src/main/java/com/facebook/samples/litho/animations/docs/keyscope/GlobalKeyTransitionComponentSpec.java start=start_working end=end_working",file:"../../sample/src/main/java/com/facebook/samples/litho/animations/docs/keyscope/GlobalKeyTransitionComponentSpec.java",start:"start_working",end:"end_working"}),'@LayoutSpec\npublic class GlobalKeyTransitionComponentSpec {\n  public static final String SQUARE_KEY = "square";\n\n  @OnCreateLayout\n  static Component onCreateLayout(ComponentContext c, @State boolean toRight) {\n    return Column.create(c)\n        .child(\n            SolidColor.create(c)\n                .color(YELLOW)\n                .widthDip(80)\n                .heightDip(80)\n                .transitionKeyType(Transition.TransitionKeyType.GLOBAL)\n                .transitionKey(SQUARE_KEY))\n        .alignItems(toRight ? YogaAlign.FLEX_END : YogaAlign.FLEX_START)\n        .clickHandler(GlobalKeyTransitionComponent.onClickEvent(c))\n        .build();\n  }\n\n  @OnEvent(ClickEvent.class)\n  static void onClickEvent(ComponentContext c, @FromEvent View view) {\n    GlobalKeyTransitionComponent.onUpdateState(c);\n  }\n\n  @OnUpdateState\n  static void onUpdateState(StateValue<Boolean> toRight) {\n    toRight.set(!toRight.get());\n  }\n}\n')))}p.isMDXComponent=!0}}]);