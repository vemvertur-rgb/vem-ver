import { ChevronDown } from 'lucide-react'
import { faq } from '@/lib/site-config'
import { SectionHeading } from './section-heading'

export function Faq() {
  return (
    <section id="duvidas" aria-labelledby="duvidas-title" className="px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-3xl">
        <SectionHeading id="duvidas-title" eyebrow="Dúvidas" title="Perguntas frequentes" />
        <div className="mt-10 flex flex-col gap-3">
          {faq.map((item) => (
            <details key={item.question} className="group rounded-2xl border border-border bg-card">
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 rounded-2xl px-5 py-4 text-left font-semibold focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50 [&::-webkit-details-marker]:hidden">
                <h3 className="text-base md:text-lg">{item.question}</h3>
                <ChevronDown
                  className="size-5 shrink-0 text-primary transition-transform group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <p className="px-5 pb-5 leading-relaxed text-muted-foreground">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
