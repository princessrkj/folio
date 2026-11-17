import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { site, strengths } from '@/lib/site-content'

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden pt-28 lg:pt-36">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 pb-20 lg:grid-cols-12 lg:gap-10 lg:px-8 lg:pb-28">
        <div className="lg:col-span-7 lg:pt-8">
          <Reveal>
            <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-sage-deep">
              <span aria-hidden="true" className="h-px w-8 bg-sage" />
              Independent professional services
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h1
              id="hero-title"
              className="mt-7 text-balance font-serif text-5xl font-medium leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl"
            >
              Careful work for <em className="font-normal text-sage-deep">intelligent</em> systems and{' '}
              <em className="font-normal text-sage-deep">well-ordered</em> homes.
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-8 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
              I bring analytical thinking, attention to detail, and a love of order to two kinds of work: remote AI
              data annotation and evaluation for technology teams, and professional organizing for households in my
              local area.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-sage-deep"
              >
                Work With Me
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#ai-services"
                className="inline-flex items-center justify-center rounded-full border border-foreground/20 px-7 py-4 text-sm font-medium transition-colors hover:border-foreground/50"
              >
                For AI teams
              </a>
              <a
                href="#organizing"
                className="inline-flex items-center justify-center rounded-full border border-foreground/20 px-7 py-4 text-sm font-medium transition-colors hover:border-foreground/50"
              >
                For homes
              </a>
            </div>
          </Reveal>
          <Reveal delay={400}>
            <p className="mt-8 text-sm text-muted-foreground">{site.serviceArea}</p>
          </Reveal>
        </div>

        <Reveal delay={200} className="lg:col-span-5">
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-t-full bg-beige">
              <Image
                src="/images/hero-workspace.png"
                alt="A calm, minimal workspace with a laptop, notebook, and neatly labeled baskets on a shelf"
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-4 max-w-[15rem] rounded-lg border border-border bg-card p-5 shadow-sm sm:-left-8">
              <p className="font-serif text-xl leading-snug">Detail-oriented by nature. Systematic by practice.</p>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="border-y border-border bg-card/60">
        <ul className="mx-auto grid max-w-6xl divide-y divide-border px-6 md:grid-cols-3 md:divide-x md:divide-y-0 lg:px-8">
          {strengths.map((s, i) => (
            <li key={s.title} className="py-8 md:px-8 md:first:pl-0 md:last:pr-0">
              <Reveal delay={i * 100}>
                <p className="font-serif text-sm italic text-sage-deep">0{i + 1}</p>
                <h3 className="mt-2 font-serif text-2xl font-medium">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
