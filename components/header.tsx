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

  const extraLinks = [
    { label: 'Como funciona', href: '/#como-funciona' },
    { label: 'Galeria', href: '/#galeria' },
  ]

  const allLinks = [
    ...navLinks,
    ...extraLinks,
  ]

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur-md vem-ver-fade-up">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 md:h-[72px] md:px-6">

        {/* Logo */}
        <Link
          href="/#inicio"
          className="shrink-0 rounded-md transition-transform duration-200 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          aria-label={`${siteConfig.name} - página inicial`}
          onClick={close}
        >
          <Logo />
        </Link>

        {/* Menu desktop */}
        <nav
          aria-label="Menu principal"
          className="hidden lg:block"
        >
          <ul className="flex items-center gap-1">
            {allLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="rounded-full px-3 py-2 text-sm font-medium text-foreground/80 transition-all duration-200 hover:bg-muted hover:text-foreground hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Ações */}
        <div className="flex items-center gap-2">

          {/* WhatsApp desktop */}
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar com a Vem Ver pelo WhatsApp"
            className={ctaClass(
              'whatsapp',
              'hidden min-h-11 px-5 text-sm sm:inline-flex vem-ver-button'
            )}
          >
            <WhatsAppIcon />
            Falar no WhatsApp
          </a>

          {/* Menu mobile */}
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full text-foreground transition-all duration-200 hover:bg-muted hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring lg:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={
              open
                ? 'Fechar menu'
                : 'Abrir menu'
            }
            onClick={() => setOpen((value) => !value)}
          >
            {open ? (
              <X
                className="size-6 transition-transform duration-200"
                aria-hidden="true"
              />
            ) : (
              <Menu
                className="size-6 transition-transform duration-200"
                aria-hidden="true"
              />
            )}
          </button>

        </div>
      </div>

      {/* Menu mobile */}
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-out lg:hidden ${
          open
            ? 'grid-rows-[1fr] opacity-100'
            : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <nav
          id="menu-mobile"
          aria-label="Menu principal"
          className="min-h-0 border-t border-border bg-background shadow-lg"
        >
          <ul className="mx-auto flex max-w-6xl flex-col px-4 py-3">

            {allLinks.map((link, index) => (
              <li
                key={link.href}
                className={`transition-all duration-300 ${
                  open
                    ? 'translate-y-0 opacity-100'
                    : '-translate-y-2 opacity-0'
                }`}
                style={{
                  transitionDelay: open
                    ? `${index * 40}ms`
                    : '0ms',
                }}
              >
                <Link
                  href={link.href}
                  onClick={close}
                  className="flex min-h-12 items-center rounded-xl px-3 text-base font-medium text-foreground/85 transition-all duration-200 hover:bg-muted hover:text-foreground hover:translate-x-1"
                >
                  {link.label}
                </Link>
              </li>
            ))}

            <li
              className={`pt-3 transition-all duration-300 ${
                open
                  ? 'translate-y-0 opacity-100'
                  : '-translate-y-2 opacity-0'
              }`}
              style={{
                transitionDelay: open
                  ? `${allLinks.length * 40}ms`
                  : '0ms',
              }}
            >
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={close}
                className={ctaClass(
                  'whatsapp',
                  'w-full vem-ver-button'
                )}
              >
                <WhatsAppIcon />
                Falar no WhatsApp
              </a>
            </li>

          </ul>
        </nav>
      </div>
    </header>
  )
}
