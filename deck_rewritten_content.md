# Cybersecurity & Resiliency — Rewritten Content

> **Legend:** Slides marked with 📊 require a diagram or visual. A description of the needed visual is provided.

---

## Section 1: Setting the Stage

---

### Slide 1 — Cybersecurity and Resilience Is Not Just a Compliance Endeavour

> 📊 **DIAGRAM:** Title card. Use the existing title slide design.

---

### Slide 2 — Accountability Is Layered

Cybersecurity is not the sole domain of IT teams. It is a shared responsibility that spans every level of government leadership — from political office holders accountable for the public's trust in government's overall cybersecurity posture, to Permanent Secretaries and Heads of Agency who bear responsibility for everything under their ministry, to the IDSC Chair who accepts risk for all systems, to business owners on the ground who must ensure their divisions operate securely.

CIOs and CISOs serve a critical supporting function: enabling divisions to deliver their missions through secure digital means. But the weight of accountability does not begin — or end — with them.

> 📊 **DIAGRAM: Cybersecurity Accountability Hierarchy.** A vertical hierarchy showing layered responsibility: Political Office Holders (top) → PS & Head of Agency → IDSC Chair → Business Owners (multiple) → CIO and CISO teams (supporting role). Each level annotated with its scope of accountability as described above.

---

### Slide 3 — The Cybersecurity Triad

Every cybersecurity decision revolves around three pillars: **Confidentiality**, **Integrity**, and **Availability** — the CIA Triad.

**Confidentiality** ensures that sensitive information remains accessible only to those authorised to see it. **Integrity** guarantees that data has not been tampered with — that what appears on screen is accurate and trustworthy. **Availability** ensures that systems and data remain accessible when needed, resilient against downtime and disruption.

These three pillars do not exist in isolation. They intersect with **trustworthiness**, **resilience**, and **privacy** — together forming the foundation upon which secure government operations are built.

> 📊 **DIAGRAM: The CIA Triad.** Keep the existing triad diagram — three interconnected nodes (Confidentiality, Integrity, Availability) with Trustworthiness, Resilience, and Privacy as adjacent concepts.

---

### Slide 4 — Resilience Is Vital

Cybersecurity keeps threats at bay. Resilience ensures the government can keep operating even when those defences are breached.

The distinction matters. Many government services are now delivered digitally, and citizens and businesses expect them to work — reliably, around the clock. Resilience goes beyond deploying security controls. It encompasses business continuity planning, disaster recovery, and the ability to restore services quickly when disruptions inevitably occur.

Cybersecurity and resilience are two sides of the same coin: one prevents incidents, the other ensures they do not become catastrophes.

> 📊 **DIAGRAM:** Keep the existing visual from original slide 4 — digital services imagery reinforcing the message that modern services depend on resilient infrastructure.

---

### Slide 5 — A Framework for Understanding Threats

Not all cyber threats are created equal. To make sense of the landscape, it helps to categorise them by how preventable they are — and who is behind them.

At the base of the threat pyramid sit **hacktivists and script kiddies** — actors whose attacks are largely **preventable** through basic security hygiene. One level up, **cybercriminals and lower-tier APTs** pose threats that are **largely preventable** with reasonable investment and good practice. At the apex, **top-tier Advanced Persistent Threats (APTs)** — typically state-sponsored — execute attacks that are **difficult to prevent** even with mature security programmes.

Global spending on cybersecurity continues to climb. Yet breaches are growing in tandem — in 2023, organisations in the Asia-Pacific region faced an average of 2,046 cyberattacks per week, a 22% increase from the previous year. Singapore, as a wealthy nation with advanced digital infrastructure and significant intellectual property, is a particularly attractive target.

The framework that follows examines each of these three categories — and what can be done about them.

> 📊 **DIAGRAM: Threat Pyramid / 3-Bucket Framework.** A pyramid with three tiers mapping preventability to threat actors: Bottom: Hacktivists / Script Kiddies → "Preventable". Middle: Cybercriminals / Lower-tier APTs → "Largely Preventable". Top: Top-tier APTs → "Difficult to Prevent". Annotate with an arrow showing increasing sophistication on the left.

