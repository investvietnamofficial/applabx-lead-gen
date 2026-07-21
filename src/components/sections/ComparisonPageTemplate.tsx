'use client'

import { m } from 'framer-motion'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { ComparisonData, ComparisonFeature } from '@/lib/comparisons'
import {
  ArrowRight,
  Calendar,
  CheckCircle,
  Trophy,
  Target,
  TrendingUp,
  XCircle,
  Minus,
} from 'lucide-react'

interface ComparisonPageTemplateProps {
  comparison: ComparisonData
}

function WinnerBadge({ winner }: { winner: 'left' | 'right' | 'tie' }) {
  if (winner === 'tie') {
    return (
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[var(--brand-light)] text-[var(--brand-gray)]">
        <Minus className="w-3 h-3" />
        Tie
      </span>
    )
  }
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[var(--brand-accent)]/10 text-[var(--brand-accent)]">
      <Trophy className="w-3 h-3" />
      Winner
    </span>
  )
}

function FeatureRow({ feature, index, leftName, rightName }: { feature: ComparisonFeature; index: number; leftName: string; rightName: string }) {
  const isLeftWinner = feature.winner === 'left'
  const isRightWinner = feature.winner === 'right'
  const isTie = feature.winner === 'tie'

  return (
    <tr className={`${index % 2 === 0 ? 'bg-white' : 'bg-[var(--brand-light)]/50'}`}>
      {/* Feature Name */}
      <td className="px-6 py-4">
        <div className="font-medium text-[var(--brand-dark)]">{feature.feature}</div>
        {feature.description && (
          <div className="text-sm text-[var(--brand-gray)] mt-1">{feature.description}</div>
        )}
      </td>

      {/* Left Score */}
      <td className={`px-6 py-4 text-center ${isLeftWinner ? 'bg-[var(--brand-accent)]/5' : ''}`}>
        <div className={`font-semibold ${isLeftWinner ? 'text-[var(--brand-accent)]' : 'text-[var(--brand-dark)]'}`}>
          {feature.leftScore}
        </div>
        {isLeftWinner && (
          <div className="mt-1">
            <CheckCircle className="w-4 h-4 text-[var(--brand-accent)] mx-auto" />
          </div>
        )}
      </td>

      {/* Right Score */}
      <td className={`px-6 py-4 text-center ${isRightWinner ? 'bg-[var(--brand-accent)]/5' : ''}`}>
        <div className={`font-semibold ${isRightWinner ? 'text-[var(--brand-accent)]' : 'text-[var(--brand-dark)]'}`}>
          {feature.rightScore}
        </div>
        {isRightWinner && (
          <div className="mt-1">
            <CheckCircle className="w-4 h-4 text-[var(--brand-accent)] mx-auto" />
          </div>
        )}
      </td>
    </tr>
  )
}

