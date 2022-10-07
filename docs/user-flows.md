---
title: User Flows
id: flows
sidebar_position: 2
---

## HyperCerts with simple retroactive funding
In the simplest version of HyperCerts, retrospective funders use HyperCerts to award funding to contributors. 

```mermaid
sequenceDiagram
    participant Contributor
    participant Retrospective Funder
    Note over Contributor: creates public good
    Note over Retrospective Funder: evaluates impact of public good
    Retrospective Funder ->> Contributor: awards funding
    Note over Contributor: mints HyperCert
    Contributor -->> Retrospective Funder: awards HyperCert
```
If retrospective funding becomes the norm, contributors can reliably expect to get funding for creating positive impact. This expectation incentivizes them to start creating public goods.

However, until it's a norm, we use additional tools to create reliable expectations about future retrospective funding that incentivizes contributors to create public goods.

> 👷‍♀️ **Minting & Multiple Contributors:** Typically, the HyperCer is minted by one of the contributors. Together, they make sure funding is distributed properly.

## Prize competition with HyperCerts
A funder announces a prize that is given out under specific criteria to create reliable expectations about future retrospective rewards.

```mermaid
sequenceDiagram
    participant Contributor
    participant Retrospective Funder
    participant Evaluator
    Note over Retrospective Funder: announces prize for impact
    Note over Contributor: mints HyperCert
    Contributor -->> Retrospective Funder: submits HyperCert
    Retrospective Funder -->> Contributor: accepts HyperCert as submission
    Note over Contributor: creates public good
    Note over Evaluator: evaluates impact of public good
    Evaluator -->> Retrospective Funder: informs about evaluation
    Retrospective Funder ->> Contributor: awards funding
    Contributor -->> Retrospective Funder: awards HyperCert
```

## Retrospective funding pool
Funders pool funds to achieve bigger goals. They announce funding criteria to create reliable expectations about future retrospective funding. This incentivizes contributors to start working towards these criteria.

Every funder will receive fractions of the impactful HyperCerts to track the impact of their funding.

```mermaid
sequenceDiagram
    participant Contributor
    participant Retrospective funding pool
    participant Funder 1
    participant Funder 2
    Funder 1 ->> Retrospective funding pool: deposits funding
    Funder 2 ->> Retrospective funding pool: deposits funding
    Note over Retrospective funding pool: announces future retrospective funding criteria
    Note over Contributor: creates public good
    Note over Retrospective funding pool: evaluates impact of public good
    Retrospective funding pool ->> Contributor: awards funding
    Note over Contributor: mints HyperCert
    Contributor -->> Retrospective funding pool: awards HyperCert
    Retrospective funding pool -->> Funder 1: transfers fraction of HyperCert
    Retrospective funding pool -->> Funder 2: transfers fraction of HyperCert
    
```
## HyperCerts with pro- and retroactive funding
Contributors can't always bootstrap their project without initial funding. When prospective funders are needd, HyperCerts make it easy to track their funding and its impacts. 

In some cases the retrospective funder can also reward the prospective funder for making this project happen.

```mermaid
sequenceDiagram
    participant Contributor
    participant Prospective Funder
    participant Retrospective Funder
    Note over Contributor: creates work plan
    Prospective Funder ->> Contributor: awards funding
    Note over Contributor: mints HyperCert
    Contributor -->> Prospective Funder: awards fractions of the HyperCert
    Note over Contributor: Uses funding to create public good
    Note over Retrospective Funder: evaluates impact of public good
    Retrospective Funder ->> Contributor: awards funding
    Contributor -->> Retrospective Funder: awards fractions of the HyperCert
    Note left of Contributor: Optional step:
    Retrospective Funder ->> Prospective Funder: awards funding
    Prospective Funder -->> Retrospective Funder: transfers fractions of HyperCert
```