---

## Section 2: Preventable Threats

---

### Slide 6 — Chapter 1: Preventable

> 📊 **DIAGRAM:** Section divider card. Title: "Chapter 1: Preventable" with subtitle "DDoS | Inadequate planning | Misconfiguration". Visual treatment consistent with other chapter cards.

---

### Slide 7 — How DDoS Attacks Overwhelm

A server, at its core, is a machine with finite capacity. Under normal conditions, it handles thousands of users without incident. A Distributed Denial-of-Service (DDoS) attack changes that equation — flooding the server with so many requests that it simply cannot keep up. Services slow to a crawl, then go dark entirely.

DDoS attacks operate at two distinct layers. At the **network layer**, botnets — vast networks of compromised devices — open millions of simultaneous connections, exhausting the server's networking resources. No data is exchanged; the sheer volume of connections is enough. At the **application layer**, the attack is subtler but often more damaging. Botnets send legitimate-looking transaction requests — page loads, form submissions, database queries — forcing the server to perform actual work for each one. CPU, memory, and database connections are drained until the application collapses under the load.

The end result is identical: services go offline, and legitimate users are locked out.

> 📊 **DIAGRAM: DDoS — Network vs Application Layer (side-by-side).** Left half: "Network Layer" — botnet sending one-way arrows (connection floods) to servers. Right half: "Application Layer" — botnet sending two-way arrows (transaction floods) to servers. Both sides show overwhelmed servers. Shared label at bottom: "Both overwhelm your servers, but at different layers." The user/legitimate traffic is shown being blocked in both scenarios.

---

### Slide 8 — An Attack Anyone Can Buy

What makes DDoS attacks especially dangerous is their accessibility. "DDoS-as-a-Service" platforms have turned cyberattacks into a commodity — available to anyone with a few euros and an internet connection. Online vendors sell tiered pricing plans, some starting as low as **€5 per month** for basic DDoS services.

The barrier to entry has never been lower. A disgruntled individual, a politically motivated group, or a minor criminal can now launch an attack that brings down a government service — with no technical expertise required.

> 📊 **DIAGRAM:** Keep the existing screenshot of the DDoS-as-a-Service pricing page from the original deck. This real-world evidence is more impactful than an illustration.

---

### Slide 9 — Defences That Work

The good news: defending against DDoS is neither expensive nor complex.

**DDoS Protection Services**, typically bundled with Content Delivery Networks (CDNs) such as Cloudflare and Akamai, act as a shield between attackers and servers. When attack traffic arrives, the service filters out malicious requests and forwards only legitimate traffic. Servers never see the attack. As an added benefit, CDNs distribute content across geographically dispersed servers, improving both performance and resilience during traffic spikes.

Behind the CDN, **firewalls** provide a second line of defence — limiting the system's attack surface by whitelisting authorised traffic and potentially blocking malicious outbound communications. Together, these two layers form a cost-effective, battle-tested defence architecture.

> 📊 **DIAGRAM: Defence Architecture.** A left-to-right flow diagram: Botnet (left) → attack traffic → DDoS Protection / CDN shield (middle, filtering traffic) → Firewall → Servers (right). Legitimate user traffic shown flowing through the full chain unimpeded. Malicious traffic shown being blocked at the CDN layer.

---

### Slide 10 — Not Every Service Outage Begins with an Attacker

A significant share of disruptions stem from **inadequate planning**, **misconfigurations**, and **human errors**. A digital certificate expires because no one was tracking the renewal date — or it was wrongly tracked as not requiring renewal. Traffic limits sit on default settings, quietly inadequate until a surge hits. A failover plan exists on paper but has never been tested. A deployment goes live without proper checks. None of these require a sophisticated adversary — yet each can bring down critical services just as effectively as a cyberattack.

---

### Slide 11 — Takeaway #1: Get the Operational Basics Right

