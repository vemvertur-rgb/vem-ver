import { Compass, Map, Sparkles } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'

export function Intro() {
  const { intro } = siteConfig

  const highlights = [
    {
      icon: Map,
      title: 'Paisagens incríveis',
      text: 'Dunas, lagoas, rios e cenários únicos para conhecer e aproveitar.',
    },
    {
      icon: Compass,
      title: 'Experiências diferentes',
      text: 'Opções de passeios para você descobrir diferentes lugares da região.',
    },
    {
      icon: Sparkles,
      title: 'Momentos para guardar',
      text: 'Escolha seu passeio e transforme sua viagem em uma experiência especial.',
    },
  ]

  return (
    <section
      aria-labelledby="intro-title"
      className="bg-background px-4 py-20 md:px-6 md:py-28"
    >
      <div className="mx-auto max-w-6xl">

        {/* Apresentação */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Vem Ver os Lençóis
          </p>

          <h2
            id="intro-title"
            className="font-serif text-3xl font-semibold leading-tight text-balance md:text-4xl lg:text-5xl"
          >
            {intro.title}
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-muted-foreground text-pretty md:text-xl">
            {intro.text}
          </p>
        </div>

        {/* Destaques */}
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {highlights.map((item) => {
            const Icon = item.icon

            return (
              <div
                key={item.title}
                className="group rounded-2xl border border-border bg-card p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-105">
                  <Icon
                    className="size-7"
                    aria-hidden="true"
                  />
                </div>

                <h3 className="mt-5 font-serif text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-2 leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
