import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, CalendarClock, Clock, Tag } from 'lucide-react'
import { siteConfig, tours } from '@/lib/site-config'
import { asset, tourWhatsappMessage, whatsappLink } from '@/lib/links'
import { WhatsAppIcon } from '@/components/brand-icons'
import { CtaLink } from '@/components/cta-link'
import { TourCard } from '@/components/tour-card'

export const dynamicParams = false

export function generateStaticParams() {
  return tours.map((t) => ({ slug: t.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const tour = tours.find((t) => t.slug === slug)
  if (!tour) return {}
  return {
    title: `Passeio ${tour.name} nos Lençóis Maranhenses`,
    description: tour.shortDescription,
    alternates: { canonical: `passeios/${tour.slug}/` },
    openGraph: { images: [{ url: tour.image.replace(/^\//, ''), alt: tour.imageAlt }] },
  }
}

export default async function TourPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const tour = tours.find((t) => t.slug === slug)
  if (!tour) notFound()

  const info = [
    { icon: Tag, label: 'Valores', value: tour.price || siteConfig.fallbackPrice },
    { icon: Clock, label: 'Duração', value: tour.duration || siteConfig.fallbackInfo },
    { icon: CalendarClock, label: 'Horários e disponibilidade', value: tour.schedule || siteConfig.fallbackInfo },
  ]
  const others = tours.filter((t) => t.slug !== tour.slug).slice(0, 3)

  return (
    <>
      <article className="px-4 pb-16 pt-8 md:px-6 md:pb-24 md:pt-12">
        <div className="mx-auto max-w-6xl">
          <nav aria-label="Navegação estrutural" className="mb-6">
            <Link
              href="/#passeios"
              className="inline-flex min-h-11 items-center gap-2 font-medium text-primary hover:underline"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
              Voltar para os passeios
            </Link>
          </nav>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-muted">
              <Image src={asset(tour.image)} alt={tour.imageAlt} fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </div>
            <div className="flex flex-col gap-6">
              <p className="text-sm font-semibold uppercase tracking-widest text-accent-foreground">Passeio</p>
              <h1 className="font-serif text-4xl font-semibold leading-tight text-balance md:text-5xl">{tour.name}</h1>
              <p className="text-lg leading-relaxed text-muted-foreground text-pretty">{tour.description}</p>

              <dl className="grid gap-3">
                {info.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-4 rounded-2xl bg-sand p-4">
                    <Icon className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                    <div>
                      <dt className="text-sm text-muted-foreground">{label}</dt>
                      <dd className="font-semibold">{value}</dd>
                    </div>
                  </div>
                ))}
              </dl>

              {tour.highlights.length > 0 && (
                <div>
                  <h2 className="mb-3 text-lg font-semibold">Destaques</h2>
                  <ul className="list-inside list-disc space-y-1 text-muted-foreground">
                    {tour.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                </div>
              )}

              <CtaLink href={whatsappLink(tourWhatsappMessage(tour.name))} external variant="whatsapp" className="sm:w-fit">
                <WhatsAppIcon />
                Consultar pelo WhatsApp
              </CtaLink>
            </div>
          </div>
        </div>
      </article>

      <section aria-labelledby="outros-title" className="bg-sand px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 id="outros-title" className="font-serif text-3xl font-semibold">
            Outros passeios
          </h2>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((t) => (
              <li key={t.slug} className="flex">
                <TourCard tour={t} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
