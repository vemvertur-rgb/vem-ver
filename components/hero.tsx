import Image from 'next/image'
import { MapPin } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'
import { asset, whatsappLink } from '@/lib/links'
import { CtaLink } from './cta-link'
import { WhatsAppIcon } from './brand-icons'

export function Hero() {
  const { hero } = siteConfig
  return (
    <section id="inicio" aria-labelledby="hero-title" className="relative isolate overflow-hidden">
      <Image
        src={asset(hero.image)}
        alt={hero.imageAlt}
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[oklch(0.2_0.05_240/0.35)] via-[oklch(0.2_0.05_240/0.45)] to-[oklch(0.2_0.05_240/0.75)]" />

      <div className="mx-auto flex min-h-[85svh] max-w-6xl flex-col justify-end gap-8 px-4 pb-16 pt-28 md:min-h-[88vh] md:flex-row md:items-center md:justify-between md:gap-10 md:px-6 md:pb-24 md:pt-32">
        <div className="order-2 flex flex-col md:order-1 md:flex-1">
        <p className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
          <MapPin className="size-4" aria-hidden="true" />
          {siteConfig.location} · Passeios & Pousada
        </p>
        <h1
          id="hero-title"
          className="max-w-3xl font-serif text-4xl font-semibold leading-[1.1] text-white text-balance sm:text-5xl md:text-6xl lg:text-7xl"
        >
          {hero.title}
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/90 text-pretty md:text-xl">
          {hero.subtitle}
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <CtaLink href="/#passeios" variant="primary" className="bg-white text-primary hover:bg-white/90">
            Conhecer os passeios
          </CtaLink>
          <CtaLink href={whatsappLink()} external variant="whatsapp">
            <WhatsAppIcon />
            Falar no WhatsApp
          </CtaLink>
        </div>
        </div>

        <div className="order-1 flex justify-center md:order-2 md:shrink-0">
          <Image
            src={asset('/images/logo-vemver.png')}
            alt="Logo VEM VER Turismo"
            width={1254}
            height={1254}
            priority
            sizes="(min-width: 1024px) 420px, (min-width: 768px) 320px, 180px"
            className="size-44 drop-shadow-[0_12px_32px_rgba(0,0,0,0.45)] md:size-80 lg:size-[420px]"
          />
        </div>
      </div>
    </section>
  )
}
