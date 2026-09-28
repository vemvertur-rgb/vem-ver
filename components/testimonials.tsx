import { Quote } from 'lucide-react'
import { testimonials } from '@/lib/site-config'
import { SectionHeading } from './section-heading'

export function Testimonials() {
  return (
    <section aria-labelledby="depoimentos-title" className="bg-sand px-4 py-20 md:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading id="depoimentos-title" eyebrow="Depoimentos" title="Quem viveu, conta" />
        {testimonials.length === 0 ? (
          <p className="mx-auto mt-10 max-w-xl rounded-2xl border border-dashed border-sand-deep bg-card px-6 py-10 text-center text-lg text-muted-foreground">
            Em breve, experiências compartilhadas por nossos clientes.
          </p>
        ) : (
          <ul className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <li key={t.name + t.text.slice(0, 10)}>
                <figure className="flex h-full flex-col gap-4 rounded-2xl bg-card p-6">
                  <Quote className="size-6 text-accent-foreground" aria-hidden="true" />
                  <blockquote className="leading-relaxed">{t.text}</blockquote>
                  <figcaption className="mt-auto text-sm font-semibold">
                    {t.name}
                    {t.city && <span className="font-normal text-muted-foreground">{` · ${t.city}`}</span>}
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}
