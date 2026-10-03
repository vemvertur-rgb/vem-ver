'use client'

import Image from 'next/image'

import { gallery } from '@/lib/site-config'
import { asset } from '@/lib/links'

import { SectionHeading } from './section-heading'
import { useLocale } from './locale-provider'

type GalleryContent = {
  eyebrow: string
  title: string
  description: string
  labels: string[]
}

const galleryTranslations: Record<
  string,
  GalleryContent
> = {
  pt: {
    eyebrow: 'Galeria',
    title: 'Conheça um pouco dos Lençóis',
    description:
      'Paisagens, lagoas, dunas e momentos que fazem dos Lençóis Maranhenses um destino único.',
    labels: [
      'Lençóis Maranhenses',
      'Lagoas e dunas',
      'Paisagens naturais',
      'Dunas dos Lençóis',
      'Lagoas cristalinas',
      'Pôr do sol',
    ],
  },

  en: {
    eyebrow: 'Gallery',
    title: 'Discover the beauty of Lençóis',
    description:
      'Landscapes, lagoons, dunes and moments that make Lençóis Maranhenses a unique destination.',
    labels: [
      'Lençóis Maranhenses',
      'Lagoons and dunes',
      'Natural landscapes',
      'Lençóis dunes',
      'Crystal-clear lagoons',
      'Sunset',
    ],
  },

  es: {
    eyebrow: 'Galería',
    title: 'Descubre un poco de los Lençóis',
    description:
      'Paisajes, lagunas, dunas y momentos que hacen de los Lençóis Maranhenses un destino único.',
    labels: [
      'Lençóis Maranhenses',
      'Lagunas y dunas',
      'Paisajes naturales',
      'Dunas de los Lençóis',
      'Lagunas cristalinas',
      'Atardecer',
    ],
  },

  fr: {
    eyebrow: 'Galerie',
    title: 'Découvrez les Lençóis',
    description:
      'Paysages, lagunes, dunes et moments qui font des Lençóis Maranhenses une destination unique.',
    labels: [
      'Lençóis Maranhenses',
      'Lagunes et dunes',
      'Paysages naturels',
      'Dunes des Lençóis',
      'Lagunes cristallines',
      'Coucher de soleil',
    ],
  },

  it: {
    eyebrow: 'Galleria',
    title: 'Scopri la bellezza dei Lençóis',
    description:
      'Paesaggi, lagune, dune e momenti che rendono i Lençóis Maranhenses una destinazione unica.',
    labels: [
      'Lençóis Maranhenses',
      'Lagune e dune',
      'Paesaggi naturali',
      'Dune dei Lençóis',
      'Lagune cristalline',
      'Tramonto',
    ],
  },

  zh: {
    eyebrow: '图库',
    title: '探索 Lençóis 的美景',
    description:
      '自然景观、湖泊、沙丘与特别时刻，共同构成了独一无二的 Lençóis Maranhenses。',
    labels: [
      'Lençóis Maranhenses',
      '湖泊与沙丘',
      '自然景观',
      'Lençóis 沙丘',
      '清澈湖泊',
      '日落',
    ],
  },

  ja: {
    eyebrow: 'ギャラリー',
    title: 'レンソイスの魅力をご覧ください',
    description:
      '美しい景色、ラグーン、砂丘、そしてレンソイス・マラニャンセスならではの特別な瞬間をご紹介します。',
    labels: [
      'レンソイス・マラニャンセス',
      'ラグーンと砂丘',
      '自然の風景',
      'レンソイスの砂丘',
      '透明なラグーン',
      '夕日',
    ],
  },
}

export function Gallery() {
  const { locale } = useLocale()

  const content =
    galleryTranslations[locale] ||
    galleryTranslations.pt

  return (
    <section
      id="galeria"
      aria-labelledby="galeria-title"
      className="bg-background px-4 py-20 md:px-6 md:py-28"
    >
      <div className="mx-auto max-w-6xl">

        <div className="vem-ver-fade-up">
          <SectionHeading
            id="galeria-title"
            eyebrow={content.eyebrow}
            title={content.title}
            description={content.description}
          />
        </div>

        <div className="mt-12 grid auto-rows-[220px] grid-cols-2 gap-3 md:auto-rows-[260px] md:grid-cols-4 md:gap-4">
          {gallery.map(
            (image, index) => (
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
                  alt={
                    content.labels[
                      index
                    ] ||
                    image.alt
                  }
                  fill
                  loading={
                    index === 0
                      ? 'eager'
                      : 'lazy'
                  }
                  sizes={
                    index === 0
                      ? '(min-width: 768px) 50vw, 100vw'
                      : '(min-width: 768px) 25vw, 50vw'
                  }
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100" />

                <figcaption className="absolute inset-x-0 bottom-0 p-4 text-sm font-semibold text-white md:p-5 md:text-base">
                  {content.labels[
                    index
                  ] || image.label}
                </figcaption>
              </figure>
            ),
          )}
        </div>

      </div>
    </section>
  )
}
