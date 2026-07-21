import { Metadata } from 'next'
import StatisticsPageTemplate from '@/components/sections/StatisticsPageTemplate'

export const metadata: Metadata = {
  title: 'B2B Marketing Statistics 2024: Channels, ROI & Buyer Behavior | AppLabx',
  description: 'Critical B2B marketing statistics including LinkedIn effectiveness, buyer behavior data, channel ROI, and marketing technology adoption.',
}

export default function B2BMarketingStatisticsPage() {
  const stats = [
    {
      value: '#1',
      label: 'LinkedIn for B2B Social',
      description: 'LinkedIn is the #1 social platform for B2B lead generation, driving 50% more engagement than other social networks for B2B content.',
      trend: {
        direction: 'up' as const,
        value: 'B2B social channel',
      },
      source: 'LinkedIn Marketing Research',
    },
    {
      value: '75%',
      label: 'B2B Decision-Makers Use LinkedIn',
      description: 'Three-quarters of B2B decision-makers use LinkedIn to research vendors and industry trends, making it essential for B2B visibility.',
      trend: {
        direction: 'up' as const,
        value: 'of decision-makers',
      },
      source: 'LinkedIn Research',
    },
    {
      value: '89%',
      label: 'B2B Use Email Marketing',
      description: '89% of B2B marketers use email as their primary channel for content distribution, demonstrating its continued dominance in B2B.',
      trend: {
        direction: 'neutral' as const,
        value: 'of B2B marketers',
      },
      source: 'Content Marketing Institute',
    },
    {
      value: '6.4x',
      label: 'Email Revenue ROI',
      description: 'Email marketing delivers an average 6.4x revenue ROI, making it one of the most effective channels for B2B lead generation.',
      trend: {
        direction: 'up' as const,
        value: 'average revenue ROI',
      },
      source: 'DMA Research',
    },
    {
      value: '47%',
      label: 'Marketers Use ABM',
      description: '47% of B2B marketers now use Account-Based Marketing, with 87% saying ABM delivers higher ROI than other marketing initiatives.',
      trend: {
        direction: 'up' as const,
        value: 'ABM adoption rate',
      },
      source: 'Terminus Research',
    },
    {
      value: '92%',
      label: 'Buyers Search First',
      description: '92% of B2B buyers search online before engaging with a sales representative, underscoring the importance of search visibility.',
      trend: {
        direction: 'neutral' as const,
        value: 'research online first',
      },
      source: 'Forrester Research',
    },
    {
      value: '60%',
      label: 'Import Long Content',
      description: 'B2B buyers consume 3-5 pieces of content before engaging sales, with longer content (1,500-2,500 words) performing best.',
      trend: {
        direction: 'neutral' as const,
        value: 'pieces per journey',
      },
      source: 'Demand Gen Report',
    },
    {
      value: '2.5x',
      label: 'Video in B2B',
      description: 'B2B companies using video in their marketing get 2.5x more qualified leads than those that don\'t, according to industry research.',
      trend: {
        direction: 'up' as const,
        value: 'more leads with video',
      },
      source: 'Vidyard Research',
    },
  ]

  const sources = [
    'LinkedIn Business Statistics',
    'Content Marketing Institute (CMI) Research',
    'Demand Gen B2B Buyer Report',
    'Forrester B2B Buyer Survey',
    'Terminus ABM Research',
    'DMA Email Marketing Report',
  ]

  const relatedPages = [
    { label: 'Lead Generation Statistics', href: '/statistics/lead-generation' },
    { label: 'Cold Email Statistics', href: '/statistics/cold-email' },
  ]

  return (
    <StatisticsPageTemplate
      title="B2B Marketing Statistics: Channel Effectiveness & Buyer Insights"
      description="Critical B2B marketing data on channel effectiveness, buyer behavior, and ROI benchmarks for 2024."
      intro="B2B marketing continues to evolve with changing buyer behavior and new channel opportunities. These statistics represent verified industry research and benchmarks from leading B2B marketing studies. Understanding these trends helps marketers allocate budgets effectively, choose the right channels, and create strategies that actually reach decision-makers."
      stats={stats}
      sources={sources}
      canonical="https://lead-gen-agency.applabx.com/statistics/b2b-marketing"
      relatedPages={relatedPages}
    />
  )
}
