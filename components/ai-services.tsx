import { ArrowRight, Check } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { aiProcess, aiServices } from '@/lib/site-content'

export function AiServices() {
  return (
    <section
      id="ai-services"
      aria-labelledby="ai-title"
      className="bg-primary py-24 text-primary-foreground lg:py-32"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <Reveal className="[&_h2]:text-primary-foreground [&_p:last-child]:text-primary-foreground/70 [&_p:first-child]:text-sage [&_span]:bg-sage">
            <SectionHeading
              id="ai-title"
              eyebrow="AI services · Remote"
              title={
                <>
                  Human judgment for <em className="font-normal">better</em> AI.
                </>
              }
              intro="Reliable, detail-oriented support for teams building and refining AI systems. I follow your guidelines closely, flag ambiguity, and keep quality consistent at scale."
            />
          </Reveal>
          <Reveal delay={100}>
            <a
              href="#contact"
              className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-primary-foreground px-6 py-3.5 text-sm font-medium text-primary transition-colors hover:bg-sage-soft"
            >
              Hire an AI contractor
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {aiServices.map((service, i) => (
            <Reveal key={service.id} delay={i * 120}>
              <article className="h-full rounded-lg border border-primary-foreground/15 p-8 lg:p-10">
                <p className="font-serif text-sm italic text-sage">Service 0{i + 1}</p>
                <h3 className="mt-3 font-serif text-3xl font-medium">{service.label}</h3>
                <p className="mt-4 leading-relaxed text-primary-foreground/70">{service.summary}</p>
                <ul className="mt-8 space-y-3 border-t border-primary-foreground/15 pt-8">
                  {service.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm">
                      <Check className="mt-0.5 size-4 shrink-0 text-sage" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-20">
          <Reveal>
            <h3 className="font-serif text-2xl font-medium">How we&apos;d work together</h3>
          </Reveal>
          <ol className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {aiProcess.map((p, i) => (
              <li key={p.step}>
                <Reveal delay={i * 80} className="border-t border-primary-foreground/25 pt-5">
                  <span className="font-serif text-3xl text-sage">{p.step}</span>
                  <p className="mt-3 font-medium">{p.title}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-primary-foreground/65">{p.body}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
