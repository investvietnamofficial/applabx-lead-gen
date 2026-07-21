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
export interface ServiceProblem {
  title: string
  description: string
}

export interface ServiceProcessStep {
  title: string
  description: string
}

export interface Service {
  id: string
  title: string
  slug: string
  shortDescription: string
  icon: string
  features: string[]
  overview: string
  problems: ServiceProblem[]
  methodology: string
  process: string[]
  processSteps: ServiceProcessStep[]
  benefits: string[]
  deliverables: string[]
  pricingFactors: string[]
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
    overview: 'We identify, qualify, and deliver decision-maker contacts directly to your sales team. Our AI-driven approach ensures every lead is pre-vetted and ready for conversation. B2B lead generation is the cornerstone of sustainable revenue growth — without a consistent pipeline of qualified prospects, even the best product or service struggles to scale. Our comprehensive approach combines cutting-edge AI technology with human expertise to build a reliable, predictable lead flow that your sales team can convert with confidence.',
    problems: [
      { title: 'Wasted Sales Hours on Unqualified Prospects', description: 'Your sales team spends countless hours researching and reaching out to prospects who never respond, don\'t fit your ideal customer profile, or lack the budget and authority to buy. This inefficiency compounds quickly — every hour spent on dead-end outreach is an hour not spent closing deals.' },
      { title: 'Inconsistent Pipeline and Unpredictable Revenue', description: 'Without a systematic approach to lead generation, your pipeline becomes a rollercoaster of feast or famine. One month you have more leads than you can handle; the next, your team is twiddling their thumbs. This unpredictability makes forecasting impossible and growth planning a shot in the dark.' },
      { title: 'Outdated or Inaccurate Contact Data', description: 'Generic contact databases are filled with old email addresses, wrong job titles, and companies that no longer exist. Reaching out to these contacts damages your sender reputation, triggers spam filters, and wastes your team\'s limited time on bounces and wrong contacts.' },
      { title: 'Difficulty Reaching Decision-Makers', description: 'Gatekeepers, voicemail drops, and email filters prevent your message from ever reaching the VP, Director, or C-suite executive who actually makes purchasing decisions. Your outreach gets lost in the noise meant for their subordinates.' },
    ],
    methodology: 'Our B2B lead generation methodology combines AI-powered data intelligence with human-led research and multi-channel outreach to deliver a consistent stream of qualified leads. We start by deeply understanding your ideal customer profile — not just surface-level firmographics, but psychographics, buying triggers, and decision-making patterns. Then we leverage our proprietary databases and AI tools to identify and enrich contact data with real-time information. Every lead undergoes our multi-stage qualification process before it reaches your team, ensuring you spend time only on prospects who are ready for a meaningful conversation.',
    process: ['Define ICP and target persona', 'AI-powered data enrichment', 'Multi-channel outreach sequencing', 'Lead qualification & scoring', 'CRM sync & handoff'],
    processSteps: [
      { title: 'ICP Definition and Persona Development', description: 'We work closely with your team to define your Ideal Customer Profile — the companies and contacts most likely to buy and benefit from your solution. This includes firmographic criteria (company size, industry, revenue), technographic data (tools they use), behavioral signals (content they consume, events they attend), and buying stage indicators. A well-defined ICP is the foundation of efficient lead generation.' },
      { title: 'AI-Powered Data Enrichment and Prospect Discovery', description: 'Using our proprietary AI tools combined with leading data providers like Apollo and LinkedIn Sales Navigator, we build a comprehensive prospect database. We enrich contact records with verified email addresses, phone numbers, job titles, and company information. Our AI cross-references multiple data sources to ensure accuracy and flags outdated records for removal.' },
      { title: 'Multi-Channel Outreach Sequencing', description: 'We design personalized outreach sequences across email, LinkedIn, and phone (where applicable). Each sequence is tailored to the prospect\'s industry, role, and likely pain points. Sequences typically include 5–8 touchpoints over 3–4 weeks, combining different channels and message formats to maximize response rates.' },
      { title: 'Lead Qualification and Scoring', description: 'Every lead that responds to our outreach undergoes rigorous qualification. We assess budget, authority, need, and timeline (BANT criteria) through carefully crafted email exchanges and discovery conversations. Leads are scored based on their fit with your ICP and expressed interest level, so your sales team knows exactly which leads to prioritize.' },
      { title: 'CRM Integration and Handoff', description: 'Qualified leads are seamlessly synced to your CRM with full context — company background, engagement history, qualification notes, and suggested talking points. This ensures your sales team walks into every call fully prepared, reducing ramp time and increasing close rates.' },
    ],
    benefits: ['Reduce prospecting time by 70%', 'Access to hard-to-reach decision-makers', 'Predictable lead volume', 'Full transparency with real-time dashboards'],
    deliverables: ['Verified B2B contact database', 'Qualified meeting-ready leads', 'Weekly lead reports', 'CRM-ready data exports'],
    pricingFactors: ['Target market size and geographic scope', 'Number of ideal customer profiles (ICPs)', 'Volume of leads required per month', 'Multi-channel vs. single-channel approach', 'Additional data enrichment requirements', 'CRM integration complexity'],
    faqs: [
      { q: 'How quickly can you start delivering leads?', a: 'We typically deliver first qualified leads within 2–3 weeks of project kickoff, depending on the complexity of your ICP. The first few weeks are spent on research, data enrichment, and outreach sequence setup to ensure quality from day one.' },
      { q: 'What does "qualified lead" mean at AppLabx?', a: 'A qualified lead is a verified contact at a target company who matches your ICP and has expressed interest or fit based on our multi-step qualification process. We assess budget fit, decision-making authority, current need, and timeline before declaring a lead qualified for sales handoff.' },
      { q: 'How many leads should I expect per month?', a: 'Lead volume depends on your ICP scope, target market size, and channel strategy. A focused ICP targeting a specific industry vertical might yield 50–100 highly qualified leads monthly, while a broader market approach could generate 200–500 leads. We\'ll agree on realistic targets during our discovery call.' },
      { q: 'Do you work with specific industries or company sizes?', a: 'We have deep expertise in SaaS, AI, FinTech, cybersecurity, professional services, and manufacturing. However, we work with B2B companies across all industries targeting SMB through enterprise accounts. Our methodology adapts to your specific market and buyer journey.' },
      { q: 'How do you ensure data accuracy?', a: 'We use multi-source verification for all contact data, combining AI-powered enrichment with human verification for key decision-makers. Every email address is validated before outreach, and we continuously clean our databases to remove bounces and outdated records.' },
    ],
  },
  {
    id: '2',
    title: 'Appointment Setting',
    slug: 'appointment-setting',
    shortDescription: 'Book qualified sales meetings with your ideal prospects using intelligent outbound strategies.',
    icon: 'Calendar',
    features: ['Calendar booking integration', 'Decision-maker outreach', 'Multi-timezone scheduling'],
    overview: 'Stop chasing no-shows. Our appointment setting service ensures your sales team walks into booked meetings with qualified prospects who are pre-educated on your value. Unlike typical appointment setting that focuses purely on booking numbers, we prioritize meeting quality — each appointment is with a vetted decision-maker who has shown genuine interest in your solution.',
    problems: [
      { title: 'High No-Show Rates Eating Into Sales Productivity', description: 'Your calendar looks full, but half the meetings don\'t show up. When they do, the prospect seems surprised or uninterested. This pattern wastes your salespeople\'s time, disrupts their schedule, and demoralizes the team. Poorly qualified appointments create a false sense of pipeline activity while delivering no revenue.' },
      { title: 'Sales Team Spending Time on Research Instead of Selling', description: 'Before every meeting, your sales reps scramble to research the prospect, find relevant context, and prepare talking points. This research time cuts into actual selling time and often results in generic, poorly prepared first meetings that fail to resonate.' },
      { title: 'Difficulty Reaching Decision-Makers', description: 'Getting on the calendar of a VP or C-suite executive is incredibly difficult. These prospects are flooded with meeting requests and have limited availability. Generic "30-minute discovery call" requests get ignored or declined.' },
      { title: 'Inconsistent Meeting Quality and Conversion Rates', description: 'Some booked meetings convert well; others are clearly mismatches. The inconsistency makes it hard to optimize your sales process and creates frustration when well-qualified prospects receive poor meeting experiences.' },
    ],
    methodology: 'Our appointment setting methodology is built on a foundation of thorough prospect research, multi-channel engagement, and rigorous qualification. We don\'t just book meetings — we pre-educate prospects on your value proposition, establish clear agenda and mutual fit, and provide your sales team with comprehensive meeting preparation notes. This ensures every meeting is a productive conversation with a qualified decision-maker who is genuinely interested in exploring your solution.',
    process: ['Profile your ideal customer', 'Research and personalization', 'Multi-channel outreach', 'Meeting qualification', 'Calendar booking confirmation'],
    processSteps: [
      { title: 'Ideal Customer Profile Refinement', description: 'We start by deeply understanding who you want to meet with — not just company criteria, but the specific roles, industries, and company situations that indicate a need for your solution. This profile guides all outreach to ensure we\'re reaching people most likely to benefit from and purchase your offering.' },
      { title: 'Comprehensive Prospect Research', description: 'Before any outreach, we research each target prospect individually. This includes their recent company news, professional background, LinkedIn activity, and any relevant context that can be used for personalization. Research-backed outreach dramatically improves response rates and meeting quality.' },
      { title: 'Multi-Channel Engagement Sequences', description: 'We reach out through email, LinkedIn, and other channels with highly personalized messages that reference specific pain points or opportunities relevant to each prospect. Our sequences are designed to provide value first, not just ask for time.' },
      { title: 'Rigorous Meeting Qualification', description: 'When a prospect expresses interest, we conduct a brief qualification call or email exchange to confirm budget, timeline, decision-making authority, and fit. This step eliminates mismatches before they reach your calendar and ensures your team only spends time on legitimate opportunities.' },
      { title: 'Calendar Booking with Full Preparation Materials', description: 'We book meetings directly on your calendar using tools like Calendly, HubSpot Meetings, or custom integrations. Each booking includes comprehensive prospect summaries, talking points, and suggested questions to ensure your team walks in fully prepared.' },
    ],
    benefits: ['Higher meeting show rates', 'Pre-educated prospects', 'Scalable sales pipeline', 'Detailed meeting preparation notes'],
    deliverables: ['Booked appointments on your calendar', 'Prospect background summaries', 'Meeting preparation notes', 'Post-meeting follow-up sequences'],
    pricingFactors: ['Target audience size and geographic scope', 'Complexity of the sales cycle', 'Number of meetings required per month', 'Industry vertical specialization', 'Calendar integration requirements', 'Meeting confirmation and reminder protocols'],
    faqs: [
      { q: 'What is a typical show rate for booked appointments?', a: 'Our average show rate is 80%+. We achieve this through rigorous qualification, multi-touch confirmation sequences, and sending calendar invites with meeting agendas. Prospects who confirm twice and understand the meeting purpose are far more likely to show up prepared.' },
      { q: 'Do you book appointments globally?', a: 'Yes. We support all major timezones and have dedicated teams for APAC, EMEA, and Americas markets. Our multi-timezone scheduling capabilities ensure meetings are booked at times that work for both your team and your prospects.' },
      { q: 'How do you handle gatekeepers and voicemail?', a: 'Our approach focuses on providing value and building genuine interest, which naturally bypasses gatekeepers. For executive targets, we use multiple channels (LinkedIn, email, phone) and highly personalized messages that appeal directly to decision-makers\' interests and pain points.' },
      { q: 'What happens if a meeting needs to be rescheduled?', a: 'We include rescheduling links and follow confirmation sequences for all booked meetings. If a prospect needs to reschedule, we make it easy to do so rather than losing the opportunity entirely. Rescheduled meetings often have higher show rates than original bookings.' },
      { q: 'Can you integrate with our existing calendar system?', a: 'Yes. We integrate with all major calendar and scheduling tools including Calendly, HubSpot Meetings, Calendly, Chili Piper, and native Google/Outlook calendars. We also support custom scheduling links and direct calendar booking for more complex arrangements.' },
    ],
  },
  {
    id: '3',
    title: 'Cold Email Outreach',
    slug: 'cold-email-outreach',
    shortDescription: 'High-deliverability cold email campaigns that land in the inbox and drive responses.',
    icon: 'Mail',
    features: ['Email warm-up & deliverability', 'AI personalization at scale', 'A/B testing & optimization'],
    overview: 'Cold email remains one of the highest-ROI outbound channels when done correctly. We build, warm, and optimize email campaigns that generate real responses. Unlike spray-and-pray email blasts, our approach focuses on strategic targeting, genuine personalization, and inbox placement that builds lasting sender reputation.',
    problems: [
      { title: 'Emails Landing in Spam or Promo Folders', description: 'Your carefully crafted emails never reach the inbox. They land in spam, promotions, or worse — get blocked entirely by email security filters. This happens when sending infrastructure isn\'t properly warmed, domain reputation is poor, or content triggers spam filters.' },
      { title: 'Low Response Rates Despite Good Content', description: 'Your open rates are decent, but nobody replies. The problem isn\'t your email copy — it\'s likely targeting, timing, or lack of personalization. Generic outreach gets ignored in a sea of similar messages prospects receive every day.' },
      { title: 'Wasted Budget on Bounced Emails and Bad Data', description: 'You\'re paying for email credits that go to bounced addresses, outdated contacts, and wrong recipients. Bad data doesn\'t just waste money — it damages your sender reputation and makes it harder to reach even valid addresses.' },
      { title: 'Inconsistent Campaign Performance', description: 'One campaign works great, the next flops. Without systematic testing and optimization, you\'re left guessing why performance varies. This inconsistency makes it impossible to predict results or optimize your marketing spend effectively.' },
    ],
    methodology: 'Our cold email methodology starts with infrastructure setup, not copywriting. We build dedicated sending domains and warm them properly before any outreach begins. Then we create highly segmented prospect lists based on deep ICP analysis, not broad searches. Every email is crafted with genuine personalization that references specific details about the recipient, not just token merge fields. We continuously test and optimize based on real response data, not just open and click rates.',
    process: ['Technical setup & warm-up', 'ICP definition & data sourcing', 'Copywriting & personalization', 'A/B testing & optimization', 'Analytics & reporting'],
    processSteps: [
      { title: 'Technical Infrastructure Setup and Warming', description: 'We set up dedicated sending domains (separate from your main company domain) and configure all technical elements for optimal deliverability. This includes SPF, DKIM, and DMARC records. Then we warm these domains over 4–6 weeks with gradual volume increases, mimicking natural email activity patterns.' },
      { title: 'ICP Definition and Prospect List Building', description: 'Using your ideal customer profile, we build targeted prospect lists using a combination of our proprietary databases, LinkedIn Sales Navigator, Apollo, and manual research. Lists are segmented by industry, company size, role, and other relevant criteria to enable personalized messaging at scale.' },
      { title: 'Strategic Copywriting and AI Personalization', description: 'Our copywriters craft email sequences that speak directly to each segment\'s pain points and interests. We use AI tools to generate personalized content blocks for each email — referencing recent news, specific job roles, mutual connections, or industry trends. The goal is genuine relevance, not just "I noticed you work at X company."' },
      { title: 'A/B Testing and Continuous Optimization', description: 'We test multiple variations of subject lines, email copy, send times, and calls-to-action. Each test generates data that informs the next optimization cycle. We don\'t just run one campaign — we continuously improve based on real response patterns and prospect feedback.' },
      { title: 'Comprehensive Analytics and Reporting', description: 'You receive weekly reports showing deliverability rates, open rates, response rates, meeting bookings, and revenue attribution. We track the full funnel from email sent to revenue closed, so you can calculate true ROI on your cold email investment.' },
    ],
    benefits: ['95%+ inbox deliverability', 'Personalized at scale with AI', 'Continuous optimization', 'Full campaign transparency'],
    deliverables: ['Warmed email accounts', 'Personalized email sequences (5–8 touchpoints)', 'Weekly performance reports', 'Reply & meeting booking'],
    pricingFactors: ['Number of sending domains required', 'Prospect list size and complexity', 'Email sequence length and customization', 'A/B testing scope', 'Reporting frequency and detail level', 'Meeting booking and CRM integration'],
    faqs: [
      { q: 'Do you handle email warm-up?', a: 'Yes. We build and warm dedicated sending infrastructure for every campaign to ensure optimal deliverability from day one. Our warm-up process mimics natural email behavior over 4–6 weeks, establishing sender reputation before we send any cold email.' },
      { q: 'How many emails do you send per day?', a: 'Volume is carefully calibrated based on your target market, account size, and industry norms. We prioritize quality over volume — sending too many emails too quickly is the fastest way to damage your sender reputation. Typical volumes range from 50–200 emails per day per domain, depending on warming status.' },
      { q: 'How do you personalize emails at scale?', a: 'We use a combination of AI tools and human copywriting. For each prospect segment, we create personalized email templates with dynamic content blocks that reference specific details — company news, job responsibilities, industry trends, or mutual connections. The goal is genuine personalization that resonates, not just token merge fields.' },
      { q: 'What email platform do you use?', a: 'We work with all major email platforms including Apollo, Instantly, Smartlead, and Lemlist. We also support custom SMTP setups for enterprise clients who want more control over their sending infrastructure.' },
      { q: 'How long before I see results?', a: 'Most clients see first responses within 2–3 weeks of campaign launch. However, meaningful reply rates and meeting bookings typically build over 6–8 weeks as warming improves and we optimize based on early data. Cold email is a marathon, not a sprint.' },
    ],
  },
  {
    id: '4',
    title: 'LinkedIn Outreach',
    slug: 'linkedin-outreach',
    shortDescription: 'Connect with decision-makers on LinkedIn using personalized, compliance-safe outreach sequences.',
    icon: 'Users',
    features: ['LinkedIn profile optimization', 'Connection request sequences', 'InMail & follow-up automation'],
    overview: 'LinkedIn is where B2B decisions are made. We run compliant, personalized LinkedIn outreach campaigns that build genuine relationships and drive meetings. Unlike automated connection spammers, our approach builds real relationships that convert into business opportunities.',
    problems: [
      { title: 'Low Connection Request Acceptance Rates', description: 'Your connection requests get ignored or declined. The problem is likely generic, self-centered messages that don\'t give prospects a reason to connect. "I\'d like to add you to my network" doesn\'t work when prospects receive 50 similar requests daily.' },
      { title: 'LinkedIn Profile Not Optimized for Outreach', description: 'When prospects check your profile before accepting, they don\'t see anything compelling. Your headline is your job title, your summary is generic corporate speak, and there\'s nothing that establishes credibility or hints at value they might receive from connecting.' },
      { title: 'Inconsistent Engagement After Connection', description: 'You make connections but they go nowhere. Without a systematic follow-up strategy and valuable content engagement, these connections turn into dead-end LinkedIn contacts rather than warm leads or conversations.' },
      { title: 'LinkedIn Policy Compliance Risks', description: 'Using the wrong tools or tactics can get your account restricted or banned. LinkedIn\'s algorithms are increasingly sophisticated at detecting spammy behavior, and violations can permanently damage your ability to use the platform for business development.' },
    ],
    methodology: 'Our LinkedIn outreach methodology is built on relationship-first principles. We optimize your profile to attract your target audience, then run personalized connection campaigns that provide value rather than just asking for meetings. Every connection request includes a compelling reason to connect, and follow-up sequences keep the conversation going naturally. All campaigns strictly follow LinkedIn\'s Terms of Service to protect your account.',
    process: ['Profile & brand positioning', 'Target audience research', 'Connection request sequences', 'Content-led engagement', 'Meeting conversion'],
    processSteps: [
      { title: 'LinkedIn Profile Optimization', description: 'We transform your LinkedIn profile into a lead generation asset. This includes rewriting your headline to communicate value, crafting a compelling summary that speaks to your target audience\'s pain points, and optimizing your experience section to demonstrate credibility. Your profile becomes a silent salesperson that attracts the right connections.' },
      { title: 'Target Audience Research and Segmentation', description: 'We identify your ideal connections using LinkedIn\'s search and filter capabilities, supplemented by our research team. Target lists are segmented by industry, job function, company size, seniority level, and other relevant criteria. This segmentation enables highly targeted, personalized outreach.' },
      { title: 'Personalized Connection Request Campaigns', description: 'Each connection request includes a personalized note referencing specific details about the prospect — their recent post, company news, shared background, or relevant pain point. We test multiple message variations to optimize acceptance rates while keeping every message genuine and human.' },
      { title: 'Content-Led Engagement and Follow-Up', description: 'After connection, we engage with prospects\' content and deliver value through a mix of articles, insights, and conversation starters. This builds familiarity and trust before any meeting request, dramatically increasing conversion rates.' },
      { title: 'Meeting Request and Conversion', description: 'Once a relationship foundation is established, we naturally transition to meeting requests. These requests reference previous conversations and provide clear value propositions for the meeting, resulting in high acceptance rates.' },
    ],
    benefits: ['Access to C-suite and VPs', 'Relationship-first approach', 'Compliant with LinkedIn ToS', 'Measurable pipeline results'],
    deliverables: ['Optimized LinkedIn presence', 'Qualified connection requests', 'InMail response tracking', 'Pipeline attribution reports'],
    pricingFactors: ['Number of LinkedIn profiles managed', 'Target audience size and complexity', 'Connection request volume', 'Content creation and engagement scope', 'Meeting booking requirements', 'Campaign duration and testing scope'],
    faqs: [
      { q: 'Is LinkedIn outreach safe for my account?', a: 'Yes. We strictly follow LinkedIn\'s Terms of Service and use human-led, personalized sequences — never bots or mass auto-connection tools. Our approach builds genuine relationships that LinkedIn\'s algorithms actually reward with better visibility.' },
      { q: 'How many connections can I expect per month?', a: 'Most clients see 150–400 new relevant connections per month, with a 25–40% acceptance rate on connection requests. Volume depends on targeting specificity, message quality, and how well your profile is optimized. We start conservative and scale based on results.' },
      { q: 'Do you handle InMail messages as well?', a: 'Yes. InMail messages allow you to reach prospects you\'re not connected to directly. We create targeted InMail campaigns with the same personalization and compliance standards as our connection campaigns.' },
      { q: 'What\'s the difference between LinkedIn outreach and LinkedIn ads?', a: 'LinkedIn outreach (also called social selling) involves direct 1-to-1 communication with specific prospects via connection requests and InMail. LinkedIn ads are paid advertising shown to broad audiences. Outreach typically has higher conversion rates for high-value B2B targets, while ads are better for brand awareness and lead magnet distribution.' },
      { q: 'Can you manage multiple LinkedIn profiles?', a: 'Yes. We can manage outreach campaigns across multiple LinkedIn accounts simultaneously, ensuring each follows its own engagement patterns to maintain account health and avoid cross-contamination of data.' },
    ],
  },
  {
    id: '5',
    title: 'SEO Lead Generation',
    slug: 'seo-lead-generation',
    shortDescription: 'Attract high-intent leads organically through search-optimized content and technical SEO.',
    icon: 'Search',
    features: ['Technical SEO audit', 'Keyword research & content strategy', 'Local & global SEO', 'Link building'],
    overview: 'Capture buyers actively searching for your solution. Our SEO lead generation combines technical expertise with content that ranks and converts. Unlike agencies that focus solely on traffic, we optimize for the entire funnel — from ranking for valuable keywords to converting visitors into qualified leads.',
    problems: [
      { title: 'Website Not Ranking for Valuable Keywords', description: 'Your website doesn\'t appear on page one for the keywords your potential customers are searching. You exist online but are invisible to the people actively looking for your solution. Meanwhile, competitors who do rank capture all the organic traffic and leads.' },
      { title: 'High Traffic but Low Lead Generation', description: 'Your site gets visitors, but nobody fills out your contact form or requests a demo. The problem is disconnect between traffic-driving content and conversion-optimized pages. SEO success means nothing if visitors don\'t become leads.' },
      { title: 'Technical SEO Issues Holding Back Rankings', description: 'Your site has crawl errors, slow page speeds, mobile usability issues, or structured data problems that prevent search engines from properly indexing your content. No amount of great content will overcome fundamental technical barriers.' },
      { title: 'Inconsistent or Thin Content Strategy', description: 'Your blog has sporadic posts that don\'t follow a coherent strategy. Some articles rank, others get zero traffic. Without a systematic approach to content creation and optimization, you\'re wasting resources on content that doesn\'t perform.' },
    ],
    methodology: 'Our SEO lead generation methodology combines technical SEO excellence with strategic content creation and conversion optimization. We start with a comprehensive technical audit to identify and fix barriers to ranking. Then we build a content strategy around keywords your potential customers actually search, creating content that ranks and converts. Every piece of content is designed to capture intent and move prospects toward becoming leads.',
    process: ['Technical SEO audit', 'Keyword & competitor research', 'Content creation & optimization', 'Authority building', 'Lead capture & conversion'],
    processSteps: [
      { title: 'Comprehensive Technical SEO Audit', description: 'We analyze your website\'s technical health — crawlability, site architecture, page speed, mobile usability, structured data, indexation, and security. We identify and prioritize technical issues that are holding back your rankings and create a roadmap for fixes.' },
      { title: 'Keyword Research and Content Strategy', description: 'We research keywords your potential customers use when searching for solutions like yours. This includes high-volume head terms, long-tail opportunities, and question-based queries. We map these keywords to content types and buyer journey stages, creating a strategic content calendar.' },
      { title: 'Content Creation and Optimization', description: 'Our team of SEO writers and subject matter experts create new content and optimize existing pages. Every piece follows SEO best practices (title tags, headers, internal linking, images) while being genuinely useful for readers. We balance search engine requirements with human readability.' },
      { title: 'Authority Building Through Link Acquisition', description: 'We build your website\'s authority through strategic link building — outreach to relevant industry publications, digital PR campaigns, broken link building, and resource page outreach. Quality matters more than quantity; we focus on links from reputable, relevant sites.' },
      { title: 'Lead Capture and Conversion Optimization', description: 'Traffic without conversion is vanity. We implement lead capture forms, calls-to-action, and landing pages optimized for conversion. We also analyze user behavior to identify and fix drop-off points in your conversion funnel.' },
    ],
    benefits: ['Sustainable organic traffic', 'High-intent lead capture', 'Long-term compounding results', 'Full technical and content reporting'],
    deliverables: ['Technical SEO audit report', 'Content calendar & articles', 'Keyword ranking reports', 'Qualified organic leads'],
    pricingFactors: ['Website size and technical complexity', 'Number of keywords and market competitiveness', 'Content volume and type requirements', 'Local vs. global SEO scope', 'Link building campaign scope', 'Conversion optimization requirements'],
    faqs: [
      { q: 'How long does SEO take to show results?', a: 'Most clients see meaningful organic traffic growth within 3–6 months. Significant lead generation results typically compound from month 6 onward as pages gain ranking authority. SEO is a long-term investment — the leads and traffic you build compound over time, unlike paid ads that stop when you stop paying.' },
      { q: 'Do you handle local SEO for multiple countries?', a: 'Yes. We run multi-regional SEO programs for Singapore, Vietnam, Southeast Asia, Middle East, and beyond. This includes hreflang implementation, local keyword research, and country-specific content strategies.' },
      { q: 'How do you measure SEO success?', a: 'We track rankings, organic traffic, lead generation (form submissions, calls, demo requests), and revenue attribution. You receive monthly reports showing progress on all key metrics, with clear connections between SEO activity and business results.' },
      { q: 'Do I need to change my website to implement SEO?', a: 'It depends on your current site\'s technical health. We\'ll identify necessary changes in our audit. Some fixes are simple (meta tags, content updates), others may require development resources (site speed, architecture). We provide clear recommendations and can implement changes directly or guide your team.' },
      { q: 'What\'s the difference between SEO and paid search?', a: 'SEO (organic search) involves optimizing your website to rank in unpaid search results. It takes time but provides lasting results and compounding traffic. Paid search involves paying for ad placement in search results. It provides immediate visibility but stops when you stop paying. Most B2B strategies include both for maximum coverage.' },
    ],
  },
  {
    id: '6',
    title: 'Content Marketing',
    slug: 'content-marketing',
    shortDescription: 'Attract, engage, and convert prospects with strategic content that establishes thought leadership.',
    icon: 'FileText',
    features: ['Content strategy & planning', 'SEO-optimized articles', 'Case studies & whitepapers', 'Email newsletters'],
    overview: 'Content is the foundation of inbound lead generation. We create content that ranks on Google, resonates with your audience, and feeds your pipeline consistently. Unlike agencies that produce content for content\'s sake, we focus on strategic content that serves specific business objectives — from awareness to lead capture to sales enablement.',
    problems: [
      { title: 'Content That Doesn\'t Generate Leads', description: 'Your blog gets decent traffic, but nobody converts. The problem is treating content creation as a volume game rather than a strategic activity. Random topics without clear buyer journey mapping create engaged readers who never become leads.' },
      { title: 'Inconsistent Content Production', description: 'You start strong with a flurry of posts, then nothing for months. Inconsistent publishing confuses search algorithms, abandons growing audiences, and signals to prospects that you\'re not reliable enough to trust with their business.' },
      { title: 'Content That Doesn\'t Rank', description: 'You publish great content that never appears in search results. Without SEO optimization, even excellent writing remains invisible. The right content, optimized correctly, can generate leads for years — but unoptimized content generates nothing.' },
      { title: 'Difficulty Scaling Content Production', description: 'As your business grows, content needs multiply. Creating enough to support SEO, social media, email marketing, and sales enablement becomes overwhelming. Internal teams hit capacity limits, and agencies deliver inconsistent quality at scale.' },
    ],
    methodology: 'Our content marketing methodology starts with strategy, not writing. We map content to buyer journey stages and business objectives, creating a editorial calendar that serves your sales funnel. Every piece of content has a purpose — whether that\'s ranking for valuable keywords, nurturing prospects, or building brand authority. We produce at scale without sacrificing quality, using specialist writers for each content type and industry vertical.',
    process: ['Audience & competitor research', 'Content strategy development', 'Content production', 'SEO optimization', 'Distribution & promotion'],
    processSteps: [
      { title: 'Audience and Competitor Research', description: 'We analyze your target audience\'s content consumption habits, information needs, and preferred formats. We also audit your competitors\' content to identify gaps and opportunities. This research informs a content strategy designed to differentiate and resonate.' },
      { title: 'Content Strategy Development', description: 'We create a comprehensive content strategy including topic clusters, content types, publishing cadence, and distribution channels. The strategy maps content to buyer journey stages and business objectives, ensuring every piece serves a clear purpose.' },
      { title: 'High-Quality Content Production', description: 'Our team of specialist writers and subject matter experts produce content across formats — blog articles, whitepapers, case studies, infographics, videos, and more. Every piece undergoes rigorous research, writing, editing, and quality assurance before publication.' },
      { title: 'SEO Optimization and Technical Implementation', description: 'All content is optimized for search before publication. This includes keyword targeting, meta tags, header structure, internal linking, and image optimization. We also ensure fast page speeds and mobile optimization for the best user experience.' },
      { title: 'Distribution and Amplification', description: 'Content alone isn\'t enough — it needs promotion. We distribute content through email newsletters, social media, content syndication, and outreach to relevant publications. Our amplification strategies maximize reach and lead generation from every piece.' },
    ],
    benefits: ['Build brand authority', 'Generate inbound leads organically', 'Support SEO rankings', 'Nurture prospects through the funnel'],
    deliverables: ['Monthly content calendar', 'SEO-optimized articles', 'Gated lead magnets', 'Performance analytics'],
    pricingFactors: ['Content volume and frequency', 'Content type mix (articles, whitepapers, videos)', 'SEO optimization requirements', 'Distribution and amplification scope', 'Lead magnet and gating strategy', 'Analytics and reporting depth'],
    faqs: [
      { q: 'How many articles do you publish per month?', a: 'Typical programs include 4–12 pieces per month depending on your goals and budget. We always prioritize quality over quantity — four exceptional pieces that rank and convert outperform twelve mediocre ones that nobody reads.' },
      { q: 'Do you handle content distribution?', a: 'Yes. We amplify content through email, LinkedIn, and syndication to maximize reach and lead generation. Distribution is included in our content programs — we don\'t just create content and leave it to gather dust.' },
      { q: 'Who writes the content?', a: 'Your content is written by specialists matched to your industry and content type. Blog articles are written by experienced writers with SEO expertise. Technical content goes to subject matter experts. Case studies are crafted by writers skilled in narrative and persuasion. Every piece is edited for quality before publication.' },
      { q: 'Can you create content in multiple languages?', a: 'Yes. We have writers and editors for multiple languages including English, Mandarin, Vietnamese, Malay, Thai, and Arabic. For markets like Southeast Asia and Middle East, bilingual content strategies often perform best.' },
      { q: 'How do you measure content ROI?', a: 'We track content performance at each funnel stage — traffic, engagement, lead captures, MQLs, and revenue attribution. You receive monthly reports showing which content drives results, informing ongoing optimization and future content decisions.' },
    ],
  },
  {
    id: '7',
    title: 'AI Sales Automation',
    slug: 'ai-sales-automation',
    shortDescription: 'Automate repetitive sales tasks with AI so your team focuses on closing deals.',
    icon: 'Bot',
    features: ['AI voice & email agents', 'Lead scoring automation', 'CRM workflow automation', 'Follow-up sequencing'],
    overview: 'Our AI sales automation handles prospecting, qualification, and follow-up so your sales team can spend time on what matters — closing revenue. AI doesn\'t replace your salespeople; it amplifies their productivity by handling the routine work that consumes most of their day.',
    problems: [
      { title: 'Sales Team Overwhelmed by Manual Tasks', description: 'Your salespeople spend more time on data entry, research, and follow-up emails than on actual selling. This inefficiency limits their capacity, frustrates high performers, and creates inconsistent customer experiences.' },
      { title: 'Inconsistent Follow-Up and Response Times', description: 'When a lead comes in, it might get a response in 5 minutes or 5 days — depending on how busy the rep is. Slow responses lose deals. Inconsistent follow-up loses trust. AI ensures every lead gets immediate, consistent attention.' },
      { title: 'Poor Lead Qualification Efficiency', description: 'Your team qualifies the same leads that don\'t convert, wasting time on poor-fit prospects while potentially missing good ones. Without systematic qualification criteria applied consistently, lead routing becomes random.' },
      { title: 'Limited Scalability of Human-Only Operations', description: 'Growing revenue requires growing headcount — or does it? AI can multiply your team\'s output without adding people, handling more prospects, more thoroughly, at any hour of the day.' },
    ],
    methodology: 'Our AI sales automation methodology starts with process mapping and ends with human oversight. We audit your current sales workflow to identify automation opportunities, then implement AI tools that handle repetitive tasks without losing the human touch where it matters. Every automation is monitored and optimized based on performance data.',
    process: ['Process audit & mapping', 'AI tool selection & setup', 'Workflow automation', 'Integration with existing stack', 'Training & optimization'],
    processSteps: [
      { title: 'Sales Process Audit and Automation Mapping', description: 'We analyze your current sales workflow to identify bottlenecks, repetitive tasks, and opportunities for automation. This includes examining how leads enter your system, how they\'re qualified, how follow-up happens, and what data gets captured. We map every step that could benefit from AI assistance.' },
      { title: 'AI Tool Selection and Configuration', description: 'Based on your stack, budget, and specific needs, we select and configure the right AI tools — whether that\'s AI email agents, voice assistants, lead scoring models, or chatbot solutions. We implement tools that integrate with your existing CRM and sales processes.' },
      { title: 'Workflow Automation Development', description: 'We build automated workflows that handle routine tasks — lead response, qualification, routing, follow-up reminders, meeting scheduling, and data capture. Each workflow is designed to feel human and enhance rather than replace your team\'s relationships.' },
      { title: 'Integration with Existing Sales Stack', description: 'AI tools only work if they integrate with your existing systems. We connect AI solutions with your CRM, email platform, calendar, and other sales tools, ensuring seamless data flow and workflow continuity across your entire stack.' },
      { title: 'Team Training and Ongoing Optimization', description: 'Your team needs to understand how to work alongside AI effectively. We provide training on new tools and workflows, plus ongoing optimization based on performance data. AI systems improve over time — we fine-tune based on real results.' },
    ],
    benefits: ['Reduce manual sales work by 60%', '24/7 AI engagement', 'Faster response times', 'Consistent follow-up at scale'],
    deliverables: ['Custom AI agent workflows', 'Automated follow-up sequences', 'CRM integrations', 'Performance dashboards'],
    pricingFactors: ['Current sales stack complexity', 'Number of AI agents required', 'Integration requirements', 'Customization and training needs', 'Volume of leads and interactions', 'Reporting and analytics depth'],
    faqs: [
      { q: 'Does AI replace my sales team?', a: 'No. AI augments your team by handling repetitive tasks — research, data entry, initial outreach, basic qualification, and follow-up. Your salespeople focus on high-value conversations, relationship building, and closing deals. The result is a more efficient team that accomplishes more without the stress of administrative burden.' },
      { q: 'Which CRM do you integrate with?', a: 'We integrate with all major CRMs including HubSpot, Salesforce, Pipedrive, Zoho, and custom setups. Our team assesses your existing stack during the audit phase and recommends integrations that maximize efficiency without requiring system overhauls.' },
      { q: 'How long does implementation take?', a: 'Basic AI automation can be live within 2–4 weeks. More complex implementations with multiple workflows and integrations typically take 6–8 weeks. We provide a realistic timeline during our discovery call based on your specific requirements.' },
      { q: 'Will AI outreach feel robotic to prospects?', a: 'Modern AI personalization is sophisticated enough to feel human. Our AI agents use advanced personalization techniques, natural language processing, and contextual awareness to create genuine-feeling conversations. We test all AI-generated content before deployment to ensure quality.' },
      { q: 'How do you handle AI errors or inappropriate responses?', a: 'All AI implementations include human oversight and guardrails. AI responses are monitored, especially initially, and feedback loops continuously improve quality. For sensitive interactions or high-stakes scenarios, AI flags for human review rather than proceeding autonomously.' },
    ],
  },
  {
    id: '8',
    title: 'CRM Automation',
    slug: 'crm-automation',
    shortDescription: 'Streamline your CRM workflows, data hygiene, and sales processes for maximum efficiency.',
    icon: 'Database',
    features: ['CRM setup & configuration', 'Workflow automation', 'Data enrichment & cleansing', 'Pipeline reporting'],
    overview: 'A clean, automated CRM is the backbone of scalable sales. We build and optimize your CRM so every lead is tracked, every task is automated, and every rep has full visibility. Stop treating your CRM as a contact storage system — it\'s your sales command center when properly configured.',
    problems: [
      { title: 'CRM Data That\'s Outdated and Unreliable', description: 'Your CRM is filled with duplicate contacts, outdated information, and abandoned records. Nobody trusts the data, so nobody uses it consistently. Sales reps maintain their own spreadsheets rather than relying on "the system."' },
      { title: 'Reps Avoiding CRM Because It\'s Too Burdensome', description: 'Your CRM requires too many manual steps, too much data entry, and too much clicking. When logging activities takes longer than having conversations, reps shortchange the process. The result is incomplete data and missed follow-ups.' },
      { title: 'No Visibility Into Pipeline Health', description: 'Managers can\'t see where deals stand, which are at risk, or what the forecast looks like. Without reliable data, forecasting becomes guesswork. By the time problems emerge, it\'s too late to intervene effectively.' },
      { title: 'Tasks and Follow-Ups Falling Through the Cracks', description: 'Promising leads go cold because nobody remembers to follow up. Without automated reminders and task creation, sales reps rely on memory — and memory fails. Every missed follow-up is a potential deal lost.' },
    ],
    methodology: 'Our CRM automation methodology transforms your CRM from a data graveyard into a sales powerhouse. We start with a comprehensive audit of your current setup and data quality. Then we configure workflows that automate the routine, clean up historical data, and build dashboards that provide real-time visibility. The result is a CRM your team actually uses and trusts.',
    process: ['CRM audit & requirements', 'Data cleansing & migration', 'Workflow configuration', 'Automation rule building', 'Team training'],
    processSteps: [
      { title: 'Comprehensive CRM Audit and Requirements Gathering', description: 'We analyze your current CRM setup, usage patterns, pain points, and goals. This includes reviewing your data structure, existing workflows, integration points, and user adoption levels. We interview sales reps and managers to understand real-world needs versus assumed requirements.' },
      { title: 'Data Cleansing, Enrichment, and Migration', description: 'We clean up your existing data — removing duplicates, standardizing formats, and updating outdated records. We enrich your database with fresh company and contact information. For companies migrating to new CRMs, we handle the complete migration with zero data loss.' },
      { title: 'CRM Configuration and Customization', description: 'We configure your CRM to match your sales process — custom fields, deal stages, pipelines, and views. This includes setting up the right dashboards for different user roles and building the reporting structure that provides meaningful insights.' },
      { title: 'Automation Rule Building', description: 'We create automated workflows that handle routine tasks — lead assignment, follow-up reminders, activity logging, task creation, and notification routing. Every workflow is designed to reduce manual work while improving data quality and customer experience.' },
      { title: 'Team Training and Adoption Support', description: 'Technology without adoption is worthless. We provide role-based training for your sales team, managers, and admins. We also create documentation and runbooks that help users navigate the system. Post-launch, we monitor adoption and address issues quickly.' },
    ],
    benefits: ['Clean, reliable data', 'Eliminate manual data entry', 'Full pipeline visibility', 'Faster deal cycles'],
    deliverables: ['Configured CRM system', 'Automated workflows', 'Cleaned & enriched database', 'Training documentation'],
    pricingFactors: ['CRM platform (Salesforce, HubSpot, Pipedrive, etc.)', 'Data volume and migration complexity', 'Number of automated workflows required', 'Custom field and object configuration', 'Integration requirements', 'Training scope and ongoing support'],
    faqs: [
      { q: 'Which CRM do you support?', a: 'All major CRMs — HubSpot, Salesforce, Pipedrive, Zoho, and Microsoft Dynamics. We also build custom CRM setups for companies with unique requirements. Our methodology applies regardless of platform — we focus on your sales process, then configure the CRM to support it.' },
      { q: 'Can you migrate data from our old CRM?', a: 'Yes. We handle full data migration including contacts, deals, activities, and historical records. We ensure zero data loss, proper field mapping, and duplicate handling. Migration includes a validation phase where you verify data integrity before going live.' },
      { q: 'How long does CRM automation take?', a: 'A typical CRM automation project takes 4–8 weeks depending on complexity. Basic workflow automation can be completed in 2–4 weeks. Larger projects with data migration, extensive customization, and multiple integrations take longer. We provide detailed timelines during discovery.' },
      { q: 'Will this disrupt our sales team during implementation?', a: 'We plan implementations to minimize disruption. Most work happens behind the scenes, and we typically roll out changes in phases. We provide training and support during transitions to ensure your team can continue selling while adopting new processes.' },
      { q: 'Do you provide ongoing support after implementation?', a: 'Yes. We offer ongoing support packages that include monitoring, optimization, troubleshooting, and user support. CRM automation is not a set-it-and-forget-it project — continuous improvement based on usage data keeps your system working optimally.' },
    ],
  },
  {
    id: '9',
    title: 'Account-Based Marketing',
    slug: 'account-based-marketing',
    shortDescription: 'Target high-value enterprise accounts with hyper-personalized, multi-channel campaigns.',
    icon: 'Target',
    features: ['Account identification & prioritization', 'Multi-channel personalization', 'Executive outreach', 'ABM reporting & attribution'],
    overview: 'When target accounts are few but valuable, precision beats volume. Our ABM programs combine data, creative, and outreach to win key accounts. Unlike broad-based marketing, ABM focuses resources on a defined set of target companies, treating each as a market of one with personalized campaigns.',
    problems: [
      { title: 'Marketing Reaching the Wrong People', description: 'Broad marketing campaigns cast wide nets that catch few qualified fish. Your message reaches plenty of people, but not the specific decision-makers and influencers who actually control purchasing decisions. Budget is wasted on impressions that never convert.' },
      { title: 'Sales and Marketing Misalignment', description: 'Marketing generates leads that sales ignores; sales chases prospects that marketing never nurtured. Without shared targets and coordinated engagement, leads fall through the cracks and deal velocity suffers. ABM aligns both teams around the same accounts.' },
      { title: 'Long Enterprise Sales Cycles with No Visibility', description: 'Enterprise deals take months or years. Without systematic engagement tracking, you lose visibility into account activity until a deal resurfaces — often too late to influence. ABM maintains consistent engagement throughout the buyer\'s journey.' },
      { title: 'Inability to Personalize at Enterprise Scale', description: 'Enterprise buyers expect personalized engagement, but your team lacks bandwidth to personalize for every target account. Generic campaigns feel like mass marketing and get ignored. ABM strategies use creative tactics to personalize efficiently.' },
    ],
    methodology: 'Our ABM methodology treats each target account as a strategic priority. We identify the accounts most likely to drive revenue, map the buying committee within each, and create personalized campaigns that resonate with each stakeholder\'s specific concerns. Multi-channel coordination — from direct mail to LinkedIn to executive emails — ensures your message breaks through the noise.',
    process: ['Account selection & research', 'Persona development', 'Multi-channel campaign design', 'Personalized content creation', 'Measurement & optimization'],
    processSteps: [
      { title: 'Account Selection and Strategic Research', description: 'We work with your sales and marketing teams to identify the 20–100 target accounts with the highest revenue potential. We research each account deeply — company strategy, financial health, organizational changes, competitive landscape, and emerging needs that your solution could address.' },
      { title: 'Buying Committee Persona Development', description: 'Enterprise purchases involve multiple stakeholders — economic buyers, technical evaluators, end users, and influencers. We map the buying committee for each account, understanding each person\'s priorities, concerns, and how they influence the final decision.' },
      { title: 'Multi-Channel Campaign Design', description: 'We design coordinated campaigns spanning email, LinkedIn, direct mail, paid media, and event marketing. Each channel serves a purpose in the overall account engagement strategy, building awareness, establishing credibility, and driving specific actions.' },
      { title: 'Personalized Content Creation', description: 'Generic content doesn\'t work for ABM. We create personalized content for target accounts — from customized landing pages to account-specific case studies to executive outreach templates that reference specific company situations. Personalization demonstrates that you understand each account\'s unique needs.' },
      { title: 'Measurement, Attribution, and Optimization', description: 'ABM requires different metrics than traditional marketing — account engagement scores, account staging progression, and revenue attribution. We track engagement across all accounts and channels, providing visibility into account health and campaign effectiveness.' },
    ],
    benefits: ['Higher win rates on target accounts', 'Shorter sales cycles', 'Cross-sell and expansion opportunities', 'Executive-level engagement'],
    deliverables: ['Named account list', 'Personalized campaigns per account', 'Executive outreach sequences', 'ROI and attribution reporting'],
    pricingFactors: ['Number of target accounts', 'Account complexity and buying committee size', 'Number of channels and campaign types', 'Content personalization requirements', 'Technology platform (ABM tools)', 'Reporting and attribution complexity'],
    faqs: [
      { q: 'How many accounts should we target?', a: 'Most ABM programs start with 20–100 named accounts, scaling as the program matures. The right number depends on your average deal size, sales cycle length, and available resources. We help define the right scope that balances impact with operational feasibility.' },
      { q: 'What channels do you use for ABM?', a: 'Typically LinkedIn, email, direct mail, and paid media — all personalized to each account. We also leverage events, executive outreach, and content marketing. The channel mix depends on where your target buyers are most receptive and what\'s feasible given your account list.' },
      { q: 'How is ABM different from regular marketing?', a: 'Traditional marketing targets buyer personas with broad campaigns. ABM targets specific named accounts with personalized campaigns. Instead of generating as many leads as possible, ABM focuses on winning a defined set of high-value accounts. It\'s marketing and sales alignment around common goals.' },
      { q: 'How long before ABM shows results?', a: 'ABM is a strategic investment with a longer payoff horizon than lead generation. Initial account engagement can be measured within weeks, but meaningful pipeline impact typically emerges in 3–6 months. The compounding effect of sustained account engagement pays dividends over time.' },
      { q: 'Can ABM work for mid-market companies with smaller deal sizes?', a: 'Absolutely. While ABM is often associated with enterprise, the principles apply at any scale. The key is focusing resources on your best-fit accounts rather than spreading thin across everyone. Mid-market ABM might target 50–200 accounts with appropriately scaled personalization.' },
    ],
  },
  {
    id: '10',
    title: 'Demand Generation',
    slug: 'demand-generation',
    shortDescription: 'Build brand awareness and create market demand that feeds a predictable sales pipeline.',
    icon: 'TrendingUp',
    features: ['Brand positioning', 'Multi-channel demand creation', 'Event & webinar campaigns', 'Paid media management'],
    overview: 'The best leads come from markets you\'ve helped create. Our demand generation programs build brand presence and market desire that translates into qualified pipeline. Demand generation goes beyond lead capture — it shapes how your market thinks about a problem and positions you as the natural solution.',
    problems: [
      { title: 'Limited Brand Awareness in Target Markets', description: 'Your solution exists, but your market doesn\'t know you exist. When prospects research solutions, they discover competitors first. Without brand awareness, you\'re perpetually behind, fighting for attention in a crowded market.' },
      { title: 'Reliance on Inbound Leads Alone', description: 'Your pipeline depends entirely on inbound — content downloads, organic search, and referral leads. When inbound slows (which it does seasonally or during market shifts), your pipeline dries up. Demand generation creates alternative channels for pipeline creation.' },
      { title: 'Difficulty Differentiating from Competitors', description: 'Your market sees you as similar to everyone else. Without a distinct position, prospects default to familiar names or lower prices. Demand generation builds a unique voice and market position that sets you apart.' },
      { title: 'Marketing That Generates Activity but Not Revenue', description: 'Your metrics look good — website visits, content downloads, webinar attendees. But none of these activities convert to revenue. The problem is demand capture without demand creation — you\'re collecting people who are already interested, not creating new interest.' },
    ],
    methodology: 'Our demand generation methodology combines brand building with pipeline creation. We develop thought leadership that shapes market conversations, create strategic content that generates awareness, and run multi-channel campaigns that put your solution top-of-mind when prospects are ready to buy. The result is a market that recognizes your expertise and seeks you out.',
    process: ['Market & competitive analysis', 'Positioning & messaging', 'Campaign strategy', 'Multi-channel execution', 'Pipeline reporting'],
    processSteps: [
      { title: 'Market and Competitive Analysis', description: 'We analyze your competitive landscape, market dynamics, and audience needs. This includes understanding how competitors position themselves, what messages resonate with your target buyers, and what market gaps your expertise could fill. This research forms the foundation for positioning and messaging.' },
      { title: 'Brand Positioning and Messaging Development', description: 'We develop a distinctive market position that sets you apart. This includes your core message platform, thought leadership themes, key messages for different audiences, and the narrative framework that explains why you exist and why prospects should care.' },
      { title: 'Multi-Channel Campaign Strategy', description: 'We design coordinated campaigns across the channels where your buyers spend time — content marketing, social media, paid advertising, email, events, PR, and partnerships. Each channel serves a purpose in the overall demand creation strategy.' },
      { title: 'Execution and Campaign Management', description: 'We execute campaigns across all channels, managing creative development, content production, media buying, and campaign optimization. This includes running events, producing webinars, managing social presence, and coordinating paid media campaigns.' },
      { title: 'Pipeline Reporting and Attribution', description: 'Demand generation impact extends beyond immediate lead capture. We track brand metrics, engagement signals, and pipeline progression from awareness through close. Attribution modeling connects demand generation activities to revenue outcomes.' },
    ],
    benefits: ['Create new market demand', 'Build brand authority', 'Predictable lead flow', 'Scale as you grow'],
    deliverables: ['Brand positioning framework', 'Multi-channel campaigns', 'Lead generation reports', 'Market intelligence insights'],
    pricingFactors: ['Market scope and geographic reach', 'Number of channels and campaign types', 'Brand and creative development needs', 'Media buying budget', 'Event and webinar production', 'Attribution modeling complexity'],
    faqs: [
      { q: 'How is demand generation different from lead generation?', a: 'Lead generation targets existing demand — people already looking for a solution like yours. Demand generation creates new demand by educating the market about problems they didn\'t know they had or positioning your solution as the category leader. Both are essential; demand gen creates the market that lead gen captures.' },
      { q: 'What channels do you use?', a: 'A combination of content, events, paid media, social, email, and PR — customized to your market. We identify where your buyers get their information and meet them there. For B2B, this typically includes LinkedIn, industry publications, webinars, conferences, and strategic partnerships.' },
      { q: 'How long does demand generation take to work?', a: 'Brand building takes time — typically 6–12 months to see meaningful awareness shifts. However, pipeline impact can begin within 3–4 months as early campaigns generate awareness and capture prospects in the consideration phase. The full compounding effect of sustained demand generation builds over years.' },
      { q: 'What\'s the budget for demand generation?', a: 'Demand generation typically requires larger budgets than focused lead gen because it involves brand building, multi-channel campaigns, and sustained presence. However, the ROI is typically higher due to the compounding nature of brand equity. We\'ll design a program that fits your budget while maximizing impact.' },
      { q: 'Can you work with our existing marketing team?', a: 'Yes. We often work alongside internal marketing teams as strategic partners and execution support. We can augment your team\'s capabilities, provide strategic direction, or take full ownership of demand generation programs depending on your needs and existing resources.' },
    ],
  },
]

