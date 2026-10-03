'use client'

import {
  CheckCircle2,
  MessageCircle,
  Search,
  Sparkles,
} from 'lucide-react'

import { SectionHeading } from './section-heading'
import { useLocale } from './locale-provider'

const icons = [
  Search,
  MessageCircle,
  CheckCircle2,
  Sparkles,
]

type Step = {
  number: number
  title: string
  text: string
}

const stepsByLocale: Record<
  string,
  {
    eyebrow: string
    title: string
    description: string
    steps: Step[]
  }
> = {
  pt: {
    eyebrow: 'Como funciona',
    title: 'Seu passeio começa aqui',
    description:
      'Escolha sua experiência, fale com a Vem Ver e prepare-se para conhecer os Lençóis Maranhenses.',
    steps: [
      {
        number: 1,
        title: 'Escolha seu passeio',
        text:
          'Conheça nossas opções de passeios e experiências e escolha a que mais combina com sua viagem.',
      },
      {
        number: 2,
        title: 'Fale com a Vem Ver',
        text:
          'Entre em contato pelo WhatsApp para consultar disponibilidade, valores e detalhes.',
      },
      {
        number: 3,
        title: 'Confirme sua experiência',
        text:
          'Após escolher seu passeio, receba as orientações necessárias para organizar sua experiência.',
      },
      {
        number: 4,
        title: 'Viva os Lençóis',
        text:
          'Agora é só aproveitar as paisagens, lagoas e momentos especiais dos Lençóis Maranhenses.',
      },
    ],
  },

  en: {
    eyebrow: 'How it works',
    title: 'Your adventure starts here',
    description:
      'Choose your experience, talk to Vem Ver and get ready to discover Lençóis Maranhenses.',
    steps: [
      {
        number: 1,
        title: 'Choose your tour',
        text:
          'Explore our tours and experiences and choose the one that best fits your trip.',
      },
      {
        number: 2,
        title: 'Talk to Vem Ver',
        text:
          'Contact us on WhatsApp to check availability, prices and details.',
      },
      {
        number: 3,
        title: 'Confirm your experience',
        text:
          'After choosing your tour, receive the information you need to organize your experience.',
      },
      {
        number: 4,
        title: 'Experience Lençóis',
        text:
          'Now simply enjoy the landscapes, lagoons and special moments of Lençóis Maranhenses.',
      },
    ],
  },

  es: {
    eyebrow: 'Cómo funciona',
    title: 'Tu aventura comienza aquí',
    description:
      'Elige tu experiencia, habla con Vem Ver y prepárate para conocer los Lençóis Maranhenses.',
    steps: [
      {
        number: 1,
        title: 'Elige tu excursión',
        text:
          'Conoce nuestras excursiones y experiencias y elige la que mejor se adapte a tu viaje.',
      },
      {
        number: 2,
        title: 'Habla con Vem Ver',
        text:
          'Contáctanos por WhatsApp para consultar disponibilidad, precios y detalles.',
      },
      {
        number: 3,
        title: 'Confirma tu experiencia',
        text:
          'Después de elegir tu excursión, recibe las orientaciones necesarias para organizar tu experiencia.',
      },
      {
        number: 4,
        title: 'Vive los Lençóis',
        text:
          'Ahora solo tienes que disfrutar de los paisajes, lagunas y momentos especiales de los Lençóis Maranhenses.',
      },
    ],
  },

  fr: {
    eyebrow: 'Comment ça fonctionne',
    title: 'Votre aventure commence ici',
    description:
      'Choisissez votre expérience, contactez Vem Ver et préparez-vous à découvrir les Lençóis Maranhenses.',
    steps: [
      {
        number: 1,
        title: 'Choisissez votre excursion',
        text:
          'Découvrez nos excursions et expériences et choisissez celle qui correspond le mieux à votre voyage.',
      },
      {
        number: 2,
        title: 'Contactez Vem Ver',
        text:
          'Contactez-nous sur WhatsApp pour vérifier les disponibilités, les tarifs et les détails.',
      },
      {
        number: 3,
        title: 'Confirmez votre expérience',
        text:
          'Après avoir choisi votre excursion, recevez les informations nécessaires pour organiser votre expérience.',
      },
      {
        number: 4,
        title: 'Vivez les Lençóis',
        text:
          'Il ne vous reste plus qu’à profiter des paysages, des lagunes et des moments privilégiés des Lençóis Maranhenses.',
      },
    ],
  },

  it: {
    eyebrow: 'Come funziona',
    title: 'La tua avventura inizia qui',
    description:
      'Scegli la tua esperienza, parla con Vem Ver e preparati a scoprire i Lençóis Maranhenses.',
    steps: [
      {
        number: 1,
        title: 'Scegli la tua escursione',
        text:
          'Scopri le nostre escursioni ed esperienze e scegli quella più adatta al tuo viaggio.',
      },
      {
        number: 2,
        title: 'Parla con Vem Ver',
        text:
          'Contattaci su WhatsApp per verificare disponibilità, prezzi e dettagli.',
      },
      {
        number: 3,
        title: 'Conferma la tua esperienza',
        text:
          'Dopo aver scelto la tua escursione, riceverai le informazioni necessarie per organizzare la tua esperienza.',
      },
      {
        number: 4,
        title: 'Vivi i Lençóis',
        text:
          'Ora non resta che goderti i paesaggi, le lagune e i momenti speciali dei Lençóis Maranhenses.',
      },
    ],
  },

  zh: {
    eyebrow: '行程如何进行',
    title: '您的旅程从这里开始',
    description:
      '选择您的体验，与 Vem Ver 联系，准备探索马拉尼昂沙漠国家公园。',
    steps: [
      {
        number: 1,
        title: '选择您的行程',
        text:
          '了解我们的旅游行程和体验，选择最适合您旅行计划的一项。',
      },
      {
        number: 2,
        title: '联系 Vem Ver',
        text:
          '通过 WhatsApp 联系我们，咨询可用日期、价格和详细信息。',
      },
      {
        number: 3,
        title: '确认您的体验',
        text:
          '选择行程后，我们会提供安排体验所需的相关信息。',
      },
      {
        number: 4,
        title: '探索 Lençóis',
        text:
          '接下来，只需尽情享受 Lençóis Maranhenses 的自然景观、湖泊和特别时光。',
      },
    ],
  },

  ja: {
    eyebrow: 'ご利用の流れ',
    title: '旅はここから始まります',
    description:
      '体験を選び、Vem Verにご相談ください。レンソイス・マラニャンセスへの旅が始まります。',
    steps: [
      {
        number: 1,
        title: 'ツアーを選ぶ',
        text:
          'さまざまなツアーや体験をご覧いただき、ご旅行に合ったプランをお選びください。',
      },
      {
        number: 2,
        title: 'Vem Verに相談する',
        text:
          'WhatsAppからお問い合わせいただき、空き状況、料金、詳細をご確認ください。',
      },
      {
        number: 3,
        title: '体験を確定する',
        text:
          'ツアーを選んだら、体験を準備するために必要な情報をご案内します。',
      },
      {
        number: 4,
        title: 'レンソイスを楽しむ',
        text:
          'あとはレンソイス・マラニャンセスの景色、ラグーン、特別な時間をお楽しみください。',
      },
    ],
  },
}

