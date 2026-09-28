import Link from 'next/link'
import { siteConfig } from '@/lib/site-config'
import { whatsappLink } from '@/lib/links'
import { InstagramIcon, WhatsAppIcon } from './brand-icons'
import { Logo } from './logo'

const footerLinks = [
  { label: 'Início', href: '/#inicio' },
  { label: 'Passeios', href: '/#passeios' },
  { label: 'Sobre', href: '/#sobre' },
  { label: 'Dúvidas', href: '/#duvidas' },
  { label: 'Contato', href: '/#contato' },
]

export function Footer() {
  return (
    <footer className="bg-foreground px-4 pb-28 pt-14 text-white/80 md:px-6 md:pb-14">
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-start">
          <div className="flex flex-col gap-3">
            <Logo light />
            <p>{siteConfig.slogan}</p>
          </div>
          <nav aria-label="Links do rodapé">
            <ul className="flex flex-wrap gap-x-6 gap-y-3">
              {footerLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="inline-flex min-h-11 items-center hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex gap-3">
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da VEM VER Turismo"
              className="flex size-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
            >
              <InstagramIcon className="size-5" />
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp da VEM VER Turismo"
              className="flex size-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
            >
              <WhatsAppIcon className="size-5" />
            </a>
          </div>
        </div>
        <p className="border-t border-white/15 pt-6 text-sm text-white/70">
          © 2026 VEM VER Turismo. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
