import { privateExperiences, tours } from '@/lib/site-config'
import { SectionHeading } from './section-heading'
import { TourCard } from './tour-card'

export function Tours() {
  return (
    <>
      <section
        id="passeios"
        aria-labelledby="passeios-title"
        className="bg-sand px-4 py-20 md:px-6 md:py-28"
      >
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            id="passeios-title"
            eyebrow="Passeios"
            title="Escolha sua próxima aventura"
            description="Conheça algumas das experiências nos Lençóis Maranhenses e fale com a VEM VER Turismo para consultar valores e disponibilidade."
          />

          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {tours.map((tour) => (
              <li key={tour.slug} className="flex">
                <TourCard tour={tour} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        id="privativos"
        aria-labelledby="privativos-title"
        className="bg-background px-4 py-20 md:px-6 md:py-28"
      >
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            id="privativos-title"
            eyebrow="Experiências privativas"
            title="Momentos especiais nos Lençóis"
            description="Viva experiências exclusivas e aproveite os Lençóis Maranhenses de uma forma ainda mais especial."
          />

          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {privateExperiences.map((tour) => (
              <li key={tour.slug} className="flex">
                <TourCard tour={tour} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
