"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9566],{3905:(e,o,t)=>{t.r(o),t.d(o,{MDXContext:()=>c,MDXProvider:()=>m,mdx:()=>f,useMDXComponents:()=>d,withMDXComponents:()=>s});var n=t(67294);function a(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function r(){return r=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var t=arguments[o];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},r.apply(this,arguments)}function i(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?i(Object(t),!0).forEach((function(o){a(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function p(e,o){if(null==e)return{};var t,n,a=function(e,o){if(null==e)return{};var t,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],o.indexOf(t)>=0||(a[t]=e[t]);return a}(e,o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),s=function(e){return function(o){var t=d(o.components);return n.createElement(e,r({},o,{components:t}))}},d=function(e){var o=n.useContext(c),t=o;return e&&(t="function"==typeof e?e(o):l(l({},o),e)),t},m=function(e){var o=d(e.components);return n.createElement(c.Provider,{value:o},e.children)},h={inlineCode:"code",wrapper:function(e){var o=e.children;return n.createElement(n.Fragment,{},o)}},u=n.forwardRef((function(e,o){var t=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=d(t),m=a,u=s["".concat(i,".").concat(m)]||s[m]||h[m]||r;return t?n.createElement(u,l(l({ref:o},c),{},{components:t})):n.createElement(u,l({ref:o},c))}));function f(e,o){var t=arguments,a=o&&o.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=u;var l={};for(var p in o)hasOwnProperty.call(o,p)&&(l[p]=o[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},16826:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>s,contentTitle:()=>p,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var n=t(83117),a=t(80102),r=(t(67294),t(3905)),i=["components"],l={id:"tooltips",title:"Tooltips"},p=void 0,c={unversionedId:"tooltips",id:"tooltips",title:"Tooltips",description:"Litho tooltip APIs provide methods for displaying a floating view anchored to a component in your hierarchy.",source:"@site/../docs/tooltips.md",sourceDirName:".",slug:"/tooltips",permalink:"/docs/tooltips",draft:!1,editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/tooltips.md",tags:[],version:"current",frontMatter:{id:"tooltips",title:"Tooltips"}},s={},d=[],m={toc:d};function h(e){var o=e.components,t=(0,a.Z)(e,i);return(0,r.mdx)("wrapper",(0,n.Z)({},m,t,{components:o,mdxType:"MDXLayout"}),(0,r.mdx)("p",null,"Litho tooltip APIs provide methods for displaying a floating view anchored to a component in your hierarchy."),(0,r.mdx)("p",null,"If you want to show an Android ",(0,r.mdx)("a",{parentName:"p",href:"https://developer.android.com/reference/android/widget/PopupWindow"},"PopupWindow")," anchored on a component, you need to have access to the view wrapping that component to use it as an anchor. However, in Litho, most components won't be wrapped in views and even if they are you don't have access to them."),(0,r.mdx)("p",null,"Litho provides a utility class called ",(0,r.mdx)("a",{parentName:"p",href:"pathname:///javadoc/com/facebook/litho/LithoTooltipController.html"},"LithoTooltipController")," as a Tooltip API that allows you to show a tooltip anchored on a Component without dealing with view search."),(0,r.mdx)("p",null,"Here's how you'd use the Tooltip API to show a tooltip on a component 1. when that component becomes visible and 2. on a click event:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},'@LayoutSpec\npublic class TooltipTriggerExampleComponentSpec {\n\n  @OnCreateLayout\n  static Component onCreateLayout(ComponentContext c) {\n    final Handle anchorHandle = new Handle();\n    return Column.create(c)\n        .child(\n            Text.create(c)\n                .text("Click to Trigger show tooltip")\n                .clickHandler(TooltipTriggerExampleComponent.onClick(c, anchorHandle)))\n        .child(Text.create(c).text("Tooltip anchor").handle(anchorHandle))\n        .visibleHandler(TooltipTriggerExampleComponent.onVisible(c, anchorHandle))\n        .build();\n  }\n\n  @OnEvent(ClickEvent.class)\n  static void onClick(ComponentContext c, @Param Handle anchorHandle) {\n    TooltipTriggerExampleComponentSpec.showToolTip(c, anchorHandle);\n  }\n\n  @OnEvent(VisibleEvent.class)\n  static void onVisible(ComponentContext c, @Param Handle anchorHandle) {\n    // Show a tooltip when the component becomes visible.\n    // NB: Incremental mount must be enabled for the component to receive visibility callbacks.\n    TooltipTriggerExampleComponentSpec.showToolTip(c, anchorHandle);\n  }\n\n  static void showToolTip(ComponentContext c, Handle anchorHandle) {\n    final LithoTooltip tooltip = /* Provide an implementation of LithoTooltip or PopupWindow */;\n    LithoTooltipController.showTooltipOnHandle(c, tooltip, anchorHandle);\n  }\n}\n')),(0,r.mdx)("p",null,(0,r.mdx)("a",{parentName:"p",href:"pathname:///javadoc/com/facebook/litho/LithoTooltip.html"},"LithoTooltip")," is an interface that requires you to implement a method for showing a tooltip given a host view and the bounds of the anchor component relative to the host view. This enables you to use a custom tooltip implementation."),(0,r.mdx)("p",null,"The interface forces the implementation of ",(0,r.mdx)("inlineCode",{parentName:"p"},"showLithoTooltip"),", a method that shows a tooltip given the bounds of the anchor Component inside a hosting view."),(0,r.mdx)("p",null,"For finding the component that is used as anchor, you need to specify a handle on the anchor component."),(0,r.mdx)("p",null,"For convenience, you can call ",(0,r.mdx)("inlineCode",{parentName:"p"},"LithoTooltipController.showTooltip")," on a ",(0,r.mdx)("a",{parentName:"p",href:"https://developer.android.com/reference/android/widget/PopupWindow"},"PopupWindow")," directly without having to create a ",(0,r.mdx)("inlineCode",{parentName:"p"},"LithoTooltip")," implementation yourself. By default it shows the tooltip as a dropdown with the specified offsets. The example above would change to:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},"@OnEvent(VisibleEvent.class)\nstatic void onVisible(\n    ComponentContext c,\n    @Prop PopupWindow tooltip,\n    @State Handle anchorHandle) {\n  LithoTooltipController.showTooltipOnHandle(\n      c,\n      tooltip,\n      anchorHandle);\n}\n")),(0,r.mdx)("p",null,"At the moment the API only supports View tooltips. We might add Component tooltip support in the future if there's a need for it - contact us if that's the case for you."))}h.isMDXComponent=!0}}]);