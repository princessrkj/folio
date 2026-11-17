'use client'

import { useState } from 'react'
import { ArrowRight, Check, Mail, MapPin } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { inquiryServices, site } from '@/lib/site-content'
import { cn } from '@/lib/utils'

const fieldClass =
  'w-full rounded-md border border-input bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus-visible:border-sage-deep focus-visible:ring-2 focus-visible:ring-ring/30'

export function Contact() {
  const [selected, setSelected] = useState<string[]>([])
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const toggle = (service: string) =>
    setSelected((prev) => (prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]))

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (selected.length === 0) {
      setError('Please select at least one service.')
      return
    }
    setError('')
    setSubmitted(true)
  }

  return (
    <section id="contact" aria-labelledby="contact-title" className="py-24 lg:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-5">
          <Reveal>
            <SectionHeading
              id="contact-title"
              eyebrow="Contact"
              title={
                <>
                  Let&apos;s <em className="font-normal text-sage-deep">work together.</em>
                </>
              }
              intro="Tell me a little about your project or your space. I'll reply with next steps, availability, and any questions I have."
            />
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-10 space-y-6">
              <div className="rounded-lg border border-border bg-card p-6">
                <p className="font-serif text-xl font-medium">For companies</p>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  Seeking a remote contractor for annotation, evaluation, or human feedback work? Share your project
                  scope, timeline, and expected volume.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-6">
                <p className="font-serif text-xl font-medium">For homes</p>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  Ready for a calmer space? Let me know which rooms you&apos;d like help with and your general location.
                </p>
              </div>
              <ul className="space-y-3 pt-2 text-sm">
                <li className="flex items-center gap-3">
                  <Mail className="size-4 text-sage-deep" aria-hidden="true" />
                  <a href={`mailto:${site.email}`} className="underline-offset-4 hover:underline">
                    {site.email}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="size-4 text-sage-deep" aria-hidden="true" />
                  {site.location}
                </li>
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal delay={150} className="lg:col-span-7">
          <div className="rounded-lg border border-border bg-card p-6 sm:p-10">
            {submitted ? (
              <div className="flex min-h-[28rem] flex-col items-center justify-center text-center" role="status">
                <span className="flex size-14 items-center justify-center rounded-full bg-sage-soft">
                  <Check className="size-6 text-sage-deep" aria-hidden="true" />
                </span>
                <h3 className="mt-6 font-serif text-3xl font-medium">Thank you for reaching out.</h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
                  Your inquiry has been received. I&apos;ll be in touch soon with next steps.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false)
                    setSelected([])
                  }}
                  className="mt-8 text-sm font-medium underline underline-offset-4"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate={false}>
                <fieldset>
                  <legend className="text-sm font-medium">I&apos;m interested in</legend>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {inquiryServices.map((service) => {
                      const active = selected.includes(service)
                      return (
                        <button
                          key={service}
                          type="button"
                          aria-pressed={active}
                          onClick={() => toggle(service)}
                          className={cn(
                            'inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-colors',
                            active
                              ? 'border-primary bg-primary text-primary-foreground'
                              : 'border-input bg-background hover:border-foreground/40',
                          )}
                        >
                          {active && <Check className="size-3.5" aria-hidden="true" />}
                          {service}
                        </button>
                      )
                    })}
                  </div>
                  {error && (
                    <p className="mt-2 text-sm text-destructive" role="alert">
                      {error}
                    </p>
                  )}
                </fieldset>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <input id="name" name="name" required autoComplete="name" className={fieldClass} />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className={fieldClass}
                    />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium">
                      Company or location <span className="font-normal text-muted-foreground">(optional)</span>
                    </label>
                    <input id="company" name="company" autoComplete="organization" className={fieldClass} />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="timeline" className="text-sm font-medium">
                      Ideal timeline
                    </label>
                    <select id="timeline" name="timeline" defaultValue="" className={fieldClass}>
                      <option value="" disabled>
                        Select a timeline
                      </option>
                      <option>As soon as possible</option>
                      <option>Within a month</option>
                      <option>In 1–3 months</option>
                      <option>Just exploring</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="details" className="text-sm font-medium">
                    Project details
                  </label>
                  <textarea
                    id="details"
                    name="details"
                    required
                    rows={6}
                    placeholder="Share your project scope, the type of data or tasks involved, or the spaces you'd like organized."
                    className={cn(fieldClass, 'resize-y')}
                  />
                </div>

                <button
                  type="submit"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-sage-deep sm:w-auto"
                >
                  Send inquiry
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
