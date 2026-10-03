'use client'

import { Mail, MapPin } from 'lucide-react'
import Link from 'next/link'

import {
  siteConfig,
  navLinks,
} from '@/lib/site-config'

import {
  InstagramIcon,
  WhatsAppIcon,
} from './brand-icons'

import { whatsappLink } from '@/lib/links'
import { useLocale } from './locale-provider'

type FooterContent = {
  navigation: string
  contact: string
  whatsapp: string
  instagram: string
  email: string
  gallery: string
  copyright: string
  location: string
  homeAria: string
  instagramAria: string
  whatsappAria: string
  footerNavAria: string
}

const footerByLocale: Record<
  string,
  FooterContent
> = {
  pt: {
    navigation: 'Navegação',
    contact: 'Fale com a Vem Ver',
    whatsapp: 'WhatsApp',
    instagram: 'Instagram',
    email: 'E-mail',
    gallery: 'Galeria',
    copyright:
      'Todos os direitos reservados.',
    location:
      'Lençóis Maranhenses, Maranhão',
    homeAria: 'Vem Ver - Início',
    instagramAria:
      'Instagram da Vem Ver',
    whatsappAria:
      'WhatsApp da Vem Ver',
    footerNavAria:
      'Navegação do rodapé',
  },

  en: {
    navigation: 'Navigation',
    contact: 'Talk to Vem Ver',
    whatsapp: 'WhatsApp',
    instagram: 'Instagram',
    email: 'Email',
    gallery: 'Gallery',
    copyright:
      'All rights reserved.',
    location:
      'Lençóis Maranhenses, Maranhão',
    homeAria: 'Vem Ver - Home',
    instagramAria:
      'Vem Ver Instagram',
    whatsappAria:
      'Vem Ver WhatsApp',
    footerNavAria:
      'Footer navigation',
  },

  es: {
    navigation: 'Navegación',
    contact: 'Habla con Vem Ver',
    whatsapp: 'WhatsApp',
    instagram: 'Instagram',
    email: 'Correo electrónico',
    gallery: 'Galería',
    copyright:
      'Todos los derechos reservados.',
    location:
      'Lençóis Maranhenses, Maranhão',
    homeAria: 'Vem Ver - Inicio',
    instagramAria:
      'Instagram de Vem Ver',
    whatsappAria:
      'WhatsApp de Vem Ver',
    footerNavAria:
      'Navegación del pie de página',
  },

  fr: {
    navigation: 'Navigation',
    contact: 'Contactez Vem Ver',
    whatsapp: 'WhatsApp',
    instagram: 'Instagram',
    email: 'E-mail',
    gallery: 'Galerie',
    copyright:
      'Tous droits réservés.',
    location:
      'Lençóis Maranhenses, Maranhão',
    homeAria: 'Vem Ver - Accueil',
    instagramAria:
      'Instagram de Vem Ver',
    whatsappAria:
      'WhatsApp de Vem Ver',
    footerNavAria:
      'Navigation du pied de page',
  },

  it: {
    navigation: 'Navigazione',
    contact: 'Parla con Vem Ver',
    whatsapp: 'WhatsApp',
    instagram: 'Instagram',
    email: 'E-mail',
    gallery: 'Galleria',
    copyright:
      'Tutti i diritti riservati.',
    location:
      'Lençóis Maranhenses, Maranhão',
    homeAria: 'Vem Ver - Home',
    instagramAria:
      'Instagram di Vem Ver',
    whatsappAria:
      'WhatsApp di Vem Ver',
    footerNavAria:
      'Navigazione del piè di pagina',
  },

  zh: {
    navigation: '导航',
    contact: '联系 Vem Ver',
    whatsapp: 'WhatsApp',
    instagram: 'Instagram',
    email: '电子邮件',
    gallery: '图库',
    copyright:
      '版权所有。',
    location:
      '巴西马拉尼昂州 Lençóis Maranhenses',
    homeAria: 'Vem Ver - 首页',
    instagramAria:
      'Vem Ver Instagram',
    whatsappAria:
      'Vem Ver WhatsApp',
    footerNavAria:
      '页脚导航',
  },

  ja: {
    navigation: 'ナビゲーション',
    contact: 'Vem Verに相談する',
    whatsapp: 'WhatsApp',
    instagram: 'Instagram',
    email: 'メール',
    gallery: 'ギャラリー',
    copyright:
      'All rights reserved.',
    location:
      'ブラジル・マラニョン州 レンソイス・マラニャンセス',
    homeAria: 'Vem Ver - ホーム',
    instagramAria:
      'Vem VerのInstagram',
    whatsappAria:
      'Vem VerのWhatsApp',
    footerNavAria:
      'フッターナビゲーション',
  },
}

