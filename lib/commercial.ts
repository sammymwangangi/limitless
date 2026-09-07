export type Solution = {
  slug: string;
  eyebrow: string;
  title: string;
  summary: string;
  price: string;
  bestFor: string;
  outcomes: string[];
  capabilities: string[];
  process: string[];
  related: string[];
};

export const solutions: Solution[] = [
  {
    slug: "websites",
    eyebrow: "Get customers",
    title: "Business Websites That Work Like Sales Assets",
    summary:
      "Professional, conversion-focused websites for businesses that need credibility, discoverability and a clearer path from visitor to enquiry.",
    price: "From KES 35,000",
    bestFor: "SMEs, professional services, growing brands and companies replacing an outdated site.",
    outcomes: [
      "A stronger first impression for prospects researching your business",
      "Clear conversion paths into WhatsApp, forms or booked conversations",
      "A fast, mobile-first experience built for real customer journeys",
      "Search-friendly structure that can support long-term acquisition",
    ],
    capabilities: [
      "Custom responsive design",
      "Lead capture and WhatsApp conversion",
      "Analytics and conversion tracking",
      "Technical SEO foundations",
      "CMS and content sections where required",
      "Performance and deployment optimisation",
    ],
    process: ["Discovery", "Messaging & structure", "Design & build", "QA & launch"],
    related: ["ecommerce", "business-automation", "technology-partner"],
  },
  {
    slug: "ecommerce",
    eyebrow: "Get customers",
    title: "E-Commerce Built Around How Your Customers Actually Buy",
    summary:
      "Online storefronts with local payments, order workflows and management tools designed to turn product discovery into completed sales.",
    price: "From KES 150,000",
    bestFor: "Retailers, distributors, D2C brands and businesses moving from WhatsApp ordering to structured commerce.",
    outcomes: [
      "Customers can browse, order and pay without unnecessary manual steps",
      "Orders and payments are easier for staff to track and reconcile",
      "A scalable storefront that can grow with catalogue and transaction volume",
      "Better visibility into products, customers and sales activity",
    ],
    capabilities: [
      "Product catalogue and search",
      "Cart and checkout",
      "M-PESA and payment gateway integration",
      "Order and customer management",
      "Inventory integrations where required",
      "Sales analytics and administration",
    ],
    process: ["Commerce audit", "Store architecture", "Build & integrations", "Launch & optimisation"],
    related: ["mpesa-integration", "ai-sales-agent", "api-integration"],
  },
  {
    slug: "business-automation",
    eyebrow: "Automate operations",
    title: "Business Automation That Removes Repetitive Work",
    summary:
      "We map high-friction workflows and connect the systems, APIs and automations needed to make the process faster and more reliable.",
    price: "From KES 75,000",
    bestFor: "Teams relying on spreadsheets, manual follow-up, repetitive data entry, email handoffs or disconnected tools.",
    outcomes: [
      "Less repetitive administrative work",
      "Fewer missed handoffs and follow-ups",
      "Faster processing between teams and systems",
      "A clearer operating trail for important workflows",
    ],
    capabilities: [
      "Lead and CRM workflows",
      "Quote, invoice and approval flows",
      "Booking and reminder automation",
      "Payment-to-fulfilment workflows",
      "Reporting and notification automation",
      "n8n, API and custom workflow implementation",
    ],
    process: ["Workflow audit", "Opportunity mapping", "Automation build", "Monitoring & iteration"],
    related: ["ai-automation", "api-integration", "dashboards"],
  },
  {
    slug: "ai-automation",
    eyebrow: "Automate operations",
    title: "Practical AI Automation for Real Business Workflows",
    summary:
      "Apply AI where it creates measurable leverage: customer conversations, knowledge retrieval, qualification, drafting, analysis and operational decision support.",
    price: "From KES 95,000",
    bestFor: "Businesses with repeatable knowledge work, high enquiry volumes or processes that need intelligent decision support.",
    outcomes: [
      "Faster response to repetitive customer and staff questions",
      "More consistent handling of common workflows",
      "Reduced manual effort without removing human control",
      "AI connected to the systems and data the business already uses",
    ],
    capabilities: [
      "AI assistants and agents",
      "Knowledge-base retrieval",
      "Workflow orchestration",
      "Human escalation and approval",
      "CRM and operational integrations",
      "Usage monitoring and continuous improvement",
    ],
    process: ["Use-case audit", "Data & guardrails", "Pilot", "Production integration"],
    related: ["ai-receptionist", "ai-sales-agent", "business-automation"],
  },
  {
    slug: "ai-receptionist",
    eyebrow: "Limitless AI",
    title: "An AI Receptionist for Customer Enquiries",
    summary:
      "Give customers an immediate first response while your team keeps control of complex, sensitive or high-value conversations.",
    price: "From KES 95,000 + monthly",
    bestFor: "Businesses receiving frequent website or messaging enquiries about services, availability, pricing, bookings or procedures.",
    outcomes: [
      "Immediate responses to common questions",
      "Structured lead capture before staff take over",
      "Fewer repetitive enquiries handled manually",
      "A consistent route from enquiry to booking or human escalation",
    ],
    capabilities: [
      "FAQ and company knowledge",
      "Lead capture and qualification",
      "Booking support",
      "English and Swahili workflows where suitable",
      "CRM updates and internal notifications",
      "Human handover rules",
    ],
    process: ["Conversation mapping", "Knowledge setup", "Integration", "Monitor & improve"],
    related: ["ai-sales-agent", "ai-automation", "technology-partner"],
  },
  {
    slug: "ai-sales-agent",
    eyebrow: "Limitless AI",
    title: "AI-Assisted Lead Qualification and Sales Follow-Up",
    summary:
      "Turn inbound enquiries into structured opportunities by qualifying prospects, capturing context, recommending next steps and keeping follow-up moving.",
    price: "From KES 180,000 + monthly",
    bestFor: "Sales teams handling meaningful enquiry volume from ads, websites, social media or WhatsApp.",
    outcomes: [
      "Faster first response to new leads",
      "Better qualification before salesperson involvement",
      "Fewer leads disappearing because follow-up was forgotten",
      "Cleaner CRM data and clearer pipeline visibility",
    ],
    capabilities: [
      "Lead qualification",
      "Product or service recommendation",
      "Automated follow-up sequences",
      "CRM creation and updates",
      "Quotation or payment workflow integration",
      "Human sales-team handover",
    ],
    process: ["Sales-funnel audit", "Qualification design", "Agent & CRM build", "Optimisation"],
    related: ["ai-receptionist", "mpesa-integration", "dashboards"],
  },
  {
    slug: "ai-voice-agent",
    eyebrow: "Limitless AI",
    title: "AI Voice Workflows for High-Volume Customer Calls",
    summary:
      "Automate suitable telephone workflows such as confirmations, common enquiries, qualification and structured outbound follow-up while preserving escalation to staff.",
    price: "From KES 200,000 + monthly usage",
    bestFor: "Call-heavy businesses with repeatable conversations and clear escalation rules.",
    outcomes: [
      "Handle suitable repetitive calls consistently",
      "Extend service capacity without forcing customers into text-only channels",
      "Capture structured information from calls",
      "Route complex conversations to people with context attached",
    ],
    capabilities: [
      "Inbound and outbound voice workflows",
      "Knowledge-driven responses",
      "Call qualification and data capture",
      "CRM or ticketing integration",
      "Human escalation",
      "Usage and call-flow monitoring",
    ],
    process: ["Call-flow audit", "Script & guardrails", "Telephony integration", "Pilot & tune"],
    related: ["ai-receptionist", "ai-automation", "technology-partner"],
  },
  {
    slug: "mpesa-integration",
    eyebrow: "Integrate your business",
    title: "M-PESA Integration Without Manual Payment Guesswork",
    summary:
      "Connect M-PESA directly to websites and business systems so payment events can trigger the right order, account or operational workflow.",
    price: "From KES 45,000",
    bestFor: "E-commerce, SaaS, booking systems, portals and businesses that need reliable payment confirmation.",
    outcomes: [
      "Payments connected to the correct customer or order",
      "Reduced reliance on screenshots and manual confirmation",
      "Faster downstream fulfilment after payment",
      "A cleaner technical foundation for reconciliation",
    ],
    capabilities: [
      "STK Push",
      "C2B payment flows",
      "B2C where appropriate",
      "Callbacks and webhooks",
      "Transaction linking and reconciliation logic",
      "Admin and operational integration",
    ],
    process: ["Payment-flow review", "Daraja integration", "Testing", "Production rollout"],
    related: ["ecommerce", "api-integration", "custom-software"],
  },
  {
    slug: "api-integration",
    eyebrow: "Integrate your business",
    title: "Connect the Systems Your Business Already Depends On",
    summary:
      "We design and implement reliable API integrations between payments, CRM, ERP, logistics, messaging, identity and custom business software.",
    price: "From KES 50,000",
    bestFor: "Businesses with disconnected software, duplicate data entry or a new platform that must connect to external services.",
    outcomes: [
      "Less manual movement of data between tools",
      "More consistent records across systems",
      "Automated events when important business actions occur",
      "A maintainable integration layer rather than fragile one-off scripts",
    ],
    capabilities: [
      "REST and webhook integrations",
      "Authentication and secure credentials handling",
      "Payment, CRM and ERP connections",
      "Messaging and email platforms",
      "Data transformation and synchronisation",
      "Monitoring and failure handling",
    ],
    process: ["API review", "Data contract design", "Integration build", "Testing & monitoring"],
    related: ["mpesa-integration", "business-automation", "custom-software"],
  },
  {
    slug: "dashboards",
    eyebrow: "Operate with visibility",
    title: "Management Dashboards That Turn Data Into Decisions",
    summary:
      "Bring operational data into a clear management view so leaders can see what is happening without waiting for manually prepared reports.",
    price: "From KES 100,000",
    bestFor: "Businesses with multiple sales channels, teams, branches or systems and weak real-time visibility.",
    outcomes: [
      "Faster access to key business information",
      "One view across important performance indicators",
      "Less time spent compiling recurring reports",
      "Clearer identification of exceptions and operational problems",
    ],
    capabilities: [
      "Sales and revenue dashboards",
      "Operations and service KPIs",
      "Customer and funnel reporting",
      "Multi-source data integration",
      "Alerts and management summaries",
      "Role-based views where required",
    ],
    process: ["KPI definition", "Data-source mapping", "Dashboard build", "Validation & rollout"],
    related: ["api-integration", "custom-software", "technology-partner"],
  },
  {
    slug: "custom-software",
    eyebrow: "Build software",
    title: "Custom Software for Operations That Do Not Fit Off-the-Shelf Tools",
    summary:
      "Purpose-built business systems, SaaS products, marketplaces, portals and platforms designed around your workflows and integration requirements.",
    price: "From KES 300,000",
    bestFor: "Businesses and founders with a validated need that requires custom workflows, integrations, permissions or product logic.",
    outcomes: [
      "Software aligned to the real operating model",
      "A platform that can evolve as requirements mature",
      "Integrations designed into the architecture from the start",
      "Clear technical ownership from discovery through deployment",
    ],
    capabilities: [
      "Internal business systems",
      "SaaS and customer portals",
      "Marketplaces and multi-sided platforms",
      "Administration and role-based access",
      "Payments and third-party integrations",
      "Cloud deployment and technical documentation",
    ],
    process: ["Discovery & blueprint", "Architecture & UX", "Phased build", "Launch & support"],
    related: ["mobile-app-development", "api-integration", "technology-partner"],
  },
  {
    slug: "mobile-app-development",
    eyebrow: "Build software",
    title: "Mobile Applications Connected to Real Business Systems",
    summary:
      "Cross-platform mobile applications for customers, staff and field workflows, backed by the APIs and administration tools needed to operate them.",
    price: "From KES 350,000",
    bestFor: "Businesses with a genuine mobile use case that needs device access, repeat engagement or field operation support.",
    outcomes: [
      "A mobile experience designed around a clear business use case",
      "Shared backend services instead of isolated app logic",
      "Operational visibility through the supporting admin platform",
      "A foundation that can support Android and iOS growth",
    ],
    capabilities: [
      "Cross-platform application development",
      "Authentication and user accounts",
      "Push notifications",
      "Payments and external APIs",
      "Backend and admin integration",
      "Store release support",
    ],
    process: ["Use-case validation", "UX & architecture", "Build & test", "Release & iterate"],
    related: ["custom-software", "api-integration", "technology-partner"],
  },
  {
    slug: "technology-partner",
    eyebrow: "Keep it running",
    title: "An Ongoing Technology Partner for Growing Businesses",
    summary:
      "Get dependable technical leadership, maintenance, integrations and continuous improvement without needing to assemble a complete internal software team immediately.",
    price: "From KES 75,000/month",
    bestFor: "Businesses with live systems and recurring technology needs that are too broad for basic maintenance but do not require a full internal engineering department.",
    outcomes: [
      "One accountable technical partner across your systems",
      "Faster handling of integrations, improvements and technical issues",
      "Regular prioritisation instead of reactive technology decisions",
      "Continuity after projects go live",
    ],
    capabilities: [
      "Technical strategy and planning",
      "Website and platform management",
      "API and automation support",
      "Infrastructure oversight",
      "Small feature development within agreed capacity",
      "Vendor and technical decision support",
    ],
    process: ["Systems review", "Monthly priorities", "Delivery & monitoring", "Quarterly roadmap"],
    related: ["custom-software", "dashboards", "business-automation"],
  },
];

