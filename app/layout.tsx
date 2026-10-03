import type { Metadata, Viewport } from 'next'
import { Fraunces, Inter } from 'next/font/google'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { StructuredData } from '@/components/structured-data'
import { asset } from '@/lib/links'

import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
})

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  'https://vemvertur-rgb.github.io/vem-ver'

const title =
  'VEM VER Turismo | Passeios nos Lençóis Maranhenses'

const description =
  'Conheça os Lençóis Maranhenses com a VEM VER Turismo. Descubra passeios, lagoas, dunas e experiências inesquecíveis no Maranhão.'

export const metadata: Metadata = {
  metadataBase: new URL(
    siteUrl.endsWith('/')
      ? siteUrl
      : `${siteUrl}/`,
  ),

  title: {
    default: title,
    template: '%s | VEM VER Turismo',
  },

  description,

  keywords: [
    'Lençóis Maranhenses',
    'passeios Lençóis Maranhenses',
    'Lagoa Azul',
    'Lagoa Bonita',
    'Atins',
    'Santo Amaro',
    'Barreirinhas',
    'turismo Maranhão',
    'turismo em Barreirinhas',
    'agência de turismo Lençóis Maranhenses',
    'passeios em Barreirinhas',
    'turismo nos Lençóis Maranhenses',
  ],

  authors: [
    {
      name: 'VEM VER Turismo',
    },
  ],

  creator: 'VEM VER Turismo',
  publisher: 'VEM VER Turismo',
  category: 'travel',

  alternates: {
    canonical: '/',
  },

  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },

  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'VEM VER Turismo',
    title,
    description,
    url: siteUrl,

    images: [
      {
        url: asset('/images/og-image.jpg'),
        width: 1200,
        height: 630,
        alt: 'Dunas e lagoas dos Lençóis Maranhenses',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [
      asset('/images/og-image.jpg'),
    ],
  },

  icons: {
    icon: asset('/images/logo-vemver.png'),
    apple: asset('/images/logo-vemver.png'),
  },

  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: '#2b6f99',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${fraunces.variable}`}
    >
      <body className="antialiased">
        <StructuredData />

        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
        >
          Pular para o conteúdo
        </a>

        <Header />

        <main id="conteudo">
          {children}
        </main>

        <Footer />

        <WhatsAppButton />
      </body>
    </html>
  )
}
