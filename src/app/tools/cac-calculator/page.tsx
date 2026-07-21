'use client'

import { useState, useMemo } from 'react'
// framer-motion removed — motion.div replaced with regular div
import Link from 'next/link'
import ToolPageTemplate from '@/components/sections/ToolPageTemplate'
import { Button } from '@/components/ui/Button'
import { TrendingUp, DollarSign, Users, ArrowRight, Calculator } from 'lucide-react'

export default function CACCalculatorPage() {
  const [totalSpend, setTotalSpend] = useState<number>(10000)
  const [customersAcquired, setCustomersAcquired] = useState<number>(20)



  // Optional LTV input
  const [monthlyRevenue, setMonthlyRevenue] = useState<number>(0)
  const [customerChurn, setCustomerChurn] = useState<number>(5)
  const [showAdvanced, setShowAdvanced] = useState<boolean>(false)

  const cacValue = useMemo(
    () => (customersAcquired > 0 ? totalSpend / customersAcquired : 0),
    [totalSpend, customersAcquired],
  )

  const ltvValue = useMemo(
    () => (monthlyRevenue > 0 && customerChurn > 0 ? monthlyRevenue / (customerChurn / 100) : 0),
    [monthlyRevenue, customerChurn],
  )

  const computedLtvCacRatio = useMemo(
    () => (cacValue > 0 && ltvValue > 0 ? ltvValue / cacValue : 0),
    [cacValue, ltvValue],
  )

  const computedIsGoodRatio = useMemo(() => ltvValue > 0 && cacValue > 0 && ltvValue / cacValue >= 3, [ltvValue, cacValue])

  return (
    <ToolPageTemplate
      title="Customer Acquisition Cost (CAC) Calculator"
      description="Calculate your customer acquisition cost and compare it against customer lifetime value to assess your business health."
      icon={<DollarSign className="w-10 h-10 text-[var(--brand-primary)]" />}
      methodology={
        <div className="space-y-3 text-sm text-[var(--brand-gray)]">
          <p><strong>CAC Formula:</strong> Total Sales & Marketing Spend / Customers Acquired</p>
          <p><strong>LTV Formula:</strong> Monthly Revenue per Customer / Monthly Churn Rate</p>
          <p><strong>LTV:CAC Ratio:</strong> A ratio of 3:1 or higher is generally considered healthy for sustainable growth.</p>
          <p className="text-xs mt-2 text-[var(--brand-gray)]/70">These calculations are estimates. Actual CAC and LTV may vary based on your business model and data accuracy.</p>
        </div>
      }
    >
      <div className="space-y-8">
        {/* Calculator Input Grid */}
        <div className="bg-[var(--brand-light)] rounded-2xl p-8">
          <h2 className="text-xl font-bold text-[var(--brand-dark)] mb-6 flex items-center gap-2">
            <Calculator className="w-5 h-5 text-[var(--brand-primary)]" />
            Enter Your Numbers
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Total Spend */}
            <div>
              <label className="block text-sm font-medium text-[var(--brand-dark)] mb-2">
                Total Sales & Marketing Spend
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--brand-gray)]">$</span>
                <input
                  type="number"
                  value={totalSpend}
                  onChange={(e) => setTotalSpend(Number(e.target.value) || 0)}
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-[var(--border)] bg-white focus:ring-2 focus:ring-[var(--brand-primary)] focus:border-transparent outline-none transition-all"
                  min="0"
                />
              </div>
              <p className="text-xs text-[var(--brand-gray)] mt-1">Include all sales, marketing, and advertising costs</p>
            </div>

            {/* Customers Acquired */}
            <div>
              <label className="block text-sm font-medium text-[var(--brand-dark)] mb-2">
                Customers Acquired
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--brand-gray)]">#</span>
                <input
                  type="number"
                  value={customersAcquired}
                  onChange={(e) => setCustomersAcquired(Number(e.target.value) || 0)}
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-[var(--border)] bg-white focus:ring-2 focus:ring-[var(--brand-primary)] focus:border-transparent outline-none transition-all"
                  min="0"
                />
              </div>
              <p className="text-xs text-[var(--brand-gray)] mt-1">Number of new customers in this period</p>
            </div>
          </div>

          {/* Advanced Toggle */}
          <div className="mt-6 pt-6 border-t border-[var(--border)]">
            <button
              onClick={() => setShowAdvanced(!showAdvanced)}
              className="text-sm text-[var(--brand-primary)] font-medium hover:underline"
            >
              {showAdvanced ? 'Hide' : 'Show'} Advanced LTV Calculation
            </button>

            {showAdvanced && (
              <div
                className="grid md:grid-cols-2 gap-6 mt-4"
              >
                {/* Monthly Revenue */}
                <div>
                  <label className="block text-sm font-medium text-[var(--brand-dark)] mb-2">
                    Monthly Revenue per Customer
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--brand-gray)]">$</span>
                    <input
                      type="number"
                      value={monthlyRevenue}
                      onChange={(e) => setMonthlyRevenue(Number(e.target.value) || 0)}
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-[var(--border)] bg-white focus:ring-2 focus:ring-[var(--brand-primary)] focus:border-transparent outline-none transition-all"
                      min="0"
                    />
                  </div>
                  <p className="text-xs text-[var(--brand-gray)] mt-1">Average monthly revenue from each customer</p>
                </div>

                {/* Churn Rate */}
                <div>
                  <label className="block text-sm font-medium text-[var(--brand-dark)] mb-2">
                    Monthly Churn Rate
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={customerChurn}
                      onChange={(e) => setCustomerChurn(Number(e.target.value) || 0)}
                      className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-white focus:ring-2 focus:ring-[var(--brand-primary)] focus:border-transparent outline-none transition-all"
                      min="0"
                      max="100"
                      step="0.1"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--brand-gray)]">%</span>
                  </div>
                  <p className="text-xs text-[var(--brand-gray)] mt-1">Percentage of customers lost per month</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Results Section */}
        <div className="bg-gradient-to-br from-[var(--brand-primary)] to-[var(--brand-primary-dark)] rounded-2xl p-8 text-white">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            Your Results
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* CAC */}
            <div key={cacValue} className="text-center">
              <div className="text-4xl font-bold mb-1">
                ${cacValue.toLocaleString(undefined, { maximumFractionDigits: 0 })}
              </div>
              <div className="text-sm text-white/70">Customer Acquisition Cost</div>
            </div>

            {/* LTV */}
            {showAdvanced && monthlyRevenue > 0 && (
              <>
                <div key={ltvValue} className="text-center">
                  <div className="text-4xl font-bold mb-1">
                    ${ltvValue.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                  </div>
                  <div className="text-sm text-white/70">Customer Lifetime Value</div>
                </div>

                {/* LTV:CAC Ratio */}
                <div key={computedLtvCacRatio} className="text-center">
                  <div className={`text-4xl font-bold mb-1 ${computedIsGoodRatio ? 'text-emerald-300' : 'text-amber-300'}`}>
                    {computedLtvCacRatio.toFixed(1)}:1
                  </div>
                  <div className="text-sm text-white/70">LTV:CAC Ratio</div>
                </div>

                {/* Health Status */}
                <div className="text-center">
                  <div className={`text-4xl font-bold mb-2 ${computedIsGoodRatio ? 'text-emerald-300' : 'text-amber-300'}`}>
                    {computedIsGoodRatio ? '✓' : '⚠'}
                  </div>
                  <div className="text-sm text-white/70">
                    {computedIsGoodRatio ? 'Healthy' : 'Needs Attention'}
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Health Indicator */}
          {showAdvanced && monthlyRevenue > 0 && (
            <div className="mt-8 pt-6 border-t border-white/20">
              <div className="bg-white/10 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${computedIsGoodRatio ? 'bg-emerald-500' : 'bg-amber-500'}`}>
                    {computedIsGoodRatio ? '✓' : '!'}
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">
                      {computedIsGoodRatio ? 'Healthy Unit Economics' : 'Unit Economics Need Improvement'}
                    </h4>
                    <p className="text-sm text-white/70">
                      {computedIsGoodRatio
                        ? `Your LTV:CAC ratio of ${computedLtvCacRatio.toFixed(1)}:1 indicates sustainable growth. For every $1 spent on acquisition, you generate $${computedLtvCacRatio.toFixed(1)} in lifetime value.`
                        : `Your LTV:CAC ratio of ${computedLtvCacRatio.toFixed(1)}:1 is below the healthy threshold of 3:1. Consider reducing CAC or increasing customer value through upsells, pricing adjustments, or reducing churn.`
                      }
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="bg-white rounded-2xl p-8 border border-[var(--border)] text-center">
          <h3 className="text-xl font-bold text-[var(--brand-dark)] mb-4">
            Want to Reduce Your CAC?
          </h3>
          <p className="text-[var(--brand-gray)] mb-6 max-w-2xl mx-auto">
            Our team helps B2B companies optimize their lead generation and sales processes to acquire customers more efficiently.
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
