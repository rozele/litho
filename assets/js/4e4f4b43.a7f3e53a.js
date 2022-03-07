"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9519],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>m,MDXProvider:()=>c,mdx:()=>f,useMDXComponents:()=>p,withMDXComponents:()=>d});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var m=a.createContext({}),d=function(e){return function(t){var n=p(t.components);return a.createElement(e,r({},t,{components:n}))}},p=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(m.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=p(n),c=o,h=d["".concat(i,".").concat(c)]||d[c]||u[c]||r;return n?a.createElement(h,l(l({ref:t},m),{},{components:n})):a.createElement(h,l({ref:t},m))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var m=2;m<r;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},58215:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o});var a=n(67294);const o=function(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},55064:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var a=n(87462),o=n(67294),r=n(72389),i=n(79443);const l=function(){var e=(0,o.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var s=n(83039),m=n(86010);const d="tabItem_1uMI";function p(e){var t,n,a,r=e.lazy,i=e.block,p=e.defaultValue,c=e.values,u=e.groupId,h=e.className,f=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=c?c:f.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),x=(0,s.duplicates)(g,(function(e,t){return e.value===t.value}));if(x.length>0)throw new Error('Docusaurus error: Duplicate values "'+x.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===p?p:null!=(t=null!=p?p:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=f[0])?void 0:a.props.value;if(null!==v&&!g.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=l(),b=y.tabGroupChoices,w=y.setTabGroupChoices,C=(0,o.useState)(v),N=C[0],k=C[1],T=[],j=(0,s.useScrollPositionBlocker)().blockElementScrollPositionUntilNextRender;if(null!=u){var P=b[u];null!=P&&P!==N&&g.some((function(e){return e.value===P}))&&k(P)}var S=function(e){var t=e.currentTarget,n=T.indexOf(t),a=g[n].value;a!==N&&(j(t),k(a),null!=u&&w(u,a))},I=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=T.indexOf(e.currentTarget)+1;n=T[a]||T[0];break;case"ArrowLeft":var o=T.indexOf(e.currentTarget)-1;n=T[o]||T[T.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,m.default)("tabs",{"tabs--block":i},h)},g.map((function(e){var t=e.value,n=e.label;return o.createElement("li",{role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,className:(0,m.default)("tabs__item",d,{"tabs__item--active":N===t}),key:t,ref:function(e){return T.push(e)},onKeyDown:I,onFocus:S,onClick:S},null!=n?n:t)}))),r?(0,o.cloneElement)(f.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}function c(e){var t=(0,r.default)();return o.createElement(p,(0,a.Z)({key:String(t)},e))}},72649:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>m,contentTitle:()=>d,metadata:()=>p,toc:()=>c,default:()=>h});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),i=n(55064),l=n(58215),s=["components"],m={id:"first-components",title:"Components and Props"},d=void 0,p={unversionedId:"tutorial/first-components",id:"tutorial/first-components",isDocsHomePage:!1,title:"Components and Props",description:"In this part of the tutorial, you'll learn the basic Litho building blocks, write a simple component,",source:"@site/../docs/tutorial/first-components.md",sourceDirName:"tutorial",slug:"/tutorial/first-components",permalink:"/docs/tutorial/first-components",editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/tutorial/first-components.md",tags:[],version:"current",frontMatter:{id:"first-components",title:"Components and Props"},sidebar:"mainSidebar",previous:{title:"Setting up the project",permalink:"/docs/tutorial/project-setup"},next:{title:"Adding State",permalink:"/docs/tutorial/adding-state"}},c=[{value:"Hello World!",id:"hello-world",children:[{value:"Key Points:",id:"key-points",children:[],level:4}],level:2},{value:"First Component Spec",id:"first-component-spec",children:[{value:"Key Points:",id:"key-points-1",children:[],level:4}],level:2},{value:"Introducing Layout",id:"introducing-layout",children:[{value:"Key Points:",id:"key-points-2",children:[],level:4}],level:2}],u={toc:c};function h(e){var t=e.components,n=(0,o.Z)(e,s);return(0,r.mdx)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("p",null,"In this part of the tutorial, you'll learn the basic Litho building blocks, write a simple component,\nextend it to accept ",(0,r.mdx)("strong",{parentName:"p"},"props")," and get familiar with building layouts with Flexbox in Litho."),(0,r.mdx)("h2",{id:"hello-world"},"Hello World!"),(0,r.mdx)("p",null,'To display a "Hello World!" text on the screen with Litho you need to integrate Litho component\nhierarchy into your View hierarchy.'),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java",metastring:"file=sample/src/main/java/com/facebook/samples/litho/onboarding/HelloWorldActivity.java start=start_example end=end_example",file:"sample/src/main/java/com/facebook/samples/litho/onboarding/HelloWorldActivity.java",start:"start_example",end:"end_example"},'@Override\nprotected void onCreate(Bundle savedInstanceState) {\n  super.onCreate(savedInstanceState);\n\n  ComponentContext c = new ComponentContext(this);\n  setContentView(LithoView.create(this, Text.create(c).text("Hello World!").build()));\n}\n')),(0,r.mdx)("h4",{id:"key-points"},"Key Points:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"LithoView"),": A hierarchy of Litho components is rendered using a LithoView"),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"Text.create(c)"),": This is how you create a component (using a generated builder), both built-in\nones and components you define yourself."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},".text('Hello World!')"),": ",(0,r.mdx)("inlineCode",{parentName:"li"},"text")," is a ",(0,r.mdx)("strong",{parentName:"li"},"prop")," of the Text component \u2013 an input parameter to\nconfigure the component.")),(0,r.mdx)("p",null,"Ignore ",(0,r.mdx)("inlineCode",{parentName:"p"},"ComponentContext")," for now, just know you need one to create a component."),(0,r.mdx)("h2",{id:"first-component-spec"},"First Component Spec"),(0,r.mdx)("p",null,"Welcome to your first Litho component spec! Previously you used a built-in ",(0,r.mdx)("inlineCode",{parentName:"p"},"Text")," component but now\nyou'll define your own. Like Text, your new component can also take ",(0,r.mdx)("strong",{parentName:"p"},"props"),". Props configure\na component."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java",metastring:"file=sample/src/main/java/com/facebook/samples/litho/onboarding/FirstComponentSpec.java start=start end=end",file:"sample/src/main/java/com/facebook/samples/litho/onboarding/FirstComponentSpec.java",start:"start",end:"end"},'@LayoutSpec\npublic class FirstComponentSpec {\n\n  @OnCreateLayout\n  static Component onCreateLayout(ComponentContext c, @Prop String name) {\n    return Text.create(c).text("Hello " + name + "!").build();\n  }\n}\n')),(0,r.mdx)("p",null,"To use your component, you can just replace the Text component from above with your component,\nsetting the ",(0,r.mdx)("inlineCode",{parentName:"p"},"name")," prop:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java",metastring:"file=sample/src/main/java/com/facebook/samples/litho/onboarding/FirstComponentSpecActivity.java start=start_example end=end_example",file:"sample/src/main/java/com/facebook/samples/litho/onboarding/FirstComponentSpecActivity.java",start:"start_example",end:"end_example"},'setContentView(LithoView.create(this, FirstComponent.create(c).name("Linda").build()));\n')),(0,r.mdx)("h4",{id:"key-points-1"},"Key Points:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"@LayoutSpec"),": This annotation tells us that the class defines a component. ",(0,r.mdx)("strong",{parentName:"li"},"The name of your\ncomponent is the name of the spec minus 'Spec'.")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"@OnCreateLayout"),": The static method marked with this annotation returns what your component\nshould render. ",(0,r.mdx)("inlineCode",{parentName:"li"},"@LayoutSpec")," components delegate to other components, combining, configuring, and\nputting them into layouts. ",(0,r.mdx)("strong",{parentName:"li"},"Composition of components is a key Litho concept!")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"@Prop"),": This defines a ",(0,r.mdx)("strong",{parentName:"li"},"prop")," for your component. It will automatically be added to your\ncomponent builder and is required for your component to be built.")),(0,r.mdx)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,r.mdx)("h5",{parentName:"div"},(0,r.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,r.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.mdx)("div",{parentName:"div",className:"admonition-content"},(0,r.mdx)("p",{parentName:"div"},"Your component class is generated at build time via the annotation processor. To get proper IDE\nautocompletion without having to rebuild, make sure you've installed the ",(0,r.mdx)("a",{parentName:"p",href:"/docs/devtools/android-studio-plugin"},"Litho Android Studio plugin"),"!"))),(0,r.mdx)("h2",{id:"introducing-layout"},"Introducing Layout"),(0,r.mdx)("p",null,"Enough of HelloWorlds \u2013 let's get to building our Instagram app!"),(0,r.mdx)("p",null,"Before we start, let's add 2 simple classes to represent ",(0,r.mdx)("inlineCode",{parentName:"p"},"User")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"Post")," data models:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/onboarding/model/models.kt start=start_example end=end_example",file:"sample/src/main/java/com/facebook/samples/litho/onboarding/model/models.kt",start:"start_example",end:"end_example"},"class User(val username: String, @DrawableRes val avatarRes: Int)\n\nclass Post(val user: User, @DrawableRes val imageRes: Int)\n")),(0,r.mdx)("p",null,"Now it's time for UI work!\nFirst you'll create a component for an Instagram post and that requires layouting 2 images\nand a text in a particular way. Layouts in Litho are defined via the Flexbox API. You can read more\nabout different layouting options in ",(0,r.mdx)("a",{parentName:"p",href:"/docs/mainconcepts/uicomposition/flexbox-yoga"},"Layout with Flexbox"),"\ndoc, but for now it's enough to know that the main Flexbox primitives are ",(0,r.mdx)("strong",{parentName:"p"},"Column")," and ",(0,r.mdx)("strong",{parentName:"p"},"Row"),",\nand they are used to arrange children vertically and horizontally, respectively."),(0,r.mdx)("p",null,"With their help a ",(0,r.mdx)("inlineCode",{parentName:"p"},"Post")," component that will render the UI of an Instagram post will look like that:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java",metastring:"file=sample/src/main/java/com/facebook/samples/litho/onboarding/PostSimpleSpec.java start=start_example end=end_example",file:"sample/src/main/java/com/facebook/samples/litho/onboarding/PostSimpleSpec.java",start:"start_example",end:"end_example"},"@LayoutSpec\npublic class PostSimpleSpec {\n\n  @OnCreateLayout\n  static Component onCreateLayout(ComponentContext c, @Prop Post post) {\n    return Column.create(c)\n        .child(\n            Row.create(c)\n                .child(Image.create(c).drawableRes(post.getUser().getAvatarRes()))\n                .child(Text.create(c).text(post.getUser().getUsername()).textStyle(Typeface.BOLD)))\n        .child(\n            Image.create(c)\n                .drawableRes(post.getImageRes())\n                .scaleType(ImageView.ScaleType.CENTER_CROP)\n                .aspectRatio(1))\n        .build();\n  }\n}\n")),(0,r.mdx)("p",null,"Though hierarchically components are placed correctly, this doesn't look nice, so, as a final touch\nlet's apply some flexbox styles:"),(0,r.mdx)(i.default,{groupId:"state-overview",defaultValue:"kotlin",values:[{label:"Kotlin API",value:"kotlin"},{label:"Spec API",value:"java"}],mdxType:"Tabs"},(0,r.mdx)(l.default,{value:"kotlin",mdxType:"TabItem"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/onboarding/PostStyledKComponent.kt start=start_example end=end_example",file:"sample/src/main/java/com/facebook/samples/litho/onboarding/PostStyledKComponent.kt",start:"start_example",end:"end_example"},"class PostStyledKComponent(val post: Post) : KComponent() {\n  override fun ComponentScope.render(): Component {\n    return Column {\n      child(\n          Row(alignItems = YogaAlign.CENTER, style = Style.padding(all = 8.dp)) {\n            child(\n                Image(\n                    drawable = drawableRes(post.user.avatarRes),\n                    style = Style.width(36.dp).height(36.dp).margin(start = 4.dp, end = 8.dp)))\n            child(Text(text = post.user.username, textStyle = Typeface.BOLD))\n          })\n      child(\n          Image(\n              drawable = drawableRes(post.imageRes),\n              scaleType = ImageView.ScaleType.CENTER_CROP,\n              style = Style.aspectRatio(1f)))\n    }\n  }\n}\n"))),(0,r.mdx)(l.default,{value:"java",mdxType:"TabItem"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java",metastring:"file=sample/src/main/java/com/facebook/samples/litho/onboarding/PostStyledSpec.java start=start_example end=end_example",file:"sample/src/main/java/com/facebook/samples/litho/onboarding/PostStyledSpec.java",start:"start_example",end:"end_example"},"@OnCreateLayout\nstatic Component onCreateLayout(ComponentContext c, @Prop Post post) {\n  return Column.create(c)\n      .child(\n          Row.create(c)\n              .paddingDip(YogaEdge.ALL, 8)\n              .alignItems(YogaAlign.CENTER)\n              .child(\n                  Image.create(c)\n                      .drawableRes(post.getUser().getAvatarRes())\n                      .widthDip(36)\n                      .heightDip(36)\n                      .marginDip(YogaEdge.START, 4)\n                      .marginDip(YogaEdge.END, 8))\n              .child(Text.create(c).text(post.getUser().getUsername()).textStyle(Typeface.BOLD)))\n      .child(\n          Image.create(c)\n              .drawableRes(post.getImageRes())\n              .scaleType(ImageView.ScaleType.CENTER_CROP)\n              .aspectRatio(1))\n      .build();\n}\n")))),(0,r.mdx)("h4",{id:"key-points-2"},"Key Points:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"Column")," and ",(0,r.mdx)("inlineCode",{parentName:"li"},"Row"),": The key container types in Litho. They stack children vertically and\nhorizontally, respectively."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"paddingDip"),": This prop sets padding in Android dp units. ",(0,r.mdx)("inlineCode",{parentName:"li"},"padding")," along with ",(0,r.mdx)("inlineCode",{parentName:"li"},"margin"),", ",(0,r.mdx)("inlineCode",{parentName:"li"},"width"),"\nand ",(0,r.mdx)("inlineCode",{parentName:"li"},"height")," are some of many props where you will find variants like ",(0,r.mdx)("inlineCode",{parentName:"li"},"paddingRes"),", ",(0,r.mdx)("inlineCode",{parentName:"li"},"paddingPx"),",\nand ",(0,r.mdx)("inlineCode",{parentName:"li"},"paddingAttr")," that allow you to define it in different ways."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"Image"),": Image is another built-in component that can render a drawable, and ",(0,r.mdx)("inlineCode",{parentName:"li"},"drawableRes")," is\nanother prop like padding that can accept a drawable in different ways.")))}h.isMDXComponent=!0}}]);