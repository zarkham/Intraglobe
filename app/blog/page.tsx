'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, ChevronLeft, Clock } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ScrollReveal } from '@/components/scroll-reveal'

type Post = {
  slug: string
  title: string
  excerpt: string
  category: string
  author: string
  date: string
  readTime: string
  image: string
  alt: string
}

const FEATURED: Post = {
  slug: 'the-language-of-chikankari',
  title: 'The Language of Chikankari: A Stitch That Speaks in Whispers',
  excerpt:
    'From the moonlit havelis of Lucknow to high-fashion runways across the globe, we trace the six-century journey of a stitch so delicate it has been called the poetry of the needle.',
  category: 'Craft',
  author: 'Meera Iyer',
  date: 'March 12, 2026',
  readTime: '8 min read',
  image:
    '/images/chikankari-featured.jpg',
  alt: 'Dignified Chikankari needle embroidery crafted by a master artisan on fine fabric',
}

const POSTS: Post[] = [
  {
    slug: 'linen-in-the-monsoon',
    title: 'Linen in the Monsoon: A Case for Rain-Ready Fabrics',
    excerpt:
      'How our newest weave answers South Asia\u2019s wettest question: what should we actually wear when the sky opens up?',
    category: 'Materials',
    author: 'Rohan Kapoor',
    date: 'March 04, 2026',
    readTime: '5 min read',
    image:
      '/images/step-02-materials.jpg',
    alt: 'Colourful stacks of linen sarees and fabrics in an Indian showroom',
  },
  {
    slug: 'the-quiet-craft-of-finishing',
    title: 'The Quiet Craft of Finishing',
    excerpt:
      'Behind every garment that feels effortless lies an hour of stitching you\u2019ll never see. A visual essay from our Vapi manufacturing facility.',
    category: 'Behind the Scenes',
    author: 'Priya Nair',
    date: 'February 22, 2026',
    readTime: '6 min read',
    image:
      '/images/blog-stitching.jpg',
    alt: 'A hand stitching intricate detail on a piece of fabric with needle and thread',
  },
  {
    slug: 'precision-garment-stitching',
    title: 'The Art of Precision Garment Stitching',
    excerpt:
      'From pattern grading to final assembly: how high-density seams and exact specifications define industrial garment manufacturing.',
    category: 'Craft',
    author: 'Production Team',
    date: 'February 09, 2026',
    readTime: '7 min read',
    image:
      '/images/step-04-cutting.jpg',
    alt: 'A tailor cutting luxury cloth with a pair of scissors',
  },
  {
    slug: 'carbon-and-cotton',
    title: 'Carbon and Cotton: Auditing Our 2025 Footprint',
    excerpt:
      'Our third annual impact report. What worked, what didn\u2019t, and the twelve commitments we\u2019re making for 2026.',
    category: 'Sustainability',
    author: 'Anaya Verma',
    date: 'January 28, 2026',
    readTime: '10 min read',
    image:
      '/images/step-07-quality.jpg',
    alt: 'A quality-control worker inspecting a finished garment at a textile facility',
  },
  {
    slug: 'the-return-of-khadi',
    title: 'The Return of Khadi',
    excerpt:
      'Once a symbol of independence, now a signature of contemporary luxury. Why the world\u2019s oldest handspun fabric is having its second act.',
    category: 'Heritage',
    author: 'Meera Iyer',
    date: 'January 14, 2026',
    readTime: '9 min read',
    image:
      '/images/step-03-pattern.jpg',
    alt: 'A worker preparing textiles at an Indian garment workshop',
  },
  {
    slug: 'a-conversation-with-vidya',
    title: 'A Conversation with Vidya Devi, Master Embroiderer',
    excerpt:
      'Fifty-two years at the loom. Six generations before her. We spoke to the woman whose hands finish our finest garments.',
    category: 'Interviews',
    author: 'Priya Nair',
    date: 'December 30, 2025',
    readTime: '12 min read',
    image:
      '/images/step-05-sewing.jpg',
    alt: 'Workers assembling and finishing garments in an Indian textile facility',
  },
]

