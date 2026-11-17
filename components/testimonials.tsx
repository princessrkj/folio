import { Reveal } from '@/components/reveal'
import { testimonials } from '@/lib/site-content'

export function Testimonials() {
  return (
    <section aria-labelledby="testimonials-title" className="border-y border-border bg-beige/50 py-20 lg:py-24">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-sage-deep">Kind words</p>
          <h2 id="testimonials-title" className="sr-only">
            Testimonials
          </h2>
        </Reveal>
        {testimonials.length > 0 ? (
          <div className="mt-10 space-y-14">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 100}>
                <figure>
                  <blockquote className="text-balance font-serif text-3xl leading-snug md:text-4xl">
                    {`“${t.quote}”`}
                  </blockquote>
                  <figcaption className="mt-6 text-sm text-muted-foreground">
                    {t.name} · {t.context}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal delay={100}>
            <p className="mt-8 text-balance font-serif text-3xl italic leading-snug text-foreground/80 md:text-4xl">
              Client and collaborator testimonials will be shared here as projects are completed.
            </p>
          </Reveal>
        )}
      </div>
    </section>
  )
}
