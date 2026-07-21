'use client'

import { TrendingUp, TrendingDown, Minus, ExternalLink } from 'lucide-react'

interface StatCardProps {
  value: string
  label: string
  source?: string
  trend?: {
    direction: 'up' | 'down' | 'neutral'
    value: string
  }
  description?: string
  index?: number
}

export function StatCard({ value, label, source, trend, description }: StatCardProps) {
  return (
    <div
      className="group relative bg-white rounded-2xl p-6 border border-[var(--border)] hover:border-[var(--brand-primary)]/30 hover:shadow-lg transition-all duration-300"
    >
      {/* Decorative gradient on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[var(--brand-primary)]/5 to-[var(--brand-accent)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative">
        {/* Value */}
        <div className="mb-3">
          <span className="text-4xl md:text-5xl font-bold text-[var(--brand-dark)] tracking-tight">
            {value}
          </span>
        </div>

        {/* Label */}
        <div className="mb-2">
          <h3 className="text-lg font-semibold text-[var(--brand-dark)] leading-tight">
            {label}
          </h3>
        </div>

        {/* Description */}
        {description && (
          <p className="text-sm text-[var(--brand-gray)] leading-relaxed mb-3">
            {description}
          </p>
        )}

        {/* Trend Indicator */}
        {trend && (
          <div className={`flex items-center gap-1.5 text-sm font-medium ${
            trend.direction === 'up'
              ? 'text-emerald-600'
              : trend.direction === 'down'
              ? 'text-red-600'
              : 'text-[var(--brand-gray)]'
          }`}>
            {trend.direction === 'up' && <TrendingUp className="w-4 h-4" />}
            {trend.direction === 'down' && <TrendingDown className="w-4 h-4" />}
            {trend.direction === 'neutral' && <Minus className="w-4 h-4" />}
            <span>{trend.value}</span>
          </div>
        )}

        {/* Source */}
        {source && (
          <div className="mt-4 pt-4 border-t border-[var(--border)]">
            <div className="flex items-center gap-1.5 text-xs text-[var(--brand-gray)]">
              <ExternalLink className="w-3 h-3" />
              <span>{source}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
