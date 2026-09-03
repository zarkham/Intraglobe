'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  ArrowUpRight,
  ChevronLeft,
  Clock,
  Mail,
  MapPin,
  Phone,
  Send,
} from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ScrollReveal } from '@/components/scroll-reveal'



const REASONS = [
  'General enquiry',
  'Wholesale / Bulk order',
  'Bespoke collaboration',
  'Press & media',
  'Careers',
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // This is a static site — hook up your backend here.
    setSubmitted(true)
  }

  return (
    <main className="min-h-screen bg-background">
      <SiteHeader activeHref="/contact" />

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
                Contact
              </p>
              <h1 className="font-serif text-4xl leading-[1.05] tracking-tight text-foreground md:text-5xl lg:text-6xl">
                Let&apos;s make something{' '}
                <span className="text-primary">together.</span>
              </h1>
              <p className="max-w-2xl text-base text-muted-foreground md:text-lg">
                Whether you&apos;re a boutique looking for a wholesale partner,
                a house planning a bespoke collection, or simply curious about
                our craft — we&apos;d love to hear from you.
              </p>
            </div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Garment Manufacturing Hub · Andheri, Mumbai
            </p>
          </div>
        </div>
      </section>

      {/* Form + Direct contact */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
          <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
            {/* Form */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                Send a Message
              </p>
              <h2 className="mt-3 font-serif text-3xl leading-tight tracking-tight text-foreground md:text-4xl">
                Write to us.
              </h2>

              {submitted ? (
                <div className="mt-10 border border-primary/30 bg-primary/5 p-8">
                  <p className="font-serif text-2xl text-foreground">
                    Thank you.
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Your message is on its way to our team. We usually respond
                    within one working day.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary underline-offset-8 hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="mt-10 space-y-8"
                  noValidate
                >
                  <div className="grid gap-8 sm:grid-cols-2">
                    <Field label="First Name" name="firstName" required />
                    <Field label="Last Name" name="lastName" required />
                    <Field
                      label="Email"
                      name="email"
                      type="email"
                      required
                    />
                    <Field label="Company (Optional)" name="company" />
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="reason">Reason for Enquiry</Label>
                    <div className="flex flex-wrap gap-2">
                      {REASONS.map((reason) => (
                        <label
                          key={reason}
                          className="cursor-pointer border border-border px-4 py-2 text-xs font-medium uppercase tracking-widest text-foreground transition-all hover:border-foreground has-[:checked]:border-foreground has-[:checked]:bg-foreground has-[:checked]:text-background"
                        >
                          <input
                            type="radio"
                            name="reason"
                            value={reason}
                            defaultChecked={reason === REASONS[0]}
                            className="sr-only"
                          />
                          {reason}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="message">Message</Label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      placeholder="Tell us about your project, timeline, and quantities..."
                      className="w-full border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-foreground focus:outline-none focus:ring-0"
                    />
                  </div>

                  <div className="flex flex-col items-start gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs text-muted-foreground">
                      By submitting, you agree to our privacy policy. We&apos;ll
                      never share your details.
                    </p>
                    <button
                      type="submit"
                      className="group inline-flex items-center gap-2 border border-foreground bg-foreground px-8 py-3 text-sm font-semibold uppercase tracking-widest text-background transition-all hover:bg-background hover:text-foreground"
                    >
                      Send Message
                      <Send className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Direct contact */}
            <aside className="space-y-10 border-t border-border pt-10 lg:border-l lg:border-t-0 lg:pl-14 lg:pt-0">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                  Reach Us Directly
                </p>
                <h3 className="mt-3 font-serif text-2xl leading-tight tracking-tight text-foreground md:text-3xl">
                  A conversation is often the fastest way.
                </h3>
              </div>

              <ul className="space-y-6">
                <ContactRow
                  Icon={Mail}
                  label="General Enquiries"
                  value="contact@intraglobeoverseas.com"
                  href="mailto:contact@intraglobeoverseas.com"
                />
                <ContactRow
                  Icon={Phone}
                  label="Phone"
                  value="+91 98000 00000"
                  href="tel:+919800000000"
                />
                <ContactRow
                  Icon={Clock}
                  label="Factory & Office Hours"
                  value="Mon–Sat, 9:00 – 18:00 IST"
                />
                <ContactRow
                  Icon={MapPin}
                  label="Address"
                  value="Intraglobe Overseas LLP, 5A Mezzanine, First Floor, IE Andheri Kurla Road, Mumbai 400070, India"
                />
              </ul>

              <div className="border-t border-border pt-8">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-foreground">
                  Follow the House
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {['Instagram', 'LinkedIn', 'Pinterest'].map((n) => (
                    <a
                      key={n}
                      href="#"
                      className="inline-flex items-center gap-1.5 border border-border px-4 py-2 text-xs font-semibold uppercase tracking-widest text-foreground transition-all hover:border-foreground"
                    >
                      {n}
                      <ArrowUpRight className="h-3 w-3" />
                    </a>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>



      <SiteFooter />
    </main>
  )
}

/* ------------------------------------------------------------------ */
/*  Small building blocks                                              */
/* ------------------------------------------------------------------ */

function Label({
  htmlFor,
  children,
}: {
  htmlFor: string
  children: React.ReactNode
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-[10px] font-semibold uppercase tracking-[0.3em] text-foreground"
    >
      {children}
    </label>
  )
}

function Field({
  label,
  name,
  type = 'text',
  required = false,
}: {
  label: string
  name: string
  type?: string
  required?: boolean
}) {
  return (
    <div className="space-y-3">
      <Label htmlFor={name}>{label}</Label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full border-b border-border bg-transparent py-2.5 text-sm text-foreground transition-all duration-300 placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none focus:ring-0"
      />
    </div>
  )
}

function ContactRow({
  Icon,
  label,
  value,
  href,
}: {
  Icon: React.ComponentType<{ className?: string; strokeWidth?: number }>
  label: string
  value: string
  href?: string
}) {
  const content = (
    <div className="flex items-start gap-4">
      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center border border-border">
        <Icon className="h-4 w-4 text-foreground" strokeWidth={1.5} />
      </div>
      <div className="space-y-1">
        <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-muted-foreground">
          {label}
        </p>
        <p className="text-sm text-foreground">{value}</p>
      </div>
    </div>
  )

  if (href) {
    return (
      <li>
        <a href={href} className="group block transition-colors hover:text-primary">
          {content}
        </a>
      </li>
    )
  }

  return <li>{content}</li>
}