These disruptions are preventable — and the measures are neither complex nor expensive:

- **Deploy DDoS Protection Services and firewalls** for all public-facing systems. The most common external threat has a well-proven, cost-effective defence.
- **Build processes that reduce human error.** Checklists, peer reviews, automated safeguards, and change management controls catch mistakes before they reach production.
- **Monitor and maintain.** Track certificate renewals, review default configurations, and ensure that operational hygiene does not slip between audits.

---

## Section 3: Largely Preventable

---

### Slide 12 — Chapter 2: Largely Preventable

> 📊 **DIAGRAM:** Section divider card. Title: "Chapter 2: Largely Preventable" with subtitle "Cybercriminals | Complex systems". Visual treatment consistent with other chapter cards.

---

### Slide 13 — Cybercriminals and the Ransomware Economy

One tier above hacktivists sit **cybercriminals and lower-tier APTs** — more methodical attackers who exploit poor cyber hygiene for financial gain. Their weapon of choice is ransomware: malicious software that encrypts an organisation's data, rendering it inaccessible until a ransom is paid.

The playbook is well-established. Attackers scan for unpatched systems, weak or default passwords, and environments lacking multi-factor authentication. Once inside, they deploy ransomware, lock critical files, and issue a demand — often in cryptocurrency, to avoid tracing. Some groups now operate "double extortion" schemes, threatening to leak stolen data publicly if payment is not made.

These attacks are more sophisticated than basic DDoS, but they remain **largely preventable**. The vulnerabilities they exploit are known. The defences are proven. What is often lacking is the discipline to implement them consistently.

> 📊 **DIAGRAM: Attacker Sophistication Pyramid.** Same pyramid from Slide 5, but with the middle tier (Cybercriminals / Lower-tier APTs) highlighted. Annotate with: "Typically financially motivated. Common modus operandi: ransomware deployment on vulnerable systems."

---

### Slide 14 — Overly Complex System Designs

Overly complex system designs are another source of largely preventable disruptions. Unknown dependencies and tangled architectures create conditions where unexpected failures cascade in ways that no one predicted — including the teams managing them.

The remedy begins with **designing systems for simplicity** — fewer moving parts mean fewer points of failure and better visibility. But simplicity is not always possible. Some systems are inherently complex because the mission demands it. In those cases, **outcome-based security thinking** becomes even more critical. A compliance checklist will confirm that baseline requirements have been ticked off — but it will not reveal the hidden dependency that triggers a cascading failure at 2 a.m. Secure architecting and VAPT will. They stress-test the system as it actually operates, uncovering the vulnerabilities that only surface under real-world conditions.

Where complexity cannot be reduced, it must be rigorously tested. The difference is not semantic — it is the difference between a system that looks secure on paper and one that withstands a real incident.

> 📊 **DIAGRAM: Compliance vs Outcome-based Mindset.** Two-column comparison. Left: "Compliance-Based" — checklist icon, caption "Verifies baseline requirements are implemented." Right: "Outcome-Based" — hands-on testing icon, caption "Prevents design flaws and discovers implementation-specific vulnerabilities through Secure Architecting and VAPT."

---

### Slide 15 — Vendor Risk Is Your Risk

Cybercriminals do not always attack their target directly. Increasingly, they reach organisations through the **supply chain** — breaching a vendor with weaker defences to gain access to the ultimate target's data and systems. Outsourcing IT infrastructure, cloud services, or data processing does not outsource accountability. When a vendor is breached, it is the client's data that is compromised, the client's customers who are affected, and the client's reputation that suffers.

Organisations must be aware of their exposure — data, services, infrastructure — and recognise the residual risk that vendors introduce. Two concrete actions can help:

- **Develop contingency plans** for scenarios in which vendors are compromised. What data do they hold? What services do they provide? What happens if they go offline for a day — or a week?
- **Embed security requirements into contracts** from day one — including annual Vulnerability Assessment and Penetration Testing (VAPT), incident notification timelines, and minimum security certifications.

