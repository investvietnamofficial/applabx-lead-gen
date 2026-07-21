// Comparison data types
export interface ComparisonFeature {
  feature: string
  leftScore: string | number
  rightScore: string | number
  winner?: 'left' | 'right' | 'tie'
  description?: string
}

export interface ComparisonData {
  id: string
  slug: string
  title: string
  description: string
  leftOption: {
    name: string
    tagline: string
    description: string
    bestFor: string[]
  }
  rightOption: {
    name: string
    tagline: string
    description: string
    bestFor: string[]
  }
  features: ComparisonFeature[]
  verdict: {
    winner: 'left' | 'right' | 'tie'
    summary: string
    leftBestFor: string
    rightBestFor: string
  }
  canonical: string
}

// Apollo vs ZoomInfo
export const apolloVsZoominfo: ComparisonData = {
  id: 'apollo-vs-zoominfo',
  slug: 'apollo-vs-zoominfo',
  title: 'Apollo vs ZoomInfo: Which B2B Data Platform Wins in 2024?',
  description: 'Compare Apollo and ZoomInfo for B2B lead generation. We break down data quality, pricing, features, and real-world performance to help you choose the right platform.',
  leftOption: {
    name: 'Apollo',
    tagline: 'All-in-One Growth Platform',
    description: 'Apollo is an all-in-one sales intelligence and engagement platform that combines database, enrichment, sequencing, and chat.',
    bestFor: [
      'Teams wanting integrated outreach',
      'Startups and SMBs with limited budgets',
      'Companies needing multi-channel sequences',
    ],
  },
  rightOption: {
    name: 'ZoomInfo',
    tagline: 'Enterprise-Grade B2B Intelligence',
    description: 'ZoomInfo is an enterprise-focused B2B database with industry-leading data accuracy and deep firmographic information.',
    bestFor: [
      'Enterprise teams with larger budgets',
      'Companies prioritizing data accuracy above all',
      'Organizations with dedicated SDR teams',
    ],
  },
  features: [
    { feature: 'Database Size', leftScore: '450M+ contacts', rightScore: '500M+ contacts', winner: 'right' },
    { feature: 'Data Accuracy', leftScore: '85-90%', rightScore: '95%+', winner: 'right', description: 'ZoomInfo maintains higher accuracy through human verification' },
    { feature: 'Email Verification', leftScore: 'Built-in', rightScore: 'Add-on (Purchased)', winner: 'left' },
    { feature: 'Pricing', leftScore: '$$ (Starting $49/mo)', rightScore: '$$$$ (Starting $10K+/yr)', winner: 'left', description: 'Apollo significantly more accessible for SMBs' },
    { feature: 'CRM Integration', leftScore: 'Native + Zapier', rightScore: 'Native', winner: 'tie' },
    { feature: 'Outreach Sequences', leftScore: 'Built-in', rightScore: 'Not included', winner: 'left', description: 'Apollo includes email sequences; ZoomInfo is data-only' },
    { feature: 'LinkedIn Integration', leftScore: 'Good', rightScore: 'Excellent', winner: 'right' },
    { feature: 'API Access', leftScore: 'Full API', rightScore: 'Enterprise API', winner: 'tie' },
    { feature: 'Chrome Extension', leftScore: 'Yes', rightScore: 'Yes', winner: 'tie' },
    { feature: 'Data Enrichment', leftScore: 'Real-time', rightScore: 'Batch processing', winner: 'left' },
    { feature: 'Intent Data', leftScore: 'Limited', rightScore: 'Advanced intent signals', winner: 'right' },
    { feature: 'Free Tier', leftScore: 'Yes (Limited)', rightScore: 'No', winner: 'left' },
  ],
  verdict: {
    winner: 'tie',
    summary: 'Both platforms excel in different areas. Your choice depends on budget, team size, and whether you need integrated outreach or just premium data.',
    leftBestFor: 'Apollo is best for teams that want an all-in-one solution with built-in sequencing, email verification, and budget-friendly pricing. Ideal for startups and growing companies.',
    rightBestFor: 'ZoomInfo is best for enterprise organizations that prioritize absolute data accuracy above cost and only need premium data, not outreach tools.',
  },
  canonical: 'https://lead-gen-agency.applabx.com/compare/apollo-vs-zoominfo',
}

