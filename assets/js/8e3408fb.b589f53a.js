"use strict";(self.webpackChunkhypercerts_docs=self.webpackChunkhypercerts_docs||[]).push([[174],{3457:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=r(7462),s=(r(7294),r(3905)),a=r(3456);const i={title:"Hypercerts as a data layer",id:"hypercerts-as-data-layer",sidebar_position:3},o=void 0,c={unversionedId:"background/ifs/hypercerts-as-data-layer",id:"background/ifs/hypercerts-as-data-layer",title:"Hypercerts as a data layer",description:"In order for impact funding systems to be most effective, they should be interoperable regarding (1) funding mechanisms, (2) funding sources and (3) evaluations. Figure 1 shows a potential dynamic between the actors of an IFS. In that scenario hypercerts can account for the prospective funding (steps 2-3) as well as for the retrospective funding (steps 8-9) from different funders. Evaluations are made public and can be discovered through the hypercerts for all funders (steps 5-7). Retrospective funders can reward not only the contributors but also the prospective funders (steps 10-11).",source:"@site/docs/background/ifs/hypercerts-as-data-layer.md",sourceDirName:"background/ifs",slug:"/background/ifs/hypercerts-as-data-layer",permalink:"/hypercerts-docs/background/ifs/hypercerts-as-data-layer",draft:!1,editUrl:"https://github.com/Network-Goods/hypercerts-docs/docs/background/ifs/hypercerts-as-data-layer.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Hypercerts as a data layer",id:"hypercerts-as-data-layer",sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Defining Impact Funding Systems (IFSs)",permalink:"/hypercerts-docs/background/ifs/defining-ifs"},next:{title:"Pilot App",permalink:"/hypercerts-docs/pilot"}},d={},p=[],u={toc:p};function f(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"In order for impact funding systems to be most effective, they should be interoperable regarding (1) funding mechanisms, (2) funding sources and (3) evaluations. Figure 1 shows a potential dynamic between the actors of an IFS. In that scenario hypercerts can account for the prospective funding (steps 2-3) as well as for the retrospective funding (steps 8-9) from different funders. Evaluations are made public and can be discovered through the hypercerts for all funders (steps 5-7). Retrospective funders can reward not only the contributors but also the prospective funders (steps 10-11)."),(0,s.kt)(a.Mermaid,{config:{},chart:"sequenceDiagram\n    autonumber\n    participant Beneficiaries\n    participant Contributors\n    participant Prospective funders\n    participant Retrospective funders\n    participant Evaluators\n    Contributors ->> Contributors: Mint hypercerts\n    Prospective funders ->> Contributors: Award funding\n    Contributors ->> Prospective funders: Award fractions of <br> the hypercert\n    Contributors ->> Beneficiaries: Create impact\n    Retrospective funders ->> Evaluators: Fund evaluation\n    Evaluators ->> Beneficiaries: Evaluate impact on beneficiaries\n    Evaluators ->> Retrospective funders: Make evaluations  public,<br> esp. for retrospective <br> funders\n    Retrospective funders ->> Contributors: Award funding\n    Contributors ->> Retrospective funders: Award fractions of hypercerts\n    opt\n    Retrospective funders ->> Prospective funders: Award funding\n    Prospective funders ->> Retrospective funders: Transfer fractions <br> of hypercert\n    end",mdxType:"Mermaid"}),(0,s.kt)("p",null,"By serving as a single, open, shared, decentralized database hypercerts lower the transaction costs to coordinate and fund impactful work together. This is important because the optimal funding decisions of a single funder depends on the funding decision of all other funders. For instance, some work is only impactful if a minimum funding is provided: The impact is non-linear in the funding amount, e.g. half a bridge is not half as impactful as a full bridge. Other work might be over-funded, i.e. the impact of an additional dollar is basically zero. Ultimately, funders want to find the highest impact for each additional dollar spend (cf. S-process as in Critch, 2021). Today multi-funder coordination on impact funding is prohibitively expensive, leading to suboptimal efficiency in impact capital allocation.  Through hypercerts the funding becomes more transparent and the credits for funding impactful work can be easily shared. Coordinating funding becomes easier."),(0,s.kt)("p",null,"Hypercerts don\u2019t solve this coordination problem by themselves, but build the basis for different decision and funding mechanisms as shown in figure 2. Quadratic voting, bargaining solutions, DAO-style votes, milestone bounties, and simple unconditional grants all have their strengths, among others. Hypercerts do not lock in any particular decision-making scheme for funders."),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/protocol/hypercerts-docs/main/static/img/hypercert_data_layer.png",alt:"Hypercerts as a data layer for an IFS"})),(0,s.kt)("p",null,"Looking farther into the future: If a large majority of funding across an entire IFS ends up flowing through hypercerts, funders have created the transparency that enables each of them to make the best decisions given the funding decision of everyone else."))}f.isMDXComponent=!0}}]);