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
  localeHtmlLang,
} from '@/lib/i18n'

import {
  getTourTranslation,
} from '@/lib/tour-translations'

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
  slug: string
}

export function generateStaticParams() {
  return allTours.map((tour) => ({
    slug: tour.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<PageParams>
}): Promise<Metadata> {
  const { slug } = await params

  const tour = allTours.find(
    (item) => item.slug === slug,
  )

  if (!tour) {
    return {}
  }

  const localizedTour =
    getTourTranslation(
      tour.slug,
      defaultLocale,
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

  const pageTitle =
    `${displayTour.name} | Vem Ver Turismo`

  const pageDescription =
    displayTour.shortDescription

  const canonicalPath =
    `/passeios/${tour.slug}/`

  return {
    title: pageTitle,

    description:
      pageDescription,

    keywords: [
      displayTour.name,
      'Lençóis Maranhenses',
      'Lençóis Maranhenses tours',
      'Maranhão tourism',
      'Barreirinhas',
      'Brazil tourism',
      'Vem Ver Turismo',
    ],

    alternates: {
      canonical: canonicalPath,
    },

    openGraph: {
      type: 'website',
      locale:
        localeHtmlLang[
          defaultLocale
        ].replace('-', '_'),
      siteName: 'VEM VER Turismo',
      title: pageTitle,
      description:
        pageDescription,
      url: canonicalPath,
      images: [
        {
          url: asset(tour.image),
          width: 1200,
          height: 900,
          alt: displayTour.imageAlt,
        },
      ],
    },

    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description:
        pageDescription,
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

export default async function TourPage({
  params,
}: {
  params: Promise<PageParams>
}) {
  const { slug } = await params

  const tour = allTours.find(
    (item) => item.slug === slug,
  )

  if (!tour) {
    notFound()
  }

  const locale = defaultLocale

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

  const info = [
    {
      icon: Tag,
      label: 'Valor',
      value: tour.price,
    },
    {
      icon: Clock,
      label: 'Duração',
      value:
        displayTour.duration ||
        siteConfig.fallbackInfo,
    },
    {
      icon: CalendarClock,
      label: 'Horário e disponibilidade',
      value:
        displayTour.schedule ||
        siteConfig.fallbackInfo,
    },
  ]

  const others = allTours
    .filter(
      (item) => item.slug !== tour.slug,
    )
    .slice(0, 3)

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
              href="/#passeios"
              className="inline-flex min-h-11 items-center gap-2 rounded-full px-3 font-medium text-primary transition-all duration-200 hover:translate-x-1 hover:bg-primary/5 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <ArrowLeft
                className="size-4"
                aria-hidden="true"
              />

              Voltar para os passeios
            </Link>
          </nav>

          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">

            <div className="vem-ver-fade-left relative aspect-[4/3] overflow-hidden rounded-3xl bg-muted shadow-sm">
              <Image
                src={asset(tour.image)}
                alt={displayTour.imageAlt}
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
                    ? 'Mais experiências'
                    : 'Passeio'}
                </p>

                <h1 className="mt-3 font-serif text-4xl font-semibold leading-tight text-balance md:text-5xl">
                  {displayTour.name}
                </h1>

                <p className="mt-5 whitespace-pre-line text-lg leading-relaxed text-muted-foreground text-pretty">
                  {displayTour.description}
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

                          {label === 'Valor' ? (
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

                        {label === 'Valor' &&
                          displayTour.priceInfo && (
                            <p className="mt-1 text-sm text-muted-foreground">
                              {
                                displayTour.priceInfo
                              }
                            </p>
                          )}

                      </div>

                    </div>
                  ),
                )}

              </dl>

              {displayTour.highlights.length >
                0 && (
                <div className="vem-ver-fade-up mt-8">

                  <h2 className="text-lg font-semibold">
                    Destaques
                  </h2>

                  <ul className="mt-3 list-inside list-disc space-y-2 text-muted-foreground">
                    {displayTour.highlights.map(
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
                      displayTour.name,
                    ),
                  )}
                  external
                  variant="whatsapp"
                  className="vem-ver-button w-full sm:w-fit"
                  ariaLabel={`Consultar pelo WhatsApp: ${displayTour.name}`}
                >
                  <WhatsAppIcon />
                  Consultar pelo WhatsApp
                </CtaLink>

                <p className="mt-3 text-sm text-muted-foreground">
                  Consulte disponibilidade, condições e detalhes diretamente com a Vem Ver.
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
              Mais experiências
            </p>

            <h2
              id="outros-title"
              className="mt-3 font-serif text-3xl font-semibold leading-tight md:text-4xl"
            >
              Conheça outros passeios
            </h2>

            <p className="mt-3 text-lg leading-relaxed text-muted-foreground">
              Encontre outras experiências para aproveitar os Lençóis Maranhenses.
            </p>

          </div>

          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {others.map(
              (item, index) => (
                <li
                  key={item.slug}
                  className="vem-ver-float-in flex"
                  style={{
                    animationDelay:
                      `${index * 120}ms`,
                  }}
                >
                  <TourCard
                    tour={item}
                  />
                </li>
              ),
            )}

          </ul>

        </div>
      </section>
    </>
  )
}
