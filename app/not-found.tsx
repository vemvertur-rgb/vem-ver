import Link from 'next/link'
import { ArrowLeft, MapPin } from 'lucide-react'

import { CtaLink } from '@/components/cta-link'

export default function NotFound() {
  return (
    <section
      aria-labelledby="not-found-title"
      className="flex min-h-[70vh] items-center justify-center bg-sand px-4 py-20 md:px-6"
    >
      <div className="mx-auto flex max-w-2xl flex-col items-center text-center">

        <div className="flex size-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          <MapPin
            className="size-8"
            aria-hidden="true"
          />
        </div>

        <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
          Página não encontrada
        </p>

        <h1
          id="not-found-title"
          className="mt-3 font-serif text-4xl font-semibold leading-tight text-balance md:text-5xl"
        >
          Ops! Esse caminho se perdeu nas dunas.
        </h1>

        <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
          A página que você procura não existe, foi movida ou o endereço pode estar incorreto.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <CtaLink href="/">
            Voltar para o início
          </CtaLink>

          <Link
            href="/#passeios"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-primary/30 bg-background px-6 text-base font-semibold text-primary transition-all hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
          >
            Ver passeios
            <ArrowLeft
              className="size-4 rotate-180"
              aria-hidden="true"
            />
          </Link>
        </div>

      </div>
    </section>
  )
}
