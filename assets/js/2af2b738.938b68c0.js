"use strict";(self.webpackChunkhypercerts=self.webpackChunkhypercerts||[]).push([[395],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(r),f=a,d=m["".concat(p,".").concat(f)]||m[f]||u[f]||o;return r?n.createElement(d,i(i({ref:t},s),{},{components:r})):n.createElement(d,i({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6445:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={},i="2022-08-09 on Technical & Feature Scope",l={unversionedId:"meeting-notes/2022_08_09_tech_and_feat_scope",id:"meeting-notes/2022_08_09_tech_and_feat_scope",title:"2022-08-09 on Technical & Feature Scope",description:"Participants",source:"@site/docs/meeting-notes/2022_08_09_tech_and_feat_scope.md",sourceDirName:"meeting-notes",slug:"/meeting-notes/2022_08_09_tech_and_feat_scope",permalink:"/hypercerts-docs/meeting-notes/2022_08_09_tech_and_feat_scope",draft:!1,editUrl:"https://github.com/protocol/hypercerts-docs/docs/meeting-notes/2022_08_09_tech_and_feat_scope.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Notes",permalink:"/hypercerts-docs/meeting-notes"},next:{title:"2022-08-09 on Tooling",permalink:"/hypercerts-docs/meeting-notes/2022_08_09_tooling"}},p={},c=[{value:"Participants",id:"participants",level:2},{value:"Conversation",id:"conversation",level:2}],s={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"2022-08-09-on-technical--feature-scope"},"2022-08-09 on Technical & Feature Scope"),(0,a.kt)("h2",{id:"participants"},"Participants"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"@reasn"),(0,a.kt)("li",{parentName:"ul"},"@bitbecker"),(0,a.kt)("li",{parentName:"ul"},"@holkeb"),(0,a.kt)("li",{parentName:"ul"},"more (please add yourself if you consent to being mentioned)")),(0,a.kt)("h2",{id:"conversation"},"Conversation"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Update from the previous call"),(0,a.kt)("li",{parentName:"ul"},"Open discussion with the ",(0,a.kt)("a",{parentName:"li",href:"https://hackmd.io/e3WhpdP8R1eOWgPDspfXVQ?both=#Minting"},"Minting Flow Chart")," as starting point"),(0,a.kt)("li",{parentName:"ul"},"Do we validate the input?",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u2757\ufe0fOnly the format / syntactically for now."))),(0,a.kt)("li",{parentName:"ul"},"What\u2019s the relation between HyperCert and Collection?",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u2757\ufe0fCollections point to HyperCerts, not the other way round: Owners of collections fully control what HyperCerts belong to them."),(0,a.kt)("li",{parentName:"ul"},"\u2757\ufe0f The sole purpose of a collection, for now, is curation."))),(0,a.kt)("li",{parentName:"ul"},"Can HyperCerts link each other to indicate that their impact is built on top of each other?",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u2757\ufe0fLater, it\u2019s post-v0."))),(0,a.kt)("li",{parentName:"ul"},"What\u2019s the purpose of an impact claim without a HyperCert?",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u2757\ufe0fWe consider impact claims to be fully equivalent to HyperCerts. We now merge the terms and deprecate use of \u201cimpact claim\u201d, i.e. only speak of HyperCerts"))),(0,a.kt)("li",{parentName:"ul"},"How do we avoid overlapping HyperCerts (double accounting of impact)?",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u2757\ufe0f Early on we solve it by creating a trusted collection. Later, trusted entities can approve that there\u2019s no overlap. We keep this approval out of the HyperCerts for v0, trusting that we can upgrade later."),(0,a.kt)("li",{parentName:"ul"},"\u2757\ufe0f We might use the project\u2019s website as a source of trust later\nPost-v0 we have to find scalable ways to avoid duplicates"))),(0,a.kt)("li",{parentName:"ul"},"Do we support a royalty flow?"),(0,a.kt)("li",{parentName:"ul"},"What\u2019s the process for upgrading a HyperCert?")))}u.isMDXComponent=!0}}]);