import { Metadata } from 'next'
import StatisticsPageTemplate from '@/components/sections/StatisticsPageTemplate'

export const metadata: Metadata = {
  title: 'Lead Generation Statistics 2024: Data-Driven Insights | AppLabx',
  description: 'Explore key lead generation statistics including inbound vs outbound costs, conversion rates, and ROI benchmarks for B2B companies.',
}

export default function LeadGenerationStatisticsPage() {
  const stats = [
    {
      value: '61%',
      label: 'Lower Cost for Inbound Leads',
      description: 'Inbound marketing leads cost 61% less than outbound leads, making inbound a highly cost-effective strategy for lead generation.',
      trend: {
        direction: 'up' as const,
        value: 'vs outbound costs',
      },
      source: 'Industry Research',
    },
    {
      value: '80%',
      label: 'Marketers Prioritize Inbound',
      description: '80% of marketers say inbound is their primary lead generation strategy, reflecting the shift toward content-driven approaches.',
      trend: {
        direction: 'up' as const,
        value: 'of marketing teams',
      },
      source: 'Industry Reports',
    },
    {
      value: '57%',
      label: 'Research Before Contact',
      description: 'The average B2B buyer completes 57% of their research before ever contacting a sales representative.',
      trend: {
        direction: 'neutral' as const,
        value: 'of buying journey',
      },
      source: 'Industry Research',
    },
    {
      value: '13x',
      label: 'Revenue ROI from Inbound',
      description: 'Companies with strong inbound marketing see 13x higher revenue ROI compared to those relying primarily on outbound.',
      trend: {
        direction: 'up' as const,
        value: 'vs traditional methods',
      },
      source: 'Industry Research',
    },
    {
      value: '4-6',
      label: 'Touchpoints Before Conversion',
      description: 'B2B leads typically require 4 to 6 touchpoints before they are ready to speak with sales, emphasizing the need for sustained nurture.',
      trend: {
        direction: 'neutral' as const,
        value: 'average touches',
      },
      source: 'Industry Reports',
    },
    {
      value: '68%',
      label: 'Prefer Self-Service Research',
      description: '68% of B2B buyers prefer to research vendors online on their own, highlighting the importance of strong digital presence.',
      trend: {
        direction: 'up' as const,
        value: 'buyer preference',
      },
      source: 'Industry Research',
    },
  ]

  const keyTakeaways = [
    'Inbound lead generation is significantly more cost-effective than outbound, offering 61% lower costs per lead over time.',
    'B2B buyers research extensively before engaging—57% of their journey is complete before talking to sales.',
    'Successful lead generation requires sustained multi-touch nurture—plan for 4-6 touchpoints per converted lead.',
    'Strong digital presence is non-negotiable—68% of buyers prefer self-service research over direct sales contact.',
  ]

  const methodology = 'These statistics are aggregated from industry-leading research reports including HubSpot\'s State of Marketing Report, Demand Gen Report, Gartner Research, and Forrester B2B Buyer Survey. Data represents averages across B2B industries and company sizes. Individual results may vary based on market, product, and execution quality. Statistics are updated annually or when significant market shifts occur.'

  const sources = [
    'HubSpot State of Marketing Report',
    'Demand Gen Report',
    'Gartner Research',
    'Forrester B2B Buyer Survey',
    'Various Industry Reports and Case Studies',
  ]

  const relatedPages = [
    { label: 'Cold Email Statistics', href: '/statistics/cold-email' },
    { label: 'B2B Marketing Statistics', href: '/statistics/b2b-marketing' },
  ]

  const relatedReading = [
    { label: 'Lead Generation Services', href: '/services/lead-generation', description: 'Full-service B2B lead generation programs tailored to your ICP' },
    { label: 'Inbound Marketing', href: '/services/inbound-marketing', description: 'Attract and convert leads through content and SEO strategies' },
    { label: 'Outbound Sales', href: '/services/outbound-sales', description: 'Proactive outreach to target accounts and decision-makers' },
  ]

  return (
    <StatisticsPageTemplate
      title="Lead Generation Statistics: Key Metrics for B2B Success"
      description="Data-driven insights into lead generation effectiveness, costs, and best practices for B2B companies."
      intro="Understanding lead generation benchmarks helps businesses set realistic goals and allocate resources effectively. These statistics represent verified industry averages from B2B lead generation programs. Whether you're optimizing an existing strategy or building a new one, these metrics provide a baseline for measuring success."
      stats={stats}
      keyTakeaways={keyTakeaways}
      methodology={methodology}
      sources={sources}
      canonical="https://lead-gen-agency.applabx.com/statistics/lead-generation"
      relatedPages={relatedPages}
      relatedReading={relatedReading}
    />
  )
}