export default function ComparisonPageTemplate({ comparison }: ComparisonPageTemplateProps) {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden bg-gradient-to-b from-[var(--brand-light)] to-white">
        {/* Decorative gradient orbs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--brand-primary)]/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[var(--brand-accent)]/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4" />

        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Eyebrow */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/compare">
                <Badge variant="primary" className="mb-6 cursor-pointer hover:bg-[var(--brand-primary)]/20">
                  Comparison Guide
                </Badge>
              </Link>
            </m.div>

            {/* H1 */}
            <m.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="heading-1 text-[var(--brand-dark)] mb-6"
            >
              {comparison.title}
            </m.h1>

            {/* Description */}
            <m.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-[var(--brand-gray)] mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              {comparison.description}
            </m.p>

            {/* CTAs */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/contact">
                <Button size="xl">
                  <Calendar className="w-5 h-5" />
                  Book a Strategy Call
                </Button>
              </Link>
            </m.div>
          </div>
        </Container>
      </section>

      {/* Comparison Cards Section */}
      <section className="py-16 bg-white">
        <Container>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Left Option Card */}
            <m.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden rounded-2xl border-2 border-[var(--brand-primary)]/20 bg-gradient-to-br from-[var(--brand-light)] to-white p-8"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--brand-primary)]/5 rounded-full -translate-y-1/2 translate-x-1/2" />

              <div className="relative">
                <Badge variant="primary" className="mb-4">Left Option</Badge>
                <h2 className="text-2xl font-bold text-[var(--brand-dark)] mb-2">
                  {comparison.leftOption.name}
                </h2>
                <p className="text-sm font-medium text-[var(--brand-primary)] mb-4">
                  {comparison.leftOption.tagline}
                </p>
                <p className="text-[var(--brand-gray)] mb-6 leading-relaxed">
                  {comparison.leftOption.description}
                </p>

                <h3 className="text-sm font-semibold text-[var(--brand-dark)] mb-3 uppercase tracking-wide">
                  Best For
                </h3>
                <ul className="space-y-2">
                  {comparison.leftOption.bestFor.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-[var(--brand-gray)]">
                      <Target className="w-4 h-4 text-[var(--brand-accent)] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </m.div>

            {/* Right Option Card */}
            <m.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative overflow-hidden rounded-2xl border-2 border-[var(--brand-accent)]/20 bg-gradient-to-br from-[var(--brand-light)]/50 to-white p-8"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--brand-accent)]/5 rounded-full -translate-y-1/2 translate-x-1/2" />

              <div className="relative">
                <Badge variant="accent" className="mb-4">Right Option</Badge>
                <h2 className="text-2xl font-bold text-[var(--brand-dark)] mb-2">
                  {comparison.rightOption.name}
                </h2>
                <p className="text-sm font-medium text-[var(--brand-accent)] mb-4">
                  {comparison.rightOption.tagline}
                </p>
                <p className="text-[var(--brand-gray)] mb-6 leading-relaxed">
                  {comparison.rightOption.description}
                </p>

                <h3 className="text-sm font-semibold text-[var(--brand-dark)] mb-3 uppercase tracking-wide">
                  Best For
                </h3>
                <ul className="space-y-2">
                  {comparison.rightOption.bestFor.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-[var(--brand-gray)]">
                      <Target className="w-4 h-4 text-[var(--brand-accent)] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </m.div>
          </div>
        </Container>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-16 bg-[var(--brand-light-secondary)]">
        <Container>
          <m.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="heading-2 text-[var(--brand-dark)] mb-4">
                Feature Comparison
              </h2>
              <p className="text-lg text-[var(--brand-gray)]">
                Side-by-side comparison of key features and capabilities
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-[var(--border)]">
              {/* Table Header */}
              <div className="bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-primary-dark)] text-white">
                <div className="grid grid-cols-3">
                  <div className="px-6 py-4 font-semibold">Feature</div>
                  <div className="px-6 py-4 text-center font-semibold border-l border-white/20">
                    {comparison.leftOption.name}
                  </div>
                  <div className="px-6 py-4 text-center font-semibold border-l border-white/20">
                    {comparison.rightOption.name}
                  </div>
                </div>
              </div>

              {/* Table Body */}
              <div className="divide-y divide-[var(--border)]">
                {comparison.features.map((feature, index) => (
                  <FeatureRow
                    key={index}
                    feature={feature}
                    index={index}
                    leftName={comparison.leftOption.name}
                    rightName={comparison.rightOption.name}
                  />
                ))}
              </div>
            </div>
          </m.div>
        </Container>
      </section>

      {/* Which Is Right For You */}
      <section className="py-16 bg-white">
        <Container>
          <m.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="heading-2 text-[var(--brand-dark)] mb-4">
                Which Is Right for You?
              </h2>
              <p className="text-lg text-[var(--brand-gray)] max-w-2xl mx-auto">
                Consider these factors when making your decision
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Left Option Summary */}
              <div className="bg-gradient-to-br from-[var(--brand-light)] to-white rounded-2xl p-8 border border-[var(--border)]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[var(--brand-primary)]/10 flex items-center justify-center">
                    <Target className="w-6 h-6 text-[var(--brand-primary)]" />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--brand-dark)]">
                    Choose {comparison.leftOption.name} if...
                  </h3>
                </div>
                <p className="text-[var(--brand-gray)] leading-relaxed mb-6">
                  {comparison.verdict.leftBestFor}
                </p>
                <div className="flex items-center gap-2 text-sm text-[var(--brand-primary)] font-medium">
                  <TrendingUp className="w-4 h-4" />
                  Recommended for: {comparison.leftOption.bestFor[0]}
                </div>
              </div>

              {/* Right Option Summary */}
              <div className="bg-gradient-to-br from-[var(--brand-light)]/50 to-white rounded-2xl p-8 border border-[var(--border)]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[var(--brand-accent)]/10 flex items-center justify-center">
                    <Target className="w-6 h-6 text-[var(--brand-accent)]" />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--brand-dark)]">
                    Choose {comparison.rightOption.name} if...
                  </h3>
                </div>
                <p className="text-[var(--brand-gray)] leading-relaxed mb-6">
                  {comparison.verdict.rightBestFor}
                </p>
                <div className="flex items-center gap-2 text-sm text-[var(--brand-accent)] font-medium">
                  <TrendingUp className="w-4 h-4" />
                  Recommended for: {comparison.rightOption.bestFor[0]}
                </div>
              </div>
            </div>
          </m.div>
        </Container>
      </section>

      {/* Honest Verdict */}
      <section className="py-16 bg-[var(--brand-light-secondary)]">
        <Container>
          <m.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-2xl p-8 md:p-12 border border-[var(--border)] shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[var(--brand-accent)]/10 flex items-center justify-center">
                  <Trophy className="w-7 h-7 text-[var(--brand-accent)]" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-[var(--brand-dark)]">
                    Honest Verdict
                  </h2>
                  <p className="text-[var(--brand-gray)]">
                    Our expert assessment
                  </p>
                </div>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-[var(--brand-dark)] leading-relaxed text-lg">
                  {comparison.verdict.summary}
                </p>
              </div>

              <div className="mt-8 p-6 bg-[var(--brand-light)] rounded-xl">
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                    comparison.verdict.winner === 'left'
                      ? 'bg-[var(--brand-primary)] text-white'
                      : comparison.verdict.winner === 'right'
                      ? 'bg-[var(--brand-accent)] text-white'
                      : 'bg-[var(--brand-gray)] text-white'
                  }`}>
                    {comparison.verdict.winner === 'tie' ? (
                      <Minus className="w-5 h-5" />
                    ) : comparison.verdict.winner === 'left' ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : (
                      <CheckCircle className="w-5 h-5" />
                    )}
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--brand-dark)] mb-1">
                      {comparison.verdict.winner === 'tie'
                        ? 'Both Platforms Win'
                        : `Winner: ${comparison.verdict.winner === 'left' ? comparison.leftOption.name : comparison.rightOption.name}`}
                    </h4>
                    <p className="text-[var(--brand-gray)] text-sm">
                      {comparison.verdict.winner === 'tie'
                        ? 'This comparison depends entirely on your specific use case and requirements. Both tools excel in different areas.'
                        : `This platform wins for most general use cases, but your specific needs may favor the other option.`}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </m.div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-primary)] via-[var(--brand-primary-dark)] to-[var(--brand-accent)]" />

        {/* Decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-[var(--brand-accent)]/30 rounded-full blur-3xl" />
        </div>

        <Container className="relative z-10">
          <m.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="heading-2 text-white mb-6">
              Need Help Choosing the Right Strategy?
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
              Book a free strategy call with our team. We&apos;ll help you evaluate your options and build a lead generation strategy that works.
            </p>

            <Link href="/contact">
              <Button
                size="xl"
                className="bg-white text-[var(--brand-primary)] hover:bg-[var(--brand-light)]"
              >
                <Calendar className="w-5 h-5" />
                Book a Free Strategy Call
              </Button>
            </Link>

            <p className="mt-6">
              <Link href="/compare" className="text-white/70 hover:text-white inline-flex items-center gap-2 transition-colors">
                View all comparisons
                <ArrowRight className="w-4 h-4" />
              </Link>
            </p>
          </m.div>
        </Container>
      </section>
    </>
  )
}
