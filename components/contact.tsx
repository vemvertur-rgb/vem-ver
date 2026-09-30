import { Mail, MapPin, MessageCircle } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'
import { whatsappLink } from '@/lib/links'
import { ContactForm } from './contact-form'
import { InstagramIcon, WhatsAppIcon } from './brand-icons'

export function Contact() {
  return (
    <section
      id="contato"
      aria-labelledby="contato-title"
      className="bg-sand px-4 py-20 md:px-6 md:py-28"
    >
      <div className="mx-auto max-w-6xl">

        {/* Título */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Fale com a Vem Ver
          </p>

          <h2
            id="contato-title"
            className="mt-3 font-serif text-3xl font-semibold leading-tight text-balance md:text-4xl"
          >
            Vamos planejar sua experiência?
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-muted-foreground text-pretty">
            Escolha seu passeio, informe a data desejada e entre em contato
            com a Vem Ver para consultar disponibilidade e detalhes.
          </p>
        </div>

        {/* Conteúdo */}
        <div className="mt-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">

          {/* Informações */}
          <div className="order-2 rounded-3xl bg-primary p-7 text-primary-foreground shadow-sm md:p-8 lg:order-1">

            <h3 className="font-serif text-2xl font-semibold">
              Entre em contato
            </h3>

            <p className="mt-3 leading-relaxed text-primary-foreground/80">
              Estamos à disposição para ajudar você a encontrar o passeio
              ideal para sua viagem aos Lençóis Maranhenses.
            </p>

            <div className="mt-8 space-y-5">

              {/* WhatsApp */}
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-4 transition-colors hover:bg-primary-foreground/10"
              >
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary-foreground/10">
                  <WhatsAppIcon />
                </div>

                <div>
                  <p className="font-semibold">
                    WhatsApp
                  </p>

                  <p className="mt-1 text-sm text-primary-foreground/70">
                    Fale diretamente com a Vem Ver
                  </p>
                </div>
              </a>

              {/* Instagram */}
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-4 transition-colors hover:bg-primary-foreground/10"
              >
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary-foreground/10">
                  <InstagramIcon />
                </div>

                <div>
                  <p className="font-semibold">
                    Instagram
                  </p>

                  <p className="mt-1 text-sm text-primary-foreground/70">
                    {siteConfig.instagramHandle}
                  </p>
                </div>
              </a>

              {/* E-mail */}
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-start gap-4 rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-4 transition-colors hover:bg-primary-foreground/10"
              >
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary-foreground/10">
                  <Mail
                    className="size-5"
                    aria-hidden="true"
                  />
                </div>

                <div>
                  <p className="font-semibold">
                    E-mail
                  </p>

                  <p className="mt-1 break-all text-sm text-primary-foreground/70">
                    {siteConfig.email}
                  </p>
                </div>
              </a>

              {/* Localização */}
              <div className="flex items-start gap-4 rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-4">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary-foreground/10">
                  <MapPin
                    className="size-5"
                    aria-hidden="true"
                  />
                </div>

                <div>
                  <p className="font-semibold">
                    Destino
                  </p>

                  <p className="mt-1 text-sm text-primary-foreground/70">
                    {siteConfig.location}
                  </p>
                </div>
              </div>

            </div>

            {/* Botão WhatsApp */}
            <div className="mt-8">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-primary transition-colors hover:bg-white/90"
              >
                <WhatsAppIcon />
                Falar pelo WhatsApp
              </a>
            </div>

          </div>

          {/* Formulário */}
          <div className="order-1 rounded-3xl border border-border bg-card p-6 shadow-sm md:p-8 lg:order-2">

            <div className="mb-6">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <MessageCircle
                    className="size-5"
                    aria-hidden="true"
                  />
                </div>

                <h3 className="font-serif text-2xl font-semibold">
                  Solicite informações
                </h3>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Preencha seus dados. Ao enviar, o WhatsApp será aberto com sua
                solicitação pronta para você conferir e enviar.
              </p>
            </div>

            <ContactForm />

          </div>

        </div>
      </div>
    </section>
  )
}
