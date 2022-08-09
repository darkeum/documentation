"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[634],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(n),k=l,f=m["".concat(u,".").concat(k)]||m[k]||p[k]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3633:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var r=n(7462),l=(n(7294),n(3905));const a={title:"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044f (Actions)"},i=void 0,o={unversionedId:"Structure/Definitions/actions",id:"Structure/Definitions/actions",title:"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044f (Actions)",description:"\u0412\u043e\u0437\u043c\u043e\u0436\u043d\u044b\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u043f\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044e \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f",source:"@site/docs/Structure/Definitions/actions.md",sourceDirName:"Structure/Definitions",slug:"/Structure/Definitions/actions",permalink:"/docs/Structure/Definitions/actions",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Structure/Definitions/actions.md",tags:[],version:"current",frontMatter:{title:"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044f (Actions)"},sidebar:"tutorialSidebar",previous:{title:"\u041e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044f \u0438 \u043f\u0440\u0438\u043d\u0446\u0438\u043f\u044b",permalink:"/docs/category/\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044f-\u0438-\u043f\u0440\u0438\u043d\u0446\u0438\u043f\u044b"},next:{title:"\u041a\u043e\u043d\u0442\u0440\u043e\u043b\u043b\u0435\u0440\u044b (Controllers)",permalink:"/docs/Structure/Definitions/controllers"}},u={},s=[{value:"\u0412\u043e\u0437\u043c\u043e\u0436\u043d\u044b\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u043f\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044e \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f",id:"\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u044b\u0435-\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f-\u043f\u043e-\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044e-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f",level:3},{value:"\u041f\u0440\u0438\u043d\u0446\u0438\u043f\u044b:",id:"\u043f\u0440\u0438\u043d\u0446\u0438\u043f\u044b",level:4}],c={toc:s};function p(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u044b\u0435-\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f-\u043f\u043e-\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044e-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f"},"\u0412\u043e\u0437\u043c\u043e\u0436\u043d\u044b\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u043f\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044e \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u044e\u0442 \u0441\u043e\u0431\u043e\u0439 \u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u041f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f ",(0,l.kt)("em",{parentName:"li"},"(\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u044b \u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u043c \u0438\u043b\u0438 \u041f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u043d\u044b\u043c \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0435\u043d\u0438\u0435\u043c \u0432 \u041f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0438)"),"."),(0,l.kt)("li",{parentName:"ul"},"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044f ",(0,l.kt)("else",null,(0,l.kt)("strong",{parentName:"li"},"\u041c\u041e\u0413\u0423\u0422"))," \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0431\u0438\u0437\u043d\u0435\u0441-\u043b\u043e\u0433\u0438\u043a\u0443 \u0438/\u0438\u043b\u0438 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u043e\u0432\u044b\u0432\u0430\u0442\u044c \u0417\u0430\u0434\u0430\u0447\u0438 \u0434\u043b\u044f \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0431\u0438\u0437\u043d\u0435\u0441-\u043b\u043e\u0433\u0438\u043a\u0438."),(0,l.kt)("li",{parentName:"ul"},"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u044e\u0442 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b \u0434\u0430\u043d\u043d\u044b\u0445 \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0432\u0445\u043e\u0434\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445, \u043c\u0430\u043d\u0438\u043f\u0443\u043b\u0438\u0440\u0443\u044e\u0442 \u0438\u043c\u0438 \u0432 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u0431\u0438\u0437\u043d\u0435\u0441-\u043f\u0440\u0430\u0432\u0438\u043b\u0430\u043c\u0438 \u0432\u043d\u0443\u0442\u0440\u0438 \u0438\u043b\u0438 \u0447\u0435\u0440\u0435\u0437 \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0437\u0430\u0434\u0430\u0447\u0438, \u0430 \u0437\u0430\u0442\u0435\u043c \u0432\u044b\u0432\u043e\u0434\u044f\u0442 \u043d\u043e\u0432\u044b\u0435 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b \u0434\u0430\u043d\u043d\u044b\u0445."),(0,l.kt)("li",{parentName:"ul"},"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044f ",(0,l.kt)("false",null,(0,l.kt)("strong",{parentName:"li"},"\u041d\u0415 \u0414\u041e\u041b\u0416\u041d\u042b"))," \u0437\u0430\u0431\u043e\u0442\u0438\u0442\u044c\u0441\u044f \u043e \u0442\u043e\u043c, \u043a\u0430\u043a \u0441\u043e\u0431\u0438\u0440\u0430\u044e\u0442\u0441\u044f \u0434\u0430\u043d\u043d\u044b\u0435 \u0438\u043b\u0438 \u043a\u0430\u043a \u043e\u043d\u0438 \u0431\u0443\u0434\u0443\u0442 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u044b."),(0,l.kt)("li",{parentName:"ul"},"\u041f\u0440\u043e\u0441\u0442\u043e \u0432\u0437\u0433\u043b\u044f\u043d\u0443\u0432 \u043d\u0430 \u043f\u0430\u043f\u043a\u0443 \xab\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044f\xbb \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430, \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u044c, \u043a\u0430\u043a\u0438\u0435 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f (\u0444\u0443\u043d\u043a\u0446\u0438\u0438) \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0432\u0430\u0448 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440."),(0,l.kt)("li",{parentName:"ul"},"\u0418, \u0433\u043b\u044f\u0434\u044f \u043d\u0430 \u0432\u0441\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f, \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0441\u043a\u0430\u0437\u0430\u0442\u044c, \u0447\u0442\u043e \u043c\u043e\u0436\u0435\u0442 \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435.")),(0,l.kt)("h4",{id:"\u043f\u0440\u0438\u043d\u0446\u0438\u043f\u044b"},"\u041f\u0440\u0438\u043d\u0446\u0438\u043f\u044b:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u041a\u0430\u0436\u0434\u043e\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 ",(0,l.kt)("true",null,(0,l.kt)("strong",{parentName:"li"},"\u0414\u041e\u041b\u0416\u041d\u041e"))," \u043e\u0442\u0432\u0435\u0447\u0430\u0442\u044c \u0437\u0430 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u043e\u0434\u043d\u043e\u0433\u043e \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u0430 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0432 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0438."),(0,l.kt)("li",{parentName:"ul"},"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u0435 ",(0,l.kt)("else",null,(0,l.kt)("strong",{parentName:"li"},"\u041c\u041e\u0416\u0415\u0422"))," \u0438\u0437\u0432\u043b\u0435\u043a\u0430\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u0438\u0437 \u0437\u0430\u0434\u0430\u0447 ",(0,l.kt)("class",null,(0,l.kt)("inlineCode",{parentName:"li"},"Tasks"))," \u0438 \u043f\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u0432 \u0434\u0440\u0443\u0433\u0443\u044e \u0437\u0430\u0434\u0430\u0447\u0443 ",(0,l.kt)("class",null,(0,l.kt)("inlineCode",{parentName:"li"},"Task")),"."),(0,l.kt)("li",{parentName:"ul"},"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u0435 ",(0,l.kt)("else",null,(0,l.kt)("strong",{parentName:"li"},"\u041c\u041e\u0416\u0415\u0422"))," \u0432\u044b\u0437\u044b\u0432\u0430\u0442\u044c \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0437\u0430\u0434\u0430\u0447 ",(0,l.kt)("class",null,(0,l.kt)("inlineCode",{parentName:"li"},"Tasks")),". (\u041e\u043d\u0438 \u043c\u043e\u0433\u0443\u0442 \u0434\u0430\u0436\u0435 \u0432\u044b\u0437\u044b\u0432\u0430\u0442\u044c \u0437\u0430\u0434\u0430\u0447\u0438 \u0438\u0437 \u0434\u0440\u0443\u0433\u0438\u0445 \u043c\u043e\u0434\u0443\u043b\u0435\u0439!)."),(0,l.kt)("li",{parentName:"ul"},"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044f ",(0,l.kt)("else",null,(0,l.kt)("strong",{parentName:"li"},"\u041c\u041e\u0413\u0423\u0422"))," \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u043b\u0435\u0440\u0443."),(0,l.kt)("li",{parentName:"ul"},"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044f ",(0,l.kt)("false",null,(0,l.kt)("strong",{parentName:"li"},"\u041d\u0415 \u0414\u041e\u041b\u0416\u041d\u042b"))," \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0442\u044c \u043e\u0442\u0432\u0435\u0442. (\u0420\u0430\u0431\u043e\u0442\u0430 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u043b\u0435\u0440\u0430 - \u0432\u0435\u0440\u043d\u0443\u0442\u044c \u043e\u0442\u0432\u0435\u0442)"),(0,l.kt)("li",{parentName:"ul"},"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u0435 ",(0,l.kt)("false",null,(0,l.kt)("strong",{parentName:"li"},"\u041d\u0415 \u0414\u041e\u041b\u0416\u041d\u041e"))," \u0432\u044b\u0437\u044b\u0432\u0430\u0442\u044c \u0434\u0440\u0443\u0433\u043e\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 (\u0435\u0441\u043b\u0438 \u0432\u0430\u043c \u043d\u0443\u0436\u043d\u043e \u043f\u043e\u0432\u0442\u043e\u0440\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u043e\u0439 \u0444\u0440\u0430\u0433\u043c\u0435\u043d\u0442 \u0431\u0438\u0437\u043d\u0435\u0441-\u043b\u043e\u0433\u0438\u043a\u0438 \u0432 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u0445 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f\u0445, \u0438 \u044d\u0442\u043e\u0442 \u0444\u0440\u0430\u0433\u043c\u0435\u043d\u0442 \u0432\u044b\u0437\u044b\u0432\u0430\u0435\u0442 \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0437\u0430\u0434\u0430\u0447\u0438, \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u043f\u043e\u0434\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435). "),(0,l.kt)("li",{parentName:"ul"},"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u0432 \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u043c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f \u0438\u0437 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u043b\u0435\u0440\u043e\u0432. \u041e\u0434\u043d\u0430\u043a\u043e \u0438\u0445 \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0438\u0437 \u043f\u0440\u043e\u0441\u043b\u0443\u0448\u0438\u0432\u0430\u0442\u0435\u043b\u0435\u0439 \u0441\u043e\u0431\u044b\u0442\u0438\u0439, \u043a\u043e\u043c\u0430\u043d\u0434 \u0438/\u0438\u043b\u0438 \u0434\u0440\u0443\u0433\u0438\u0445 \u043a\u043b\u0430\u0441\u0441\u043e\u0432. \u041d\u043e \u0438\u0445 ",(0,l.kt)("false",null,(0,l.kt)("strong",{parentName:"li"},"\u041d\u0415 \u0414\u041e\u041b\u0416\u041d\u041e"))," \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0438\u0437 \u0437\u0430\u0434\u0430\u0447 ",(0,l.kt)("class",null,(0,l.kt)("inlineCode",{parentName:"li"},"Tasks")),"."),(0,l.kt)("li",{parentName:"ul"},"\u041a\u0430\u0436\u0434\u043e\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 ",(0,l.kt)("true",null,(0,l.kt)("strong",{parentName:"li"},"\u0414\u041e\u041b\u0416\u041d\u041e"))," \u0438\u043c\u0435\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u043e\u0434\u043d\u0443 \u0444\u0443\u043d\u043a\u0446\u0438\u044e \u0441 \u0438\u043c\u0435\u043d\u0435\u043c ",(0,l.kt)("func",null,(0,l.kt)("inlineCode",{parentName:"li"},"run()")),"."),(0,l.kt)("li",{parentName:"ul"},"\u041e\u0441\u043d\u043e\u0432\u043d\u0430\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f ",(0,l.kt)("func",null,(0,l.kt)("inlineCode",{parentName:"li"},"run()"))," \u043c\u043e\u0436\u0435\u0442 \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0442\u044c \u043e\u0431\u044a\u0435\u043a\u0442 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430."),(0,l.kt)("li",{parentName:"ul"},"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u043e\u0442\u0432\u0435\u0447\u0430\u044e\u0442 \u0437\u0430 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0443 \u0432\u0441\u0435\u0445 \u043e\u0436\u0438\u0434\u0430\u0435\u043c\u044b\u0445 \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0439.")))}p.isMDXComponent=!0}}]);