'use client'

import {
  useState,
  type FormEvent,
} from 'react'

import { CheckCircle2 } from 'lucide-react'

import {
  siteConfig,
  tours,
  privateExperiences,
} from '@/lib/site-config'

import { whatsappLink } from '@/lib/links'
import { useLocale } from './locale-provider'

type Status =
  | 'idle'
  | 'sending'
  | 'sent-form'
  | 'sent-whatsapp'
  | 'error'

type FormContent = {
  name: string
  namePlaceholder: string
  date: string
  days: string
  selectOption: string
  dayOptions: string[]
  people: string
  peoplePlaceholder: string
  tours: string
  suggestion: string
  multipleTours: string
  accommodation: string
  accommodationOptions: string[]
  transfer: string
  transferOptions: string[]
  message: string
  messagePlaceholder: string
  sending: string
  submit: string
  sentForm: string
  sentWhatsapp: string
  error: string
  whatsappIntro: string
  dateMessage: string
  daysMessage: string
  peopleMessage: string
  toursMessage: string
  accommodationMessage: string
  transferMessage: string
  messageLabel: string
  accommodationValues: string[]
  transferValues: string[]
  suggestionValue: string
  noAccommodationValue: string
  decidingAccommodationValue: string
  yesTransferValue: string
  noTransferValue: string
  decidingTransferValue: string
}

const formByLocale: Record<
  string,
  FormContent
