import Image from 'next/image'
import { MapPin, Sparkles } from 'lucide-react'

import { siteConfig } from '@/lib/site-config'
import { asset, whatsappLink } from '@/lib/links'

import { CtaLink } from './cta-link'
import { WhatsAppIcon } from './brand-icons'
import { useLocale } from './locale-provider'

export function Hero() {
  const { hero } = siteConfig
  const { translations: t } = useLocale()

  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden"
    >
      {/* Imagem de fundo */}
      <Image
        src={asset(hero.image)}
        alt={hero.imageAlt}
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover"
      />

      {/* Camada de escurecimento */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/30 via-black/35 to-black/75" />

      {/* Conteúdo */}
      <div className="mx-auto flex min-h-[90svh] max-w-7xl flex-col justify-center gap-10 px-4 pb-16 pt-28 md:min-h-[88vh] md:flex-row md:items-center md:justify-between md:gap-12 md:px-6 md:pb-20 md:pt-32">

        {/* Texto */}
        <div className="order-2 flex max-w-3xl flex-col md:order-1 md:flex-1 vem-ver-fade-left">

          {/* Localização */}
          <div className="mb-5 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
              <MapPin
                className="size-4"
                aria-hidden="true"
              />

              {siteConfig.location}
            </span>

            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
              <Sparkles
                className="size-4"
                aria-hidden="true"
              />

              {t.hero.eyebrow}
            </span>
          </div>

          {/* Título */}
          <h1
            id="hero-title"
            className="max-w-3xl font-serif text-4xl font-semibold leading-[1.05] text-white text-balance sm:text-5xl md:text-6xl lg:text-7xl"
          >
            {t.hero.title}
          </h1>

          {/* Subtítulo */}
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/90 text-pretty md:text-xl">
            {t.hero.description}
          </p>

          {/* Botões */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CtaLink
              href="/#passeios"
              variant="primary"
              className="vem-ver-button bg-white text-primary shadow-lg hover:bg-white/90"
            >
              {t.hero.toursButton}
            </CtaLink>

            <CtaLink
              href={whatsappLink()}
              external
              variant="whatsapp"
              className="vem-ver-button"
            >
              <WhatsAppIcon />
              {t.hero.whatsappButton}
            </CtaLink>
          </div>

          {/* Informação de confiança */}
          <p className="mt-6 text-sm text-white/75">
            {t.tour.contactDescription}
          </p>
        </div>

        {/* Logo */}
        <div className="order-1 flex justify-center md:order-2 md:shrink-0 vem-ver-float-in">
          <Image
            src={asset('/images/logo-vemver.png')}
            alt="Logo Vem Ver Turismo"
            width={1254}
            height={1254}
            priority
            sizes="(min-width: 1024px) 420px, (min-width: 768px) 320px, 180px"
            className="size-44 drop-shadow-[0_12px_32px_rgba(0,0,0,0.5)] md:size-80 lg:size-[420px]"
          />
        </div>
      </div>
    </section>
  )
}
