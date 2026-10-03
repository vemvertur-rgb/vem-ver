import { CheckCircle2, MessageCircle, Search, Sparkles } from 'lucide-react'
import { howItWorks } from '@/lib/site-config'
import { SectionHeading } from './section-heading'

const icons = [Search, MessageCircle, CheckCircle2, Sparkles]

export function HowItWorks() {
  return (
    <section
      id="como-funciona"
      aria-labelledby="como-funciona-title"
      className="bg-sand px-4 py-20 md:px-6 md:py-28"
    >
      <div className="mx-auto max-w-6xl">

        <div className="vem-ver-fade-up">
          <SectionHeading
            id="como-funciona-title"
            eyebrow="Como funciona"
            title="Seu passeio começa aqui"
            description="Escolha sua experiência, fale com a Vem Ver e prepare-se para conhecer os Lençóis Maranhenses."
          />
        </div>

        <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {howItWorks.map((step, index) => {
            const Icon = icons[index] ?? Sparkles

            return (
              <li
                key={step.number}
                className="vem-ver-card vem-ver-float-in group relative flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                style={{
                  animationDelay: `${index * 120}ms`,
                }}
              >
                <div className="mb-5 flex items-center justify-between">

                  {/* Número */}
                  <div className="flex size-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground transition-transform duration-300 group-hover:scale-110">
                    {step.number}
                  </div>

                  {/* Ícone */}
                  <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon
                      className="size-5"
                      aria-hidden="true"
                    />
                  </div>
                </div>

                <h3 className="font-serif text-xl font-semibold">
                  {step.title}
                </h3>

                <p className="mt-2 leading-relaxed text-muted-foreground">
                  {step.text}
                </p>

                {/* Linha decorativa */}
                <div className="mt-auto pt-6">
                  <div className="h-1 w-0 rounded-full bg-primary transition-all duration-500 group-hover:w-12" />
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
