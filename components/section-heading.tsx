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
  const isCentered = align === 'center'

  return (
    <div
      className={cn(
        'flex max-w-3xl flex-col gap-3',
        isCentered && 'mx-auto items-center text-center',
        className,
      )}
    >
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
        {eyebrow}
      </p>

      <h2
        id={id}
        className="font-serif text-3xl font-semibold leading-tight text-balance md:text-4xl lg:text-5xl"
      >
        {title}
      </h2>

      {description && (
        <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty md:text-xl">
          {description}
        </p>
      )}
    </div>
  )
}
