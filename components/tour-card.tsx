import Image from 'next/image'
import Link from 'next/link'
import { Info } from 'lucide-react'
import { siteConfig, type Tour } from '@/lib/site-config'
import { asset, tourWhatsappMessage, whatsappLink } from '@/lib/links'
import { WhatsAppIcon } from './brand-icons'
import { ctaClass } from './cta-link'

export function TourCard({ tour }: { tour: Tour }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <Image
          src={asset(tour.image)}
          alt={tour.imageAlt}
          fill
          loading="lazy"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="font-serif text-2xl font-semibold">{tour.name}</h3>

        <p className="leading-relaxed text-muted-foreground">
          {tour.type === 'privativo' ? tour.description : tour.shortDescription}
        </p>

        <div className="flex flex-col gap-1 pt-1">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Info className="size-4 shrink-0" aria-hidden="true" />

            {tour.originalPrice && (
              <span className="line-through">
                {tour.originalPrice}
              </span>
            )}
          </div>

          <p className="text-2xl font-bold text-primary">
            {tour.price || siteConfig.fallbackPrice}
          </p>

          {tour.originalPrice && (
            <span className="text-sm font-medium text-destructive">
              Oferta especial
            </span>
          )}
        </div>

        <div className="mt-auto flex flex-col gap-2 pt-3">
          <a
            href={whatsappLink(tourWhatsappMessage(tour.name))}
            target="_blank"
            rel="noopener noreferrer"
            className={ctaClass('whatsapp', 'w-full')}
          >
            <WhatsAppIcon />
            Consultar pelo WhatsApp
          </a>

          <Link
            href={`/passeios/${tour.slug}/`}
            className={ctaClass('outline', 'w-full')}
            aria-label={`Ver detalhes do passeio ${tour.name}`}
          >
            Ver detalhes
          </Link>
        </div>
      </div>
    </article>
  )
}
