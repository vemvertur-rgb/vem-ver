import { siteConfig, tours, privateExperiences } from '@/lib/site-config'

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  'https://vemvertur-rgb.github.io/vem-ver'

const allTours = [...tours, ...privateExperiences]

export function StructuredData() {
  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'TravelAgency',
        '@id': `${siteUrl}/#organization`,
        name: siteConfig.name,
        url: siteUrl,
        description:
          'Agência de turismo especializada em experiências e passeios nos Lençóis Maranhenses.',
        email: siteConfig.email,
        telephone: `+${siteConfig.whatsappNumber}`,
        areaServed: {
          '@type': 'Place',
          name: 'Lençóis Maranhenses, Maranhão, Brasil',
        },
        sameAs: [
          siteConfig.instagramUrl,
        ],
      },

      {
        '@type': 'TouristDestination',
        '@id': `${siteUrl}/#destination`,
        name: 'Lençóis Maranhenses',
        description:
          'Destino turístico conhecido por suas dunas de areia branca e lagoas sazonais no Maranhão, Brasil.',
        containedInPlace: {
          '@type': 'AdministrativeArea',
          name: 'Maranhão',
        },
      },

      ...allTours.map((tour) => ({
        '@type': 'TouristTrip',
        '@id': `${siteUrl}/passeios/${tour.slug}/#tour`,
        name: tour.name,
        description: tour.shortDescription,
        url: `${siteUrl}/passeios/${tour.slug}/`,
        touristType:
          tour.type === 'privativo'
            ? 'Experiência privativa'
            : 'Passeio compartilhado',
        itinerary: {
          '@type': 'TouristDestination',
          name: 'Lençóis Maranhenses',
        },
      })),
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
