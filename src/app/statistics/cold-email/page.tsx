import { Metadata } from 'next'
import StatisticsPageTemplate from '@/components/sections/StatisticsPageTemplate'

export const metadata: Metadata = {
  title: 'Cold Email Statistics 2024: Response Rates, Open Rates & Benchmarks | AppLabx',
  description: 'Essential cold email statistics including average reply rates, open rates, best sending times, and tips to improve your email outreach performance.',
}

export default function ColdEmailStatisticsPage() {
  const stats = [
    {
      value: '1-5%',
      label: 'Average Reply Rate',
      description: 'The typical cold email reply rate ranges from 1% to 5%, though well-optimized campaigns can achieve 5-10% with proper personalization.',
      trend: {
        direction: 'neutral' as const,
        value: 'industry average',
      },
      source: 'Industry Benchmark',
    },
    {
      value: '20-35%',
      label: 'Average Open Rate',
      description: 'Cold emails typically achieve 20-35% open rates, varying based on subject line quality, sender reputation, and list quality.',
      trend: {
        direction: 'neutral' as const,
        value: 'industry average',
      },
      source: 'Industry Benchmark',
    },
    {
      value: '$35-50',
      label: 'Cost Per Meeting (Outbound)',
      description: 'Well-executed cold email campaigns typically cost $35-50 per booked meeting, making them highly cost-effective compared to other channels.',
      trend: {
        direction: 'down' as const,
        value: 'vs other channels',
      },
      source: 'Industry Research',
    },
    {
      value: 'Tues-Thu',
      label: 'Best Days to Send',
      description: 'Tuesday through Thursday are consistently the best days for cold email outreach, with Tuesday mornings and Wednesday afternoons often performing best.',
      trend: {
        direction: 'neutral' as const,
        value: 'optimal sending window',
      },
      source: 'Industry Best Practices',
    },
    {
      value: '9-11am',
      label: 'Best Time to Send',
      description: 'The optimal sending window is typically between 9-11 AM recipient local time, capturing decision-makers at their desks before lunch.',
      trend: {
        direction: 'neutral' as const,
        value: 'local time window',
      },
      source: 'Email Marketing Research',
    },
    {
      value: '3-5',
      label: 'Emails Per Sequence',
      description: 'Effective cold email sequences typically include 3-5 emails with spacing of 2-4 days between touches, with most replies coming from emails 2-3.',
      trend: {
        direction: 'neutral' as const,
        value: 'per campaign',
      },
      source: 'Industry Best Practices',
    },
    {
      value: '48hrs',
      label: 'Follow-up Timing',
      description: 'Following up within 48 hours of no response can increase reply rates by up to 65%, yet most senders never send a single follow-up.',
      trend: {
        direction: 'up' as const,
        value: 'response increase',
      },
      source: 'Outreach Research',
    },
    {
      value: '70%',
      label: 'Emails Never Get Reply',
      description: 'Approximately 70% of cold emails go unanswered, making follow-up sequences essential for maximizing campaign effectiveness.',
      trend: {
        direction: 'neutral' as const,
        value: 'no response rate',
      },
      source: 'Email Outreach Studies',
    },
  ]

  const sources = [
    'Mailshake Outreach Benchmarks',
    'Yesware Annual Report',
    'HubSpot Email Marketing Statistics',
    'Outreach.io Research Data',
    'Various Email Marketing Industry Reports',
  ]

  const relatedPages = [
    { label: 'Lead Generation Statistics', href: '/statistics/lead-generation' },
    { label: 'B2B Marketing Statistics', href: '/statistics/b2b-marketing' },
  ]

  return (
    <StatisticsPageTemplate
      title="Cold Email Statistics: Benchmarks for 2024"
      description="Essential cold email performance metrics and benchmarks to optimize your email outreach campaigns."
      intro="Cold email remains one of the highest-ROI outbound channels when executed correctly. These statistics represent verified industry benchmarks from thousands of B2B email campaigns. Use these numbers to set realistic targets, identify optimization opportunities, and benchmark your campaign performance against industry standards."
      stats={stats}
      sources={sources}
      canonical="https://lead-gen-agency.applabx.com/statistics/cold-email"
      relatedPages={relatedPages}
    />
  )
}
