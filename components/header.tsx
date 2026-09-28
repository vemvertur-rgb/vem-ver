'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks, siteConfig } from '@/lib/site-config'
import { whatsappLink } from '@/lib/links'
import { WhatsAppIcon } from './brand-icons'
import { ctaClass } from './cta-link'
import { Logo } from './logo'

export function Header() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 md:h-18 md:px-6">
        <Link href="/#inicio" className="rounded-md" aria-label={`${siteConfig.name} - página inicial`} onClick={close}>
          <Logo />
        </Link>

        <nav aria-label="Menu principal" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className={ctaClass('whatsapp', 'hidden min-h-11 px-5 text-sm sm:inline-flex')}
          >
            <WhatsAppIcon />
            Falar no WhatsApp
          </a>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full text-foreground hover:bg-muted lg:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="menu-mobile" aria-label="Menu principal" className="border-t border-border bg-background lg:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-4 py-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={close}
                  className="flex min-h-12 items-center rounded-lg px-3 text-base font-medium hover:bg-muted"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={close}
                className={ctaClass('whatsapp', 'w-full')}
              >
                <WhatsAppIcon />
                Falar no WhatsApp
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
