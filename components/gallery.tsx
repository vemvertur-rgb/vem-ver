import Image from 'next/image'
import { gallery } from '@/lib/site-config'
import { asset } from '@/lib/links'
import { SectionHeading } from './section-heading'

export function Gallery() {
  return (
    <section
      id="galeria"
      aria-labelledby="galeria-title"
      className="bg-background px-4 py-20 md:px-6 md:py-28"
    >
      <div className="mx-auto max-w-6xl">

        <SectionHeading
          id="galeria-title"
          eyebrow="Galeria"
          title="Conheça um pouco dos Lençóis"
          description="Paisagens, lagoas, dunas e momentos que fazem dos Lençóis Maranhenses um destino único."
        />

        {/* Galeria */}
        <div className="mt-12 grid auto-rows-[220px] grid-cols-2 gap-3 md:auto-rows-[260px] md:grid-cols-4 md:gap-4">
          {gallery.map((image, index) => (
            <figure
              key={`${image.src}-${index}`}
              className={`vem-ver-float-in group relative overflow-hidden rounded-2xl bg-muted ${
                index === 0
                  ? 'col-span-2 row-span-2'
                  : index === 3
                    ? 'row-span-2'
                    : ''
              }`}
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <Image
                src={asset(image.src)}
                alt={image.alt}
                fill
                loading={index === 0 ? 'eager' : 'lazy'}
                sizes={
                  index === 0
                    ? '(min-width: 768px) 50vw, 100vw'
                    : '(min-width: 768px) 25vw, 50vw'
                }
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Escurecimento */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Nome da imagem */}
              <figcaption className="absolute inset-x-0 bottom-0 p-4 text-sm font-semibold text-white md:p-5 md:text-base">
                {image.label}
              </figcaption>
            </figure>
          ))}
        </div>

      </div>
    </section>
  )
}
