"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4958],{15680:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>l,MDXProvider:()=>p,mdx:()=>f,useMDXComponents:()=>m,withMDXComponents:()=>c});var a=n(96540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){return function(t){var n=m(t.components);return a.createElement(e,o({},t,{components:n}))}},m=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(l.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),c=m(n),p=i,h=c["".concat(s,".").concat(p)]||c[p]||u[p]||o;return n?a.createElement(h,r(r({ref:t},l),{},{components:n})):a.createElement(h,r({ref:t},l))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=g;var r={};for(var d in t)hasOwnProperty.call(t,d)&&(r[d]=t[d]);r.originalType=e,r[h]="string"==typeof e?e:i,s[1]=r;for(var l=2;l<o;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},63232:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>g,frontMatter:()=>d,metadata:()=>c,toc:()=>p});var a=n(58168),i=n(98587),o=(n(96540),n(15680)),s=n(86025),r=["components"],d={id:"debugging-sections",title:"Debugging Sections"},l=void 0,c={unversionedId:"debugging/debugging-sections",id:"debugging/debugging-sections",title:"Debugging Sections",description:"This page acts as a debugging guide that explains how to read the operations performed when an event occurs in a Litho Sections surface with the Flipper Sections plugin. This helps to debug common issues such as unwanted scrolling and items getting re-rendered incorrectly.",source:"@site/../docs/debugging/debugging-sections.md",sourceDirName:"debugging",slug:"/debugging/debugging-sections",permalink:"/docs/debugging/debugging-sections",draft:!1,editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/debugging/debugging-sections.md",tags:[],version:"current",frontMatter:{id:"debugging-sections",title:"Debugging Sections"},sidebar:"mainSidebar",previous:{title:"Debugging Tips",permalink:"/docs/debugging/debugging-tips"},next:{title:"Flipper Plugins",permalink:"/docs/devtools/flipper-plugins"}},m={},p=[{value:"Sections hierarchies",id:"sections-hierarchies",level:2},{value:"Sections terminology",id:"sections-terminology",level:2},{value:"Diffing",id:"diffing",level:3},{value:"Changesets",id:"changesets",level:3},{value:"Issues",id:"issues",level:2},{value:"Issue 1: the state of an entire Section surface is getting reset",id:"issue-1-the-state-of-an-entire-section-surface-is-getting-reset",level:3},{value:"Issue 2: the Section content scrolls away from top after loading",id:"issue-2-the-section-content-scrolls-away-from-top-after-loading",level:3},{value:"Issue 3: all items are being re-rendered after a data update",id:"issue-3-all-items-are-being-re-rendered-after-a-data-update",level:3},{value:"Issue 4: the Section is not updating items after a prop update",id:"issue-4-the-section-is-not-updating-items-after-a-prop-update",level:3}],h={toc:p},u="wrapper";function g(e){var t=e.components,d=(0,i.A)(e,r);return(0,o.mdx)(u,(0,a.A)({},h,d,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"This page acts as a debugging guide that explains how to read the operations performed when an event occurs in a Litho Sections surface with the Flipper Sections plugin. This helps to debug common ",(0,o.mdx)("a",{parentName:"p",href:"#issues"},"issues")," such as unwanted scrolling and items getting re-rendered incorrectly."),(0,o.mdx)("h2",{id:"sections-hierarchies"},"Sections hierarchies"),(0,o.mdx)("p",null,"In a Litho Sections hierarchy, the common setup is to have a ",(0,o.mdx)("inlineCode",{parentName:"p"},"RecyclerCollectionComponent")," as the root of your ",(0,o.mdx)("inlineCode",{parentName:"p"},"LithoView"),". This component is the bridge with the Sections hierarchy. You'll use this setup indirectly if you're using ",(0,o.mdx)("inlineCode",{parentName:"p"},"SectionsHelper"),"."),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"RecyclerCollectionComponent")," wraps a ",(0,o.mdx)("inlineCode",{parentName:"p"},"Recycler")," component, which mounts a ",(0,o.mdx)("inlineCode",{parentName:"p"},"RecyclerView"),". All sections surfaces are just APIs to make it easier to work with ",(0,o.mdx)("inlineCode",{parentName:"p"},"RecyclerView")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"RecyclerView.Adapter"),"."),(0,o.mdx)("p",null,"The adapter abstraction used in Sections is called a ",(0,o.mdx)("inlineCode",{parentName:"p"},"RecyclerBinder"),".\nAll adapter operations are dispatched to the ",(0,o.mdx)("inlineCode",{parentName:"p"},"RecyclerBinder"),", which use the render information implemented by the user in the GroupSectionSpec to transform them into ",(0,o.mdx)("inlineCode",{parentName:"p"},"LithoViews")," hosting ",(0,o.mdx)("inlineCode",{parentName:"p"},"ComponentTrees"),".  The ",(0,o.mdx)("inlineCode",{parentName:"p"},"LithoViews")," represent the items inserted into the ",(0,o.mdx)("inlineCode",{parentName:"p"},"RecyclerView.Adapter"),"."),(0,o.mdx)("p",null,"Simply put, under the hood, a Sections hierarchy is represented by a ",(0,o.mdx)("inlineCode",{parentName:"p"},"RecyclerView")," with a single view type which is the ",(0,o.mdx)("inlineCode",{parentName:"p"},"LithoView"),". Each item in the list is its own ",(0,o.mdx)("inlineCode",{parentName:"p"},"ComponentTree"),"."),(0,o.mdx)("p",null,(0,o.mdx)("img",{src:n(6549).A,width:"1148",height:"593"})),(0,o.mdx)("h2",{id:"sections-terminology"},"Sections terminology"),(0,o.mdx)("h3",{id:"diffing"},"Diffing"),(0,o.mdx)("p",null,"Diffing means comparing the existing data on a Section with an updated list passed through props or state. You can accomplish this through special Section Spec types called ",(0,o.mdx)("a",{parentName:"p",href:"/docs/sections/start"},"DiffSectionSpecs"),"."),(0,o.mdx)("h3",{id:"changesets"},"Changesets"),(0,o.mdx)("p",null,"A ",(0,o.mdx)("inlineCode",{parentName:"p"},"Changeset")," is a list of operations that are dispatched to the ",(0,o.mdx)("inlineCode",{parentName:"p"},"RecyclerView Adapter")," to update the items in a list. A Changeset consists of the same type of operations supported by a ",(0,o.mdx)("inlineCode",{parentName:"p"},"RecyclerView Adapter"),", such as insert, remove and update."),(0,o.mdx)("p",null,"Every time you recreate the Sections hierarchy by setting a new root or updating state, the framework calculates a new ",(0,o.mdx)("inlineCode",{parentName:"p"},"Changeset"),", which have the minimal list of operations that should be performed by the ",(0,o.mdx)("inlineCode",{parentName:"p"},"RecyclerView Adapter")," to reflect the data changes in the UI."),(0,o.mdx)("p",null,"Without using Sections, it\u2019s the Developer\u2019s responsibility to calculate granular operations for efficient updates to send to the Adapter, but the Sections API handles all of that."),(0,o.mdx)("h2",{id:"issues"},"Issues"),(0,o.mdx)("p",null,"The following common issues can occur when using Sections, each issue has an accompanying description and walks you through how to debug them.  The code for the issues is located in the ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/facebook/litho/tree/master/sample/src/main/java/com/facebook/samples/litho/java/changesetdebug"},"changesetdebug")," file."),(0,o.mdx)("p",null,"To test yourself: ",(0,o.mdx)("inlineCode",{parentName:"p"},"./gradlew installDebug")," and navigate to the ",(0,o.mdx)("inlineCode",{parentName:"p"},"Changeset debug")," section."),(0,o.mdx)("h3",{id:"issue-1-the-state-of-an-entire-section-surface-is-getting-reset"},"Issue 1: the state of an entire Section surface is getting reset"),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Code"),": ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/facebook/litho/blob/master/sample/src/main/java/com/facebook/samples/litho/java/changesetdebug/StateResettingActivity.java"},"StateResettingActivity")),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Scenario"),": the surface displays a ",(0,o.mdx)("inlineCode",{parentName:"p"},"StateResettingRootComponent")," which looks like this:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-java"},'@OnCreateLayout\nstatic Component onCreateLayout(\n    ComponentContext c, @Prop List<DataModel> dataModels, @Prop boolean showHeader) {\n\n  final Component listComponent =\n      RecyclerCollectionComponent.create(c)\n          .disablePTR(true)\n          .section(FavouriteGroupSection.create(new SectionContext(c)).dataModels(dataModels))\n          .flexGrow(1)\n          .build();\n\n  return showHeader\n      ? Column.create(c)\n          .child(Text.create(c).text("Header").build())\n          .child(listComponent)\n          .build()\n      : listComponent;\n}\n')),(0,o.mdx)("p",null,"If ",(0,o.mdx)("inlineCode",{parentName:"p"},"StateResettingRootComponent")," can show a header, it creates a Column with a header component and RecyclerCollectionComponent. If the header is not ready yet, it immediately delegates to the RecyclerCollectionComponent. Initially, the header is hidden so ",(0,o.mdx)("inlineCode",{parentName:"p"},"StateResettingRootComponent")," only displays the RecyclerCollectionComponent, but after some time, ",(0,o.mdx)("inlineCode",{parentName:"p"},"setRoot")," is called to indicate to ",(0,o.mdx)("inlineCode",{parentName:"p"},"StateResettingRootComponent")," that the header is ready to display. This will make the header component appear but will cause all items in the ",(0,o.mdx)("inlineCode",{parentName:"p"},"RecyclerCollectionComponent")," to lose any updated state and the entire list will lose its state, such as the current scroll position."),(0,o.mdx)("p",null,"In a Sections list, when an item in the list loses its state that usually indicates it was treated by the framework as a new item after setting new data. To investigate, refer to the Changeset operations in the Sections Flipper plugin."),(0,o.mdx)("p",null,"The following video shows that when the second ",(0,o.mdx)("inlineCode",{parentName:"p"},"setRoot")," is triggered, the resulting Changeset for the section contains an ",(0,o.mdx)("inlineCode",{parentName:"p"},"INSERT_RANGE")," operation. Therefore, all items were re-rendered as new items which have just been inserted into the adapter."),(0,o.mdx)("video",{width:"100%",controls:"controls"},(0,o.mdx)("source",{src:(0,s.default)("videos/debugging-sections-issue1.mov")})),(0,o.mdx)("p",null,"The resulting updated list has 20 items, but the Changeset doesn\u2019t have any DELETE operations. This raises the question of what happened to the items that were initially inserted, which indicates that something out of the ordinary is going on with the items the RecyclerBinder knows about. The RecyclerBinder has no knowledge about the items which were inserted on the first render, and that can only mean one thing: a new RecyclerBinder instance was created after the second ",(0,o.mdx)("inlineCode",{parentName:"p"},"setRoot"),". This can happen if the RecyclerCollectionComponent\u2019s state is recreated. You can confirm by adding logging in its ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/facebook/litho/blob/d23a9406659f27fa9df25d02ae1097a975973bb8/litho-sections-widget/src/main/java/com/facebook/litho/sections/widget/RecyclerCollectionComponentSpec.java#L272"},(0,o.mdx)("inlineCode",{parentName:"a"},"@OnCreateInitialState"))," implementation. This means its key is changing after the ",(0,o.mdx)("inlineCode",{parentName:"p"},"setRoot")," update."),(0,o.mdx)("p",null,"Looking at the implementation of ",(0,o.mdx)("inlineCode",{parentName:"p"},"StateResettingRootComponent")," again, you can see that the ",(0,o.mdx)("inlineCode",{parentName:"p"},"RecyclerCollectionComponent")," can get re-parented depending on the presence of the header, which makes the framework treat it as a different component and reset its key."),(0,o.mdx)("p",null,"The fix for this issue is to maintain the state after the ",(0,o.mdx)("inlineCode",{parentName:"p"},"setRoot")," update, you need to make the hierarchy of components stable.  This involves making sure that the path from the root to any stateful component is preserved after an update. In this case, always wrapping the children in a column and conditionally adding the header as a child would solve the issue."),(0,o.mdx)("h3",{id:"issue-2-the-section-content-scrolls-away-from-top-after-loading"},"Issue 2: the Section content scrolls away from top after loading"),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Code"),": ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/facebook/litho/blob/master/sample/src/main/java/com/facebook/samples/litho/java/changesetdebug/ScrollingToBottomActivity.java"},"ScrollingToBottomActivity")),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Scenario"),": when navigating to this Sections surface, the list is not scrolled to top.  Instead, it scrolls to another item automatically."),(0,o.mdx)("p",null,"Check the Flipper Sections Plugin to see what happens when navigating to this surface."),(0,o.mdx)("video",{width:"100%",controls:"controls"},(0,o.mdx)("source",{src:(0,s.default)("videos/debugging-sections-issue2.mov")})),(0,o.mdx)("p",null,"In the video above, the initial ",(0,o.mdx)("inlineCode",{parentName:"p"},"setRoot")," call passes to the Section a list of items, starting with item 15. This matches what you see on screen. Later is a ",(0,o.mdx)("inlineCode",{parentName:"p"},"setRoot")," call, which inserts at the top of the Section a list of items from 0 to 14. The order in which this data is inserted explains why the list scrolled to item 15."),(0,o.mdx)("p",null,"RecyclerView will try to maintain the current scroll position whenever the adapter is notified of changes. In this scenario, the initial scroll position is at item '15', so when the second insert batch is applied, the RecyclerView will keep this as the first visible item, even if items are inserted above."),(0,o.mdx)("p",null,"This is a commonly occurring scenario that can occur in surfaces that consist of Sections that use different data sources. Imagine a typical feed-like surface that has a header Section followed by the feed stories Section. The two Sections will receive data from different sources, each source being queried independently. This means that the response can return at different times. If the feed stories data is fetched first, these items will be inserted immediately, and the header data will be inserted at the top of the feed items later when the request completes."),(0,o.mdx)("p",null,"If your Section surface is using data queried from multiple sources, and it can be inserted out of order, you can maintain scroll position at the first item in the list by manually scrolling to the top, after the data reaches the adapter, using the ",(0,o.mdx)("a",{parentName:"p",href:"/docs/sections/communicating-with-the-ui#scrolling-requestfocus"},"requestFocus APIs"),":"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-java"},"@OnDataBound\nstatic void onDataBound(SectionContext c) {\n    DelayedLoadingSection.requestFocus(c, 0);\n}\n")),(0,o.mdx)("h3",{id:"issue-3-all-items-are-being-re-rendered-after-a-data-update"},"Issue 3: all items are being re-rendered after a data update"),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Code"),": ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/facebook/litho/blob/master/sample/src/main/java/com/facebook/samples/litho/java/changesetdebug/ItemsRerenderingActivity.java"},"ItemsRerenderingActivity")),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Scenario"),": some items in the Sections list were updated after interacting with them. After some time, the surface appears to blink, and the scroll position is reset. All items are reset, losing any updated state."),(0,o.mdx)("p",null,"This issue has similar symptoms to ",(0,o.mdx)("a",{parentName:"p",href:"#issue-1-the-state-of-an-entire-section-surface-is-getting-reset"},"issue #1"),", but you can use the Flipper Sections Plugin this time to see what\u2019s different and how to find the cause."),(0,o.mdx)("video",{width:"100%",controls:"controls"},(0,o.mdx)("source",{src:(0,s.default)("videos/debugging-sections-issue3.mov")})),(0,o.mdx)("p",null,"The list is reset after the second setRoot call is triggered, as can be seen from its generated changesets."),(0,o.mdx)("p",null,"All the items that were previously in the list were deleted and inserted again, along with the items that are new. This explains the blinking and the state being reset, since all existing items are removed and treated as completely new items."),(0,o.mdx)("p",null,"The difference between this issue and ",(0,o.mdx)("a",{parentName:"p",href:"#issue-1-the-state-of-an-entire-section-surface-is-getting-reset"},"issue #1")," is that the changeset contains a list of delete operations, which means that this is not a case of the RecyclerBinder being reset, but rather something is not working right when comparing the items in the current and new list and deciding if they are the same or not."),(0,o.mdx)("p",null,"Look at the code for the Section rendering this surface, which you can find in the ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/facebook/litho/blob/master/sample/src/main/java/com/facebook/samples/litho/java/changesetdebug/InefficientFavouriteGroupSectionSpec.java"},"InefficientFavouriteGroupSectionSpec"),"."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-java"},"@OnCreateChildren\nstatic Children onCreateChildren(SectionContext c, @Prop List<DataModel> dataModels) {\n  return Children.create()\n      .child(\n          DataDiffSection.<DataModel>create(new SectionContext(c))\n              .data(dataModels)\n              .renderEventHandler(InefficientFavouriteGroupSection.onRender(c))\n              .build())\n      .build();\n}\n")),(0,o.mdx)("p",null,"The Section has a DataDiffSection child which is passed a ",(0,o.mdx)("inlineCode",{parentName:"p"},"renderEventHandler")," prop, so it knows how to render the ",(0,o.mdx)("inlineCode",{parentName:"p"},"DataModel")," items but not how to compare them for efficient updates. By default, the Sections framework will compare items first by pointer equality and then by calling ",(0,o.mdx)("inlineCode",{parentName:"p"},"equals")," if no comparison methods are passed to the ",(0,o.mdx)("inlineCode",{parentName:"p"},"DataDiffSection"),". For complex data types, you will always need implement comparison methods to decide when an item should be re-rendered."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-java"},"@OnCreateChildren\nstatic Children onCreateChildren(SectionContext c, @Prop List<DataModel> dataModels) {\n  return Children.create()\n      .child(\n          DataDiffSection.<DataModel>create(new SectionContext(c))\n              .data(dataModels)\n              .renderEventHandler(InefficientFavouriteGroupSection.onRender(c))\n              .onCheckIsSameItemEventHandler(InefficientFavouriteGroupSection.onCheckIsSameItem(c))\n              .onCheckIsSameContentEventHandler(\n                  InefficientFavouriteGroupSection.onCheckIsSameContent(c))\n              .build())\n      .build();\n}\n\n@OnEvent(RenderEvent.class)\nstatic RenderInfo onRender(SectionContext c, @FromEvent DataModel model) {\n  return ComponentRenderInfo.create()\n      .component(\n          Row.create(c)\n              .child(Text.create(c).text(model.getData()).textSizeDip(30))\n              .child(RowItem.create(c))\n              .build())\n      .build();\n}\n\n@OnEvent(OnCheckIsSameItemEvent.class)\nstatic boolean onCheckIsSameItem(\n    SectionContext c,\n    @FromEvent DataModel previousItem,\n    @FromEvent DataModel nextItem) {\n  return previousItem.getId() == nextItem.getId();\n}\n")),(0,o.mdx)("p",null,"After making the above change to ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/facebook/litho/blob/master/sample/src/main/java/com/facebook/samples/litho/java/changesetdebug/InefficientFavouriteGroupSectionSpec.java"},"InefficientFavouriteGroupSectionSpec"),", only the new item is inserted and all the existing items are reused and their state is persisted, as shown in the following diagram."),(0,o.mdx)("p",null,(0,o.mdx)("img",{src:n(63870).A,width:"1148",height:"765"})),(0,o.mdx)("h3",{id:"issue-4-the-section-is-not-updating-items-after-a-prop-update"},"Issue 4: the Section is not updating items after a prop update"),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Code"),": ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/facebook/litho/blob/master/sample/src/main/java/com/facebook/samples/litho/java/changesetdebug/PropUpdatingActivity.java"},"PropUpdatingActivity")),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Scenario"),": you have a list of items which can be in a selected or unselected state. The Section has a selectedItem prop which is the index of the item which is selected - this value can change based on data coming from an external source. When the value changes, a new prop value is passed to the Section."),(0,o.mdx)("p",null,"Initially, item at position 0 is selected:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-java"},"SelectedItemRootComponent.create(mComponentContext)\n    .dataModels(mDataModels)\n    .selectedItem(0)\n    .build();\n")),(0,o.mdx)("p",null,"Then after a while, new data is available and item at position 1 needs to be selected:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-java"},"SelectedItemRootComponent.create(mComponentContext)\n    .dataModels(mDataModels)\n    .selectedItem(1)\n    .build();\n")),(0,o.mdx)("p",null,"However, it looks like nothing is changing: the item at position 0 is still selected and item at position 1 is still unselected."),(0,o.mdx)("p",null,"Again, you go to the Flipper Sections Plugin to understand what\u2019s happening:"),(0,o.mdx)("video",{width:"100%",controls:"controls"},(0,o.mdx)("source",{src:(0,s.default)("videos/debugging-sections-issue4.mov")})),(0,o.mdx)("p",null,"Here you see that when you pass a new value for ",(0,o.mdx)("inlineCode",{parentName:"p"},"selectedItem")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"setRoot")," is called, the changeset generated for this shows us that all items in the list have been reused and nothing got updated. This is not what is expected: items 0 and 1 should be updated."),(0,o.mdx)("p",null,"As with ",(0,o.mdx)("a",{parentName:"p",href:"#issue-3-all-items-are-being-re-rendered-after-a-data-update"},"issue #3"),", this indicates that something is not working right when comparing the items in the current and new list and deciding if they are the same or not. However, looking at ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/facebook/litho/blob/master/sample/src/main/java/com/facebook/samples/litho/java/changesetdebug/SelectedItemRootComponentSpec.java"},(0,o.mdx)("inlineCode",{parentName:"a"},"SelectedItemRootComponent")),", you see that in this case you are passing comparison methods to the DataDiffSection:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-java"},"@OnCreateLayout\nstatic Component onCreateLayout(ComponentContext c, @Prop List<DataModel> dataModels) {\n\n  return RecyclerCollectionComponent.create(c)\n      .disablePTR(true)\n      .section(\n          DataDiffSection.<DataModel>create(new SectionContext(c))\n              .data(dataModels)\n              .renderEventHandler(SelectedItemRootComponent.onRender(c))\n              .onCheckIsSameContentEventHandler(SelectedItemRootComponent.isSameContent(c))\n              .onCheckIsSameItemEventHandler(SelectedItemRootComponent.isSameItem(c))\n              .build())\n      .flexGrow(1)\n      .build();\n}\n\n@OnEvent(RenderEvent.class)\nstatic RenderInfo onRender(\n    ComponentContext c,\n    @Prop int selectedItem,\n    @FromEvent DataModel model,\n    @FromEvent int index) {\n  return ComponentRenderInfo.create()\n      .component(\n          Row.create(c)\n              .child(Text.create(c).text(model.getData()).textSizeDip(30))\n              .child(FixedRowItem.create(c).favourited(selectedItem == index))\n              .build())\n      .build();\n}\n\n@OnEvent(OnCheckIsSameItemEvent.class)\nstatic boolean isSameItem(\n    ComponentContext context, @FromEvent DataModel previousItem, @FromEvent DataModel nextItem) {\n  return previousItem.getId() == nextItem.getId();\n}\n\n@OnEvent(OnCheckIsSameContentEvent.class)\nstatic boolean isSameContent(\n    ComponentContext context, @FromEvent DataModel previousItem, @FromEvent DataModel nextItem) {\n  return previousItem.getData().equals(nextItem.getData());\n}\n")),(0,o.mdx)("p",null,"The items in the list would only be changed based on the comparison result. However, when a new value is passed for ",(0,o.mdx)("inlineCode",{parentName:"p"},"selectedItem"),", that prop is only used in the render function and not in the comparison methods.  This means the items being compared will be considered the same even if the selection status changes."),(0,o.mdx)("p",null,"The fix in this case is to take the ",(0,o.mdx)("inlineCode",{parentName:"p"},"selectedItem")," value into account when doing the comparison. Since you cannot compare previous and current props, change this to make the selection state part of the DataModel class then use that field for comparison instead. After making that change, the new comparison method would look like this:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-java"},"@OnEvent(OnCheckIsSameContentEvent.class)\nstatic boolean isSameContent(\n    ComponentContext context, @FromEvent DataModel previousItem, @FromEvent DataModel nextItem) {\n  return previousItem.getData().equals(nextItem.getData())\n      && previousItem.isSelected() == nextItem.isSelected();\n}\n")),(0,o.mdx)("p",null,"This will correctly take the selection status into account when deciding whether to re-render items or not, and the new changeset will appear as shown in the following diagram."),(0,o.mdx)("p",null,(0,o.mdx)("img",{src:n(99985).A,width:"1148",height:"672"})))}g.isMDXComponent=!0},6549:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/debugging-sections-hierarchies-034085e8d2ab236c8df7eb899fb30dcd.png"},63870:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/debugging-sections-issue3-d89177f930ae45211cfa8be599805d9a.png"},99985:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/debugging-sections-issue4-be3351e85009e3a278b93b12be18615a.png"}}]);