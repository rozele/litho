"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4705],{15680:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>s,MDXProvider:()=>c,mdx:()=>f,useMDXComponents:()=>m,withMDXComponents:()=>d});var o=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},i.apply(this,arguments)}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),d=function(e){return function(t){var n=m(t.components);return o.createElement(e,i({},t,{components:n}))}},m=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=m(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},x=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=m(n),c=a,u=d["".concat(r,".").concat(c)]||d[c]||h[c]||i;return n?o.createElement(u,l(l({ref:t},s),{},{components:n})):o.createElement(u,l({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=x;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,r[1]=l;for(var s=2;s<i;s++)r[s]=n[s];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}x.displayName="MDXCreateElement"},47800:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>x,frontMatter:()=>p,metadata:()=>d,toc:()=>c});var o=n(58168),a=n(98587),i=(n(96540),n(15680)),r=n(86025),l=["components"],p={id:"tutorial",title:"Tutorial"},s=void 0,d={unversionedId:"tutorial",id:"tutorial",title:"Tutorial",description:"This tutorial assumes you've gone through the Getting Started guide to set up Litho.  Make sure you set up Litho's core libraries and Sections' libraries.",source:"@site/../docs/tutorial.mdx",sourceDirName:".",slug:"/tutorial",permalink:"/docs/tutorial",draft:!1,editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/tutorial.mdx",tags:[],version:"current",frontMatter:{id:"tutorial",title:"Tutorial"}},m={},c=[{value:"1. Hello World",id:"1-hello-world",level:2},{value:"2. Your First Custom Component",id:"2-your-first-custom-component",level:2},{value:"3. Creating a List of Items",id:"3-creating-a-list-of-items",level:2},{value:"4. Defining a Component&#39;s properties",id:"4-defining-a-components-properties",level:2},{value:"Summary",id:"summary",level:2},{value:"Looking for more?",id:"looking-for-more",level:3}],u={toc:c},h="wrapper";function x(e){var t=e.components,n=(0,a.A)(e,l);return(0,i.mdx)(h,(0,o.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"This tutorial assumes you've gone through the ",(0,i.mdx)("a",{parentName:"p",href:"/docs/getting-started"},"Getting Started")," guide to set up Litho.  Make sure you set up Litho's core libraries and Sections' libraries."),(0,i.mdx)("p",null,'In this tutorial, you\'ll start by building a basic "Hello World!" screen using Litho and work your way up to creating a list of "Hello World!" items on the screen. Along the way, you\'ll learn about the building blocks of Litho: ',(0,i.mdx)("a",{parentName:"p",href:"pathname:///javadoc/com/facebook/litho/Component.html"},"Component"),", and ",(0,i.mdx)("a",{parentName:"p",href:"pathname:///javadoc/com/facebook/litho/LithoView.html"},"LithoView"),". You will also learn how to create lists with ",(0,i.mdx)("a",{parentName:"p",href:"pathname:///javadoc/com/facebook/litho/sections/Section.html"},"Section")," and how to set properties on components."),(0,i.mdx)("h2",{id:"1-hello-world"},"1. Hello World"),(0,i.mdx)("p",null,'In this initial step, you\'ll display a view with "Hello World!".'),(0,i.mdx)("p",null,"First, initialize ",(0,i.mdx)("inlineCode",{parentName:"p"},"SoLoader")," in your ",(0,i.mdx)("inlineCode",{parentName:"p"},"Application")," class:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample-barebones/src/main/java/com/facebook/samples/lithoktbarebones/SampleApplication.kt start=app_setup_start end=app_setup_end",file:"sample-barebones/src/main/java/com/facebook/samples/lithoktbarebones/SampleApplication.kt",start:"app_setup_start",end:"app_setup_end"},"class SampleApplication : Application() {\n  override fun onCreate() {\n    super.onCreate()\n\n    SoLoader.init(this, false)\n  }\n}\n")),(0,i.mdx)("p",null,"Behind the scenes, Litho uses ",(0,i.mdx)("a",{parentName:"p",href:"https://yogalayout.dev/docs/about-yoga"},"Yoga")," for layout. Yoga has native dependencies and ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/facebook/SoLoader"},"SoLoader")," is brought in to take care of loading those. Initializing ",(0,i.mdx)("inlineCode",{parentName:"p"},"SoLoader")," here ensures that you're not referencing unloaded libraries later on."),(0,i.mdx)("p",null,"Next, add a predefined ",(0,i.mdx)("a",{parentName:"p",href:"pathname:///javadoc/com/facebook/litho/widget/Text.html"},"Text")," Litho component to an activity:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java"},'@Override\npublic void onCreate(Bundle savedInstanceState) {\n    super.onCreate(savedInstanceState);\n\n    final ComponentContext c = new ComponentContext(this);\n\n    final Component component = Text.create(c)\n        .text("Hello World")\n        .textSizeDip(50)\n        .build();\n\n    setContentView(LithoView.create(c, component));\n}\n')),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"LithoView")," is an Android ",(0,i.mdx)("inlineCode",{parentName:"p"},"ViewGroup")," that can render components; it is the bridge between Litho components and Android ",(0,i.mdx)("inlineCode",{parentName:"p"},"View"),"s. The example sets the content for the activity to a ",(0,i.mdx)("inlineCode",{parentName:"p"},"LithoView")," that displays a ",(0,i.mdx)("inlineCode",{parentName:"p"},"Text")," component."),(0,i.mdx)("p",null,"How do the components come into play? Let's zero in on this piece of code:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java"},'Text.create(c)\n    .text("Hello World")\n    .textSizeDip(50)\n    .build();\n')),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"Text")," is a core component defined in ",(0,i.mdx)("inlineCode",{parentName:"p"},"com.facebook.litho.widget"),".  It has a number of properties such as ",(0,i.mdx)("em",{parentName:"p"},"text")," and ",(0,i.mdx)("em",{parentName:"p"},"textSize")," which you can set as shown. These properties are called ",(0,i.mdx)("em",{parentName:"p"},"props")," as inspired by ",(0,i.mdx)("a",{parentName:"p",href:"https://facebook.github.io/react/"},"React")," terminology.\nYou'll learn how to write your own components later but it's worth noting the ",(0,i.mdx)("inlineCode",{parentName:"p"},"Text")," class is generated from a ",(0,i.mdx)("inlineCode",{parentName:"p"},"TextSpec")," class. The generated component class provides a builder API with methods to define values for the component's props."),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"Text")," component is added as a single child component to the ",(0,i.mdx)("inlineCode",{parentName:"p"},"LithoView")," in the example. You could instead have a single root component with several child components. You'll see how to do this in later steps."),(0,i.mdx)("p",null,"That's it! Run the app, you should see something like this:"),(0,i.mdx)("img",{src:(0,r.default)("/images/barebones1.png"),style:{width:"300px"}}),(0,i.mdx)("p",null,"Not pretty, but this is certainly a start!"),(0,i.mdx)("h2",{id:"2-your-first-custom-component"},"2. Your First Custom Component"),(0,i.mdx)("p",null,"At the end of this tutorial you'll have a simple, scrollable list. This list will just display an item with a title and subtitle a whole lot of times. Exciting times!\nIn this part of the tutorial, you'll write a simple component that is the list item. Naturally, a real world app would define a more complicated component but you'll learn all the basics you need to do that in this example."),(0,i.mdx)("p",null,"Ready? It's time to dive in and build this component. In Litho, you write ",(0,i.mdx)("em",{parentName:"p"},"Spec")," classes to declare the layout for your components. The framework then generates the underlying component class that you use in your code to create a component instance."),(0,i.mdx)("p",null,"Your custom component will be called ",(0,i.mdx)("inlineCode",{parentName:"p"},"ListItem")," and it will display a title with a smaller subtitle underneath. Therefore, you need to create a class named ",(0,i.mdx)("inlineCode",{parentName:"p"},"ListItemSpec")," with the following content:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java"},'@LayoutSpec\npublic class ListItemSpec {\n\n  @OnCreateLayout\n  static Component onCreateLayout(ComponentContext c) {\n\n    return Column.create(c)\n        .paddingDip(ALL, 16)\n        .backgroundColor(Color.WHITE)\n        .child(\n            Text.create(c)\n                .text("Hello world")\n                .textSizeSp(40))\n        .child(\n            Text.create(c)\n                .text("Litho tutorial")\n                .textSizeSp(20))\n        .build();\n  }\n}\n')),(0,i.mdx)("p",null,"You should recognize the ",(0,i.mdx)("inlineCode",{parentName:"p"},"Text")," component from the previous tutorial step. In this example, you're passing it in as a ",(0,i.mdx)("inlineCode",{parentName:"p"},"child")," property of a ",(0,i.mdx)("a",{parentName:"p",href:"pathname:///javadoc/com/facebook/litho/Column.html"},"Column"),". You can think of a ",(0,i.mdx)("inlineCode",{parentName:"p"},"Column")," as equivalent to a ",(0,i.mdx)("inlineCode",{parentName:"p"},"<div>")," in HTML.  It's a wrapper, used mainly for collating things together and perhaps adding some background styling.  Since Litho uses ",(0,i.mdx)("a",{parentName:"p",href:"https://yogalayout.dev/docs/about-yoga"},"Yoga"),", you can add flexbox attributes to set the layout for the children of a ",(0,i.mdx)("inlineCode",{parentName:"p"},"Column")," or a ",(0,i.mdx)("inlineCode",{parentName:"p"},"Row"),". Here, you simply set the padding and the background color."),(0,i.mdx)("p",null,"How do you render this component? In your activity, simply change the ",(0,i.mdx)("inlineCode",{parentName:"p"},"Component")," definition to:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java"},"final Component component = ListItem.create(c).build();\n")),(0,i.mdx)("admonition",{type:"note"},(0,i.mdx)("p",{parentName:"admonition"},"That's ",(0,i.mdx)("inlineCode",{parentName:"p"},"ListItem")," you're using, not ",(0,i.mdx)("inlineCode",{parentName:"p"},"ListItemSpec"),".")),(0,i.mdx)("p",null,"Where did ",(0,i.mdx)("inlineCode",{parentName:"p"},"ListItem")," come from?  Where are ",(0,i.mdx)("inlineCode",{parentName:"p"},"create")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"build")," defined?  This is the magic of Litho ",(0,i.mdx)("em",{parentName:"p"},"Specs"),"."),(0,i.mdx)("p",null,"In the ",(0,i.mdx)("a",{parentName:"p",href:"/docs/getting-started"},"Getting Started")," guide, we saw how to add the dependencies to your project to make Litho code generation work.\nThis runs an annotation processor over your code.  It looks for ",(0,i.mdx)("inlineCode",{parentName:"p"},"FooSpec")," class names and generates ",(0,i.mdx)("inlineCode",{parentName:"p"},"Foo")," classes with the same package as your spec. These classes will have all the methods required by Litho automatically filled in. In addition, based upon the specification, there will be extra methods (such as ",(0,i.mdx)("inlineCode",{parentName:"p"},"Text"),"'s ",(0,i.mdx)("inlineCode",{parentName:"p"},".textSizeSp")," or the ",(0,i.mdx)("inlineCode",{parentName:"p"},".backgroundColor")," method of ",(0,i.mdx)("inlineCode",{parentName:"p"},"Column"),"/",(0,i.mdx)("inlineCode",{parentName:"p"},"Row"),") generated by annotation processor."),(0,i.mdx)("p",null,"It's as simple as that. Run your app. You should see something like this:"),(0,i.mdx)("img",{src:(0,r.default)("/images/barebones2.png"),width:"300px"}),(0,i.mdx)("h2",{id:"3-creating-a-list-of-items"},"3. Creating a List of Items"),(0,i.mdx)("p",null,"You can create lists in Litho by using the ",(0,i.mdx)("a",{parentName:"p",href:"pathname:///javadoc/com/facebook/litho/sections/widget/RecyclerCollectionComponent.html"},"RecyclerCollectionComponent")," and the Sections library. ",(0,i.mdx)("inlineCode",{parentName:"p"},"RecyclerCollectionComponent")," is used for creating scrollable units in Litho and it hides some of the complexity of having to work directly with Android's ",(0,i.mdx)("inlineCode",{parentName:"p"},"RecyclerView")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"Adapter")," concepts."),(0,i.mdx)("p",null,"With the Sections API, you group the items in your list into sections and write ",(0,i.mdx)("em",{parentName:"p"},"GroupSectionSpec")," classes to declare what each section renders and what data it uses."),(0,i.mdx)("p",null,"Ready? It's time to build this section. Your custom section will be called ",(0,i.mdx)("inlineCode",{parentName:"p"},"ListSection")," and it will render ",(0,i.mdx)("inlineCode",{parentName:"p"},"ListItem")," components. Create a class named ",(0,i.mdx)("inlineCode",{parentName:"p"},"ListSectionSpec")," with the following content:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java"},"@GroupSectionSpec\npublic class ListSectionSpec {\n\n  @OnCreateChildren\n  static Children onCreateChildren(final SectionContext c) {\n    Children.Builder builder = Children.create();\n\n    for (int i = 0; i < 32; i++) {\n      builder.child(\n          SingleComponentSection.create(c)\n              .component(ListItem.create(c).build()));\n    }\n    return builder.build();\n  }\n}\n")),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"SingleComponentSection")," is a core section defined in ",(0,i.mdx)("inlineCode",{parentName:"p"},"com.facebook.litho.sections.widget")," that renders a single component.  ",(0,i.mdx)("inlineCode",{parentName:"p"},"ListSectionSpec")," describes a section that has 32 child sections, each of which is responsible for rendering a ",(0,i.mdx)("inlineCode",{parentName:"p"},"ListItem"),".  We can use this section with ",(0,i.mdx)("inlineCode",{parentName:"p"},"RecyclerCollectionComponent")," to render our list. ",(0,i.mdx)("a",{parentName:"p",href:"pathname:///javadoc/com/facebook/litho/sections/widget/RecyclerCollectionComponent.html"},"RecyclerCollectionComponent")," takes a section as a prop and renders a RecyclerView containing whatever UI the section outputs.  It also manages updates and changes from the section such as refreshing data and performing tail fetches. We're not using any data fetching here so lets disable PTR (pull to refresh) for this tutorial. In your activity, change the ",(0,i.mdx)("inlineCode",{parentName:"p"},"component")," definition to:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java"},"\nfinal Component component =\n    RecyclerCollectionComponent.create(c)\n        .disablePTR(true)\n        .section(ListSection.create(new SectionContext(c)).build())\n        .build();\n\n")),(0,i.mdx)("admonition",{type:"note"},(0,i.mdx)("p",{parentName:"admonition"},"That's ",(0,i.mdx)("inlineCode",{parentName:"p"},"ListSection")," you're using, not ",(0,i.mdx)("inlineCode",{parentName:"p"},"ListSectionSpec"),".")),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"ListSectionSpec")," should look familiar to the ",(0,i.mdx)("inlineCode",{parentName:"p"},"ListItemSpec")," you wrote in the last step! Litho runs annotation processors over your code to find ",(0,i.mdx)("inlineCode",{parentName:"p"},"ListSectionSpec")," and generates ",(0,i.mdx)("inlineCode",{parentName:"p"},"ListSection")," just like how it finds ",(0,i.mdx)("inlineCode",{parentName:"p"},"ListItemSpec")," and generates ",(0,i.mdx)("inlineCode",{parentName:"p"},"ListItem")," in the same package as your spec."),(0,i.mdx)("p",null,"Run the app. You should see a scrollable list of 32 ",(0,i.mdx)("inlineCode",{parentName:"p"},"ListItem")," components:"),(0,i.mdx)("img",{src:(0,r.default)("/images/barebones3.png"),style:{width:"300px"}}),(0,i.mdx)("h2",{id:"4-defining-a-components-properties"},"4. Defining a Component's properties"),(0,i.mdx)("p",null,"Lists are no good if they only contain repetitive copies of a single component. In this part, you'll look at ",(0,i.mdx)("em",{parentName:"p"},"properties")," or props. These are attributes you can set on components to change their behavior or appearance."),(0,i.mdx)("p",null,"Adding props to a component is very simple. Props are parameters to methods of the component specification, annotated with the ",(0,i.mdx)("inlineCode",{parentName:"p"},"@Prop")," annotation."),(0,i.mdx)("p",null,"Modify ",(0,i.mdx)("inlineCode",{parentName:"p"},"ListItemSpec")," as follows:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java"},"@OnCreateLayout\nstatic Component onCreateLayout(\n    ComponentContext c,\n    @Prop int color,\n    @Prop String title,\n    @Prop String subtitle) {\n\n  return Column.create(c)\n        .paddingDip(ALL, 16)\n        .backgroundColor(color)\n        .child(\n            Text.create(c)\n                .text(title)\n                .textSizeSp(40))\n        .child(\n            Text.create(c)\n                .text(subtitle)\n                .textSizeSp(20))\n        .build();\n}\n")),(0,i.mdx)("p",null,"This adds three props: ",(0,i.mdx)("inlineCode",{parentName:"p"},"title"),", ",(0,i.mdx)("inlineCode",{parentName:"p"},"subtitle")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"color")," props. Notice that the background color and the strings for the ",(0,i.mdx)("inlineCode",{parentName:"p"},"Text")," components' text are no longer hard-coded and are now based on the ",(0,i.mdx)("inlineCode",{parentName:"p"},"onCreateLayout")," method parameters."),(0,i.mdx)("p",null,"The magic happens in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"@Prop")," annotations and the annotation processor.  The processor generates methods on the component builder that correspond to the props in a smart way. You can now change ",(0,i.mdx)("inlineCode",{parentName:"p"},"ListSectionSpec")," to specify properties when constructing ",(0,i.mdx)("inlineCode",{parentName:"p"},"ListItem"),":"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java"},'@OnCreateChildren\nstatic Children onCreateChildren(final SectionContext c) {\n  Children.Builder builder = Children.create();\n\n  for (int i = 0; i < 32; i++) {\n    builder.child(\n        SingleComponentSection.create(c)\n            .component(ListItem.create(c)\n               .color(i % 2 == 0 ? Color.WHITE : Color.LTGRAY)\n               .title(i + ". Hello, world!")\n               .subtitle("Litho tutorial")\n               .build()));\n  }\n  return builder.build();\n}\n')),(0,i.mdx)("p",null,"Now when ",(0,i.mdx)("inlineCode",{parentName:"p"},"ListItem")," is constructed, the ",(0,i.mdx)("inlineCode",{parentName:"p"},"color"),", ",(0,i.mdx)("inlineCode",{parentName:"p"},"title")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"subtitle")," props are passed in with the background color alternating for each row."),(0,i.mdx)("p",null,"Run the app. You should see something like this:"),(0,i.mdx)("img",{src:(0,r.default)("/images/barebones4.png"),width:"300px"}),(0,i.mdx)("p",null,"You can specify more options to the ",(0,i.mdx)("inlineCode",{parentName:"p"},"@Prop")," annotation.  For example, consider the property:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java"},"@Prop(optional = true, resType = ResType.DIMEN_OFFSET) int shadowRadius,\n")),(0,i.mdx)("p",null,"This tells the annotation processor to construct a number of functions, such as ",(0,i.mdx)("inlineCode",{parentName:"p"},"shadowRadiusPx"),", ",(0,i.mdx)("inlineCode",{parentName:"p"},"shadowRadiusDip"),", ",(0,i.mdx)("inlineCode",{parentName:"p"},"shadowRadiusSp")," as well as ",(0,i.mdx)("inlineCode",{parentName:"p"},"shadowRadiusRes"),"."),(0,i.mdx)("h2",{id:"summary"},"Summary"),(0,i.mdx)("p",null,"Congratulations on completing this tutorial! This basic tutorial should arm you with all the building blocks to start using Litho and building your own components. You can find the predefined widget components you can use in the ",(0,i.mdx)("a",{parentName:"p",href:"pathname:///javadoc/com/facebook/litho/widget/package-frame.html"},"com.facebook.litho.widgets")," and ",(0,i.mdx)("a",{parentName:"p",href:"pathname:///javadoc/com/facebook/litho/sections/widget/package-frame.html"},"com.facebook.litho.sections.widget")," packages.\nYou can find the ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/facebook/litho/tree/master/sample-barebones"},"completed tutorial here"),". Be sure to check out ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/facebook/litho/tree/master/sample"},"this sample")," for more in-depth code as well as the Litho API documentation."),(0,i.mdx)("h3",{id:"looking-for-more"},"Looking for more?"),(0,i.mdx)("p",null,"We briefly talked about Sections in this tutorial when building the list.  The Sections framework makes it easy to build complex lists in a declarative, composable way.  Learn more in an optional part 2 of this tutorial ",(0,i.mdx)("a",{parentName:"p",href:"/docs/sections-tutorial"},"here"),"."))}x.isMDXComponent=!0}}]);