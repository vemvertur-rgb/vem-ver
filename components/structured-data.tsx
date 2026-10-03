import {
  siteConfig,
  type Tour,
} from '@/lib/site-config'

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  'https://vemvertur-rgb.github.io/vem-ver'

type StructuredDataProps = {
  tour?: Tour
}

export function StructuredData({
  tour,
}: StructuredDataProps) {
  const organization = {
    '@type': 'TravelAgency',
    '@id': `${siteUrl}/#organization`,
    name: siteConfig.name,
    alternateName: 'VEM VER Turismo',
    url: siteUrl,
    logo: `${siteUrl}/images/logo-vemver.png`,
    description:
      'Agência de turismo especializada em passeios e experiências nos Lençóis Maranhenses.',
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
      'Destino turístico no Maranhão conhecido por suas dunas de areia branca, lagoas sazonais e paisagens naturais.',
    containedInPlace: {
      '@type': 'AdministrativeArea',
      name: 'Maranhão',
    },
  }

  const tourData = tour
    ? {
        '@type': 'TouristTrip',
        '@id': `${siteUrl}/passeios/${tour.slug}/#tour`,
        name: tour.name,
        description: tour.description,
        url: `${siteUrl}/passeios/${tour.slug}/`,
        image: `${siteUrl}${tour.image}`,
        touristType:
          tour.type === 'privativo'
            ? 'Experiência privativa'
            : 'Passeio compartilhado',
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

  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      organization,
      destination,
      ...(tourData ? [tourData] : []),
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  )
}
