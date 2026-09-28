import { Mail, MapPin } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'
import { whatsappLink } from '@/lib/links'
import { InstagramIcon, WhatsAppIcon } from './brand-icons'
import { ContactForm } from './contact-form'

export function Contact() {
  const channels = [
    {
      icon: WhatsAppIcon,
      label: 'WhatsApp',
      value: 'Fale com a gente',
      href: whatsappLink(),
      external: true,
    },
    {
      icon: InstagramIcon,
      label: 'Instagram',
      value: siteConfig.instagramHandle,
      href: siteConfig.instagramUrl,
      external: true,
    },
    {
      icon: Mail,
      label: 'E-mail',
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
      external: false,
    },
  ]

  return (
    <section id="contato" aria-labelledby="contato-title" className="bg-sand px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
        <div className="flex flex-col gap-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-foreground">Contato</p>
          <h2 id="contato-title" className="font-serif text-3xl font-semibold leading-tight text-balance md:text-4xl">
            Pronto para conhecer os Lençóis Maranhenses?
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Fale com a VEM VER Turismo e consulte nossos passeios, valores e disponibilidade.
          </p>
          <ul className="flex flex-col gap-3">
            {channels.map(({ icon: Icon, label, value, href, external }) => (
              <li key={label}>
                <a
                  href={href}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="flex min-h-16 items-center gap-4 rounded-2xl border border-border bg-card px-4 py-3 transition-colors hover:border-primary/40"
                >
                  <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="flex flex-col">
                    <span className="text-sm text-muted-foreground">{label}</span>
                    <span className="font-semibold break-all">{value}</span>
                  </span>
                </a>
              </li>
            ))}
            <li className="flex min-h-16 items-center gap-4 px-4 py-3">
              <span className="flex size-11 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                <MapPin className="size-5" aria-hidden="true" />
              </span>
              <span className="flex flex-col">
                <span className="text-sm text-muted-foreground">Localização</span>
                <span className="font-semibold">{siteConfig.location}</span>
              </span>
            </li>
          </ul>
        </div>
        <ContactForm />
      </div>
    </section>
  )
}
