import { cn } from '@/lib/utils'

type SectionHeadingProps = {
  id?: string
  eyebrow: string
  title: string
  description?: string
  align?: 'center' | 'left'
  className?: string
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = 'center',
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'flex max-w-2xl flex-col gap-3',
        align === 'center' && 'mx-auto items-center text-center',
        className,
      )}
    >
      <p className="text-sm font-semibold uppercase tracking-widest text-accent-foreground">
        {eyebrow}
      </p>
      <h2 id={id} className="font-serif text-3xl font-semibold text-balance leading-tight md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="text-lg leading-relaxed text-muted-foreground text-pretty">{description}</p>
      )}
    </div>
  )
}
