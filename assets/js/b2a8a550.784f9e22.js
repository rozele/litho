"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7505],{15680:(e,t,i)=>{i.r(t),i.d(t,{MDXContext:()=>d,MDXProvider:()=>p,mdx:()=>v,useMDXComponents:()=>c,withMDXComponents:()=>l});var n=i(96540);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},r.apply(this,arguments)}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function m(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var d=n.createContext({}),l=function(e){return function(t){var i=c(t.components);return n.createElement(e,r({},t,{components:i}))}},c=function(e){var t=n.useContext(d),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},p=function(e){var t=c(e.components);return n.createElement(d.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,d=m(e,["components","mdxType","originalType","parentName"]),l=c(i),p=a,u=l["".concat(o,".").concat(p)]||l[p]||h[p]||r;return i?n.createElement(u,s(s({ref:t},d),{},{components:i})):n.createElement(u,s({ref:t},d))}));function v(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,o=new Array(r);o[0]=f;var s={};for(var m in t)hasOwnProperty.call(t,m)&&(s[m]=t[m]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var d=2;d<r;d++)o[d]=i[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}f.displayName="MDXCreateElement"},74840:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>m,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var n=i(58168),a=i(98587),r=(i(96540),i(15680)),o=["components"],s={id:"primitive-measuring",title:"Measuring"},m=void 0,d={unversionedId:"mainconcepts/primitivecomponents/primitive-measuring",id:"mainconcepts/primitivecomponents/primitive-measuring",title:"Measuring",description:"Primitive should provide an implementation of LayoutBehavior interface to define how it should measure itself, based on the provided SizeConstraints.",source:"@site/../docs/mainconcepts/primitivecomponents/primitive-measuring.mdx",sourceDirName:"mainconcepts/primitivecomponents",slug:"/mainconcepts/primitivecomponents/primitive-measuring",permalink:"/docs/mainconcepts/primitivecomponents/primitive-measuring",draft:!1,editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/mainconcepts/primitivecomponents/primitive-measuring.mdx",tags:[],version:"current",frontMatter:{id:"primitive-measuring",title:"Measuring"},sidebar:"mainSidebar",previous:{title:"Lifecycle of a Primitive Component",permalink:"/docs/mainconcepts/primitivecomponents/primitive"},next:{title:"Controllers Pattern",permalink:"/docs/mainconcepts/primitivecomponents/primitive-controllers"}},l={},c=[{value:"Measuring in practice",id:"measuring-in-practice",level:2},{value:"Mathematical calculations using <code>SizeConstraints</code>",id:"mathematical-calculations-using-sizeconstraints",level:3},{value:"Creating a View, measuring it, and reading the measured sizes",id:"creating-a-view-measuring-it-and-reading-the-measured-sizes",level:3}],p={toc:c},u="wrapper";function h(e){var t=e.components,i=(0,a.A)(e,o);return(0,r.mdx)(u,(0,n.A)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("p",null,"Primitive should provide an implementation of ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/facebook/litho/blob/75655943f348c0347d534e6931fb53b2f7f16195/litho-rendercore-primitives/src/main/java/com/facebook/rendercore/primitives/LayoutBehavior.kt#L30"},"LayoutBehavior")," interface to define how it should measure itself, based on the provided SizeConstraints."),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"layout()")," function returns a ",(0,r.mdx)("inlineCode",{parentName:"p"},"PrimitiveLayoutResult")," object that contains the width and height of the content, and optionally any layout data."),(0,r.mdx)("p",null,"There are a few of built-in ",(0,r.mdx)("inlineCode",{parentName:"p"},"LayoutBehavior")," implementations provided for most common use cases:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://github.com/facebook/litho/blob/de470f73f816baedbcb85b23c70e93edad075bc8/litho-rendercore-primitives/src/main/java/com/facebook/rendercore/primitives/LayoutBehavior.kt#L50"},"ExactSizeConstraintsLayoutBehavior")," - width and height are set based on the provided SizeConstraints."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://github.com/facebook/litho/blob/de470f73f816baedbcb85b23c70e93edad075bc8/litho-rendercore-primitives/src/main/java/com/facebook/rendercore/primitives/LayoutBehavior.kt#L66"},"FillLayoutBehavior")," - width and height are set based on the SizeConstraints if the constraints are bounded, otherwise uses default values which can be provided via constructor."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://github.com/facebook/litho/blob/de470f73f816baedbcb85b23c70e93edad075bc8/litho-rendercore-primitives/src/main/java/com/facebook/rendercore/primitives/LayoutBehavior.kt#L85"},"FixedSizeLayoutBehavior")," - width and height are set to values provided via constructor."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://github.com/facebook/litho/blob/de470f73f816baedbcb85b23c70e93edad075bc8/litho-rendercore-primitives/src/main/java/com/facebook/rendercore/primitives/LayoutBehavior.kt#L104"},"AspectRatioLayoutBehavior")," - width and height are set according to an aspect ratio and SizeConstraints. It will respect the intrinsic size of the component being measured."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://github.com/facebook/litho/blob/de470f73f816baedbcb85b23c70e93edad075bc8/litho-rendercore-primitives/src/main/java/com/facebook/rendercore/primitives/LayoutBehavior.kt#L124"},"EqualDimensionsLayoutBehavior")," - width and height are set respecting SizeConstraints and trying to keep width and height equal. This will only not guarantee equal width and height if the constraints don't allow for it.")),(0,r.mdx)("p",null,"There are utility methods defined as extension functions on the ",(0,r.mdx)("inlineCode",{parentName:"p"},"Size")," object that can be used to compute appropriate ",(0,r.mdx)("inlineCode",{parentName:"p"},"Size"),". It's also possible to access ",(0,r.mdx)("inlineCode",{parentName:"p"},"androidContext")," in the ",(0,r.mdx)("inlineCode",{parentName:"p"},"layout()")," method via ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/facebook/litho/blob/75655943f348c0347d534e6931fb53b2f7f16195/litho-rendercore-primitives/src/main/java/com/facebook/rendercore/primitives/LayoutScope.kt#L27"},"LayoutScope"),"."),(0,r.mdx)("admonition",{type:"note"},(0,r.mdx)("p",{parentName:"admonition"},(0,r.mdx)("inlineCode",{parentName:"p"},"layout()")," method can be called on any thread, and has the following characteristics:"),(0,r.mdx)("ul",{parentName:"admonition"},(0,r.mdx)("li",{parentName:"ul"},"it must not cause any side-effects"),(0,r.mdx)("li",{parentName:"ul"},"it is guaranteed to be called at least once, and can be called multiple times"))),(0,r.mdx)("h2",{id:"measuring-in-practice"},"Measuring in practice"),(0,r.mdx)("p",null,"In principle, there are two different ways that measuring can be implemented:"),(0,r.mdx)("h3",{id:"mathematical-calculations-using-sizeconstraints"},"Mathematical calculations using ",(0,r.mdx)("inlineCode",{parentName:"h3"},"SizeConstraints")),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"SizeConstraints")," is an object that provides the minimum and maximum width and height available for a Component. ",(0,r.mdx)("inlineCode",{parentName:"p"},"SizeConstraints")," are provided by parent Component to a child component. A child Component should define its size within those constraints."),(0,r.mdx)("p",null,"In practice, the ",(0,r.mdx)("inlineCode",{parentName:"p"},"SizeConstraints")," object is passed as a parameter of the ",(0,r.mdx)("inlineCode",{parentName:"p"},"layout()")," method and can be used to carry out mathematical calculations and compute the final measurements based on ",(0,r.mdx)("inlineCode",{parentName:"p"},"minWidth"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"maxWidth"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"minHeight"),", and ",(0,r.mdx)("inlineCode",{parentName:"p"},"maxHeight")," values, as shown in the following example code:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/kotlin/primitives/bindto/ImageViewComponent.kt start=start_primitive_measure_example end=end_primitive_measure_example",file:"sample/src/main/java/com/facebook/samples/litho/kotlin/primitives/bindto/ImageViewComponent.kt",start:"start_primitive_measure_example",end:"end_primitive_measure_example"},"override fun LayoutScope.layout(sizeConstraints: SizeConstraints): PrimitiveLayoutResult {\n  return PrimitiveLayoutResult(\n      size =\n          if (!sizeConstraints.hasBoundedWidth && !sizeConstraints.hasBoundedHeight) {\n            Size(defaultSize, defaultSize)\n          } else {\n            Size.withEqualDimensions(sizeConstraints)\n          })\n}\n")),(0,r.mdx)("admonition",{type:"note"},(0,r.mdx)("p",{parentName:"admonition"},"The actual computation logic that uses ",(0,r.mdx)("inlineCode",{parentName:"p"},"SizeConstraints")," values is in ",(0,r.mdx)("inlineCode",{parentName:"p"},"Size.withEqualDimensions")," helper function.")),(0,r.mdx)("h3",{id:"creating-a-view-measuring-it-and-reading-the-measured-sizes"},"Creating a View, measuring it, and reading the measured sizes"),(0,r.mdx)("p",null,"Alternatively, a View can be created that represents the mount content then call the ",(0,r.mdx)("inlineCode",{parentName:"p"},"View.measure()")," method on it directly. After ",(0,r.mdx)("inlineCode",{parentName:"p"},"View.measure()")," completes, the measured width and height can be retrieved by calling ",(0,r.mdx)("inlineCode",{parentName:"p"},"View.getMeasuredWidth()")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"View.getMeasuredHeight()"),":"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/kotlin/primitives/SampleTextInput.kt start=start_layout_with_view_measurement end=end_layout_with_view_measurement",file:"sample/src/main/java/com/facebook/samples/litho/kotlin/primitives/SampleTextInput.kt",start:"start_layout_with_view_measurement",end:"end_layout_with_view_measurement"},"override fun LayoutScope.layout(sizeConstraints: SizeConstraints): PrimitiveLayoutResult {\n  // The height should be the measured height of EditText with relevant params\n  val editTextForMeasure: EditText =\n      AppCompatEditText(androidContext).apply {\n        setHint(hintText)\n        setText(initialText)\n        background =\n            getBackgroundOrDefault(\n                androidContext,\n                if (inputBackground === ColorDrawable(Color.TRANSPARENT)) background\n                else inputBackground)\n      }\n\n  editTextForMeasure.measure(sizeConstraints.toWidthSpec(), sizeConstraints.toHeightSpec())\n  val measuredWidth = max(sizeConstraints.minWidth, editTextForMeasure.measuredWidth)\n  val measuredHeight = max(sizeConstraints.minHeight, editTextForMeasure.measuredHeight)\n\n  // For width we always take all available space, or collapse to 0 if unspecified.\n  val width =\n      if (!sizeConstraints.hasBoundedWidth) 0 else min(sizeConstraints.maxWidth, measuredWidth)\n\n  return PrimitiveLayoutResult(width, measuredHeight)\n}\n")),(0,r.mdx)("admonition",{type:"note"},(0,r.mdx)("p",{parentName:"admonition"},"When the width and height can be determined using mathematical calculations, it is preferred over creating a View because the calculations are much more lightweight.")))}h.isMDXComponent=!0}}]);