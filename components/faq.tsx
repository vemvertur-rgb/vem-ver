'use client'

import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

import { SectionHeading } from './section-heading'
import { useLocale } from './locale-provider'

type FaqItem = {
  question: string
  answer: string
}

type FaqContent = {
  eyebrow: string
  title: string
  description: string
  contactQuestion: string
  contactText: string
  items: FaqItem[]
}

const faqByLocale: Record<
  string,
  FaqContent
> = {
  pt: {
    eyebrow: 'Dúvidas frequentes',
    title: 'Tudo o que você precisa saber',
    description:
      'Confira as principais informações antes de reservar sua experiência com a Vem Ver.',
    contactQuestion:
      'Ainda ficou com alguma dúvida?',
    contactText:
      'Fale diretamente com a Vem Ver pelo WhatsApp.',
    items: [
      {
        question:
          'Como faço para reservar um passeio?',
        answer:
          'Escolha o passeio que deseja e entre em contato com a Vem Ver pelo WhatsApp. Nossa equipe poderá consultar a disponibilidade, confirmar os detalhes e orientar você sobre a reserva.',
      },
      {
        question:
          'Os valores apresentados no site são por pessoa?',
        answer:
          'Nos passeios compartilhados, os valores apresentados são por pessoa. Nas experiências privativas, o valor informado corresponde ao grupo de até 9 pessoas, conforme indicado na descrição de cada experiência.',
      },
      {
        question:
          'Vocês oferecem passeios privativos?',
        answer:
          'Sim. A Vem Ver oferece experiências privativas para até 9 pessoas. Consulte as opções disponíveis na seção de experiências privativas.',
      },
      {
        question:
          'O que está incluído nos passeios?',
        answer:
          'Os itens incluídos podem variar de acordo com cada passeio. Consulte a descrição da experiência ou fale com a Vem Ver pelo WhatsApp para confirmar todos os detalhes antes da reserva.',
      },
      {
        question:
          'Como funciona o cancelamento?',
        answer:
          'Após a contratação, o cancelamento poderá seguir estas condições: até 7 dias após a contratação, há reembolso integral caso o serviço ainda não tenha sido realizado. Para cancelamentos realizados com mais de 30 dias de antecedência em relação ao primeiro passeio, o reembolso é de 80%; entre 29 e 15 dias, 70%; entre 14 e 7 dias, 50%. Com menos de 7 dias de antecedência ou em caso de não comparecimento, não haverá reembolso.',
      },
      {
        question:
          'Posso escolher a data do passeio?',
        answer:
          'Sim. A data desejada pode ser informada no momento do contato. A realização do passeio depende da disponibilidade para a data escolhida.',
      },
      {
        question:
          'Preciso ter hospedagem em Barreirinhas?',
        answer:
          'Não necessariamente. Informe sua situação no momento do contato para que possamos orientar você de acordo com o passeio escolhido e a logística da experiência.',
      },
      {
        question:
          'Vocês oferecem transfer para Barreirinhas?',
        answer:
          'Consulte a disponibilidade de transfer no momento do atendimento. A Vem Ver poderá orientar você de acordo com sua necessidade e com a logística da viagem.',
      },
    ],
  },

  en: {
    eyebrow: 'Frequently asked questions',
    title: 'Everything you need to know',
    description:
      'Check the main information before booking your experience with Vem Ver.',
    contactQuestion:
      'Still have a question?',
    contactText:
      'Talk directly to Vem Ver on WhatsApp.',
    items: [
      {
        question:
          'How do I book a tour?',
        answer:
          'Choose the tour you want and contact Vem Ver on WhatsApp. Our team can check availability, confirm the details and guide you through the booking process.',
      },
      {
        question:
          'Are the prices shown on the website per person?',
        answer:
          'For shared tours, the prices shown are per person. For private experiences, the listed price is for a group of up to 9 people, as indicated in each experience description.',
      },
      {
        question:
          'Do you offer private tours?',
        answer:
          'Yes. Vem Ver offers private experiences for groups of up to 9 people. Check the available options in the private experiences section.',
      },
      {
        question:
          'What is included in the tours?',
        answer:
          'Included services may vary depending on the tour. Check the experience description or contact Vem Ver on WhatsApp to confirm all details before booking.',
      },
      {
        question:
          'How does cancellation work?',
        answer:
          'After booking, cancellation follows these conditions: within 7 days of booking, a full refund is available if the service has not yet been provided. For cancellations made more than 30 days before the first tour, the refund is 80%; between 29 and 15 days, 70%; between 14 and 7 days, 50%. Less than 7 days before the tour or in case of no-show, there is no refund.',
      },
      {
        question:
          'Can I choose the tour date?',
        answer:
          'Yes. You can provide your preferred date when contacting us. The tour is subject to availability on the requested date.',
      },
      {
        question:
          'Do I need accommodation in Barreirinhas?',
        answer:
          'Not necessarily. Tell us about your situation when contacting Vem Ver so we can guide you according to the tour and its logistics.',
      },
      {
        question:
          'Do you offer transfers to Barreirinhas?',
        answer:
          'Please check transfer availability when contacting us. Vem Ver can guide you according to your needs and travel logistics.',
      },
    ],
  },

  es: {
    eyebrow: 'Preguntas frecuentes',
    title: 'Todo lo que necesitas saber',
    description:
      'Consulta la información principal antes de reservar tu experiencia con Vem Ver.',
    contactQuestion:
      '¿Todavía tienes alguna duda?',
    contactText:
      'Habla directamente con Vem Ver por WhatsApp.',
    items: [
      {
        question:
          '¿Cómo puedo reservar una excursión?',
        answer:
          'Elige la excursión que deseas y contacta con Vem Ver por WhatsApp. Nuestro equipo puede consultar la disponibilidad, confirmar los detalles y orientarte sobre la reserva.',
      },
      {
        question:
          '¿Los precios indicados en el sitio son por persona?',
        answer:
          'En las excursiones compartidas, los precios indicados son por persona. En las experiencias privadas, el precio corresponde a un grupo de hasta 9 personas, según se indica en la descripción de cada experiencia.',
      },
      {
        question:
          '¿Ofrecen excursiones privadas?',
        answer:
          'Sí. Vem Ver ofrece experiencias privadas para grupos de hasta 9 personas. Consulta las opciones disponibles en la sección de experiencias privadas.',
      },
      {
        question:
          '¿Qué está incluido en las excursiones?',
        answer:
          'Los servicios incluidos pueden variar según la excursión. Consulta la descripción de la experiencia o habla con Vem Ver por WhatsApp para confirmar todos los detalles antes de reservar.',
      },
      {
        question:
          '¿Cómo funciona la cancelación?',
        answer:
          'Después de la contratación, se aplican estas condiciones: hasta 7 días después de la contratación, se permite el reembolso completo si el servicio aún no se ha realizado. Para cancelaciones con más de 30 días de antelación respecto a la primera excursión, el reembolso es del 80%; entre 29 y 15 días, 70%; entre 14 y 7 días, 50%. Con menos de 7 días de antelación o en caso de no presentarse, no habrá reembolso.',
      },
      {
        question:
          '¿Puedo elegir la fecha de la excursión?',
        answer:
          'Sí. Puedes indicar la fecha deseada al ponerte en contacto con nosotros. La realización de la excursión depende de la disponibilidad para la fecha elegida.',
      },
      {
        question:
          '¿Necesito tener alojamiento en Barreirinhas?',
        answer:
          'No necesariamente. Infórmanos de tu situación al contactar con Vem Ver para que podamos orientarte según la excursión y su logística.',
      },
      {
        question:
          '¿Ofrecen traslado a Barreirinhas?',
        answer:
          'Consulta la disponibilidad de traslado durante la atención. Vem Ver podrá orientarte según tus necesidades y la logística del viaje.',
      },
    ],
  },

  fr: {
    eyebrow: 'Questions fréquentes',
    title: 'Tout ce que vous devez savoir',
    description:
      'Consultez les principales informations avant de réserver votre expérience avec Vem Ver.',
    contactQuestion:
      'Vous avez encore une question ?',
    contactText:
      'Contactez directement Vem Ver sur WhatsApp.',
    items: [
      {
        question:
          'Comment réserver une excursion ?',
        answer:
          'Choisissez l’excursion souhaitée et contactez Vem Ver sur WhatsApp. Notre équipe pourra vérifier les disponibilités, confirmer les détails et vous guider pour la réservation.',
      },
      {
        question:
          'Les tarifs indiqués sur le site sont-ils par personne ?',
        answer:
          'Pour les excursions partagées, les tarifs indiqués sont par personne. Pour les expériences privées, le tarif correspond à un groupe allant jusqu’à 9 personnes, comme indiqué dans la description de chaque expérience.',
      },
      {
        question:
          'Proposez-vous des excursions privées ?',
        answer:
          'Oui. Vem Ver propose des expériences privées pour des groupes allant jusqu’à 9 personnes. Consultez les options disponibles dans la section des expériences privées.',
      },
      {
        question:
          'Qu’est-ce qui est inclus dans les excursions ?',
        answer:
          'Les services inclus peuvent varier selon l’excursion. Consultez la description de l’expérience ou contactez Vem Ver sur WhatsApp pour confirmer tous les détails avant de réserver.',
      },
      {
        question:
          'Comment fonctionne l’annulation ?',
        answer:
          'Après la réservation, les conditions suivantes s’appliquent : jusqu’à 7 jours après la réservation, un remboursement intégral est possible si le service n’a pas encore été effectué. Pour une annulation plus de 30 jours avant la première excursion, le remboursement est de 80 % ; entre 29 et 15 jours, 70 % ; entre 14 et 7 jours, 50 %. Moins de 7 jours avant l’excursion ou en cas de non-présentation, aucun remboursement ne sera effectué.',
      },
      {
        question:
          'Puis-je choisir la date de l’excursion ?',
        answer:
          'Oui. Vous pouvez indiquer la date souhaitée lors de votre prise de contact. L’excursion dépend des disponibilités à la date choisie.',
      },
      {
        question:
          'Dois-je avoir un hébergement à Barreirinhas ?',
        answer:
          'Pas nécessairement. Indiquez votre situation lors de votre prise de contact afin que nous puissions vous orienter selon l’excursion choisie et sa logistique.',
      },
      {
        question:
          'Proposez-vous un transfert vers Barreirinhas ?',
        answer:
          'Veuillez vérifier la disponibilité du transfert lors de votre prise de contact. Vem Ver pourra vous orienter selon vos besoins et la logistique de votre voyage.',
      },
    ],
  },

  it: {
    eyebrow: 'Domande frequenti',
    title: 'Tutto quello che devi sapere',
    description:
      'Consulta le principali informazioni prima di prenotare la tua esperienza con Vem Ver.',
    contactQuestion:
      'Hai ancora qualche dubbio?',
    contactText:
      'Parla direttamente con Vem Ver su WhatsApp.',
    items: [
      {
        question:
          'Come posso prenotare un’escursione?',
        answer:
          'Scegli l’escursione che desideri e contatta Vem Ver su WhatsApp. Il nostro team può verificare la disponibilità, confermare i dettagli e guidarti nella prenotazione.',
      },
      {
        question:
          'I prezzi indicati sul sito sono per persona?',
        answer:
          'Per le escursioni condivise, i prezzi indicati sono per persona. Per le esperienze private, il prezzo indicato è per un gruppo fino a 9 persone, come specificato nella descrizione di ogni esperienza.',
      },
      {
        question:
          'Offrite escursioni private?',
        answer:
          'Sì. Vem Ver offre esperienze private per gruppi fino a 9 persone. Consulta le opzioni disponibili nella sezione delle esperienze private.',
      },
      {
        question:
          'Cosa è incluso nelle escursioni?',
        answer:
          'I servizi inclusi possono variare in base all’escursione. Consulta la descrizione dell’esperienza o contatta Vem Ver su WhatsApp per confermare tutti i dettagli prima della prenotazione.',
      },
      {
        question:
          'Come funziona la cancellazione?',
        answer:
          'Dopo la prenotazione si applicano queste condizioni: entro 7 giorni dalla prenotazione è previsto un rimborso completo se il servizio non è ancora stato effettuato. Per cancellazioni effettuate più di 30 giorni prima della prima escursione, il rimborso è dell’80%; tra 29 e 15 giorni, 70%; tra 14 e 7 giorni, 50%. Con meno di 7 giorni di preavviso o in caso di mancata presentazione, non è previsto alcun rimborso.',
      },
      {
        question:
          'Posso scegliere la data dell’escursione?',
        answer:
          'Sì. Puoi indicare la data desiderata quando ci contatti. L’escursione dipende dalla disponibilità per la data scelta.',
      },
      {
        question:
          'Devo avere un alloggio a Barreirinhas?',
        answer:
          'Non necessariamente. Comunica la tua situazione quando contatti Vem Ver, così potremo guidarti in base all’escursione scelta e alla sua logistica.',
      },
      {
        question:
          'Offrite il trasferimento per Barreirinhas?',
        answer:
          'Verifica la disponibilità del trasferimento durante il contatto. Vem Ver potrà guidarti in base alle tue esigenze e alla logistica del viaggio.',
      },
    ],
  },

  zh: {
    eyebrow: '常见问题',
    title: '您需要了解的一切',
    description:
      '在预订 Vem Ver 体验之前，查看主要信息。',
    contactQuestion:
      '还有其他问题吗？',
    contactText:
      '通过 WhatsApp 直接联系 Vem Ver。',
    items: [
      {
        question:
          '如何预订旅游行程？',
        answer:
          '选择您想参加的行程，然后通过 WhatsApp 联系 Vem Ver。我们的团队可以查询可用时间、确认详细信息并协助您完成预订。',
      },
      {
        question:
          '网站上的价格是每人价格吗？',
        answer:
          '拼团行程显示的价格为每人价格。私人体验的价格适用于最多 9 人的团队，具体以每项体验的说明为准。',
      },
      {
        question:
          '你们提供私人行程吗？',
        answer:
          '是的。Vem Ver 提供最多 9 人的私人体验。您可以在私人体验部分查看可选项目。',
      },
      {
        question:
          '旅游行程包含哪些内容？',
        answer:
          '包含的服务可能因行程而异。预订前请查看体验说明，或通过 WhatsApp 联系 Vem Ver 确认所有详细信息。',
      },
      {
        question:
          '取消预订的规则是什么？',
        answer:
          '预订后适用以下条件：预订后的 7 天内，如果服务尚未进行，可获得全额退款。距离第一次行程超过 30 天取消，可退款 80%；提前 29 至 15 天取消，可退款 70%；提前 14 至 7 天取消，可退款 50%。如果距离行程不足 7 天取消，或未按约参加行程，则不予退款。',
      },
      {
        question:
          '可以选择旅游日期吗？',
        answer:
          '可以。联系 Vem Ver 时可以告知您希望的日期。具体行程取决于所选日期的可用情况。',
      },
      {
        question:
          '必须在 Barreirinhas 有住宿吗？',
        answer:
          '不一定。联系 Vem Ver 时告诉我们您的情况，我们会根据您选择的行程和旅行安排为您提供指导。',
      },
      {
        question:
          '你们提供前往 Barreirinhas 的接送服务吗？',
        answer:
          '请在咨询时确认接送服务的可用情况。Vem Ver 会根据您的需求和旅行安排为您提供指导。',
      },
    ],
  },

  ja: {
    eyebrow: 'よくある質問',
    title: 'ご予約前に知っておきたいこと',
    description:
      'Vem Verの体験を予約する前に、主な情報をご確認ください。',
    contactQuestion:
      'まだご質問がありますか？',
    contactText:
      'WhatsAppからVem Verに直接ご相談ください。',
    items: [
      {
        question:
          'ツアーはどのように予約できますか？',
        answer:
          'ご希望のツアーを選び、WhatsAppからVem Verにお問い合わせください。空き状況の確認、詳細の確認、予約についてのご案内をいたします。',
      },
      {
        question:
          'サイトに表示されている料金は1人あたりですか？',
        answer:
          '共同ツアーの場合、表示料金は1人あたりです。プライベート体験の場合、表示料金は最大9名までのグループ料金です。詳しくは各体験の説明をご確認ください。',
      },
      {
        question:
          'プライベートツアーはありますか？',
        answer:
          'はい。Vem Verでは最大9名までのプライベート体験をご用意しています。プライベート体験のセクションからご確認ください。',
      },
      {
        question:
          'ツアーには何が含まれていますか？',
        answer:
          '含まれるサービスはツアーによって異なります。予約前に体験の説明をご確認いただくか、WhatsAppからVem Verにお問い合わせください。',
      },
      {
        question:
          'キャンセルのルールを教えてください。',
        answer:
          '予約後は以下の条件が適用されます。予約から7日以内で、まだサービスが実施されていない場合は全額返金となります。最初のツアー日の30日以上前のキャンセルは80%、29日前から15日前までは70%、14日前から7日前までは50%の返金となります。ツアー日の7日未満前のキャンセル、または無断不参加の場合は返金されません。',
      },
      {
        question:
          'ツアーの日付を選べますか？',
        answer:
          'はい。お問い合わせの際にご希望の日付をお知らせください。ツアーの実施はご希望の日付の空き状況によります。',
      },
      {
        question:
          'Barreirinhasで宿泊先を用意する必要がありますか？',
        answer:
          '必ずしも必要ではありません。お問い合わせの際に現在の状況をお知らせいただければ、選択されたツアーと旅行の流れに合わせてご案内します。',
      },
      {
        question:
          'Barreirinhasまでの送迎はありますか？',
        answer:
          '送迎の利用可能状況については、お問い合わせの際にご確認ください。ご希望や旅行の予定に合わせてVem Verがご案内します。',
      },
    ],
  },
}

