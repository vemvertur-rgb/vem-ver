import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Tours } from '@/components/tours'
import { Contact } from '@/components/contact'
import { HowItWorks } from '@/components/how-it-works'
import { Testimonials } from '@/components/testimonials'
import { Faq } from '@/components/faq'
import { Gallery } from '@/components/gallery'
import { StructuredData } from '@/components/structured-data'

import {
  isLocale,
  localeHtmlLang,
  type Locale,
} from '@/lib/i18n'

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  'https://vemvertur-rgb.github.io/vem-ver'

const metadataByLocale: Record<
  Exclude<Locale, 'pt'>,
  {
    title: string
    description: string
    locale: string
  }
> = {
  en: {
    title:
      'VEM VER Tourism | Tours in Lençóis Maranhenses',
    description:
      'Discover Lençóis Maranhenses with VEM VER Tourism. Explore lagoons, dunes, tours and unforgettable experiences in Maranhão, Brazil.',
    locale: 'en_US',
  },

  es: {
    title:
      'VEM VER Turismo | Paseos en los Lençóis Maranhenses',
    description:
      'Descubre los Lençóis Maranhenses con VEM VER Turismo. Explora lagunas, dunas, paseos y experiencias inolvidables en Maranhão, Brasil.',
    locale: 'es_ES',
  },

  fr: {
    title:
      'VEM VER Tourisme | Excursions aux Lençóis Maranhenses',
    description:
      'Découvrez les Lençóis Maranhenses avec VEM VER Tourisme. Explorez les lagunes, les dunes et des expériences inoubliables au Maranhão, Brésil.',
    locale: 'fr_FR',
  },

  it: {
    title:
      'VEM VER Turismo | Escursioni nei Lençóis Maranhenses',
    description:
      'Scopri i Lençóis Maranhenses con VEM VER Turismo. Esplora lagune, dune, escursioni ed esperienze indimenticabili nel Maranhão, Brasile.',
    locale: 'it_IT',
  },

  zh: {
    title:
      'VEM VER 旅游 | 巴西 Lençóis Maranhenses 旅游体验',
    description:
      '跟随 VEM VER 探索巴西马拉尼昂州的 Lençóis Maranhenses，体验白色沙丘、季节性湖泊和难忘的自然之旅。',
    locale: 'zh_CN',
  },

  ja: {
    title:
      'VEM VER ツーリズム | レンソイス・マラニャンセスのツアー',
    description:
      'VEM VERと一緒にブラジル・マラニョン州のレンソイス・マラニャンセスを訪れ、砂丘やラグーン、忘れられない自然体験を楽しみましょう。',
    locale: 'ja_JP',
  },
}

export function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'es' },
    { locale: 'fr' },
    { locale: 'it' },
    { locale: 'zh' },
    { locale: 'ja' },
  ]
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{
    locale: string
  }>
}): Promise<Metadata> {
  const { locale: localeParam } =
    await params

  if (
    !isLocale(localeParam) ||
    localeParam === 'pt'
  ) {
    return {}
  }

  const locale =
    localeParam as Exclude<Locale, 'pt'>

  const content =
    metadataByLocale[locale]

  const path = `/${locale}/`

  return {
    title: content.title,

    description:
      content.description,

    keywords: [
      'Lençóis Maranhenses',
      'Lençóis Maranhenses tours',
      'Maranhão tourism',
      'Barreirinhas',
      'Brazil tourism',
      'VEM VER Turismo',
    ],

    alternates: {
      canonical: path,

      languages: {
        'pt-BR': '/',
        en: '/en/',
        es: '/es/',
        fr: '/fr/',
        it: '/it/',
        'zh-CN': '/zh/',
        ja: '/ja/',
      },
    },

    openGraph: {
      type: 'website',
      locale: content.locale,
      siteName: 'VEM VER Turismo',
      title: content.title,
      description:
        content.description,
      url: `${siteUrl}${path}`,
    },

    robots: {
      index: true,
      follow: true,
    },
  }
}

export default async function LocalizedHomePage({
  params,
}: {
  params: Promise<{
    locale: string
  }>
}) {
  const { locale: localeParam } =
    await params

  if (
    !isLocale(localeParam) ||
    localeParam === 'pt'
  ) {
    notFound()
  }

  const locale =
    localeParam as Exclude<Locale, 'pt'>

  return (
    <>
      <StructuredData
        locale={locale}
      />

      <Hero />
      <About />
      <Tours />
      <Contact />
      <HowItWorks />
      <Testimonials />
      <Faq />
      <Gallery />
    </>
  )
}
