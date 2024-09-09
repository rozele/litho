"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3222],{15680:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>d,MDXProvider:()=>m,mdx:()=>h,useMDXComponents:()=>l,withMDXComponents:()=>c});var r=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=r.createContext({}),c=function(e){return function(t){var n=l(t.components);return r.createElement(e,i({},t,{components:n}))}},l=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=l(e.components);return r.createElement(d.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=l(n),m=o,u=c["".concat(s,".").concat(m)]||c[m]||g[m]||i;return n?r.createElement(u,a(a({ref:t},d),{},{components:n})):r.createElement(u,a({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=f;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a[u]="string"==typeof e?e:o,s[1]=a;for(var d=2;d<i;d++)s[d]=n[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},83281:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>g,frontMatter:()=>a,metadata:()=>d,toc:()=>l});var r=n(58168),o=n(98587),i=(n(96540),n(15680)),s=["components"],a={id:"testing-overview",title:"Introduction"},p=void 0,d={unversionedId:"testing/testing-overview",id:"testing/testing-overview",title:"Introduction",description:"This page contains a brief overview of the variety of tools, provided by Litho, to write different types of tests.",source:"@site/../docs/testing/testing-overview.mdx",sourceDirName:"testing",slug:"/testing/testing-overview",permalink:"/docs/testing/testing-overview",draft:!1,editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/testing/testing-overview.mdx",tags:[],version:"current",frontMatter:{id:"testing-overview",title:"Introduction"}},c={},l=[{value:"Unit Testing",id:"unit-testing",level:2},{value:"End-to-End Testing (E2E Tests)",id:"end-to-end-testing-e2e-tests",level:2},{value:"Android Studio",id:"android-studio",level:2}],m={toc:l},u="wrapper";function g(e){var t=e.components,n=(0,o.A)(e,s);return(0,i.mdx)(u,(0,r.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"This page contains a brief overview of the variety of tools, provided by Litho, to write different types of tests."),(0,i.mdx)("h2",{id:"unit-testing"},"Unit Testing"),(0,i.mdx)("p",null,"Litho provides a suite of helpers to make unit testing easier. To learn about the setup with the Litho JUnit Rules and AssertJ helpers, refer to the ",(0,i.mdx)("a",{parentName:"p",href:"/docs/testing/unit-testing"},"Getting Started")," page of the 'Unit Tests' section of the Litho documentation."),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("a",{parentName:"p",href:"/docs/testing/subcomponent-testing"},"Sub-Component Testing")," - a common way to test components is by testing assertions on the component hierarchy; this means finding components that are expected to be present or absent in the component tree. The sub-component APIs provide utility methods to easily write such tests.")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("strong",{parentName:"p"},"Prop Matching")," - provides APIs to write tests for asserting the prop values set on the components in the hierarchy:"),(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"/docs/testing/prop-matching"},(0,i.mdx)("strong",{parentName:"a"},"Matching @Prop"))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"/docs/testing/testing-treeprops"},(0,i.mdx)("strong",{parentName:"a"},"Matching @TreeProp"))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"/docs/testing/event-handler-testing"},(0,i.mdx)("strong",{parentName:"a"},"EventHandler Testing"))))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("a",{parentName:"p",href:"/docs/testing/sections-testing"},"Testing Section")," - Section hierarchies can be tested using the SectionComponentTestHelper and SubSection APIs."))),(0,i.mdx)("h2",{id:"end-to-end-testing-e2e-tests"},"End-to-End Testing (E2E Tests)"),(0,i.mdx)("p",null,"Litho also provides utilities for writing E2E tests powered by Espresso. For more information, see the ",(0,i.mdx)("a",{parentName:"p",href:"/docs/testing/espresso-testing"},"End-to-End Tests")," page in the 'UI Tests' section of the Litho documentation."),(0,i.mdx)("h2",{id:"android-studio"},"Android Studio"),(0,i.mdx)("p",null,"To run unit tests in Android Studio, refer to the ",(0,i.mdx)("a",{parentName:"p",href:"/docs/testing/tests-in-android-studio"},"Testing in Android Studio")," page."))}g.isMDXComponent=!0}}]);