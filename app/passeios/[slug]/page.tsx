import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  ArrowLeft,
  CalendarClock,
  Clock,
  Tag,
} from 'lucide-react'

import {
  siteConfig,
  tours,
  privateExperiences,
} from '@/lib/site-config'

import {
  asset,
  tourWhatsappMessage,
  whatsappLink,
} from '@/lib/links'

import {
  defaultLocale,
  isLocale,
  localeHtmlLang,
  type Locale,
} from '@/lib/i18n'

import { StructuredData } from '@/components/structured-data'
import { WhatsAppIcon } from '@/components/brand-icons'
import { CtaLink } from '@/components/cta-link'
import { TourCard } from '@/components/tour-card'
import { LocalizedPrice } from '@/components/localized-price'

export const dynamicParams = false

const allTours = [
  ...tours,
  ...privateExperiences,
]

type PageParams = {
  locale: string
  slug: string
}

type LocalizedTourContent = {
  type: string
  back: string
  price: string
  duration: string
  schedule: string
  highlights: string
  whatsapp: string
  whatsappDescription: string
  moreExperiences: string
  otherTours: string
  otherToursDescription: string
}

const contentByLocale: Record<
  Locale,
  LocalizedTourContent
> = {
  pt: {
    type: 'Passeio',
    back: 'Voltar para os passeios',
    price: 'Valor',
    duration: 'Duração',
    schedule: 'Horário e disponibilidade',
    highlights: 'Destaques',
    whatsapp: 'Consultar pelo WhatsApp',
    whatsappDescription:
      'Consulte disponibilidade, condições e detalhes diretamente com a Vem Ver.',
    moreExperiences: 'Mais experiências',
    otherTours: 'Conheça outros passeios',
    otherToursDescription:
      'Encontre outras experiências para aproveitar os Lençóis Maranhenses.',
  },

  en: {
    type: 'Tour',
    back: 'Back to tours',
    price: 'Price',
    duration: 'Duration',
    schedule: 'Schedule and availability',
    highlights: 'Highlights',
    whatsapp: 'Ask via WhatsApp',
    whatsappDescription:
      'Check availability, conditions and details directly with Vem Ver.',
    moreExperiences: 'More experiences',
    otherTours: 'Discover other tours',
    otherToursDescription:
      'Find other experiences to enjoy in Lençóis Maranhenses.',
  },

  es: {
    type: 'Paseo',
    back: 'Volver a los paseos',
    price: 'Precio',
    duration: 'Duración',
    schedule: 'Horario y disponibilidad',
    highlights: 'Destacados',
    whatsapp: 'Consultar por WhatsApp',
    whatsappDescription:
      'Consulta disponibilidad, condiciones y detalles directamente con Vem Ver.',
    moreExperiences: 'Más experiencias',
    otherTours: 'Conoce otros paseos',
    otherToursDescription:
      'Encuentra otras experiencias para disfrutar de los Lençóis Maranhenses.',
  },

  fr: {
    type: 'Excursion',
    back: 'Retour aux excursions',
    price: 'Prix',
    duration: 'Durée',
    schedule: 'Horaires et disponibilité',
    highlights: 'Points forts',
    whatsapp: 'Consulter sur WhatsApp',
    whatsappDescription:
      'Consultez les disponibilités, conditions et détails directement avec Vem Ver.',
    moreExperiences: 'Plus d’expériences',
    otherTours: 'Découvrez d’autres excursions',
    otherToursDescription:
      'Découvrez d’autres expériences pour profiter des Lençóis Maranhenses.',
  },

  it: {
    type: 'Escursione',
    back: 'Torna alle escursioni',
    price: 'Prezzo',
    duration: 'Durata',
    schedule: 'Orari e disponibilità',
    highlights: 'Punti salienti',
    whatsapp: 'Consulta su WhatsApp',
    whatsappDescription:
      'Consulta disponibilità, condizioni e dettagli direttamente con Vem Ver.',
    moreExperiences: 'Altre esperienze',
    otherTours: 'Scopri altre escursioni',
    otherToursDescription:
      'Trova altre esperienze per vivere i Lençóis Maranhenses.',
  },

  zh: {
    type: '游览项目',
    back: '返回游览项目',
    price: '价格',
    duration: '时长',
    schedule: '时间与可用情况',
    highlights: '亮点',
    whatsapp: '通过 WhatsApp 咨询',
    whatsappDescription:
      '可直接联系 Vem Ver 查询可用日期、条件和详细信息。',
    moreExperiences: '更多体验',
    otherTours: '探索其他游览项目',
    otherToursDescription:
      '发现更多体验，享受 Lençóis Maranhenses 的自然风光。',
  },

  ja: {
    type: 'ツアー',
    back: 'ツアー一覧に戻る',
    price: '料金',
    duration: '所要時間',
    schedule: '時間・空き状況',
    highlights: '見どころ',
    whatsapp: 'WhatsAppで問い合わせる',
    whatsappDescription:
      '空き状況、条件、詳細について Vem Ver に直接お問い合わせください。',
    moreExperiences: 'その他の体験',
    otherTours: 'その他のツアーを見る',
    otherToursDescription:
      'レンソイス・マラニャンセスを楽しめる、その他の体験をご覧ください。',
  },
}

