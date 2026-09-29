import Image from 'next/image'
import Link from 'next/link'
import { Clock, Info } from 'lucide-react'
import { siteConfig, type Tour } from '@/lib/site-config'
import { asset, tourWhatsappMessage, whatsappLink } from '@/lib/links'
import { WhatsAppIcon } from './brand-icons'
import { ctaClass } from './cta-link'

export function TourCard({ tour }: { tour: Tour }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Imagem */}
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <Image
          src={asset(tour.image)}
          alt={tour.imageAlt}
          fill
          loading="lazy"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Selo de oferta */}
        {tour.originalPrice && (
          <div className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1.5 text-xs font-bold text-primary-foreground shadow-md">
            OFERTA ESPECIAL
          </div>
        )}
      </div>

      {/* Conteúdo */}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-1 flex-col gap-3">
          {/* Nome */}
          <h3 className="font-serif text-2xl font-semibold leading-tight">
            {tour.name}
          </h3>

          {/* Descrição */}
          <p className="leading-relaxed text-muted-foreground">
            {tour.shortDescription}
          </p>

          {/* Duração */}
          {tour.duration && (
            <div className="flex items-center gap-2 pt-1 text-sm text-muted-foreground">
              <Clock className="size-4 shrink-0" aria-hidden="true" />
              <span>{tour.duration}</span>
            </div>
          )}

          {/* Preço */}
          <div className="mt-2 border-t border-border pt-4">
            {tour.originalPrice && (
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Info className="size-4 shrink-0" aria-hidden="true" />

                <span className="line-through">
                  {tour.originalPrice}
                </span>
              </div>
            )}

            <div className="mt-1 flex items-baseline gap-2">
              <span className="text-2xl font-bold text-primary">
                {tour.price || siteConfig.fallbackPrice}
              </span>

              <span className="text-sm text-muted-foreground">
                {tour.priceInfo}
              </span>
            </div>

            {tour.originalPrice && (
              <p className="mt-1 text-sm font-medium text-primary">
                Condição especial
              </p>
            )}
          </div>
        </div>

        {/* Botões */}
        <div className="mt-5 flex flex-col gap-2">
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
