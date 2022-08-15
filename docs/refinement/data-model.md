# Data Model

## Hypercert v0.1

Every hypercert is an impact claim defined in a hyperspace with the following dimensions:

- Time interval of work: Start and end date of work, both can be in the past or future
- Scope of work: Description of the work that produced or will produce impact
- Time interval of impact: Start and end date of the impact that is included, both can be in the past or future
- Scope of impact: Description of the impact that has been or will be produced by the work. This dimension is can be described by multiple fields:
  - Description of impact: Text to describe the impact
  - Impact variables: Sets of variable types (string), values (string or decimal), able to aggregate (boolean), optional maximal value (decimal) and optional display type, e.g. {“CO2e stored in tons”, 500, true}. These can be implemented analogous to attributes in the OpenSea metadata recommendations.
- Set of creators: Addresses of all individual creators who contributed to the work
- Types of rights: Description of rights that the owners of the hypercerts have, e.g. the right to publicly display or IP rights

Below we provide some examples of the data provided to the hypercert minter. See the segment on [metadata](#hypercert-metadata-v0.1) on how to provide additional data on your impact.

### Tree planting

A project for planting trees called `Save the trees` has `bought land` in `Spain` and worked `100 hours` between `1 august 2021` and `31 december 2021`. Under the assumption that the trees prosper from now until eternity, the impact is from `1 january 2022` to `the distant future`. During the project `volunteers` were enrolled, `financial support` was raised, `material support` was provided, and `referrals` were recruited

```json
{
    "creators": ["ethAddress1", "ethAddress2", ...],
    "work_scope": ["Tree-planting", "Spain", "volunteer labor", "financial support", "material support", "referrals"],
    "work_time": [1627776000,1640995199],
    "impact_scope": "any",
    "impact_time": [1640995200, 0],
    "rights": "...",
    "uri": "ipfs://bafkreia53j3ykwrce5qcu2ywfpulmv5ckuhlflfwhak62ecmranculbzeu"
}
```

### June 2022 Funding the Commons event

Funding the Commons is an event series that explores novel funding mechanisms for the commons and public goods. Recently, a two-day summit was held from `June 24-25, 2022`, in `NYC` for `individuals` and organizations building new funding models and working to improve value alignment in open source networks. The event was organised from `January 1st 2022` untill the event was wrapped up `end of June`. We estimate that impact from the event is highest in the `following six months`.

```json
{
  "creators": ["daoAddress"],
  "work_scope": ["Event", "Funding the Commons", "FundingTheCommons/Jun'22"],
  "work_time": [1640995200, 1656633599],
  "impact_scope": "any",
  "impact_time": [1656633600, 1672531199],
  "rights": "...",
  "uri": "ipfs://bafkreia53j3ykwrce5qcu2ywfpulmv5ckuhlflfwhak62ecmranculbzeu"
}
```

### Clean an oceanic garbage patch

During the last `four years` `CleanOceanDAO` coordinated actions and resources for removing plastic `pollution` from the `ocean`. The DAO provided `financial support`.

```json
{
  "creators": ["daoAddress"],
  "work_scope": ["Pollution", "Ocean", "financial support"],
  "work_time": [1534291200, 1660607999],
  "impact_scope": "any",
  "impact_time": [1534291200, 0],
  "rights": "...",
  "uri": "ipfs://bafkreia53j3ykwrce5qcu2ywfpulmv5ckuhlflfwhak62ecmranculbzeu"
}
```

### Provide social housing to a certain set of tenants over a period of time

Groups of volunteers provided `housing` for a group of `refugees` for the course of a `month`.

```json
{
  "creators": ["daoAddress"],
  "work_scope": ["Community", "Refugee", "material support"],
  "work_time": [1593561600, 1596239999],
  "impact_scope": "any",
  "impact_time": [1593561600, 1596239999],
  "rights": "...",
  "uri": "ipfs://bafkreia53j3ykwrce5qcu2ywfpulmv5ckuhlflfwhak62ecmranculbzeu"
}
```

## Hypercert metadata v0.1

The metadata is to be provided as a JSON stored on IPFS. The metadata must at least match the minimal spec based on [EIP1155 specification](https://eips.ethereum.org/EIPS/eip-1155#metadata), but additional fields can be added when required. We recommend using the `refs` field to linking to external resources.

Minimum:

```json
{
  "name": "demo impact",
  "image": "ipfs://QmbWqxBEKC3P8tqsKc98xmWNzrzDtRLMiMPL8wBuTGsMnR",
  "format_version": 0.1,
  "description": "built code v0.0.1"
}
```

Expanded:

```json
{
  "name": "demo impact",
  "image": "ipfs://QmbWqxBEKC3P8tqsKc98xmWNzrzDtRLMiMPL8wBuTGsMnR",
  "external_link": "http://example.com",
  "format_version": 0.1,
  "description": "built code v0.0.1",
  "prev_hypercert": "2mbWqxBEKC3P8tqsKc98xmWNzrzDtRLMiMPL8wBuTGsMnR",
  "refs": [
    "http://ipfsconference.com/impact",
    "https://researcgate.net/paper.pdf"
  ]
}
```

## Evaluation

_Placeholder_