function getLocalizedPath(
  locale: Locale,
  path: string,
): string {
  if (locale === defaultLocale) {
    return path
  }

  if (path === '/') {
    return `/${locale}/`
  }

  return `/${locale}${path}`
}

export function generateStaticParams() {
  return localesAndTours()
}

function localesAndTours() {
  const params: PageParams[] = []

  const supportedLocales = [
    'en',
    'es',
    'fr',
    'it',
    'zh',
    'ja',
  ] as const

  for (const locale of supportedLocales) {
    for (const tour of allTours) {
      params.push({
        locale,
        slug: tour.slug,
      })
    }
  }

  return params
}

export async function generateMetadata({
  params,
}: {
  params: Promise<PageParams>
}): Promise<Metadata> {
  const { locale: localeParam, slug } =
    await params

  const locale: Locale = isLocale(
    localeParam,
  )
    ? localeParam
    : defaultLocale

  const tour = allTours.find(
    (item) => item.slug === slug,
  )

  if (!tour) {
    return {}
  }

  const pageTitle = `${tour.name} | Vem Ver Turismo`

  const pageDescription =
    tour.shortDescription

  const localizedPath =
    getLocalizedPath(
      locale,
      `/passeios/${tour.slug}/`,
    )

  const htmlLang =
    localeHtmlLang[locale]

  return {
    title: pageTitle,

    description: pageDescription,

    keywords: [
      tour.name,
      'Lençóis Maranhenses',
      'passeios Lençóis Maranhenses',
      'turismo Maranhão',
      'turismo Barreirinhas',
      'passeios em Barreirinhas',
      'Vem Ver Turismo',
    ],

    alternates: {
      canonical: localizedPath,
      languages: {
        'pt-BR': `/passeios/${tour.slug}/`,
        en: `/en/passeios/${tour.slug}/`,
        es: `/es/passeios/${tour.slug}/`,
        fr: `/fr/passeios/${tour.slug}/`,
        it: `/it/passeios/${tour.slug}/`,
        'zh-CN': `/zh/passeios/${tour.slug}/`,
        ja: `/ja/passeios/${tour.slug}/`,
      },
    },

    openGraph: {
      type: 'website',
      locale:
        htmlLang.replace('-', '_'),
      siteName: 'VEM VER Turismo',
      title: pageTitle,
      description: pageDescription,
      url: localizedPath,
      images: [
        {
          url: asset(tour.image),
          width: 1200,
          height: 900,
          alt: tour.imageAlt,
        },
      ],
    },

    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      images: [
        asset(tour.image),
      ],
    },

    robots: {
      index: true,
      follow: true,
    },
  }
}

