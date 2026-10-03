'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Clock, Info } from 'lucide-react'

import type { Tour } from '@/lib/site-config'
import { asset } from '@/lib/links'
import {
  defaultLocale,
} from '@/lib/i18n'
import {
  getTourTranslation,
} from '@/lib/tour-translations'
import {
  WhatsAppIcon,
} from '@/components/brand-icons'
import {
  ctaClass,
} from '@/components/cta-link'
import {
  LocalizedPrice,
} from '@/components/localized-price'
import {
  useLocale,
} from '@/components/locale-provider'

type TourCardProps = {
  tour: Tour
}

const labels = {
  pt: {
    details: 'Ver detalhes',
    book: 'Reservar',
    shared: 'Compartilhado',
    private: 'Privativo',
  },

  en: {
    details: 'View details',
    book: 'Book',
    shared: 'Shared',
    private: 'Private',
  },

  es: {
    details: 'Ver detalles',
    book: 'Reservar',
    shared: 'Compartido',
    private: 'Privado',
  },

  fr: {
    details: 'Voir les détails',
    book: 'Réserver',
    shared: 'Partagé',
    private: 'Privé',
  },

  it: {
    details: 'Vedi dettagli',
    book: 'Prenota',
    shared: 'Condiviso',
    private: 'Privato',
  },

  zh: {
    details: '查看详情',
    book: '预订',
    shared: '拼团',
    private: '私人',
  },

  ja: {
    details: '詳細を見る',
    book: '予約する',
    shared: '乗り合い',
    private: 'プライベート',
  },
} as const

export function TourCard({
  tour,
}: TourCardProps) {
  const locale = useLocale()

  const activeLocale =
    locale || defaultLocale

  const translation =
    getTourTranslation(
      tour.slug,
      activeLocale,
    )

  const title =
    translation.title ||
    tour.title

  const description =
    translation.description ||
    tour.description

  const duration =
    translation.duration ||
    tour.duration

  /*
   * IMPORTANTE:
   *
   * Português usa a rota original:
   * /passeios/slug/
   *
   * Os outros idiomas usam:
   * /en/passeios/slug/
   * /es/passeios/slug/
   * etc.
   */
  const tourPath =
    activeLocale === defaultLocale
      ? `/passeios/${tour.slug}/`
      : `/${activeLocale}/passeios/${tour.slug}/`

  const label =
    tour.type === 'private'
      ? labels[activeLocale].private
      : labels[activeLocale].shared

  return (
    <article className="group overflow-hidden rounded-2xl border bg-card shadow-sm transition-shadow hover:shadow-md">
      <Link
        href={tourPath}
        className="block"
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-muted">
          <Image
            src={asset(tour.image)}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </Link>

      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-xl font-bold tracking-tight">
              {title}
            </h3>

            {duration && (
              <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>
                  {duration}
                </span>
              </div>
            )}
          </div>

          <span className="shrink-0 rounded-full border px-2.5 py-1 text-xs font-medium">
            {label}
          </span>
        </div>

        <p className="mt-4 line-clamp-4 text-sm leading-6 text-muted-foreground">
          {description}
        </p>

        <div className="mt-5">
          <LocalizedPrice
            tour={tour}
            locale={activeLocale}
          />
        </div>

        <div className="mt-5 flex flex-col gap-2 sm:flex-row">
          <Link
            href={tourPath}
            className={`${ctaClass} flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-3 text-center text-sm font-semibold`}
          >
            <Info className="h-4 w-4" />
            {labels[activeLocale].details}
          </Link>

          <Link
            href={`https://wa.me/5598985698375?text=${encodeURIComponent(
              `Olá! Vim pelo site da Vem Ver e gostaria de reservar o passeio "${title}".`,
            )}`}
            className="flex flex-1 items-center justify-center gap-2 rounded-xl border px-4 py-3 text-center text-sm font-semibold transition-colors hover:bg-muted"
          >
            <WhatsAppIcon className="h-4 w-4" />
            {labels[activeLocale].book}
          </Link>
        </div>
      </div>
    </article>
  )
}
