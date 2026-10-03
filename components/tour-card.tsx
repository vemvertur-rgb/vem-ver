'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Clock, Info } from 'lucide-react'

import {
  siteConfig,
  type Tour,
} from '@/lib/site-config'

import { asset } from '@/lib/links'

import {
  defaultLocale,
} from '@/lib/i18n'

import {
  getTourTranslation,
} from '@/lib/tour-translations'

import {
  WhatsAppIcon,
} from './brand-icons'

import {
  ctaClass,
} from './cta-link'

import {
  LocalizedPrice,
} from './localized-price'

import {
  useLocale,
} from './locale-provider'

type TourCardProps = {
  tour: Tour
}

const labels = {
  pt: {
    details: 'Ver detalhes',
    consult: 'Consultar pelo WhatsApp',
    shared: 'Compartilhado',
    private: 'Privativo',
    specialOffer: 'OFERTA ESPECIAL',
    specialCondition: 'Condição especial',
  },

  en: {
    details: 'View details',
    consult: 'Contact via WhatsApp',
    shared: 'Shared',
    private: 'Private',
    specialOffer: 'SPECIAL OFFER',
    specialCondition: 'Special condition',
  },

  es: {
    details: 'Ver detalles',
    consult: 'Consultar por WhatsApp',
    shared: 'Compartido',
    private: 'Privado',
    specialOffer: 'OFERTA ESPECIAL',
    specialCondition: 'Condición especial',
  },

  fr: {
    details: 'Voir les détails',
    consult: 'Consulter sur WhatsApp',
    shared: 'Partagé',
    private: 'Privatif',
    specialOffer: 'OFFRE SPÉCIALE',
    specialCondition: 'Condition spéciale',
  },

  it: {
    details: 'Vedi dettagli',
    consult: 'Contatta tramite WhatsApp',
    shared: 'Condiviso',
    private: 'Privato',
    specialOffer: 'OFFERTA SPECIALE',
    specialCondition: 'Condizione speciale',
  },

  zh: {
    details: '查看详情',
    consult: '通过 WhatsApp 咨询',
    shared: '共享',
    private: '私人',
    specialOffer: '特别优惠',
    specialCondition: '特别条件',
  },

  ja: {
    details: '詳細を見る',
    consult: 'WhatsAppで問い合わせる',
    shared: '共有',
    private: 'プライベート',
    specialOffer: '特別オファー',
    specialCondition: '特別条件',
  },
} as const

export function TourCard({
  tour,
}: TourCardProps) {
  const localeContext = useLocale()

  const activeLocale =
    localeContext.locale || defaultLocale

  const translation =
    getTourTranslation(
      tour.slug,
      activeLocale,
    )

  const title =
    translation?.name ||
    tour.name

  const description =
    translation?.shortDescription ||
    tour.shortDescription

  const duration =
    translation?.duration ||
    tour.duration

  const priceInfo =
    translation?.priceInfo ||
    tour.priceInfo

  const labelsForLocale =
    labels[activeLocale]

  const tourPath =
    activeLocale === defaultLocale
      ? `/passeios/${tour.slug}/`
      : `/${activeLocale}/passeios/${tour.slug}/`

  function goToContact() {
    const contact =
      document.getElementById('contato')

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

  return (
    <article className="vem-ver-card group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

      <div className="relative aspect-[4/3] overflow-hidden bg-muted">

        <Image
          src={asset(tour.image)}
          alt={
            translation?.imageAlt ||
            tour.imageAlt
          }
          fill
          loading="lazy"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {tour.originalPrice && (
          <div className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1.5 text-xs font-bold text-primary-foreground shadow-md">
            {labelsForLocale.specialOffer}
          </div>
        )}

      </div>

      <div className="flex flex-1 flex-col p-6">

        <div className="flex flex-1 flex-col gap-3">

          <div className="flex items-start justify-between gap-3">

            <h3 className="font-serif text-2xl font-semibold leading-tight text-balance">
              {title}
            </h3>

            <span className="shrink-0 rounded-full border border-border px-2.5 py-1 text-xs font-medium">
              {tour.type === 'privativo'
                ? labelsForLocale.private
                : labelsForLocale.shared}
            </span>

          </div>

          <p className="leading-relaxed text-muted-foreground">
            {description}
          </p>

          {duration && (
            <div className="flex items-center gap-2 pt-1 text-sm text-muted-foreground">

              <Clock
                className="size-4 shrink-0"
                aria-hidden="true"
              />

              <span>
                {duration}
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
                    amount={tour.originalPrice}
                    locale={
                      activeLocale === 'pt'
                        ? 'pt-BR'
                        : activeLocale
                    }
                  />
                </span>

              </div>
            )}

            <div className="mt-1 flex flex-wrap items-baseline gap-2">

              <span className="text-2xl font-bold text-primary">

                <LocalizedPrice
                  amount={
                    tour.price ||
                    siteConfig.fallbackPrice
                      ? tour.price
                      : 0
                  }
                  locale={
                    activeLocale === 'pt'
                      ? 'pt-BR'
                      : activeLocale
                  }
                />

              </span>

              <span className="text-sm text-muted-foreground">
                {priceInfo}
              </span>

            </div>

            {tour.originalPrice && (
              <p className="mt-1 text-sm font-medium text-primary">
                {labelsForLocale.specialCondition}
              </p>
            )}

          </div>

        </div>

        <div className="mt-5 flex flex-col gap-2">

          <button
            type="button"
            onClick={goToContact}
            aria-label={`${labelsForLocale.consult}: ${title}`}
            className={ctaClass(
              'whatsapp',
              'w-full',
            )}
          >
            <WhatsAppIcon />
            {labelsForLocale.consult}
          </button>

          <Link
            href={tourPath}
            aria-label={`${labelsForLocale.details}: ${title}`}
            className={ctaClass(
              'outline',
              'w-full',
            )}
          >
            <Info className="size-4" />
            {labelsForLocale.details}
          </Link>

        </div>

      </div>

    </article>
  )
}
