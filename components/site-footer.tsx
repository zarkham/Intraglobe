import Link from 'next/link'
import { EarthLeafLogo } from './earth-leaf-logo'

export function SiteFooter() {
  return (
    <footer id="contact" className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Link href="/" className="flex items-center gap-2.5">
              <EarthLeafLogo className="h-7 w-7 text-primary" />
              <div className="leading-none">
                <p className="text-base font-semibold tracking-tight text-foreground">
                  IntraGlobe
                </p>
                <p className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.28em] text-muted-foreground">
                  Overseas
                </p>
              </div>
            </Link>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted-foreground">
              A premier garment job-work and manufacturing facility based in
              Vapi, Gujarat, delivering high-precision textile crafting and
              volume garment production.
            </p>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-foreground">
              Explore
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/production" className="text-muted-foreground hover:text-foreground">
                  Textiles
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-foreground">
              Contact
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>
                <a
                  href="mailto:contact@intraglobeoverseas.com"
                  className="hover:text-foreground"
                >
                  contact@intraglobeoverseas.com
                </a>
              </li>
              <li>+91 98000 00000</li>
              <li>Mon–Sat, 9:00 – 18:00 IST</li>
              <li className="pt-1 text-xs">
                Plot No. 127, Vibrant Business Park, Vapi, Gujarat 396195, India
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-foreground">
              Follow
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>© 2026 Intraglobe Overseas. All rights reserved.</p>
          <p className="uppercase tracking-[0.25em]">Woven Responsibly · Vapi, Gujarat, India</p>
        </div>
      </div>
    </footer>
  )
}
