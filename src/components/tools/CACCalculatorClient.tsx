'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import {
  ArrowRight,
  DollarSign,
  Users,
  TrendingUp,
  BarChart2,
  Info,
} from 'lucide-react'

export function CACCalculatorClient() {
  const [adSpend, setAdSpend] = useState(5000)
  const [marketingSalaries, setMarketingSalaries] = useState(8000)
  const [toolsCost, setToolsCost] = useState(2000)
  const [otherCosts, setOtherCosts] = useState(1000)
  const [newCustomers, setNewCustomers] = useState(10)
  const [closeRate, setCloseRate] = useState(5)

  const totalCost = adSpend + marketingSalaries + toolsCost + otherCosts
  const cac = newCustomers > 0 ? totalCost / newCustomers : 0
  const leadsNeeded = closeRate > 0 ? Math.round(newCustomers / (closeRate / 100)) : 0
  const annualCost = totalCost * 12
  const annualCustomers = newCustomers * 12

  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 pb-16 overflow-hidden bg-gradient-to-br from-[var(--brand-light)] to-white">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--brand-primary)]/10 rounded-full blur-[120px] -translate-y-1/2" />
        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--brand-primary)]/10 text-[var(--brand-primary)] text-sm font-semibold mb-6">
              <BarChart2 className="w-4 h-4" />
              Free Tool
            </div>
            <h1 className="heading-1 text-[var(--brand-dark)] mb-4">
              Customer Acquisition Cost Calculator
            </h1>
            <p className="text-xl text-[var(--brand-gray)]">
              Calculate how much you spend to acquire each new customer. Understanding your CAC is the first step to optimizing your growth efficiency.
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
                  <DollarSign className="w-5 h-5 text-[var(--brand-primary)]" />
                  Monthly Marketing Costs
                </h2>

                <div className="space-y-6">
                  {[
                    { label: 'Ad Spend ($)', value: adSpend, set: setAdSpend, min: 0, max: 100000, step: 500, prefix: '$' },
                    { label: 'Marketing Salaries ($)', value: marketingSalaries, set: setMarketingSalaries, min: 0, max: 100000, step: 1000, prefix: '$' },
                    { label: 'Tools & SaaS ($)', value: toolsCost, set: setToolsCost, min: 0, max: 20000, step: 200, prefix: '$' },
                    { label: 'Other Costs ($)', value: otherCosts, set: setOtherCosts, min: 0, max: 20000, step: 200, prefix: '$' },
                  ].map((input) => (
                    <div key={input.label}>
                      <label className="block text-sm font-medium text-[var(--brand-dark)] mb-2">
                        {input.label}
                      </label>
                      <input
                        type="range"
                        min={input.min}
                        max={input.max}
                        step={input.step}
                        value={input.value}
                        onChange={(e) => input.set(Number(e.target.value))}
                        className="w-full h-2 rounded-lg appearance-none bg-[var(--brand-light-secondary)] cursor-pointer accent-[var(--brand-primary)]"
                      />
                      <div className="flex justify-between text-sm text-[var(--brand-gray)] mt-1">
                        <span>{input.prefix}{input.min.toLocaleString()}</span>
                        <span className="font-bold text-[var(--brand-primary)]">{input.prefix}{input.value.toLocaleString()}</span>
                        <span>{input.prefix}{input.max.toLocaleString()}</span>
                      </div>
                    </div>
                  ))}

                  <hr className="border-[var(--border)]" />

                  <div>
                    <label className="block text-sm font-medium text-[var(--brand-dark)] mb-2">
                      New Customers This Month
                    </label>
                    <input
                      type="range"
                      min={1}
                      max={200}
                      step={1}
                      value={newCustomers}
                      onChange={(e) => setNewCustomers(Number(e.target.value))}
                      className="w-full h-2 rounded-lg appearance-none bg-[var(--brand-light-secondary)] cursor-pointer accent-[var(--brand-accent)]"
                    />
                    <div className="flex justify-between text-sm text-[var(--brand-gray)] mt-1">
                      <span>1</span>
                      <span className="font-bold text-[var(--brand-accent)]">{newCustomers} customers</span>
                      <span>200</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[var(--brand-dark)] mb-2">
                      Close Rate (%)
                    </label>
                    <input
                      type="range"
                      min={1}
                      max={30}
                      step={1}
                      value={closeRate}
                      onChange={(e) => setCloseRate(Number(e.target.value))}
                      className="w-full h-2 rounded-lg appearance-none bg-[var(--brand-light-secondary)] cursor-pointer accent-[var(--brand-accent)]"
                    />
                    <div className="flex justify-between text-sm text-[var(--brand-gray)] mt-1">
                      <span>1%</span>
                      <span className="font-bold text-[var(--brand-accent)]">{closeRate}%</span>
                      <span>30%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Results */}
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-[var(--brand-dark)] flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-[var(--brand-accent)]" />
                  Your CAC Analysis
                </h2>

                <div className="bg-gradient-to-br from-[var(--brand-dark)] to-[var(--brand-primary)] rounded-2xl p-6 text-white">
                  <div className="text-sm text-white/60 mb-1">Your Customer Acquisition Cost</div>
                  <div className="text-5xl font-bold mb-1">
                    ${Math.round(cac).toLocaleString()}
                  </div>
                  <div className="text-sm text-white/60">per customer</div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: 'Monthly Total Cost', value: `$${totalCost.toLocaleString()}`, color: 'text-[var(--brand-dark)]' },
                    { label: 'Annual Cost', value: `$${annualCost.toLocaleString()}`, color: 'text-[var(--brand-dark)]' },
                    { label: 'Annual Customers', value: annualCustomers.toLocaleString(), color: 'text-[var(--brand-primary)]' },
                    { label: 'Leads Needed/Mo', value: leadsNeeded.toLocaleString(), color: 'text-[var(--brand-primary)]' },
                  ].map((r) => (
                    <div key={r.label} className="bg-[var(--brand-light)] rounded-xl p-4 border border-[var(--border)]">
                      <div className="text-xs text-[var(--brand-gray)] mb-1">{r.label}</div>
                      <div className={`text-2xl font-bold ${r.color}`}>{r.value}</div>
                    </div>
                  ))}
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-[var(--brand-accent)]/10 border border-[var(--brand-accent)]/20">
                  <Info className="w-4 h-4 text-[var(--brand-accent)] flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-[var(--brand-gray)] leading-relaxed">
                    <strong>Illustrative estimates only.</strong> CAC varies significantly by industry, ICP complexity, sales cycle length, and geographic market. These figures are for planning purposes. Book a strategy call for a customized CAC analysis based on real market data.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Formula Explanation */}
      <section className="section-padding bg-[var(--brand-light)]">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-2 text-[var(--brand-dark)] mb-8 text-center">
              What is CAC and How is it Calculated?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-6 border border-[var(--border)]">
                <div className="text-sm text-[var(--brand-gray)] mb-2 font-medium">Formula</div>
                <code className="block bg-[var(--brand-dark)] text-white rounded-lg p-4 font-mono text-sm">
                  CAC = Total Marketing Cost ÷ New Customers
                </code>
              </div>
              <div className="space-y-4">
                <p className="text-[var(--brand-gray)]">
                  Customer Acquisition Cost (CAC) measures the total cost of winning a new customer. It includes all marketing and sales spending that contributes to acquiring customers in a given period.
                </p>
                <p className="text-[var(--brand-gray)]">
                  A healthy CAC varies by business model — B2B SaaS companies typically target CAC payback periods of under 12 months. Compare your CAC against customer lifetime value (LTV) to understand profitability.
                </p>
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
              Get a Real CAC Analysis for Your Market
            </h2>
            <p className="text-lg text-[#94A3B8] mb-8">
              Our team will analyze your current acquisition costs and identify opportunities to reduce CAC while increasing lead quality.
            </p>
            <Link href="/contact">
              <Button size="xl">
                Book a Free Strategy Call
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </>
  )
}