export function Footer() {
  const { locale } = useLocale()

  const content =
    footerByLocale[locale] ||
    footerByLocale.pt

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-16">

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">

          <div className="vem-ver-fade-left">
            <Link
              href="/"
              className="inline-flex items-center gap-3 transition-transform duration-200 hover:translate-x-1"
              aria-label={
                content.homeAria
              }
            >
              <div className="flex size-11 items-center justify-center rounded-xl bg-white/10 transition-transform duration-300 hover:scale-105">
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

              {content.location}
            </p>
          </div>

          <div className="vem-ver-fade-up">
            <h2 className="font-semibold">
              {content.navigation}
            </h2>

            <nav
              aria-label={
                content.footerNavAria
              }
              className="mt-4"
            >
              <ul className="space-y-3">
                {navLinks.map(
                  (link) => (
                    <li
                      key={
                        link.href
                      }
                    >
                      <Link
                        href={
                          link.href
                        }
                        className="inline-block text-sm text-primary-foreground/70 transition-all duration-200 hover:translate-x-1 hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ),
                )}

                <li>
                  <Link
                    href="/#galeria"
                    className="inline-block text-sm text-primary-foreground/70 transition-all duration-200 hover:translate-x-1 hover:text-white"
                  >
                    {content.gallery}
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="vem-ver-fade-right">
            <h2 className="font-semibold">
              {content.contact}
            </h2>

            <div className="mt-4 space-y-4">

              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-sm text-primary-foreground/70 transition-all duration-200 hover:translate-x-1 hover:text-white"
              >
                <WhatsAppIcon />
                {content.whatsapp}
              </a>

              <a
                href={
                  siteConfig.instagramUrl
                }
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-sm text-primary-foreground/70 transition-all duration-200 hover:translate-x-1 hover:text-white"
              >
                <InstagramIcon />
                {
                  siteConfig.instagramHandle
                }
              </a>

              <a
                href={`mailto:${siteConfig.email}`}
                className="group flex items-center gap-3 text-sm text-primary-foreground/70 transition-all duration-200 hover:translate-x-1 hover:text-white"
              >
                <Mail
                  className="size-5"
                  aria-hidden="true"
                />

                <span className="break-all">
                  {
                    siteConfig.email
                  }
                </span>
              </a>

            </div>

            <div className="mt-6 flex items-center gap-3">

              <a
                href={
                  siteConfig.instagramUrl
                }
                target="_blank"
                rel="noopener noreferrer"
                aria-label={
                  content.instagramAria
                }
                className="vem-ver-button flex size-10 items-center justify-center rounded-full bg-white/10"
              >
                <InstagramIcon />
              </a>

              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={
                  content.whatsappAria
                }
                className="vem-ver-button flex size-10 items-center justify-center rounded-full bg-white/10"
              >
                <WhatsAppIcon />
              </a>

            </div>
          </div>

        </div>

        <div className="vem-ver-fade-up mt-12 border-t border-primary-foreground/10 pt-6">

          <div className="flex flex-col gap-3 text-sm text-primary-foreground/60 md:flex-row md:items-center md:justify-between">

            <p>
              ©{' '}
              {new Date().getFullYear()}{' '}
              Vem Ver Turismo.{' '}
              {content.copyright}
            </p>

            <p>
              {content.location}
            </p>

          </div>

        </div>

      </div>
    </footer>
  )
}
