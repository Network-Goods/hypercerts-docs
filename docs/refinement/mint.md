# Minting
- single creator
- user supplies [hypercert metadata](https://hackmd.io/e3WhpdP8R1eOWgPDspfXVQ?both=#Hypercert-v01) in app

```mermaid
    sequenceDiagram
        participant Creator
        participant App
        participant IPFS
        participant Contract
        Creator->>App: Submit impact claim information
        note over App: Validate input
        App-->>Creator: Data valid (mint button active)
        Creator->>App: Mint impact claim
        App->>IPFS: Store impact claim data
        IPFS-->>App: Return CID
        App->>Contract: Mint hypercert token
        note over Contract: Check mapping(creator => hypercerts[]) for overlap creator-hypercert
        note over Contract: set royalties for creator(s) according to royalties[]
        Contract-->>App: Hypercert token minted
        App->>Creator: Display NFT
```