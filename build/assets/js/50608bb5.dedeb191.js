"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[44],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=u(r),d=l,f=m["".concat(i,".").concat(d)]||m[d]||c[d]||a;return r?n.createElement(f,o(o({ref:t},s),{},{components:r})):n.createElement(f,o({ref:t},s))}));function d(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,o=new Array(a);o[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:l,o[1]=p;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},181:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>p,toc:()=>u});var n=r(7462),l=(r(7294),r(3905));const a={title:"\u041f\u043e\u043c\u043e\u0449\u043d\u0438\u043a\u0438 (Helpers)"},o=void 0,p={unversionedId:"Components/Other Component/helpers",id:"Components/Other Component/helpers",title:"\u041f\u043e\u043c\u043e\u0449\u043d\u0438\u043a\u0438 (Helpers)",description:"- \u041e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u0438 \u043f\u0440\u0438\u043d\u0446\u0438\u043f\u044b",source:"@site/docs/Components/Other Component/helpers.md",sourceDirName:"Components/Other Component",slug:"/Components/Other Component/helpers",permalink:"/docs/Components/Other Component/helpers",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Components/Other Component/helpers.md",tags:[],version:"current",frontMatter:{title:"\u041f\u043e\u043c\u043e\u0449\u043d\u0438\u043a\u0438 (Helpers)"},sidebar:"tutorialSidebar",previous:{title:"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b",permalink:"/docs/category/\u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b"},next:{title:"\u041f\u043e\u043c\u043e\u0449\u043d\u0438\u043a\u0438",permalink:"/docs/category/\u043f\u043e\u043c\u043e\u0449\u043d\u0438\u043a\u0438"}},i={},u=[{value:"\u041e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435",id:"definition",level:3},{value:"\u041f\u0440\u0438\u043d\u0446\u0438\u043f\u044b",id:"principles",level:3},{value:"\u041f\u0440\u0430\u0432\u0438\u043b\u0430",id:"rules",level:3},{value:"\u0421\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u043f\u0430\u043f\u043e\u043a",id:"folder-structure",level:3},{value:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",id:"usage",level:3}],s={toc:u};function c(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#definition"},"\u041e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u0438 \u043f\u0440\u0438\u043d\u0446\u0438\u043f\u044b")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#principles"},"\u041f\u0440\u0438\u043d\u0446\u0438\u043f\u044b")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#rules"},"\u041f\u0440\u0430\u0432\u0438\u043b\u0430")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#folder-structure"},"\u0421\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u043f\u0430\u043f\u043e\u043a")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#usage"},"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"))),(0,l.kt)("h3",{id:"definition"},"\u041e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u041f\u043e\u043c\u043e\u0449\u043d\u0438\u043a\u0438 (Helpers) \u2014 \u044d\u0442\u043e \u0433\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u044b\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 PHP, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0432\u044b\u0437\u044b\u0432\u0430\u0442\u044c \u0438\u0437 \u043b\u044e\u0431\u043e\u0433\u043e \u043c\u0435\u0441\u0442\u0430 \u0432\u0430\u0448\u0435\u0433\u043e \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f."),(0,l.kt)("li",{parentName:"ul"},"\u0412\u0441\u043f\u043e\u043c\u043e\u0433\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0444\u0430\u0439\u043b\u044b \u2014 \u044d\u0442\u043e \u043f\u0440\u043e\u0441\u0442\u044b\u0435 \u0444\u0430\u0439\u043b\u044b PHP, \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0449\u0438\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438.")),(0,l.kt)("h3",{id:"principles"},"\u041f\u0440\u0438\u043d\u0446\u0438\u043f\u044b"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u041f\u043e\u043c\u043e\u0449\u043d\u0438\u043a\u0438 \u0414\u041e\u041b\u0416\u041d\u042b \u0431\u044b\u0442\u044c \u0441\u043e\u0437\u0434\u0430\u043d\u044b \u0432\u043d\u0443\u0442\u0440\u0438 \u043c\u043e\u0434\u0443\u043b\u0435\u0439. \u041e\u0434\u043d\u0430\u043a\u043e \u043e\u0431\u0449\u0438\u0435 \u043f\u043e\u043c\u043e\u0449\u043d\u0438\u043a\u0438 \u041c\u041e\u0413\u0423\u0422 \u0431\u044b\u0442\u044c \u0441\u043e\u0437\u0434\u0430\u043d\u044b \u043d\u0430 \u0443\u0440\u043e\u0432\u043d\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f."),(0,l.kt)("li",{parentName:"ul"},"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0441\u0442\u043e\u043b\u044c\u043a\u043e \u0432\u0441\u043f\u043e\u043c\u043e\u0433\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0445 \u0444\u0430\u0439\u043b\u043e\u0432, \u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0432\u0430\u043c \u043d\u0443\u0436\u043d\u043e, \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u043c\u043e\u0434\u0443\u043b\u044f."),(0,l.kt)("li",{parentName:"ul"},"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u0442\u044c \u0441\u0442\u043e\u043b\u044c\u043a\u043e \u0432\u0441\u043f\u043e\u043c\u043e\u0433\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0445 \u0444\u0443\u043d\u043a\u0446\u0438\u0439, \u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0432\u0430\u043c \u043d\u0443\u0436\u043d\u043e, \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u0432\u0441\u043f\u043e\u043c\u043e\u0433\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0433\u043e \u0444\u0430\u0439\u043b\u0430."),(0,l.kt)("li",{parentName:"ul"},"\u0412\u0441\u0435 \u0432\u0441\u043f\u043e\u043c\u043e\u0433\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0444\u0430\u0439\u043b\u044b \u0431\u0443\u0434\u0443\u0442 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043d\u044b \u0444\u0440\u0435\u0439\u043c\u0432\u043e\u0440\u043a\u043e\u043c.")),(0,l.kt)("h3",{id:"rules"},"\u041f\u0440\u0430\u0432\u0438\u043b\u0430"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u041f\u043e\u043c\u043e\u0449\u043d\u0438\u043a\u0438 \u041c\u041e\u0413\u0423\u0422 \u0440\u0430\u0437\u043c\u0435\u0449\u0430\u0442\u044c\u0441\u044f \u0432 \u043f\u0430\u043f\u043a\u0435 ",(0,l.kt)("inlineCode",{parentName:"li"},"Helpers")," \u0432\u043d\u0443\u0442\u0440\u0438 \u043c\u043e\u0434\u0443\u043b\u044f \u0438\u043b\u0438 \u0432 \u0441\u0430\u043c\u043e\u043c \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0438 \u0434\u043b\u044f \u043e\u0431\u0449\u0438\u0445 \u043f\u043e\u043c\u043e\u0449\u043d\u0438\u043a\u043e\u0432.")),(0,l.kt)("h3",{id:"folder-structure"},"\u0421\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u043f\u0430\u043f\u043e\u043a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"- usr\n  - modules\n    - {module-name}\n        - Helpers\n          - helpers.php\n          - mix.php\n          - ...\n\n  - usr\n   - app\n    - Helpers\n      - helpers.php\n      - mix.php\n      - ...\n")),(0,l.kt)("h3",{id:"usage"},"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"if (!function_exists('plus')) {\n    function add(int $a, int $b): int\n    {\n        return $a + $b;\n    }\n}\n")))}c.isMDXComponent=!0}}]);