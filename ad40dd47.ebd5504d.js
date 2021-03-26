(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{124:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return s}));var a=t(2),r=t(6),o=(t(0),t(161)),c={id:"trigger-events",title:"Triggering events with Handles"},i={unversionedId:"mainconcepts/coordinate-state-actions/trigger-events",id:"mainconcepts/coordinate-state-actions/trigger-events",isDocsHomePage:!1,title:"Triggering events with Handles",description:"Moved from old website without any change.",source:"@site/../docs/mainconcepts/coordinate-state-actions/trigger-events.md",slug:"/mainconcepts/coordinate-state-actions/trigger-events",permalink:"/docs/mainconcepts/coordinate-state-actions/trigger-events",editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/mainconcepts/coordinate-state-actions/trigger-events.md",version:"current",sidebar:"mainSidebar",previous:{title:"Events Overview",permalink:"/docs/mainconcepts/coordinate-state-actions/events"},next:{title:"TreeProps",permalink:"/docs/mainconcepts/coordinate-state-actions/treeprops"}},p=[{value:"Trigger custom events",id:"trigger-custom-events",children:[]}],l={rightToc:p};function s(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"admonition admonition-danger alert alert--danger"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"Content needs to be updated")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Moved from old website without any change."))),Object(o.b)("p",null,"You can trigger Events on components using a ",Object(o.b)("inlineCode",{parentName:"p"},"Handle"),". A ",Object(o.b)("inlineCode",{parentName:"p"},"Handle")," is a unique identifier that can be shared can with other components by passing it as a ",Object(o.b)("inlineCode",{parentName:"p"},"@Prop"),". Use ",Object(o.b)("inlineCode",{parentName:"p"},"new Handle()")," to create a new ",Object(o.b)("inlineCode",{parentName:"p"},"Handle")," and assign it to a component using the ",Object(o.b)("inlineCode",{parentName:"p"},".handle(..)")," method in the component's builder."),Object(o.b)("p",null,"In the following LayoutSpec we apply a ",Object(o.b)("inlineCode",{parentName:"p"},"Handle")," (passed in as a @Prop) to a ",Object(o.b)("inlineCode",{parentName:"p"},"TextInput")," component."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"@LayoutSpec\npublic class TextInputContainerComponentSpec {\n\n  @OnCreateLayout\n  static Component onCreateLayout(ComponentContext c, @Prop Handle textInputHandle) {\n    return Column.create(c).child(TextInput.create(c).handle(textInputHandle)).build();\n  }\n}\n")),Object(o.b)("p",null,"Components with a reference to the ",Object(o.b)("inlineCode",{parentName:"p"},"TextInput"),"'s handle can now manipulate it directly."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'@LayoutSpec\npublic class ClearTextTriggerExampleComponentSpec {\n\n  @OnCreateLayout\n  static Component onCreateLayout(ComponentContext c) {\n    final Handle textInputHandle = new Handle();\n    return Column.create(c)\n        .child(\n            Text.create(c)\n                .text("Clear")\n                .clickHandler(ClearTextTriggerExampleComponent.onClearClick(c, textInputHandle)))\n        .child(TextInputContainerComponent.create(c).textInputHandle(textInputHandle))\n        .build();\n  }\n\n  @OnEvent(ClickEvent.class)\n  static void onClearClick(ComponentContext c, @Param Handle textInputHandle) {\n    // Clear the TextInput inside TextInputContainerComponent\n    TextInput.setText(c, textInputHandle, "");\n  }\n}\n')),Object(o.b)("h2",{id:"trigger-custom-events"},"Trigger custom events"),Object(o.b)("p",null,"You can trigger your own custom events."),Object(o.b)("p",null,"Declare your event class."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"@Event\npublic class CustomEvent {\n  public int increaseBy;\n}\n")),Object(o.b)("p",null,"Create a trigger for your event inside your spec using the ",Object(o.b)("inlineCode",{parentName:"p"},"@OnTrigger")," annotation. This method will have access to event's parameters using @FromTrigger, as well as the components Props and State."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"@LayoutSpec\npublic class ComponentWithCustomEventTriggerComponentSpec {\n\n  ...\n\n  @OnTrigger(CustomEvent.class)\n  static void triggerCustomEvent(ComponentContext c, @FromTrigger int increaseBy) {\n    // Add custom event behavior\n  }\n}\n")),Object(o.b)("p",null,"Usages of your component must be assigned a Handle. The event can be triggered anywhere we have a reference to the ",Object(o.b)("inlineCode",{parentName:"p"},"Handle"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'@LayoutSpec\npublic class CustomEventTriggerExampleComponentSpec {\n\n  @OnCreateLayout\n  static Component onCreateLayout(ComponentContext c) {\n    final Handle textInputHandle = new Handle();\n    return Column.create(c)\n        .child(\n            Text.create(c)\n                .text("Trigger custom event")\n                .clickHandler(CustomEventTriggerExampleComponent.onClick(c, textInputHandle)))\n        .child(ComponentWithCustomEventTriggerComponent.create(c).handle(textInputHandle))\n        .build();\n  }\n\n  @OnEvent(ClickEvent.class)\n  static void onClick(ComponentContext c, @Param Handle textInputHandle) {\n    ComponentWithCustomEventTriggerComponent.triggerCustomEvent(c, textInputHandle, 2);\n  }\n}\n')))}s.isMDXComponent=!0},161:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return b}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),s=function(e){var n=r.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(t),m=a,b=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return t?r.a.createElement(b,i(i({ref:n},l),{},{components:t})):r.a.createElement(b,i({ref:n},l))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=m;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=t[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);