export type Industry = {
  slug: string;
  name: string;
  headline: string;
  summary: string;
  problems: string[];
  opportunities: string[];
  recommendedSolutions: string[];
};

export const industries: Industry[] = [
  {
    slug: "real-estate",
    name: "Real Estate",
    headline: "Turn Property Enquiries Into Structured Sales Opportunities",
    summary:
      "Real-estate teams often generate strong enquiry volume but lose visibility once leads move into WhatsApp and individual agent conversations.",
    problems: [
      "Meta and website leads going cold before an agent responds",
      "Repeated questions about price, location and availability",
      "Follow-up living in individual phones instead of a shared pipeline",
      "Management cannot see which campaigns and agents are converting",
    ],
    opportunities: [
      "Instant first response and qualification",
      "Property matching and structured lead capture",
      "CRM assignment and follow-up workflows",
      "Sales dashboards across campaigns, leads and agents",
    ],
    recommendedSolutions: ["ai-sales-agent", "ai-receptionist", "dashboards", "websites"],
  },
  {
    slug: "education-training",
    name: "Education & Training",
    headline: "Automate Enquiries, Admissions and Learner Communication",
    summary:
      "Training companies and education providers handle highly repetitive questions around courses, intakes, requirements, fees and applications.",
    problems: [
      "Staff repeatedly answering the same programme questions",
      "Applications and enquiries spread across forms, email and WhatsApp",
      "Manual reminders for intakes, documents and payments",
      "Weak visibility into enquiry-to-enrolment conversion",
    ],
    opportunities: [
      "AI-assisted programme enquiries",
      "Structured application and qualification flows",
      "Payment and reminder automation",
      "CRM and admissions dashboards",
    ],
    recommendedSolutions: ["ai-receptionist", "business-automation", "mpesa-integration", "dashboards"],
  },
  {
    slug: "ecommerce-retail",
    name: "E-Commerce & Retail",
    headline: "Turn WhatsApp Ordering and M-PESA Into a Proper Sales Operation",
    summary:
      "Retail businesses often grow demand faster than the manual processes behind ordering, payment confirmation, stock enquiries and customer follow-up.",
    problems: [
      "Customers must message staff to complete basic purchases",
      "Payment screenshots and manual reconciliation",
      "Repeated stock and product questions",
      "Order data fragmented across chats, spreadsheets and storefronts",
    ],
    opportunities: [
      "Structured e-commerce checkout",
      "M-PESA payment confirmation",
      "AI-assisted product and order enquiries",
      "Order and inventory integrations",
    ],
    recommendedSolutions: ["ecommerce", "mpesa-integration", "ai-sales-agent", "api-integration"],
  },
  {
    slug: "hospitality-travel",
    name: "Hospitality & Travel",
    headline: "Respond Faster to Availability, Booking and Travel Enquiries",
    summary:
      "Hotels, serviced apartments and travel businesses can lose high-intent customers when availability and quotation conversations take too long.",
    problems: [
      "Repetitive availability and pricing questions",
      "Manual quotation and booking follow-up",
      "Enquiries arriving outside normal working hours",
      "Customer information scattered across messaging channels",
    ],
    opportunities: [
      "AI-assisted enquiry handling",
      "Booking and quotation workflows",
      "Payment links and M-PESA integration",
      "CRM capture and automated follow-up",
    ],
    recommendedSolutions: ["ai-receptionist", "business-automation", "websites", "mpesa-integration"],
  },
  {
    slug: "professional-services",
    name: "Professional Services",
    headline: "Convert Expertise Into a More Efficient Client Journey",
    summary:
      "Professional firms need credibility and a disciplined journey from enquiry to qualification, appointment, proposal and ongoing client service.",
    problems: [
      "Weak qualification before senior staff spend time on a lead",
      "Manual appointment and proposal follow-up",
      "Inconsistent lead capture from website and messaging",
      "No shared view of pipeline and client activity",
    ],
    opportunities: [
      "Conversion-focused website journeys",
      "Qualification and booking workflows",
      "CRM and proposal automation",
      "Client portals and ongoing technology support",
    ],
    recommendedSolutions: ["websites", "business-automation", "ai-receptionist", "technology-partner"],
  },
];

export function getSolution(slug: string) {
  return solutions.find((solution) => solution.slug === slug);
}

export function getIndustry(slug: string) {
  return industries.find((industry) => industry.slug === slug);
}