export function Faq() {
  const [openIndex, setOpenIndex] =
    useState<number | null>(null)

  const { locale } = useLocale()

  const content =
    faqByLocale[locale] ||
    faqByLocale.pt

  return (
    <section
      id="duvidas"
      aria-labelledby="duvidas-title"
      className="bg-background px-4 py-20 md:px-6 md:py-28"
    >
      <div className="mx-auto max-w-4xl">

        <div className="vem-ver-fade-up">
          <SectionHeading
            id="duvidas-title"
            eyebrow={content.eyebrow}
            title={content.title}
            description={content.description}
          />
        </div>

        <div className="vem-ver-fade-up mt-12 overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
          {content.items.map(
            (item, index) => {
              const isOpen =
                openIndex === index

              return (
                <div
                  key={item.question}
                  className="border-b border-border last:border-b-0 transition-colors duration-300 hover:bg-muted/20"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenIndex(
                        isOpen
                          ? null
                          : index,
                      )
                    }
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left transition-colors hover:bg-muted/50 md:px-7 md:py-6"
                  >
                    <span className="font-semibold leading-relaxed">
                      {item.question}
                    </span>

                    <ChevronDown
                      className={`size-5 shrink-0 text-primary transition-transform duration-300 ${
                        isOpen
                          ? 'rotate-180'
                          : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>

                  <div
                    id={`faq-answer-${index}`}
                    className={`grid transition-all duration-300 ${
                      isOpen
                        ? 'grid-rows-[1fr] opacity-100'
                        : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 pb-6 text-sm leading-relaxed text-muted-foreground md:px-7">
                        <div className="whitespace-pre-line">
                          {item.answer}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            },
          )}
        </div>

        <div className="vem-ver-fade-up mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            {content.contactQuestion}
          </p>

          <p className="mt-1 text-sm font-medium text-primary">
            {content.contactText}
          </p>
        </div>

      </div>
    </section>
  )
}