export function HowItWorks() {
  const { locale } = useLocale()

  const content =
    stepsByLocale[locale] ||
    stepsByLocale.pt

  return (
    <section
      id="como-funciona"
      aria-labelledby="como-funciona-title"
      className="bg-sand px-4 py-20 md:px-6 md:py-28"
    >
      <div className="mx-auto max-w-6xl">

        <div className="vem-ver-fade-up">
          <SectionHeading
            id="como-funciona-title"
            eyebrow={content.eyebrow}
            title={content.title}
            description={content.description}
          />
        </div>

        <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {content.steps.map(
            (step, index) => {
              const Icon =
                icons[index] ?? Sparkles

              return (
                <li
                  key={step.number}
                  className="vem-ver-card vem-ver-float-in group relative flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                  style={{
                    animationDelay: `${index * 120}ms`,
                  }}
                >
                  <div className="mb-5 flex items-center justify-between">

                    {/* Número */}
                    <div className="flex size-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground transition-transform duration-300 group-hover:scale-110">
                      {step.number}
                    </div>

                    {/* Ícone */}
                    <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon
                        className="size-5"
                        aria-hidden="true"
                      />
                    </div>
                  </div>

                  <h3 className="font-serif text-xl font-semibold">
                    {step.title}
                  </h3>

                  <p className="mt-2 leading-relaxed text-muted-foreground">
                    {step.text}
                  </p>

                  {/* Linha decorativa */}
                  <div className="mt-auto pt-6">
                    <div className="h-1 w-0 rounded-full bg-primary transition-all duration-500 group-hover:w-12" />
                  </div>
                </li>
              )
            },
          )}
        </ol>
      </div>
    </section>
  )
}
