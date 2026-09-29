'use client'

import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { faq } from '@/lib/site-config'
import { SectionHeading } from './section-heading'

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section
      id="duvidas"
      aria-labelledby="duvidas-title"
      className="bg-background px-4 py-20 md:px-6 md:py-28"
    >
      <div className="mx-auto max-w-4xl">

        <SectionHeading
          id="duvidas-title"
          eyebrow="Dúvidas frequentes"
          title="Tudo o que você precisa saber"
          description="Confira as principais informações antes de reservar sua experiência com a Vem Ver."
        />

        <div className="mt-12 overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
          {faq.map((item, index) => {
            const isOpen = openIndex === index

            return (
              <div
                key={item.question}
                className="border-b border-border last:border-b-0"
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left transition-colors hover:bg-muted/50 md:px-7 md:py-6"
                >
                  <span className="font-semibold leading-relaxed">
                    {item.question}
                  </span>

                  <ChevronDown
                    className={`size-5 shrink-0 text-primary transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                    aria-hidden="true"
                  />
                </button>

                <div
                  id={`faq-answer-${index}`}
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? 'grid-rows-[1fr] opacity-100'
                      : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 pb-6 text-sm leading-relaxed text-muted-foreground md:px-7">
                      <div className="whitespace-pre-line">
                        {item.answer}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Chamada final */}
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Ainda ficou com alguma dúvida?
          </p>

          <p className="mt-1 text-sm font-medium text-primary">
            Fale diretamente com a Vem Ver pelo WhatsApp.
          </p>
        </div>

      </div>
    </section>
  )
}
