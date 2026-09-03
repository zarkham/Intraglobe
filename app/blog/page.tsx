import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronLeft, ArrowUpRight, PenLine } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ScrollReveal } from '@/components/scroll-reveal'

export const metadata: Metadata = {
  title: 'Journal — Intraglobe Overseas',
  description:
    'Notes on textile craft, garment manufacturing, and the making of Intraglobe Overseas apparel.',
}

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
                Notes from the <span className="text-primary">Atelier.</span>
              </h1>
              <p className="max-w-2xl text-base text-muted-foreground md:text-lg">
                Writing on textile craft, responsible sourcing, and what happens
                between the loom and the final seam.
              </p>
            </div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Coming Soon
            </p>
          </div>
        </div>
      </section>

      {/* Empty state — articles land here once published */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <ScrollReveal>
            <div className="mx-auto flex max-w-xl flex-col items-center rounded-lg border border-dashed border-border px-6 py-16 text-center md:px-12 md:py-20">
              <span className="flex h-14 w-14 items-center justify-center rounded-full border border-border bg-muted/60">
                <PenLine
                  className="h-5 w-5 text-primary"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              </span>

              <h2 className="mt-7 font-serif text-2xl tracking-tight text-foreground md:text-3xl">
                No articles yet.
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
                We are putting the first pieces together. In the meantime, the
                clearest picture of how we work is the production floor itself.
              </p>

              <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
                <Link
                  href="/production"
                  className="group inline-flex w-full items-center justify-center gap-2 bg-foreground px-7 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-background transition-all duration-300 hover:bg-primary sm:w-auto"
                >
                  View Our Process
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex w-full items-center justify-center gap-2 border border-border px-7 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground transition-all duration-300 hover:border-foreground hover:bg-muted/60 sm:w-auto"
                >
                  Get In Touch
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
