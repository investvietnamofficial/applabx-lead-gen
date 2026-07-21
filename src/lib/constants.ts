// Site configuration
export const SITE_URL = 'https://lead-gen-agency.applabx.com'
export const SITE_NAME = 'AppLabx Lead Generation'
export const SITE_TAGLINE = 'AI-First B2B Lead Generation Agency'
export const SITE_DESCRIPTION =
  'AppLabx is an AI-powered B2B lead generation agency. We generate qualified leads, book more strategy calls, and scale your revenue pipeline across 10+ markets.'
export const SITE_EMAIL = 'hello@applabx.com'
export const SITE_PHONE = '+1 (555) 123-4567'
export const SITE_LOCATION = 'Singapore & Vietnam'

// CTA button text
export const CTA_PRIMARY = 'Book a Strategy Call'
export const CTA_SECONDARY = 'Get a Free Audit'

// Service data — all 10 services
export interface Service {
  id: string
  title: string
  slug: string
  shortDescription: string
  icon: string
  features: string[]
  overview: string
  process: string[]
  benefits: string[]
  deliverables: string[]
  faqs: { q: string; a: string }[]
}

export const services: Service[] = [
  {
    id: '1',
    title: 'B2B Lead Generation',
    slug: 'b2b-lead-generation',
    shortDescription: 'End-to-end B2B lead generation powered by AI targeting and multi-channel outreach.',
    icon: 'Target',
    features: ['AI-powered prospect discovery', 'Multi-channel sequencing', 'Lead qualification & scoring'],
    overview: 'We identify, qualify, and deliver decision-maker contacts directly to your sales team. Our AI-driven approach ensures every lead is pre-vetted and ready for conversation.',
    process: ['Define ICP and target persona', 'AI-powered data enrichment', 'Multi-channel outreach sequencing', 'Lead qualification & scoring', 'CRM sync & handoff'],
    benefits: ['Reduce prospecting time by 70%', 'Access to hard-to-reach decision-makers', 'Predictable lead volume', 'Full transparency with real-time dashboards'],
    deliverables: ['Verified B2B contact database', 'Qualified meeting-ready leads', 'Weekly lead reports', 'CRM-ready data exports'],
    faqs: [
      { q: 'How quickly can you start delivering leads?', a: 'We typically deliver first qualified leads within 2–3 weeks of project kickoff, depending on the complexity of your ICP.' },
      { q: 'What does "qualified lead" mean at AppLabx?', a: 'A qualified lead is a verified contact at a target company who matches your ICP and has expressed interest or fit based on our multi-step qualification process.' },
    ],
  },
  {
    id: '2',
    title: 'Appointment Setting',
    slug: 'appointment-setting',
    shortDescription: 'Book qualified sales meetings with your ideal prospects using intelligent outbound strategies.',
    icon: 'Calendar',
    features: ['Calendar booking integration', 'Decision-maker outreach', 'Multi-timezone scheduling'],
    overview: 'Stop chasing no-shows. Our appointment setting service ensures your sales team walks into booked meetings with qualified prospects who are pre-educated on your value.',
    process: ['Profile your ideal customer', 'Research and personalization', 'Multi-channel outreach', 'Meeting qualification', 'Calendar booking confirmation'],
    benefits: ['Higher meeting show rates', 'Pre-educated prospects', 'Scalable sales pipeline', 'Detailed meeting preparation notes'],
    deliverables: ['Booked appointments on your calendar', 'Prospect background summaries', 'Meeting preparation notes', 'Post-meeting follow-up sequences'],
    faqs: [
      { q: 'What is a typical show rate for booked appointments?', a: 'Our average show rate is 80%+. We use rigorous qualification criteria and multi-touch confirmation to ensure prospects show up prepared.' },
      { q: 'Do you book appointments globally?', a: 'Yes. We support all major timezones and have dedicated teams for APAC, EMEA, and Americas markets.' },
    ],
  },
  {
    id: '3',
    title: 'Cold Email Outreach',
    slug: 'cold-email-outreach',
    shortDescription: 'High-deliverability cold email campaigns that land in the inbox and drive responses.',
    icon: 'Mail',
    features: ['Email warm-up & deliverability', 'AI personalization at scale', 'A/B testing & optimization'],
    overview: 'Cold email remains one of the highest-ROI outbound channels when done correctly. We build, warm, and optimize email campaigns that generate real responses.',
    process: ['Technical setup & warm-up', 'ICP definition & data sourcing', 'Copywriting & personalization', 'A/B testing & optimization', 'Analytics & reporting'],
    benefits: ['95%+ inbox deliverability', 'Personalized at scale with AI', 'Continuous optimization', 'Full campaign transparency'],
    deliverables: [' warmed email accounts', 'Personalized email sequences (5–8 touchpoints)', 'Weekly performance reports', 'Reply & meeting booking'],
    faqs: [
      { q: 'Do you handle email warm-up?', a: 'Yes. We build and warm dedicated sending infrastructure for every campaign to ensure optimal deliverability from day one.' },
      { q: 'How many emails do you send per day?', a: 'Volume is carefully calibrated based on your target market, account size, and industry norms. We prioritize quality over volume.' },
    ],
  },
  {
    id: '4',
    title: 'LinkedIn Outreach',
    slug: 'linkedin-outreach',
    shortDescription: 'Connect with decision-makers on LinkedIn using personalized, compliance-safe outreach sequences.',
    icon: 'Users',
    features: ['LinkedIn profile optimization', 'Connection request sequences', 'InMail & follow-up automation'],
    overview: 'LinkedIn is where B2B decisions are made. We run compliant, personalized LinkedIn outreach campaigns that build genuine relationships and drive meetings.',
    process: ['Profile & brand positioning', 'Target audience research', 'Connection request sequences', 'Content-led engagement', 'Meeting conversion'],
    benefits: ['Access to C-suite and VPs', 'Relationship-first approach', 'Compliant with LinkedIn ToS', 'Measurable pipeline results'],
    deliverables: ['Optimized LinkedIn presence', 'Qualified connection requests', 'InMail response tracking', 'Pipeline attribution reports'],
    faqs: [
      { q: 'Is LinkedIn outreach safe for my account?', a: 'Yes. We strictly follow LinkedIn\'s Terms of Service and use human-led, personalized sequences — never bots or mass auto-connection tools.' },
      { q: 'How many connections can I expect per month?', a: 'Most clients see 150–400 new relevant connections per month, with a 25–40% acceptance rate on connection requests.' },
    ],
  },
  {
    id: '5',
    title: 'SEO Lead Generation',
    slug: 'seo-lead-generation',
    shortDescription: 'Attract high-intent leads organically through search-optimized content and technical SEO.',
    icon: 'Search',
    features: ['Technical SEO audit', 'Keyword research & content strategy', 'Local & global SEO', 'Link building'],
    overview: 'Capture buyers actively searching for your solution. Our SEO lead generation combines technical expertise with content that ranks and converts.',
    process: ['Technical SEO audit', 'Keyword & competitor research', 'Content creation & optimization', 'Authority building', 'Lead capture & conversion'],
    benefits: ['Sustainable organic traffic', 'High-intent lead capture', 'Long-term compounding results', 'Full technical and content reporting'],
    deliverables: ['Technical SEO audit report', 'Content calendar & articles', 'Keyword ranking reports', 'Qualified organic leads'],
    faqs: [
      { q: 'How long does SEO take to show results?', a: 'Most clients see meaningful organic traffic growth within 3–6 months. Significant lead generation results typically compound from month 6 onward.' },
      { q: 'Do you handle local SEO for multiple countries?', a: 'Yes. We run multi-regional SEO programs for Singapore, Vietnam, Southeast Asia, Middle East, and beyond.' },
    ],
  },
  {
    id: '6',
    title: 'Content Marketing',
    slug: 'content-marketing',
    shortDescription: 'Attract, engage, and convert prospects with strategic content that establishes thought leadership.',
    icon: 'FileText',
    features: ['Content strategy & planning', 'SEO-optimized articles', 'Case studies & whitepapers', 'Email newsletters'],
    overview: 'Content is the foundation of inbound lead generation. We create content that ranks on Google, resonates with your audience, and feeds your pipeline consistently.',
    process: ['Audience & competitor research', 'Content strategy development', 'Content production', 'SEO optimization', 'Distribution & promotion'],
    benefits: ['Build brand authority', 'Generate inbound leads organically', 'Support SEO rankings', 'Nurture prospects through the funnel'],
    deliverables: ['Monthly content calendar', 'SEO-optimized articles', 'Gated lead magnets', 'Performance analytics'],
    faqs: [
      { q: 'How many articles do you publish per month?', a: 'Typical programs include 4–12 pieces per month depending on your goals and budget. We always prioritize quality over quantity.' },
      { q: 'Do you handle content distribution?', a: 'Yes. We amplify content through email, LinkedIn, and syndication to maximize reach and lead generation.' },
    ],
  },
  {
    id: '7',
    title: 'AI Sales Automation',
    slug: 'ai-sales-automation',
    shortDescription: 'Automate repetitive sales tasks with AI so your team focuses on closing deals.',
    icon: 'Bot',
    features: ['AI voice & email agents', 'Lead scoring automation', 'CRM workflow automation', 'Follow-up sequencing'],
    overview: 'Our AI sales automation handles prospecting, qualification, and follow-up so your sales team can spend time on what matters — closing revenue.',
    process: ['Process audit & mapping', 'AI tool selection & setup', 'Workflow automation', 'Integration with existing stack', 'Training & optimization'],
    benefits: ['Reduce manual sales work by 60%', '24/7 AI engagement', 'Faster response times', 'Consistent follow-up at scale'],
    deliverables: ['Custom AI agent workflows', 'Automated follow-up sequences', 'CRM integrations', 'Performance dashboards'],
    faqs: [
      { q: 'Does AI replace my sales team?', a: 'No. AI augments your team by handling repetitive tasks. Your salespeople focus on high-value conversations and closing deals.' },
      { q: 'Which CRM do you integrate with?', a: 'We integrate with all major CRMs including HubSpot, Salesforce, Pipedrive, Zoho, and custom setups.' },
    ],
  },
  {
    id: '8',
    title: 'CRM Automation',
    slug: 'crm-automation',
    shortDescription: 'Streamline your CRM workflows, data hygiene, and sales processes for maximum efficiency.',
    icon: 'Database',
    features: ['CRM setup & configuration', 'Workflow automation', 'Data enrichment & cleansing', 'Pipeline reporting'],
    overview: 'A clean, automated CRM is the backbone of scalable sales. We build and optimize your CRM so every lead is tracked, every task is automated, and every rep has full visibility.',
    process: ['CRM audit & requirements', 'Data cleansing & migration', 'Workflow configuration', 'Automation rule building', 'Team training'],
    benefits: ['Clean, reliable data', 'Eliminate manual data entry', 'Full pipeline visibility', 'Faster deal cycles'],
    deliverables: ['Configured CRM system', 'Automated workflows', 'Cleaned & enriched database', 'Training documentation'],
    faqs: [
      { q: 'Which CRM do you support?', a: 'All major CRMs — HubSpot, Salesforce, Pipedrive, Zoho, and Microsoft Dynamics. We also build custom CRM setups.' },
      { q: 'Can you migrate data from our old CRM?', a: 'Yes. We handle full data migration including contacts, deals, activities, and historical records.' },
    ],
  },
  {
    id: '9',
    title: 'Account-Based Marketing',
    slug: 'account-based-marketing',
    shortDescription: 'Target high-value enterprise accounts with hyper-personalized, multi-channel campaigns.',
    icon: 'Target',
    features: ['Account identification & prioritization', 'Multi-channel personalization', 'Executive outreach', 'ABM reporting & attribution'],
    overview: 'When target accounts are few but valuable, precision beats volume. Our ABM programs combine data, creative, and outreach to win key accounts.',
    process: ['Account selection & research', 'Persona development', 'Multi-channel campaign design', 'Personalized content creation', 'Measurement & optimization'],
    benefits: ['Higher win rates on target accounts', 'Shorter sales cycles', 'Cross-sell and expansion opportunities', 'Executive-level engagement'],
    deliverables: ['Named account list', 'Personalized campaigns per account', 'Executive outreach sequences', 'ROI and attribution reporting'],
    faqs: [
      { q: 'How many accounts should we target?', a: 'Most ABM programs start with 20–100 named accounts, scaling as the program matures. We help define the right scope for your business.' },
      { q: 'What channels do you use for ABM?', a: 'Typically LinkedIn, email, direct mail, and paid media — all personalized to each account.' },
    ],
  },
  {
    id: '10',
    title: 'Demand Generation',
    slug: 'demand-generation',
    shortDescription: 'Build brand awareness and create market demand that feeds a predictable sales pipeline.',
    icon: 'TrendingUp',
    features: ['Brand positioning', 'Multi-channel demand creation', 'Event & webinar campaigns', 'Paid media management'],
    overview: 'The best leads come from markets you\'ve helped create. Our demand generation programs build brand presence and market desire that translates into qualified pipeline.',
    process: ['Market & competitive analysis', 'Positioning & messaging', 'Campaign strategy', 'Multi-channel execution', 'Pipeline reporting'],
    benefits: ['Create new market demand', 'Build brand authority', 'Predictable lead flow', 'Scale as you grow'],
    deliverables: ['Brand positioning framework', 'Multi-channel campaigns', 'Lead generation reports', 'Market intelligence insights'],
    faqs: [
      { q: 'How is demand generation different from lead generation?', a: 'Lead generation targets existing demand. Demand generation creates new demand by educating and influencing your market, resulting in a larger, more sustainable pipeline.' },
      { q: 'What channels do you use?', a: 'A combination of content, events, paid media, social, email, and PR — customized to your market.' },
    ],
  },
]

