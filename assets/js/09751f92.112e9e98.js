"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7769],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>c,MDXProvider:()=>u,mdx:()=>m,useMDXComponents:()=>p,withMDXComponents:()=>d});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},r.apply(this,arguments)}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=i.createContext({}),d=function(e){return function(t){var n=p(t.components);return i.createElement(e,r({},t,{components:n}))}},p=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,g=d["".concat(o,".").concat(u)]||d[u]||h[u]||r;return n?i.createElement(g,l(l({ref:t},c),{},{components:n})):i.createElement(g,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},3060:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>c,toc:()=>d,default:()=>u});var i=n(87462),a=n(63366),r=(n(67294),n(3905)),o=["components"],l={id:"debugging-tips",title:"Debugging Tips"},s=void 0,c={unversionedId:"debugging/debugging-tips",id:"debugging/debugging-tips",isDocsHomePage:!1,title:"Debugging Tips",description:"Flipper",source:"@site/../docs/debugging/debugging-tips.md",sourceDirName:"debugging",slug:"/debugging/debugging-tips",permalink:"/docs/debugging/debugging-tips",editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/debugging/debugging-tips.md",tags:[],version:"current",frontMatter:{id:"debugging-tips",title:"Debugging Tips"},sidebar:"mainSidebar",previous:{title:"Code generation",permalink:"/docs/codegen/code-generation"},next:{title:"Debugging Sections",permalink:"/docs/debugging/debugging-sections"}},d=[{value:"Flipper",id:"flipper",children:[],level:2},{value:"Layout Inspector Plugin",id:"layout-inspector-plugin",children:[{value:"Quick Edits",id:"quick-edits",children:[],level:3},{value:"Target Mode",id:"target-mode",children:[],level:3},{value:"Accessibility Mode",id:"accessibility-mode",children:[],level:3},{value:"Talkback",id:"talkback",children:[],level:3}],level:2},{value:"Sections Plugin",id:"sections-plugin",children:[{value:"Events Dashboard",id:"events-dashboard",children:[],level:3},{value:"Stack Trace",id:"stack-trace",children:[],level:3},{value:"Tree Data",id:"tree-data",children:[],level:3},{value:"Changeset Information",id:"changeset-information",children:[],level:3}],level:2},{value:"Enable Debugging Logs",id:"enable-debugging-logs",children:[],level:2}],p={toc:d};function u(e){var t=e.components,l=(0,a.Z)(e,o);return(0,r.mdx)("wrapper",(0,i.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h2",{id:"flipper"},"Flipper"),(0,r.mdx)("p",null,"Flipper is an extensible mobile app degbugger that is a platform for debugging iOS, Android, and React Native apps.  Flipper is the default debugging tool for the Litho team. For more information, see the ",(0,r.mdx)("a",{parentName:"p",href:"https://www.fbflipper.com/"},"Flipper")," website."),(0,r.mdx)("h2",{id:"layout-inspector-plugin"},"Layout Inspector Plugin"),(0,r.mdx)("p",null,"To setup the Layout Inspector Plugin in your project, refer to the ",(0,r.mdx)("a",{parentName:"p",href:"https://fbflipper.com/docs/setup/plugins/inspector/"},"Layout Plugin Setup")," page, which is part of the official Flipper website."),(0,r.mdx)("p",null,"Thanks to Layout Inspector Plugin, you can inspect what views the hierarchy consists of as well as the properties of each view."),(0,r.mdx)("p",null,"The Layout Tab presents components in the hierarchy as if they were native views: on the right hand side you can see all of the properties and state of the given view (see the following image). If you hover over a view or a component in Flipper, the corresponding item will be highlighted in your app. This is perfect for debugging the bounds of your views and making sure you have the correct visual padding."),(0,r.mdx)("p",null,(0,r.mdx)("img",{alt:"Highlight in Flipper",src:n(33538).Z})),(0,r.mdx)("h3",{id:"quick-edits"},"Quick Edits"),(0,r.mdx)("p",null,"The Layout Inspector enbles you to view the hierarchy and inspect each item's properties. In addition, it also enables you to edit things such as layout attributes, background colors, props, and state. With hese features, you can quickly tweak paddings, margins, and colors until you are happy with them, all without re-compiling.  This can save you many hours when implementing a new design."),(0,r.mdx)("p",null,"To edit a property, simply find the view through the layout hierarchy and edit it's properties on the right hand panel, as shown in the following video."),(0,r.mdx)("div",{display:"block"},(0,r.mdx)("video",{src:"https://lookaside.internalfb.com/intern/pixelcloudnew/asset/?id=585510272692142",controls:"1",preload:"auto",width:"100%"})),(0,r.mdx)("h3",{id:"target-mode"},"Target Mode"),(0,r.mdx)("p",null,"Enable Target Mode by clicking on the crosshairs icon. Now, you can touch any view on the device and the Layout Inspector will jump to the correct position within your layout hierarchy, as shown in the following video."),(0,r.mdx)("div",{display:"block"},(0,r.mdx)("video",{src:"https://lookaside.internalfb.com/intern/pixelcloudnew/asset/?id=232484772246926",controls:"1",preload:"auto",width:"100%"})),(0,r.mdx)("h3",{id:"accessibility-mode"},"Accessibility Mode"),(0,r.mdx)("p",null,"Enable Accessibility Mode by clicking on the accessibility icon. This shows the accessibility view hierarchy next to the normal hierarchy (see the image, below)."),(0,r.mdx)("p",null,"In the accessibility view hierarchy, the currently accessibility-focused view is highlighted in green and any accessibility-focusable elements have a green icon next to their name."),(0,r.mdx)("p",null,"When Accessibility Mode is enabled, the sidebar will show special properties that are used by accessibility services to determine their functionality.\nThis includes items such as content-description, clickable, focusable, and long-clickable, among others."),(0,r.mdx)("p",null,(0,r.mdx)("img",{alt:"Accessibility in Flipper",src:n(32345).Z})),(0,r.mdx)("h3",{id:"talkback"},"Talkback"),(0,r.mdx)("p",null,"The Accessibility Mode sidebar also includes a panel with properties derived specifically to show Talkback's interpretation of a view (with logic ported over from Google's Talkback source). While generally accurate, this is not guaranteed to be accurate for all situations: it is always better to turn Talkback on for verification."),(0,r.mdx)("h2",{id:"sections-plugin"},"Sections Plugin"),(0,r.mdx)("p",null,"The Sections plugin provides a view into sections tree generations and lifecycle events that render content on the screen."),(0,r.mdx)("p",null,"With Sections Plugin you can:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Track Sections lifecycle events."),(0,r.mdx)("li",{parentName:"ul"},"Show a stack trace for each state update that occurs in the section hierarchy."),(0,r.mdx)("li",{parentName:"ul"},"Visualize the Sections tree hierarchies."),(0,r.mdx)("li",{parentName:"ul"},"Inspect Render Sections hierarchies."),(0,r.mdx)("li",{parentName:"ul"},"Inspect Sections generated and applied changesets.")),(0,r.mdx)("p",null,"Once you open the plugin, it will start listening for all sections events that are triggered by the Sections. This might slow down the interaction with the app at first but it should be smooth out after the first event has been tracked."),(0,r.mdx)("p",null,"The plugin rationale is to create a collection of events that come with an attached stack trace. Every event can hold different information that is rendered on screen through either the Tree Data port view or the left Sidebar."),(0,r.mdx)("p",null,(0,r.mdx)("img",{alt:"Sections in Flipper",src:n(3517).Z})),(0,r.mdx)("h3",{id:"events-dashboard"},"Events Dashboard"),(0,r.mdx)("p",null,"The Events Dashboard (see the following image) collects all the relevant events that are sent by the following:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Section component tracker."),(0,r.mdx)("li",{parentName:"ul"},"Object responsible to manage the lifecycle events of a Sections hierarchy."),(0,r.mdx)("li",{parentName:"ul"},"Sections Tree Analytics Listener, which is responsible for delivering information about the build steps for each tree generation.")),(0,r.mdx)("p",null,"Depending on the event that is selected, different information becomes available to the user."),(0,r.mdx)("p",null,(0,r.mdx)("img",{alt:"Events dashboard",src:n(50773).Z})),(0,r.mdx)("h3",{id:"stack-trace"},"Stack Trace"),(0,r.mdx)("p",null,"For each event that gets selected, a stack trace is attached enabling you trace back who triggered the selected event."),(0,r.mdx)("h3",{id:"tree-data"},"Tree Data"),(0,r.mdx)("p",null,"Tree Data visualises the available tree generation that comes with the selected event (see the following image)."),(0,r.mdx)("p",null,"You can analyse each item state between events and find information if the item was:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"removed"),(0,r.mdx)("li",{parentName:"ul"},"inserted"),(0,r.mdx)("li",{parentName:"ul"},"updated"),(0,r.mdx)("li",{parentName:"ul"},"reused")),(0,r.mdx)("p",null,(0,r.mdx)("img",{alt:"TreeData for Sections",src:n(34366).Z})),(0,r.mdx)("h3",{id:"changeset-information"},"Changeset Information"),(0,r.mdx)("p",null,"After a completed tree generation, every Section Component part of the Sections tree is queried for returning its changeset."),(0,r.mdx)("p",null,"Changesets are reported on the right sidebar (as shwon in the following image) with information about the type of change; they can be particularly useful for analysing what is happening with your Section:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Insert"),(0,r.mdx)("li",{parentName:"ul"},"Insert Range"),(0,r.mdx)("li",{parentName:"ul"},"Update"),(0,r.mdx)("li",{parentName:"ul"},"Update Range"),(0,r.mdx)("li",{parentName:"ul"},"Delete"),(0,r.mdx)("li",{parentName:"ul"},"Delete Range"),(0,r.mdx)("li",{parentName:"ul"},"Move")),(0,r.mdx)("p",null,(0,r.mdx)("img",{alt:"Sections Changeset",src:n(4928).Z})),(0,r.mdx)("h2",{id:"enable-debugging-logs"},"Enable Debugging Logs"),(0,r.mdx)("p",null,"Currently there are three places where you can change the boolean value to see more useful logs in logcat:"),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("a",{parentName:"p",href:"pathname:///javadoc/com/facebook/litho/widget/SectionsDebug.html"},"SectionsDebug")," -\nturning on the ",(0,r.mdx)("inlineCode",{parentName:"p"},"ENABLED"),' flag will enable the logs with the changesets that were calculated and expose which items were inserted, removed, updated or moved in your list.\nThis can help answer questions such as "',(0,r.mdx)("em",{parentName:"p"},"Why was my item re-rendered when nothing has changed?"),'".')),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("a",{parentName:"p",href:"pathname:///javadoc/com/facebook/litho/ComponentTree.html"},"ComponentTree")," -\nturning on the ",(0,r.mdx)("inlineCode",{parentName:"p"},"DEBUG_LOGS")," flag will enable the logs from the ",(0,r.mdx)("inlineCode",{parentName:"p"},"ComponentTree"),' class responsible for calculating, resolving, measuring and flattening the layout.  This can help answer questions such as  "',(0,r.mdx)("em",{parentName:"p"},"Why is the UI not updating?"),'" (Possibly, a layout calculation issue), "',(0,r.mdx)("em",{parentName:"p"},"Why isn't my component visible, but is showing up in Flipper?"),'" (Possibly, a Mounting problem where ',(0,r.mdx)("inlineCode",{parentName:"p"},"mount")," wasn\u2019t called for the layout result).")),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("a",{parentName:"p",href:"pathname:///javadoc/com/facebook/litho/AnimationsDebug.html"},"AnimationsDebug")," -\nturning on the ",(0,r.mdx)("inlineCode",{parentName:"p"},"ENABLED")," flag will enable logs related to the Animations and Transitions."))))}u.isMDXComponent=!0},32345:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/debugging-flipper-accessibility-0bed7aeb1369b7078ee39e3f46daf03d.png"},33538:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/debugging-flipper-highlight-bf5ef834d269789cdc7ad996155c491d.png"},4928:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/debugging-flipper-sections-changeset-ad72da7bb3cb777dee53650dc392f6a1.png"},50773:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/debugging-flipper-sections-dashboard-d09d3e9659beaec77c1df9390937a369.png"},34366:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/debugging-flipper-sections-tree-8ba6b0d670297de5bd2d6e59f222105f.png"},3517:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/debugging-flipper-sections-d5f49911949d9d2a9ff9a13c3993c09c.png"}}]);