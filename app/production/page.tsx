'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, CheckCircle2 } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ScrollReveal } from '@/components/scroll-reveal'

const PRODUCTION_STEPS = [
  {
    step: '01',
    title: 'Design & Concept',
    description:
      'Our design team creates timeless pieces that balance aesthetics with functionality. Each Kurti design undergoes rigorous review, drawing on India’s rich textile heritage and modern ethnic sensibilities.',
    image:
      '/images/kurti-step-01-design.png',
    alt: 'An Indian fashion designer sketching Kurti and ethnic tunic designs on a drafting table with fabric swatches',
  },
  {
    step: '02',
    title: 'Material Selection',
    description:
      'We source premium, ethically-produced fabrics — organic cottons, chanderi silk, and breathable linen — specifically selected for Kurti apparel manufacturing.',
    image:
      '/images/kurti-step-02-materials.png',
    alt: 'Rolls and bolts of vibrant Indian cotton, silk, and linen fabric specifically for Kurti apparel manufacturing',
  },
  {
    step: '03',
    title: 'Pattern Development',
    description:
      'Skilled pattern makers develop precise templates ensuring perfect fit and consistency across all Kurti necklines, sleeves, and flared silhouettes.',
    image:
      '/images/kurti-step-03-pattern.png',
    alt: 'Master pattern maker drafting paper templates for Kurti necklines, flared silhouettes, and tunic sleeves',
  },
  {
    step: '04',
    title: 'Cutting',
    description:
      'Advanced cutting techniques are employed to maximise material efficiency. Each Kurti panel is carefully cut to specification by experienced craftspeople.',
    image:
      '/images/step-04-cutting.jpg',
    alt: 'Close-up of a tailor’s hands cutting a Kurti pattern piece from fabric on a wooden worktable',
  },
  {
    step: '05',
    title: 'Sewing & Assembly',
    description:
      'Expert tailors stitch each Kurti using high-density seam techniques. Quality checks occur at every stage of assembly, from neck placket to side slits.',
    image:
      '/images/step-05-sewing.jpg',
    alt: 'A seamstress stitching a Kurti on a sewing machine beside a sunlit window',
  },
  {
    step: '06',
    title: 'Finishing',
    description:
      'Hems, seams, and necklines are perfected by master artisans — trimming loose threads, pressing seams flat, and giving every Kurti its final, polished shape.',
    image:
      '/images/step-06-finishing.jpg',
    alt: 'Artisan pressing and finishing the seams of a Kurti garment',
  },
  {
    step: '07',
    title: 'Quality Control',
    description:
      'Every completed Kurti undergoes thorough inspection. We check for seam strength, embroidery perfection, fit, and durability before release.',
    image:
      '/images/step-07-quality.jpg',
    alt: 'Quality inspector reviewing finished Kurti garments on wooden hangers and checking stitching precision',
  },
  {
    step: '08',
    title: 'Packaging',
    description:
      'Garments are carefully folded and packaged in eco-friendly, recyclable materials — a final gesture of respect for the hands that shaped them.',
    image:
      '/images/step-08-packaging.jpg',
    alt: 'A folded Kurti neatly packaged in a kraft box with tissue paper, ready for shipping',
  },
]

export default function ProductionPage() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader activeHref="/production" />

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
                Our Craft
              </p>
              <h1 className="font-serif text-4xl leading-[1.05] tracking-tight text-foreground md:text-5xl lg:text-6xl">
                The Art of <span className="text-primary">Making.</span>
              </h1>
              <p className="max-w-2xl text-base text-muted-foreground md:text-lg">
                Discover the meticulous process behind every Intraglobe
                Overseas garment. From initial concept to final packaging, we
                maintain the highest standards of quality and sustainability.
              </p>
            </div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              8 Steps · One Standard
            </p>
          </div>
        </div>
      </section>

      {/* Production Flow */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
          <div className="space-y-24 md:space-y-32">
            {PRODUCTION_STEPS.map((item, idx) => {
              const imageLeft = idx % 2 === 0
              return (
                <ScrollReveal key={item.step} delay={100}>
                  <article
                    className="grid items-center gap-10 md:grid-cols-2 md:gap-16 lg:gap-20"
                  >
                    {/* Image */}
                    <div
                      className={
                        'group relative aspect-[4/3] w-full overflow-hidden rounded-md bg-muted shadow-sm transition-all duration-500 hover:shadow-xl ' +
                        (imageLeft ? 'md:order-1' : 'md:order-2')
                      }
                    >
                      <Image
                        src={item.image}
                        alt={item.alt}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 45vw"
                      />
                      <div className="absolute left-4 top-4 border border-white/30 bg-black/40 px-3.5 py-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-white backdrop-blur-md">
                        Step {item.step}
                      </div>
                    </div>

                    {/* Text */}
                    <div
                      className={
                        'space-y-5 ' + (imageLeft ? 'md:order-2' : 'md:order-1')
                      }
                    >
                      <p className="font-serif text-2xl font-medium text-primary md:text-3xl">
                        {item.step}
                      </p>
                      <h3 className="font-serif text-3xl leading-tight tracking-tight text-foreground md:text-4xl">
                        {item.title}
                      </h3>
                      <div className="h-px w-12 bg-primary/50 transition-all duration-300 group-hover:w-20" />
                      <p className="max-w-md text-base leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </article>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border bg-primary/5">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
          <ScrollReveal>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              By The Numbers
            </p>
            <h2 className="mt-3 font-serif text-3xl leading-tight tracking-tight text-foreground md:text-4xl">
              A quiet obsession with quality.
            </h2>
          </ScrollReveal>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            {[
              { number: '2,500+', label: 'Garments Produced Monthly' },
              { number: '100%', label: 'Ethically Sourced Materials' },
              { number: '40+', label: 'Years of Craftsmanship' },
              { number: '50+', label: 'Expert Artisans' },
            ].map((stat, i) => (
              <ScrollReveal
                key={stat.label}
                delay={i * 100}
                className="space-y-2 rounded-lg border-t border-border p-3 pt-6 transition-all hover:bg-background/40"
              >
                <p className="font-serif text-4xl text-foreground md:text-5xl">
                  {stat.number}
                </p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">
                  {stat.label}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>


      {/* Commitment */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
          <div className="grid gap-12 md:grid-cols-2 md:items-start">
            <div className="max-w-xl space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                Our Commitment
              </p>
              <h2 className="font-serif text-3xl leading-tight tracking-tight text-foreground md:text-4xl">
                Sustainability, woven into every seam.
              </h2>
              <p className="text-base text-muted-foreground md:text-lg">
                Every decision we make considers the environmental and social
                impact. From sourcing to production to packaging, sustainability
                is woven into every step of our process.
              </p>
            </div>

            <ul className="space-y-4">
              {[
                'Zero-waste cutting patterns',
                'Carbon-neutral production facility',
                'Fair wages and safe working conditions',
                'Recyclable and biodegradable packaging',
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-4 border-t border-border pt-4 text-foreground"
                >
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary"
                    strokeWidth={1.5}
                  />
                  <span className="text-sm md:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-b border-border bg-primary/5">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-8 px-6 py-16 md:flex-row md:items-center md:justify-between md:px-10 md:py-20">
          <div className="max-w-2xl space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              Ready to Collaborate
            </p>
            <h2 className="font-serif text-3xl leading-tight tracking-tight text-foreground md:text-4xl">
              Bring your collection to life with us.
            </h2>
          </div>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 border border-foreground bg-foreground px-8 py-3 text-sm font-semibold uppercase tracking-widest text-background transition-all hover:bg-background hover:text-foreground"
          >
            Get In Touch
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
