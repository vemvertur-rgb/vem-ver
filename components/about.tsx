import Image from 'next/image'
import {
  MapPin,
  MessageCircle,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'
import { siteConfig } from '@/lib/site-config'
import { asset, whatsappLink } from '@/lib/links'
import { CtaLink } from './cta-link'
import { WhatsAppIcon } from './brand-icons'

export function About() {
  const { about } = siteConfig

  const differentials = [
    {
      icon: MapPin,
      title: 'Experiências nos Lençóis',
      text: 'Conheça diferentes paisagens e passeios da região dos Lençóis Maranhenses.',
    },
    {
      icon: MessageCircle,
      title: 'Atendimento próximo',
      text: 'Tire suas dúvidas e consulte os detalhes da sua viagem diretamente com a Vem Ver.',
    },
    {
      icon: ShieldCheck,
      title: 'Informações claras',
      text: 'Encontre no site detalhes sobre passeios, duração, valores e condições.',
    },
    {
      icon: Sparkles,
      title: 'Momentos especiais',
      text: 'Opções compartilhadas e experiências privativas para diferentes estilos de viagem.',
    },
  ]

  return (
    <section
      id="sobre"
      aria-labelledby="sobre-title"
      className="bg-primary px-4 py-20 text-primary-foreground md:px-6 md:py-28"
    >
      <div className="mx-auto max-w-6xl">

        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">

          {/* Imagem */}
          <div className="vem-ver-fade-left relative aspect-[4/3] overflow-hidden rounded-3xl md:aspect-[4/5]">
            <Image
              src={asset(about.image)}
              alt={about.imageAlt}
              fill
              loading="lazy"
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Conteúdo */}
          <div className="vem-ver-fade-right flex flex-col">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sand-deep">
              Sobre a Vem Ver
            </p>

            <h2
              id="sobre-title"
              className="mt-3 font-serif text-3xl font-semibold leading-tight text-balance md:text-4xl"
            >
              {about.title}
            </h2>

            <p className="mt-5 text-lg leading-relaxed text-primary-foreground/90 text-pretty">
              {about.text}
            </p>

            {/* Diferenciais */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {differentials.map((item) => {
                const Icon = item.icon

                return (
                  <div
                    key={item.title}
                    className="vem-ver-card rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-4 transition-colors duration-300 hover:bg-primary-foreground/10"
                  >
                    <div className="mb-3 flex size-10 items-center justify-center rounded-xl bg-primary-foreground/10">
                      <Icon
                        className="size-5"
                        aria-hidden="true"
                      />
                    </div>

                    <h3 className="font-semibold">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-sm leading-relaxed text-primary-foreground/75">
                      {item.text}
                    </p>
                  </div>
                )
              })}
            </div>

            {/* WhatsApp */}
            <div className="mt-8">
              <CtaLink
                href={whatsappLink()}
                external
                variant="whatsapp"
                className="vem-ver-button"
              >
                <WhatsAppIcon />
                Falar com a Vem Ver
              </CtaLink>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
