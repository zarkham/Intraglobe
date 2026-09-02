'use client'

import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { HeroCarousel } from '@/components/hero-carousel'
import { ScrollReveal } from '@/components/scroll-reveal'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader activeHref="/" />

      {/* Hero Carousel Section with Multi-Image Previews */}
      <HeroCarousel />

      {/* Legacy / Philosophy Section */}
      <section id="legacy" className="border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
            <ScrollReveal direction="left" className="lg:col-span-1">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                Our Philosophy
              </p>
              <h2 className="mt-4 font-serif text-3xl leading-tight tracking-tight text-foreground md:text-4xl">
                Craft that honours the earth, and the hands that shape it.
              </h2>
            </ScrollReveal>

            <div className="grid gap-10 sm:grid-cols-2 lg:col-span-2">
              {[
                {
                  n: '01',
                  title: 'Sustainable Materials',
                  body: 'Ethically sourced fabrics — organic cotton, linen, and plant-based dyes — chosen for their integrity and their footprint.',
                },
                {
                  n: '02',
                  title: 'Expert Craftsmanship',
                  body: 'Every garment is constructed by artisans with generations of tailoring knowledge, refined stitch by stitch.',
                },
                {
                  n: '03',
                  title: 'Timeless Design',
                  body: 'Silhouettes that reject trend cycles — engineered to remain relevant for years, not seasons.',
                },
                {
                  n: '04',
                  title: 'Industrial Precision',
                  body: 'Manufacturing facility in Vibrant Business Park, Vapi, Gujarat, built for scale, precision, and reliable delivery.',
                },
              ].map((item, idx) => (
                <ScrollReveal
                  key={item.n}
                  delay={idx * 120}
                  className="card-formal-hover space-y-3 rounded-lg border-t border-border p-4 pt-6 transition-all"
                >
                  <p className="font-serif text-sm font-semibold text-primary">{item.n}</p>
                  <h3 className="text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.body}
                  </p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action Banner */}
      <section className="border-b border-border bg-primary/5">
        <ScrollReveal>
          <div className="mx-auto flex max-w-7xl flex-col items-start gap-8 px-6 py-16 md:flex-row md:items-center md:justify-between md:px-10 md:py-20">
            <div className="max-w-2xl space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                Get in Touch
              </p>
              <h2 className="font-serif text-3xl leading-tight tracking-tight text-foreground md:text-4xl">
                Ready to bring your next collection to life?
              </h2>
            </div>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 border border-foreground bg-foreground px-8 py-3.5 text-sm font-semibold uppercase tracking-widest text-background transition-all duration-300 hover:bg-background hover:text-foreground hover:shadow-lg"
            >
              Start a Conversation
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </ScrollReveal>
      </section>

      <SiteFooter />
    </main>
  )
}