// Clay vs Apollo
export const clayVsApollo: ComparisonData = {
  id: 'clay-vs-apollo',
  slug: 'clay-vs-apollo',
  title: 'Clay vs Apollo: Which Outreach Automation Platform Wins?',
  description: 'Compare Clay and Apollo for modern B2B outreach. Learn about data enrichment capabilities, AI features, and which platform delivers better ROI.',
  leftOption: {
    name: 'Clay',
    tagline: 'AI-Powered Data Enrichment',
    description: 'Clay is a modern data enrichment platform with powerful AI integration and the ability to pull data from 50+ providers.',
    bestFor: [
      'Teams wanting AI-powered personalization',
      'Companies needing multi-source enrichment',
      'Users who want deep customization',
    ],
  },
  rightOption: {
    name: 'Apollo',
    tagline: 'Integrated Sales Platform',
    description: 'Apollo combines database access with outreach capabilities in a unified platform designed for full-cycle sales teams.',
    bestFor: [
      'Teams wanting built-in sequences',
      'Companies needing integrated analytics',
      'Users preferring simpler setup',
    ],
  },
  features: [
    { feature: 'Data Enrichment Sources', leftScore: '50+ providers', rightScore: 'Native + 10+', winner: 'left' },
    { feature: 'AI Integration', leftScore: 'OpenAI, Claude, Gemini', rightScore: 'Built-in AI', winner: 'left' },
    { feature: 'Outreach Tools', leftScore: 'External integration', rightScore: 'Built-in', winner: 'right' },
    { feature: 'Email Sequences', leftScore: 'Via integrations', rightScore: 'Built-in', winner: 'right' },
    { feature: 'Learning Curve', leftScore: 'Steeper', rightScore: 'Moderate', winner: 'right', description: 'Clay requires more setup; Apollo is more plug-and-play' },
    { feature: 'Customization', leftScore: 'Extremely high', rightScore: 'Moderate', winner: 'left' },
    { feature: 'Database Size', leftScore: 'Access to 50+ DBs', rightScore: '450M+ native', winner: 'tie' },
    { feature: 'Pricing', leftScore: '$$ (Credits-based)', rightScore: '$$ (Starting $49/mo)', winner: 'tie' },
    { feature: 'HTTP Requests', leftScore: 'Yes', rightScore: 'No', winner: 'left', description: 'Clay enables custom API workflows' },
    { feature: 'Real-time Data', leftScore: 'Yes', rightScore: 'Yes', winner: 'tie' },
    { feature: 'Campaign Analytics', leftScore: 'Via integrations', rightScore: 'Native dashboard', winner: 'right' },
    { feature: 'Team Collaboration', leftScore: 'Good', rightScore: 'Excellent', winner: 'right' },
  ],
  verdict: {
    winner: 'tie',
    summary: 'Clay excels at data enrichment and AI-powered workflows; Apollo provides a more complete, integrated sales platform. Many teams use both.',
    leftBestFor: 'Clay is best for data-obsessed teams that want to combine multiple enrichment sources, use custom AI prompts, and build highly personalized campaigns.',
    rightBestFor: 'Apollo is best for teams that want an all-in-one platform without the complexity of managing multiple integrations.',
  },
  canonical: 'https://lead-gen-agency.applabx.com/compare/clay-vs-apollo',
}

