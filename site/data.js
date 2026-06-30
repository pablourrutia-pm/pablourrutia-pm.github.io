// Pablo Urrutia × Development Seed Portfolio — content model (faithful to the source prototype frames)
window.PORTFOLIO_DATA = {
  intro: {
    greetingTop: "Hi, I'm Pablo —",
    greetingAccent: "I build & launch climate products.",
    blurbSimple: "PM · Project mgmt · Design systems · Sustainability · Data viz · Product comms. Simple mode = TL;DR only. Toggle Full for the deep read.",
    blurb: "Product & project management, design systems, sustainability, data-viz and product comms — I work across all of them to get environmental-data products built, launched and understood. Disclaimer: there's a lot here, and I doubt you'll read ALL OF IT. So I've shipped two versions — the consumption-aware deep read, and a TL;DR. Good PM practice.",
    tags: ["Product Management", "Project Management", "Design Systems", "Sustainability", "Data Viz", "Product Comms"],
  },

  // Bio & Education timeline — color encodes type; height encodes duration.
  timeline: [
    { year: "1988", title: "Background", org: "Granada, ES", category: "neutral", span: 1.2 },
    { year: "2015", title: "Biology Sciences Degree", org: "UGR", category: "study", span: 1.6 },
    { year: "2016", title: "Scuba Diver", org: "Buceo La Herradura & ARGOS", category: "neutral", span: 1 },
    { year: "2017", title: "Master MKT & Social Media", org: "UGR", category: "study", span: 1 },
    { year: "2018", title: "PM", org: "Flat 101", category: "work", span: 1 },
    { year: "2019", title: "Agile & Comms Consultant", org: "Pablo del Mares (freelance)", category: "work", span: 1 },
    { year: "2020", title: "PM & Comms Consultant", org: "Prodigioso Volcán", category: "work", span: 1.4 },
    { year: "2022", title: "PM & Comms Coordinator", org: "Vizzuality", category: "work", span: 2.4, caseId: "comms-plan" },
  ],

  // Case studies — the editorial overlays.
  cases: [
    {
      id: "comms-plan",
      eyebrow: "Product Comms · Vizzuality",
      title: "Product Marketing & Communications Plan",
      band: "var(--band-blue)",
      tldr: "Authored the CDE Plan that became Vizzuality's core comms strategy — helping win 4 more EU projects.",
      challenge: "For Landgriffon, CoCliCo and MIRACA — EU-funded climate adaptation platforms — we needed a robust Communication, Dissemination & Exploitation (CDE) Plan aligned with Horizon Europe standards, but also tailored for real stakeholder engagement and measurable impact.",
      role: [
        "Developed and authored the **CDE Plan**, integrating stakeholder personas, messaging strategy, SEO considerations and a content calendar.",
        "Defined **KPIs** for product visibility, engagement and conversion through public-facing channels.",
        "Budgeted for digital marketing, webinar outreach, video production and community-building.",
        "Established reporting structures and templates for the Funding & Tenders Portal and SyGMa.",
      ],
      impact: [
        "The plan became the **core communications strategy**, guiding content production, funnel optimization and stakeholder outreach.",
        "Helped Vizzuality position itself as a **trusted reference in product comms**, contributing to winning **4 additional EU projects**.",
      ],
      takeaway: "A strategic comms plan bridges product development and audience adoption — the foundation for sustainable inbound marketing, lead generation, and measurable product impact.",
    },
    {
      id: "templates",
      eyebrow: "Product Comms · Vizzuality",
      title: "Creating Templates & Workflows for Product Comms",
      band: "var(--band-cream)",
      tldr: "Built a reusable content template that 3x'd production speed and standardized product comms.",
      challenge: "As climate platforms matured, each feature needed stakeholder-friendly explanation. Content creation was time-consuming, inconsistent, and lacked a scalable framework.",
      role: [
        "Designed and implemented a **reusable content template** that became the standard for most platform blog posts and feature announcements.",
        "Defined elements: a real-world intro scenario, a jargon-free explanation, who it's for and why it's useful, step-by-step how-to, related resources, and a clear CTA.",
        "Added marketing materials for BD & Sales — battle cards, value props, elevator pitches, benchmarks.",
      ],
      impact: [
        "Created a **repeatable storytelling structure** that saved time and ensured clarity across all product comms.",
        "**Streamlined content production by 3x**, letting any team member draft posts aligned with product-marketing goals.",
        "Supported SEO and **improved organic traffic** through consistent keyword placement and structured content.",
      ],
      takeaway: "Building scalable content frameworks transforms feature marketing from reactive to proactive — faster go-to-market, consistent messaging, and more effective storytelling for technical platforms.",
    },
    {
      id: "mongabay",
      eyebrow: "Funnels · Mongabay",
      title: "Optimizing the User Funnel for Mongabay's Reforestation App",
      band: "var(--band-orange)",
      tldr: "Rebuilt the funnel & onboarding — 2.3x time-on-platform and 5x project-page visits.",
      challenge: "Despite robust data, engagement and retention were underperforming. Analytics revealed drop-off at the initial search interface — users struggled to interpret icons, navigate filters, and understand the platform's value.",
      role: [
        "**Top-of-funnel:** refined landing-page messaging to clearly communicate purpose and value proposition.",
        "**Mid-funnel:** designed a guided onboarding with step-by-step walkthroughs explaining navigation and iconography.",
        "**Bottom-of-funnel:** improved search-filter logic and added contextual help, increasing project-specific views.",
      ],
      impact: [
        "Users completing onboarding spent **2.3x more time** exploring datasets.",
        "Visits to project-level pages **increased by 5x**.",
        "The refined journey contributed to stronger engagement metrics used to **secure re-funding**.",
      ],
      takeaway: "Product marketing is about more than messaging — it's understanding user behavior, mapping friction in the funnel, and using content & product guidance to drive valuable actions.",
    },
    {
      id: "trase",
      eyebrow: "User Research · Trase.Earth",
      title: "Turning User Feedback into Product Improvements on Trase.Earth",
      band: "var(--band-blue)",
      tldr: "Turned user research into a guided, context-first redesign that broadened reach beyond experts.",
      challenge: "Trase.Earth visualizes global commodity supply chains with complex Sankey diagrams and data cards. Powerful for experts — but non-expert users struggled, leading to high drop-off. They needed simplified, trade-context-specific insights up front.",
      role: [
        "Collaborated with UX, product and data-science teams to synthesize **user-research findings into product recommendations**.",
        "Proposed a flow: select a trade context first (e.g. \"Soy exports from Brazil to the EU\"), then deliver pre-processed data cards.",
        "Preserved raw-data access for advanced users — but only after digestible insights.",
        "Presented **structured documentation and user narratives** to align prioritization.",
      ],
      impact: [
        "The team **pivoted the platform** toward guided context selection and simplified insight delivery.",
        "Search completion rates improved; **more users successfully found** relevant data.",
        "The platform became more accessible — broadening reach beyond experts to policymakers, media and NGOs.",
      ],
      takeaway: "Product marketing isn't just messaging — it's listening to user signals, translating feedback into product strategy, and reducing friction along the funnel.",
    },
    {
      id: "feedback-campaign",
      eyebrow: "Campaigns · CoCliCo",
      title: "A Marketing Campaign to Gather User Feedback",
      band: "var(--band-coral)",
      tldr: "Ran a LinkedIn + webinar campaign that fed real user language straight into product definition.",
      challenge: "We needed to ensure that complex climate projections and coastal-risk models were usable and relevant for decision-makers across Europe. Assumptions weren't enough — we needed direct insights from real users.",
      role: [
        "Co-designed and launched a **LinkedIn campaign** targeting climate-adaptation professionals.",
        "Created messaging and CTAs that encouraged participation in product-discovery webinars.",
        "Generated engagement from local authorities, port managers, national governments and private infrastructure stakeholders.",
        "Collected qualitative feedback into a **\"Rich User Narrative\"** document of real decision-making processes and pain points.",
      ],
      impact: [
        "Direct user input fed into **product definition**, shaping platform features and content structure.",
        "Increased trust by **embedding user language into product communications** from the start.",
        "Laid the **foundation for future targeted inbound campaigns and SEO**.",
      ],
      takeaway: "Early user engagement is critical for validating messaging, aligning value propositions, and reducing friction in future marketing funnels.",
    },
  ],
};
