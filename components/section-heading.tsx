import { cn } from '@/lib/utils'

export function SectionHeading({
  eyebrow,
  title,
  intro,
  id,
  className,
  align = 'left',
}: {
  eyebrow: string
  title: React.ReactNode
  intro?: string
  id?: string
  className?: string
  align?: 'left' | 'center'
}) {
  return (
    <div className={cn('max-w-2xl', align === 'center' && 'mx-auto text-center', className)}>
      <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-sage-deep">
        <span aria-hidden="true" className={cn('h-px w-8 bg-sage', align === 'center' && 'hidden')} />
        {eyebrow}
      </p>
      <h2
        id={id}
        className="mt-5 text-balance font-serif text-4xl font-medium leading-[1.05] tracking-tight md:text-5xl"
      >
        {title}
      </h2>
      {intro && (
        <p className="mt-5 text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">{intro}</p>
      )}
    </div>
  )
}