> = {
  pt: {
    name: 'Nome',
    namePlaceholder: 'Seu nome',
    date: 'Data pretendida',
    days: 'Quantos dias de passeio pretende ter?',
    selectOption: 'Selecione uma opção',
    dayOptions: [
      '1 dia',
      '2 dias',
      '3 dias',
      '4 dias',
      '5 dias',
      '6 dias',
      '7 dias ou mais',
    ],
    people: 'Número de pessoas',
    peoplePlaceholder: 'Ex.: 2',
    tours:
      'Quais passeios você tem interesse em fazer?',
    suggestion:
      'Ainda não sei / gostaria de receber uma sugestão',
    multipleTours:
      'Você pode selecionar mais de um passeio.',
    accommodation:
      'Você já possui hospedagem?',
    accommodationOptions: [
      'Sim, já tenho pousada/hospedagem',
      'Não, ainda não tenho',
      'Ainda estou decidindo',
    ],
    transfer:
      'Precisa de transfer para Barreirinhas?',
    transferOptions: [
      'Sim',
      'Não',
      'Ainda não sei',
    ],
    message: 'Mensagem',
    messagePlaceholder:
      'Conte um pouco sobre a sua viagem, suas dúvidas ou o que você gostaria de conhecer.',
    sending: 'Enviando...',
    submit: 'Enviar solicitação',
    sentForm:
      'Solicitação enviada! Em breve a VEM VER Turismo entrará em contato.',
    sentWhatsapp:
      'Abrimos o WhatsApp com a sua mensagem. É só conferir e enviar!',
    error:
      'Não foi possível enviar a solicitação. Tente novamente ou fale diretamente pelo WhatsApp.',
    whatsappIntro:
      'Olá! Vim pelo site da VEM VER Turismo e gostaria de fazer uma solicitação.',
    dateMessage: 'Data pretendida',
    daysMessage:
      'Dias previstos em Barreirinhas',
    peopleMessage: 'Número de pessoas',
    toursMessage:
      'Passeios de interesse',
    accommodationMessage:
      'Hospedagem',
    transferMessage:
      'Transfer para Barreirinhas',
    messageLabel: 'Mensagem',
    accommodationValues: [
      'Sim, já tenho pousada/hospedagem',
      'Não, ainda não tenho',
      'Ainda estou decidindo',
    ],
    transferValues: [
      'Sim',
      'Não',
      'Ainda não sei',
    ],
    suggestionValue:
      'Ainda não sei / gostaria de receber uma sugestão',
    noAccommodationValue:
      'Não, ainda não tenho',
    decidingAccommodationValue:
      'Ainda estou decidindo',
    yesTransferValue: 'Sim',
    noTransferValue: 'Não',
    decidingTransferValue:
      'Ainda não sei',
  },

  en: {
    name: 'Name',
    namePlaceholder: 'Your name',
    date: 'Preferred date',
    days: 'How many days of tours are you planning?',
    selectOption: 'Select an option',
    dayOptions: [
      '1 day',
      '2 days',
      '3 days',
      '4 days',
      '5 days',
      '6 days',
      '7 days or more',
    ],
    people: 'Number of people',
    peoplePlaceholder: 'E.g.: 2',
    tours:
      'Which tours are you interested in?',
    suggestion:
      "I'm not sure yet / I would like a suggestion",
    multipleTours:
      'You can select more than one tour.',
    accommodation:
      'Do you already have accommodation?',
    accommodationOptions: [
      'Yes, I already have accommodation',
      'No, I do not have accommodation yet',
      'I am still deciding',
    ],
    transfer:
      'Do you need a transfer to Barreirinhas?',
    transferOptions: [
      'Yes',
      'No',
      "I'm not sure yet",
    ],
    message: 'Message',
    messagePlaceholder:
      'Tell us a little about your trip, your questions, or what you would like to visit.',
    sending: 'Sending...',
    submit: 'Send request',
    sentForm:
      'Request sent! VEM VER Turismo will contact you soon.',
    sentWhatsapp:
      'We opened WhatsApp with your message. Just review it and send!',
    error:
      'We could not send your request. Please try again or contact us directly on WhatsApp.',
    whatsappIntro:
      'Hello! I came through the VEM VER Turismo website and would like to make an inquiry.',
    dateMessage: 'Preferred date',
    daysMessage:
      'Planned days in Barreirinhas',
    peopleMessage: 'Number of people',
    toursMessage:
      'Tours of interest',
    accommodationMessage:
      'Accommodation',
    transferMessage:
      'Transfer to Barreirinhas',
    messageLabel: 'Message',
    accommodationValues: [
      'Yes, I already have accommodation',
      'No, I do not have accommodation yet',
      'I am still deciding',
    ],
    transferValues: [
      'Yes',
      'No',
      "I'm not sure yet",
    ],
    suggestionValue:
      "I'm not sure yet / I would like a suggestion",
    noAccommodationValue:
      'No, I do not have accommodation yet',
    decidingAccommodationValue:
      'I am still deciding',
    yesTransferValue: 'Yes',
    noTransferValue: 'No',
    decidingTransferValue:
      "I'm not sure yet",
  },

  es: {
    name: 'Nombre',
    namePlaceholder: 'Tu nombre',
    date: 'Fecha deseada',
    days: '¿Cuántos días de paseos tienes previsto realizar?',
    selectOption: 'Selecciona una opción',
    dayOptions: [
      '1 día',
      '2 días',
      '3 días',
      '4 días',
      '5 días',
      '6 días',
      '7 días o más',
    ],
    people: 'Número de personas',
    peoplePlaceholder: 'Ej.: 2',
    tours:
      '¿Qué paseos te interesa realizar?',
    suggestion:
      'Aún no lo sé / me gustaría recibir una sugerencia',
    multipleTours:
      'Puedes seleccionar más de un paseo.',
    accommodation:
      '¿Ya tienes alojamiento?',
    accommodationOptions: [
      'Sí, ya tengo posada/alojamiento',
      'No, todavía no tengo',
      'Todavía estoy decidiendo',
    ],
    transfer:
      '¿Necesitas traslado a Barreirinhas?',
    transferOptions: [
      'Sí',
      'No',
      'Aún no lo sé',
    ],
    message: 'Mensaje',
    messagePlaceholder:
      'Cuéntanos un poco sobre tu viaje, tus dudas o lo que te gustaría conocer.',
    sending: 'Enviando...',
    submit: 'Enviar solicitud',
    sentForm:
      '¡Solicitud enviada! VEM VER Turismo se pondrá en contacto contigo pronto.',
    sentWhatsapp:
      'Abrimos WhatsApp con tu mensaje. ¡Solo tienes que revisarlo y enviarlo!',
    error:
      'No fue posible enviar la solicitud. Inténtalo de nuevo o habla directamente por WhatsApp.',
    whatsappIntro:
      '¡Hola! Llegué a través del sitio web de VEM VER Turismo y me gustaría hacer una solicitud.',
    dateMessage: 'Fecha deseada',
    daysMessage:
      'Días previstos en Barreirinhas',
    peopleMessage: 'Número de personas',
    toursMessage:
      'Paseos de interés',
    accommodationMessage:
      'Alojamiento',
    transferMessage:
      'Traslado a Barreirinhas',
    messageLabel: 'Mensaje',
    accommodationValues: [
      'Sí, ya tengo posada/alojamiento',
      'No, todavía no tengo',
      'Todavía estoy decidiendo',
    ],
    transferValues: [
      'Sí',
      'No',
      'Aún no lo sé',
    ],
    suggestionValue:
      'Aún no lo sé / me gustaría recibir una sugerencia',
    noAccommodationValue:
      'No, todavía no tengo',
    decidingAccommodationValue:
      'Todavía estoy decidiendo',
    yesTransferValue: 'Sí',
    noTransferValue: 'No',
    decidingTransferValue:
      'Aún no lo sé',
  },

  fr: {
    name: 'Nom',
    namePlaceholder: 'Votre nom',
    date: 'Date souhaitée',
    days: 'Combien de jours de visites prévoyez-vous ?',
    selectOption: 'Sélectionnez une option',
    dayOptions: [
      '1 jour',
      '2 jours',
      '3 jours',
      '4 jours',
      '5 jours',
      '6 jours',
      '7 jours ou plus',
    ],
    people: 'Nombre de personnes',
    peoplePlaceholder: 'Ex. : 2',
    tours:
      'Quelles visites souhaitez-vous faire ?',
    suggestion:
      'Je ne sais pas encore / je souhaite recevoir une suggestion',
    multipleTours:
      'Vous pouvez sélectionner plusieurs visites.',
    accommodation:
      'Avez-vous déjà un hébergement ?',
    accommodationOptions: [
      'Oui, j’ai déjà une pousada/un hébergement',
      'Non, je n’en ai pas encore',
      'Je suis encore en train de décider',
    ],
    transfer:
      'Avez-vous besoin d’un transfert vers Barreirinhas ?',
    transferOptions: [
      'Oui',
      'Non',
      'Je ne sais pas encore',
    ],
    message: 'Message',
    messagePlaceholder:
      'Parlez-nous un peu de votre voyage, de vos questions ou de ce que vous souhaitez découvrir.',
    sending: 'Envoi...',
    submit: 'Envoyer la demande',
    sentForm:
      'Demande envoyée ! VEM VER Turismo vous contactera bientôt.',
    sentWhatsapp:
      'WhatsApp a été ouvert avec votre message. Il vous suffit de le vérifier et de l’envoyer !',
    error:
      'Impossible d’envoyer la demande. Réessayez ou contactez-nous directement par WhatsApp.',
    whatsappIntro:
      'Bonjour ! Je viens du site de VEM VER Turismo et je souhaite faire une demande.',
    dateMessage: 'Date souhaitée',
    daysMessage:
      'Nombre de jours prévus à Barreirinhas',
    peopleMessage: 'Nombre de personnes',
    toursMessage:
      'Visites souhaitées',
    accommodationMessage:
      'Hébergement',
    transferMessage:
      'Transfert vers Barreirinhas',
    messageLabel: 'Message',
    accommodationValues: [
      'Oui, j’ai déjà une pousada/un hébergement',
      'Non, je n’en ai pas encore',
      'Je suis encore en train de décider',
    ],
    transferValues: [
      'Oui',
      'Non',
      'Je ne sais pas encore',
    ],
    suggestionValue:
      'Je ne sais pas encore / je souhaite recevoir une suggestion',
    noAccommodationValue:
      'Non, je n’en ai pas encore',
    decidingAccommodationValue:
      'Je suis encore en train de décider',
    yesTransferValue: 'Oui',
    noTransferValue: 'Non',
    decidingTransferValue:
      'Je ne sais pas encore',
  },

  it: {
    name: 'Nome',
    namePlaceholder: 'Il tuo nome',
    date: 'Data desiderata',
    days: 'Quanti giorni di escursioni prevedi?',
    selectOption: 'Seleziona un’opzione',
    dayOptions: [
      '1 giorno',
      '2 giorni',
      '3 giorni',
      '4 giorni',
      '5 giorni',
      '6 giorni',
      '7 giorni o più',
    ],
    people: 'Numero di persone',
    peoplePlaceholder: 'Es.: 2',
    tours:
      'Quali escursioni ti interessano?',
    suggestion:
      'Non lo so ancora / vorrei ricevere un suggerimento',
    multipleTours:
      'Puoi selezionare più di un’escursione.',
    accommodation:
      'Hai già un alloggio?',
    accommodationOptions: [
      'Sì, ho già una pousada/un alloggio',
      'No, non ne ho ancora uno',
      'Sto ancora decidendo',
    ],
    transfer:
      'Hai bisogno di un trasferimento per Barreirinhas?',
    transferOptions: [
      'Sì',
      'No',
      'Non lo so ancora',
    ],
    message: 'Messaggio',
    messagePlaceholder:
      'Raccontaci qualcosa sul tuo viaggio, sulle tue domande o su ciò che vorresti visitare.',
    sending: 'Invio...',
    submit: 'Invia richiesta',
    sentForm:
      'Richiesta inviata! VEM VER Turismo ti contatterà presto.',
    sentWhatsapp:
      'Abbiamo aperto WhatsApp con il tuo messaggio. Controllalo e invialo!',
    error:
      'Non è stato possibile inviare la richiesta. Riprova o contattaci direttamente tramite WhatsApp.',
    whatsappIntro:
      'Ciao! Sono arrivato tramite il sito di VEM VER Turismo e vorrei fare una richiesta.',
    dateMessage: 'Data desiderata',
    daysMessage:
      'Giorni previsti a Barreirinhas',
    peopleMessage: 'Numero di persone',
    toursMessage:
      'Escursioni di interesse',
    accommodationMessage:
      'Alloggio',
    transferMessage:
      'Trasferimento per Barreirinhas',
    messageLabel: 'Messaggio',
    accommodationValues: [
      'Sì, ho già una pousada/un alloggio',
      'No, non ne ho ancora uno',
      'Sto ancora decidendo',
    ],
    transferValues: [
      'Sì',
      'No',
      'Non lo so ancora',
    ],
    suggestionValue:
      'Non lo so ancora / vorrei ricevere un suggerimento',
    noAccommodationValue:
      'No, non ne ho ancora uno',
    decidingAccommodationValue:
      'Sto ancora decidendo',
    yesTransferValue: 'Sì',
    noTransferValue: 'No',
    decidingTransferValue:
      'Non lo so ancora',
  },

  zh: {
    name: '姓名',
    namePlaceholder: '您的姓名',
    date: '期望日期',
    days: '您计划参加几天的游览？',
    selectOption: '请选择',
    dayOptions: [
      '1天',
      '2天',
      '3天',
      '4天',
      '5天',
      '6天',
      '7天或以上',
    ],
    people: '人数',
    peoplePlaceholder: '例如：2',
    tours: '您对哪些游览项目感兴趣？',
    suggestion:
      '还不确定 / 希望获得推荐',
    multipleTours:
      '您可以选择多个游览项目。',
    accommodation: '您已经有住宿了吗？',
    accommodationOptions: [
      '是的，我已经有旅馆/住宿',
      '没有，我还没有',
      '我还在考虑',
    ],
    transfer:
      '您需要前往 Barreirinhas 的接送服务吗？',
    transferOptions: [
      '是',
      '否',
      '还不确定',
    ],
    message: '留言',
    messagePlaceholder:
      '请告诉我们一些您的旅行计划、疑问或您想参观的地方。',
    sending: '发送中...',
    submit: '发送请求',
    sentForm:
      '请求已发送！VEM VER Turismo 很快会与您联系。',
    sentWhatsapp:
      '我们已通过 WhatsApp 打开您的消息。请确认后发送！',
    error:
      '无法发送请求。请重试，或直接通过 WhatsApp 联系我们。',
    whatsappIntro:
      '您好！我通过 VEM VER Turismo 网站找到您，希望咨询旅游服务。',
    dateMessage: '期望日期',
    daysMessage:
      '计划在 Barreirinhas 停留的游览天数',
    peopleMessage: '人数',
    toursMessage: '感兴趣的游览项目',
    accommodationMessage: '住宿',
    transferMessage:
      '前往 Barreirinhas 的接送服务',
    messageLabel: '留言',
    accommodationValues: [
      '是的，我已经有旅馆/住宿',
      '没有，我还没有',
      '我还在考虑',
    ],
    transferValues: [
      '是',
      '否',
      '还不确定',
    ],
    suggestionValue:
      '还不确定 / 希望获得推荐',
    noAccommodationValue:
      '没有，我还没有',
    decidingAccommodationValue:
      '我还在考虑',
    yesTransferValue: '是',
    noTransferValue: '否',
    decidingTransferValue:
      '还不确定',
  },

  ja: {
    name: 'お名前',
    namePlaceholder: 'お名前を入力してください',
    date: '希望日',
    days: '何日間のツアーを予定していますか？',
    selectOption: '選択してください',
    dayOptions: [
      '1日',
      '2日',
      '3日',
      '4日',
      '5日',
      '6日',
      '7日以上',
    ],
    people: '人数',
    peoplePlaceholder: '例：2',
    tours: 'どのツアーに興味がありますか？',
    suggestion:
      'まだ決まっていない / おすすめを知りたい',
    multipleTours:
      '複数のツアーを選択できます。',
    accommodation:
      '宿泊先はすでに決まっていますか？',
    accommodationOptions: [
      'はい、すでに宿泊先があります',
      'いいえ、まだありません',
      'まだ検討中です',
    ],
    transfer:
      'バヘイリーニャスまでの送迎が必要ですか？',
    transferOptions: [
      'はい',
      'いいえ',
      'まだ分かりません',
    ],
    message: 'メッセージ',
    messagePlaceholder:
      '旅行について、質問や訪れたい場所などをお聞かせください。',
    sending: '送信中...',
    submit: 'リクエストを送信',
    sentForm:
      'リクエストを送信しました。VEM VER Turismoから近日中にご連絡します。',
    sentWhatsapp:
      'WhatsAppにメッセージを開きました。内容を確認して送信してください！',
    error:
      'リクエストを送信できませんでした。もう一度お試しいただくか、WhatsAppから直接お問い合わせください。',
    whatsappIntro:
      'こんにちは！VEM VER Turismoのウェブサイトを見て、問い合わせをしたいです。',
    dateMessage: '希望日',
    daysMessage:
      'バヘイリーニャスで予定している日数',
    peopleMessage: '人数',
    toursMessage: '興味のあるツアー',
    accommodationMessage: '宿泊先',
    transferMessage:
      'バヘイリーニャスまでの送迎',
    messageLabel: 'メッセージ',
    accommodationValues: [
      'はい、すでに宿泊先があります',
      'いいえ、まだありません',
      'まだ検討中です',
    ],
    transferValues: [
      'はい',
      'いいえ',
      'まだ分かりません',
    ],
    suggestionValue:
      'まだ決まっていない / おすすめを知りたい',
    noAccommodationValue:
      'いいえ、まだありません',
    decidingAccommodationValue:
      'まだ検討中です',
    yesTransferValue: 'はい',
    noTransferValue: 'いいえ',
    decidingTransferValue:
      'まだ分かりません',
  },
}

