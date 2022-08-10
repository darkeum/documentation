"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[907],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(i,".").concat(d)]||m[d]||c[d]||l;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7364:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const l={title:"\u041c\u0430\u0440\u0448\u0440\u0443\u0442\u0438\u0437\u0430\u0446\u0438\u044f (Routes)"},o=void 0,p={unversionedId:"Components/Main Components/routes",id:"Components/Main Components/routes",title:"\u041c\u0430\u0440\u0448\u0440\u0443\u0442\u0438\u0437\u0430\u0446\u0438\u044f (Routes)",description:"- \u041e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u0438 \u043f\u0440\u0438\u043d\u0446\u0438\u043f\u044b",source:"@site/docs/Components/Main Components/routes.md",sourceDirName:"Components/Main Components",slug:"/Components/Main Components/routes",permalink:"/docs/Components/Main Components/routes",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Components/Main Components/routes.md",tags:[],version:"current",frontMatter:{title:"\u041c\u0430\u0440\u0448\u0440\u0443\u0442\u0438\u0437\u0430\u0446\u0438\u044f (Routes)"},sidebar:"tutorialSidebar",previous:{title:"\u041c\u043e\u0434\u0435\u043b\u0438 (Models)",permalink:"/docs/Components/Main Components/models"},next:{title:"\u0417\u0430\u0434\u0430\u0447\u0438 (Tasks)",permalink:"/docs/Components/Main Components/tasks"}},i={},s=[{value:"\u041e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u0438 \u043f\u0440\u0438\u043d\u0446\u0438\u043f\u044b",id:"definition-principles",level:3},{value:"\u041f\u0440\u0430\u0432\u0438\u043b\u0430",id:"rules",level:3},{value:"\u0421\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u043f\u0430\u043f\u043e\u043a",id:"folder-structure",level:3},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b \u043a\u043e\u0434\u0430",id:"code-sample",level:3},{value:"Web \u0438 API \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u044b",id:"web-\u0438-api-\u043c\u0430\u0440\u0448\u0440\u0443\u0442\u044b",level:4},{value:"\u0417\u0430\u0449\u0438\u0449\u0435\u043d\u043d\u044b\u0439 \u043c\u0430\u0440\u0448\u0440\u0443\u0442 (API)",id:"\u0437\u0430\u0449\u0438\u0449\u0435\u043d\u043d\u044b\u0439-\u043c\u0430\u0440\u0448\u0440\u0443\u0442-api",level:4},{value:"\u0420\u0430\u0437\u043d\u0438\u0446\u0430 \u043c\u0435\u0436\u0434\u0443 \u043f\u0443\u0431\u043b\u0438\u0447\u043d\u044b\u043c\u0438 \u0438 \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u044b\u043c\u0438 \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u0430\u043c\u0438",id:"difference-between-public-private-route-files",level:2}],u={toc:s};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#definition-principles"},"\u041e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u0438 \u043f\u0440\u0438\u043d\u0446\u0438\u043f\u044b")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#rules"},"\u041f\u0440\u0430\u0432\u0438\u043b\u0430")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#folder-structure"},"\u0421\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u043f\u0430\u043f\u043e\u043a")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#code-sample"},"\u041f\u0440\u0438\u043c\u0435\u0440 \u043a\u043e\u0434\u0430"))),(0,a.kt)("h3",{id:"definition-principles"},"\u041e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u0438 \u043f\u0440\u0438\u043d\u0446\u0438\u043f\u044b"),(0,a.kt)("p",null,"\u041f\u0440\u043e\u0447\u0442\u0438\u0442\u0435 ",(0,a.kt)("a",{parentName:"p",href:"/docs/Structure/Definitions/routes"},(0,a.kt)("strong",{parentName:"a"},"\u041e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044f \u0438 \u043f\u0440\u0438\u043d\u0446\u0438\u043f\u044b -> \u041c\u0430\u0440\u0448\u0440\u0443\u0442\u0438\u0437\u0430\u0446\u0438\u044f (Routes)"))),(0,a.kt)("h3",{id:"rules"},"\u041f\u0440\u0430\u0432\u0438\u043b\u0430"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u0424\u0430\u0439\u043b\u044b \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u043e\u0432 API \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u043d\u0430\u0437\u0432\u0430\u043d\u044b \u0432 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u0432\u0435\u0440\u0441\u0438\u0435\u0439, \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e\u0441\u0442\u044c\u044e \u0438 \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c\u044e \u0438\u0445 API. \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 ",(0,a.kt)("false",null,(0,a.kt)("inlineCode",{parentName:"li"},"CreateOrder.v1.public.php")),", ",(0,a.kt)("false",null,(0,a.kt)("inlineCode",{parentName:"li"},"FulfillOrder.v2.public.php")),", ",(0,a.kt)("false",null,(0,a.kt)("inlineCode",{parentName:"li"},"CancelOrder.v1.private.php"))," \u0438 \u0442\u0434."),(0,a.kt)("li",{parentName:"ul"},"\u0424\u0430\u0439\u043b\u044b \u0432\u0435\u0431-\u043c\u0430\u0440\u0448\u0440\u0443\u0442\u0430 \u043e\u0447\u0435\u043d\u044c \u043f\u043e\u0445\u043e\u0436\u0438 \u043d\u0430 \u0432\u0435\u0431-\u0444\u0430\u0439\u043b\u044b API, \u043d\u043e \u043e\u043d\u0438 \u043c\u043e\u0433\u0443\u0442 \u043d\u0430\u0437\u044b\u0432\u0430\u0442\u044c\u0441\u044f \u043a\u0430\u043a \u0443\u0433\u043e\u0434\u043d\u043e.")),(0,a.kt)("h3",{id:"folder-structure"},"\u0421\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u043f\u0430\u043f\u043e\u043a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"}," - usr\n    - modules\n        - {module-name}\n            - UI\n                - API\n                   - Routes\n                      - CreateItem.v1.public.php\n                      - DeleteItem.v1.public.php\n                      - CreateItem.v2.public.php\n                      - DeleteItem.v1.private.php\n                      - ActiveItem.v1.private.php\n                      - ...\n                - WEB\n                   - Routes\n                      - main.php\n                      - ...\n")),(0,a.kt)("h3",{id:"code-sample"},"\u041f\u0440\u0438\u043c\u0435\u0440\u044b \u043a\u043e\u0434\u0430"),(0,a.kt)("h4",{id:"web-\u0438-api-\u043c\u0430\u0440\u0448\u0440\u0443\u0442\u044b"},"Web \u0438 API \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u044b"),(0,a.kt)("p",null,"\u041c\u0430\u0440\u0448\u0440\u0443\u0442\u044b \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u044e\u0442\u0441\u044f \u0442\u043e\u0447\u043d\u043e \u0442\u0430\u043a \u0436\u0435, \u043a\u0430\u043a \u0432\u044b \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u043b\u0438 \u0431\u044b \u0438\u0445 \u0432 ",(0,a.kt)("a",{parentName:"p",href:"https://laravel.com/docs/9.x/routing"},(0,a.kt)("strong",{parentName:"a"},"Laravel")),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"Route::post('hello', [Controller::class, 'sayHello']);\n")),(0,a.kt)("h4",{id:"\u0437\u0430\u0449\u0438\u0449\u0435\u043d\u043d\u044b\u0439-\u043c\u0430\u0440\u0448\u0440\u0443\u0442-api"},"\u0417\u0430\u0449\u0438\u0449\u0435\u043d\u043d\u044b\u0439 \u043c\u0430\u0440\u0448\u0440\u0443\u0442 (API)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"Route::get('users', [Controller::class, 'listAllUsers'])\n    ->middleware(['auth:api']);\n")),(0,a.kt)("h2",{id:"difference-between-public-private-route-files"},"\u0420\u0430\u0437\u043d\u0438\u0446\u0430 \u043c\u0435\u0436\u0434\u0443 \u043f\u0443\u0431\u043b\u0438\u0447\u043d\u044b\u043c\u0438 \u0438 \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u044b\u043c\u0438 \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u0430\u043c\u0438"),(0,a.kt)("p",null,"\u0423 ",(0,a.kt)("strong",{parentName:"p"},"Darklyy")," \u0435\u0441\u0442\u044c 2 \u0442\u0438\u043f\u0430 \u043a\u043e\u043d\u0435\u0447\u043d\u044b\u0445 \u0442\u043e\u0447\u0435\u043a: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u041e\u0431\u0449\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0430\u044f ","[",(0,a.kt)("strong",{parentName:"li"},"public"),"]"," - \u0432 \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u043c \u0434\u043b\u044f \u0441\u0442\u043e\u0440\u043e\u043d\u043d\u0438\u0445 \u043a\u043b\u0438\u0435\u043d\u0442\u043e\u0432"),(0,a.kt)("li",{parentName:"ul"},"\u0427\u0430\u0441\u0442\u043d\u0430\u044f ","[",(0,a.kt)("strong",{parentName:"li"},"private"),"]"," - \u0434\u043b\u044f \u0432\u0430\u0448\u0438\u0445 \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0445 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439 ")),(0,a.kt)("p",null,"\u042d\u0442\u043e \u043f\u043e\u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u0443\u044e \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044e \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u0438 \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u043a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0432\u0430\u0448\u0435\u0433\u043e \u0432\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0435\u0433\u043e API."))}c.isMDXComponent=!0}}]);