'use client'

import React, { useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowUpRight,
  ArrowLeft,
  ArrowRight,
  Pause,
  Play,
  Award,
  BadgeCheck,
  Leaf,
  Sparkles,
} from 'lucide-react'

export interface HeroSlide {
  id: string
  image: string
  imageAlt: string
  tagline: string
  edition: string
  headline: string
  highlightText: string
  description: string
  primaryCtaText: string
  primaryCtaHref: string
  secondaryCtaText: string
  secondaryCtaHref: string
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'slide-1',
    image: '/images/hero-weaving.jpg',
    imageAlt: 'Studio rail of finished garments beside a dressed form',
    tagline: 'Artisanal Weaves · Master Atelier',
    edition: 'N°01',
    headline: 'Precision in every thread.',
    highlightText: 'Precision',
    description:
      'Combining Gujarat’s rich textile heritage with advanced garment manufacturing equipment for high-precision volume job-work.',
    primaryCtaText: 'View Process',
    primaryCtaHref: '/production',
    secondaryCtaText: 'Our Philosophy',
    secondaryCtaHref: '#legacy',
  },
  {
    id: 'slide-2',
    image: '/images/hero-atelier.jpg',
    imageAlt: 'Tailored outerwear photographed in directional daylight',
    tagline: 'Modern Tailoring · Capsule',
    edition: 'N°02',
    headline: 'Understated luxury silhouettes.',
    highlightText: 'luxury',
    description:
      'Engineered for effortless form and function, our signature silhouettes reject seasonal trend cycles in favor of timeless elegance.',
    primaryCtaText: 'Bespoke Inquiries',
    primaryCtaHref: '/contact',
    secondaryCtaText: 'Production Steps',
    secondaryCtaHref: '/production',
  },
  {
    id: 'slide-3',
    image: '/images/hero-mill.jpg',
    imageAlt: 'Raw textile rolls held in the mill repository',
    tagline: 'Craft & Warehousing · Mill Direct',
    edition: 'N°03',
    headline: 'From loom to final seam.',
    highlightText: 'final seam',
    description:
      'Operating state-of-the-art weaving facilities and raw textile repositories supplied directly by sustainable organic mills.',
    primaryCtaText: 'Explore Textiles',
    primaryCtaHref: '/production',
    secondaryCtaText: 'Our Legacy',
    secondaryCtaHref: '#legacy',
  },
  {
    id: 'slide-4',
    image: '/images/hero-heritage.jpg',
    imageAlt: 'Heritage craft moodboard of fabrics and trims',
    tagline: 'Heritage Craft · Atelier Moodboard',
    edition: 'N°04',
    headline: 'Woven with the world.',
    highlightText: 'Woven',
    description:
      'A premier Indian garment manufacturer crafting quality apparel with precision stitching, verified quality control, and industrial reliability.',
    primaryCtaText: 'See Our Work',
    primaryCtaHref: '/production',
    secondaryCtaText: 'Get In Touch',
    secondaryCtaHref: '/contact',
  },
]

const FOUNDATION = [
  { icon: Award, n: '01', title: 'Global Craftsmanship', caption: 'Rooted in tradition' },
  { icon: BadgeCheck, n: '02', title: 'Strict Quality Control', caption: 'Exceeding expectations' },
  { icon: Leaf, n: '03', title: 'First-Rate Materials', caption: 'Bringing you nature' },
  { icon: Sparkles, n: '04', title: 'Advanced Technology', caption: 'Tried and tested' },
]

const SLIDE_DURATION = 6500
const TOTAL = HERO_SLIDES.length

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReduced(query.matches)
    update()
    query.addEventListener('change', update)
    return () => query.removeEventListener('change', update)
  }, [])

  return reduced
}

