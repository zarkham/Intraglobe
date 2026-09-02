'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { EarthLeafLogo } from './earth-leaf-logo'

const NAV_LINKS: { label: string; href: string }[] = [
  { label: 'Home', href: '/' },
  { label: 'Textiles', href: '/production' },
]

export function SiteHeader({ activeHref = '/' }: { activeHref?: string }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-4 z-50 px-4 transition-all duration-300">
      <nav className="mx-auto w-[92%] sm:w-[85%] md:w-[80%] max-w-6xl rounded-full border border-border/80 bg-background/85 backdrop-blur-md shadow-lg shadow-black/5 px-5 py-2.5 md:px-7 md:py-3 transition-all duration-300 supports-[backdrop-filter]:bg-background/80">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="group flex items-center gap-2.5 transition-transform duration-300 hover:scale-[1.02]"
            onClick={() => setMobileMenuOpen(false)}
          >
            <EarthLeafLogo className="h-7 w-7 md:h-8 md:w-8 text-primary transition-transform duration-500 group-hover:rotate-12" />
            <div className="leading-none">
              <p className="text-sm md:text-base font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary">
                IntraGlobe
              </p>
              <p className="mt-0.5 text-[9px] md:text-[10px] font-medium uppercase tracking-[0.28em] text-muted-foreground">
                Overseas
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden items-center gap-8 md:flex">
            <ul className="flex items-center gap-7">
              {NAV_LINKS.map((link) => {
                const active = link.href === activeHref
                return (
                  <li key={link.label} className="relative">
                    <Link
                      href={link.href}
                      className={
                        'relative block py-1 text-sm transition-colors duration-300 ' +
                        (active
                          ? 'font-semibold text-foreground'
                          : 'font-medium text-muted-foreground hover:text-foreground')
                      }
                    >
                      {link.label}
                      {active && (
                        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary animate-fade-in" />
                      )}
                    </Link>
                  </li>
                )
              })}
            </ul>

            <Link
              href="/contact"
              className="group inline-flex items-center gap-1.5 rounded-full border border-foreground px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-foreground transition-all duration-300 hover:bg-foreground hover:text-background hover:shadow-md"
            >
              Get In Touch
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center rounded-full p-2 text-foreground hover:bg-muted/80 transition-colors md:hidden focus:outline-none"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="mt-3 border-t border-border/60 pt-4 pb-2 md:hidden animate-fade-in space-y-3">
            <ul className="flex flex-col space-y-1.5">
              {NAV_LINKS.map((link) => {
                const active = link.href === activeHref
                return (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={
                        'block rounded-xl px-4 py-2.5 text-sm transition-colors ' +
                        (active
                          ? 'bg-primary/10 font-semibold text-primary'
                          : 'font-medium text-muted-foreground hover:bg-muted hover:text-foreground')
                      }
                    >
                      {link.label}
                    </Link>
                  </li>
                )
              })}
              <li>
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className={
                    'block rounded-xl px-4 py-2.5 text-sm transition-colors ' +
                    (activeHref === '/contact'
                      ? 'bg-primary/10 font-semibold text-primary'
                      : 'font-medium text-muted-foreground hover:bg-muted hover:text-foreground')
                  }
                >
                  Contact
                </Link>
              </li>
            </ul>

            <div className="pt-2">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full rounded-full border border-foreground bg-foreground py-2.5 text-center text-xs font-semibold uppercase tracking-widest text-background transition-all hover:bg-background hover:text-foreground"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

