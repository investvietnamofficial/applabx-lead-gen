'use client'

import { m } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

/**
 * TestimonialsSection — client testimonials carousel.
 *
 * SETUP: Set SHOW_TESTIMONIALS = true and populate realTestimonials
 * once you have genuine client quotes with consent.
 *
 * DO NOT publish fabricated testimonials.
 */
const SHOW_TESTIMONIALS = false // Set to true when real testimonials are added

interface Testimonial {
  quote: string
  clientName: string
  clientTitle: string
  clientCompany: string
  rating: number
}

// TODO: Replace with real testimonials. Obtain written consent from each client.
const realTestimonials: Testimonial[] = [
  // {
  //   quote: 'AppLabx transformed our outbound pipeline. We went from 5 qualified leads a month to over 80 in 90 days.',
  //   clientName: 'Jane Smith',
  //   clientTitle: 'VP of Sales',
  //   clientCompany: 'TechCorp',
  //   rating: 5,
  // },
]

function TestimonialCarousel({ testimonials }: { testimonials: Testimonial[] }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, testimonials.length])

  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const goToPrev = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    )
  }

  const current = testimonials[currentIndex]

  return (
    <div className="max-w-4xl mx-auto">
      <m.div
        key={currentIndex}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative"
      >
        {/* Quote Icon */}
        <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-[var(--brand-primary)] flex items-center justify-center">
          <Quote className="w-6 h-6 text-white" />
        </div>

        {/* Stars */}
        <div className="flex items-center gap-1 mb-6">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-5 h-5 ${
                i < current.rating
                  ? 'fill-[var(--brand-gold)] text-[var(--brand-gold)]'
                  : 'fill-gray-200 text-gray-200'
              }`}
            />
          ))}
        </div>

        {/* Quote */}
        <blockquote className="text-xl md:text-2xl text-[var(--brand-dark)] leading-relaxed mb-8">
          &ldquo;{current.quote}&rdquo;
        </blockquote>

        {/* Client Info */}
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-[var(--brand-primary)]/10 flex items-center justify-center">
            <span className="text-xl font-semibold text-[var(--brand-primary)]">
              {current.clientName.charAt(0)}
            </span>
          </div>
          <div>
            <div className="font-semibold text-[var(--brand-dark)]">{current.clientName}</div>
            <div className="text-sm text-[var(--brand-gray)]">
              {current.clientTitle}, {current.clientCompany}
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[var(--brand-light)] hover:bg-[var(--brand-primary)] hover:text-white flex items-center justify-center transition-colors"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[var(--brand-light)] hover:bg-[var(--brand-primary)] hover:text-white flex items-center justify-center transition-colors"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </m.div>

      {/* Dots */}
      <div className="flex items-center justify-center gap-2 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsAutoPlaying(false)
              setCurrentIndex(index)
            }}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex
                ? 'w-8 bg-[var(--brand-primary)]'
                : 'w-2 bg-[var(--brand-gray-light)]'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export function TestimonialsSection() {
  // Hide section entirely when no real testimonials are available
  if (!SHOW_TESTIMONIALS || realTestimonials.length === 0) {
    return null
  }

  return (
    <section className="section-padding bg-[var(--brand-light-secondary)]">
      <Container>
        <SectionHeading
          eyebrow="Testimonials"
          title="What Our Clients Say"
          subtitle="Don't just take our word for it — hear from the businesses we've helped grow."
        />
        <TestimonialCarousel testimonials={realTestimonials} />
      </Container>
    </section>
  )
}