const CATEGORIES = [
  'All',
  'Craft',
  'Materials',
  'Sustainability',
  'Heritage',
  'Interviews',
  'Behind the Scenes',
]

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader activeHref="/blog" />

      {/* Hero */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
          >
            <ChevronLeft className="h-4 w-4" />
            Back to Home
          </Link>

          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <div className="max-w-2xl space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                Journal
              </p>
              <h1 className="font-serif text-4xl leading-[1.05] tracking-tight text-foreground md:text-5xl lg:text-6xl">
                Stories from the{' '}
                <span className="text-primary">loom.</span>
              </h1>
              <p className="max-w-2xl text-base text-muted-foreground md:text-lg">
                Craft essays, artisan portraits, sustainability notes, and
                dispatches from the ateliers where our garments are made.
              </p>
            </div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              {POSTS.length + 1} Essays · Updated weekly
            </p>
          </div>
        </div>
      </section>

      {/* Category filter */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-6 py-6 md:px-10">
          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map((cat, idx) => (
              <button
                key={cat}
                type="button"
                className={
                  'border px-4 py-2 text-xs font-semibold uppercase tracking-widest transition-all ' +
                  (idx === 0
                    ? 'border-foreground bg-foreground text-background'
                    : 'border-border text-foreground hover:border-foreground')
                }
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured post */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
          <div className="mb-8 flex items-center justify-between border-b border-border pb-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-foreground">
              Featured Essay
            </p>
            <p className="hidden text-xs uppercase tracking-[0.3em] text-muted-foreground md:block">
              N°01
            </p>
          </div>

          <ScrollReveal>
            <Link
              href={`/blog/${FEATURED.slug}`}
              className="group grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:gap-16"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-muted shadow-sm transition-all duration-500 group-hover:shadow-xl">
                <Image
                  src={FEATURED.image}
                  alt={FEATURED.alt}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  priority
                />
              </div>

              <div className="space-y-5">
                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-primary">
                  <span className="border border-primary/40 px-3 py-1 font-semibold">
                    {FEATURED.category}
                  </span>
                  <span className="text-muted-foreground">
                    {FEATURED.date}
                  </span>
                </div>

                <h2 className="font-serif text-3xl leading-[1.1] tracking-tight text-foreground transition-colors duration-300 md:text-4xl lg:text-5xl group-hover:text-primary">
                  {FEATURED.title}
                </h2>

                <p className="max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                  {FEATURED.excerpt}
                </p>

                <div className="flex items-center gap-4 border-t border-border pt-6 text-xs">
                  <span className="uppercase tracking-widest text-foreground">
                    By {FEATURED.author}
                  </span>
                  <span className="text-muted-foreground">·</span>
                  <span className="inline-flex items-center gap-1.5 text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    {FEATURED.readTime}
                  </span>
                  <span className="ml-auto inline-flex items-center gap-1 font-semibold text-foreground transition-colors duration-300 group-hover:text-primary">
                    Read
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </div>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Post grid */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
          <div className="mb-10 flex items-center justify-between border-b border-border pb-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-foreground">
              All Essays
            </p>
            <p className="hidden text-xs uppercase tracking-[0.3em] text-muted-foreground md:block">
              Newest first
            </p>
          </div>

          <div className="grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {POSTS.map((post, idx) => (
              <PostCard key={post.slug} post={post} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="border-b border-border bg-primary/5">
        <ScrollReveal>
          <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-end lg:gap-16">
              <div className="max-w-xl space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                  Subscribe
                </p>
                <h2 className="font-serif text-3xl leading-tight tracking-tight text-foreground md:text-4xl">
                  One quiet letter, once a month.
                </h2>
                <p className="text-base text-muted-foreground">
                  New essays, atelier updates and quiet reflections on craft
                  and sustainability — delivered to your inbox. No noise, no
                  selling.
                </p>
              </div>

              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex flex-col gap-3 sm:flex-row"
              >
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  aria-label="Email address"
                  className="flex-1 border border-border bg-background px-4 py-3 text-sm text-foreground transition-colors placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/40"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 border border-foreground bg-foreground px-6 py-3 text-xs font-semibold uppercase tracking-widest text-background transition-all duration-300 hover:bg-background hover:text-foreground"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <SiteFooter />
    </main>
  )
}

function PostCard({ post, index = 0 }: { post: Post; index?: number }) {
  return (
    <ScrollReveal delay={index * 80}>
      <Link
        href={`/blog/${post.slug}`}
        className="group flex flex-col gap-5 rounded-lg border border-transparent p-2.5 transition-all duration-300 hover:border-border hover:bg-card hover:shadow-md"
      >
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded bg-muted">
          <Image
            src={post.image}
            alt={post.alt}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute left-3 top-3 border border-white/30 bg-black/40 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-white backdrop-blur-md">
            {post.category}
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
            {post.date}
          </p>
          <h3 className="font-serif text-xl leading-tight tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary md:text-2xl">
            {post.title}
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {post.excerpt}
          </p>
          <div className="flex items-center gap-3 pt-2 text-xs text-muted-foreground">
            <span className="uppercase tracking-widest text-foreground font-medium">
              {post.author}
            </span>
            <span>·</span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3 w-3" />
              {post.readTime}
            </span>
          </div>
        </div>
      </Link>
    </ScrollReveal>
  )
}

