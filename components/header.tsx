'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

import {
  siteConfig,
} from '@/lib/site-config'

import {
  whatsappLink,
} from '@/lib/links'

import {
  defaultLocale,
} from '@/lib/i18n'

import {
  WhatsAppIcon,
} from './brand-icons'

import {
  ctaClass,
} from './cta-link'

import {
  LanguageSelector,
} from './language-selector'

import {
  CurrencySelector,
} from './currency-selector'

import {
  Logo,
} from './logo'

import {
  useLocale,
} from './locale-provider'

type HeaderContent = {
  nav: {
    home: string
    about: string
    tours: string
    private: string
    contact: string
    howItWorks: string
    faq: string
    gallery: string
  }
  whatsapp: string
  openMenu: string
  closeMenu: string
  language: string
  currency: string
  homeAria: string
}

const headerByLocale: Record<
  string,
  HeaderContent
> = {
  pt: {
    nav: {
      home: 'Início',
      about: 'Sobre',
      tours: 'Passeios',
      private: 'Privativos',
      contact: 'Contato',
      howItWorks: 'Como funciona',
      faq: 'Dúvidas',
      gallery: 'Galeria',
    },
    whatsapp: 'Falar no WhatsApp',
    openMenu: 'Abrir menu',
    closeMenu: 'Fechar menu',
    language: 'Selecionar idioma',
    currency: 'Selecionar moeda',
    homeAria: 'Vem Ver - página inicial',
  },

  en: {
    nav: {
      home: 'Home',
      about: 'About',
      tours: 'Tours',
      private: 'Private',
      contact: 'Contact',
      howItWorks: 'How it works',
      faq: 'FAQ',
      gallery: 'Gallery',
    },
    whatsapp: 'Talk on WhatsApp',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    language: 'Select language',
    currency: 'Select currency',
    homeAria: 'Vem Ver - home page',
  },

  es: {
    nav: {
      home: 'Inicio',
      about: 'Sobre nosotros',
      tours: 'Paseos',
      private: 'Privados',
      contact: 'Contacto',
      howItWorks: 'Cómo funciona',
      faq: 'Preguntas',
      gallery: 'Galería',
    },
    whatsapp: 'Hablar por WhatsApp',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    language: 'Seleccionar idioma',
    currency: 'Seleccionar moneda',
    homeAria: 'Vem Ver - página de inicio',
  },

  fr: {
    nav: {
      home: 'Accueil',
      about: 'À propos',
      tours: 'Excursions',
      private: 'Privées',
      contact: 'Contact',
      howItWorks: 'Comment ça marche',
      faq: 'Questions',
      gallery: 'Galerie',
    },
    whatsapp: 'Nous contacter sur WhatsApp',
    openMenu: 'Ouvrir le menu',
    closeMenu: 'Fermer le menu',
    language: 'Choisir la langue',
    currency: 'Choisir la devise',
    homeAria: 'Vem Ver - page d’accueil',
  },

  it: {
    nav: {
      home: 'Home',
      about: 'Chi siamo',
      tours: 'Escursioni',
      private: 'Private',
      contact: 'Contatti',
      howItWorks: 'Come funziona',
      faq: 'Domande',
      gallery: 'Galleria',
    },
    whatsapp: 'Contattaci su WhatsApp',
    openMenu: 'Apri menu',
    closeMenu: 'Chiudi menu',
    language: 'Seleziona lingua',
    currency: 'Seleziona valuta',
    homeAria: 'Vem Ver - pagina iniziale',
  },

  zh: {
    nav: {
      home: '首页',
      about: '关于我们',
      tours: '游览项目',
      private: '私人体验',
      contact: '联系我们',
      howItWorks: '行程方式',
      faq: '常见问题',
      gallery: '图库',
    },
    whatsapp: '通过 WhatsApp 联系',
    openMenu: '打开菜单',
    closeMenu: '关闭菜单',
    language: '选择语言',
    currency: '选择货币',
    homeAria: 'Vem Ver - 首页',
  },

  ja: {
    nav: {
      home: 'ホーム',
      about: '私たちについて',
      tours: 'ツアー',
      private: 'プライベート',
      contact: 'お問い合わせ',
      howItWorks: 'ご利用の流れ',
      faq: 'よくある質問',
      gallery: 'ギャラリー',
    },
    whatsapp: 'WhatsAppで相談',
    openMenu: 'メニューを開く',
    closeMenu: 'メニューを閉じる',
    language: '言語を選択',
    currency: '通貨を選択',
    homeAria: 'Vem Ver - ホーム',
  },
}