// Industry data — 9 industries
export interface Industry {
  id: string
  title: string
  slug: string
  description: string
  icon: string
  challenges: string[]
  idealStrategy: string
  channels: string[]
  process: string[]
  faqs: { q: string; a: string }[]
}

export const industries: Industry[] = [
  {
    id: '1',
    title: 'SaaS',
    slug: 'saas',
    description: 'Generate leads for B2B SaaS companies targeting SMB to enterprise buyers.',
    icon: 'Code',
    challenges: ['Long sales cycles with multiple stakeholders', 'High customer acquisition costs', 'High churn requiring continuous pipeline', 'Product-led vs. sales-led fit ambiguity'],
    idealStrategy: 'Combine inbound SEO/content for top-of-funnel with targeted LinkedIn outreach and ABM for enterprise deals. Use AI to automate qualification and prioritize hot leads.',
    channels: ['LinkedIn Outreach', 'Cold Email', 'SEO & Content', 'ABM', 'Paid Social (LinkedIn)'],
    process: ['ICP definition & persona building', 'Multi-channel outreach sequencing', 'AI-powered lead scoring', 'Demo booking & qualification', 'CRM sync & pipeline reporting'],
    faqs: [
      { q: 'What lead volume can a SaaS company expect?', a: 'Volume depends on ICP, market, and channel mix. A typical SMB-focused SaaS can expect 50–200 qualified leads/month. Enterprise programs are more targeted with 10–50 high-value leads/month.' },
      { q: 'How do you handle trial-to-paid conversion?', a: 'We build nurture sequences for trial users, scoring behavioral signals to identify upgrade-ready accounts.' },
    ],
  },
  {
    id: '2',
    title: 'AI',
    slug: 'ai',
    description: 'Navigate the fast-moving AI market to generate leads for AI tool and platform companies.',
    icon: 'Brain',
    challenges: ['Highly technical audience', 'Rapid market changes', 'Trust and credibility building', 'Regulatory uncertainty in some verticals'],
    idealStrategy: 'Lead with education and thought leadership. Use content marketing for inbound, combined with targeted LinkedIn outreach to technical decision-makers and C-suite AI adopters.',
    channels: ['LinkedIn Outreach', 'SEO & Content', 'Webinars & Events', 'Cold Email', 'Community-Led Growth'],
    process: ['Technical persona research', 'Content strategy for AI audience', 'Multi-channel sequencing', 'Demo/technical consultation booking', 'ROI measurement'],
    faqs: [
      { q: 'How do you reach technical AI buyers?', a: 'We build profiles of technical evaluators (CTOs, Heads of AI, Data Science leads) and personalize outreach with relevant technical context and use cases.' },
      { q: 'Is cold outreach effective for AI companies?', a: 'Yes, especially when personalized. Our AI-personalized outreach achieves 3–5x response rates compared to generic campaigns.' },
    ],
  },
  {
    id: '3',
    title: 'HR Tech',
    slug: 'hr-tech',
    description: 'Connect HR tech vendors with HR leaders, talent acquisition teams, and CHROs.',
    icon: 'Users',
    challenges: ['Budget approval from multiple stakeholders', 'Long procurement cycles', 'HR teams overwhelmed by vendor noise', 'Demonstrating clear ROI to finance'],
    idealStrategy: 'Use content-led inbound for HR professionals, combined with targeted email to HR directors and C-suite (CHRO, CFO). Account-based marketing works well for enterprise HR tech.',
    channels: ['Content Marketing', 'Cold Email', 'LinkedIn Outreach', 'ABM', 'Webinars'],
    process: ['Stakeholder mapping within HR', 'Multi-message outreach by role', 'Case study-led engagement', 'Demo and trial booking', 'ROI tracking'],
    faqs: [
      { q: 'Who is the primary decision-maker for HR tech?', a: 'Typically CHRO, VP of HR, or Head of Talent Acquisition. For larger platforms, CFO and IT also have input.' },
      { q: 'What content resonates with HR buyers?', a: 'Industry benchmarks, workforce trend reports, and case studies showing measurable impact on hiring and retention.' },
    ],
  },
  {
    id: '4',
    title: 'Manufacturing',
    slug: 'manufacturing',
    description: 'Generate B2B leads for industrial manufacturers and B2B suppliers.',
    icon: 'Factory',
    challenges: ['Complex buying committees', 'Long sales cycles (6–18 months)', 'Relationship-driven purchasing', 'Regional and language diversity'],
    idealStrategy: 'Combine trade show strategy, targeted LinkedIn outreach to plant managers and procurement, and account-based campaigns for enterprise manufacturers.',
    channels: ['LinkedIn Outreach', 'Trade Show Follow-up', 'Cold Email', 'SEO (industry keywords)', 'Partner channel'],
    process: ['Target account identification', 'Multi-stakeholder outreach', 'Plant/facility-level targeting', 'Procurement engagement', 'Long-cycle pipeline management'],
    faqs: [
      { q: 'How do you handle long manufacturing sales cycles?', a: 'We build sustained nurture programs with multiple touchpoints over 6–18 months, tracking engagement signals to identify when prospects are ready to buy.' },
      { q: 'Do you handle multi-language outreach?', a: 'Yes. We support outreach in English, Mandarin, Vietnamese, Malay, Thai, Arabic, and more.' },
    ],
  },
  {
    id: '5',
    title: 'Logistics',
    slug: 'logistics',
    description: 'Generate leads for logistics providers, freight forwarders, and supply chain solutions.',
    icon: 'Truck',
    challenges: ['Price-sensitive market', 'Commoditized services', 'Complex routing and compliance', 'Regional market differences'],
    idealStrategy: 'Focus on digital presence for inbound leads, combined with targeted LinkedIn and email campaigns to logistics managers, supply chain directors, and procurement leads.',
    channels: ['SEO & Content', 'LinkedIn Outreach', 'Cold Email', 'Marketplace & directory listings', 'Referral programs'],
    process: ['Route and lane analysis', 'Target company identification', 'Decision-maker outreach', 'Rate quote and proposal stage', 'Relationship building'],
    faqs: [
      { q: 'How do you differentiate logistics companies in a competitive market?', a: 'Through hyper-personalized outreach that references specific shipping lanes, volume patterns, and pain points — not generic logistics pitches.' },
      { q: 'Do you cover cross-border logistics?', a: 'Yes. We have specific expertise in Southeast Asia, Middle East, and Asia-Pacific cross-border logistics lead generation.' },
    ],
  },
  {
    id: '6',
    title: 'Healthcare',
    slug: 'healthcare',
    description: 'Navigate strict healthcare compliance to generate leads for healthtech and medtech companies.',
    icon: 'Stethoscope',
    challenges: ['Strict compliance and regulations', 'Long procurement and approval cycles', 'Multiple gatekeepers', 'Trust and credibility requirements'],
    idealStrategy: 'Compliance-first approach with content marketing targeting healthcare administrators and clinical leaders. Use ABM for hospital systems and targeted LinkedIn for healthtech buyers.',
    channels: ['LinkedIn Outreach', 'Medical conferences', 'Content Marketing', 'Email (HIPAA-conscious)', 'Referrals & KOL engagement'],
    process: ['Compliance review of all materials', 'Healthcare persona mapping', 'Multi-stakeholder ABM campaigns', 'Clinical champion identification', 'Procurement navigation'],
    faqs: [
      { q: 'How do you handle HIPAA compliance in outreach?', a: 'All outreach materials are reviewed for compliance. We never ask for or handle protected health information (PHI). Our campaigns target business decision-makers.' },
      { q: 'Who are the decision-makers in healthcare organizations?', a: 'CMIOs, CTOs, Clinical Directors, Procurement, and C-suite (CEO, CFO) — depending on the purchase type and value.' },
    ],
  },
  {
    id: '7',
    title: 'FinTech',
    slug: 'fintech',
    description: 'Generate leads for financial technology companies across payments, banking, and investing.',
    icon: 'DollarSign',
    challenges: ['Regulatory complexity', 'High trust requirements', 'Long compliance cycles', 'Technical and business stakeholder alignment'],
    idealStrategy: 'Use thought leadership content to build trust, combined with ABM for financial institutions and targeted LinkedIn outreach to heads of innovation, digital transformation, and finance.',
    channels: ['LinkedIn Outreach', 'ABM', 'Content Marketing', 'Conference & event marketing', 'Referral & partner channels'],
    process: ['Regulatory landscape mapping', 'Target institution identification', 'Multi-stakeholder engagement', 'Compliance-aware content', 'Pilot and proof-of-concept booking'],
    faqs: [
      { q: 'How do you reach financial institution decision-makers?', a: 'Through LinkedIn with personalized content referencing their digital transformation initiatives, and through industry events where compliance-friendly conversations happen.' },
      { q: 'Do you handle regulatory considerations in outreach?', a: 'We ensure all materials are reviewed for regulatory appropriateness and never make claims that would require regulatory approval.' },
    ],
  },
  {
    id: '8',
    title: 'Cybersecurity',
    slug: 'cybersecurity',
    description: 'Generate leads for cybersecurity vendors targeting CISOs, IT security teams, and enterprise buyers.',
    icon: 'Shield',
    challenges: ['Highly technical audience', 'Long enterprise sales cycles', 'Procurement complexity', 'Trust and credential requirements'],
    idealStrategy: 'Lead with thought leadership and threat intelligence content. Use ABM for enterprise CISOs, targeted LinkedIn outreach to security leaders, and conference-led engagement.',
    channels: ['LinkedIn Outreach', 'ABM', 'Content Marketing (threat intel)', 'Webinars & podcasts', 'Partner & analyst channel'],
    process: ['Security persona research', 'Threat landscape personalization', 'Multi-stakeholder CISO engagement', 'Proof-of-concept and trial booking', 'ROI and risk quantification'],
    faqs: [
      { q: 'Who is the primary buyer for cybersecurity tools?', a: 'CISOs, CTOs, IT Security Directors, and increasingly, CFOs for risk and compliance purchases. Procurement and legal also involved in enterprise deals.' },
      { q: 'How do you personalize at scale for security buyers?', a: 'We analyze public breach data, SEC filings, and company announcements to personalize outreach with relevant threat context and risk reduction angles.' },
    ],
  },
  {
    id: '9',
    title: 'Professional Services',
    slug: 'professional-services',
    description: 'Generate leads for consulting firms, agencies, and professional service providers.',
    icon: 'Briefcase',
    challenges: ['Building credibility from scratch', 'Trust-first buying decisions', 'Multiple decision-makers', 'Differentiating in a crowded market'],
    idealStrategy: 'Use content marketing to demonstrate expertise and attract inbound. Combine with targeted LinkedIn outreach to executives and C-suite buyers looking for professional services.',
    channels: ['LinkedIn Outreach', 'Content Marketing', 'Cold Email', 'Referral programs', 'Webinars & speaking'],
    process: ['Niche positioning and differentiation', 'Executive persona targeting', 'Thought leadership campaigns', 'Inbound inquiry handling', 'Qualification and proposal stage'],
    faqs: [
      { q: 'How do you help professional services firms stand out?', a: 'Through deep niche specialization in your specific service area and hyper-personalized outreach that demonstrates you understand their specific business challenges.' },
      { q: 'What is realistic for a new professional services firm?', a: 'Most firms see 5–15 qualified leads per month in the first 3 months, scaling to 20–50/month by month 6 as content and authority builds.' },
    ],
  },
]

