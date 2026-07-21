import { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { generateMetadata } from '@/lib/seo'
import {
  ArrowRight,
  Clock,
  Calendar,
  Mail,
  FileText,
  Users,
  Zap,
  TrendingUp,
  Globe,
  Phone,
} from 'lucide-react'

export const metadata: Metadata = generateMetadata({
  title: 'Blog — B2B Lead Generation Insights',
  description:
    'Expert insights on cold email strategy, LinkedIn outreach, AI in B2B sales, and outbound lead generation for APAC markets.',
  path: '/resources/blog',
})

// Placeholder articles data
const featuredArticle = {
  category: 'Cold Email Strategy',
  title: 'Why Cold Email Response Rates Are Rising in 2024',
  excerpt:
    'After years of declining open rates, something has shifted. Learn why personalized, value-first cold emails are seeing a resurgence and how to adapt your approach for better results.',
  readTime: '8 min read',
  date: 'July 2025',
  author: 'AppLabx Team',
}

const articles = [
  {
    category: 'LinkedIn Outreach',
    title: 'The LinkedIn Connection Request Template That Gets 60%+ Accept Rates',
    excerpt:
      'Stop sending generic connection requests. This breakdown shows the exact structure that works for APAC B2B decision-makers.',
    readTime: '6 min read',
    date: 'July 2025',
  },
  {
    category: 'AI in B2B Sales',
    title: 'AI Tools for B2B Lead Generation: What Actually Works',
    excerpt:
      'Separating hype from reality. Our team tested AI tools for sales outreach — here\'s what moved the needle.',
    readTime: '10 min read',
    date: 'July 2025',
  },
  {
    category: 'Lead Generation',
    title: 'ICP vs. Buyer Persona: Why the Distinction Matters for Your Pipeline',
    excerpt:
      'Most teams use these terms interchangeably. That\'s a costly mistake when your outreach depends on targeting the right accounts.',
    readTime: '7 min read',
    date: 'June 2025',
  },
  {
    category: 'APAC Markets',
    title: 'B2B Outreach in Southeast Asia: Cultural Nuances That Impact Response Rates',
    excerpt:
      'Directness that works in the US can backfire in Singapore or Japan. Here\'s how to adapt your messaging for the region.',
    readTime: '9 min read',
    date: 'June 2025',
  },
  {
    category: 'Outbound Sales',
    title: 'Building an Outbound Motion from Scratch: A Phase-by-Phase Guide',
    excerpt:
      'From list building to first meeting booked — the milestones, timelines, and common pitfalls every founder should know.',
    readTime: '12 min read',
    date: 'June 2025',
  },
]

const categories = [
  { name: 'Cold Email Strategy', icon: Mail, count: 'Coming' },
  { name: 'LinkedIn Outreach', icon: Users, count: 'Coming' },
  { name: 'AI in B2B Sales', icon: Zap, count: 'Coming' },
  { name: 'Lead Generation', icon: TrendingUp, count: 'Coming' },
  { name: 'APAC Markets', icon: Globe, count: 'Coming' },
  { name: 'Outbound Sales', icon: Phone, count: 'Coming' },
]

export default function BlogPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-[var(--brand-light)] to-white">
        <Container>
          <Breadcrumb
            items={[
              { label: 'Resources', href: '/resources' },
              { label: 'Blog' },
            ]}
            className="mb-8"
          />
          <div className="max-w-3xl">
            <Badge variant="primary" className="mb-4">
              Blog
            </Badge>
            <h1 className="heading-1 text-[var(--brand-dark)] mb-4">
              B2B Lead Generation Insights
            </h1>
            <p className="text-xl text-[var(--brand-gray)] leading-relaxed">
              Strategy, tactics, and case studies from the AppLabx team. No fluff,
              just what works in outbound B2B sales.
            </p>
          </div>
        </Container>
      </section>

      {/* Featured Article */}
      <section className="pb-16 bg-white">
        <Container>
          <Link
            href="/contact"
            title="Contact us to discuss your lead generation needs"
            className="block group"
          >
            <article className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[var(--brand-primary)] to-[var(--brand-primary-dark)] p-8 md:p-12">
              {/* Decorative pattern */}
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <Badge variant="secondary" className="bg-white/20 text-white border-0">
                    {featuredArticle.category}
                  </Badge>
                  <span className="text-white/70 text-sm flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {featuredArticle.readTime}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 group-hover:text-white/90 transition-colors">
                  {featuredArticle.title}
                </h2>
                <p className="text-white/80 text-lg mb-6 max-w-2xl">
                  {featuredArticle.excerpt}
                </p>
                <div className="flex items-center gap-4 text-white/70 text-sm">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {featuredArticle.date}
                  </span>
                  <span>By {featuredArticle.author}</span>
                  <span className="inline-flex items-center gap-2 text-white font-medium group-hover:gap-3 transition-all">
                    Read Article
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </article>
          </Link>
        </Container>
      </section>

      {/* Main Content + Sidebar */}
      <section className="pb-20 bg-[var(--brand-light)]">
        <Container>
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Articles Grid */}
            <div className="lg:col-span-2">
              <div className="grid md:grid-cols-2 gap-6">
                {articles.map((article, idx) => (
                  <article
                    key={idx}
                    className="group p-6 rounded-xl border border-[var(--border)] bg-white hover:border-[var(--brand-primary)]/30 hover:shadow-lg transition-all"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="primary" className="text-xs">
                        {article.category}
                      </Badge>
                    </div>
                    <h3 className="text-lg font-semibold text-[var(--brand-dark)] mb-2 group-hover:text-[var(--brand-primary)] transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-sm text-[var(--brand-gray)] mb-4 line-clamp-2">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-[var(--brand-gray)]">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {article.readTime}
                      </span>
                      <span>{article.date}</span>
                    </div>
                    <span className="mt-4 pt-4 border-t border-[var(--border)] flex items-center gap-2 text-sm text-[var(--brand-gray-light)]">
                      Publishing soon
                    </span>
                  </article>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-8">
              {/* Categories */}
              <div className="bg-white rounded-xl border border-[var(--border)] p-6">
                <h3 className="text-lg font-semibold text-[var(--brand-dark)] mb-4">
                  Categories
                </h3>
                <ul className="space-y-2">
                  {categories.map((cat, idx) => (
                    <li key={idx}>
                      <span className="flex items-center justify-between p-3 rounded-lg">
                        <span className="flex items-center gap-3 text-sm text-[var(--brand-gray)]">
                          <cat.icon className="w-4 h-4 text-[var(--brand-primary)]" />
                          {cat.name}
                        </span>
                        <span className="text-xs text-[var(--brand-gray-light)] bg-[var(--brand-light)] px-2 py-1 rounded-full">
                          {cat.count}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-gradient-to-br from-[var(--brand-primary)] to-[var(--brand-primary-dark)] rounded-xl p-6">
                <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center mb-4">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Get Insights Delivered
                </h3>
                <p className="text-white/80 text-sm mb-4">
                  Weekly B2B lead gen strategies directly in your inbox.
                </p>
                <Link href="/contact">
                  <Button variant="accent" size="md" className="w-full">
                    Subscribe to Newsletter
                  </Button>
                </Link>
              </div>

              {/* Request a Custom Guide */}
              <div className="bg-white rounded-xl border border-[var(--border)] p-6">
                <h3 className="text-lg font-semibold text-[var(--brand-dark)] mb-2">
                  Need Specific Guidance?
                </h3>
                <p className="text-sm text-[var(--brand-gray)] mb-4">
                  Talk to our team about custom research or a tailored approach for
                  your market.
                </p>
                <Link href="/contact">
                  <Button variant="secondary" size="md" className="w-full">
                    Request Custom Insights
                  </Button>
                </Link>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  )
}
