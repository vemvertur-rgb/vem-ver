'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Clock, Info } from 'lucide-react'

import {
  type Tour,
} from '@/lib/site-config'

import {
  asset,
} from '@/lib/links'

import {
  defaultLocale,
} from '@/lib/i18n'

import {
  getTourTranslation,
} from '@/lib/tour-translations'

import { WhatsAppIcon } from './brand-icons'
import { ctaClass } from './cta-link'
import { LocalizedPrice } from './localized-price'
import { useLocale } from './locale-provider'

type TourCardContent = {
  specialOffer: string
  specialCondition: string
  consultWhatsapp: string
  viewDetails: string
  consultInformation: string
}

const contentByLocale: Record<
  string,
  TourCardContent
> = {
  pt: {
    specialOffer: 'OFERTA ESPECIAL',
    specialCondition: 'Condição especial',
    consultWhatsapp:
      'Consultar pelo WhatsApp',
    viewDetails: 'Ver detalhes',
    consultInformation:
      'Consultar informações sobre',
  },

  en: {
    specialOffer: 'SPECIAL OFFER',
    specialCondition: 'Special condition',
    consultWhatsapp:
      'Ask via WhatsApp',
    viewDetails: 'View details',
    consultInformation:
      'Ask for information about',
  },

  es: {
    specialOffer: 'OFERTA ESPECIAL',
    specialCondition: 'Condición especial',
    consultWhatsapp:
      'Consultar por WhatsApp',
    viewDetails: 'Ver detalles',
    consultInformation:
      'Consultar información sobre',
  },

  fr: {
    specialOffer: 'OFFRE SPÉCIALE',
    specialCondition:
      'Condition spéciale',
    consultWhatsapp:
      'Consulter sur WhatsApp',
    viewDetails: 'Voir les détails',
    consultInformation:
      'Consulter les informations sur',
  },

  it: {
    specialOffer: 'OFFERTA SPECIALE',
    specialCondition:
      'Condizione speciale',
    consultWhatsapp:
      'Consulta su WhatsApp',
    viewDetails: 'Vedi dettagli',
    consultInformation:
      'Consulta le informazioni su',
  },

  zh: {
    specialOffer: '特别优惠',
    specialCondition: '特别条件',
    consultWhatsapp:
      '通过 WhatsApp 咨询',
    viewDetails: '查看详情',
    consultInformation:
      '咨询相关信息',
  },

  ja: {
    specialOffer: '特別オファー',
    specialCondition:
      '特別条件',
    consultWhatsapp:
      'WhatsAppで問い合わせる',
    viewDetails: '詳細を見る',
    consultInformation:
      '詳細について問い合わせる',
  },
}

export function TourCard({
  tour,
}: {
  tour: Tour
}) {
  const {
    locale,
  } = useLocale()

  const content =
    contentByLocale[locale] ||
    contentByLocale.pt

  const localizedTour =
    getTourTranslation(
      tour.slug,
      locale,
    )

  const displayTour =
    localizedTour || {
      name: tour.name,
      shortDescription:
        tour.shortDescription,
      description:
        tour.description,
      imageAlt:
        tour.imageAlt,
      priceInfo:
        tour.priceInfo,
      duration:
        tour.duration,
      schedule:
        tour.schedule,
      highlights:
        tour.highlights,
    }

  function goToContact() {
    const contact =
      document.getElementById(
        'contato',
      )

    if (contact) {
      contact.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })

      window.history.replaceState(
        null,
        '',
        `${window.location.pathname}#contato`,
      )
    }
  }

  /*
   * As páginas de passeios estão dentro de:
   *
   * /[locale]/passeios/[slug]/
   *
   * Por isso, o português também precisa usar /pt/
   * para que o Next.js encontre a página corretamente.
   */
  const activeLocale =
    locale || defaultLocale

  const tourPath =
    `/${activeLocale}/passeios/${tour.slug}/`

  return (
    <article className="vem-ver-card group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

      <div className="relative aspect-[4/3] overflow-hidden bg-muted">

        <Image
          src={asset(tour.image)}
          alt={displayTour.imageAlt}
          fill
          loading="lazy"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {tour.originalPrice && (
          <div className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1.5 text-xs font-bold text-primary-foreground shadow-md">
            {content.specialOffer}
          </div>
        )}

      </div>

      <div className="flex flex-1 flex-col p-6">

        <div className="flex flex-1 flex-col gap-3">

          <h3 className="font-serif text-2xl font-semibold leading-tight text-balance">
            {displayTour.name}
          </h3>

          <p className="leading-relaxed text-muted-foreground">
            {displayTour.shortDescription}
          </p>

          {displayTour.duration && (
            <div className="flex items-center gap-2 pt-1 text-sm text-muted-foreground">

              <Clock
                className="size-4 shrink-0"
                aria-hidden="true"
              />

              <span>
                {displayTour.duration}
              </span>

            </div>
          )}

          <div className="mt-2 border-t border-border pt-4">

            {tour.originalPrice && (
              <div className="flex items-center gap-2 text-sm text-muted-foreground">

                <Info
                  className="size-4 shrink-0"
                  aria-hidden="true"
                />

                <span className="line-through">
                  <LocalizedPrice
                    amount={
                      tour.originalPrice
                    }
                    locale={
                      locale === 'pt'
                        ? 'pt-BR'
                        : locale
                    }
                  />
                </span>

              </div>
            )}

            <div className="mt-1 flex flex-wrap items-baseline gap-2">

              <span className="text-2xl font-bold text-primary">
                <LocalizedPrice
                  amount={tour.price}
                  locale={
                    locale === 'pt'
                      ? 'pt-BR'
                      : locale
                  }
                />
              </span>

              <span className="text-sm text-muted-foreground">
                {displayTour.priceInfo}
              </span>

            </div>

            {tour.originalPrice && (
              <p className="mt-1 text-sm font-medium text-primary">
                {content.specialCondition}
              </p>
            )}

          </div>

        </div>

        <div className="mt-5 flex flex-col gap-2">

          <button
            type="button"
            onClick={goToContact}
            aria-label={`${content.consultInformation} ${displayTour.name}`}
            className={ctaClass(
              'whatsapp',
              'w-full',
            )}
          >
            <WhatsAppIcon />
            {content.consultWhatsapp}
          </button>

          <Link
            href={tourPath}
            aria-label={`${content.viewDetails}: ${displayTour.name}`}
            className={ctaClass(
              'outline',
              'w-full',
            )}
          >
            {content.viewDetails}
          </Link>

        </div>

      </div>
    </article>
  )
}
