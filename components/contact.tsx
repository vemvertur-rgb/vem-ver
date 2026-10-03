'use client'

import {
  Mail,
  MapPin,
  MessageCircle,
} from 'lucide-react'

import { siteConfig } from '@/lib/site-config'
import { whatsappLink } from '@/lib/links'

import { ContactForm } from './contact-form'
import {
  InstagramIcon,
  WhatsAppIcon,
} from './brand-icons'

import { useLocale } from './locale-provider'

type ContactContent = {
  eyebrow: string
  title: string
  description: string
  contactTitle: string
  contactDescription: string
  whatsappDescription: string
  destination: string
  whatsappButton: string
  formTitle: string
  formDescription: string
}

const contentByLocale: Record<
  string,
  ContactContent
> = {
  pt: {
    eyebrow: 'Fale com a Vem Ver',
    title: 'Vamos planejar sua experiência?',
    description:
      'Escolha seu passeio, informe a data desejada e entre em contato com a Vem Ver para consultar disponibilidade e detalhes.',
    contactTitle: 'Entre em contato',
    contactDescription:
      'Estamos à disposição para ajudar você a encontrar o passeio ideal para sua viagem aos Lençóis Maranhenses.',
    whatsappDescription:
      'Fale diretamente com a Vem Ver',
    destination: 'Destino',
    whatsappButton: 'Falar pelo WhatsApp',
    formTitle: 'Solicite informações',
    formDescription:
      'Preencha seus dados. Ao enviar, o WhatsApp será aberto com sua solicitação pronta para você conferir e enviar.',
  },

  en: {
    eyebrow: 'Talk to Vem Ver',
    title: 'Let’s plan your experience?',
    description:
      'Choose your tour, provide your preferred date and contact Vem Ver to check availability and details.',
    contactTitle: 'Get in touch',
    contactDescription:
      'We are here to help you find the ideal tour for your trip to Lençóis Maranhenses.',
    whatsappDescription:
      'Talk directly to Vem Ver',
    destination: 'Destination',
    whatsappButton: 'Chat on WhatsApp',
    formTitle: 'Request information',
    formDescription:
      'Fill in your details. When you submit the form, WhatsApp will open with your request ready for you to review and send.',
  },

  es: {
    eyebrow: 'Habla con Vem Ver',
    title: '¿Planeamos tu experiencia?',
    description:
      'Elige tu excursión, indica la fecha deseada y contacta con Vem Ver para consultar disponibilidad y detalles.',
    contactTitle: 'Ponte en contacto',
    contactDescription:
      'Estamos disponibles para ayudarte a encontrar la excursión ideal para tu viaje a los Lençóis Maranhenses.',
    whatsappDescription:
      'Habla directamente con Vem Ver',
    destination: 'Destino',
    whatsappButton: 'Hablar por WhatsApp',
    formTitle: 'Solicita información',
    formDescription:
      'Completa tus datos. Al enviar, WhatsApp se abrirá con tu solicitud lista para que la revises y envíes.',
  },

  fr: {
    eyebrow: 'Contactez Vem Ver',
    title: 'Planifions votre expérience ?',
    description:
      'Choisissez votre excursion, indiquez la date souhaitée et contactez Vem Ver pour vérifier les disponibilités et les détails.',
    contactTitle: 'Nous contacter',
    contactDescription:
      'Nous sommes à votre disposition pour vous aider à trouver l’excursion idéale pour votre voyage aux Lençóis Maranhenses.',
    whatsappDescription:
      'Contactez directement Vem Ver',
    destination: 'Destination',
    whatsappButton: 'Parler sur WhatsApp',
    formTitle: 'Demander des informations',
    formDescription:
      'Remplissez vos informations. Après l’envoi, WhatsApp s’ouvrira avec votre demande prête à être vérifiée et envoyée.',
  },

  it: {
    eyebrow: 'Parla con Vem Ver',
    title: 'Organizziamo la tua esperienza?',
    description:
      'Scegli la tua escursione, indica la data desiderata e contatta Vem Ver per verificare disponibilità e dettagli.',
    contactTitle: 'Contattaci',
    contactDescription:
      'Siamo a tua disposizione per aiutarti a trovare l’escursione ideale per il tuo viaggio nei Lençóis Maranhenses.',
    whatsappDescription:
      'Parla direttamente con Vem Ver',
    destination: 'Destinazione',
    whatsappButton: 'Parla su WhatsApp',
    formTitle: 'Richiedi informazioni',
    formDescription:
      'Inserisci i tuoi dati. Dopo l’invio, WhatsApp si aprirà con la tua richiesta pronta per essere controllata e inviata.',
  },

  zh: {
    eyebrow: '联系 Vem Ver',
    title: '一起规划您的旅程吧？',
    description:
      '选择您的行程，填写希望出行的日期，并联系 Vem Ver 咨询可用时间和详细信息。',
    contactTitle: '联系我们',
    contactDescription:
      '我们很乐意帮助您为马拉尼昂沙漠国家公园之旅找到合适的行程。',
    whatsappDescription:
      '直接联系 Vem Ver',
    destination: '目的地',
    whatsappButton: '通过 WhatsApp 联系',
    formTitle: '咨询详细信息',
    formDescription:
      '填写您的信息。提交后，WhatsApp 将打开，并生成一条准备好的咨询内容供您确认和发送。',
  },

  ja: {
    eyebrow: 'Vem Verに相談する',
    title: '旅のプランを一緒に考えませんか？',
    description:
      'ツアーを選び、ご希望の日程をお知らせください。Vem Verにお問い合わせいただければ、空き状況や詳細をご案内します。',
    contactTitle: 'お問い合わせ',
    contactDescription:
      'レンソイス・マラニャンセスへの旅行にぴったりのツアー選びをお手伝いします。',
    whatsappDescription:
      'Vem Verに直接相談する',
    destination: '目的地',
    whatsappButton: 'WhatsAppで相談する',
    formTitle: '詳細を問い合わせる',
    formDescription:
      '情報を入力してください。送信するとWhatsAppが開き、内容を確認して送信できる状態になります。',
  },
}

