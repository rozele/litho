"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1061],{15680:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>d,MDXProvider:()=>p,mdx:()=>x,useMDXComponents:()=>u,withMDXComponents:()=>m});var a=n(96540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=a.createContext({}),m=function(e){return function(t){var n=u(t.components);return a.createElement(e,r({},t,{components:n}))}},u=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(d.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=u(n),p=i,c=m["".concat(l,".").concat(p)]||m[p]||h[p]||r;return n?a.createElement(c,o(o({ref:t},d),{},{components:n})):a.createElement(c,o({ref:t},d))}));function x(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:i,l[1]=o;for(var d=2;d<r;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},19365:(e,t,n)=>{n.r(t),n.d(t,{default:()=>l});var a=n(96540),i=n(20053);const r={tabItem:"tabItem_Ymn6"};function l(e){var t=e.children,n=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",className:(0,i.default)(r.tabItem,l),hidden:n},t)}},11470:(e,t,n)=>{n.r(t),n.d(t,{default:()=>N});var a=n(58168),i=n(96540),r=n(20053),l=n(23104),o=n(56347),s=n(57485),d=n(31682),m=n(89466);function u(e){return function(e){var t,n;return null!=(t=null==(n=i.Children.map(e,(function(e){if(!e||(0,i.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function p(e){var t=e.values,n=e.children;return(0,i.useMemo)((function(){var e=null!=t?t:u(n);return function(e){var t=(0,d.X)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function c(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function h(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,r=(0,o.W6)(),l=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:a});return[(0,s.aZ)(l),(0,i.useCallback)((function(e){if(l){var t=new URLSearchParams(r.location.search);t.set(l,e),r.replace(Object.assign({},r.location,{search:t.toString()}))}}),[l,r])]}function f(e){var t,n,a,r,l=e.defaultValue,o=e.queryString,s=void 0!==o&&o,d=e.groupId,u=p(e),f=(0,i.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!c({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var i=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:l,tabValues:u})})),x=f[0],b=f[1],g=h({queryString:s,groupId:d}),v=g[0],y=g[1],N=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),n=(0,m.Dv)(t),a=n[0],r=n[1],[a,(0,i.useCallback)((function(e){t&&r.set(e)}),[t,r])]),w=N[0],C=N[1],E=function(){var e=null!=v?v:w;return c({value:e,tabValues:u})?e:null}();return(0,i.useLayoutEffect)((function(){E&&b(E)}),[E]),{selectedValue:x,selectValue:(0,i.useCallback)((function(e){if(!c({value:e,tabValues:u}))throw new Error("Can't select invalid tab value="+e);b(e),y(e),C(e)}),[y,C,u]),tabValues:u}}var x=n(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){var t=e.className,n=e.block,o=e.selectedValue,s=e.selectValue,d=e.tabValues,m=[],u=(0,l.a_)().blockElementScrollPositionUntilNextRender,p=function(e){var t=e.currentTarget,n=m.indexOf(t),a=d[n].value;a!==o&&(u(t),s(a))},c=function(e){var t,n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":var a,i=m.indexOf(e.currentTarget)+1;n=null!=(a=m[i])?a:m[0];break;case"ArrowLeft":var r,l=m.indexOf(e.currentTarget)-1;n=null!=(r=m[l])?r:m[m.length-1]}null==(t=n)||t.focus()};return i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.default)("tabs",{"tabs--block":n},t)},d.map((function(e){var t=e.value,n=e.label,l=e.attributes;return i.createElement("li",(0,a.A)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:function(e){return m.push(e)},onKeyDown:c,onClick:p},l,{className:(0,r.default)("tabs__item",b.tabItem,null==l?void 0:l.className,{"tabs__item--active":o===t})}),null!=n?n:t)})))}function v(e){var t=e.lazy,n=e.children,a=e.selectedValue,r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var l=r.find((function(e){return e.props.value===a}));return l?(0,i.cloneElement)(l,{className:"margin-top--md"}):null}return i.createElement("div",{className:"margin-top--md"},r.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==a})})))}function y(e){var t=f(e);return i.createElement("div",{className:(0,r.default)("tabs-container",b.tabList)},i.createElement(g,(0,a.A)({},e,t)),i.createElement(v,(0,a.A)({},e,t)))}function N(e){var t=(0,x.default)();return i.createElement(y,(0,a.A)({key:String(t)},e))}},44666:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>f,frontMatter:()=>s,metadata:()=>m,toc:()=>p});var a=n(58168),i=n(98587),r=(n(96540),n(15680)),l=n(86025),o=(n(11470),n(19365),["components"]),s={id:"flexbox-yoga",title:"Flexbox Attributes"},d=void 0,m={unversionedId:"mainconcepts/flexbox-yoga",id:"mainconcepts/flexbox-yoga",title:"Flexbox Attributes",description:"Litho uses the Yoga library, which is an implementation of Flexbox, to measure and layout on-screen components. Users familiar with Flexbox on the web should have no problems. For users familiar with how Android normally performs Layout, Flexbox will remind them of LinearLayout.",source:"@site/../docs/mainconcepts/flexbox-yoga.mdx",sourceDirName:"mainconcepts",slug:"/mainconcepts/flexbox-yoga",permalink:"/docs/mainconcepts/flexbox-yoga",draft:!1,editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/mainconcepts/flexbox-yoga.mdx",tags:[],version:"current",frontMatter:{id:"flexbox-yoga",title:"Flexbox Attributes"},sidebar:"mainSidebar",previous:{title:"Tracing",permalink:"/docs/mainconcepts/primitivecomponents/primitive-tracing"},next:{title:"Yoga Playground",permalink:"/docs/mainconcepts/yoga-playground"}},u={},p=[{value:"Layout direction",id:"layout-direction",level:3},{value:"Distribution along the main axis",id:"distribution-along-the-main-axis",level:3},{value:"Distribution along the cross axis",id:"distribution-along-the-cross-axis",level:3},{value:"Wrapping to multiple lines",id:"wrapping-to-multiple-lines",level:3},{value:"Line distribution",id:"line-distribution",level:4}],c={toc:p},h="wrapper";function f(e){var t=e.components,n=(0,i.A)(e,o);return(0,r.mdx)(h,(0,a.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("p",null,"Litho uses the ",(0,r.mdx)("a",{parentName:"p",href:"https://yogalayout.dev/"},"Yoga")," library, which is an implementation of ",(0,r.mdx)("a",{parentName:"p",href:"https://www.w3.org/TR/css-flexbox-1/"},"Flexbox"),", to measure and layout on-screen components. Users familiar with Flexbox on the web should have no problems. For users familiar with how Android normally performs Layout, Flexbox will remind them of ",(0,r.mdx)("inlineCode",{parentName:"p"},"LinearLayout"),"."),(0,r.mdx)("p",null,"This page shows how various attributes of Flexbox are used for on-screen layout."),(0,r.mdx)("h3",{id:"layout-direction"},"Layout direction"),(0,r.mdx)("p",null,"Flexbox is a ",(0,r.mdx)("strong",{parentName:"p"},"one-dimensional layout model"),", which means all elements are placed along one line."),(0,r.mdx)("p",null,"The following information may help assist in deciding whether to layout elements horizontally or vertically."),(0,r.mdx)("p",null,"The primary axis of layout is called the ",(0,r.mdx)("strong",{parentName:"p"},"Main Axis"),", and the direction perpendicular to it is called the ",(0,r.mdx)("strong",{parentName:"p"},"Cross Axis"),". For example, if children are to be laid out left to right, then the Main Axis would be the horizontal axis, and the Cross Axis would be the vertical axis."),(0,r.mdx)("p",null,"Litho uses special container components to define the direction of the layout, as shown in the following table."),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:"left"},"Component"),(0,r.mdx)("th",{parentName:"tr",align:"left"},"Main Axis"),(0,r.mdx)("th",{parentName:"tr",align:"left"},"Child Elements Layout"),(0,r.mdx)("th",{parentName:"tr",align:"left"},"If Wrapping is Enabled"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"Row")),(0,r.mdx)("td",{parentName:"tr",align:"left"},"horizontal"),(0,r.mdx)("td",{parentName:"tr",align:"left"},"left to right"),(0,r.mdx)("td",{parentName:"tr",align:"left"},"Next line will start under the first item on the left of the container.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"Row (reverse)")),(0,r.mdx)("td",{parentName:"tr",align:"left"},"horizontal"),(0,r.mdx)("td",{parentName:"tr",align:"left"},"right to left"),(0,r.mdx)("td",{parentName:"tr",align:"left"},"Next line will start under the first item on the right of the container.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"Column")),(0,r.mdx)("td",{parentName:"tr",align:"left"},"vertical"),(0,r.mdx)("td",{parentName:"tr",align:"left"},"top to bottom"),(0,r.mdx)("td",{parentName:"tr",align:"left"},"Next line will start to the right of the first item on the top of the container.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"Column (reverse)")),(0,r.mdx)("td",{parentName:"tr",align:"left"},"vertical"),(0,r.mdx)("td",{parentName:"tr",align:"left"},"bottom to top"),(0,r.mdx)("td",{parentName:"tr",align:"left"},"Next line will start to the right of the first item on the bottom of the container.")))),(0,r.mdx)("p",null,"The above container components are illustrated in the following diagram."),(0,r.mdx)("img",{src:(0,l.default)("/images/litho-layout-flex-direction.png"),alt:"flex-direction"}),(0,r.mdx)("admonition",{type:"note"},(0,r.mdx)("p",{parentName:"admonition"},"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"(reverse)")," option is available through the ",(0,r.mdx)("inlineCode",{parentName:"p"},".reverse(boolean)")," method on ",(0,r.mdx)("inlineCode",{parentName:"p"},"Row"),"/",(0,r.mdx)("inlineCode",{parentName:"p"},"Column")," objects.")),(0,r.mdx)("h3",{id:"distribution-along-the-main-axis"},"Distribution along the main axis"),(0,r.mdx)("p",null,"If your container has more space than is necessary along the Main Axis then the way children are positioned across that axis needs to be considered."),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"justifyContent")," method specifies how the child elements are distributed across the Main Axis. It takes a ",(0,r.mdx)("inlineCode",{parentName:"p"},"YogaJustify")," enum input, which has the following possible values:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"FLEX_START")," ",(0,r.mdx)("em",{parentName:"li"},"(default)")," - position children at the start of the container, along the main axis."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"FLEX_END")," - position children at the end of the container, along the main axis."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"CENTER")," - position children in the centre of the container, along the main axis."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"SPACE_BETWEEN")," - distribute extra space evenly between children."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"SPACE_AROUND")," - distribute space evenly around each child. Note that adjacent children will have '2x' space between them (because each child has its own 'padding')."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"SPACE_EVENLY")," - distribute space evenly around all children.")),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"YogaJustify")," values are illustrated below."),(0,r.mdx)("img",{src:(0,l.default)("/images/litho-layout-justify-content.png"),alt:"justify-content"}),(0,r.mdx)("h3",{id:"distribution-along-the-cross-axis"},"Distribution along the cross axis"),(0,r.mdx)("p",null,"If the elements in your line have different heights, then the way they are positioned along the line needs to be considered."),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"alignItems")," method specifies how the container's children are distributed across the Cross Axis. It takes a ",(0,r.mdx)("inlineCode",{parentName:"p"},"YogaAlign")," enum input, which has the following possible values:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"STRETCH")," ",(0,r.mdx)("em",{parentName:"li"},"(default)")," - stretch the size of all elements to completely fill the line."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"FLEX_START")," - align elements with the start of the cross axis."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"FLEX_END")," - align elements with the end of the cross axis."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"CENTER")," - align elements with the centre of the line."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"BASELINE")," - align elements with respect to their baselines.")),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"YogaAlign")," values are illustrated below."),(0,r.mdx)("img",{src:(0,l.default)("/images/litho-layout-align-items.png"),alt:"align-items"}),(0,r.mdx)("h3",{id:"wrapping-to-multiple-lines"},"Wrapping to multiple lines"),(0,r.mdx)("p",null,"In addition to the one-dimensional Flexbox laying out its children in one line, Flexboxes can also wrap their children onto multiple lines, much like text wraps. Wrapping behavior is specified with the ",(0,r.mdx)("inlineCode",{parentName:"p"},"Wrap")," method, which takes a ",(0,r.mdx)("inlineCode",{parentName:"p"},"YogaWrap")," enum value that has the following possible values:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"NO_WRAP")," ",(0,r.mdx)("em",{parentName:"li"},"(default)")," - there is no wrapping. Children are forced into a single line; if they cannot fit, they will overflow."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"WRAP")," - elements that overflow a single line will be moved to the next line. If the main axis is horizontal, then the next line will be ",(0,r.mdx)("strong",{parentName:"li"},"below")," the previous line."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"WRAP_REVERSE")," - similar to ",(0,r.mdx)("inlineCode",{parentName:"li"},"WRAP")," except the order of lines is reversed. If the main axis is horizontal, then the next line will be ",(0,r.mdx)("strong",{parentName:"li"},"above")," the previous line.")),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"YogaWrap")," values are illustrated below."),(0,r.mdx)("img",{src:(0,l.default)("/images/litho-layout-wrap.png"),alt:"wrap"}),(0,r.mdx)("h4",{id:"line-distribution"},"Line distribution"),(0,r.mdx)("p",null,"If the container has extra space in the Cross Axis direction, then the way lines are distributed in that space needs to be considered."),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"alignContent")," method specifies how lines are distributed along the Cross Axis. It takes a ",(0,r.mdx)("inlineCode",{parentName:"p"},"YogaAlign")," enum value, which has the following possible values:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"STRETCH")," ",(0,r.mdx)("em",{parentName:"li"},"(default)")," - lines are stretched evenly to fill the available space in the cross axis."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"FLEX_START")," - lines are placed at the start of the cross axis."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"FLEX_END")," - lines are placed at the end of the cross axis."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"CENTER")," - lines are placed in the centre of the cross axis."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"SPACE_BETWEEN")," - evenly distributes extra space between all lines."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"SPACE_AROUND")," - pads lines above and below with extra space.")),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"YogaAlign")," values, for Lines, are illustrated below."),(0,r.mdx)("img",{src:(0,l.default)("/images/litho-layout-align-content.png"),alt:"align-content"}),(0,r.mdx)("p",null,"For more information on specific Flexbox properties, refer to the ",(0,r.mdx)("a",{parentName:"p",href:"https://yogalayout.dev/docs/about-yoga"},"Yoga documentation")," or explore any web resource on how Flexbox functions."))}f.isMDXComponent=!0}}]);