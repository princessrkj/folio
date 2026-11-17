import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { organizingBenefits, organizingPhilosophy, organizingServices } from '@/lib/site-content'

export function Organizing() {
  return (
    <section id="organizing" aria-labelledby="organizing-title" className="py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Reveal>
              <SectionHeading
                id="organizing-title"
                eyebrow="Professional organizing · Local"
                title={
                  <>
                    Homes that feel <em className="font-normal text-sage-deep">lighter</em> and work better.
                  </>
                }
                intro="Hands-on residential organizing for busy households. Together we'll clear what you don't need, arrange what you do, and set up simple systems that make everyday life easier."
              />
            </Reveal>

            <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2">
              {organizingServices.map((s, i) => (
                <Reveal key={s.title} delay={i * 80}>
                  <div className="border-t border-foreground/15 pt-5">
                    <h3 className="font-serif text-2xl font-medium">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={150} className="lg:col-span-5 lg:col-start-8">
            <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-beige">
              <Image
                src="/images/organized-pantry.png"
                alt="An organized pantry with glass jars, woven baskets, and neatly stacked dishes"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-lg bg-sage-soft p-8 lg:p-10">
              <h3 className="font-serif text-3xl font-medium">My organizing philosophy</h3>
              <ul className="mt-6 space-y-4">
                {organizingPhilosophy.map((p) => (
                  <li key={p} className="flex gap-4 leading-relaxed">
                    <span aria-hidden="true" className="mt-3 h-px w-5 shrink-0 bg-sage-deep" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="flex h-full flex-col rounded-lg border border-border bg-card p-8 lg:p-10">
              <h3 className="font-serif text-3xl font-medium">What you can expect</h3>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {organizingBenefits.map((b) => (
                  <li key={b} className="rounded-md bg-muted px-4 py-3 text-sm">
                    {b}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="group mt-8 inline-flex items-center gap-2 self-start rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-sage-deep"
              >
                Book an organizing consult
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
