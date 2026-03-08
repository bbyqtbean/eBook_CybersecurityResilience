# Cybersecurity & Resiliency Deck — Rewrite Plan

## Current State
The deck has **59 slides** (numbered 1–59, plus a "Thank You"). The structure is:

| Section | Slides | Count |
|---|---|---|
| Introduction & Context Setting | 1–10 | 10 |
| Chapter 1: Preventable (DDoS, misconfig) | 11–20 | 10 |
| Chapter 2: Largely Preventable (Cybercriminals, complexity) | 21–29 | 9 |
| Chapter 3: Difficult to Prevent (APTs, cloud outages) | 30–40 | 11 |
| Mindset Shifts (#1 Trade-offs, #2 Compliance→Outcomes, #3 Assume Breach) | 41–59 | 19 |

---

## Can we cut it by half?

**Yes — we can get to ~33 slides** (a 44% reduction) while keeping every key message and honouring the slides you want to keep separate. Here's how:

1. **The intro over-indexes on "why cybersecurity matters"** — the audience already knows this. Seven slides of global stats and news clippings can become two ("Resilience is vital" + the 3-bucket framework).
2. **DDoS explanation is too granular** — network-layer vs application-layer can be combined into one side-by-side comparison slide.
3. **The "What can we do?" interstitial slides are filler** — they just say "What can we do?" with no content. Remove them all and let the flow naturally transition.
4. **Sharepoint case study placeholder slides** are blank — they should be folded into their parent recommendation slide, not standalone.
5. **Mindset Shifts section can be tightened** — but we'll keep the Trilemma and "Stick to trade-offs" as separate slides, and keep the cost curve / "things will go wrong" as separate slides, since these are key messages for leadership.

---

## Proposed New Structure (~33 slides)

### Section 1: Setting the Stage (5 slides, down from 10)

| New # | Content | Source | Rationale |
|---|---|---|---|
| 1 | **Title slide** | Slide 1 | Keep as-is |
| 2 | **Accountability is layered** — cybersecurity hierarchy graphic showing layered responsibility from Political Office Holders down to CIO/CISO teams | Slide 2 | Keep as its own slide — the accountability message deserves standalone emphasis. |
| 3 | **The CIA Triad** — Confidentiality, Integrity, Availability | Slide 3 | Keep as its own slide — this foundational framework is referenced throughout the deck. |
| 4 | **Resilience is vital** — "Resilience is vital for the Government to maintain essential services against threats and disruptions." Use the graphic from original slide 4. This is the one slide that anchors *why* the rest of the talk matters. | Slide 4 | Keep this slide as the bridge from "what cybersecurity is" to "why resilience matters." |
| 5 | **The 3-bucket framework** — Preventable / Largely Preventable / Difficult to Prevent, mapped to Hacktivists & Script Kiddies / Cybercriminals & Lower-tier APTs / Top-tier APTs. This serves as the agenda/roadmap for the rest of the talk. | Slide 10 | Move this framework slide forward so the audience gets the roadmap early. Absorb the key stats (global investment uptrend, breach growth, Singapore headlines) as brief talking points or a small data strip on this slide. |

> [!TIP]
> **Confirming the 3-bucket framework:** Yes, this is the dual-bucket framework — the *preventability* buckets (Preventable → Largely Preventable → Difficult to Prevent) mapped against the *threat actor* buckets (Hacktivists/Script Kiddies → Cybercriminals/Lower-tier APTs → Top-tier APTs). The pyramid graphic from slide 10 captures both.

> [!NOTE]
> **What gets cut from the intro:** Slides 5 (global investment chart), 6 (breach stats table), 7 (APT trends), 8 (Singapore news headlines), and 9 (disruption timeline) are removed as standalone slides. Their key data points can be woven into the speaker's verbal delivery on slides 4–5, or shown as small supporting visuals on the "3-bucket framework" slide.

---

### Section 2: Preventable Threats (5 slides, down from 10)

| New # | Content | Source | Rationale |
|---|---|---|---|
| 6 | **Chapter card: Preventable** | Slide 11 | Keep, but make it a quick section divider, not a full slide. Could be a half-second animated transition. |
| 7 | **DDoS explained** — combine network-layer & app-layer into one visual. Show both attack vectors side by side. | Slides 12–14 | Three slides of near-identical diagrams → one side-by-side comparison. |
| 8 | **DDoS is cheap to launch** — DDoS-as-a-Service screenshot + price | Slide 15 | Keep — the €5/month stat is very memorable. |
| 9 | **Defences: CDN + Firewall** — merge DDoS protection and firewall into one "defence architecture" diagram | Slides 17–19 | Currently three slides (including the empty "What can we do?" interstitial). One diagram showing the full defence stack (CDN shield → Firewall → Server) is cleaner. |
| 10 | **Takeaway #1** + mention of planning/misconfig/human error | Slide 20 | Keep. Fold in the key point from slide 16 (disruptions from misconfig/human error) as a bullet — the case study placeholder itself is removed. |

> [!NOTE]
> **How to combine the DDoS slides (slide 7):** Use a single slide with a **left/right split layout**. Left half: "Network Layer" — botnet → one-way arrows → servers (connection flood). Right half: "Application Layer" — botnet → two-way arrows → servers (transaction flood). A shared label at the bottom: "Both overwhelm your servers, but at different layers." This preserves the teaching point while halving the real-estate.

> [!IMPORTANT]
> **Remove:** Slide 17 ("What can we do?" — blank interstitial). These add nothing and break flow.

---

### Section 3: Largely Preventable (5 slides, down from 9)

| New # | Content | Source | Rationale |
|---|---|---|---|
| 11 | **Chapter card: Largely Preventable** | Slide 21 | Keep as section divider |
| 12 | **Cybercriminals & ransomware** — the attacker pyramid + ransomware modus operandi | Slide 22 | Keep. The case study placeholder (slide 23) is removed — the transcript already describes ransomware modus operandi in enough detail to populate this slide. |
| 13 | **Vendor risk is YOUR risk** — outsourcing ≠ outsourcing accountability | Slide 26 | Keep — this is a strong, actionable message. High value. |
| 14 | **Shift from checklists to testing** — compliance-based vs outcome-based mindset, plus "design for simplicity" | Slides 24, 27 | Merge complex-systems + VAPT recommendation. Both argue for proactive design. |
| 15 | **Takeaway #2** + BCP for continuity | Slides 28–29 | Merge the BCP recommendation into the takeaway slide. |

> [!IMPORTANT]
> **Remove:** Slide 23 (ransomware case study placeholder), slide 24 (complex systems case study placeholder), and slide 25 ("What can we do?" — blank interstitial). All case study content is unavailable; the transcript provides sufficient context to cover these points on adjacent slides.

---

### Section 4: Difficult to Prevent (8 slides, down from 11)

| New # | Content | Source | Rationale |
|---|---|---|---|
| 16 | **Chapter card: Difficult to Prevent** | Slide 30 | Section divider |
| 17 | **APTs explained** — nation-state actors, persistent, well-resourced, specific intelligence objectives | Slide 31 | Keep — sets up what APTs are. |
| 18 | **Even Big Tech falls** — Microsoft as example, Storm-0558 (Antique Typhoon) targeting ~25 orgs | Slides 32–33 | Keep both slides. The Microsoft breach is a powerful "if it can happen to them..." moment, and the Storm-0558 detail provides the concrete story. |
| 19 | **APTs have capabilities to develop or acquire powerful exploits** — zero-day exploits, "cyber weapons" sold on black markets, no user interaction required | Slide 34 | Keep — this slide drives home how easy it can be for well-resourced actors to attack. The "no user interaction required" point is alarming and memorable for leaders. |
| 20 | **APTs are ROI-sensitive** — expensive exploits mean they pick high-value targets | Slide 35 | Keep — reassuring context that not everyone is a target. Merge with slide 36 (what APTs target: secrets + disruptions). |
| 21 | **Defences: air-gap secrets** | Slide 38 | Keep — clear recommendation for protecting truly secret information. |
| 22 | **Cloud outage reality** — CrowdStrike buggy update + Microsoft Azure failure. Both examples kept. | Slide 39 | Keep — shows disruptions beyond our control. Both examples are relevant. |
| 23 | **Takeaway #3** | Slide 40 | Keep |

> [!IMPORTANT]
> **Remove:** Slide 37 ("What can we do?" — blank interstitial) only. Most slides in this section are preserved as they carry weight with a senior leadership audience.

---

### Section 5: Mindset Shifts (12 slides, down from 19)

| New # | Content | Source | Rationale |
|---|---|---|---|
| 24 | **Intro: Three Mindset Shifts** | Slide 41 | Keep |
| 25 | **Shift #1: The Trade-off Trilemma** — Security/Resilience vs Cost Savings vs Usability triangle. Explain the tension, use the Confidentiality and Availability framing from the original. | Slides 42–43 | Keep as its own slide — the trilemma concept needs room to land. |
| 26 | **Stick to your trade-offs** — "We often start with security in mind, but loosen measures under pressure." Make the call upfront and commit. | Slides 44–45 | Keep as a **separate** slide from the trilemma. This is the actionable "so what" — without it, the trilemma is just a diagram. |
| 27 | **Crown Jewels Exercise** (10 min) | Slide 46 | **Keep** — interactive exercises are high value in a live setting. |
| 28 | **Shift #2: Compliance → Outcomes** — lead with the key message: *"Many senior leaders still treat cyber and resilience as a compliance issue, not a strategic outcome to achieve."* Include the 3-step risk-based cycle (Understand Risk → Design Mitigations → Perform Outcomes-based Testing) on the same slide. | Slides 47–50 | The compliance→outcomes message is critical for this audience. The 3-step cycle is merged here as the practical "how." |
| 29 | **Encourage vulnerability surfacing** | Slide 51 | Keep — important cultural message. |
| 30 | **Shift #3: Assume Breach, Assume Fail** — SOC vs Threat Hunting comparison + Red Team mention | Slides 52–54 | Three slides → one. The castle-guard vs hunter metaphor is great, keep it. Red Team is a one-liner mention, not a full slide. |
| 31 | **BCP: Non-digital fallbacks** — the restaurant analogy | Slides 55–56 | Merge. The restaurant analogy is vivid and memorable — keep it as the anchor slide for BCP. |
| 32 | **Despite our best efforts, things can & will go wrong** | Slide 57 | Keep as its own slide — this is a key message for leadership: *acknowledge imperfection.* |
| 33 | **Cost reality: exponential diminishing returns** — the cost curve graphic showing over-insuring is prohibitively expensive. On-prem is not necessarily more resilient than cloud. | Slide 58 | Keep as its own separate slide — this visual is a crucial argument for why "100% prevention" is not the goal. Senior leaders need to see this cost curve to justify risk-based spending. |
| 34 | **Summary** | Slide 59 | Keep |
| 35 | **Thank You / Q&A** | Slide 60 | Keep |

---

## Summary of Cuts

| Category | What's cut | Why |
|---|---|---|
| **Blank interstitials** ("What can we do?") | Slides 17, 25, 37 | Zero content — the speaker transition handles this naturally |
| **Case study placeholders** | Slides 16, 23, 24, 44, 50 | All 5 "Refer to sharepoint case study" slides are removed — we don't have the actual case study content, and the rewrite is self-contained using only the deck + transcript |
| **Threat landscape (intro)** | Slides 5, 6, 7, 8, 9 folded into speaker notes | Five slides of stats/news → key data points become verbal talking points over the "Resilience is vital" and "3-bucket framework" slides |
| **Granular DDoS mechanics** | Slides 12, 13, 14 → merge to 1 side-by-side comparison | Left/right split layout preserves the teaching point in one slide |
| **APT slides 35+36 merged** | Slide 35 (ROI-sensitive) absorbs slide 36 (what APTs target) | Natural flow: "they're expensive" → "so they pick high-value targets" belongs on one slide |
| **Mindset shift consolidation** | Slides 47–50 → one slide; Slides 52–54 → one slide; Slides 55–56 → one slide | Each shift is tighter but the Trilemma, "Stick to trade-offs", cost curve, and "things will go wrong" remain separate per your request |

---

## What to KEEP (non-negotiable)

These are the core messages that must survive the rewrite:

1. ✅ **Accountability is layered** — hierarchy slide (standalone)
2. ✅ **The CIA Triad** — foundational framework (standalone)
3. ✅ **Resilience is vital** — the "why" slide for the whole talk
4. ✅ **The 3-bucket framework** (Preventable / Largely Preventable / Difficult to Prevent)
5. ✅ **DDoS is cheap to launch, cheap to defend** (CDN + Firewall)
6. ✅ **Vendor risk = your risk** (outsourcing ≠ outsourcing accountability)
7. ✅ **Compliance checklists are insufficient** → outcomes-based approach (key message for senior leaders)
8. ✅ **APTs are ROI-sensitive** — they pick high-value targets
9. ✅ **APTs have powerful capabilities** — zero-days, no user interaction needed
10. ✅ **Even Big Tech (Microsoft) can fall** — Storm-0558 example
11. ✅ **Air-gap your secrets** (but understand limitations)
12. ✅ **Cloud outages** — CrowdStrike + Azure examples (both kept)
13. ✅ **The Trade-off Trilemma** (Security / Cost / Usability) — standalone
14. ✅ **Stick to your trade-offs** — standalone follow-up slide
15. ✅ **Crown Jewels Exercise** — interactive, high engagement
16. ✅ **Assume Breach, Assume Fail** — threat hunting + BCP
17. ✅ **The 3 Takeaway slides** — one per chapter
18. ✅ **Restaurant analogy** — very effective for resiliency
19. ✅ **"Things can & will go wrong"** — standalone key message for bosses
20. ✅ **Exponential cost curve** — standalone, critical argument against over-insuring
21. ✅ **Non-digital BCP** — printed copies, manual fallbacks

---

## Final Slide Count

| Section | Original | Proposed | Change |
|---|---|---|---|
| Intro | 10 | 5 | −5 |
| Chapter 1: Preventable | 10 | 5 | −5 |
| Chapter 2: Largely Preventable | 9 | 5 | −4 |
| Chapter 3: Difficult to Prevent | 11 | 8 | −3 |
| Mindset Shifts | 19 | 12 | −7 |
| **Total** | **59** | **35** | **−24** |

**That's a 41% reduction** — not quite half, but close — while keeping every key message, honouring the slides you want separate, and retaining the interactive exercise.

> [!NOTE]
> If we need to trim further to hit 50%, the best candidates would be: (a) merging slides 18–19 (Storm-0558 detail + APT capabilities) into one, and (b) absorbing "Encourage vulnerability surfacing" (slide 29) into the Shift #2 slide. That would bring us to ~33 slides (44% cut).

---

## Writing Style: National Geographic-Inspired

The current transcript is written as a **presenter script** — conversational, first-person ("Let me show you…"), with verbal cues ("So here's how…"). The rewrite shifts to a **reading format** inspired by National Geographic's editorial voice:

| Aspect | Current (Script) | Rewrite (NatGeo-style) |
|---|---|---|
| **Voice** | First-person, casual ("I want you to think about…") | Third-person, authoritative ("Organisations that fail to plan for…") |
| **Tone** | Conversational, presenter-to-audience | Narrative, journalist-to-reader — assured but accessible |
| **Structure** | Spoken flow with filler ("So, let me be clear…") | Tight prose with strong topic sentences and purposeful pacing |
| **Data** | Stats read aloud ("The numbers tell an interesting story…") | Facts woven into narrative ("In 2023, cyberattacks across Asia-Pacific surged 22%, with organisations facing an average of 2,046 attacks per week.") |
| **Engagement** | Direct address ("Ask yourself…") | Scene-setting and stakes-raising ("When a ransomware attack locked down hospital systems in Singapore, the fallback was paper and pen.") |
| **Analogies** | Explained step-by-step ("Think of guards at the gate…") | Painted vividly in one or two sentences, then moved on |

**Key principles for the rewrite:**

1. **Lead with stakes, not definitions.** Don't open a section with "What is DDoS?" — open with what happens when it hits.
2. **Show, don't tell.** Use real incidents (from the deck) as narrative anchors, not just data points.
3. **Authoritative but not academic.** Short sentences. Active voice. No jargon without immediate context.
4. **Each slide's content becomes a concise passage** — a paragraph or two, not bullet points. The reading experience should flow like a magazine article broken into sections.
5. **Preserve all technical accuracy** from the original — the style changes, not the substance.

---

## Other Recommendations

1. **Use the "3 buckets" framework as a persistent navigation element** — show a subtle progress bar at the top of each slide indicating which bucket the audience is in. Currently there's a repeated header bar but it takes up a lot of space and is visually heavy.
2. **Replace case study placeholders with inline content** — the "Refer to sharepoint" slides break immersion. Either embed the case study visuals directly, or remove the slides and have the speaker tell the story verbally over the previous/next slide.
3. **Make the summary slide more visual** — currently it's just three bullet points. Consider a visual recap of the framework + three shifts.
4. **Consider speaker notes** — with fewer slides, the transcript content can live in speaker notes rather than on-screen text. This makes the slides cleaner and more visual.
