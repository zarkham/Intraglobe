'use client'

import React, { useState, useEffect, useCallback, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
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
    image: '/her.png',
    tagline: 'Artisanal Weaves · Master Atelier',
    edition: 'Editorial N°01',
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
    image: '/new_hero_embroidery.jpg',
    tagline: 'Modern Tailoring · Capsule',
    edition: 'Editorial N°02',
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
    image: '/new_hero1.jpg',
    tagline: 'Craft & Warehousing · Mill Direct',
    edition: 'Editorial N°03',
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
    image: '/new_hero_atelier.jpg',
    tagline: 'Heritage Craft · Atelier Moodboard',
    edition: 'Editorial N°04',
    headline: 'Woven with the world.',
    highlightText: 'Woven',
    description:
      'A premier Gujarat garment manufacturer crafting quality apparel with precision stitching, verified quality control, and industrial reliability.',
    primaryCtaText: 'Read Journal',
    primaryCtaHref: '/blog',
    secondaryCtaText: 'Get In Touch',
    secondaryCtaHref: '/contact',
  },
]

const FOUNDATION = [
  {
    icon: Award,
    title: 'GLOBAL CRAFTSMANSHIP',
    caption: 'Rooted in Tradition',
  },
  {
    icon: BadgeCheck,
    title: 'STRICT QUALITY CONTROL',
    caption: 'Exceeding Expectations',
  },
  {
    icon: Leaf,
    title: 'FIRST-RATE MATERIALS',
    caption: 'Bringing You Nature',
  },
  {
    icon: Sparkles,
    title: 'ADVANCED TECHNOLOGY',
    caption: 'Tried and Tested',
  },
]

