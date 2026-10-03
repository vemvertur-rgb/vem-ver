'use client'

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
import { useLocale } from './locale-provider'

type AboutContent = {
  label: string
  title: string
  text: string
  whatsapp: string
  differentials: {
    title: string
    text: string
  }[]
}

const aboutTranslations: Record<
  string,
  AboutContent
> = {
  pt: {
    label: 'Sobre a Vem Ver',
    title:
      'Seu próximo destino começa aqui.',
    text:
      'A Vem Ver Turismo conecta você às experiências dos Lençóis Maranhenses, com informações claras, atendimento próximo e opções para diferentes estilos de viagem.',
    whatsapp: 'Falar com a Vem Ver',
    differentials: [
      {
        title: 'Experiências nos Lençóis',
        text:
          'Conheça diferentes paisagens e passeios da região dos Lençóis Maranhenses.',
      },
      {
        title: 'Atendimento próximo',
        text:
          'Tire suas dúvidas e consulte os detalhes da sua viagem diretamente com a Vem Ver.',
      },
      {
        title: 'Informações claras',
        text:
          'Encontre no site detalhes sobre passeios, duração, valores e condições.',
      },
      {
        title: 'Momentos especiais',
        text:
          'Opções compartilhadas e experiências privativas para diferentes estilos de viagem.',
      },
    ],
  },

  en: {
    label: 'About Vem Ver',
    title:
      'Your next destination starts here.',
    text:
      'Vem Ver Turismo connects you with experiences in Lençóis Maranhenses, offering clear information, personal assistance and options for different travel styles.',
    whatsapp: 'Talk to Vem Ver',
    differentials: [
      {
        title: 'Lençóis experiences',
        text:
          'Discover different landscapes and tours in the Lençóis Maranhenses region.',
      },
      {
        title: 'Personal assistance',
        text:
          'Ask questions and check the details of your trip directly with Vem Ver.',
      },
      {
        title: 'Clear information',
        text:
          'Find details about tours, duration, prices and conditions on our website.',
      },
      {
        title: 'Special moments',
        text:
          'Shared tours and private experiences for different travel styles.',
      },
    ],
  },

  es: {
    label: 'Sobre Vem Ver',
    title:
      'Tu próximo destino comienza aquí.',
    text:
      'Vem Ver Turismo te conecta con experiencias en los Lençóis Maranhenses, con información clara, atención cercana y opciones para diferentes estilos de viaje.',
    whatsapp: 'Hablar con Vem Ver',
    differentials: [
      {
        title: 'Experiencias en los Lençóis',
        text:
          'Descubre diferentes paisajes y excursiones de la región de los Lençóis Maranhenses.',
      },
      {
        title: 'Atención cercana',
        text:
          'Resuelve tus dudas y consulta los detalles de tu viaje directamente con Vem Ver.',
      },
      {
        title: 'Información clara',
        text:
          'Encuentra en el sitio detalles sobre excursiones, duración, precios y condiciones.',
      },
      {
        title: 'Momentos especiales',
        text:
          'Opciones compartidas y experiencias privadas para diferentes estilos de viaje.',
      },
    ],
  },

  fr: {
    label: 'À propos de Vem Ver',
    title:
      'Votre prochaine destination commence ici.',
    text:
      'Vem Ver Turismo vous connecte aux expériences des Lençóis Maranhenses, avec des informations claires, un accompagnement personnalisé et des options adaptées à différents styles de voyage.',
    whatsapp: 'Parler avec Vem Ver',
    differentials: [
      {
        title: 'Expériences dans les Lençóis',
        text:
          'Découvrez différents paysages et excursions dans la région des Lençóis Maranhenses.',
      },
      {
        title: 'Accompagnement personnalisé',
        text:
          'Posez vos questions et consultez les détails de votre voyage directement avec Vem Ver.',
      },
      {
        title: 'Informations claires',
        text:
          'Retrouvez sur le site les détails des excursions, leur durée, les tarifs et les conditions.',
      },
      {
        title: 'Moments privilégiés',
        text:
          'Des options partagées et des expériences privées pour différents styles de voyage.',
      },
    ],
  },

  it: {
    label: 'Chi è Vem Ver',
    title:
      'La tua prossima destinazione inizia qui.',
    text:
      'Vem Ver Turismo ti porta alla scoperta delle esperienze nei Lençóis Maranhenses, con informazioni chiare, assistenza personale e opzioni per diversi stili di viaggio.',
    whatsapp: 'Parla con Vem Ver',
    differentials: [
      {
        title: 'Esperienze nei Lençóis',
        text:
          'Scopri paesaggi ed escursioni nella regione dei Lençóis Maranhenses.',
      },
      {
        title: 'Assistenza personale',
        text:
          'Chiedi informazioni e consulta i dettagli del tuo viaggio direttamente con Vem Ver.',
      },
      {
        title: 'Informazioni chiare',
        text:
          'Trova sul sito dettagli su escursioni, durata, prezzi e condizioni.',
      },
      {
        title: 'Momenti speciali',
        text:
          'Opzioni condivise ed esperienze private per diversi stili di viaggio.',
      },
    ],
  },

  zh: {
    label: '关于 Vem Ver',
    title:
      '您的下一段旅程，从这里开始。',
    text:
      'Vem Ver Turismo 带您探索马拉尼昂沙漠国家公园的精彩体验，提供清晰的信息、贴心的服务以及适合不同旅行方式的选择。',
    whatsapp: '联系 Vem Ver',
    differentials: [
      {
        title: '探索 Lençóis',
        text:
          '探索 Lençóis Maranhenses 地区不同的自然景观和旅游体验。',
      },
      {
        title: '贴心服务',
        text:
          '您可以直接向 Vem Ver 咨询问题并了解旅行详情。',
      },
      {
        title: '信息清晰',
        text:
          '在网站上查看行程、时长、价格和相关条件。',
      },
      {
        title: '特别体验',
        text:
          '提供适合不同旅行方式的拼团和私人体验。',
      },
    ],
  },

  ja: {
    label: 'Vem Verについて',
    title:
      '次の旅は、ここから始まります。',
    text:
      'Vem Ver Turismoは、レンソイス・マラニャンセスの魅力的な体験をご案内します。分かりやすい情報、丁寧なサポート、さまざまな旅行スタイルに合わせたプランをご用意しています。',
    whatsapp: 'Vem Verに相談する',
    differentials: [
      {
        title: 'レンソイスの体験',
        text:
          'レンソイス・マラニャンセス地域のさまざまな景色やツアーをお楽しみいただけます。',
      },
      {
        title: '丁寧なサポート',
        text:
          '旅行についての質問や詳細をVem Verに直接ご相談いただけます。',
      },
      {
        title: '分かりやすい情報',
        text:
          'ツアー、所要時間、料金、条件などの詳細をご確認いただけます。',
      },
      {
        title: '特別な時間',
        text:
          'さまざまな旅行スタイルに合わせた共同ツアーとプライベート体験をご用意しています。',
      },
    ],
  },
}

const icons = [
  MapPin,
  MessageCircle,
  ShieldCheck,
  Sparkles,
]

export function About() {
  const { about } = siteConfig
  const { locale } = useLocale()

  const content =
    aboutTranslations[locale] ||
    aboutTranslations.pt

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
              {content.label}
            </p>

            <h2
              id="sobre-title"
              className="mt-3 font-serif text-3xl font-semibold leading-tight text-balance md:text-4xl"
            >
              {content.title}
            </h2>

            <p className="mt-5 text-lg leading-relaxed text-primary-foreground/90 text-pretty">
              {content.text}
            </p>

            {/* Diferenciais */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {content.differentials.map(
                (item, index) => {
                  const Icon =
                    icons[index]

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
                },
              )}
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
                {content.whatsapp}
              </CtaLink>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