const inputClass =
  'min-h-12 w-full rounded-xl border border-input bg-background px-4 text-base text-foreground placeholder:text-muted-foreground/80 focus-visible:border-ring focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/30'

export function ContactForm() {
  const [status, setStatus] =
    useState<Status>('idle')

  const { locale } = useLocale()

  const content =
    formByLocale[locale] ||
    formByLocale.pt

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault()

    const form = event.currentTarget
    const data = new FormData(form)

    const get = (key: string) =>
      String(
        data.get(key) ?? '',
      ).trim()

    const getAll = (key: string) =>
      data
        .getAll(key)
        .map((value) =>
          String(value).trim(),
        )
        .filter(Boolean)

    const selectedTours =
      getAll('tour')

    const {
      actionUrl,
      fields,
    } = siteConfig.googleForm

    if (actionUrl) {
      setStatus('sending')

      const body = new FormData()

      body.append(
        fields.name,
        get('name'),
      )

      body.append(
        fields.date,
        get('date'),
      )

      body.append(
        fields.people,
        get('people'),
      )

      body.append(
        fields.tour,
        selectedTours.join(', '),
      )

      body.append(
        fields.message,
        get('message'),
      )

      try {
        await fetch(
          actionUrl,
          {
            method: 'POST',
            mode: 'no-cors',
            body,
          },
        )

        form.reset()
        setStatus('sent-form')
      } catch {
        setStatus('error')
      }

      return
    }

    const lines = [
      content.whatsappIntro,
      '',

      `${content.name}: ${get(
        'name',
      )}`,

      get('date') &&
        `${content.dateMessage}: ${get(
          'date',
        )
          .split('-')
          .reverse()
          .join('/')}`,

      get('days') &&
        `${content.daysMessage}: ${get(
          'days',
        )}`,

      get('people') &&
        `${content.peopleMessage}: ${get(
          'people',
        )}`,

      selectedTours.length > 0 &&
        `${content.toursMessage}:\n${selectedTours
          .map(
            (tour) =>
              `- ${tour}`,
          )
          .join('\n')}`,

      get('accommodation') &&
        `${content.accommodationMessage}: ${get(
          'accommodation',
        )}`,

      get('transfer') &&
        `${content.transferMessage}: ${get(
          'transfer',
        )}`,

      get('message') &&
        `${content.messageLabel}: ${get(
          'message',
        )}`,
    ].filter(Boolean)

    window.open(
      whatsappLink(
        lines.join('\n'),
      ),
      '_blank',
      'noopener,noreferrer',
    )

    setStatus('sent-whatsapp')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-6"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id="name"
          label={content.name}
        >
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={inputClass}
            placeholder={
              content.namePlaceholder
            }
          />
        </Field>

        <Field
          id="date"
          label={content.date}
        >
          <input
            id="date"
            name="date"
            type="date"
            className={inputClass}
          />
        </Field>

        <Field
          id="days"
          label={content.days}
        >
          <select
            id="days"
            name="days"
            defaultValue=""
            className={inputClass}
          >
            <option value="">
              {content.selectOption}
            </option>

            {content.dayOptions.map(
              (option) => (
                <option
                  key={option}
                  value={option}
                >
                  {option}
                </option>
              ),
            )}
          </select>
        </Field>

        <Field
          id="people"
          label={content.people}
        >
          <input
            id="people"
            name="people"
            type="number"
            min={1}
            inputMode="numeric"
            className={inputClass}
            placeholder={
              content.peoplePlaceholder
            }
          />
        </Field>
      </div>

      <Field
        id="tour"
        label={content.tours}
      >
        <div className="grid gap-1 rounded-2xl border border-input bg-background p-3 sm:grid-cols-2">
          {[
            ...tours,
            ...privateExperiences,
          ].map((tour) => (
            <label
              key={tour.slug}
              className="flex cursor-pointer items-start gap-3 rounded-xl p-3 transition-colors hover:bg-muted"
            >
              <input
                type="checkbox"
                name="tour"
                value={tour.name}
                className="mt-1 size-4 shrink-0 accent-primary"
              />

              <span className="text-sm leading-relaxed">
                {tour.name}
              </span>
            </label>
          ))}

          <label className="flex cursor-pointer items-start gap-3 rounded-xl p-3 transition-colors hover:bg-muted sm:col-span-2">
            <input
              type="checkbox"
              name="tour"
              value={
                content.suggestionValue
              }
              className="mt-1 size-4 shrink-0 accent-primary"
            />

            <span className="text-sm leading-relaxed">
              {content.suggestion}
            </span>
          </label>
        </div>

        <p className="text-xs text-muted-foreground">
          {content.multipleTours}
        </p>
      </Field>

      <Field
        id="accommodation"
        label={content.accommodation}
      >
        <select
          id="accommodation"
          name="accommodation"
          defaultValue=""
          className={inputClass}
        >
          <option value="">
            {content.selectOption}
          </option>

          {content.accommodationOptions.map(
            (option) => (
              <option
                key={option}
                value={option}
              >
                {option}
              </option>
            ),
          )}
        </select>
      </Field>

      <Field
        id="transfer"
        label={content.transfer}
      >
        <select
          id="transfer"
          name="transfer"
          defaultValue=""
          className={inputClass}
        >
          <option value="">
            {content.selectOption}
          </option>

          {content.transferOptions.map(
            (option) => (
              <option
                key={option}
                value={option}
              >
                {option}
              </option>
            ),
          )}
        </select>
      </Field>

      <Field
        id="message"
        label={content.message}
      >
        <textarea
          id="message"
          name="message"
          rows={5}
          className={`${inputClass} py-3`}
          placeholder={
            content.messagePlaceholder
          }
        />
      </Field>

      <button
        type="submit"
        disabled={
          status === 'sending'
        }
        className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-primary px-6 text-base font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === 'sending'
          ? content.sending
          : content.submit}
      </button>

      <div
        aria-live="polite"
        className="text-sm"
      >
        {status ===
          'sent-form' && (
          <p className="flex items-start gap-2 text-accent-foreground">
            <CheckCircle2
              className="mt-0.5 size-4 shrink-0"
              aria-hidden="true"
            />

            <span>
              {content.sentForm}
            </span>
          </p>
        )}

        {status ===
          'sent-whatsapp' && (
          <p className="flex items-start gap-2 text-accent-foreground">
            <CheckCircle2
              className="mt-0.5 size-4 shrink-0"
              aria-hidden="true"
            />

            <span>
              {content.sentWhatsapp}
            </span>
          </p>
        )}

        {status === 'error' && (
          <p className="text-destructive">
            {content.error}
          </p>
        )}
      </div>
    </form>
  )
}

function Field({
  id,
  label,
  children,
}: {
  id: string
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="text-sm font-semibold"
      >
        {label}
      </label>

      {children}
    </div>
  )
}
