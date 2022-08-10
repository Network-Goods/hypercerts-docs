# 2022-08-09 on Technical & Feature Scope

## Participants
* @reasn
* @bitbecker
* @holkeb
* more (please add yourself if you consent to being mentioned)

## Conversation
* Update from the previous call
* Open discussion with the [Minting Flow Chart](https://hackmd.io/e3WhpdP8R1eOWgPDspfXVQ?both=#Minting) as starting point
* Do we validate the input?
  * ❗️Only the format / syntactically for now.
* What’s the relation between HyperCert and Collection?
  * ❗️Collections point to HyperCerts, not the other way round: Owners of collections fully control what HyperCerts belong to them.
  * ❗️ The sole purpose of a collection, for now, is curation.
* Can HyperCerts link each other to indicate that their impact is built on top of each other?
  * ❗️Later, it’s post-v0.
* What’s the purpose of an impact claim without a HyperCert?
  * ❗️We consider impact claims to be fully equivalent to HyperCerts. We now merge the terms and deprecate use of “impact claim”, i.e. only speak of HyperCerts
* How do we avoid overlapping HyperCerts (double accounting of impact)?
  * ❗️ Early on we solve it by creating a trusted collection. Later, trusted entities can approve that there’s no overlap. We keep this approval out of the HyperCerts for v0, trusting that we can upgrade later.
  * ❗️ We might use the project’s website as a source of trust later
Post-v0 we have to find scalable ways to avoid duplicates
* Do we support a royalty flow?
* What’s the process for upgrading a HyperCert?
