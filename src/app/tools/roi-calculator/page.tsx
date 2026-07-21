'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Metadata } from 'next'
import ToolPageTemplate from '@/components/sections/ToolPageTemplate'
import { Button } from '@/components/ui/Button'
import { TrendingUp, DollarSign, Target, BarChart3, ArrowRight } from 'lucide-react'

export default function ROICalculatorPage() {
  const [monthlyLeads, setMonthlyLeads] = useState<number>(100)
  const [closeRate, setCloseRate] = useState<number>(10)
  const [avgDealValue, setAvgDealValue] = useState<number>(5000)
  const [campaignCost, setCampaignCost] = useState<number>(5000)

  const closedDeals = useMemo(() => Math.round(monthlyLeads * (closeRate / 100)), [monthlyLeads, closeRate])
  const revenue = useMemo(() => closedDeals * avgDealValue, [closedDeals, avgDealValue])
  const roi = useMemo(() => campaignCost > 0 ? ((revenue - campaignCost) / campaignCost) * 100 : 0, [revenue, campaignCost])
  const costPerLead = useMemo(() => monthlyLeads > 0 ? campaignCost / monthlyLeads : 0, [monthlyLeads, campaignCost])
  const costPerCustomer = useMemo(() => closedDeals > 0 ? campaignCost / closedDeals : 0, [campaignCost, closedDeals])

  return (
    <ToolPageTemplate
      title="Lead Generation ROI Calculator"
      description="Calculate the return on investment for your lead generation campaigns. Enter your numbers to see your potential ROI."
      icon={<BarChart3 className="w-10 h-10 text-[var(--brand-primary)]" />}
      methodology={
        <div className="space-y-3 text-sm text-[var(--brand-gray)]">
          <p><strong>ROI Formula:</strong> ((Revenue - Campaign Cost) / Campaign Cost) × 100</p>
          <p><strong>Revenue:</strong> Monthly Leads × Close Rate × Average Deal Value</p>
          <p><strong>Cost Per Lead:</strong> Campaign Cost / Monthly Leads</p>
          <p><strong>Cost Per Customer:</strong> Campaign Cost / Closed Deals</p>
          <p className="text-xs mt-2 text-[var(--brand-gray)]/70">These calculations are estimates based on your inputs. Actual results may vary based on market conditions, sales cycle, and other factors.</p>
        </div>
      }
    >
      <div className="space-y-8">
        {/* Calculator Input Grid */}
        <div className="bg-[var(--brand-light)] rounded-2xl p-8">
          <h2 className="text-xl font-bold text-[var(--brand-dark)] mb-6 flex items-center gap-2">
            <Target className="w-5 h-5 text-[var(--brand-primary)]" />
            Enter Your Campaign Data
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Monthly Leads */}
            <div>
              <label className="block text-sm font-medium text-[var(--brand-dark)] mb-2">
                Monthly Leads
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--brand-gray)]">#</span>
                <input
                  type="number"
                  value={monthlyLeads}
                  onChange={(e) => setMonthlyLeads(Number(e.target.value) || 0)}
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-[var(--border)] bg-white focus:ring-2 focus:ring-[var(--brand-primary)] focus:border-transparent outline-none transition-all"
                  min="0"
                />
              </div>
              <p className="text-xs text-[var(--brand-gray)] mt-1">Number of leads generated per month</p>
            </div>

            {/* Close Rate */}
            <div>
              <label className="block text-sm font-medium text-[var(--brand-dark)] mb-2">
                Close Rate
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={closeRate}
                  onChange={(e) => setCloseRate(Number(e.target.value) || 0)}
                  className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-white focus:ring-2 focus:ring-[var(--brand-primary)] focus:border-transparent outline-none transition-all"
                  min="0"
                  max="100"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--brand-gray)]">%</span>
              </div>
              <p className="text-xs text-[var(--brand-gray)] mt-1">Percentage of leads that convert to customers</p>
            </div>

            {/* Average Deal Value */}
            <div>
              <label className="block text-sm font-medium text-[var(--brand-dark)] mb-2">
                Average Deal Value
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--brand-gray)]">$</span>
                <input
                  type="number"
                  value={avgDealValue}
                  onChange={(e) => setAvgDealValue(Number(e.target.value) || 0)}
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-[var(--border)] bg-white focus:ring-2 focus:ring-[var(--brand-primary)] focus:border-transparent outline-none transition-all"
                  min="0"
                />
              </div>
              <p className="text-xs text-[var(--brand-gray)] mt-1">Average revenue per customer</p>
            </div>

            {/* Campaign Cost */}
            <div>
              <label className="block text-sm font-medium text-[var(--brand-dark)] mb-2">
                Monthly Campaign Cost
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--brand-gray)]">$</span>
                <input
                  type="number"
                  value={campaignCost}
                  onChange={(e) => setCampaignCost(Number(e.target.value) || 0)}
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-[var(--border)] bg-white focus:ring-2 focus:ring-[var(--brand-primary)] focus:border-transparent outline-none transition-all"
                  min="0"
                />
              </div>
              <p className="text-xs text-[var(--brand-gray)] mt-1">Total monthly spend on lead generation</p>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="bg-gradient-to-br from-[var(--brand-primary)] to-[var(--brand-primary-dark)] rounded-2xl p-8 text-white">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            Your Results
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* ROI */}
            <motion.div
              key={roi}
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              className="text-center"
            >
              <div className={`text-4xl font-bold mb-1 ${roi >= 0 ? 'text-emerald-300' : 'text-red-300'}`}>
                {roi >= 0 ? '+' : ''}{roi.toFixed(0)}%
              </div>
              <div className="text-sm text-white/70">ROI</div>
            </motion.div>

            {/* Revenue */}
            <motion.div
              key={revenue}
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold mb-1">
                ${revenue.toLocaleString()}
              </div>
              <div className="text-sm text-white/70">Monthly Revenue</div>
            </motion.div>

            {/* Closed Deals */}
            <motion.div
              key={closedDeals}
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold mb-1">
                {closedDeals}
              </div>
              <div className="text-sm text-white/70">Closed Deals</div>
            </motion.div>

            {/* Cost Per Lead */}
            <motion.div
              key={costPerLead}
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold mb-1">
                ${costPerLead.toFixed(0)}
              </div>
              <div className="text-sm text-white/70">Cost Per Lead</div>
            </motion.div>
          </div>

          {/* Additional Stats */}
          <div className="mt-8 pt-6 border-t border-white/20">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex justify-between items-center">
                <span className="text-white/70">Cost Per Customer:</span>
                <span className="font-semibold">${costPerCustomer.toFixed(0)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/70">Net Profit:</span>
                <span className={`font-semibold ${revenue - campaignCost >= 0 ? 'text-emerald-300' : 'text-red-300'}`}>
                  ${(revenue - campaignCost).toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-white rounded-2xl p-8 border border-[var(--border)] text-center">
          <h3 className="text-xl font-bold text-[var(--brand-dark)] mb-4">
            Want to Improve These Numbers?
          </h3>
          <p className="text-[var(--brand-gray)] mb-6 max-w-2xl mx-auto">
            Our team specializes in optimizing lead generation campaigns for B2B companies. We can help you increase leads, improve close rates, and maximize your ROI.
          </p>
          <Link href="/contact">
            <Button size="lg">
              Book a Free Strategy Call
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </ToolPageTemplate>
  )
}