// Country data — 10 countries
export interface Country {
  id: string
  name: string
  slug: string
  flag: string
  description: string
  localMarket: string
  buyerBehavior: string
  channels: string[]
  localCaseStudies: string
  faqs: { q: string; a: string }[]
}

export const countries: Country[] = [
  {
    id: '1',
    name: 'Singapore',
    slug: 'singapore',
    flag: '🇸🇬',
    description: 'Southeast Asia\'s premier business hub — ideal for regional and global expansion.',
    localMarket: 'Singapore is a gateway to Southeast Asia\'s 700M+ population. The market is mature, English-speaking, with high digital adoption. Government-backed Smart Nation initiatives drive strong demand for B2B tech and professional services.',
    buyerBehavior: 'Singapore buyers are relationship-oriented but increasingly data-driven. Decisions often involve formal RFP processes. Trust is built through face-to-face meetings and local references. Decision-makers include MDs, VPs, and C-suite executives.',
    channels: ['LinkedIn Outreach', 'Cold Email', 'Referrals & warm introductions', 'Events & networking', 'Content Marketing'],
    localCaseStudies: '',
    faqs: [
      { q: 'What is the typical B2B sales cycle in Singapore?', a: 'SMB decisions typically take 1–3 months. Enterprise deals can run 6–12 months with formal procurement processes. Relationships and trust are critical throughout.' },
      { q: 'Do I need to be physically present in Singapore to sell there?', a: 'Not necessarily. Many Singapore B2B buyers are comfortable with virtual meetings. However, in-person relationship building accelerates trust and deals significantly.' },
    ],
  },
  {
    id: '2',
    name: 'Vietnam',
    slug: 'vietnam',
    flag: '🇻🇳',
    description: 'Southeast Asia\'s fastest-growing economy — high digital adoption, young workforce.',
    localMarket: 'Vietnam\'s economy is growing at 6–8% annually, driven by manufacturing, tech, and services. A young, digitally native population (median age 30) is rapidly adopting B2B tools. English is widely spoken in business circles.',
    buyerBehavior: 'Vietnamese buyers value personal relationships and trust. Word-of-mouth and peer recommendations are powerful. Decision-makers often include founders, MDs, and heads of departments. Formal structures are less rigid than in Singapore.',
    channels: ['LinkedIn Outreach', 'Cold Email (VN addresses)', 'Facebook & Zalo (local platforms)', 'Referrals', 'Local events & meetups'],
    localCaseStudies: '',
    faqs: [
      { q: 'Is Vietnam ready for B2B SaaS?', a: 'Absolutely. Vietnam has one of the fastest-growing SaaS adoption rates in Southeast Asia, particularly in HR tech, logistics, fintech, and manufacturing.' },
      { q: 'What language should outreach be in?', a: 'English works for enterprise and tech companies. For SMBs and local businesses, bilingual (Vietnamese + English) outreach performs significantly better.' },
    ],
  },
  {
    id: '3',
    name: 'Malaysia',
    slug: 'malaysia',
    flag: '🇲🇾',
    description: 'A stable, multicultural market bridging ASEAN and global business standards.',
    localMarket: 'Malaysia\'s diversified economy spans tech, manufacturing, oil & gas, and services. Kuala Lumpur is a regional HQ hub for multinationals. The government\'s Digital Economy Blueprint drives B2B tech adoption across all sectors.',
    buyerBehavior: 'Malaysian buyers balance relationship-building with data-driven decision-making. Multinational companies follow global procurement processes; local companies are more relationship-driven. Malay, English, and Mandarin all used in business.',
    channels: ['LinkedIn Outreach', 'Cold Email', 'Events & exhibitions', 'Referrals', 'Content Marketing (multilingual)'],
    localCaseStudies: '',
    faqs: [
      { q: 'What are the key business regions in Malaysia?', a: 'Kuala Lumpur (federal territory and Selangor) is the primary B2B hub. Penang is strong for tech and manufacturing. Johor is growing for logistics and supply chain.' },
      { q: 'How does Malaysian business culture affect sales?', a: 'Trust and relationship-building precede deal-closing. Expect multiple meetings and relationship cultivation. Decisions often involve consensus among senior stakeholders.' },
    ],
  },
  {
    id: '4',
    name: 'Thailand',
    slug: 'thailand',
    flag: '🇹🇭',
    description: 'Southeast Asia\'s second-largest economy — booming B2B market with strong tourism and manufacturing.',
    localMarket: 'Thailand\'s B2B market is driven by manufacturing (automotive, electronics), tourism, and a growing tech startup ecosystem. Bangkok is the regional hub. The government\'s Thailand 4.0 policy drives digital transformation demand.',
    buyerBehavior: 'Thai buyers are relationship-centric and hierarchical. Business is conducted in Thai or English depending on company type. Building face-to-face rapport is essential. Decisions involve senior management approval.',
    channels: ['LinkedIn Outreach', 'Cold Email', 'Local events & trade shows', 'Referrals', 'LINE (popular local platform)'],
    localCaseStudies: '',
    faqs: [
      { q: 'Is Thailand 4.0 driving B2B tech demand?', a: 'Yes. The Thailand 4.0 initiative specifically promotes adoption of AI, IoT, and digital platforms across manufacturing, logistics, and services — creating significant B2B opportunity.' },
      { q: 'What language works best in Thailand?', a: 'Thai language outreach significantly outperforms English for local companies. English works well for multinationals and international joint ventures in Bangkok.' },
    ],
  },
  {
    id: '5',
    name: 'Indonesia',
    slug: 'indonesia',
    flag: '🇮🇩',
    description: 'Southeast Asia\'s largest economy and fourth-largest country — massive B2B opportunity.',
    localMarket: 'Indonesia\'s 270M population and growing middle class make it the largest B2B market in ASEAN. Jakarta is the business hub. Digital adoption is accelerating rapidly, especially post-pandemic. Key sectors: fintech, e-commerce, logistics, manufacturing.',
    buyerBehavior: 'Indonesian buyers value personal relationships (referred to as "trust"). Decision-making can be centralized or distributed depending on company size. WhatsApp is the dominant business communication tool. Enterprise deals often involve multiple rounds of approval.',
    channels: ['LinkedIn Outreach', 'Cold Email & WhatsApp', 'Local events & seminars', 'Referrals & partners', 'Content Marketing'],
    localCaseStudies: '',
    faqs: [
      { q: 'How do I navigate Indonesia\'s regulatory environment?', a: 'Foreign B2B companies often need a local entity or partnership. We can help identify the right market entry approach and ensure compliance with BKPM regulations.' },
      { q: 'What is the best outreach channel in Indonesia?', a: 'LinkedIn for enterprise and tech companies, WhatsApp for SMBs and local businesses. Email works but WhatsApp follow-up dramatically improves response rates.' },
    ],
  },
  {
    id: '6',
    name: 'Philippines',
    slug: 'philippines',
    flag: '🇵🇭',
    description: 'English-speaking BPO powerhouse with growing tech and startup ecosystem.',
    localMarket: 'The Philippines is globally known for its BPO industry but is rapidly evolving into a B2B market in its own right. Manila is the hub. Strong English proficiency and Western business culture make it an accessible market for US and European companies.',
    buyerBehavior: 'Filipino buyers are relationship-oriented, formal in business communication, and highly responsive to email. Decision-makers are often CFOs, COOs, and Managing Directors for B2B purchases. Peer recommendations carry significant weight.',
    channels: ['LinkedIn Outreach', 'Cold Email', 'Events & networking', 'Referrals (very strong here)', 'Content Marketing'],
    localCaseStudies: '',
    faqs: [
      { q: 'Is the Philippines a good market for B2B SaaS?', a: 'Yes, especially for CRM, HR tech, and operations tools. The BPO and startup ecosystems are early adopters. Enterprise adoption is growing rapidly.' },
      { q: 'How important is relationship-building in Philippines B2B sales?', a: 'Extremely important. Filipino business culture values personal relationships ("pakikisama"). Invest time in relationship building before pushing for a sale.' },
    ],
  },
  {
    id: '7',
    name: 'Australia',
    slug: 'australia',
    flag: '🇦🇺',
    description: 'Sophisticated, English-speaking B2B market with high digital maturity.',
    localMarket: 'Australia\'s B2B market is highly developed and digitally mature. Sydney and Melbourne are the primary hubs. Strong demand across fintech, healthtech, agritech, and professional services. High customer expectations and competitive landscape.',
    buyerBehavior: 'Australian buyers are pragmatic, data-driven, and skeptical of hard-sell tactics. They expect high-quality content and evidence. Decisions are often made by committees. Contract terms are typically 12–24 months.',
    channels: ['LinkedIn Outreach', 'Cold Email', 'SEO & Content Marketing', 'ABM', 'Events & webinars'],
    localCaseStudies: '',
    faqs: [
      { q: 'How does Australian business culture differ from the US/UK?', a: 'More direct and less formal than UK, more relationship-focused than US. Australians value authenticity and transparency. Punctuality and follow-through are expected.' },
      { q: 'What are the key B2B sectors in Australia?', a: 'Financial services, mining & resources (tech for), healthcare, agtech, education, and professional services. Sydney and Melbourne dominate for tech and finance.' },
    ],
  },
  {
    id: '8',
    name: 'UAE',
    slug: 'uae',
    flag: '🇦🇪',
    description: 'Middle East\'s premier business hub — gateway to GCC and North Africa markets.',
    localMarket: 'The UAE, particularly Dubai and Abu Dhabi, is the Middle East\'s #1 business destination. Zero income tax, 100% foreign ownership, and world-class infrastructure make it ideal for B2B operations. Key sectors: finance, logistics, real estate, tech, healthcare.',
    buyerBehavior: 'UAE buyers are relationship-driven and appreciate formal, professional engagement. Business is conducted in English primarily. Face-to-face meetings are expected for significant deals. Government entities and SOEs require specific procurement processes.',
    channels: ['LinkedIn Outreach', 'Cold Email', 'Events & trade shows (many in Dubai)', 'Referrals & partnerships', 'ABM for enterprise'],
    localCaseStudies: '',
    faqs: [
      { q: 'Do I need a local entity to sell in the UAE?', a: 'You can sell remotely to UAE companies, but having a UAE entity or local partner significantly improves trust and deal-closing rates. Free zones like DAFZA and DMCC offer easy setup.' },
      { q: 'Is the UAE market expensive to sell into?', a: 'It can be. CAC is higher than SEA but deal sizes and contract values are also proportionally larger. ROI on well-executed UAE campaigns is typically strong.' },
    ],
  },
  {
    id: '9',
    name: 'Saudi Arabia',
    slug: 'saudi-arabia',
    flag: '🇸🇦',
    description: 'The Gulf\'s largest economy — rapidly opening with Vision 2030 driving massive B2B opportunity.',
    localMarket: 'Saudi Arabia is undergoing rapid transformation under Vision 2030, creating massive demand for B2B services and technology. The market is moving beyond oil into entertainment, tourism, tech, and renewable energy. Riyadh and Jeddah are the main business hubs.',
    buyerBehavior: 'Saudi buyers are increasingly open to digital solutions. Relationship with a trusted local partner is critical. Government entities are major buyers. Decision-makers are often at senior executive or ministerial level for large contracts.',
    channels: ['LinkedIn Outreach', 'Cold Email', 'Local events & conferences', 'Government & enterprise ABM', 'Referrals & local partners'],
    localCaseStudies: '',
    faqs: [
      { q: 'Is Saudi Arabia open to foreign B2B companies?', a: 'Very much so. Vision 2030 actively encourages foreign investment and partnerships. The Saudi market is more open than ever for quality B2B solutions.' },
      { q: 'What language should I use?', a: 'English is widely used in Saudi business, particularly for tech and international companies. Arabic is preferred for government and traditional business entities.' },
    ],
  },
  {
    id: '10',
    name: 'Qatar',
    slug: 'qatar',
    flag: '🇶🇦',
    description: 'The Gulf\'s wealthiest economy per capita — high-value B2B market with world-class infrastructure.',
    localMarket: 'Qatar\'s small but incredibly wealthy economy (GDP per capita among world\'s highest) creates a high-value B2B market. Doha is the hub. Strong demand in finance, sports/event management, logistics, healthcare, and digital transformation.',
    buyerBehavior: 'Qatari buyers are sophisticated and expect premium quality. Decisions involve thorough evaluation. Personal relationships matter significantly. Government and SOE procurement follows formal tender processes for larger purchases.',
    channels: ['LinkedIn Outreach', 'Cold Email', 'Business events & summits', 'Referrals & local partners', 'ABM'],
    localCaseStudies: '',
    faqs: [
      { q: 'How does Qatar\'s small market size affect B2B opportunity?', a: 'The smaller market means fewer but higher-value deals. Average contract values in Qatar are among the highest in the region. Quality over quantity is the right approach.' },
      { q: 'Do I need to visit Qatar to sell there?', a: 'Initial meetings are increasingly virtual, but regular in-person presence (quarterly at minimum) is important for relationship-building in Qatari business culture.' },
    ],
  },
]

