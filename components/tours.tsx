import { privateExperiences, tours } from '@/lib/site-config'
import { SectionHeading } from './section-heading'
import { TourCard } from './tour-card'

export function Tours() {
  return (
    <>
      {/* =====================================================
          PASSEIOS
      ===================================================== */}
      <section
        id="passeios"
        aria-labelledby="passeios-title"
        className="bg-sand px-4 py-20 md:px-6 md:py-28"
      >
        <div className="mx-auto max-w-6xl">

          {/* Título */}
          <div className="vem-ver-fade-up">
            <SectionHeading
              id="passeios-title"
              eyebrow="Nossos passeios"
              title="Escolha sua próxima aventura"
              description="Explore dunas, lagoas, rios e paisagens incríveis dos Lençóis Maranhenses. Escolha seu passeio e fale com a Vem Ver para consultar disponibilidade."
            />
          </div>

          {/* Passeios */}
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {tours.map((tour, index) => (
              <li
                key={tour.slug}
                className="vem-ver-float-in flex"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <TourCard tour={tour} />
              </li>
            ))}
          </ul>

        </div>
      </section>

      {/* =====================================================
          EXPERIÊNCIAS PRIVATIVAS
      ===================================================== */}
      <section
        id="privativos"
        aria-labelledby="privativos-title"
        className="bg-background px-4 py-20 md:px-6 md:py-28"
      >
        <div className="mx-auto max-w-6xl">

          {/* Título */}
          <div className="vem-ver-fade-up">
            <SectionHeading
              id="privativos-title"
              eyebrow="Experiências privativas"
              title="Viva os Lençóis do seu jeito"
              description="Experiências pensadas para quem busca mais exclusividade, tranquilidade e momentos especiais durante a viagem."
            />
          </div>

          {/* Experiências privativas */}
          <ul className="mt-12 grid gap-6 md:grid-cols-2">
            {privateExperiences.map((tour, index) => (
              <li
                key={tour.slug}
                className="vem-ver-float-in flex"
                style={{
                  animationDelay: `${index * 140}ms`,
                }}
              >
                <TourCard tour={tour} />
              </li>
            ))}
          </ul>

        </div>
      </section>
    </>
  )
}