Vendor risk cannot be eliminated. But it can — and must — be consciously managed.

---

### Slide 16 — Plan for Continuity and Quick Recovery

When things go wrong — and they will — the question is whether the organisation can keep its services running. Non-digital fallback plans can be just as effective as their digital counterparts.

During election polling, officials pivoted to **manual processing** using hardcopy polling station registers when digital systems were unavailable. When immigration clearance systems went down, ICA staff maintained **low-tech alternatives** — using iPads to keep queues moving rather than shutting down border clearance entirely.

These are not improvised workarounds. They are deliberate, rehearsed contingency measures that ensure service delivery continues even when digital systems do not. Every organisation should ask: what are our essential services, and do we have a tested plan to maintain them without our primary systems?

---

### Slide 17 — Takeaway #2: Make Smarter Strategic Choices

The threats in this category demand more than operational hygiene — they require deliberate strategic decisions:

- **Be conscious of vendor risk exposure.** When outsourcing, be aware of your exposure — data, services, infrastructure — and recognise the residual risk of vendors getting hacked.
- **Design for simplicity.** Simpler systems are more secure, more resilient, and easier to test.
- **Conduct VAPT** on both internal and vendor systems that handle sensitive data. Test whether controls actually hold up — not just whether they exist.
- **Plan for continuity with non-digital fallbacks.** When digital systems fail, manual processes and low-tech alternatives keep services running. These must be deliberate, documented, and regularly rehearsed.

---

## Section 4: Difficult to Prevent

---

### Slide 18 — Chapter 3: Difficult to Prevent

> 📊 **DIAGRAM:** Section divider card. Title: "Chapter 3: Difficult to Prevent" with subtitle "Top-tier APTs | Cloud service outages". Visual treatment consistent with other chapter cards.

---

### Slide 19 — Advanced Persistent Threats

At the apex of the threat pyramid sit **Advanced Persistent Threats** — typically state-sponsored actors or highly sophisticated criminal groups with the resources, patience, and expertise to compromise even the most well-defended networks.

They are called "persistent" for a reason. If one attack vector fails, they try another. They may spend months — sometimes years — inside a network before executing their objectives. Their toolkit includes zero-day vulnerabilities unknown to software vendors, custom-built malware, sophisticated social engineering, and dedicated infrastructure.

Unlike cybercriminals motivated by financial gain, top-tier APTs pursue **strategic intelligence objectives**. They are not opportunistic. They are surgical.

> 📊 **DIAGRAM: Threat Pyramid.** Same pyramid from Slide 5, now with the top tier (Top-tier APTs) highlighted. Annotate with: "State-sponsored actors with resources to target most Internet-connected systems. Attacks are unpreventable but mitigable."

---

### Slide 20 — Even Big Tech Falls

If any organisation should be able to defend against sophisticated cyber threats, it is Microsoft — a company that spends billions on security and employs thousands of cybersecurity professionals.

Yet in 2023, a China-based threat actor tracked as **APT Storm-0558** (now known as Antique Typhoon) successfully breached Microsoft's defences and gained unauthorised access to email accounts across approximately **25 organisations**, including government agencies and related consumer accounts in the public cloud.

The breach was a stark reminder: no organisation — regardless of its resources — is immune.

---

### Slide 21 — Capabilities That Bypass Every Defence

Top-tier APTs possess the resources to develop or acquire **zero-day exploits** — attacks that target vulnerabilities unknown to the software vendor. There is no patch, because no one knows the flaw exists.

Some of these exploits require **no user interaction at all**. No phishing email to click, no malicious link to follow. The attack executes silently, invisibly, and with devastating effect.

These "cyber weapons" are also sold on black markets, making them accessible to any state actor willing to pay the price. And that price is steep — which brings an important implication.

> 📊 **DIAGRAM: Zero-Day Exploit Flow.** A visual showing: Vulnerability (unknown to vendor) → Exploit (requires no user interaction) → Access gained. Annotate with: "Cyber weapons are often sold on black markets" and "Attack is unpreventable because the vulnerability is unknown."

