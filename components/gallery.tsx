import Image from 'next/image'
import { gallery } from '@/lib/site-config'
import { asset } from '@/lib/links'
import { cn } from '@/lib/utils'
import { SectionHeading } from './section-heading'

export function Gallery() {
  return (
    <section aria-labelledby="galeria-title" className="px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="galeria-title"
          eyebrow="Galeria"
          title="Paisagens que esperam por você"
        />
        <ul className="mt-12 grid auto-rows-[160px] grid-cols-2 gap-3 md:auto-rows-[220px] md:grid-cols-4 md:gap-4">
          {gallery.map((img, i) => (
            <li
              key={img.src + img.label}
              className={cn(
                'relative overflow-hidden rounded-2xl bg-muted',
                (i === 0 || i === 5) && 'col-span-2 row-span-2',
              )}
            >
              <figure className="h-full">
                <Image
                  src={asset(img.src)}
                  alt={img.alt}
                  fill
                  loading="lazy"
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
                <figcaption className="absolute bottom-2 left-2 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold text-foreground md:text-sm">
                  {img.label}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