// Cold Email vs LinkedIn Outreach
export const coldEmailVsLinkedin: ComparisonData = {
  id: 'cold-email-vs-linkedin',
  slug: 'cold-email-vs-linkedin',
  title: 'Cold Email vs LinkedIn Outreach: Which Channel Delivers Better ROI?',
  description: 'Compare cold email and LinkedIn outreach for B2B lead generation. We analyze response rates, costs, scalability, and strategic applications.',
  leftOption: {
    name: 'Cold Email',
    tagline: 'High-Volume Direct Outreach',
    description: 'Cold email is direct outreach to prospects via email, offering high scalability and automation capabilities.',
    bestFor: [
      'High-volume campaigns',
      'Long sales cycles',
      'Technical products',
    ],
  },
  rightOption: {
    name: 'LinkedIn Outreach',
    tagline: 'Relationship-First Approach',
    description: 'LinkedIn outreach builds relationships through professional networking, ideal for establishing trust.',
    bestFor: [
      'Enterprise B2B sales',
      'Relationship-driven sales',
      'Thought leadership',
    ],
  },
  features: [
    { feature: 'Average Response Rate', leftScore: '1-5%', rightScore: '5-15%', winner: 'right' },
    { feature: 'Volume Capacity', leftScore: '100s-1000s/day', rightScore: '50-100/day', winner: 'left' },
    { feature: 'Cost Per Lead', leftScore: '$5-25', rightScore: '$15-50', winner: 'left' },
    { feature: 'Deliverability', leftScore: 'Requires warm-up', rightScore: 'Always reaches inbox', winner: 'right' },
    { feature: 'Personalization Depth', leftScore: 'Template + variables', rightScore: 'Deep profile insights', winner: 'tie' },
    { feature: 'Sales Cycle Impact', leftScore: 'Can accelerate', rightScore: 'Shortens significantly', winner: 'right' },
    { feature: 'Account Targeting', leftScore: 'Good', rightScore: 'Excellent (ABM)', winner: 'right' },
    { feature: 'Compliance Risk', leftScore: 'Medium (CAN-SPAM, GDPR)', rightScore: 'Low', winner: 'right' },
    { feature: 'Automation Ease', leftScore: 'High', rightScore: 'Moderate', winner: 'left' },
    { feature: 'Meeting Book Rate', leftScore: '0.5-2%', rightScore: '2-5%', winner: 'right' },
    { feature: 'Ideal for Enterprise', leftScore: 'Yes', rightScore: 'Excellent', winner: 'right' },
    { feature: 'Data Required', leftScore: 'Email addresses', rightScore: 'LinkedIn profile', winner: 'tie' },
  ],
  verdict: {
    winner: 'tie',
    summary: 'Both channels deliver excellent results when used correctly. The best approach combines both for a multi-channel strategy.',
    leftBestFor: 'Cold email is best for high-volume campaigns, reaching technical buyers, and products with longer sales cycles where email is the expected communication channel.',
    rightBestFor: 'LinkedIn is best for enterprise sales, building relationships with decision-makers, and industries where trust and credibility are paramount.',
  },
  canonical: 'https://lead-gen-agency.applabx.com/compare/cold-email-vs-linkedin',
}

// Inbound Marketing vs Outbound Sales
export const inboundVsOutbound: ComparisonData = {
  id: 'inbound-vs-outbound',
  slug: 'inbound-vs-outbound',
  title: 'Inbound Marketing vs Outbound Sales: Building a Balanced Pipeline',
  description: 'Compare inbound marketing and outbound sales strategies. Learn when to use each approach and how to combine them for maximum revenue growth.',
  leftOption: {
    name: 'Inbound Marketing',
    tagline: 'Attract and Convert',
    description: 'Inbound marketing attracts prospects through valuable content, SEO, and inbound channels they discover organically.',
    bestFor: [
      'Long-term brand building',
      'Lower CAC over time',
      'Products with research phases',
    ],
  },
  rightOption: {
    name: 'Outbound Sales',
    tagline: 'Proactively Target and Close',
    description: 'Outbound sales proactively reaches prospects through cold outreach, ads, and direct engagement.',
    bestFor: [
      'Faster pipeline building',
      'Enterprise targeting',
      'New market entry',
    ],
  },
  features: [
    { feature: 'Time to Results', leftScore: '3-6 months', rightScore: '4-8 weeks', winner: 'right' },
    { feature: 'Cost Per Lead', leftScore: '$30-100', rightScore: '$100-300', winner: 'left', description: 'Inbound CPL decreases over time; outbound is consistent' },
    { feature: 'Lead Quality', leftScore: 'Self-qualified', rightScore: 'AI-qualified', winner: 'tie' },
    { feature: 'Predictability', leftScore: 'Moderate', rightScore: 'High', winner: 'right' },
    { feature: 'Scalability', leftScore: 'High (once built)', rightScore: 'High (with resources)', winner: 'tie' },
    { feature: 'Brand Building', leftScore: 'Strong', rightScore: 'Limited', winner: 'left' },
    { feature: 'Market Expansion', leftScore: 'Organic discovery', rightScore: 'Direct targeting', winner: 'right' },
    { feature: 'Competition Visibility', leftScore: 'Through content', rightScore: 'Face-to-face', winner: 'tie' },
    { feature: 'Ideal for New Products', leftScore: 'Challenging', rightScore: 'Excellent', winner: 'right' },
    { feature: 'Sales Team Dependency', leftScore: 'Lower', rightScore: 'Higher', winner: 'left' },
    { feature: 'Long-term ROI', leftScore: 'Very high', rightScore: 'Moderate', winner: 'left' },
    { feature: 'Control Over Timing', leftScore: 'Low', rightScore: 'High', winner: 'right' },
  ],
  verdict: {
    winner: 'tie',
    summary: 'The modern revenue strategy combines both approaches. Most successful B2B companies use inbound for long-term growth and outbound for targeted pipeline acceleration.',
    leftBestFor: 'Inbound is best for companies with patience to build content assets, products that buyers research before purchasing, and strategies focused on long-term brand authority.',
    rightBestFor: 'Outbound is best for companies needing immediate pipeline, targeting specific accounts, entering competitive markets, or launching new products.',
  },
  canonical: 'https://lead-gen-agency.applabx.com/compare/inbound-vs-outbound',
}

