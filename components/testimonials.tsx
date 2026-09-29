import { Star } from 'lucide-react'
import { testimonials } from '@/lib/site-config'
import { SectionHeading } from './section-heading'

export function Testimonials() {
  if (testimonials.length === 0) {
    return null
  }

  return (
    <section
      id="depoimentos"
      aria-labelledby="depoimentos-title"
      className="bg-sand px-4 py-20 md:px-6 md:py-28"
    >
      <div className="mx-auto max-w-6xl">

        <SectionHeading
          id="depoimentos-title"
          eyebrow="Depoimentos"
          title="Experiências que ficam na memória"
          description="Confira o que nossos clientes têm a dizer sobre suas experiências com a Vem Ver."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={`${testimonial.name}-${testimonial.text}`}
              className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >

              {/* Estrelas */}
              <div
                className="flex gap-1 text-primary"
                aria-label="Avaliação de 5 estrelas"
              >
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    className="size-4 fill-current"
                    aria-hidden="true"
                  />
                ))}
              </div>

              {/* Depoimento */}
              <blockquote className="mt-5 flex-1 text-base leading-relaxed text-muted-foreground">
                “{testimonial.text}”
              </blockquote>

              {/* Cliente */}
              <div className="mt-6 border-t border-border pt-4">
                <p className="font-semibold">
                  {testimonial.name}
                </p>

                {testimonial.city && (
                  <p className="mt-1 text-sm text-muted-foreground">
                    {testimonial.city}
                  </p>
                )}
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  )
}
