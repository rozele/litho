"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[73],{15680:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>p,MDXProvider:()=>m,mdx:()=>g,useMDXComponents:()=>d,withMDXComponents:()=>c});var o=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r.apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.createContext({}),c=function(e){return function(t){var n=d(t.components);return o.createElement(e,r({},t,{components:n}))}},d=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=d(e.components);return o.createElement(p.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},y=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(n),m=a,u=c["".concat(i,".").concat(m)]||c[m]||h[m]||r;return n?o.createElement(u,s(s({ref:t},p),{},{components:n})):o.createElement(u,s({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=y;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}y.displayName="MDXCreateElement"},74646:(e,t,n)=>{n.d(t,{A:()=>u});var o=n(58168),a=n(96540),r=n(68382),i=n(45603),s=n(76062),l="0.50.0",p="0.51.0-SNAPSHOT",c="0.10.5",d="0.142.0",m=n(6342);const u=function(e){var t=e.language,n=e.code.replace(/{{site.lithoVersion}}/g,l).replace(/{{site.soloaderVersion}}/g,c).replace(/{{site.lithoSnapshotVersion}}/g,p).replace(/{{site.flipperVersion}}/g,d).trim(),u=(0,m.p)().isDarkTheme?s.A:i.A;return a.createElement(r.Ay,(0,o.A)({},r.Gs,{code:n,language:t,theme:u}),(function(e){var t=e.className,n=e.style,o=e.tokens,r=e.getLineProps,i=e.getTokenProps;return a.createElement("pre",{className:t,style:n},o.map((function(e,t){return a.createElement("div",r({line:e,key:t}),e.map((function(e,t){return a.createElement("span",i({token:e,key:t}))})))})))}))}},76692:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>y,frontMatter:()=>l,metadata:()=>c,toc:()=>m});var o=n(58168),a=n(98587),r=(n(96540),n(15680)),i=n(74646),s=["components"],l={id:"unit-testing",title:"Getting Started"},p=void 0,c={unversionedId:"testing/unit-testing",id:"testing/unit-testing",title:"Getting Started",description:"To use any of the testing utilities, include the litho-testing package in your build.",source:"@site/../docs/testing/unit-testing.mdx",sourceDirName:"testing",slug:"/testing/unit-testing",permalink:"/docs/testing/unit-testing",draft:!1,editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/testing/unit-testing.mdx",tags:[],version:"current",frontMatter:{id:"unit-testing",title:"Getting Started"}},d={},m=[{value:"Example",id:"example",level:2},{value:"Setup",id:"setup",level:3},{value:"Testing Component Rendering",id:"testing-component-rendering",level:3},{value:"Additional Assertions",id:"additional-assertions",level:2}],u={toc:m},h="wrapper";function y(e){var t=e.components,n=(0,a.A)(e,s);return(0,r.mdx)(h,(0,o.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("admonition",{type:"note"},(0,r.mdx)("p",{parentName:"admonition"},"To use any of the testing utilities, include the ",(0,r.mdx)("inlineCode",{parentName:"p"},"litho-testing")," package in your build.")),(0,r.mdx)("p",null,"Add the following lines to the ",(0,r.mdx)("inlineCode",{parentName:"p"},"dependencies")," block in the ",(0,r.mdx)("inlineCode",{parentName:"p"},"build.gradle")," file:"),(0,r.mdx)(i.A,{language:"groovy",code:"\ntestImplementation 'com.facebook.litho:litho-testing:{{site.lithoVersion}}'\n",mdxType:"VersionedCodeBlock"}),(0,r.mdx)("p",null,"Litho's testing APIs are exposed through fluid AssertJ methods and are available as:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"pathname:///javadoc/com/facebook/litho/testing/assertj/ComponentAssert.html"},"ComponentAssert")," for assertions that are run against either Component builders or Components."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"pathname:///javadoc/com/facebook/litho/testing/assertj/LithoViewAssert.html"},"LithoViewAssert")," for assertions against mounted UI hierarchies.")),(0,r.mdx)("p",null,"For convenience, ",(0,r.mdx)("a",{parentName:"p",href:"pathname:///javadoc/com/facebook/litho/testing/assertj/LithoAssertions.html"},"LithoAssertions.assertThat")," can be statically imported (it hosts all the APIs of ",(0,r.mdx)("inlineCode",{parentName:"p"},"ComponentAssert"),",",(0,r.mdx)("inlineCode",{parentName:"p"},"LithoViewAssert"),", and ",(0,r.mdx)("inlineCode",{parentName:"p"},"ListAssert<Component>"),"):"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},"import static com.facebook.litho.testing.assertj.LegacyLithoAssertions.assertThat;\n")),(0,r.mdx)("h2",{id:"example"},"Example"),(0,r.mdx)("p",null,"To demonstrate how the APIs are used, consider the following component that displays a 'like' icon and a short description:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},"/**\n * Displays who liked the post.\n *\n * 1 - 3 likers => Comma separated names (example: Jane, Mike, Doug)\n * > 3 likers => Comma separated number denoting the like count\n */\n@LayoutSpec\nclass LikersComponentSpec {\n\n  @OnCreateLayout\n  protected static Component onCreateLayout(\n      ComponentContext c,\n      @Prop List<User> likers) {\n\n    return Row.create(c)\n        .alignItems(FLEX_START)\n        .child(\n          Image.create(c)\n            .drawableRes(R.drawable.like))\n        .child(\n          Text.create(c)\n            .text(formatLikers(likers))\n            .textSizeSp(12)\n            .ellipsize(TruncateAt.END))\n        .build();\n  }\n\n  private static String formatLikers(List<User> likers) {\n    ...\n  }\n}\n")),(0,r.mdx)("h3",{id:"setup"},"Setup"),(0,r.mdx)("p",null,"To verify the rendering of the text and the icon."),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Create a new test class; ",(0,r.mdx)("inlineCode",{parentName:"li"},"LikersComponentTest"),"."),(0,r.mdx)("li",{parentName:"ul"},"Add ",(0,r.mdx)("inlineCode",{parentName:"li"},"@RunWith(RobolectricTestRunner.class)")," to the top of the test class."),(0,r.mdx)("li",{parentName:"ul"},"Add a ",(0,r.mdx)("inlineCode",{parentName:"li"},"LithoViewRule")," JUnit ",(0,r.mdx)("a",{parentName:"li",href:"https://github.com/junit-team/junit4/wiki/Rules"},(0,r.mdx)("inlineCode",{parentName:"a"},"@Rule"))," that sets up overrides for ",(0,r.mdx)("a",{parentName:"li",href:"https://developer.android.com/reference/android/R.styleable.html"},"Styleables"),"\nand exposes some useful APIs.")),(0,r.mdx)("p",null,"The test class should look like the following:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},"@RunWith(RobolectricTestRunner.class)\npublic class LikersComponentTest {\n\n  public final @Rule LithoViewRule mLithoViewRule = new LithoViewRule();\n\n}\n")),(0,r.mdx)("h3",{id:"testing-component-rendering"},"Testing Component Rendering"),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"LegacyLithoAssertions")," exposes AssertJ-style APIs to assert what gets rendered by a component. These APIs will generally layout, mount, and render the component before testing the assertions:#"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},'@RunWith(RobolectricTestRunner.class)\npublic class LikersComponentTest {\n\n  public final @Rule LithoViewRule mLithoViewRule = new LithoViewRule();\n  @Test\n  public void whenTwoUsersLike_shouldShowBothUserNames() {\n    final ComponentContext c = mLithoViewRule.getContext();\n    final ImmutableList<User> likers = ImmutableList.of(\n      new User("Jane"), new User("Mike")\n    );\n    final LikersComponent component = LikersComponent.create(c)\n        .likers(likers)\n        .build();\n\n    LegacyLithoAssertions.assertThat(c , component).hasVisibleText("Jane, Mike");\n  }\n\n  @Test\n  public void whenUsersLike_shouldShowLikeIcon() {\n    final ComponentContext c = mLithoViewRule.getContext();\n    final ImmutableList<User> likers = ImmutableList.of(\n      new User("Jane"), new User("Mike")\n    );\n    final LikersComponent component = LikersComponent.create(c)\n        .likers(likers)\n        .build();\n\n    final Drawable likeIcon = c.getResources().getDrawable(R.drawable.like);\n    LegacyLithoAssertions.assertThat(c , component).hasVisibleDrawable(likeIcon);\n  }\n}\n')),(0,r.mdx)("h2",{id:"additional-assertions"},"Additional Assertions"),(0,r.mdx)("p",null,"There are several additional assertions that can be tested using LegacyLithoAssertions. To see the entire scope of APIs, refer to the JavaDoc ",(0,r.mdx)("a",{parentName:"p",href:"pathname:///javadoc/com/facebook/litho/testing/assertj/LithoAssertions.html"},"LithoAssertions"),"."),(0,r.mdx)("p",null,"Those APIs test assertions on the view hierarchy that's created by the mounted Component. So, asserting the presence of a Drawable in a Component will traverse the entire view hierarchy rendered by the Component."),(0,r.mdx)("p",null,"Following are some of the assertions provided by LegacyLithoAssertions:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"LegacyLithoAssertions#hasVisibleTextMatching()")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"LegacyLithoAssertions#doesNotHaveVisibleText()")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"LegacyLithoAssertions#willRender()")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"LegacyLithoAssertions#doesNotHaveVisibleDrawable()")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"LegacyLithoAssertions#hasContentDescription()")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"LegacyLithoAssertions#willNotRender()"))),(0,r.mdx)("admonition",{type:"info"},(0,r.mdx)("p",{parentName:"admonition"},"When running Litho unit tests, be aware that the native library for Yoga must be loaded, which can pose some challenges depending on your build system of choice. With Gradle and\nRobolectric, for instance, you may run into issues as Robolectric spins up new ",(0,r.mdx)("a",{parentName:"p",href:"https://docs.oracle.com/javase/7/docs/api/java/lang/ClassLoader.html"},"ClassLoaders"),"\nfor every test suite with a different configuration. The same applies to PowerMock, which prepares the ClassLoaders on a per-suite basis and leaves them in a non-reusable state."),(0,r.mdx)("p",{parentName:"admonition"},"The JVM has two important and relevant limitations:"),(0,r.mdx)("ol",{parentName:"admonition"},(0,r.mdx)("li",{parentName:"ol"},"A shared library can only ever be loaded once per process."),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("inlineCode",{parentName:"li"},"ClassLoader"),"s do not share information about the libraries loaded.")),(0,r.mdx)("p",{parentName:"admonition"},"Due to these limitations, using multiple ClassLoaders for test runs is highly problematic as every instance will attempt to load Yoga.  All, except the first, calls will fail with the ",(0,r.mdx)("inlineCode",{parentName:"p"},"libyoga.so already loaded in another classloader")," exception."),(0,r.mdx)("p",{parentName:"admonition"},"The only way to avoid the limitations is by preventing the use of multiple ClassLoaders or forking the process whenever a new ClassLoader is necessary."),(0,r.mdx)("p",{parentName:"admonition"},"Gradle allows you to limit the number of test classes a process can execute before it is discarded. If you set the number to one, you avoid the ClassLoader reuse:"),(0,r.mdx)("pre",{parentName:"admonition"},(0,r.mdx)("code",{parentName:"pre",className:"language-groovy"},"android {\n    [...]\n\n    testOptions {\n        unitTests.all {\n            forkEvery = 1\n            maxParallelForks = Math.ceil(Runtime.runtime.availableProcessors() * 1.5)\n        }\n    }\n}\n")),(0,r.mdx)("p",{parentName:"admonition"},"With Buck, this behaviour can be achieved by assigning test targets separate names, which results in a parallel process being spun up. Alternatively, you can\nset the ",(0,r.mdx)("inlineCode",{parentName:"p"},"fork_mode")," to ",(0,r.mdx)("inlineCode",{parentName:"p"},"per_test"),", as described in the ",(0,r.mdx)("a",{parentName:"p",href:"https://buckbuild.com/rule/java_test.html#fork_mode"},"java_test")," page of the Buck website."),(0,r.mdx)("p",{parentName:"admonition"},"Ultimately, depending on your build system and the existing constraints of your project, you may need to adjust the way in which your test runner utilises\nClassLoaders. This is not a problem unique to Litho, it's an unfortunate consequence of mixing native and Java code in Android projects.")))}y.isMDXComponent=!0},68382:(e,t,n)=>{n.d(t,{Ay:()=>h,Gs:()=>i});var o=n(61258);const a={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var r=n(96540),i={Prism:o.A,theme:a};function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},l.apply(this,arguments)}var p=/\r\n|\r|\n/,c=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},d=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)};function m(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}var u=function(e){function t(){for(var t=this,n=[],o=arguments.length;o--;)n[o]=arguments[o];e.apply(this,n),s(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?function(e,t){var n=e.plain,o=Object.create(null),a=e.styles.reduce((function(e,n){var o=n.languages,a=n.style;return o&&!o.includes(t)||n.types.forEach((function(t){var n=l({},e[t],a);e[t]=n})),e}),o);return a.root=n,a.plain=l({},n,{backgroundColor:null}),a}(e.theme,e.language):void 0;return t.themeDict=n})),s(this,"getLineProps",(function(e){var n=e.key,o=e.className,a=e.style,r=l({},m(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),i=t.getThemeDict(t.props);return void 0!==i&&(r.style=i.plain),void 0!==a&&(r.style=void 0!==r.style?l({},r.style,a):a),void 0!==n&&(r.key=n),o&&(r.className+=" "+o),r})),s(this,"getStyleForToken",(function(e){var n=e.types,o=e.empty,a=n.length,r=t.getThemeDict(t.props);if(void 0!==r){if(1===a&&"plain"===n[0])return o?{display:"inline-block"}:void 0;if(1===a&&!o)return r[n[0]];var i=o?{display:"inline-block"}:{},s=n.map((function(e){return r[e]}));return Object.assign.apply(Object,[i].concat(s))}})),s(this,"getTokenProps",(function(e){var n=e.key,o=e.className,a=e.style,r=e.token,i=l({},m(e,["key","className","style","token"]),{className:"token "+r.types.join(" "),children:r.content,style:t.getStyleForToken(r),key:void 0});return void 0!==a&&(i.style=void 0!==i.style?l({},i.style,a):a),void 0!==n&&(i.key=n),o&&(i.className+=" "+o),i})),s(this,"tokenize",(function(e,t,n,o){var a={code:t,grammar:n,language:o,tokens:[]};e.hooks.run("before-tokenize",a);var r=a.tokens=e.tokenize(a.code,a.grammar,a.language);return e.hooks.run("after-tokenize",a),r}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,o=e.code,a=e.children,r=this.getThemeDict(this.props),i=t.languages[n];return a({tokens:function(e){for(var t=[[]],n=[e],o=[0],a=[e.length],r=0,i=0,s=[],l=[s];i>-1;){for(;(r=o[i]++)<a[i];){var m=void 0,u=t[i],h=n[i][r];if("string"==typeof h?(u=i>0?u:["plain"],m=h):(u=d(u,h.type),h.alias&&(u=d(u,h.alias)),m=h.content),"string"==typeof m){var y=m.split(p),g=y.length;s.push({types:u,content:y[0]});for(var f=1;f<g;f++)c(s),l.push(s=[]),s.push({types:u,content:y[f]})}else i++,t.push(u),n.push(m),o.push(0),a.push(m.length)}i--,t.pop(),n.pop(),o.pop(),a.pop()}return c(s),l}(void 0!==i?this.tokenize(t,o,i,n):[o]),className:"prism-code language-"+n,style:void 0!==r?r.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component);const h=u},76062:(e,t,n)=>{n.d(t,{A:()=>o});const o={plain:{color:"#F8F8F2",backgroundColor:"#282A36"},styles:[{types:["prolog","constant","builtin"],style:{color:"rgb(189, 147, 249)"}},{types:["inserted","function"],style:{color:"rgb(80, 250, 123)"}},{types:["deleted"],style:{color:"rgb(255, 85, 85)"}},{types:["changed"],style:{color:"rgb(255, 184, 108)"}},{types:["punctuation","symbol"],style:{color:"rgb(248, 248, 242)"}},{types:["string","char","tag","selector"],style:{color:"rgb(255, 121, 198)"}},{types:["keyword","variable"],style:{color:"rgb(189, 147, 249)",fontStyle:"italic"}},{types:["comment"],style:{color:"rgb(98, 114, 164)"}},{types:["attr-name"],style:{color:"rgb(241, 250, 140)"}}]}},45603:(e,t,n)=>{n.d(t,{A:()=>o});const o={plain:{color:"#393A34",backgroundColor:"#f6f8fa"},styles:[{types:["comment","prolog","doctype","cdata"],style:{color:"#999988",fontStyle:"italic"}},{types:["namespace"],style:{opacity:.7}},{types:["string","attr-value"],style:{color:"#e3116c"}},{types:["punctuation","operator"],style:{color:"#393A34"}},{types:["entity","url","symbol","number","boolean","variable","constant","property","regex","inserted"],style:{color:"#36acaa"}},{types:["atrule","keyword","attr-name","selector"],style:{color:"#00a4db"}},{types:["function","deleted","tag"],style:{color:"#d73a49"}},{types:["function-variable"],style:{color:"#6f42c1"}},{types:["tag","selector","keyword"],style:{color:"#00009f"}}]}}}]);