// ABM vs Traditional B2B Marketing
export const abmVsTraditionalB2b: ComparisonData = {
  id: 'abm-vs-traditional-b2b',
  slug: 'abm-vs-traditional-b2b',
  title: 'ABM vs Traditional B2B Marketing: Precision vs Scale',
  description: 'Compare Account-Based Marketing with traditional B2B marketing approaches. Discover which strategy works better for your goals and resources.',
  leftOption: {
    name: 'Account-Based Marketing',
    tagline: 'Precision-Targeted Accounts',
    description: 'ABM focuses resources on high-value target accounts, treating each as a market of one.',
    bestFor: [
      'Enterprise sales',
      'High-value deals',
      'Limited target market',
    ],
  },
  rightOption: {
    name: 'Traditional B2B Marketing',
    tagline: 'Broad-Reach Lead Generation',
    description: 'Traditional B2B marketing casts a wider net to generate leads across many accounts.',
    bestFor: [
      'SMB and mid-market',
      'High-volume needs',
      'New market expansion',
    ],
  },
  features: [
    { feature: 'Targeting', leftScore: 'Accounts (20-100)', rightScore: 'Leads (1000s)', winner: 'tie', description: 'Different scales for different strategies' },
    { feature: 'Average Deal Size', leftScore: '$50K-500K+', rightScore: '$5K-50K', winner: 'left' },
    { feature: 'Sales Cycle', leftScore: '6-18 months', rightScore: '1-3 months', winner: 'right' },
    { feature: 'Marketing Investment', leftScore: 'High (per account)', rightScore: 'Lower (per lead)', winner: 'tie' },
    { feature: 'Win Rates', leftScore: '40-60%', rightScore: '10-20%', winner: 'left', description: 'ABM typically achieves 2-3x higher win rates' },
    { feature: 'Alignment Required', leftScore: 'Sales + Marketing tight', rightScore: 'More independent', winner: 'tie' },
    { feature: 'Personalization', leftScore: 'Deep (per account)', rightScore: 'Segment-level', winner: 'left' },
    { feature: 'Revenue Predictability', leftScore: 'High', rightScore: 'Moderate', winner: 'left' },
    { feature: 'Ideal for SaaS Enterprise', leftScore: 'Excellent', rightScore: 'Good', winner: 'left' },
    { feature: 'Ideal for SMB', leftScore: 'Challenging', rightScore: 'Excellent', winner: 'right' },
    { feature: 'Content Requirements', leftScore: 'Custom per account', rightScore: 'Reusable templates', winner: 'right' },
    { feature: 'Attribution', leftScore: 'Multi-touch complex', rightScore: 'First/last touch', winner: 'right' },
  ],
  verdict: {
    winner: 'tie',
    summary: 'ABM and traditional B2B marketing are not mutually exclusive. Many companies use ABM for enterprise targets and traditional marketing for volume.',
    leftBestFor: 'ABM is best for companies selling to enterprise accounts with large contract values, limited total addressable market, and strong sales-marketing alignment.',
    rightBestFor: 'Traditional B2B marketing is best for companies with SMB/mid-market focus, high-volume lead needs, or limited resources for personalized campaigns.',
  },
  canonical: 'https://lead-gen-agency.applabx.com/compare/abm-vs-traditional-b2b',
}

