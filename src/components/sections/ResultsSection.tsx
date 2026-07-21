'use client'

import { useState, useEffect, useRef } from 'react'
import { m, AnimatePresence } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { CheckCircle2, Users, Mail, Calendar, TrendingUp, Zap } from 'lucide-react'

// Animated counter hook
function useCounter(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!start) return
    let startTime: number
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [target, duration, start])
  return count
}

// Pipeline stages — the Clay-style interactive pipeline
const pipelineStages = [
  {
    id: 'prospect',
    icon: Users,
    label: 'Prospect',
    description: 'ICP-qualified target identified',
    color: '#3B82F6',
    bgColor: 'bg-blue-500',
  },
  {
    id: 'enrich',
    icon: Zap,
    label: 'Enrich',
    description: '200+ data points appended',
    color: '#06B6D4',
    bgColor: 'bg-cyan-500',
  },
  {
    id: 'personalize',
    icon: Mail,
    label: 'Personalize',
    description: 'AI crafts unique message',
    color: '#8B5CF6',
    bgColor: 'bg-violet-500',
  },
  {
    id: 'outreach',
    icon: Mail,
    label: 'Outreach',
    description: 'Email + LinkedIn sequence',
    color: '#F59E0B',
    bgColor: 'bg-amber-500',
  },
  {
    id: 'replies',
    icon: CheckCircle2,
    label: 'Replies',
    description: 'Prospects engage & respond',
    color: '#10B981',
    bgColor: 'bg-emerald-500',
  },
  {
    id: 'qualify',
    icon: TrendingUp,
    label: 'Qualify',
    description: 'Multi-step scoring applied',
    color: '#059669',
    bgColor: 'bg-green-600',
  },
  {
    id: 'book',
    icon: Calendar,
    label: 'Booked',
    description: 'Meeting confirmed on calendar',
    color: '#047857',
    bgColor: 'bg-green-700',
  },
]

// Outcome metrics — honest and verifiable
const outcomeMetrics = [
  {
    label: 'Reply Rate',
    prefix: '',
    value: 15,
    suffix: '%+',
    description: 'Personalized multi-channel outreach',
  },
  {
    label: 'Meetings Booked',
    prefix: '',
    value: 12,
    suffix: '/mo',
    description: 'Qualified appointments per campaign',
  },
  {
    label: 'Pipeline Generated',
    prefix: '$',
    value: 2,
    suffix: 'M+',
    description: 'Average pipeline per client per quarter',
  },
  {
    label: 'Time to First Lead',
    prefix: '',
    value: 14,
    suffix: ' days',
    description: 'From kickoff to first qualified lead',
  },
]

export function ResultsSection() {
  const [activeStage, setActiveStage] = useState(0)
  const [countersStarted, setCountersStarted] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  // Start counters when section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setCountersStarted(true)
      },
      { threshold: 0.3 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="section-padding bg-[var(--brand-dark)] relative overflow-hidden">
      {/* Background atmosphere */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#2563EB]/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#10B981]/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAzMHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-40" />
      </div>

      <Container className="relative z-10">
        {/* Section Header */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block mb-4 text-sm font-semibold uppercase tracking-wider text-[#10B981]">
            How Results Are Built
          </span>
          <h2 className="heading-2 text-white mb-4">
            From First Touch to Booked Meeting
          </h2>
          <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto">
            Our AI pipeline handles every step — from identifying your ideal prospects to landing a confirmed meeting on your calendar.
          </p>
        </m.div>

        {/* Interactive Pipeline — Desktop */}
        <div className="hidden lg:block mb-20">
          <div className="relative">
            {/* Pipeline track */}
            <div className="relative flex items-center justify-between gap-2">
              {pipelineStages.map((stage, index) => {
                const isActive = index === activeStage
                const isPast = index < activeStage
                return (
                  <m.div
                    key={stage.id}
                    className="relative flex-1 cursor-pointer"
                    onClick={() => setActiveStage(index)}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                  >
                    {/* Connector line */}
                    {index < pipelineStages.length - 1 && (
                      <div
                        className={`absolute top-6 left-1/2 w-full h-0.5 z-0 transition-colors duration-500 ${
                          isPast ? 'bg-[#10B981]' : 'bg-white/20'
                        }`}
                        style={{ width: 'calc(100% + 0.5rem)' }}
                      />
                    )}

                    {/* Node */}
                    <div className="relative z-10 flex flex-col items-center">
                      <m.div
                        className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                          isActive
                            ? `${stage.bgColor} shadow-lg shadow-${stage.color}/30 scale-110`
                            : isPast
                            ? 'bg-[#10B981]'
                            : 'bg-white/10 border border-white/20'
                        }`}
                        animate={isActive ? { scale: [1, 1.1, 1] } : {}}
                        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                      >
                        <stage.icon
                          className={`w-5 h-5 ${
                            isActive || isPast ? 'text-white' : 'text-white/50'
                          }`}
                        />
                      </m.div>

                      {/* Label */}
                      <div className="mt-3 text-center">
                        <div className={`text-xs font-semibold transition-colors ${
                          isActive || isPast ? 'text-white' : 'text-white/50'
                        }`}>
                          {stage.label}
                        </div>
                      </div>
                    </div>
                  </m.div>
                )
              })}
            </div>

            {/* Active Stage Detail */}
            <AnimatePresence mode="wait">
              <m.div
                key={activeStage}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="mt-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
              >
                <div className="flex items-center gap-4 mb-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: pipelineStages[activeStage].color }}
                  />
                  <h3 className="text-lg font-semibold text-white">
                    {pipelineStages[activeStage].label}
                  </h3>
                  <span className="text-sm text-[#94A3B8]">
                    Stage {activeStage + 1} of {pipelineStages.length}
                  </span>
                </div>
                <p className="text-[#94A3B8] text-sm">
                  {pipelineStages[activeStage].description}
                </p>
              </m.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Pipeline — Mobile: horizontal scroll or step indicator */}
        <div className="lg:hidden mb-16">
          <div className="flex items-center justify-between gap-2 mb-4 overflow-x-auto pb-2">
            {pipelineStages.map((stage, index) => (
              <button
                key={stage.id}
                onClick={() => setActiveStage(index)}
                className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                  index === activeStage
                    ? `${stage.bgColor} shadow-lg`
                    : index < activeStage
                    ? 'bg-[#10B981]'
                    : 'bg-white/10 border border-white/20'
                }`}
                aria-label={`Pipeline stage: ${stage.label}`}
              >
                <stage.icon className="w-4 h-4 text-white" />
              </button>
            ))}
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4">
            <h3 className="text-white font-semibold mb-1">
              {pipelineStages[activeStage].label}
            </h3>
            <p className="text-[#94A3B8] text-sm">
              {pipelineStages[activeStage].description}
            </p>
          </div>
        </div>

        {/* Outcome Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {outcomeMetrics.map((metric, index) => {
            const count = useCounter(metric.value, 2000, countersStarted)
            return (
              <m.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div className="text-3xl lg:text-4xl font-bold text-white mb-1">
                  {metric.prefix}{count}{metric.suffix}
                </div>
                <div className="text-sm font-semibold text-[#10B981] mb-2">{metric.label}</div>
                <div className="text-xs text-[#94A3B8]">{metric.description}</div>
              </m.div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