type NavItem = {
  key: keyof HeaderContent['nav']
  href: string
}

const navItems: NavItem[] = [
  {
    key: 'home',
    href: '#inicio',
  },
  {
    key: 'about',
    href: '#sobre',
  },
  {
    key: 'tours',
    href: '#passeios',
  },
  {
    key: 'private',
    href: '#privativos',
  },
  {
    key: 'contact',
    href: '#contato',
  },
  {
    key: 'howItWorks',
    href: '#como-funciona',
  },
  {
    key: 'faq',
    href: '#duvidas',
  },
  {
    key: 'gallery',
    href: '#galeria',
  },
]

export function Header() {
  const [open, setOpen] =
    useState(false)

  const {
    locale,
  } = useLocale()

  const content =
    headerByLocale[locale] ||
    headerByLocale.pt

  const homePath =
    locale === defaultLocale
      ? '/'
      : `/${locale}/`

  const close = () =>
    setOpen(false)

  function getNavHref(
    href: string,
  ) {
    if (locale === defaultLocale) {
      return `/${href}`
    }

    return `/${locale}/${href}`
  }

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur-md vem-ver-fade-up">

      <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-3 px-4 md:min-h-[72px] md:px-6">

        <Link
          href={homePath}
          className="shrink-0 rounded-md transition-transform duration-200 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          aria-label={
            content.homeAria
          }
          onClick={close}
        >
          <Logo />
        </Link>

        <nav
          aria-label="Menu principal"
          className="hidden xl:block"
        >
          <ul className="flex items-center gap-0.5">

            {navItems.map(
              (item) => (
                <li
                  key={item.key}
                >
                  <Link
                    href={getNavHref(
                      item.href,
                    )}
                    className="rounded-full px-2.5 py-2 text-sm font-medium text-foreground/80 transition-all duration-200 hover:bg-muted hover:text-foreground hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    {
                      content.nav[
                        item.key
                      ]
                    }
                  </Link>
                </li>
              ),
            )}

          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-2">

          <div className="hidden items-center gap-2 lg:flex">

            <LanguageSelector />

            <CurrencySelector />

          </div>

          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={
              content.whatsapp
            }
            className={ctaClass(
              'whatsapp',
              'hidden min-h-10 px-4 text-sm sm:inline-flex vem-ver-button',
            )}
          >
            <WhatsAppIcon />

            <span className="hidden 2xl:inline">
              {content.whatsapp}
            </span>

            <span className="2xl:hidden">
              WhatsApp
            </span>
          </a>

          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full text-foreground transition-all duration-200 hover:bg-muted hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring xl:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={
              open
                ? content.closeMenu
                : content.openMenu
            }
            onClick={() =>
              setOpen(
                (value) => !value,
              )
            }
          >
            {open ? (
              <X
                className="size-6"
                aria-hidden="true"
              />
            ) : (
              <Menu
                className="size-6"
                aria-hidden="true"
              />
            )}
          </button>

        </div>
      </div>

      <div
        className={`grid overflow-hidden transition-all duration-300 ease-out xl:hidden ${
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

          <ul className="mx-auto flex max-w-7xl flex-col px-4 py-3">

            {navItems.map(
              (item, index) => (
                <li
                  key={item.key}
                  className={`transition-all duration-300 ${
                    open
                      ? 'translate-y-0 opacity-100'
                      : '-translate-y-2 opacity-0'
                  }`}
                  style={{
                    transitionDelay:
                      open
                        ? `${index * 40}ms`
                        : '0ms',
                  }}
                >
                  <Link
                    href={getNavHref(
                      item.href,
                    )}
                    onClick={close}
                    className="flex min-h-12 items-center rounded-xl px-3 text-base font-medium text-foreground/85 transition-all duration-200 hover:bg-muted hover:text-foreground hover:translate-x-1"
                  >
                    {
                      content.nav[
                        item.key
                      ]
                    }
                  </Link>
                </li>
              ),
            )}

            <li className="mt-2 border-t border-border pt-3">

              <div className="flex flex-wrap gap-2 px-1">

                <LanguageSelector />

                <CurrencySelector />

              </div>

            </li>

            <li className="pt-3">

              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={close}
                className={ctaClass(
                  'whatsapp',
                  'w-full vem-ver-button',
                )}
              >
                <WhatsAppIcon />
                {content.whatsapp}
              </a>

            </li>

          </ul>

        </nav>

      </div>

    </header>
  )
}