export function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)

  const slideDuration = 6000 // 6 seconds per slide

  const goToSlide = useCallback(
    (index: number) => {
      if (index === currentIndex || isTransitioning) return
      setIsTransitioning(true)
      setCurrentIndex(index)
      setTimeout(() => setIsTransitioning(false), 700)
    },
    [currentIndex, isTransitioning]
  )

  const nextSlide = useCallback(() => {
    const nextIdx = (currentIndex + 1) % HERO_SLIDES.length
    goToSlide(nextIdx)
  }, [currentIndex, goToSlide])

  const prevSlide = useCallback(() => {
    const prevIdx = (currentIndex - 1 + HERO_SLIDES.length) % HERO_SLIDES.length
    goToSlide(prevIdx)
  }, [currentIndex, goToSlide])

  useEffect(() => {
    if (isPlaying) {
      autoPlayRef.current = setInterval(() => {
        nextSlide()
      }, slideDuration)
    } else if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current)
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [isPlaying, nextSlide])

  const currentSlide = HERO_SLIDES[currentIndex]

  return (
    <section className="relative isolate overflow-hidden border-b border-border bg-black">
      {/* Background Images with Crossfade & Subtle Scale Zoom */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {HERO_SLIDES.map((slide, idx) => {
          const isActive = idx === currentIndex
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              <Image
                src={slide.image}
                alt={slide.headline}
                fill
                priority={idx === 0}
                className={`object-cover object-center transition-transform duration-[7000ms] ease-out ${
                  isActive ? 'scale-105' : 'scale-100'
                }`}
                sizes="100vw"
              />
            </div>
          )
        })}
        {/* Darkening Editorial Overlays for legibility */}
        <div className="absolute inset-0 z-20 bg-black/45" />
        <div className="absolute inset-0 z-20 bg-gradient-to-b from-black/40 via-black/20 to-black/80" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-30 mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-between gap-12 px-6 pb-12 pt-20 text-white md:px-10 md:pb-16 md:pt-28 lg:min-h-[92vh] lg:pt-32">
        {/* Eyebrow header */}
        <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-white/80">
          <div className="flex items-center gap-3">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#E0C9A6] animate-pulse" />
            <span key={`tag-${currentIndex}`} className="animate-fade-in font-medium">
              {currentSlide.tagline}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span key={`ed-${currentIndex}`} className="hidden animate-fade-in md:inline text-white/70">
              {currentSlide.edition}
            </span>
            <span className="font-mono text-[11px] tracking-widest text-white/70">
              0{currentIndex + 1} / 0{HERO_SLIDES.length}
            </span>
          </div>
        </div>

        {/* Middle — Animated Headline Block & Subtle Carousel Controls */}
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          {/* Headline Text Block */}
          <div className="space-y-6 lg:col-span-9">
            <div key={`text-${currentIndex}`} className="min-h-[220px] sm:min-h-[240px] md:min-h-[250px] lg:min-h-[270px] space-y-5 animate-fade-in-up flex flex-col justify-end">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#D4C3A3]">
                Intraglobe Overseas
              </p>

              <h1 className="font-serif text-4xl leading-[1.04] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[4.75rem]">
                {currentSlide.headline.includes(currentSlide.highlightText) ? (
                  <>
                    {currentSlide.headline.split(currentSlide.highlightText)[0]}
                    <span className="italic text-[#E8D5B7]">
                      {currentSlide.highlightText}
                    </span>
                    {currentSlide.headline.split(currentSlide.highlightText)[1]}
                  </>
                ) : (
                  currentSlide.headline
                )}
              </h1>

              <p className="max-w-xl text-base leading-relaxed text-white/85 md:text-lg">
                {currentSlide.description}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href={currentSlide.primaryCtaText === 'View Process' || currentSlide.primaryCtaText === 'Explore Textiles' ? '/production' : currentSlide.primaryCtaHref}
                className="group inline-flex items-center gap-2 border border-white bg-white px-7 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-black transition-all hover:bg-transparent hover:text-white hover:shadow-lg"
              >
                {currentSlide.primaryCtaText}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
              <Link
                href={currentSlide.secondaryCtaHref}
                className="inline-flex items-center gap-2 border border-white/40 px-7 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-all hover:border-white hover:bg-white/10"
              >
                {currentSlide.secondaryCtaText}
              </Link>
            </div>
          </div>

          {/* Minimalist Side Carousel Slide Navigation (No floating tab card) */}
          <div className="lg:col-span-3 lg:justify-self-end flex flex-col items-start lg:items-end gap-4">
            {/* Slide indicators / dots */}
            <div className="flex items-center gap-2">
              {HERO_SLIDES.map((slide, idx) => (
                <button
                  key={`dot-${slide.id}`}
                  onClick={() => goToSlide(idx)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    idx === currentIndex
                      ? 'w-8 bg-[#E0C9A6]'
                      : 'w-2 bg-white/40 hover:bg-white/70'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Minimalist Prev/Next Arrow Buttons & Pause/Play */}
            <div className="flex items-center gap-2 rounded-full border border-white/20 bg-black/30 p-1.5 backdrop-blur-md">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="rounded-full p-2 text-white/70 transition-colors hover:bg-white/15 hover:text-white"
                title={isPlaying ? 'Pause' : 'Play'}
                aria-label={isPlaying ? 'Pause Carousel' : 'Play Carousel'}
              >
                {isPlaying ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
              </button>
              <div className="h-3 w-px bg-white/20" />
              <button
                onClick={prevSlide}
                className="rounded-full p-2 text-white/70 transition-colors hover:bg-white/15 hover:text-white"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={nextSlide}
                className="rounded-full p-2 text-white/70 transition-colors hover:bg-white/15 hover:text-white"
                aria-label="Next Slide"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom — Four Foundation Pillars strip */}
        <div className="border-t border-white/20 pt-7">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/90 md:text-xs">
              Our Foundation
            </h2>
            <p className="hidden text-[10px] uppercase tracking-[0.3em] text-white/60 md:block">
              Four Pillars
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-6 md:grid-cols-4 md:gap-x-8">
            {FOUNDATION.map(({ icon: Icon, title, caption }) => (
              <div
                key={title}
                className="group space-y-2 rounded-lg border border-transparent p-2.5 transition-all duration-300 hover:border-white/15 hover:bg-white/5"
              >
                <Icon
                  className="h-5 w-5 text-[#E0C9A6] transition-transform duration-300 group-hover:scale-110"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white md:text-xs">
                  {title}
                </p>
                <p className="text-xs text-white/70 transition-colors group-hover:text-white/90">
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