---

### Slide 22 — APTs Pick Their Targets Carefully

Zero-day exploits are extraordinarily expensive. Top-tier APTs are **ROI-sensitive** — they will only deploy these rare, costly tools against targets worth the investment.

Their objectives typically fall into two categories:

- **Secrets** — intelligence related to national security, defence, sovereignty, and critical negotiations.
- **Disruptions** — seizing control of Critical Information Infrastructures (CIIs) to destabilise essential services.

For most organisations, this is paradoxically reassuring: the cost of a top-tier attack means most will not be targeted. But for those that hold genuinely sensitive information or operate critical infrastructure, the implication is clear — the question is not *if* but *when*.

---

### Slide 23 — Air-Gap What Truly Matters

For information that is truly secret, one of the most effective protections remains the simplest in concept: **air-gapping**. A network that is physically isolated from the internet cannot be remotely hacked — at least, not through conventional means.

But air-gapped networks are costly to build and maintain, and they impose significant constraints on accessibility and workflow. Their use must be judicious. The starting point is a clear-eyed assessment: **what information is genuinely secret, and what is merely sensitive?** Not everything warrants the operational overhead of an air-gapped environment.

> 📊 **DIAGRAM: Decide What Is Truly Secret.** A simple two-zone visual divided by a clear barrier. Left zone: a document/folder icon stamped "TOP SECRET" sitting inside an air-gapped boundary (no connections going out). Right zone: a stack of documents labelled "Regular Information." The dividing line is the key visual element — emphasising the deliberate decision of what goes where.

---

### Slide 24 — When the Problem Is Beyond Your Control

Some disruptions defy even the most diligent preparation — because they originate from the very providers organisations depend upon.

In February 2023, **Microsoft's Azure** data centre experienced a cascading power supply failure. Mitigation measures failed in sequence, causing widespread infrastructure outages affecting organisations globally. In July 2024, **CrowdStrike** pushed a faulty system update that was automatically rolled out worldwide, crashing millions of devices and bringing entire industries — from airlines to hospitals — to a standstill.

Neither incident involved a cyberattack. Both caused disruptions on a scale that most organisations had not planned for. When the infrastructure beneath the infrastructure fails, the only preparation that matters is a well-rehearsed continuity plan.

---

### Slide 25 — Takeaway #3: APT Attacks and Cloud Outages Are Difficult to Prevent

Top-tier APTs and cloud service failures represent threats that cannot be fully neutralised through technical controls alone.

- **Air-gapped networks** can reduce exposure to external attackers for genuinely secret information — but they are costly and must be used judiciously.
- **Business Continuity Plans** are not optional luxuries. Critical systems need well-planned, regularly rehearsed, **non-digital** service recovery procedures — because when IT systems fail, digital BCPs fail with them.

The goal is not to prevent the unpreventable. It is to ensure that when disruption arrives, the organisation can continue operating.

---

## Section 5: Mindset Shifts

---

### Slide 26 — Three Mindset Shifts for Better Cybersecurity

Beyond technical controls and operational procedures, improving cybersecurity and resilience requires a shift in how leaders think about risk. Three mindset shifts can fundamentally change an organisation's posture:

1. **Make deliberate and upfront trade-offs** — and commit to them.
2. **Move from compliance to outcomes** — stop ticking boxes, start testing assumptions.
3. **Assume breach. Assume fail.** — plan for the world where defences have already been penetrated.

---

### Slide 27 — Shift #1: The Trade-off Trilemma

Every cybersecurity decision involves a tension between three competing goals: **Security and Resilience**, **Cost Savings**, and **Usability**.

Maximising all three simultaneously is not possible. Stronger security typically demands higher costs and may constrain user convenience. Greater usability and functionality require trade-offs in either security or budget — often both.

For systems handling highly confidential data, security must take precedence. For services where availability is paramount — where downtime has systemic impact on citizens — resilience investments are non-negotiable, even at the expense of cost efficiency.

The critical task for leaders is to **make these trade-offs consciously** rather than allowing them to be made by default.

