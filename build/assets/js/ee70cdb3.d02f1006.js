"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[275],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(t),d=a,f=m["".concat(l,".").concat(d)]||m[d]||c[d]||o;return t?r.createElement(f,s(s({ref:n},u),{},{components:t})):r.createElement(f,s({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1959:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=t(7462),a=(t(7294),t(3905));const o={title:"\u0417\u0430\u0434\u0430\u0447\u0438 (Tasks)"},s=void 0,i={unversionedId:"Components/Main Components/tasks",id:"Components/Main Components/tasks",title:"\u0417\u0430\u0434\u0430\u0447\u0438 (Tasks)",description:"- \u041e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u0438 \u043f\u0440\u0438\u043d\u0446\u0438\u043f\u044b",source:"@site/docs/Components/Main Components/tasks.md",sourceDirName:"Components/Main Components",slug:"/Components/Main Components/tasks",permalink:"/docs/Components/Main Components/tasks",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Components/Main Components/tasks.md",tags:[],version:"current",frontMatter:{title:"\u0417\u0430\u0434\u0430\u0447\u0438 (Tasks)"},sidebar:"tutorialSidebar",previous:{title:"\u041c\u0430\u0440\u0448\u0440\u0443\u0442\u0438\u0437\u0430\u0446\u0438\u044f (Routes)",permalink:"/docs/Components/Main Components/routes"},next:{title:"\u041f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u044f (Views)",permalink:"/docs/Components/Main Components/views"}},l={},p=[{value:"\u041e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u0438 \u043f\u0440\u0438\u043d\u0446\u0438\u043f\u044b",id:"definition-principles",level:3},{value:"\u041f\u0440\u0430\u0432\u0438\u043b\u0430",id:"rules",level:3},{value:"\u0421\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u043f\u0430\u043f\u043e\u043a",id:"folder-structure",level:3},{value:"\u041f\u0440\u0438\u043c\u0435\u0440 \u043a\u043e\u0434\u0430",id:"code-sample",level:3},{value:"\u0417\u0430\u0434\u0430\u0447\u0430 (Task)",id:"\u0437\u0430\u0434\u0430\u0447\u0430-task",level:4},{value:"\u0412\u044b\u0437\u043e\u0432 \u0437\u0430\u0434\u0430\u0447\u0438 \u0438\u0437 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f (Action)",id:"\u0432\u044b\u0437\u043e\u0432-\u0437\u0430\u0434\u0430\u0447\u0438-\u0438\u0437-\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f-action",level:4}],u={toc:p};function c(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#definition-principles"},"\u041e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u0438 \u043f\u0440\u0438\u043d\u0446\u0438\u043f\u044b")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#rules"},"\u041f\u0440\u0430\u0432\u0438\u043b\u0430")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#folder-structure"},"\u0421\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u043f\u0430\u043f\u043e\u043a")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#code-sample"},"\u041f\u0440\u0438\u043c\u0435\u0440 \u043a\u043e\u0434\u0430"))),(0,a.kt)("h3",{id:"definition-principles"},"\u041e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u0438 \u043f\u0440\u0438\u043d\u0446\u0438\u043f\u044b"),(0,a.kt)("p",null,"\u041f\u0440\u043e\u0447\u0442\u0438\u0442\u0435 ",(0,a.kt)("a",{parentName:"p",href:"/docs/Structure/Definitions/routes"},(0,a.kt)("strong",{parentName:"a"},"\u041e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044f \u0438 \u043f\u0440\u0438\u043d\u0446\u0438\u043f\u044b -> \u0417\u0430\u0434\u0430\u0447\u0438 (Tasks)"))),(0,a.kt)("h3",{id:"rules"},"\u041f\u0440\u0430\u0432\u0438\u043b\u0430"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u0412\u0441\u0435 \u0437\u0430\u0434\u0430\u0447\u0438 \u0434\u043e\u043b\u0436\u043d\u044b \u043d\u0430\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u044c\u0441\u044f ",(0,a.kt)("class",null,(0,a.kt)("inlineCode",{parentName:"li"},"Boot\\Abstracts\\Tasks\\Task")),".")),(0,a.kt)("h3",{id:"folder-structure"},"\u0421\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u043f\u0430\u043f\u043e\u043a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"}," - usr\n    - modules\n        - {module-name}\n            - Tasks\n                - ConfirmUserEmailTask.php\n                - GenerateEmailConfirmationUrlTask.php\n                - SendConfirmationEmailTask.php\n                - ValidateConfirmationCodeTask.php\n                - SetUserEmailTask.php\n                - ...\n")),(0,a.kt)("h3",{id:"code-sample"},"\u041f\u0440\u0438\u043c\u0435\u0440 \u043a\u043e\u0434\u0430"),(0,a.kt)("h4",{id:"\u0437\u0430\u0434\u0430\u0447\u0430-task"},"\u0417\u0430\u0434\u0430\u0447\u0430 (Task)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"class FindUserByIdTask extends Task\n{\n    private $user;\n\n    public function __construct(User $user)\n    {\n        $this->user = $user;\n    }\n\n    public function run($id)\n    {\n        try {\n            $user = $this->user->find($id);\n        } catch (Exception $e) {\n            throw new UserNotFoundException();\n        }\n\n        return $user;\n    }\n}\n")),(0,a.kt)("h4",{id:"\u0432\u044b\u0437\u043e\u0432-\u0437\u0430\u0434\u0430\u0447\u0438-\u0438\u0437-\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f-action"},"\u0412\u044b\u0437\u043e\u0432 \u0437\u0430\u0434\u0430\u0447\u0438 \u0438\u0437 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f (Action)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"class ValidateUserEmailAction extends Action\n{\n    public function run($userId, $code)\n    {\n        app(ValidateConfirmationCodeTask::class)->run($userId, $code);\n        $user = app(FindUserByIdTask::class)->run($userId);\n        app(ConfirmUserEmailTask::class)->run($user);\n    }\n}\n")))}c.isMDXComponent=!0}}]);