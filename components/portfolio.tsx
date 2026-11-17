import { ImageIcon } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { portfolioCategories } from '@/lib/site-content'

export function Portfolio() {
  return (
    <section id="portfolio" aria-labelledby="portfolio-title" className="bg-muted/60 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            id="portfolio-title"
            eyebrow="Portfolio"
            title="Selected work, in progress."
            intro="This portfolio is growing. Projects, case studies, and before-and-after transformations will be added here as they're completed and approved for sharing."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {portfolioCategories.map((c, i) => (
            <Reveal key={c.title} delay={i * 80}>
              <article className="flex h-full flex-col rounded-lg border border-border bg-card p-6">
                <div className="flex aspect-[4/3] items-center justify-center rounded-md border border-dashed border-foreground/20 bg-background">
                  <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Coming soon</span>
                </div>
                <h3 className="mt-6 font-serif text-2xl font-medium">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={100}>
          <div className="mt-6 grid overflow-hidden rounded-lg border border-border bg-card md:grid-cols-2">
            {['Before', 'After'].map((label) => (
              <div
                key={label}
                className="flex aspect-[16/9] flex-col items-center justify-center gap-3 border-border bg-background first:border-b md:first:border-r md:first:border-b-0"
              >
                <ImageIcon className="size-6 text-sage-deep" aria-hidden="true" />
                <span className="font-serif text-2xl">{label}</span>
                <span className="text-xs text-muted-foreground">Organizing photo placeholder</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
