/* ============================================
   Content Data — Transcript mapped to slides
   ============================================ */

const CONTENT_DATA = {
  1: `Welcome everyone! Today we're going to talk about something that I think is really critical for all of us in leadership positions – and that's understanding that cybersecurity and resiliency isn't just about ticking boxes on a compliance checklist. It's about making smart, strategic decisions that actually protect our organizations.`,

  2: `Cybersecurity (and Resiliency) is fundamentally about managing and accepting risks. Accountability is layered across leadership. At the top, accountability is broad and strategic. It sits with political and senior leadership for public trust and overall posture. As we move down the organizational hierarchy, responsibility becomes more specific. At the Director-level (business owners), they are responsible for the risks and outcomes of their digital systems and supporting operations.`,

  3: `While responsibility is structured hierarchically across the Government, cybersecurity decision making primarily revolves around three areas: Confidentiality, Integrity and Availability, also known as the CIA Triad. Confidentiality means keeping sensitive information private – only authorized people should access it. Integrity means ensuring that data hasn't been tampered with – what you see is accurate and trustworthy. Availability means systems and data are accessible when you need them – they are resilient to downtime.`,

  4: `We cannot prevent all disruptions, and there is a high cost to ensuring highly available systems. As such, resiliency goes beyond implementing cybersecurity controls. The focus is to ensure services can continue even when things go wrong. It includes business continuity planning, disaster recovery, and building systems that can recover quickly from disruptions. Think of it this way: cybersecurity keeps the bad guys out, but resilience ensures you can keep operating as an organisation even if they get in.`,

  5: `The numbers tell an interesting story. Global spending on cybersecurity products and services have been on an uptrend. But here's the question we need to ask: is all that spending actually making us more secure? Or are we just buying more tools without fundamentally changing our approach?`,

  6: `Unfortunately, even with all that spending, breaches are growing exponentially.`,

  7: `The adversaries are also getting better, more organized, and more brazen. They have access to increasingly sophisticated tools and technologies, including AI and automation, that make attacks more efficient and scalable. We are up against well-funded, highly skilled professionals.`,

  8: `Singapore is particularly attractive to cybercriminals. Why? Because we're a wealthy nation with advanced digital infrastructure, we're a major financial hub, and we have significant intellectual property across various sectors.`,

  9: `While threat actors have been actively targeting Singapore and our Government, we must also recognise that many service disruptions stem from internal factors like human errors, misconfigurations, and inadequate planning. These are some notable service disruptions in the past 2 years that were not caused by cybersecurity incidents, but such disruptions still have significant impact on our citizens.`,

  10: `So here's how we're going to structure our discussion today. I'm going to categorize cyber threats into three buckets: Preventable, Largely Preventable, and Difficult to Prevent. For each category, we'll look at some examples, understand what went wrong, and more importantly, discuss what we can do about it. Then we'll talk about three critical mindset shifts that we need to make. By the end of this session, you should have a practical framework for thinking about cybersecurity that goes beyond compliance checklists.`,

  11: `Let's start with the good news: many cyber incidents are preventable with basic security hygiene. I'm talking about things like DDoS attacks and disruptions caused by inadequate planning and misconfiguration. The key word here is "preventable." These threats can be effectively mitigated with existing tools, proper planning, and good system design. That's what makes them preventable - we know how to stop them, we just need to actually do it.`,

  12: `So what exactly is a DDoS attack? Think about your server—which is just a computer—as having a finite capacity to handle requests. Under normal circumstances, you have a server that can handle, say, a few thousand users at a time, no problem. But what happens when you suddenly have millions of requests hitting your server simultaneously? The server simply cannot keep up. The server cannot respond to all requests, so it slows down dramatically or crashes entirely. And that's exactly what happens in a DDoS attack. An attacker sends an overwhelming number of requests to your servers. Your website goes down, your services become unavailable.`,

  13: `DDoS attacks can happen at different layers. Network layer DDoS attacks are also called connection floods. Here's how it works: attackers use botnets - these are networks of compromised computers and devices - to flood your servers with network connections. And when your network resources are exhausted - meaning your servers can't accept any more connections - they go down. This is DDoS. Legitimate users can't get through because the botnet has consumed all available connection capacity.`,

  14: `But attackers can also use botnets to flood your servers with transactions - this is called an application layer attack. The difference here is subtle but important. Instead of just opening connections, the attackers are actually making the server do work. They're sending transaction requests - maybe they're requesting web pages, submitting forms, running database queries - basically forcing your application to process requests. The goal is to exhaust your servers' application resources - CPU, memory, database connections - by making them process so many transactions that they can't keep up.`,

  15: `DDoS attacks are becoming increasingly easy to execute because of tools and services like "DDoS-as-a-Service". The screenshots show pricing of an online vendor selling DDoS services. Some plans are as cheap as 5 euros per month for a basic service.`,

  16: `DDoS isn't the only type of preventable disruption we need to worry about. Disruptions can also be caused by non-cyber related reasons, such as, inadequate planning, misconfigurations, and human errors.`,

  17: `So the natural question is: what can we do about all of this? There is actually no need for complicated or expensive solutions.`,

  18: `First, for DDoS attacks, the solution is straightforward: DDoS Protection Services. They're low-cost and very effective against network layer attacks. The DDoS Protection Service sits between the attackers and your servers. When attack traffic comes in, the protection service filters it, blocks the malicious traffic, and only allows legitimate traffic through to your servers. And these protection services are typically bundled with Content Delivery Networks, or CDNs. Services like Cloudflare and Akamai offer this. So you get two benefits: faster content delivery for your users, AND protection against DDoS attacks.`,

  19: `Similarly, firewalls are also low-cost and very effective against network layer attacks. There's a firewall positioned right in front of your servers. This is added protection in case a legitimate-looking request bypasses the protection service. In fact, firewalls today are quite necessary and not optional add-ons.`,

  20: `So let me wrap up with Takeaway number 1: DDoS and most disruptions are preventable! Agencies need to do two key things: First: Use DDoS Protection Services for public-facing systems. Second: Plan for disruption, test for assurance, and implement processes to avoid human errors.`,

  21: `Now we move into the gray zone: largely preventable threats. These are more sophisticated than basic hygiene failures, but they're still preventable with reasonable effort and investment.`,

  22: `When we look at this pyramid of increasing sophistication, at the bottom we have the hacktivists and script kiddies. But one level up, we have lower-tier APTs - what we commonly call cybercriminals. These are slightly MORE sophisticated attackers. They still prey on poor cyber hygiene - weak passwords, unpatched systems, lack of multi-factor authentication - but they're more methodical about it. They're typically financially motivated, and their most common modus operandi is to deploy ransomware on vulnerable systems and then extort money from victims.`,

  23: `This is a ransomware case study. Please refer to the internal case study for details.`,

  24: `Disruptions can happen when a system is overly complex. Why? Some dependencies may be completely unknown, even to those managing them, making it possible for unexpected failures to occur. Please refer to the internal case study for details.`,

  25: `What can we do about largely preventable cyber disruptions?`,

  26: `First, as business directors, when you're outsourcing, you need to be acutely aware of your exposure. Just because you've outsourced your accounting, your IT infrastructure, your cloud services, or whatever it might be - that does not mean you've outsourced the accountability or risk. When your vendor gets hacked, YOUR data gets compromised. YOUR customers are affected. YOUR reputation takes the hit. Develop risk management plans to cater to scenarios when vendors get hacked. Consider imposing additional requirements on vendors in your contracts, such as annual VAPT and security certifications.`,

  27: `Second recommendation: Move towards outcome-based thinking. Many teams approach cybersecurity like a checklist. Did we implement encryption? Check. Did we enable logging? Check. But this compliance-based mindset doesn't tell you if you're actually secure. The outcome-based mindset uses Secure Architecting and VAPT to prevent design flaws and discover vulnerabilities specific to your implementation.`,

  28: `Finally, my third recommendation: Plan for continuity and quick recovery for when things go wrong. Notice I said "when," not "if." During election polling, officials were able to pivot to manual processing using hardcopy registers. When the immigration clearance system went down, ICA staff used iPads as a low-tech alternative. These are examples of non-digital fallback plans. Ask yourself: What are your essential services? What would happen if your main systems went down?`,

  29: `To summarize, cyber hygiene issues and complex systems are LARGELY PREVENTABLE. Four takeaways: First, be conscious about our risk exposure to vendors. Second, conduct VAPT - test that your system cannot break, don't just tick checkboxes. Third, design systems to be simple for better security and resiliency. Fourth, plan for disruptions for continuity of services.`,

  30: `Now we come to the third and LAST category: difficult to prevent threats.`,

  31: `Advanced Persistent Threats – APTs – are typically nation-state actors or highly sophisticated criminal groups. They're called 'persistent' because they don't give up easily. If one attack vector fails, they try another. They're patient, sometimes spending months or years inside a network before achieving their objectives. These groups have access to zero-day vulnerabilities that the software vendors don't even know about yet. You're not just fighting a hacker – you're fighting an intelligence agency.`,

  32: `Organizations with mature security programs can fall victim to APT attacks. Microsoft is an example.`,

  33: `Antique Typhoon is a china-based threat actor. The objective of most of this group's campaigns is to obtain unauthorized access to email accounts which they can use for harvesting of information and phishing.`,

  34: `Zero-day exploits are vulnerabilities that are unknown to the software vendor, meaning there's no patch available. How do you defend against something that no one knows exists? This is where defense-in-depth becomes critical. Even if an attacker exploits a zero-day to get initial access, you want multiple layers of defense to contain and detect them. Network segmentation, application whitelisting, behavior-based detection – these controls can help even when signature-based defenses fail.`,

  35: `Purchasing powerful exploits is extremely expensive. So APTs only pursue targets that are worth their resources.`,

  36: `APTs usually want two things. First, secrets related to defense or security. Second, causing disruptions by taking over critical infrastructure.`,

  37: `What can we do about APTs?`,

  38: `First, decide what information is truly secret. Traditionally, organizations with very sensitive data would use air-gapped networks – physically isolated from the internet. However, even air-gapped networks can be breached. The Stuxnet attack on Iranian nuclear facilities proved that in 2010. Attackers used a USB drive to bridge the air gap. More recently in 2024, a cyberespionage actor called Goldenjackal used custom tools to target an air-gapped embassy in Belarus.`,

  39: `Some disruptions are really beyond our control. Examples include Microsoft's data center outage and CrowdStrike's buggy update causing global disruption.`,

  40: `While APT attacks are difficult to prevent, we can still try to air-gap what is important to us. However, air-gaps are very costly so we need to be judicious. More importantly is to have robust business continuity plans.`,

  41: `Technical controls aside, I think we should also embrace three mindset shifts.`,

  42: `The first shift is about making upfront trade-offs. We need to be honest about the fact that security, cost, and usability exist in tension. You cannot maximize all three simultaneously. The key is to consciously decide where you want to be on this spectrum.`,

  43: `Let me show you what I call the Trade-off Trilemma. You have three competing goals: Security/Resilience, Cost Savings, and Usability. You can pick two, but you can't have all three at maximum levels.`,

  44: `This is a trilemma example. Please refer to the internal case study for details.`,

  45: `We often start off with security in mind. However, as pressures mount on usability or functionality, we sometimes start to loosen measures resulting in neither great user experience nor security. This happens when trade-offs were not made consciously, so you second-guess yourself every time someone complains that security is inconvenient. You made the decision for good reasons – stick to it.`,

  46: `I want you to do an exercise now. Take 10 minutes to think about these two questions: First: What are your organization's 'crown jewels' – your most critical assets, data, and systems? Second: What support would help you better manage these trade-offs? Do you need more budget? Better tools? Executive support?`,

  47: `The second mindset shift is moving from compliance to outcomes. Many organizations treat security as a compliance exercise. They implement controls to satisfy auditors and regulators, but they don't actually think about whether those controls are effective. We need to shift from asking 'Are we compliant?' to asking 'Are we actually secure?'`,

  48: `Compliance frameworks have value. They provide a baseline of security controls. But relying on traditional audit compliance and governance is insufficient for cybersecurity. There is no one-size-fits-all standard to security. Systems vary greatly in setup and risk levels. More cybersecurity controls does not automatically mean more security.`,

  49: `To make this shift, we can adopt a risk-based approach when evaluating systems. First, understand the risk. Second, design mitigations based on the risk. Third, perform outcomes-based testing. Don't just check if controls are configured – test if they actually work.`,

  50: `This is the COMET example. Please refer to the internal case study for details.`,

  51: `As we conduct more security testing activities, more vulnerabilities will be uncovered by project teams. That might sound bad, but it's actually good! It's much better to find vulnerabilities during testing than to have attackers find them in production. We should encourage teams to surface vulnerabilities proactively. Security is a team sport, not a blame game.`,

  52: `The third mindset shift is: Assume Breach, Assume Fail. This is about acknowledging that there is no perfect resilience. No matter how good your security is, you should plan for the possibility of both a successful breach and the failure of your resilience measures.`,

  53: `Unlike a Security Ops Centre, threat hunting is a practice of detecting new and unknown threats. A traditional SOC is like castle guards relying on known indicators. Threat hunting is different – hunters proactively search based on understanding of attacker behavior. They develop hypotheses and actively validate them. Both are needed, but threat hunting represents the outcomes mindset.`,

  54: `Red teams help organisations test their assumptions. Govtech's red team has partnered with many mature agencies to uncover overlooked vulnerabilities.`,

  55: `Critical systems need well-planned and rehearsed non-digital Business Continuity Plans. If you have a digital BCP stored on the very systems that just failed, how are you going to access it? You need printed copies, offline documentation, and procedures that work even when your IT systems are down.`,

  56: `Resilience is about keeping a service running, just like keeping a restaurant running. You need to prevent fires – that's your cybersecurity controls. You need to mitigate impact – fire alarms, sprinklers, insurance. That's detection and response. And you need plans to keep operating – fire exits, emergency procedures, contingency plans. That's business continuity planning.`,

  57: `Despite our best efforts, things can and will go wrong.`,

  58: `"Over-insuring" by prevention will lead to very high costs. For example, to guard against outages caused by cloud service providers, we might need a multi-cloud approach. But using multi cloud can 2x to 10x the cost. Having on-premise architecture is not necessarily more resilient either.`,

  59: `Let me wrap up what we've covered today. We talked about three categories of threats: Preventable, Largely Preventable, and Difficult to Prevent. We discussed advanced persistent threats and the challenges of defending against sophisticated attackers. And we talked about three critical mindset shifts: Make upfront trade-offs between security, cost, and usability. Move from compliance to outcomes. And assume breach, assume fail. Perfect security is impossible, but significant improvement is within reach for most of us. Start with the basics, make conscious trade-offs, and focus on outcomes.`
};

// Zone mapping for labels
const ZONE_MAP = {
  surface: { label: 'Surface · 0m', slides: [1,2,3,4,5,6,7,8,9,10] },
  shallows: { label: 'Shallows · 10m', slides: [11,12,13,14,15,16,17,18,19,20] },
  reef: { label: 'Reef Zone · 30m', slides: [21,22,23,24,25,26,27,28,29] },
  twilight: { label: 'Twilight Zone · 60m', slides: [30,31,32,33,34,35,36,37,38,39,40] },
  abyss: { label: 'The Abyss · 100m', slides: [41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59] },
  seabed: { label: 'The Seabed', slides: [] }
};

function getZoneForSlide(slideNum) {
  for (const [zone, data] of Object.entries(ZONE_MAP)) {
    if (data.slides.includes(slideNum)) return zone;
  }
  return 'seabed';
}

function getZoneLabelForSlide(slideNum) {
  const zone = getZoneForSlide(slideNum);
  return ZONE_MAP[zone]?.label || 'Unknown';
}
