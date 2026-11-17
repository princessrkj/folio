import { Award, Download, GraduationCap } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { certifications, education, experience, site, transferableSkills } from '@/lib/site-content'

function EmptyNote({ children }: { children: React.ReactNode }) {
  return (
    <p className="rounded-md border border-dashed border-foreground/20 px-5 py-6 text-sm leading-relaxed text-muted-foreground">
      {children}
    </p>
  )
}

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <Reveal>
            <SectionHeading
              id="experience-title"
              eyebrow="Resume & experience"
              title="A professional overview."
              intro="A summary of my experience, skills, and education. Download the full resume for details."
            />
          </Reveal>
          <Reveal delay={100}>
            {site.resumeUrl ? (
              <a
                href={site.resumeUrl}
                download
                className="inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-sage-deep"
              >
                <Download className="size-4" aria-hidden="true" />
                Download resume
              </a>
            ) : (
              <a
                href="#contact"
                className="inline-flex shrink-0 items-center gap-2 rounded-full border border-foreground/20 px-6 py-3.5 text-sm font-medium transition-colors hover:border-foreground/50"
              >
                <Download className="size-4" aria-hidden="true" />
                Request a resume
              </a>
            )}
          </Reveal>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <h3 className="font-serif text-3xl font-medium">Experience</h3>
            <div className="mt-6">
              {experience.length > 0 ? (
                <ol className="divide-y divide-border border-y border-border">
                  {experience.map((e) => (
                    <li key={`${e.role}-${e.org}`} className="grid gap-2 py-6 sm:grid-cols-[1fr_auto]">
                      <div>
                        <p className="font-medium">{e.role}</p>
                        <p className="text-sm text-sage-deep">{e.org}</p>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{e.body}</p>
                      </div>
                      <p className="text-sm text-muted-foreground">{e.dates}</p>
                    </li>
                  ))}
                </ol>
              ) : (
                <EmptyNote>
                  Your roles and responsibilities will appear here. Add entries to the <code>experience</code> list in{' '}
                  <code>lib/site-content.ts</code>.
                </EmptyNote>
              )}
            </div>

            <h3 className="mt-14 font-serif text-3xl font-medium">Transferable skills</h3>
            <ul className="mt-6 flex flex-wrap gap-2">
              {transferableSkills.map((s) => (
                <li key={s} className="rounded-full border border-border bg-card px-4 py-2 text-sm">
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>

          <div className="space-y-6 lg:col-span-5">
            <Reveal delay={100}>
              <div className="rounded-lg border border-border bg-card p-7">
                <div className="flex items-center gap-3">
                  <GraduationCap className="size-5 text-sage-deep" aria-hidden="true" />
                  <h3 className="font-serif text-2xl font-medium">Education</h3>
                </div>
                <div className="mt-5">
                  {education.length > 0 ? (
                    <ul className="space-y-4">
                      {education.map((e) => (
                        <li key={e.title}>
                          <p className="font-medium">{e.title}</p>
                          <p className="text-sm text-muted-foreground">
                            {e.org} · {e.year}
                          </p>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <EmptyNote>Degrees, diplomas, and relevant coursework will be listed here.</EmptyNote>
                  )}
                </div>
              </div>
            </Reveal>

            <Reveal delay={180}>
              <div className="rounded-lg bg-sage-soft p-7">
                <div className="flex items-center gap-3">
                  <Award className="size-5 text-sage-deep" aria-hidden="true" />
                  <h3 className="font-serif text-2xl font-medium">Certifications & training</h3>
                </div>
                <div className="mt-5">
                  {certifications.length > 0 ? (
                    <ul className="space-y-4">
                      {certifications.map((c) => (
                        <li key={c.title}>
                          <p className="font-medium">{c.title}</p>
                          <p className="text-sm text-muted-foreground">
                            {c.issuer} · {c.year}
                          </p>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <EmptyNote>Certifications and professional training will be added here as they&apos;re earned.</EmptyNote>
                  )}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
