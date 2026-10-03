import {
  siteConfig,
  type Tour,
} from '@/lib/site-config'

import {
  defaultLocale,
  type Locale,
} from '@/lib/i18n'

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  'https://vemvertur-rgb.github.io/vem-ver'

type StructuredDataProps = {
  tour?: Tour
  locale?: Locale
}

const structuredContent: Record<
  Locale,
  {
    organizationDescription: string
    destinationDescription: string
    privateExperience: string
    sharedTour: string
    home: string
    privateExperiences: string
    tours: string
  }
> = {
  pt: {
    organizationDescription:
      'Agência de turismo especializada em passeios e experiências nos Lençóis Maranhenses.',
    destinationDescription:
      'Destino turístico no Maranhão conhecido por suas dunas de areia branca, lagoas sazonais e paisagens naturais.',
    privateExperience:
      'Experiência privativa',
    sharedTour:
      'Passeio compartilhado',
    home: 'Início',
    privateExperiences:
      'Experiências privativas',
    tours: 'Passeios',
  },

  en: {
    organizationDescription:
      'Tourism agency specializing in tours and experiences in Lençóis Maranhenses.',
    destinationDescription:
      'Tourist destination in Maranhão known for its white sand dunes, seasonal lagoons and natural landscapes.',
    privateExperience:
      'Private experience',
    sharedTour:
      'Shared tour',
    home: 'Home',
    privateExperiences:
      'Private experiences',
    tours: 'Tours',
  },

  es: {
    organizationDescription:
      'Agencia de turismo especializada en paseos y experiencias en los Lençóis Maranhenses.',
    destinationDescription:
      'Destino turístico de Maranhão conocido por sus dunas de arena blanca, lagunas estacionales y paisajes naturales.',
    privateExperience:
      'Experiencia privada',
    sharedTour:
      'Paseo compartido',
    home: 'Inicio',
    privateExperiences:
      'Experiencias privadas',
    tours: 'Paseos',
  },

  fr: {
    organizationDescription:
      'Agence de tourisme spécialisée dans les excursions et expériences aux Lençóis Maranhenses.',
    destinationDescription:
      'Destination touristique du Maranhão connue pour ses dunes de sable blanc, ses lagunes saisonnières et ses paysages naturels.',
    privateExperience:
      'Expérience privée',
    sharedTour:
      'Excursion partagée',
    home: 'Accueil',
    privateExperiences:
      'Expériences privées',
    tours: 'Excursions',
  },

  it: {
    organizationDescription:
      'Agenzia turistica specializzata in escursioni ed esperienze nei Lençóis Maranhenses.',
    destinationDescription:
      'Destinazione turistica del Maranhão conosciuta per le sue dune di sabbia bianca, lagune stagionali e paesaggi naturali.',
    privateExperience:
      'Esperienza privata',
    sharedTour:
      'Escursione condivisa',
    home: 'Home',
    privateExperiences:
      'Esperienze private',
    tours: 'Escursioni',
  },

  zh: {
    organizationDescription:
      '专注于 Lençóis Maranhenses 旅游线路和特色体验的旅行机构。',
    destinationDescription:
      '巴西马拉尼昂州的旅游目的地，以白色沙丘、季节性湖泊和自然景观而闻名。',
    privateExperience:
      '私人体验',
    sharedTour:
      '共享游览',
    home: '首页',
    privateExperiences:
      '私人体验',
    tours: '游览项目',
  },

  ja: {
    organizationDescription:
      'レンソイス・マラニャンセスのツアーや体験を専門とする旅行会社です。',
    destinationDescription:
      '白い砂丘、季節によって現れるラグーン、美しい自然景観で知られるブラジル・マラニョン州の観光地です。',
    privateExperience:
      'プライベート体験',
    sharedTour:
      'シェアツアー',
    home: 'ホーム',
    privateExperiences:
      'プライベート体験',
    tours: 'ツアー',
  },
}

function getLocalizedPath(
  locale: Locale,
  path = '/',
) {
  if (locale === defaultLocale) {
    return path
  }

  if (path === '/') {
    return `/${locale}/`
  }

  return `/${locale}${path}`
}

export function StructuredData({
  tour,
  locale = defaultLocale,
}: StructuredDataProps) {
  const content =
    structuredContent[locale]

  const localizedHomeUrl =
    `${siteUrl}${getLocalizedPath(locale)}`

  const localizedTourPath = tour
    ? getLocalizedPath(
        locale,
        `/passeios/${tour.slug}/`,
      )
    : null

  const organization = {
    '@type': 'TravelAgency',
    '@id': `${siteUrl}/#organization`,
    name: siteConfig.name,
    alternateName: 'VEM VER Turismo',
    url: localizedHomeUrl,
    logo: `${siteUrl}/images/logo-vemver.png`,
    description:
      content.organizationDescription,
    email: siteConfig.email,
    telephone: `+${siteConfig.whatsappNumber}`,
    areaServed: {
      '@type': 'Place',
      name: 'Lençóis Maranhenses, Maranhão, Brasil',
    },
    sameAs: [
      siteConfig.instagramUrl,
    ],
  }

  const destination = {
    '@type': 'TouristDestination',
    '@id': `${siteUrl}/#destination`,
    name: 'Lençóis Maranhenses',
    description:
      content.destinationDescription,
    containedInPlace: {
      '@type': 'AdministrativeArea',
      name: 'Maranhão',
    },
  }

  const tourData =
    tour && localizedTourPath
      ? {
          '@type': 'TouristTrip',
          '@id': `${siteUrl}${localizedTourPath}#tour`,
          name: tour.name,
          description: tour.description,
          url: `${siteUrl}${localizedTourPath}`,
          image: `${siteUrl}${tour.image}`,
          touristType:
            tour.type === 'privativo'
              ? content.privateExperience
              : content.sharedTour,
          itinerary: {
            '@type': 'TouristDestination',
            name: 'Lençóis Maranhenses',
          },
          provider: {
            '@id': `${siteUrl}/#organization`,
          },
          duration: tour.duration,
        }
      : null

  const breadcrumbData =
    tour && localizedTourPath
      ? {
          '@type': 'BreadcrumbList',
          '@id': `${siteUrl}${localizedTourPath}#breadcrumb`,
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: content.home,
              item: localizedHomeUrl,
            },
            {
              '@type': 'ListItem',
              position: 2,
              name:
                tour.type ===
                'privativo'
                  ? content.privateExperiences
                  : content.tours,
              item:
                tour.type ===
                'privativo'
                  ? `${siteUrl}${getLocalizedPath(
                      locale,
                      '/#privativos',
                    )}`
                  : `${siteUrl}${getLocalizedPath(
                      locale,
                      '/#passeios',
                    )}`,
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: tour.name,
            },
          ],
        }
      : null

  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      organization,
      destination,
      ...(tourData
        ? [tourData]
        : []),
      ...(breadcrumbData
        ? [breadcrumbData]
        : []),
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(
          data,
        ),
      }}
    />
  )
}
