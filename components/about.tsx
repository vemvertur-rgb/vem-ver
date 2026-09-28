import Image from 'next/image'
import { siteConfig } from '@/lib/site-config'
import { asset, whatsappLink } from '@/lib/links'
import { CtaLink } from './cta-link'
import { WhatsAppIcon } from './brand-icons'

export function About() {
  const { about } = siteConfig
  return (
    <section id="sobre" aria-labelledby="sobre-title" className="bg-primary px-4 py-20 text-primary-foreground md:px-6 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2 md:gap-16">
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl md:aspect-[4/5]">
          <Image
            src={asset(about.image)}
            alt={about.imageAlt}
            fill
            loading="lazy"
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-5">
          <p className="text-sm font-semibold uppercase tracking-widest text-sand-deep">Sobre nós</p>
          <h2 id="sobre-title" className="font-serif text-3xl font-semibold leading-tight text-balance md:text-4xl">
            {about.title}
          </h2>
          <p className="text-lg leading-relaxed text-primary-foreground/90 text-pretty">{about.text}</p>
          <div className="pt-2">
            <CtaLink href={whatsappLink()} external variant="whatsapp">
              <WhatsAppIcon />
              Falar com a VEM VER Turismo
            </CtaLink>
          </div>
        </div>
      </div>
    </section>
  )
}
