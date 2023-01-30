"use strict";(self.webpackChunkhypercerts_docs=self.webpackChunkhypercerts_docs||[]).push([[971],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>h});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(r),h=o,m=d["".concat(c,".").concat(h)]||d[h]||u[h]||a;return r?n.createElement(m,i(i({ref:t},l),{},{components:r})):n.createElement(m,i({ref:t},l))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1269:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={title:"Introduction",id:"intro",sidebar_position:1},i="What's a hypercert?",s={unversionedId:"intro",id:"intro",title:"Introduction",description:"Hypercerts are a tool to build scalable retrospective reward systems for impact.",source:"@site/docs/index.md",sourceDirName:".",slug:"/",permalink:"/hypercerts-docs/",draft:!1,editUrl:"https://github.com/Network-Goods/hypercerts-docs/docs/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Introduction",id:"intro",sidebar_position:1},sidebar:"docsSidebar",next:{title:"Scenarios",permalink:"/hypercerts-docs/scenarios"}},c={},p=[{value:"Why should you care?",id:"why-should-you-care",level:2},{value:"Concepts/Background",id:"conceptsbackground",level:3}],l={toc:p};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"whats-a-hypercert"},"What's a hypercert?"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"Hypercerts are a tool to build scalable retrospective reward systems for impact."))),(0,o.kt)("p",null,"Hypercerts are implemented as a new token standard for tracking and rewarding positive impact. Each hypercert represents a unique impact claim capturing the following information:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"a scope of work and its corresponding scope of impact"),(0,o.kt)("li",{parentName:"ul"},"a set of time frames for both the work and its impact"),(0,o.kt)("li",{parentName:"ul"},"a set of contributors \u2013 the organization or people behind the work"),(0,o.kt)("li",{parentName:"ul"},"a set of rights you get by owning a hypercert\nThe hypercert itself is an ERC-1155 semi-fungible token with the information above stored as metadata on IPFS. Here\u2019s an example.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/protocol/hypercerts-docs/main/static/img/hypercert_example.png",alt:"hypercert design example"})),(0,o.kt)("h2",{id:"why-should-you-care"},"Why should you care?"),(0,o.kt)("p",null,"We spend trillions of dollars every year on public goods via governmental agencies, foundations, private donations and corporate spendings; however, we don\u2019t effectively track this work \u2013 leaving us in the dark, hoping that it actually has the intended positive impact.\nInstead\u2026"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"We should start by tracking this work, this is what hypercerts are for. "),(0,o.kt)("li",{parentName:"ul"},"We should evaluate how impactful that work was, this is what the open evaluation system of hypercerts supports. "),(0,o.kt)("li",{parentName:"ul"},"We should reward the work that was exceptionally impactful, this is what the public display of hypercerts and retrospective funding is for. ")),(0,o.kt)("p",null,"Doing this would unfold powerful incentives. Retrospective funding 1) provides incentives for creators to take on public goods projects with a potentially high, but uncertain, impact, 2) enables feedback loops to learn from successes and failures, and 3) attracts more talent to the public goods sector by improving performance-based compensation."),(0,o.kt)("p",null,"While we are excited about the prospects of retrospective funding, hypercerts do not impose any specific funding mechanisms, but start with tracking of the work that is supposed to be impactful. As a database for many funding mechanisms this facilitates experimentation and interoperability between funding mechanisms. "),(0,o.kt)("h3",{id:"conceptsbackground"},"Concepts/Background"),(0,o.kt)("p",null,"Curious? Head over to ",(0,o.kt)("a",{parentName:"p",href:"background"},"background")," to dive deeper into the world of hypercerts!"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Want to work or interface with hypercerts at your project? Let's talk and change impact funding together!\n",(0,o.kt)("a",{parentName:"p",href:"mailto:hypercerts@protocol.ai"},"hypercerts@protocol.ai"))))}u.isMDXComponent=!0}}]);