import { Mail, MapPin } from 'lucide-react'
import Link from 'next/link'
import { siteConfig, navLinks } from '@/lib/site-config'
import { InstagramIcon, WhatsAppIcon } from './brand-icons'
import { whatsappLink } from '@/lib/links'

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">

          {/* Marca */}
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-3"
              aria-label="Vem Ver - Início"
            >
              <div className="flex size-11 items-center justify-center rounded-xl bg-white/10">
                <span className="font-serif text-2xl font-bold">
                  V
                </span>
              </div>

              <span className="font-serif text-2xl font-semibold">
                Vem Ver
              </span>
            </Link>

            <p className="mt-5 max-w-md leading-relaxed text-primary-foreground/75">
              {siteConfig.slogan}
            </p>

            <p className="mt-3 flex items-center gap-2 text-sm text-primary-foreground/65">
              <MapPin
                className="size-4 shrink-0"
                aria-hidden="true"
              />
              {siteConfig.location}
            </p>
          </div>

          {/* Navegação */}
          <div>
            <h2 className="font-semibold">
              Navegação
            </h2>

            <nav
              aria-label="Navegação do rodapé"
              className="mt-4"
            >
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-primary-foreground/70 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}

                <li>
                  <Link
                    href="/#galeria"
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-white"
                  >
                    Galeria
                  </Link>
                </li>

                <li>
                  <Link
                    href="/#contato"
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-white"
                  >
                    Contato
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Contato */}
          <div>
            <h2 className="font-semibold">
              Fale com a Vem Ver
            </h2>

            <div className="mt-4 space-y-4">

              {/* WhatsApp */}
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-primary-foreground/70 transition-colors hover:text-white"
              >
                <WhatsAppIcon />
                WhatsApp
              </a>

              {/* Instagram */}
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-primary-foreground/70 transition-colors hover:text-white"
              >
                <InstagramIcon />
                {siteConfig.instagramHandle}
              </a>

              {/* E-mail */}
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-3 text-sm text-primary-foreground/70 transition-colors hover:text-white"
              >
                <Mail
                  className="size-5"
                  aria-hidden="true"
                />

                <span className="break-all">
                  {siteConfig.email}
                </span>
              </a>

            </div>

            {/* Redes sociais */}
            <div className="mt-6 flex items-center gap-3">

              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da Vem Ver"
                className="flex size-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
              >
                <InstagramIcon />
              </a>

              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp da Vem Ver"
                className="flex size-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
              >
                <WhatsAppIcon />
              </a>

            </div>
          </div>

        </div>

        {/* Rodapé inferior */}
        <div className="mt-12 border-t border-primary-foreground/10 pt-6">

          <div className="flex flex-col gap-3 text-sm text-primary-foreground/60 md:flex-row md:items-center md:justify-between">

            <p>
              © {new Date().getFullYear()} Vem Ver Turismo. Todos os direitos reservados.
            </p>

            <p>
              Lençóis Maranhenses, Maranhão
            </p>

          </div>

        </div>
      </div>
    </footer>
  )
}