> 📊 **DIAGRAM: The Trade-off Trilemma.** A triangle with three nodes: Security/Resilience (top), Cost Savings (bottom-left), Usability (bottom-right). Labelled "Trade-off Trilemma" in the centre. Annotate with arrows or callouts showing the tension: "Higher security = higher cost", "More usability = potentially lower resilience", etc.

---

### Slide 28 — Stick to Your Trade-offs

In practice, many organisations start with strong security intent. Requirements are set, controls are designed, trade-offs are made. But then the pressure mounts. Users complain. Stakeholders push for exceptions. Deadlines force shortcuts. Gradually, security measures are loosened — and the organisation ends up in a worst-case position: **neither a great user experience nor strong security.**

This happens when trade-offs are not made **consciously and documented upfront**. Without a clear record of *why* a decision was made, every complaint becomes an opportunity to second-guess it.

The discipline is straightforward: make the trade-off, document the rationale, and commit. If circumstances change, revisit the decision deliberately — not reactively.

---

### Slide 29 — The Exponential Cost of Over-Insuring

The relationship between prevention and cost is not linear — it is exponential. Defending against the most common threats is relatively affordable. But as organisations attempt to guard against increasingly rare and sophisticated failures, costs escalate dramatically.

For example, achieving resilience against a single cloud provider's outage might require a multi-cloud architecture — effectively doubling or tripling infrastructure costs. Guarding against failures that are near-impossible to prevent can demand 2× to 10× the investment.

There is also a common misconception that on-premises infrastructure is inherently more resilient than cloud. It is not. On-premises systems carry their own failure modes, maintenance burdens, and cost structures.

The lesson for leaders: **"100% prevention" is not a viable strategy.** At some point, additional spending yields diminishing returns. The goal is not to eliminate all risk, but to invest proportionally — spending the most on threats that are both likely and impactful, and accepting residual risk for the rest.

> 📊 **DIAGRAM: Cost vs Preventability Curve.** An exponential curve graph. X-axis: "Preventability of an error" (from "Could be prevented" to "Almost impossible to prevent"). Y-axis: "Cost + Complexity." The curve rises sharply as it approaches the right side. Annotate: "Costs increase exponentially" at the steep portion. Optional callout: "Multi-cloud = 2×–10× cost."

---

### Slide 30 — Crown Jewels Exercise

**Take 10 minutes** to consider two questions:

1. **What are your organisation's "crown jewels"** — the most critical assets, data, and systems? Not everything is equally important. What would cause the greatest harm if it were compromised or became unavailable?

2. **What support would help you better manage these trade-offs?** More budget? Better tools? Executive support to push back on exception requests? Additional training for your team?

> 📊 **DIAGRAM: Trade-off Trilemma (repeated).** Show the trilemma diagram again alongside the two exercise questions. This provides a visual anchor for participants to reference during the exercise.

---

### Slide 31 — Shift #2: From Compliance to Outcomes

Too many senior leaders still treat cybersecurity and resilience as a **compliance issue** — a set of boxes to be ticked for auditors and regulators — rather than a **strategic outcome** to be achieved.

Compliance frameworks have their place. They establish baseline controls and provide structure. But relying on them alone is insufficient, for two reasons: there is no one-size-fits-all standard — systems vary enormously in setup and risk profile — and more controls do not automatically mean more security. An organisation with dozens of poorly implemented controls may be less secure than one with a handful of well-implemented ones.

The shift requires moving from a checklist mentality to a **risk-based, outcomes-driven approach** — one that prioritises based on risk and verifies through real-world testing. Put simply: **risk-based is deciding where to invest; outcomes-based is deciding how to verify.**

1. **Understand the risk.** What data or services does the system handle? What is the impact if it is compromised? This determines where to focus.
2. **Design mitigations.** Based on identified risks, determine which controls are appropriate — not from a template, but from analysis of the specific system.
3. **Test for outcomes.** Do not merely verify that controls are configured — test whether they actually achieve their intended effect. Can monitoring detect an attack? Would a backup restore successfully? Does the incident response plan hold up under pressure?

