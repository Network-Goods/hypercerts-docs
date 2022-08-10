# 2022-08-09 on Architecture and Use Cases

## Participants
* @davidad
* @bitbecker
* @reasn

## Conversation 
* Is v0 an independent experiment or an upgradable first version of the successor version?
  * ❗️ @davidad: All structured data that defines the HyperCert (the 6 dimensions) should be stored on chain
  * ❗️ @davidad: Additional (possibly unstructured) data that may be used for validation may be stored on IPFS
* How do we harmonize structured data?
  * ❗️ @davidad: every dimension of a HyperCert should be well-defined (integers / list of strings). New values for e.g. scope of impact can be added in a decentralized fashion (by paying for the gas).
* Concern: "There will be scopes of impact like 'Trees planted by Greenpeace Project 1337 in Uganda in Kenya 2023"', essentially 
* Are there comprehensive example (sets of) HyperCerts?
  * ❗️ We'll come up with them until (see Action Items).
* Is there the notion of a project in HyperCerts? How does it relate to contributors? What does it look like?
  * ❗️ @davidad: HyperCerts should be agnostic to who controls the contributor, i.e. a team or project can team up to mint HyperCerts. *TODO Something with Gnosis and multisig that @reasn didn't get*
* Does v0 contain any technical safeguards against overlapping HyperCerts?
  * ❗️ @davidad: Yes, with the exception of a minter creating a new value in one of the symbol dimensions (scope of work, scope of impact, rights)
  * ❗️ To avoid overlapping or duplicates of scope codes, evaluators could report that they do overlap (tbd: everytime + everywhere or for a single contributor/project?)
* How does it work when an evaluator assesses only a fraction of the intended impact?
  * ❗️
* If 100 Does the HyperCert contain the amount of impact (e.g. )
* When evaluating a subsection of the hyperspace, do evaluators' evaluations reference a subset of the contributors space, i.e. does the evaluation say who did the contributions?
  * ❗️ Yes, which implies that whenever an evaluation covers impact created by multiple contributors, these have to merge their claims/HyperCerts into a single HyperCert to claim their impact. Only after can they split the HyperCert further.
* Do we support a royalty flow (from [2022-08-09 on Technical & Feature Scope](2022_09_09_tech_and_feat_scope))?
  * ❗️ If we can upgrade and add royalty support post-v0, let's skip it for now
* How do we keep upgrades to future HyperCert versions deterministic?
  * ❗️ @reasn It might make sense to version symbol dimensions (scope of work, scope of impact, rights) to cover cases where we can't deterministically map while upgrading. That would solve cases where retroactivally increase the granularity of symbol dimensions (which is not necessarily [mece](https://en.wikipedia.org/wiki/MECE_principle))
* On a contract level, is there a difference between a burn and a donate?
  * ❗️ @davidad How I imagine it: No
* Just to double-check: Part of the request for evaluation will be the contributors for which work and impact are assessed, right?
  * ❗️ @davidad Yes, if 100 people plant trees for a week, evaluators could either attest to the group of 100 people having had that impact or create 100 individuals evaluations. Disadvantage of the latter: gas prices.

## Action Items
- [ ] @reasn Schedule session to come up with example HyperCerts for Monday
- [ ] @bitbecker Double-check if we can later add royalty support via upgrade.