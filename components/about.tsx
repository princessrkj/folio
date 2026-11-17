import Image from 'next/image'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const approach = [
  { title: 'Clarity', body: 'I ask good questions up front so expectations are clear before work begins.' },
  { title: 'Consistency', body: 'Steady, reliable quality from the first task to the last.' },
  { title: 'Communication', body: 'Prompt, straightforward updates — and flags raised early, not late.' },
  { title: 'Discretion', body: 'Confidential data and private homes are handled with the same respect.' },
]

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="py-24 lg:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-12 lg:px-8">
        <Reveal className="lg:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-beige">
            <Image
              src="/images/detail-desk.png"
              alt="An annotated document with colored tabs and a pen beside a laptop"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <div className="lg:col-span-7 lg:pl-8">
          <Reveal>
            <SectionHeading
              id="about-title"
              eyebrow="About me"
              title={
                <>
                  One way of working, <em className="font-normal text-sage-deep">two kinds</em> of service.
                </>
              }
            />
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-8 space-y-5 text-pretty leading-relaxed text-muted-foreground">
              <p>
                I&apos;m an independent professional who enjoys work that rewards patience and precision. Whether
                I&apos;m reviewing an AI model&apos;s response against a rubric or helping a family reclaim their
                kitchen, the process is the same: understand the goal, look closely, and build something orderly
                that lasts.
              </p>
              <p>
                {/* Replace this paragraph with your own background in a sentence or two. */}
                This is a space to share a short summary of your professional background — the roles, studies, or
                experiences that shaped how you work — written in your own voice.
              </p>
            </div>
          </Reveal>

          <dl className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
            {approach.map((a, i) => (
              <Reveal key={a.title} delay={i * 80} className="bg-card p-6">
                <dt className="font-serif text-xl font-medium">{a.title}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.body}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