export function HeroCarousel() {
  const [index, setIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isHovering, setIsHovering] = useState(false)
  const [isPageHidden, setIsPageHidden] = useState(false)
  const reducedMotion = usePrefersReducedMotion()
  const touchStartX = useRef<number | null>(null)

  const autoplayActive = isPlaying && !isHovering && !isPageHidden && !reducedMotion

  const goTo = useCallback((next: number) => {
    setIndex(((next % TOTAL) + TOTAL) % TOTAL)
  }, [])

  const nextSlide = useCallback(() => goTo(index + 1), [goTo, index])
  const prevSlide = useCallback(() => goTo(index - 1), [goTo, index])

  // Re-armed on every slide change, so manual navigation restarts the timer.
  useEffect(() => {
    if (!autoplayActive) return
    const timer = setTimeout(nextSlide, SLIDE_DURATION)
    return () => clearTimeout(timer)
  }, [autoplayActive, nextSlide, index])

  useEffect(() => {
    const onVisibilityChange = () => setIsPageHidden(document.hidden)
    document.addEventListener('visibilitychange', onVisibilityChange)
    return () => document.removeEventListener('visibilitychange', onVisibilityChange)
  }, [])

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'ArrowRight') {
      event.preventDefault()
      nextSlide()
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault()
      prevSlide()
    }
  }

  const onTouchStart = (event: React.TouchEvent) => {
    touchStartX.current = event.touches[0].clientX
  }

  const onTouchEnd = (event: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const delta = event.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(delta) > 50) {
      if (delta < 0) nextSlide()
      else prevSlide()
    }
    touchStartX.current = null
  }

  const slide = HERO_SLIDES[index]
  const hasHighlight = slide.headline.includes(slide.highlightText)
  const [headBefore, headAfter] = hasHighlight
    ? slide.headline.split(slide.highlightText)
    : [slide.headline, '']

  return (
    // Pulled up under the sticky header so the nav pill floats on the hero
    // instead of leaving a strip of page background above it.
    <section
      className="hero-grain relative isolate -mt-[54px] overflow-hidden border-b border-white/10 bg-[#0A0F0D] md:-mt-[62px]"
      aria-roledescription="carousel"
      aria-label="Intraglobe Overseas featured work"
    >
      {/* Ambient wash so the flat panel has depth behind the type */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-70"
        style={{
          background:
            'radial-gradient(70% 55% at 8% 12%, rgba(224,201,166,0.10), transparent 62%), radial-gradient(60% 60% at 0% 100%, rgba(46,90,66,0.28), transparent 65%)',
        }}
      />

      <div className="mx-auto max-w-7xl px-6 pt-28 md:px-10 md:pt-32 lg:pt-36">
        <div className="grid items-stretch gap-y-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.92fr)] lg:gap-x-16">
          {/* ── Editorial type panel ─────────────────────────── */}
          <div className="flex flex-col justify-center lg:pb-24">
            <div className="flex items-start gap-3">
              <span className="relative mt-[0.4rem] flex h-1.5 w-1.5 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#E0C9A6] opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#E0C9A6]" />
              </span>
              <span
                key={`tagline-${index}`}
                className="animate-fade-in text-[11px] font-medium uppercase tracking-[0.3em] text-white/70"
              >
                {slide.tagline}
              </span>
            </div>

            <p className="mt-8 text-[11px] font-semibold uppercase tracking-[0.42em] text-[#D4C3A3]">
              Intraglobe Overseas
            </p>
            <span
              aria-hidden="true"
              className="animate-hero-rule mt-4 block h-px w-24 bg-gradient-to-r from-[#E0C9A6] to-transparent"
            />

            <div key={`copy-${index}`} className="mt-7">
              <h1 className="animate-hero-rise font-serif text-[2.35rem] leading-[1.06] tracking-[-0.02em] text-white sm:text-5xl md:text-6xl lg:text-[4.25rem] xl:text-[4.6rem]">
                {headBefore}
                {hasHighlight && (
                  <span className="italic text-[#E8D5B7]">{slide.highlightText}</span>
                )}
                {headAfter}
              </h1>

              <p
                className="animate-hero-rise mt-6 max-w-lg text-base leading-relaxed text-white/70 md:text-[1.0625rem]"
                style={{ animationDelay: '120ms' }}
              >
                {slide.description}
              </p>
            </div>

            <div
              key={`cta-${index}`}
              className="animate-hero-rise mt-9 flex flex-wrap items-center gap-3"
              style={{ animationDelay: '220ms' }}
            >
              <Link
                href={slide.primaryCtaHref}
                className="group inline-flex w-full items-center justify-center gap-2.5 bg-white px-8 py-3.5 sm:w-auto text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0A0F0D] transition-all duration-300 hover:bg-[#E8D5B7] hover:shadow-[0_12px_40px_-12px_rgba(232,213,183,0.7)]"
              >
                {slide.primaryCtaText}
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
              <Link
                href={slide.secondaryCtaHref}
                className="inline-flex w-full items-center justify-center gap-2 border border-white/25 px-8 py-3.5 sm:w-auto text-[11px] font-semibold uppercase tracking-[0.2em] text-white/85 transition-all duration-300 hover:border-white/60 hover:bg-white/[0.06] hover:text-white"
              >
                {slide.secondaryCtaText}
              </Link>
            </div>

            {/* ── Transport controls ─────────────────────────── */}
            <div className="mt-12 flex items-center gap-6">
              <div className="flex items-center">
                <button
                  onClick={prevSlide}
                  aria-label="Previous slide"
                  className="flex h-11 w-11 items-center justify-center border border-white/20 text-white/70 transition-all duration-300 hover:border-white/60 hover:bg-white/[0.06] hover:text-white"
                >
                  <ArrowLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={nextSlide}
                  aria-label="Next slide"
                  className="-ml-px flex h-11 w-11 items-center justify-center border border-white/20 text-white/70 transition-all duration-300 hover:border-white/60 hover:bg-white/[0.06] hover:text-white"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setIsPlaying((playing) => !playing)}
                  aria-label={isPlaying ? 'Pause carousel' : 'Play carousel'}
                  className="-ml-px flex h-11 w-11 items-center justify-center border border-white/20 text-white/70 transition-all duration-300 hover:border-white/60 hover:bg-white/[0.06] hover:text-white"
                >
                  {isPlaying ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
                </button>
              </div>

              {/* Autoplay timer doubling as a position readout */}
              <div className="flex flex-1 items-center gap-4">
                <span className="font-serif text-sm tabular-nums text-white">0{index + 1}</span>
                <div className="relative h-px max-w-[180px] flex-1 bg-white/20">
                  <div
                    key={`progress-${index}-${autoplayActive}`}
                    className={`absolute inset-y-0 left-0 bg-[#E0C9A6] ${
                      autoplayActive ? 'animate-progress-timer' : 'w-0'
                    }`}
                    style={{ '--progress-duration': `${SLIDE_DURATION}ms` } as React.CSSProperties}
                  />
                </div>
                <span className="text-xs tabular-nums text-white/40">0{TOTAL}</span>
              </div>
            </div>
          </div>

          {/* ── Photograph ───────────────────────────────────── */}
          <div
            className="-mx-6 self-stretch pb-14 md:-mx-10 lg:mx-0 lg:mr-[calc(50%-50vw)] lg:pb-0"
            role="group"
            tabIndex={0}
            aria-label={`Slide ${index + 1} of ${TOTAL}. Use arrow keys to navigate.`}
            onKeyDown={onKeyDown}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <div className="relative h-full min-h-[22rem] w-full overflow-hidden bg-[#0A0F0D] sm:min-h-[28rem] lg:min-h-[38rem]">
              {HERO_SLIDES.map((item, idx) => {
                const isActive = idx === index
                return (
                  <div
                    key={item.id}
                    className={`absolute inset-0 transition-opacity duration-[1200ms] ease-in-out ${
                      isActive ? 'opacity-100' : 'opacity-0'
                    }`}
                    aria-hidden={!isActive}
                  >
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      priority={idx === 0}
                      sizes="(min-width: 1024px) 48vw, 100vw"
                      className={`object-cover object-center transition-transform ease-out ${
                        reducedMotion
                          ? ''
                          : isActive
                            ? 'scale-[1.12] duration-[9000ms]'
                            : 'scale-[1.02] duration-[1200ms]'
                      }`}
                    />
                  </div>
                )
              })}

              {/* Narrow feathers only — a full-width scrim would grey out the photograph */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#0A0F0D] to-transparent lg:w-28"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0A0F0D]/80 via-[#0A0F0D]/20 to-transparent"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#0A0F0D]/55 to-transparent"
              />

              {/* Edition marker */}
              <div className="absolute left-6 top-6 flex items-center gap-2.5 border border-white/20 bg-black/25 px-3.5 py-1.5 backdrop-blur-md lg:left-8 lg:top-8">
                <span className="h-1 w-1 rounded-full bg-[#E0C9A6]" />
                <span
                  key={`edition-${index}`}
                  className="animate-fade-in font-serif text-[11px] tracking-[0.2em] text-white/90"
                >
                  Editorial {slide.edition}
                </span>
              </div>

              {/* Thumbnail rail */}
              <div className="absolute inset-x-0 bottom-0 flex items-end gap-2.5 p-6 lg:p-8">
                {HERO_SLIDES.map((item, idx) => {
                  const isActive = idx === index
                  return (
                    <button
                      key={`thumb-${item.id}`}
                      onClick={() => goTo(idx)}
                      aria-label={`Go to slide ${idx + 1}: ${item.tagline}`}
                      aria-current={isActive ? 'true' : undefined}
                      className={`relative overflow-hidden transition-all duration-500 ease-out ${
                        isActive
                          ? 'h-16 w-12 opacity-100 sm:h-20 sm:w-16'
                          : 'h-12 w-9 opacity-55 hover:opacity-90 sm:h-14 sm:w-11'
                      }`}
                    >
                      <Image
                        src={item.image}
                        alt=""
                        fill
                        sizes="64px"
                        className="object-cover object-center"
                      />
                      <span
                        aria-hidden="true"
                        className={`absolute inset-0 border transition-colors duration-500 ${
                          isActive ? 'border-[#E0C9A6]' : 'border-white/30'
                        }`}
                      />
                    </button>
                  )
                })}
              </div>

              {/* Hairline frame keeps the photo feeling mounted, not pasted */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-4 hidden border border-white/10 lg:inset-6 lg:block"
              />
            </div>
          </div>
        </div>

        {/* ── Foundation pillars ─────────────────────────────── */}
        <div className="border-t border-white/10 py-10 md:py-12">
          <div className="mb-8 flex items-baseline justify-between">
            <h2 className="text-[10px] font-semibold uppercase tracking-[0.42em] text-white/60">
              Our Foundation
            </h2>
            <p className="hidden text-[10px] uppercase tracking-[0.3em] text-white/35 md:block">
              Four Pillars
            </p>
          </div>

          <div className="grid grid-cols-2 gap-y-9 md:grid-cols-4 md:gap-y-0">
            {FOUNDATION.map(({ icon: Icon, n, title, caption }, idx) => (
              <div
                key={title}
                className={`group md:px-8 ${
                  idx === 0 ? 'md:pl-0' : 'md:border-l md:border-white/10'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon
                    className="h-[1.15rem] w-[1.15rem] text-[#E0C9A6] transition-transform duration-500 group-hover:-translate-y-0.5"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                  <span className="font-serif text-[11px] tabular-nums text-white/30">{n}</span>
                </div>
                <p className="mt-3 text-[13px] font-semibold uppercase tracking-[0.12em] text-white">
                  {title}
                </p>
                <p className="mt-1.5 text-[13px] text-white/45 transition-colors duration-300 group-hover:text-white/70">
                  {caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