// Navigation links
export interface NavLink {
  label: string
  href: string
  children?: NavLink[]
}

export const navigationLinks: NavLink[] = [
  {
    label: 'Services',
    href: '/services',
    children: services.map((service) => ({
      label: service.title,
      href: `/services/${service.slug}`,
    })),
  },
  {
    label: 'Industries',
    href: '/industries',
    children: industries.map((industry) => ({
      label: industry.title,
      href: `/industries/${industry.slug}`,
    })),
  },
  {
    label: 'Countries',
    href: '/countries',
    children: countries.map((country) => ({
      label: `${country.flag} ${country.name}`,
      href: `/countries/${country.slug}`,
    })),
  },
  {
    label: 'Case Studies',
    href: '/case-studies',
  },
  {
    label: 'Pricing',
    href: '/pricing',
  },
  {
    label: 'Resources',
    href: '/resources',
    children: [
      { label: 'Guides', href: '/resources/guides' },
      { label: 'Blog', href: '/resources/blog' },
      { label: 'Templates', href: '/resources/templates' },
    ],
  },
  {
    label: 'About',
    href: '/about',
  },
]

// Footer links structure
export const footerLinks = {
  services: {
    title: 'Services',
    links: services.slice(0, 6).map((service) => ({
      label: service.title,
      href: `/services/${service.slug}`,
    })),
  },
  industries: {
    title: 'Industries',
    links: industries.map((industry) => ({
      label: industry.title,
      href: `/industries/${industry.slug}`,
    })),
  },
  company: {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Contact', href: '/contact' },
      { label: 'Careers', href: '/careers' },
    ],
  },
  resources: {
    title: 'Resources',
    links: [
      { label: 'Blog', href: '/resources/blog' },
      { label: 'Guides', href: '/resources/guides' },
      { label: 'Templates', href: '/resources/templates' },
      { label: 'FAQ', href: '/faq' },
    ],
  },
  legal: {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Cookie Policy', href: '/cookies' },
    ],
  },
}
