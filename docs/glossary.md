---
title: Glossary
id: glossary
sidebar_position: 5
---

# Glossary for Hypercerts

> 📖 **Purpose of this glossary**
> 
> Consistent terms and wording make learning faster. The systemic benefits of HyperCerts depend on its indepentend adoption by projects across the globe. A clear vocabulary makes it easier to exchange thoughts and collaboratively improve HyperCerts and the world around us.

| Term | Description | Instead of |
| -------- | -------- | -------- |
| Contributor     | The parties contributing to a unit of impact claimed by a *HyperCert*.      | ~~impact creator~~, ~~author~~    |
| Fraction     | Represents a tradeable part of a *HyperCert*. Can be split further, Fractions of the same HyperCert can be merged into a larger fraction. Fractions are implemented as [semi-fungible (EIP-3525)](https://eips.ethereum.org/EIPS/eip-3525) → *tokens*. | ~~Token~~ |
| Funder     | Any party buying *fractions* of a *HyperCert* or promising to do so (*retrospective funder*).      | ~~Donor~~ |
| Funder, retrospective     | Any party promising to buy *fractions* of a *HyperCert*.      | ~~retroactive funder~~ |
| HyperCert     | A claim in the impact space, i.e. a unique statement about work on a public good, its *contributors*, and its *impact*, constrainted in time. Hypercerts consist of 1...n *fractions*. See also [the HyperCert Ledger](ledger) br /> <br/>Under the hood, a *HyperCert* corresponds to a *slot* as defined in [EIP-3525](https://eips.ethereum.org/EIPS/eip-3525).      | ~~impact cert~~, ~~impact claim~~, ~~slot~~, ~~HyperCert~~    |
| Impact     | Not defined by the protocol but negotiated between *minters* and *funders*.      | |
| Minter     | The party minting a *HyperCert*      | ~~impact creator~~ |
| Slot     | Important implementation detail. Hypercerts are represented by slots as defined in [EIP-3525](https://eips.ethereum.org/EIPS/eip-3525). All *fractions* (tokens) assigned to the same slot form a *HyperCert*.       |  |
| Token     | Important Implementation detail. Tokens represent *fraction* and are the tradeable unit of a *HyperCert*. |  |