// Industry data — 9 industries
export interface DecisionMaker {
  title: string
  responsibilities: string
  background: string
}

export interface Industry {
  id: string
  title: string
  slug: string
  description: string
  icon: string
  overview: string           // 2–3 paragraph intro
  challenges: string[]      // the 3–4 challenges, expanded in template
  buyingJourney: string[]   // steps in the B2B buying process
  decisionMakers: DecisionMaker[]
  channels: string[]
  aiOpportunities: string[]
  idealStrategy: string
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
    overview: 'B2B SaaS companies face a unique lead generation challenge: they must fill a leaky pipeline. Unlike one-time purchases, SaaS revenue depends on retaining customers while continuously acquiring new ones to fuel MRR growth. This means lead generation for SaaS is not a campaign — it\'s a compounding engine.\n\nThe buyers you\'re targeting today have been burned by overpromised features and underdelivered value. They conduct extensive peer reviews, run rigorous trials, and involve multiple stakeholders before committing. Your lead generation must meet this skepticism with credible proof — social proof, data, and genuine relevance.\n\nWhat separates winning SaaS companies is their ability to generate leads at the top while also identifying expansion opportunities within existing accounts. A holistic approach that covers both new-logo acquisition and land-and-expand motion delivers the compound growth that defines category leaders.',
    challenges: ['Long sales cycles with multiple stakeholders', 'High customer acquisition costs', 'High churn requiring continuous pipeline', 'Product-led vs. sales-led fit ambiguity'],
    buyingJourney: [
      'Problem recognition & initial research — the buyer identifies a pain point and begins Googling solutions and reading reviews.',
      'Shortlist building — peers, analyst reports, and G2 comparisons narrow the field to 3–5 vendors.',
      'Trial or freemium evaluation — the shortlist is tested hands-on. Usage data and onboarding experience become the next filter.',
      'Stakeholder buy-in — IT, finance, security, and end-users each evaluate fit independently before a consensus forms.',
      'Proof of concept & commercial negotiation — final evaluation with proof of concept, security review, and contract terms.',
      'Purchase decision & onboarding — contract signed, team introduced, and the clock starts on time-to-value.',
    ],
    decisionMakers: [
      { title: 'VP of Sales / Chief Revenue Officer', responsibilities: 'Owns the budget and final vendor selection for revenue-enabling tools. Prioritizes ROI, integration with existing stack, and track record of success.', background: 'Typically 10–15 years in B2B sales, has managed teams through multiple software evaluations, data-driven but relationship-oriented.' },
      { title: 'CTO / VP Engineering', responsibilities: 'Evaluates technical fit, API quality, security posture, and integration complexity. Has veto power on infrastructure-heavy decisions.', background: 'Engineering background, skeptical of vendor lock-in, values clean architecture and developer experience.' },
      { title: 'CFO / Finance', responsibilities: 'Reviews contract economics, ARR vs. subscription models, and total cost of ownership. Increasingly involved in software purchasing decisions.', background: 'Finance or operations background, focused on unit economics, payback period, and NRR impact.' },
      { title: 'Product Manager', responsibilities: 'Evaluates feature fit and roadmap alignment. Can champion or block adoption based on product roadmap needs.', background: 'Product management background, user-centric, focused on day-to-day usability and workflow fit.' },
    ],
    channels: ['LinkedIn Outreach', 'Cold Email', 'SEO & Content', 'ABM', 'Paid Social (LinkedIn)'],
    aiOpportunities: ['Automated lead qualification scoring based on firmographic and behavioral signals', 'Usage-based scoring to identify trial accounts ready to convert', 'AI-driven churn prediction to prioritize proactive outreach', 'Personalized email sequences generated at scale using GPT-based copywriting', 'AI-powered meeting preparation — auto-generate talking points from CRM data'],
    idealStrategy: 'Combine inbound SEO/content for top-of-funnel with targeted LinkedIn outreach and ABM for enterprise deals. Use AI to automate qualification and prioritize hot leads.',
    process: ['ICP definition & persona building', 'Multi-channel outreach sequencing', 'AI-powered lead scoring', 'Demo booking & qualification', 'CRM sync & pipeline reporting'],
    faqs: [
      { q: 'What lead volume can a SaaS company expect?', a: 'Volume depends on ICP, market, and channel mix. A typical SMB-focused SaaS can expect 50–200 qualified leads/month. Enterprise programs are more targeted with 10–50 high-value leads/month.' },
      { q: 'How do you handle trial-to-paid conversion?', a: 'We build nurture sequences for trial users, scoring behavioral signals to identify upgrade-ready accounts.' },
      { q: 'Should we use PLG (product-led growth) or SLG (sales-led growth)?', a: 'Most B2B SaaS benefits from a hybrid. PLG handles self-serve onboarding and viral loops, while SLG engages high-value accounts. We help you identify the right balance based on your ACV, target market, and product complexity.' },
      { q: 'How do you handle enterprise ABM for SaaS?', a: 'We build a named account list from your ICP, research each buying committee thoroughly, and run hyper-personalized multi-channel campaigns targeting each stakeholder role simultaneously.' },
      { q: 'What KPIs should a SaaS company track for lead generation?', a: 'MQLs, SQLs, demo conversion rate, trial-to-paid rate, pipeline generated, and CAC payback period. We set up tracking for all of these from day one.' },
    ],
  },
  {
    id: '2',
    title: 'AI',
    slug: 'ai',
    description: 'Navigate the fast-moving AI market to generate leads for AI tool and platform companies.',
    icon: 'Brain',
    overview: 'The AI market is evolving faster than any B2B category in history. New models, new capabilities, and new competitors emerge weekly. For AI companies, lead generation isn\'t just about reaching buyers — it\'s about establishing credibility in a market crowded with hype, overclaims, and skepticism.\n\nYour buyers are often the most technically sophisticated customers you\'ll encounter. They understand transformers, token limits, and eval frameworks. Generic marketing slides won\'t move them. They want to see benchmarks, architecture diagrams, and honest conversations about limitations.\n\nThe other challenge is trust. "AI washing" has made buyers deeply cautious. They\'ve seen vendors claim "AI-powered" for a basic if/else statement. Breaking through requires substantive proof — published research, open-source contributions, benchmark results, and genuine technical dialogue. This is a market where thought leadership isn\'t optional; it\'s the entire ballgame.',
    challenges: ['Highly technical audience', 'Rapid market changes', 'Trust and credibility building', 'Regulatory uncertainty in some verticals'],
    buyingJourney: [
      'Technical evaluation — CTOs, AI leads, and engineers assess the technology stack, model performance, and API quality before anything else.',
      'Proof of concept — a small-scale trial on real data to validate claims. This is where most AI deals live or die.',
      'Security and compliance review — legal, IT, and compliance teams assess data handling, SOC2, GDPR, and sector-specific regulations.',
      'ROI modeling — finance and business teams quantify the efficiency or revenue impact against current state.',
      'Multi-stakeholder sign-off — technical, business, and financial stakeholders must all be aligned before a contract is signed.',
    ],
    decisionMakers: [
      { title: 'CTO / Chief Technology Officer', responsibilities: 'Evaluates the technical foundation, API design, scalability, and long-term architectural fit. Often the first champion or the first blocker.', background: 'Deep engineering background, values clean code and architecture, skeptical of black-box solutions.' },
      { title: 'Head of AI / Director of Machine Learning', responsibilities: 'Owns the technical evaluation process, runs POCs, and recommends adoption. Has the deepest technical lens on your product.', background: 'ML/AI research or engineering background, PhD or equivalent experience in many cases.' },
      { title: 'Data Science Lead', responsibilities: 'Assesses model quality, integration with existing data pipelines, and ease of use for their team. Key influencer in evaluation.', background: 'Data science or statistics background, focused on reproducibility and model interpretability.' },
      { title: 'CPO / VP Product', responsibilities: 'Evaluates product roadmap alignment, UX for non-technical users, and how the AI capability fits the broader product vision.', background: 'Product management, often with technical roots. Prioritizes user impact and time-to-value.' },
    ],
    channels: ['LinkedIn Outreach', 'SEO & Content', 'Webinars & Events', 'Cold Email', 'Community-Led Growth'],
    aiOpportunities: ['AI-powered everything — your own lead gen is a proof point for prospects', 'Automated technical qualification scoring based on use case fit', 'Real-time market monitoring to identify AI adoption signals in target accounts', 'AI-generated personalized outreach at scale that references specific technical contexts', 'Competitive intelligence automation to track competitor mentions and shifts'],
    idealStrategy: 'Lead with education and thought leadership. Use content marketing for inbound, combined with targeted LinkedIn outreach to technical decision-makers and C-suite AI adopters.',
    process: ['Technical persona research', 'Content strategy for AI audience', 'Multi-channel sequencing', 'Demo/technical consultation booking', 'ROI measurement'],
    faqs: [
      { q: 'How do you reach technical AI buyers?', a: 'We build profiles of technical evaluators (CTOs, Heads of AI, Data Science leads) and personalize outreach with relevant technical context and use cases.' },
      { q: 'Is cold outreach effective for AI companies?', a: 'Yes, especially when personalized. Our AI-personalized outreach achieves 3–5x response rates compared to generic campaigns.' },
      { q: 'How do you build trust with skeptical AI buyers?', a: 'By leading with substance — benchmark data, open-source contributions, published research, and honest limitations. We help you differentiate from the hype by showcasing genuine technical depth.' },
      { q: 'What regulatory considerations affect AI lead generation?', a: 'EU AI Act, GDPR, SOC2, and sector-specific rules (HIPAA for healthcare AI, financial regulations for fintech AI). We ensure all outreach materials are reviewed for compliance context.' },
      { q: 'How do you handle the fast-changing AI market in campaigns?', a: 'We build dynamic content frameworks that can be updated rapidly as the market shifts. Weekly review cycles keep messaging current without rebuilding entire campaigns.' },
    ],
  },
  {
    id: '3',
    title: 'HR Tech',
    slug: 'hr-tech',
    description: 'Connect HR tech vendors with HR leaders, talent acquisition teams, and CHROs.',
    icon: 'Users',
    overview: 'HR Tech is one of the most crowded B2B categories, which makes high-quality lead generation both critical and challenging. HR leaders are inundated with cold calls, vendor emails, and conference pitches. Cutting through the noise requires a fundamentally different approach — one that leads with insight rather than product.\n\nThe HR buying committee is broader than most. It spans the CHRO who owns the budget, the VP of HR who champions the tool internally, the Head of Talent Acquisition who will be the primary user, IT who must approve integrations, and the CFO who must sign off on the investment. Each has a different concern and a different language.\n\nWhat HR buyers consistently tell us: they don\'t want to be sold to. They want to be helped. The companies that win in HR Tech lead with workforce intelligence — industry benchmarks, research on hiring trends, compensation data — and let the product conversation emerge naturally from a relationship built on value.',
    challenges: ['Budget approval from multiple stakeholders', 'Long procurement cycles', 'HR teams overwhelmed by vendor noise', 'Demonstrating clear ROI to finance'],
    buyingJourney: [
      'HR pain identification — the CHRO or HR director recognizes a gap in hiring, retention, performance management, or HR operations.',
      'Peer consultation — HR leaders lean heavily on peer networks, Slack communities, and industry events before looking at vendors.',
      'Vendor shortlisting — typically 3–5 vendors researched via G2, Capterra, analyst reports (Gartner, Forrester), and peer recommendations.',
      'Proof of concept or trial — hands-on evaluation with real HR data and workflows. Reference calls with existing customers are decisive.',
      'Business case and finance approval — ROI modeling, budget allocation, and multi-year TCO analysis. Often the longest stage.',
      'IT and legal review — security assessment, DPA review, and integration compatibility check.',
    ],
    decisionMakers: [
      { title: 'Chief Human Resources Officer (CHRO)', responsibilities: 'Owns the budget and executive sponsorship. Decides whether a tool gets evaluated at all. Champions the business case to the C-suite.', background: 'Senior HR leader, often 15–20 years of experience, focused on workforce strategy and organizational design.' },
      { title: 'VP of HR / HR Director', responsibilities: 'Leads the internal evaluation, runs demos, coordinates stakeholder input, and manages the vendor shortlist day-to-day.', background: 'Operational HR leader, deeply familiar with HR tech landscape, user-centric in evaluation.' },
      { title: 'Head of Talent Acquisition', responsibilities: 'Primary end-user for recruiting and hiring tools. Tests usability and workflow fit. Can champion or veto based on practical experience.', background: 'TA specialist, often from recruiting agency or in-house TA leadership background.' },
      { title: 'CFO / Finance Director', responsibilities: 'Reviews the ROI model, budget impact, and contract terms. Required sign-off for any significant HR tech investment.', background: 'Finance background, focused on payback period, cost per hire reduction, and retention improvement metrics.' },
    ],
    channels: ['Content Marketing', 'Cold Email', 'LinkedIn Outreach', 'ABM', 'Webinars'],
    aiOpportunities: ['Automated candidate matching and ranking using ML models', 'HR analytics dashboards that surface workforce trends and predict turnover risk', 'AI-powered job description optimization for diversity and engagement', 'Automated interview scheduling and candidate communication', 'Workforce planning AI that predicts hiring needs based on business growth signals'],
    idealStrategy: 'Use content-led inbound for HR professionals, combined with targeted email to HR directors and C-suite (CHRO, CFO). Account-based marketing works well for enterprise HR tech.',
    process: ['Stakeholder mapping within HR', 'Multi-message outreach by role', 'Case study-led engagement', 'Demo and trial booking', 'ROI tracking'],
    faqs: [
      { q: 'Who is the primary decision-maker for HR tech?', a: 'Typically CHRO, VP of HR, or Head of Talent Acquisition. For larger platforms, CFO and IT also have input.' },
      { q: 'What content resonates with HR buyers?', a: 'Industry benchmarks, workforce trend reports, and case studies showing measurable impact on hiring and retention.' },
      { q: 'How do you handle the long HR tech procurement cycle?', a: 'We build sustained nurture programs that maintain engagement over 3–9 months, providing value at every stage — from early research through contract negotiation.' },
      { q: 'What ROI metrics do HR tech buyers care about most?', a: 'Cost per hire, time-to-fill, employee retention rate, HR team productivity (cases resolved per person), and HRIS integration efficiency. We help you build a compelling ROI story around these metrics.' },
      { q: 'How do you differentiate in a crowded HR tech market?', a: 'Through hyper-specific content for your niche (e.g., healthcare HR vs. tech startup HR), peer-level personalization, and thought leadership that HR leaders find genuinely useful rather than promotional.' },
    ],
  },
  {
    id: '4',
    title: 'Manufacturing',
    slug: 'manufacturing',
    description: 'Generate B2B leads for industrial manufacturers and B2B suppliers.',
    icon: 'Factory',
    overview: 'Manufacturing is a relationship-first, trust-intensive B2B category. When a plant manager is evaluating a new supplier or industrial technology, they\'re not just buying a product — they\'re making a commitment that affects production continuity, worker safety, and operational performance. The sales cycles reflect this gravity: 6–18 months from first conversation to purchase order is not unusual.\n\nThe manufacturing buying committee is unusually complex. Engineering evaluates technical specifications, procurement negotiates terms and pricing, operations assesses impact on production lines, and finance models the total cost of ownership. Each stakeholder has veto power from a different angle.\n\nWhat makes lead generation for manufacturing distinct is the role of physical presence and industry community. Trade shows like Hannover Messe, IMTS, and regional equivalents are not optional extras — they\'re where relationships are seeded and deals accelerate. Your digital lead generation must complement this physical world, maintaining engagement between shows and nurturing accounts that may not be ready to buy for 12 months.',
    challenges: ['Complex buying committees', 'Long sales cycles (6–18 months)', 'Relationship-driven purchasing', 'Regional and language diversity'],
    buyingJourney: [
      'Needs assessment & specification — plant managers and engineers define the technical requirements and performance criteria.',
      'Vendor research — sourcing teams identify potential suppliers through industry directories, trade show connections, and peer recommendations.',
      'Request for quotation (RFQ) — formal procurement process with detailed specifications, pricing requests, and timeline requirements.',
      'Technical evaluation — engineering teams assess product specifications, certifications, and quality control processes.',
      'Supplier audit — site visits, facility tours, and quality management system reviews to validate production capability.',
      'Commercial negotiation — pricing, payment terms, volume commitments, and contract terms negotiated with procurement.',
    ],
    decisionMakers: [
      { title: 'Plant Manager / Site Director', responsibilities: 'The operational champion who feels the pain most directly. Advocates internally for change but needs to justify it to management.', background: 'Operations or engineering background, 15+ years in manufacturing, focused on OEE, throughput, and safety metrics.' },
      { title: 'Procurement Manager / VP of Procurement', responsibilities: 'Controls the RFQ process, evaluates commercial terms, and has final say on vendor selection within budget constraints.', background: 'Supply chain or procurement background, skilled negotiator, relationship-oriented with trusted suppliers.' },
      { title: 'Operations Director', responsibilities: 'Evaluates how a new supplier or technology impacts production scheduling, quality control, and operational workflow.', background: 'Manufacturing operations, deep knowledge of production lines and operational efficiency metrics.' },
      { title: 'Quality Manager', responsibilities: 'Assesses certifications, quality control processes, and supplier reliability. Often the technical gatekeeper for new vendors.', background: 'Quality engineering background, ISO/AS9100 experience, focused on defect rates and compliance.' },
    ],
    channels: ['LinkedIn Outreach', 'Trade Show Follow-up', 'Cold Email', 'SEO (industry keywords)', 'Partner channel'],
    aiOpportunities: ['Predictive maintenance opportunity identification — find plants with aging equipment likely to need replacement', 'Supplier discovery automation using procurement databases and import/export data', 'AI-powered RFQ response generation for manufacturing quotes', 'Quality analytics leads — identifying plants with defect rate patterns that signal equipment or process issues', 'Production optimization signals from publicly available manufacturing output data'],
    idealStrategy: 'Combine trade show strategy, targeted LinkedIn outreach to plant managers and procurement, and account-based campaigns for enterprise manufacturers.',
    process: ['Target account identification', 'Multi-stakeholder outreach', 'Plant/facility-level targeting', 'Procurement engagement', 'Long-cycle pipeline management'],
    faqs: [
      { q: 'How do you handle long manufacturing sales cycles?', a: 'We build sustained nurture programs with multiple touchpoints over 6–18 months, tracking engagement signals to identify when prospects are ready to buy.' },
      { q: 'Do you handle multi-language outreach?', a: 'Yes. We support outreach in English, Mandarin, Vietnamese, Malay, Thai, Arabic, and more.' },
      { q: 'How do you identify the right manufacturing companies to target?', a: 'We use a combination of import/export data, manufacturing output indices, facility age data, and industry news to identify companies actively investing in new equipment or suppliers.' },
      { q: 'How do you handle the complex buying committee in manufacturing?', a: 'We build multi-threaded ABM campaigns that address each stakeholder role independently while maintaining account-level coordination. Each message is tailored to that role\'s specific concern.' },
      { q: 'What role do trade shows play in a manufacturing lead gen strategy?', a: 'Trade shows are where manufacturing relationships begin. We build pre-show outreach to book meetings and post-show nurture to convert show connections into pipeline. We treat every trade show as a campaign, not an event.' },
    ],
  },
  {
    id: '5',
    title: 'Logistics',
    slug: 'logistics',
    description: 'Generate leads for logistics providers, freight forwarders, and supply chain solutions.',
    icon: 'Truck',
    overview: 'Logistics is among the most competitive B2B categories on the planet. Every freight forwarder, 3PL, and carrier is competing on the same shipping lanes with similar service levels and price points. In this environment, lead generation isn\'t about being louder — it\'s about being more relevant to the specific needs of each shipper.\n\nThe logistics buyer is typically a logistics manager, supply chain director, or procurement lead who is responsible for keeping goods moving efficiently. They have fixed budgets, established carrier relationships, and no time for generic sales pitches. They want someone who understands their specific lanes, their cargo types, and their pain points.\n\nThe opportunity for differentiation lies in specificity. A logistics company that knows exactly which shipping lanes are experiencing congestion, which ports have capacity issues, and which shippers are struggling with their current providers can build a far more compelling lead generation narrative than one that talks about "end-to-end supply chain solutions." Precision is credibility in logistics.',
    challenges: ['Price-sensitive market', 'Commoditized services', 'Complex routing and compliance', 'Regional market differences'],
    buyingJourney: [
      'Carrier review — logistics managers review current carrier performance, identifying pain points in cost, reliability, or coverage.',
      'Lane specification — specific shipping routes, cargo types, volume, and frequency are defined for the RFP.',
      'Market research — freight rate comparisons, carrier reputation checks via peer recommendations and industry networks.',
      'Quote evaluation — formal or informal rate requests sent to shortlisted carriers with detailed lane requirements.',
      'Pilot shipment — a small initial shipment to validate service quality before committing volume.',
      'Contract negotiation — annual or multi-year contracts negotiated based on volume commitments and service guarantees.',
    ],
    decisionMakers: [
      { title: 'Logistics Manager / Freight Manager', responsibilities: 'Manages day-to-day shipping operations, selects carriers for specific lanes, and monitors performance metrics.', background: 'Operations or logistics background, deeply familiar with freight markets, focused on cost per lane and on-time performance.' },
      { title: 'Supply Chain Director', responsibilities: 'Owns the strategic supply chain architecture and carrier strategy. Makes or approves major carrier selection decisions.', background: 'Supply chain management, 10–15 years experience, strategic thinker focused on network optimization.' },
      { title: 'Procurement Lead / VP Procurement', responsibilities: 'Negotiates contracts, manages carrier relationships commercially, and drives cost optimization across the logistics spend.', background: 'Procurement or supply chain background, skilled negotiator, data-driven on cost analysis.' },
      { title: 'Warehouse / Operations Manager', responsibilities: 'Evaluates warehouse integration, handling requirements, and operational compatibility with existing facilities.', background: 'Warehouse or operations management, focused on throughput, loading dock compatibility, and inventory management.' },
    ],
    channels: ['SEO & Content', 'LinkedIn Outreach', 'Cold Email', 'Marketplace & directory listings', 'Referral programs'],
    aiOpportunities: ['Route optimization leads — identifying shippers on inefficient or congested lanes', 'Freight market intelligence — using market data to identify companies in volatile lanes likely to switch', 'AI-powered rate quote personalization for inbound inquiries', 'Predictive demand modeling to reach shippers before peak season capacity crunches', 'Automated cargo matching between shippers and carriers using freight consolidation data'],
    idealStrategy: 'Focus on digital presence for inbound leads, combined with targeted LinkedIn and email campaigns to logistics managers, supply chain directors, and procurement leads.',
    process: ['Route and lane analysis', 'Target company identification', 'Decision-maker outreach', 'Rate quote and proposal stage', 'Relationship building'],
    faqs: [
      { q: 'How do you differentiate logistics companies in a competitive market?', a: 'Through hyper-personalized outreach that references specific shipping lanes, volume patterns, and pain points — not generic logistics pitches.' },
      { q: 'Do you cover cross-border logistics?', a: 'Yes. We have specific expertise in Southeast Asia, Middle East, and Asia-Pacific cross-border logistics lead generation.' },
      { q: 'How do you find logistics prospects who are actually looking to switch providers?', a: 'We monitor publicly available signals — shipping volume changes, carrier contract renewals, port congestion data, and news about supply chain disruptions — to identify companies likely to be in-market for a new provider.' },
      { q: 'What channels work best for logistics B2B lead generation?', a: 'SEO targeting lane-specific keywords (e.g., "freight forwarding Shanghai to Rotterdam"), LinkedIn targeting supply chain titles, and referral programs leveraging existing shipper relationships. Directories like Freightos and Logistics.com also drive qualified inbound.' },
      { q: 'How do you handle regional differences in logistics markets?', a: 'We build region-specific targeting and messaging. Southeast Asia logistics requires different language capabilities, relationship frameworks, and lane expertise than Europe or Middle East.' },
    ],
  },
  {
    id: '6',
    title: 'Healthcare',
    slug: 'healthcare',
    description: 'Navigate strict healthcare compliance to generate leads for healthtech and medtech companies.',
    icon: 'Stethoscope',
    overview: 'Healthcare is arguably the most complex vertical for B2B lead generation. The stakes are extraordinarily high — a wrong decision can affect patient safety, regulatory compliance, and institutional reputation. Healthcare organizations move deliberately, involve extensive gatekeeping, and have deeply entrenched vendor relationships.\n\nThe healthcare buyer is not one person. In a hospital system, the clinical champion who loves your product can be overruled by IT security, procurement, legal, and a CFO looking at capital budget constraints. Each gatekeeper has a different concern: clinical effectiveness, data security, cost, and regulatory compliance. Your lead generation must speak to all of them.\n\nTrust is healthcare\'s currency. Healthcare professionals — from CMIOs to clinical directors — are deeply skeptical of vendor claims. They rely on peer recommendations, published clinical evidence, and referenceable institutions more than any marketing material. Your lead generation strategy must build credibility through clinical evidence and peer networks, not promotional claims.',
    challenges: ['Strict compliance and regulations', 'Long procurement and approval cycles', 'Multiple gatekeepers', 'Trust and credibility requirements'],
    buyingJourney: [
      'Clinical need identification — clinical leaders identify a gap in care delivery, efficiency, or patient safety that technology could address.',
      'Evidence gathering — clinical champions research solutions, review clinical literature, and consult peer institutions using similar technologies.',
      'Vendor shortlisting — typically through peer recommendations, KOL endorsements, conference presentations, and analyst reports (KLAS, Gartner).',
      'Security and compliance assessment — IT security, legal, and compliance teams evaluate HIPAA compliance, SOC2, data processing agreements, and vendor risk posture.',
      'Clinical trial or pilot — hands-on evaluation in a controlled clinical setting. Clinical staff evaluate usability and effectiveness.',
      'Value analysis committee — formal committee reviews clinical evidence, cost-benefit analysis, and strategic fit before capital approval.',
    ],
    decisionMakers: [
      { title: 'Chief Medical Information Officer (CMIO)', responsibilities: 'The clinical champion for health IT decisions. Evaluates clinical workflow fit, evidence quality, and interoperability with existing clinical systems.', background: 'Physician or clinical informaticist, 10+ years in healthcare, understands both clinical practice and health IT.' },
      { title: 'CTO / CIO of Health System', responsibilities: 'Evaluates technical infrastructure fit, security posture, data architecture, and integration with existing EHR systems.', background: 'IT or healthcare IT background, responsible for HIPAA compliance and data governance at the institutional level.' },
      { title: 'Clinical Director / VP Nursing', responsibilities: 'Clinical operations leader who evaluates how a technology impacts nursing workflow, patient safety, and care team efficiency.', background: 'Senior nursing or clinical operations leadership, user-centric evaluator focused on practical bedside impact.' },
      { title: 'CFO / VP Finance (Healthcare)', responsibilities: 'Reviews capital budget impact, ROI modeling, and total cost of ownership. Required sign-off for any significant health tech investment.', background: 'Healthcare finance, familiar with capital budget cycles, DRG systems, and reimbursement implications.' },
    ],
    channels: ['LinkedIn Outreach', 'Medical conferences', 'Content Marketing', 'Email (HIPAA-conscious)', 'Referrals & KOL engagement'],
    aiOpportunities: ['Patient flow optimization leads — identifying hospitals with ER crowding or bed management issues', 'Clinical trial matching automation for research hospitals seeking technology partners', 'AI-powered differential diagnosis support tools for specialist referral patterns', 'Population health management leads — identifying health systems with at-risk patient populations', 'Revenue cycle automation for health systems under margin pressure'],
    idealStrategy: 'Compliance-first approach with content marketing targeting healthcare administrators and clinical leaders. Use ABM for hospital systems and targeted LinkedIn for healthtech buyers.',
    process: ['Compliance review of all materials', 'Healthcare persona mapping', 'Multi-stakeholder ABM campaigns', 'Clinical champion identification', 'Procurement navigation'],
    faqs: [
      { q: 'How do you handle HIPAA compliance in outreach?', a: 'All outreach materials are reviewed for compliance. We never ask for or handle protected health information (PHI). Our campaigns target business decision-makers.' },
      { q: 'Who are the decision-makers in healthcare organizations?', a: 'CMIOs, CTOs, Clinical Directors, Procurement, and C-suite (CEO, CFO) — depending on the purchase type and value.' },
      { q: 'How do you reach Key Opinion Leaders (KOLs) in healthcare?', a: 'KOL engagement requires a different approach — clinical evidence sharing, conference co-presentations, advisory board participation, and peer-level content collaboration. We build relationship-based engagement strategies for KOLs.' },
      { q: 'What content builds credibility with healthcare buyers?', a: 'Peer-reviewed clinical evidence, case studies from referenceable institutions, clinical workflow documentation, and health system executive testimonials. Promotional content is discounted immediately.' },
      { q: 'How do you navigate the healthcare procurement cycle?', a: 'Healthcare procurement follows formal value analysis committee processes. We help you build the clinical and financial evidence package needed to pass committee review — not just the initial champion conversation.' },
    ],
  },
  {
    id: '7',
    title: 'FinTech',
    slug: 'fintech',
    description: 'Generate leads for financial technology companies across payments, banking, and investing.',
    icon: 'DollarSign',
    overview: 'FinTech operates at the intersection of money, technology, and trust — three things that don\'t combine easily. Financial institutions are among the most risk-averse buyers in B2B. A wrong technology choice can expose them to regulatory penalties, financial loss, and reputational damage. Their procurement processes reflect this gravity.\n\nThe FinTech buyer\'s journey is characterized by trust verification at every stage. They\'re not just evaluating your product — they\'re evaluating your regulatory standing, your financial stability, your security certifications, and your track record with similar institutions. This makes the sales cycle longer and the qualification bar higher.\n\nWhat FinTech vendors consistently underestimate is the compliance stakeholder. In any financial institution, the compliance officer, legal team, and risk manager have significant blocking power. Your lead generation must address their concerns — regulatory compliance, audit trails, data residency, and financial crime prevention — not just the CTO\'s interest in your technology.',
    challenges: ['Regulatory complexity', 'High trust requirements', 'Long compliance cycles', 'Technical and business stakeholder alignment'],
    buyingJourney: [
      'Digital transformation need identified — CTO or Head of Innovation recognizes a gap in payments, lending, wealth management, or banking infrastructure.',
      'Vendor pre-qualification — security certifications, regulatory licenses, and financial stability reviewed before any technical evaluation begins.',
      'Technical evaluation — API quality, integration architecture, scalability, and security posture assessed by engineering and architecture teams.',
      'Compliance review — legal, compliance, and risk teams evaluate regulatory adherence, audit capabilities, and financial crime prevention features.',
      'Proof of concept — a pilot deployment to validate technical and operational fit in a controlled environment.',
      'Multi-stakeholder approval — technology, business, compliance, legal, and finance all sign off. Often requires board or executive committee approval for large contracts.',
    ],
    decisionMakers: [
      { title: 'CTO / Head of Technology', responsibilities: 'Evaluates technical architecture, API quality, security posture, and integration complexity. Primary technical champion.', background: 'Engineering or technology leadership, fintech or banking IT background, values clean architecture and security-first design.' },
      { title: 'Head of Innovation / CDO', responsibilities: 'Identifies and evaluates emerging technologies that could improve financial services delivery. Often the internal champion for new vendor relationships.', background: 'Innovation, digital transformation, or fintech background, focused on competitive advantage and market differentiation.' },
      { title: 'CFO / Finance Director', responsibilities: 'Reviews financial stability of the vendor, ROI modeling, total cost of ownership, and contract economics.', background: 'Corporate finance, often banking or financial services background, focused on regulatory capital implications and financial risk.' },
      { title: 'Chief Compliance Officer / Risk Manager', responsibilities: 'Evaluates regulatory compliance, audit readiness, AML/KYC capabilities, and vendor risk management. Has significant blocking power.', background: 'Financial services compliance, legal, or risk management background, deeply familiar with relevant regulatory frameworks.' },
    ],
    channels: ['LinkedIn Outreach', 'ABM', 'Content Marketing', 'Conference & event marketing', 'Referral & partner channels'],
    aiOpportunities: ['Fraud detection leads — identifying banks with increasing fraud losses likely to need advanced solutions', 'Compliance automation — AI-powered AML and KYC solutions for under-pressure compliance teams', 'Regulatory reporting automation for financial institutions drowning in reporting requirements', 'AI-powered credit scoring for lenders seeking better underwriting models', 'Payment reconciliation automation for financial institutions with complex transaction volumes'],
    idealStrategy: 'Use thought leadership content to build trust, combined with ABM for financial institutions and targeted LinkedIn outreach to heads of innovation, digital transformation, and finance.',
    process: ['Regulatory landscape mapping', 'Target institution identification', 'Multi-stakeholder engagement', 'Compliance-aware content', 'Pilot and proof-of-concept booking'],
    faqs: [
      { q: 'How do you reach financial institution decision-makers?', a: 'Through LinkedIn with personalized content referencing their digital transformation initiatives, and through industry events where compliance-friendly conversations happen.' },
      { q: 'Do you handle regulatory considerations in outreach?', a: 'We ensure all materials are reviewed for regulatory appropriateness and never make claims that would require regulatory approval.' },
      { q: 'What certifications do financial institutions look for in vendors?', a: 'SOC2 Type II, ISO 27001, PCI DSS, and relevant financial regulatory registrations. We help you build a certification-focused messaging strategy that addresses institutional requirements.' },
      { q: 'How do you navigate the long FinTech procurement cycle?', a: 'We build multi-stage nurture programs that maintain engagement through 6–18 month cycles, providing compliance-ready documentation, security questionnaires, and reference customer connections at each stage.' },
      { q: 'What role do fintech events play in lead generation?', a: 'Events like Money20/20, Singapore FinTech Festival, and regional banking summits are where trust relationships with financial institution leaders are seeded. We run pre-event outreach to book meetings and post-event nurture to convert connections into pipeline.' },
    ],
  },
  {
    id: '8',
    title: 'Cybersecurity',
    slug: 'cybersecurity',
    description: 'Generate leads for cybersecurity vendors targeting CISOs, IT security teams, and enterprise buyers.',
    icon: 'Shield',
    overview: 'Cybersecurity is a market where urgency is constant but trust is elusive. Every organization is under active threat, which creates perpetual demand — but also perpetual skepticism. Security leaders have been burned by vendors who overpromised and underdelivered, leaving them exposed when an incident occurred. They buy differently than almost any other B2B buyer.\n\nThe CISO is the primary strategic buyer, but the security evaluation is conducted by technically sophisticated practitioners who will probe every claim. They\'ll run your product through its paces, challenge your architecture, and demand evidence — not marketing collateral. Your lead generation must pre-qualify this technical scrutiny, not skip over it.\n\nWhat the best cybersecurity lead generation programs understand: security buyers respond to risk intelligence, not product features. They want to see that you understand their threat landscape, that you\'ve done the research on their industry\'s specific adversaries, and that your solution addresses real attack vectors — not theoretical ones. This shifts the entire sales narrative from "our product is great" to "we understand your risk."',
    challenges: ['Highly technical audience', 'Long enterprise sales cycles', 'Procurement complexity', 'Trust and credential requirements'],
    buyingJourney: [
      'Threat landscape assessment — the CISO or security team identifies a gap in their current security posture based on threat intelligence and incident analysis.',
      'Budget allocation — security budget is allocated, often annually, with specific line items for new tools. Timing is often tied to fiscal year planning.',
      'Market research — CISO evaluates emerging threats, reviews analyst reports (Gartner, Forrester, IDC), and consults peer CISOs in closed forums.',
      'Technical evaluation — hands-on testing in a lab environment, red team exercises, and architecture review by senior security engineers.',
      'Risk and compliance review — legal, compliance, and risk teams assess vendor risk, data handling, and regulatory implications.',
      'Enterprise procurement — RFP, security questionnaire, legal review, and contract negotiation. Enterprise security deals can involve 6+ internal stakeholders.',
    ],
    decisionMakers: [
      { title: 'Chief Information Security Officer (CISO)', responsibilities: 'Strategic decision-maker who owns the security budget and vendor relationships. Evaluates risk reduction, strategic fit, and organizational impact.', background: 'Senior security leadership, often 15+ years in security, comes from a blend of technical, risk, and executive leadership background.' },
      { title: 'CTO / VP Infrastructure', responsibilities: 'Evaluates technical architecture, integration with existing security stack, deployment complexity, and operational overhead.', background: 'Infrastructure or security engineering, deep knowledge of network security, cloud architecture, and security operations.' },
      { title: 'IT Security Director / SOC Manager', responsibilities: 'Primary practitioner evaluator who assesses operational fit, detection capabilities, and alert quality. Has significant technical veto power.', background: 'SOC or security operations background, hands-on with SIEM, endpoint, and threat detection tools, focused on practical operational impact.' },
      { title: 'CFO / Risk Manager', responsibilities: 'Increasingly involved in security purchasing decisions, evaluating cyber risk quantification, insurance implications, and total cost of security operations.', background: 'Finance, risk management, or insurance background, increasingly focused on cyber risk quantification and board-level risk reporting.' },
    ],
    channels: ['LinkedIn Outreach', 'ABM', 'Content Marketing (threat intel)', 'Webinars & podcasts', 'Partner & analyst channel'],
    aiOpportunities: ['Threat intelligence leads — identifying organizations experiencing active breach indicators likely to need incident response', 'Automated security posture scoring to identify organizations with gaps in their security coverage', 'AI-powered vulnerability prioritization to find organizations with unpatched critical vulnerabilities', 'Phishing simulation leads — identifying organizations with poor phishing awareness likely to need training', 'Supply chain risk monitoring to find companies whose third-party vendors have been breached'],
    idealStrategy: 'Lead with thought leadership and threat intelligence content. Use ABM for enterprise CISOs, targeted LinkedIn outreach to security leaders, and conference-led engagement.',
    process: ['Security persona research', 'Threat landscape personalization', 'Multi-stakeholder CISO engagement', 'Proof-of-concept and trial booking', 'ROI and risk quantification'],
    faqs: [
      { q: 'Who is the primary buyer for cybersecurity tools?', a: 'CISOs, CTOs, IT Security Directors, and increasingly, CFOs for risk and compliance purchases. Procurement and legal also involved in enterprise deals.' },
      { q: 'How do you personalize at scale for security buyers?', a: 'We analyze public breach data, SEC filings, and company announcements to personalize outreach with relevant threat context and risk reduction angles.' },
      { q: 'What makes cybersecurity lead generation different from other B2B categories?', a: 'The technical depth required, the trust premium, and the multi-stakeholder complexity. Security buyers respond to threat intelligence and risk context — not product feature lists. Every piece of content must demonstrate genuine security expertise.' },
      { q: 'How do you use threat intelligence in outreach?', a: 'We monitor public breach disclosures, SEC cyber incident filings, CVE databases, and dark web intelligence to identify organizations that have been or are likely to be targeted — then personalize outreach with relevant threat context.' },
      { q: 'What role do analyst relations play in cybersecurity lead generation?', a: 'Gartner, Forrester, and IDC rankings significantly influence security buying decisions. We help you engage with analysts and use analyst recognition to build credibility in outreach — especially for ABM target lists.' },
    ],
  },
  {
    id: '9',
    title: 'Professional Services',
    slug: 'professional-services',
    description: 'Generate leads for consulting firms, agencies, and professional service providers.',
    icon: 'Briefcase',
    overview: 'Professional services is the ultimate trust-first B2B category. When a Managing Director is evaluating a consulting firm, law practice, or marketing agency, they\'re not just buying a service — they\'re betting their reputation on a team they\'re handing significant responsibility to. The buying decision is deeply personal and relationship-driven.\n\nThe challenge for professional services firms is credibility at scale. A firm\'s reputation is built on individual expertise and demonstrated outcomes — things that don\'t multiply easily. Every new practice area, every new geography, every new service offering requires a new credibility foundation.\n\nWhat separates high-growth professional services firms from stagnant ones is their ability to systematize credibility — to turn the expertise of their best people into content, frameworks, and thought leadership that can be scaled to thousands of prospects. Lead generation for professional services is ultimately a content and thought leadership challenge, amplified by targeted direct outreach.',
    challenges: ['Building credibility from scratch', 'Trust-first buying decisions', 'Multiple decision-makers', 'Differentiating in a crowded market'],
    buyingJourney: [
      'Need recognition — a C-suite executive or senior leader identifies a strategic challenge that requires external expertise.',
      'Reference network consultation — the buyer asks trusted peers and professional networks for recommendations. This is the single most influential stage.',
      'Website and content review — the buyer evaluates the firm\'s thought leadership, case studies, and published work to assess depth and fit.',
      'Introductory meeting — a chemistry conversation with the firm\'s leadership to assess cultural fit, approach, and team capability.',
      'Proposal and scope development — detailed scope, team, timeline, and pricing proposed. Often follows a discovery process with key stakeholders.',
      'Engagement negotiation — terms, commercial structure, and team composition negotiated. Reference calls with past clients are common at this stage.',
    ],
    decisionMakers: [
      { title: 'Managing Partner / CEO', responsibilities: 'The ultimate decision-maker for major professional services engagements. Evaluates strategic fit, firm reputation, and relationship quality.', background: 'Senior executive or partner-level professional, 20+ years experience, relationship-focused, reputation-conscious.' },
      { title: 'C-suite Executive (COO, CFO, CMO)', responsibilities: 'The business-side sponsor who owns the problem being addressed. Champions the engagement internally and manages budget approval.', background: 'Functional C-suite executive relevant to the service being evaluated. Deeply focused on business outcomes and risk management.' },
      { title: 'Practice Director / Department Head', responsibilities: 'The day-to-day client for the professional service. Evaluates technical capability, team quality, and practical delivery fit.', background: 'Senior practitioner or former client in the relevant domain. Evaluates on practical capability and track record.' },
      { title: 'Procurement / Legal', responsibilities: 'Engaged for contract review, rate card negotiation, and MSA terms for larger engagements. Can delay but rarely blocks a wanted engagement.', background: 'Legal or procurement background, focused on terms, liability, and commercial structure.' },
    ],
    channels: ['LinkedIn Outreach', 'Content Marketing', 'Cold Email', 'Referral programs', 'Webinars & speaking'],
    aiOpportunities: ['Expertise matching AI — matching prospective clients with specific consultants based on their challenge profile', 'Automated proposal generation using firm knowledge bases and client context', 'Client intent monitoring — tracking when target accounts are researching problems the firm solves', 'Relationship mapping to identify mutual connections and warm introduction opportunities', 'Automated thought leadership distribution and engagement scoring to identify high-potential prospects'],
    idealStrategy: 'Use content marketing to demonstrate expertise and attract inbound. Combine with targeted LinkedIn outreach to executives and C-suite buyers looking for professional services.',
    process: ['Niche positioning and differentiation', 'Executive persona targeting', 'Thought leadership campaigns', 'Inbound inquiry handling', 'Qualification and proposal stage'],
    faqs: [
      { q: 'How do you help professional services firms stand out?', a: 'Through deep niche specialization in your specific service area and hyper-personalized outreach that demonstrates you understand their specific business challenges.' },
      { q: 'What is realistic for a new professional services firm?', a: 'Most firms see 5–15 qualified leads per month in the first 3 months, scaling to 20–50/month by month 6 as content and authority builds.' },
      { q: 'How do you build credibility for a new professional services offering?', a: 'Through a combination of founder expertise content, framework development, pilot client case studies, and speaking engagements that establish thought leadership before scaling outreach.' },
      { q: 'What is the role of referrals in professional services lead generation?', a: 'Referrals are the #1 source of qualified leads for professional services firms. We build referral programs, optimize your client experience for referral triggers, and create systematic outreach to past clients and professional network connections.' },
      { q: 'How do you help firms expand into new geographies or service areas?', a: 'We identify the right introduction strategy for new markets — often a combination of local content, partnership with local firms, event presence, and LinkedIn outreach to target executives in the new geography.' },
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
    label: 'Compare',
    href: '/compare',
    children: [
      { label: 'Apollo vs ZoomInfo', href: '/compare/apollo-vs-zoominfo' },
      { label: 'Clay vs Apollo', href: '/compare/clay-vs-apollo' },
      { label: 'Cold Email vs LinkedIn', href: '/compare/cold-email-vs-linkedin' },
      { label: 'Inbound vs Outbound', href: '/compare/inbound-vs-outbound' },
      { label: 'ABM vs Traditional B2B', href: '/compare/abm-vs-traditional-b2b' },
      { label: 'LinkedIn vs Email', href: '/compare/linkedin-vs-email' },
    ],
  },
  {
    label: 'Free Tools',
    href: '/tools',
    children: [
      { label: 'ROI Calculator', href: '/tools/roi-calculator' },
      { label: 'CAC Calculator', href: '/tools/cac-calculator' },
      { label: 'ICP Generator', href: '/tools/icp-generator' },
    ],
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
      { label: 'Lead Generation Stats', href: '/statistics/lead-generation' },
      { label: 'Cold Email Stats', href: '/statistics/cold-email' },
      { label: 'B2B Marketing Stats', href: '/statistics/b2b-marketing' },
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
      { label: 'Statistics Hub', href: '/statistics/lead-generation' },
      { label: 'Comparison Guides', href: '/compare/apollo-vs-zoominfo' },
      { label: 'Free Tools', href: '/tools/roi-calculator' },
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