export function Contact() {
  const { locale } = useLocale()

  const content =
    contentByLocale[locale] ||
    contentByLocale.pt

  return (
    <section
      id="contato"
      aria-labelledby="contato-title"
      className="bg-sand px-4 py-20 md:px-6 md:py-28"
    >
      <div className="mx-auto max-w-6xl">

        {/* Título */}
        <div className="vem-ver-fade-up mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            {content.eyebrow}
          </p>

          <h2
            id="contato-title"
            className="mt-3 font-serif text-3xl font-semibold leading-tight text-balance md:text-4xl"
          >
            {content.title}
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-muted-foreground text-pretty">
            {content.description}
          </p>
        </div>

        {/* Conteúdo */}
        <div className="mt-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">

          {/* Informações */}
          <div className="vem-ver-fade-left order-2 rounded-3xl bg-primary p-7 text-primary-foreground shadow-sm md:p-8 lg:order-1">

            <h3 className="font-serif text-2xl font-semibold">
              {content.contactTitle}
            </h3>

            <p className="mt-3 leading-relaxed text-primary-foreground/80">
              {content.contactDescription}
            </p>

            <div className="mt-8 space-y-5">

              {/* WhatsApp */}
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="vem-ver-card group flex items-start gap-4 rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-4"
              >
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary-foreground/10 transition-transform duration-300 group-hover:scale-105">
                  <WhatsAppIcon />
                </div>

                <div>
                  <p className="font-semibold">
                    WhatsApp
                  </p>

                  <p className="mt-1 text-sm text-primary-foreground/70">
                    {content.whatsappDescription}
                  </p>
                </div>
              </a>

              {/* Instagram */}
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="vem-ver-card group flex items-start gap-4 rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-4"
              >
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary-foreground/10 transition-transform duration-300 group-hover:scale-105">
                  <InstagramIcon />
                </div>

                <div>
                  <p className="font-semibold">
                    Instagram
                  </p>

                  <p className="mt-1 text-sm text-primary-foreground/70">
                    {siteConfig.instagramHandle}
                  </p>
                </div>
              </a>

              {/* E-mail */}
              <a
                href={`mailto:${siteConfig.email}`}
                className="vem-ver-card group flex items-start gap-4 rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-4"
              >
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary-foreground/10 transition-transform duration-300 group-hover:scale-105">
                  <Mail
                    className="size-5"
                    aria-hidden="true"
                  />
                </div>

                <div>
                  <p className="font-semibold">
                    E-mail
                  </p>

                  <p className="mt-1 break-all text-sm text-primary-foreground/70">
                    {siteConfig.email}
                  </p>
                </div>
              </a>

              {/* Localização */}
              <div className="vem-ver-card group flex items-start gap-4 rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-4">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary-foreground/10 transition-transform duration-300 group-hover:scale-105">
                  <MapPin
                    className="size-5"
                    aria-hidden="true"
                  />
                </div>

                <div>
                  <p className="font-semibold">
                    {content.destination}
                  </p>

                  <p className="mt-1 text-sm text-primary-foreground/70">
                    {siteConfig.location}
                  </p>
                </div>
              </div>

            </div>

            {/* Botão WhatsApp */}
            <div className="mt-8">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="vem-ver-button inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-primary transition-colors hover:bg-white/90"
              >
                <WhatsAppIcon />
                {content.whatsappButton}
              </a>
            </div>

          </div>

          {/* Formulário */}
          <div className="vem-ver-fade-right order-1 rounded-3xl border border-border bg-card p-6 shadow-sm transition-shadow duration-300 hover:shadow-md md:p-8 lg:order-2">

            <div className="mb-6">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 hover:scale-105">
                  <MessageCircle
                    className="size-5"
                    aria-hidden="true"
                  />
                </div>

                <h3 className="font-serif text-2xl font-semibold">
                  {content.formTitle}
                </h3>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {content.formDescription}
              </p>
            </div>

            <ContactForm />

          </div>

        </div>
      </div>
    </section>
  )
}