export default async function LocalizedTourPage({
  params,
}: {
  params: Promise<PageParams>
}) {
  const {
    locale: localeParam,
    slug,
  } = await params

  if (!isLocale(localeParam)) {
    notFound()
  }

  const locale = localeParam

  const tour = allTours.find(
    (item) => item.slug === slug,
  )

  if (!tour) {
    notFound()
  }

  const content =
    contentByLocale[locale]

  const info = [
    {
      icon: Tag,
      label: content.price,
      value: tour.price,
    },
    {
      icon: Clock,
      label: content.duration,
      value:
        tour.duration ||
        siteConfig.fallbackInfo,
    },
    {
      icon: CalendarClock,
      label: content.schedule,
      value:
        tour.schedule ||
        siteConfig.fallbackInfo,
    },
  ]

  const others = tours
    .filter(
      (item) => item.slug !== tour.slug,
    )
    .slice(0, 3)

  const localizedHomePath =
    getLocalizedPath(locale, '/')

  const localizedToursPath =
    getLocalizedPath(
      locale,
      '/#passeios',
    )

  return (
    <>
      <StructuredData
        tour={tour}
        locale={locale}
      />

      <article className="bg-background px-4 pb-16 pt-8 md:px-6 md:pb-24 md:pt-12">
        <div className="mx-auto max-w-6xl">

          <nav
            aria-label="Navegação estrutural"
            className="vem-ver-fade-left mb-8"
          >
            <Link
              href={localizedToursPath}
              className="inline-flex min-h-11 items-center gap-2 rounded-full px-3 font-medium text-primary transition-all duration-200 hover:translate-x-1 hover:bg-primary/5 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <ArrowLeft
                className="size-4"
                aria-hidden="true"
              />

              {content.back}
            </Link>
          </nav>

          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">

            <div className="vem-ver-fade-left relative aspect-[4/3] overflow-hidden rounded-3xl bg-muted shadow-sm">
              <Image
                src={asset(tour.image)}
                alt={tour.imageAlt}
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            <div className="vem-ver-fade-right flex flex-col">

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                  {tour.type === 'privativo'
                    ? content.moreExperiences
                    : content.type}
                </p>

                <h1 className="mt-3 font-serif text-4xl font-semibold leading-tight text-balance md:text-5xl">
                  {tour.name}
                </h1>

                <p className="mt-5 whitespace-pre-line text-lg leading-relaxed text-muted-foreground text-pretty">
                  {tour.description}
                </p>
              </div>

              <dl className="mt-8 grid gap-3">

                {info.map(
                  ({
                    icon: Icon,
                    label,
                    value,
                  }) => (
                    <div
                      key={label}
                      className="vem-ver-card flex items-start gap-4 rounded-2xl border border-border bg-sand p-4"
                    >
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 hover:scale-105">
                        <Icon
                          className="size-5"
                          aria-hidden="true"
                        />
                      </div>

                      <div className="min-w-0">

                        <dt className="text-sm text-muted-foreground">
                          {label}
                        </dt>

                        <dd className="mt-1 font-semibold">
                          {label ===
                          content.price ? (
                            <LocalizedPrice
                              amount={
                                value as number
                              }
                              locale={
                                localeHtmlLang[
                                  locale
                                ]
                              }
                            />
                          ) : (
                            value
                          )}
                        </dd>

                        {label ===
                          content.price &&
                          tour.priceInfo && (
                            <p className="mt-1 text-sm text-muted-foreground">
                              {
                                tour.priceInfo
                              }
                            </p>
                          )}

                      </div>
                    </div>
                  ),
                )}

              </dl>

              {tour.highlights.length > 0 && (
                <div className="vem-ver-fade-up mt-8">

                  <h2 className="text-lg font-semibold">
                    {content.highlights}
                  </h2>

                  <ul className="mt-3 list-inside list-disc space-y-2 text-muted-foreground">
                    {tour.highlights.map(
                      (highlight) => (
                        <li key={highlight}>
                          {highlight}
                        </li>
                      ),
                    )}
                  </ul>

                </div>
              )}

              <div className="vem-ver-fade-up mt-8">

                <CtaLink
                  href={whatsappLink(
                    tourWhatsappMessage(
                      tour.name,
                    ),
                  )}
                  external
                  variant="whatsapp"
                  className="vem-ver-button w-full sm:w-fit"
                  ariaLabel={`${content.whatsapp}: ${tour.name}`}
                >
                  <WhatsAppIcon />
                  {content.whatsapp}
                </CtaLink>

                <p className="mt-3 text-sm text-muted-foreground">
                  {
                    content.whatsappDescription
                  }
                </p>

              </div>

            </div>
          </div>
        </div>
      </article>

      <section
        aria-labelledby="outros-title"
        className="bg-sand px-4 py-16 md:px-6 md:py-24"
      >
        <div className="mx-auto max-w-6xl">

          <div className="vem-ver-fade-up max-w-2xl">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              {
                content.moreExperiences
              }
            </p>

            <h2
              id="outros-title"
              className="mt-3 font-serif text-3xl font-semibold leading-tight md:text-4xl"
            >
              {content.otherTours}
            </h2>

            <p className="mt-3 text-lg leading-relaxed text-muted-foreground">
              {
                content.otherToursDescription
              }
            </p>

          </div>

          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {others.map((item, index) => (
              <li
                key={item.slug}
                className="vem-ver-float-in flex"
                style={{
                  animationDelay: `${index * 120}ms`,
                }}
              >
                <TourCard tour={item} />
              </li>
            ))}

          </ul>
        </div>
      </section>
    </>
  )
}