// LinkedIn Sales Navigator vs Email Outreach
export const linkedinVsEmail: ComparisonData = {
  id: 'linkedin-vs-email',
  slug: 'linkedin-vs-email',
  title: 'LinkedIn Sales Navigator vs Email Outreach: Channel Strategy Guide',
  description: 'Compare LinkedIn Sales Navigator with traditional email outreach. Learn the strengths of each channel and how to use them together.',
  leftOption: {
    name: 'LinkedIn Sales Navigator',
    tagline: 'Social Selling Intelligence',
    description: 'LinkedIn Sales Navigator provides social selling tools, advanced search, and relationship insights on the world\'s largest professional network.',
    bestFor: [
      'Enterprise relationships',
      'Decision-maker targeting',
      'Research-heavy outreach',
    ],
  },
  rightOption: {
    name: 'Email Outreach',
    tagline: 'Direct, Scalable Communication',
    description: 'Email outreach reaches prospects directly in their inbox with personalized, automated campaigns.',
    bestFor: [
      'High-volume campaigns',
      'Follow-up sequences',
      'Detailed tracking',
    ],
  },
  features: [
    { feature: 'Monthly Cost', leftScore: '$99+/user', rightScore: '$20-100/mo', winner: 'right' },
    { feature: 'Contact Access', leftScore: 'Limited (1st/2nd degree)', rightScore: 'Full (with data provider)', winner: 'tie' },
    { feature: 'Response Rate', leftScore: '5-15%', rightScore: '1-5%', winner: 'left' },
    { feature: 'Deliverability', leftScore: '100%', rightScore: '70-95%', winner: 'left' },
    { feature: 'Search Capabilities', leftScore: 'Excellent filters', rightScore: 'Limited (via CRM)', winner: 'left' },
    { feature: 'InMail Limit', leftScore: '50/month (free tier)', rightScore: 'Unlimited (paid)', winner: 'right' },
    { feature: 'Follow-up Ease', leftScore: 'Moderate', rightScore: 'Excellent', winner: 'right' },
    { feature: 'Content Sharing', leftScore: 'Native articles/posts', rightScore: 'Attachments', winner: 'tie' },
    { feature: 'Relationship Tracking', leftScore: 'Yes (activity alerts)', rightScore: 'Limited', winner: 'left' },
    { feature: 'Ideal for C-Suite', leftScore: 'Excellent', rightScore: 'Good', winner: 'left' },
    { feature: 'Sequence Automation', leftScore: 'Limited', rightScore: 'Full automation', winner: 'right' },
    { feature: 'Best Combined With', leftScore: 'Email follow-up', rightScore: 'LinkedIn touchpoints', winner: 'tie' },
  ],
  verdict: {
    winner: 'tie',
    summary: 'LinkedIn Sales Navigator and email work best when used together. LinkedIn opens conversations; email nurtures them to meetings.',
    leftBestFor: 'LinkedIn Sales Navigator is best for social selling, building relationships with C-suite executives, and leveraging professional context for personalization.',
    rightBestFor: 'Email outreach is best for high-volume campaigns, detailed tracking and analytics, and multi-touch nurture sequences that drive meetings.',
  },
  canonical: 'https://lead-gen-agency.applabx.com/compare/linkedin-vs-email',
}

// Export all comparisons as array
export const comparisons = [
  apolloVsZoominfo,
  clayVsApollo,
  coldEmailVsLinkedin,
  inboundVsOutbound,
  abmVsTraditionalB2b,
  linkedinVsEmail,
]

// Helper to find comparison by slug
export function getComparisonBySlug(slug: string): ComparisonData | undefined {
  return comparisons.find((c) => c.slug === slug)
}