The first two steps are **risk-based** — they ensure effort goes where it matters most. The third step is **outcomes-based** — it proves that the controls work, not just that they exist. Together, they replace the false assurance of compliance with genuine confidence.

> 📊 **DIAGRAM: Risk-Based Cycle.** A circular three-step diagram: 1. Understand the Risk → 2. Design Mitigations → 3. Perform Outcomes-based Testing → (loops back to 1). Centre label: "Risk-Based Approach."

---

### Slide 32 — Shift #3: Assume Breach. Assume Fail.

The third mindset shift is the most uncomfortable — and perhaps the most important: **plan for the possibility that your defences have already been breached**, and that your resilience measures will eventually fail.

**"Assume breach. Assume fail."** is a single operating principle: accept that no defence is impenetrable and no system is infallible. This changes everything — from how organisations monitor to how they plan.

On the monitoring side, traditional Security Operations Centres (SOCs) operate like castle guards — watching for known indicators, matching signatures, and flagging recognised threats. This is necessary, but if the attacker is already inside the walls, guards at the gate will not find them. **Threat hunting** operates on the assumption that a breach has already occurred. Rather than waiting for alerts, threat hunters proactively search for anomalies based on their understanding of attacker behaviour — looking for intruders that automated detection has missed entirely.

SOCs provide the baseline. Threat hunting provides the edge. Together, they reflect the reality that prevention alone is not enough — organisations must also be prepared to find, contain, and recover from threats that have already breached the perimeter.

> 📊 **DIAGRAM: SOC vs Threat Hunting.** Two-column comparison. Left: "SOC — Castle Guards" — icon of guards at a gate, bullet points: "Rely on known indicators", "Signature-based detection", "New threats may slip through." Right: "Threat Hunting — Hunters" — icon of a hunter/scout, bullet points: "Proactively search for threats", "Hypothesis-driven", "Detect unknown threats."

---

### Slide 33 — The Restaurant That Never Closes

How does "assume breach, assume fail" look like for resilience?

Consider a restaurant. Preventing a kitchen fire requires fire-safe equipment, proper electrical systems, and trained staff. That is the equivalent of cybersecurity controls — preventing incidents from occurring. But if we assume things will go wrong, prevention is not enough. Fire alarms detect problems early. Sprinklers limit damage. Auto-unlocking doors ensure safe evacuation. A backup stove allows cooking to resume. These are the detection, response, and recovery capabilities that keep the restaurant operating even when prevention fails.

Critical government systems need the same layered approach — and critically, they need **non-digital Business Continuity Plans**. If the BCP is stored on the very systems that just failed, it is useless. Printed procedures, offline documentation, and regularly rehearsed recovery drills are not relics of an analogue age — they are the backbone of genuine resilience.

> 📊 **DIAGRAM: Restaurant Analogy.** A two-panel illustration. Left panel: "Prevention" — fire-safe equipment (cybersecurity controls). Right panel: "Resilience" — fire alarms (detection), sprinklers (response), backup stove (recovery), emergency exits (BCP). Caption: "Resilience is about keeping the service running."

---

### Slide 34 — Summary

Cybersecurity and resilience are not compliance exercises — they are strategic imperatives that require conscious decisions, tested defences, and honest assessments of what can and cannot be prevented.

**Three categories of threats** define the landscape: preventable incidents that basic hygiene can stop, largely preventable threats that demand proactive investment, and difficult-to-prevent attacks from state-sponsored actors and systemic infrastructure failures.

**Three mindset shifts** determine whether an organisation is truly prepared:

- **Make deliberate and upfront trade-offs** between security, cost, and usability — and commit to them.
- **Move from compliance to outcomes** — test whether defences work, not just whether they exist.
- **Assume breach, assume fail** — build for the world where defences have been penetrated and systems have gone down.

Perfect security is impossible. Significant improvement is within reach.

---

### Slide 35 — Thank You

---
