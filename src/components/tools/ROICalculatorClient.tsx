'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { ArrowRight, Calculator, TrendingUp, Target } from 'lucide-react'

export function ROICalculatorClient() {
  const [leads, setLeads] = useState(50)
  const [closeRate, setCloseRate] = useState(10)
  const [dealValue, setDealValue] = useState(10000)
  const [campaignCost, setCampaignCost] = useState(5000)

  const closedDeals = Math.round(leads * (closeRate / 100))
  const revenue = closedDeals * dealValue
  const roi = campaignCost > 0 ? ((revenue - campaignCost) / campaignCost) * 100 : 0
  const paybackMonths = closedDeals > 0 ? Math.round(campaignCost / (closedDeals * dealValue) * 12) : 0

  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 pb-16 overflow-hidden bg-gradient-to-br from-[var(--brand-light)] to-white">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--brand-primary)]/10 rounded-full blur-[120px] -translate-y-1/2" />
        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--brand-primary)]/10 text-[var(--brand-primary)] text-sm font-semibold mb-6">
              <Calculator className="w-4 h-4" />
              Free Tool
            </div>
            <h1 className="heading-1 text-[var(--brand-dark)] mb-4">
              Lead Generation ROI Calculator
            </h1>
            <p className="text-xl text-[var(--brand-gray)]">
              Calculate the return on investment for your lead generation campaigns. Enter your numbers below to see your potential ROI.
            </p>
          </div>
        </Container>
      </section>

      {/* Calculator */}
      <section className="section-padding bg-white">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Inputs */}
              <div className="space-y-8">
                <h2 className="text-xl font-bold text-[var(--brand-dark)] flex items-center gap-2">
                  <Target className="w-5 h-5 text-[var(--brand-primary)]" />
                  Your Campaign Inputs
                </h2>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-[var(--brand-dark)] mb-2" htmlFor="leads">
                      Monthly Leads Generated
                    </label>
                    <input
                      id="leads"
                      type="range"
                      min={10}
                      max={500}
                      step={5}
                      value={leads}
                      onChange={(e) => setLeads(Number(e.target.value))}
                      className="w-full h-2 rounded-lg appearance-none bg-[var(--brand-light-secondary)] cursor-pointer accent-[var(--brand-primary)]"
                    />
                    <div className="flex justify-between text-sm text-[var(--brand-gray)] mt-1">
                      <span>10</span>
                      <span className="font-bold text-[var(--brand-primary)]">{leads} leads</span>
                      <span>500</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[var(--brand-dark)] mb-2" htmlFor="closeRate">
                      Average Close Rate (%)
                    </label>
                    <input
                      id="closeRate"
                      type="range"
                      min={1}
                      max={50}
                      step={1}
                      value={closeRate}
                      onChange={(e) => setCloseRate(Number(e.target.value))}
                      className="w-full h-2 rounded-lg appearance-none bg-[var(--brand-light-secondary)] cursor-pointer accent-[var(--brand-primary)]"
                    />
                    <div className="flex justify-between text-sm text-[var(--brand-gray)] mt-1">
                      <span>1%</span>
                      <span className="font-bold text-[var(--brand-primary)]">{closeRate}%</span>
                      <span>50%</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[var(--brand-dark)] mb-2" htmlFor="dealValue">
                      Average Deal Value ($)
                    </label>
                    <input
                      id="dealValue"
                      type="range"
                      min={1000}
                      max={100000}
                      step={1000}
                      value={dealValue}
                      onChange={(e) => setDealValue(Number(e.target.value))}
                      className="w-full h-2 rounded-lg appearance-none bg-[var(--brand-light-secondary)] cursor-pointer accent-[var(--brand-primary)]"
                    />
                    <div className="flex justify-between text-sm text-[var(--brand-gray)] mt-1">
                      <span>$1,000</span>
                      <span className="font-bold text-[var(--brand-primary)]">${dealValue.toLocaleString()}</span>
                      <span>$100,000</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[var(--brand-dark)] mb-2" htmlFor="campaignCost">
                      Monthly Campaign Cost ($)
                    </label>
                    <input
                      id="campaignCost"
                      type="range"
                      min={1000}
                      max={50000}
                      step={500}
                      value={campaignCost}
                      onChange={(e) => setCampaignCost(Number(e.target.value))}
                      className="w-full h-2 rounded-lg appearance-none bg-[var(--brand-light-secondary)] cursor-pointer accent-[var(--brand-primary)]"
                    />
                    <div className="flex justify-between text-sm text-[var(--brand-gray)] mt-1">
                      <span>$1,000</span>
                      <span className="font-bold text-[var(--brand-primary)]">${campaignCost.toLocaleString()}</span>
                      <span>$50,000</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Results */}
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-[var(--brand-dark)] flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-[var(--brand-accent)]" />
                  Your Estimated Results
                </h2>

                <div className="space-y-4">
                  {[
                    { label: 'Closed Deals per Month', value: closedDeals.toString() },
                    { label: 'Monthly Revenue', value: `$${revenue.toLocaleString()}` },
                    { label: 'Campaign ROI', value: `${roi.toFixed(0)}%` },
                    { label: 'Payback Period', value: paybackMonths > 0 ? `${paybackMonths} months` : 'N/A' },
                  ].map((result) => (
                    <div key={result.label} className="bg-[var(--brand-light)] rounded-xl p-5 border border-[var(--border)]">
                      <div className="text-sm text-[var(--brand-gray)] mb-1">{result.label}</div>
                      <div className="text-3xl font-bold text-[var(--brand-dark)]">{result.value}</div>
                    </div>
                  ))}
                </div>

                <div className="p-5 rounded-xl bg-[var(--brand-accent)]/10 border border-[var(--brand-accent)]/20">
                  <p className="text-sm text-[var(--brand-gray)]">
                    These are estimates based on your inputs. Actual results vary by industry, ICP, market, and execution quality. Contact us for a customized ROI analysis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[var(--brand-dark)]">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-2 text-white mb-4">
              Want a Personalized ROI Analysis?
            </h2>
            <p className="text-lg text-[#94A3B8] mb-8">
              Our team will model your specific campaign ROI based on real market data and your ICP.
            </p>
            <Link href="/contact">
              <Button size="xl">
                Get Your Custom ROI Analysis
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </>
  )
}
