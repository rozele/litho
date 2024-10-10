"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3028],{15680:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>c,MDXProvider:()=>d,mdx:()=>f,useMDXComponents:()=>p,withMDXComponents:()=>s});var r=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){return function(t){var n=p(t.components);return r.createElement(e,i({},t,{components:n}))}},p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,c=m(e,["components","mdxType","originalType","parentName"]),s=p(n),d=o,u=s["".concat(a,".").concat(d)]||s[d]||h[d]||i;return n?r.createElement(u,l(l({ref:t},c),{},{components:n})):r.createElement(u,l({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=v;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}v.displayName="MDXCreateElement"},40794:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>m,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var r=n(58168),o=n(98587),i=(n(96540),n(15680)),a=["components"],l={id:"primitive-controllers",title:"Controllers Pattern"},m=void 0,c={unversionedId:"mainconcepts/primitivecomponents/primitive-controllers",id:"mainconcepts/primitivecomponents/primitive-controllers",title:"Controllers Pattern",description:"The Controllers Pattern can be used to control the content from outside the component, typically from an ancestor, and for communication between the parent and children Components. A Controller is an object that can control the Primitive Component's content (a View or a Drawable) independently of the Component itself. In the example described below, the Controller is used to read and write the minute and hour values of the TimePicker view. The same instance of the Controller object is shared between the parent Component and both of its children, which allows children for controlling parent's behavior.",source:"@site/../docs/mainconcepts/primitivecomponents/primitive-controllers.mdx",sourceDirName:"mainconcepts/primitivecomponents",slug:"/mainconcepts/primitivecomponents/primitive-controllers",permalink:"/docs/mainconcepts/primitivecomponents/primitive-controllers",draft:!1,editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/mainconcepts/primitivecomponents/primitive-controllers.mdx",tags:[],version:"current",frontMatter:{id:"primitive-controllers",title:"Controllers Pattern"},sidebar:"mainSidebar",previous:{title:"Measuring",permalink:"/docs/mainconcepts/primitivecomponents/primitive-measuring"},next:{title:"Content Pooling",permalink:"/docs/mainconcepts/primitivecomponents/primitive-preallocation"}},s={},p=[{value:"Controllers in Practice",id:"controllers-in-practice",level:2},{value:"Key points for Controllers",id:"key-points-for-controllers",level:2}],d={toc:p},u="wrapper";function h(e){var t=e.components,n=(0,o.A)(e,a);return(0,i.mdx)(u,(0,r.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"The Controllers Pattern can be used to control the content from outside the component, typically from an ancestor, and for communication between the parent and children Components. A Controller is an object that can control the Primitive Component's content (a ",(0,i.mdx)("inlineCode",{parentName:"p"},"View")," or a ",(0,i.mdx)("inlineCode",{parentName:"p"},"Drawable"),") independently of the Component itself. In the example described below, the Controller is used to read and write the minute and hour values of the ",(0,i.mdx)("inlineCode",{parentName:"p"},"TimePicker")," view. The same instance of the Controller object is shared between the parent Component and both of its children, which allows children for controlling parent's behavior."),(0,i.mdx)("h2",{id:"controllers-in-practice"},"Controllers in Practice"),(0,i.mdx)("p",null,"To demonstrate the use of controllers in practice, the following code implements a simple TimePicker Component, which can be used to show some arbitrary time: the code implements simple getters and setters of the TimePicker properties."),(0,i.mdx)("admonition",{type:"note"},(0,i.mdx)("p",{parentName:"admonition"},"It's important to remember that the content is necessarily nullable because the ",(0,i.mdx)("strong",{parentName:"p"},"content can get unmounted when it is out of the viewport"),". Any operation invoked on the controller should be memoized (saved) when the content is unbound so that it can be applied once the content is mounted. In the following code, notice how the minutes and hours are set to the vars in the setter methods and how, in ",(0,i.mdx)("inlineCode",{parentName:"p"},"bind"),", the values are set back on the content.")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/kotlin/primitives/controllers/TimePickerPrimitiveComponent.kt start=start_primitive_controller_code_example end=end_primitive_controller_code_example",file:"sample/src/main/java/com/facebook/samples/litho/kotlin/primitives/controllers/TimePickerPrimitiveComponent.kt",start:"start_primitive_controller_code_example",end:"end_primitive_controller_code_example"},"class TimePickerController(private var currentHour: Int, private var currentMinute: Int) {\n  var minute: Int\n    get() {\n      ThreadUtils.assertMainThread()\n      return content?.minute ?: currentMinute\n    }\n    set(value) {\n      ThreadUtils.assertMainThread()\n      currentMinute = value\n      content?.minute = value\n    }\n\n  var hour: Int\n    get() {\n      ThreadUtils.assertMainThread()\n      return content?.hour ?: currentHour\n    }\n    set(value) {\n      ThreadUtils.assertMainThread()\n      currentHour = value\n      content?.hour = value\n    }\n\n  private val onTimeChangedListener =\n      TimePicker.OnTimeChangedListener { _, hour, minute ->\n        currentHour = hour\n        currentMinute = minute\n      }\n\n  private var content: TimePicker? = null\n")),(0,i.mdx)("p",null,"The Controller must be mounted and unmounted from the content manually from the ",(0,i.mdx)("inlineCode",{parentName:"p"},"bind")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"onUnbind")," methods inside of ",(0,i.mdx)("inlineCode",{parentName:"p"},"MountBehavior")," scope:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/kotlin/primitives/controllers/TimePickerPrimitiveComponent.kt start=start_primitive_controller_bind_code_example end=end_primitive_controller_bind_code_example",file:"sample/src/main/java/com/facebook/samples/litho/kotlin/primitives/controllers/TimePickerPrimitiveComponent.kt",start:"start_primitive_controller_bind_code_example",end:"end_primitive_controller_bind_code_example"},"fun bind(content: TimePicker) {\n  this.content = content\n  hour = currentHour\n  minute = currentMinute\n  this.content?.setOnTimeChangedListener(onTimeChangedListener)\n}\n\nfun unbind() {\n  this.content?.setOnTimeChangedListener(null)\n  this.content = null\n}\n")),(0,i.mdx)("p",null,"In the Primitive Component implementation, it's necessary to  manually ",(0,i.mdx)("inlineCode",{parentName:"p"},"bind")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"unbind")," the controller with the content:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/kotlin/primitives/controllers/TimePickerPrimitiveComponent.kt start=start_primitive_controller_mount_behavior_example end=end_primitive_controller_mount_behavior_example",file:"sample/src/main/java/com/facebook/samples/litho/kotlin/primitives/controllers/TimePickerPrimitiveComponent.kt",start:"start_primitive_controller_mount_behavior_example",end:"end_primitive_controller_mount_behavior_example"},"MountBehavior(ViewAllocator { context -> TimePicker(context) }) {\n  bind(controller) { content ->\n    controller?.bind(content)\n    onUnbind { controller?.unbind() }\n  }\n}\n")),(0,i.mdx)("p",null,"The Primitive Component should pass the ",(0,i.mdx)("inlineCode",{parentName:"p"},"TimePickerPrimitiveComponent")," as a constructor parameter."),(0,i.mdx)("admonition",{type:"note"},(0,i.mdx)("p",{parentName:"admonition"},"It's important to put the controller into the ",(0,i.mdx)("a",{parentName:"p",href:"/docs/mainconcepts/use-cached"},"useCached")," hook so it's not recreated in each re-render. Otherwise the state won't be preserved across re-renders.")),(0,i.mdx)("p",null,"Any other methods and properties on the controller instance can be used easily in the code (see ",(0,i.mdx)("inlineCode",{parentName:"p"},"controller.hour = ..."),"):"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/kotlin/primitives/controllers/ControllersExamplePrimitiveComponent.kt start=start_primitive_controllers_example end=end_primitive_controllers_example",file:"sample/src/main/java/com/facebook/samples/litho/kotlin/primitives/controllers/ControllersExamplePrimitiveComponent.kt",start:"start_primitive_controllers_example",end:"end_primitive_controllers_example"},'override fun ComponentScope.render(): Component {\n  return Column(style = Style.padding(16.dp)) {\n    val initialHour = 14\n    val initialMinute = 30\n    val controller =\n        useCached(initialHour, initialMinute) { TimePickerController(initialHour, initialMinute) }\n    child(TimePickerPrimitiveComponent(controller = controller))\n    child(\n        Button(\n            text = "Set random time ",\n            onClick = {\n              controller.hour = (0..24).random()\n              controller.minute = (0..60).random()\n            }))\n')),(0,i.mdx)("h2",{id:"key-points-for-controllers"},"Key points for Controllers"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"The Primitive Component takes a controller as a constructor parameter."),(0,i.mdx)("li",{parentName:"ul"},"If the controller is stateful, then it's necessary to hold the controller in state/cache otherwise state will be lost across re-renders."),(0,i.mdx)("li",{parentName:"ul"},"Primitive should bind and unbind the controllers manually."),(0,i.mdx)("li",{parentName:"ul"},"Controllers should maintain/update/watch state manually.")))}h.isMDXComponent=!0}}]);