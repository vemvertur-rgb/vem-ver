'use client'

import {
  ChangeEvent,
  FormEvent,
  useEffect,
  useState,
} from 'react'

import {
  ImagePlus,
  Loader2,
  Star,
  X,
} from 'lucide-react'

import { supabase } from '@/lib/supabase'

import {
  tours,
  privateExperiences,
} from '@/lib/site-config'

import { SectionHeading } from './section-heading'
import { useLocale } from './locale-provider'

type Testimonial = {
  id: string
  nome: string
  passeio: string
  estrelas: number
  descricao: string
  fotos: string | null
  criado_em: string
}

type TestimonialContent = {
  eyebrow: string
  title: string
  description: string
  empty: string
  formTitle: string
  formDescription: string
  nameLabel: string
  namePlaceholder: string
  toursLabel: string
  toursHelp: string
  selectedOne: string
  selectedMany: string
  ratingLabel: string
  ratingAria: string
  ratingStar: string
  ratingStars: string
  descriptionLabel: string
  descriptionPlaceholder: string
  photosLabel: string
  addPhotos: string
  photosHelp: string
  photoSelectedOne: string
  photoSelectedMany: string
  sending: string
  submit: string
  success: string
  error: string
  reviewNote: string
  enlargePhoto: string
  submittedPhoto: string
  closePhoto: string
  enlargedPhoto: string
  ratingDescription: string
}

const contentByLocale: Record<
  string,
  TestimonialContent
> = {
  pt: {
    eyebrow: 'Depoimentos',
    title: 'Experiências que ficam na memória',
    description:
      'Confira o que nossos clientes têm a dizer sobre suas experiências com a Vem Ver.',
    empty:
      'Seja o primeiro a compartilhar sua experiência com a Vem Ver.',
    formTitle:
      'Conte como foi sua experiência',
    formDescription:
      'Avalie seus passeios, escreva um depoimento e, se quiser, envie algumas fotos da sua viagem.',
    nameLabel: 'Seu nome',
    namePlaceholder:
      'Como podemos identificar você?',
    toursLabel:
      'Quais passeios você fez?',
    toursHelp:
      'Você pode escolher mais de um passeio.',
    selectedOne: 'passeio selecionado.',
    selectedMany: 'passeios selecionados.',
    ratingLabel: 'Sua avaliação',
    ratingAria: 'Escolha sua avaliação',
    ratingStar: 'estrela',
    ratingStars: 'estrelas',
    descriptionLabel:
      'Como foi sua experiência?',
    descriptionPlaceholder:
      'Conte um pouco sobre como foi seu passeio...',
    photosLabel:
      'Fotos da experiência',
    addPhotos: 'Adicionar fotos',
    photosHelp:
      'Você pode enviar até 5 fotos.',
    photoSelectedOne:
      'foto selecionada.',
    photoSelectedMany:
      'fotos selecionadas.',
    sending: 'Enviando depoimento...',
    submit: 'Enviar meu depoimento',
    success:
      'Obrigado pelo seu depoimento! Ele foi enviado e aparecerá no site após nossa aprovação.',
    error:
      'Não foi possível enviar seu depoimento agora. Tente novamente em alguns instantes.',
    reviewNote:
      'Seu depoimento será analisado antes de aparecer publicamente no site.',
    enlargePhoto:
      'Ampliar foto enviada por',
    submittedPhoto:
      'Foto enviada por',
    closePhoto: 'Fechar foto',
    enlargedPhoto:
      'Visualização ampliada da foto',
    ratingDescription:
      'Avaliação de estrelas',
  },

  en: {
    eyebrow: 'Testimonials',
    title: 'Experiences worth remembering',
    description:
      'See what our customers have to say about their experiences with Vem Ver.',
    empty:
      'Be the first to share your experience with Vem Ver.',
    formTitle:
      'Tell us about your experience',
    formDescription:
      'Rate your tours, write a review and, if you wish, share some photos from your trip.',
    nameLabel: 'Your name',
    namePlaceholder:
      'How should we identify you?',
    toursLabel:
      'Which tours did you take?',
    toursHelp:
      'You can choose more than one tour.',
    selectedOne:
      'tour selected.',
    selectedMany:
      'tours selected.',
    ratingLabel: 'Your rating',
    ratingAria: 'Choose your rating',
    ratingStar: 'star',
    ratingStars: 'stars',
    descriptionLabel:
      'How was your experience?',
    descriptionPlaceholder:
      'Tell us a little about your experience...',
    photosLabel:
      'Photos from your experience',
    addPhotos: 'Add photos',
    photosHelp:
      'You can upload up to 5 photos.',
    photoSelectedOne:
      'photo selected.',
    photoSelectedMany:
      'photos selected.',
    sending: 'Sending review...',
    submit: 'Submit my review',
    success:
      'Thank you for your review! It has been submitted and will appear on the website after approval.',
    error:
      'We could not submit your review right now. Please try again in a few moments.',
    reviewNote:
      'Your review will be reviewed before appearing publicly on the website.',
    enlargePhoto:
      'Enlarge photo submitted by',
    submittedPhoto:
      'Photo submitted by',
    closePhoto: 'Close photo',
    enlargedPhoto:
      'Enlarged photo view',
    ratingDescription:
      'Star rating',
  },

  es: {
    eyebrow: 'Testimonios',
    title: 'Experiencias que quedan en la memoria',
    description:
      'Descubre lo que nuestros clientes dicen sobre sus experiencias con Vem Ver.',
    empty:
      'Sé el primero en compartir tu experiencia con Vem Ver.',
    formTitle:
      'Cuéntanos cómo fue tu experiencia',
    formDescription:
      'Valora tus excursiones, escribe un testimonio y, si quieres, comparte algunas fotos de tu viaje.',
    nameLabel: 'Tu nombre',
    namePlaceholder:
      '¿Cómo podemos identificarte?',
    toursLabel:
      '¿Qué excursiones hiciste?',
    toursHelp:
      'Puedes elegir más de una excursión.',
    selectedOne:
      'excursión seleccionada.',
    selectedMany:
      'excursiones seleccionadas.',
    ratingLabel: 'Tu valoración',
    ratingAria: 'Elige tu valoración',
    ratingStar: 'estrella',
    ratingStars: 'estrellas',
    descriptionLabel:
      '¿Cómo fue tu experiencia?',
    descriptionPlaceholder:
      'Cuéntanos un poco cómo fue tu excursión...',
    photosLabel:
      'Fotos de la experiencia',
    addPhotos: 'Añadir fotos',
    photosHelp:
      'Puedes enviar hasta 5 fotos.',
    photoSelectedOne:
      'foto seleccionada.',
    photoSelectedMany:
      'fotos seleccionadas.',
    sending: 'Enviando testimonio...',
    submit: 'Enviar mi testimonio',
    success:
      '¡Gracias por tu testimonio! Ha sido enviado y aparecerá en el sitio después de nuestra aprobación.',
    error:
      'No ha sido posible enviar tu testimonio ahora. Inténtalo de nuevo en unos instantes.',
    reviewNote:
      'Tu testimonio será revisado antes de aparecer públicamente en el sitio.',
    enlargePhoto:
      'Ampliar foto enviada por',
    submittedPhoto:
      'Foto enviada por',
    closePhoto: 'Cerrar foto',
    enlargedPhoto:
      'Vista ampliada de la foto',
    ratingDescription:
      'Valoración de estrellas',
  },

  fr: {
    eyebrow: 'Témoignages',
    title: 'Des expériences qui restent en mémoire',
    description:
      'Découvrez ce que nos clients disent de leurs expériences avec Vem Ver.',
    empty:
      'Soyez le premier à partager votre expérience avec Vem Ver.',
    formTitle:
      'Racontez-nous votre expérience',
    formDescription:
      'Évaluez vos excursions, écrivez un témoignage et, si vous le souhaitez, partagez quelques photos de votre voyage.',
    nameLabel: 'Votre nom',
    namePlaceholder:
      'Comment pouvons-nous vous identifier ?',
    toursLabel:
      'Quelles excursions avez-vous faites ?',
    toursHelp:
      'Vous pouvez choisir plusieurs excursions.',
    selectedOne:
      'excursion sélectionnée.',
    selectedMany:
      'excursions sélectionnées.',
    ratingLabel: 'Votre évaluation',
    ratingAria:
      'Choisissez votre évaluation',
    ratingStar: 'étoile',
    ratingStars: 'étoiles',
    descriptionLabel:
      'Comment s’est passée votre expérience ?',
    descriptionPlaceholder:
      'Racontez-nous comment s’est passée votre excursion...',
    photosLabel:
      'Photos de votre expérience',
    addPhotos: 'Ajouter des photos',
    photosHelp:
      'Vous pouvez envoyer jusqu’à 5 photos.',
    photoSelectedOne:
      'photo sélectionnée.',
    photoSelectedMany:
      'photos sélectionnées.',
    sending: 'Envoi du témoignage...',
    submit: 'Envoyer mon témoignage',
    success:
      'Merci pour votre témoignage ! Il a été envoyé et apparaîtra sur le site après validation.',
    error:
      'Impossible d’envoyer votre témoignage pour le moment. Veuillez réessayer dans quelques instants.',
    reviewNote:
      'Votre témoignage sera vérifié avant d’apparaître publiquement sur le site.',
    enlargePhoto:
      'Agrandir la photo envoyée par',
    submittedPhoto:
      'Photo envoyée par',
    closePhoto: 'Fermer la photo',
    enlargedPhoto:
      'Vue agrandie de la photo',
    ratingDescription:
      'Évaluation en étoiles',
  },

  it: {
    eyebrow: 'Testimonianze',
    title: 'Esperienze che restano nella memoria',
    description:
      'Scopri cosa dicono i nostri clienti delle loro esperienze con Vem Ver.',
    empty:
      'Sii il primo a condividere la tua esperienza con Vem Ver.',
    formTitle:
      'Raccontaci la tua esperienza',
    formDescription:
      'Valuta le tue escursioni, scrivi una testimonianza e, se vuoi, condividi alcune foto del tuo viaggio.',
    nameLabel: 'Il tuo nome',
    namePlaceholder:
      'Come possiamo identificarti?',
    toursLabel:
      'Quali escursioni hai fatto?',
    toursHelp:
      'Puoi scegliere più di un’escursione.',
    selectedOne:
      'escursione selezionata.',
    selectedMany:
      'escursioni selezionate.',
    ratingLabel: 'La tua valutazione',
    ratingAria:
      'Scegli la tua valutazione',
    ratingStar: 'stella',
    ratingStars: 'stelle',
    descriptionLabel:
      'Com’è stata la tua esperienza?',
    descriptionPlaceholder:
      'Raccontaci com’è stata la tua escursione...',
    photosLabel:
      'Foto della tua esperienza',
    addPhotos: 'Aggiungi foto',
    photosHelp:
      'Puoi inviare fino a 5 foto.',
    photoSelectedOne:
      'foto selezionata.',
    photoSelectedMany:
      'foto selezionate.',
    sending: 'Invio della testimonianza...',
    submit: 'Invia la mia testimonianza',
    success:
      'Grazie per la tua testimonianza! È stata inviata e apparirà sul sito dopo la nostra approvazione.',
    error:
      'Non è stato possibile inviare la tua testimonianza. Riprova tra qualche istante.',
    reviewNote:
      'La tua testimonianza sarà verificata prima di essere pubblicata sul sito.',
    enlargePhoto:
      'Ingrandisci la foto inviata da',
    submittedPhoto:
      'Foto inviata da',
    closePhoto: 'Chiudi foto',
    enlargedPhoto:
      'Visualizzazione ingrandita della foto',
    ratingDescription:
      'Valutazione in stelle',
  },

  zh: {
    eyebrow: '客户评价',
    title: '值得珍藏的旅行体验',
    description:
      '看看我们的客户如何评价他们与 Vem Ver 一起的旅行体验。',
    empty:
      '成为第一个与 Vem Ver 分享旅行体验的人。',
    formTitle:
      '分享您的旅行体验',
    formDescription:
      '为您的行程评分，写下您的体验，并可以分享一些旅行照片。',
    nameLabel: '您的姓名',
    namePlaceholder:
      '我们应该如何称呼您？',
    toursLabel:
      '您参加了哪些行程？',
    toursHelp:
      '您可以选择多个行程。',
    selectedOne:
      '个行程已选择。',
    selectedMany:
      '个行程已选择。',
    ratingLabel: '您的评分',
    ratingAria:
      '选择您的评分',
    ratingStar: '颗星',
    ratingStars: '颗星',
    descriptionLabel:
      '您的体验如何？',
    descriptionPlaceholder:
      '请分享一些关于您旅行体验的内容……',
    photosLabel:
      '旅行体验照片',
    addPhotos: '添加照片',
    photosHelp:
      '最多可以上传 5 张照片。',
    photoSelectedOne:
      '张照片已选择。',
    photoSelectedMany:
      '张照片已选择。',
    sending: '正在发送评价……',
    submit: '提交我的评价',
    success:
      '感谢您的评价！内容已经提交，审核通过后将在网站上显示。',
    error:
      '暂时无法提交您的评价，请稍后再试。',
    reviewNote:
      '您的评价将在公开显示前经过审核。',
    enlargePhoto:
      '放大由以下用户上传的照片：',
    submittedPhoto:
      '照片上传者：',
    closePhoto: '关闭照片',
    enlargedPhoto:
      '放大的照片预览',
    ratingDescription:
      '星级评价',
  },

  ja: {
    eyebrow: 'お客様の声',
    title: '思い出に残る体験',
    description:
      'Vem Verと一緒に旅をしたお客様から寄せられた感想をご覧ください。',
    empty:
      'Vem Verでの体験を最初に共有してみませんか。',
    formTitle:
      'あなたの体験を教えてください',
    formDescription:
      'ツアーを評価し、感想を書いて、よろしければ旅行中の写真も共有してください。',
    nameLabel: 'お名前',
    namePlaceholder:
      'お名前を入力してください',
    toursLabel:
      '参加したツアー',
    toursHelp:
      '複数のツアーを選択できます。',
    selectedOne:
      '件のツアーを選択しました。',
    selectedMany:
      '件のツアーを選択しました。',
    ratingLabel: '評価',
    ratingAria:
      '評価を選択してください',
    ratingStar: 'つ星',
    ratingStars: 'つ星',
    descriptionLabel:
      '体験はいかがでしたか？',
    descriptionPlaceholder:
      'ツアーの感想をお聞かせください……',
    photosLabel:
      '体験の写真',
    addPhotos: '写真を追加',
    photosHelp:
      '最大5枚まで写真を送信できます。',
    photoSelectedOne:
      '枚の写真を選択しました。',
    photoSelectedMany:
      '枚の写真を選択しました。',
    sending: '口コミを送信しています……',
    submit: '口コミを送信',
    success:
      '口コミをありがとうございます！送信されました。承認後、サイトに掲載されます。',
    error:
      '現在、口コミを送信できません。しばらくしてからもう一度お試しください。',
    reviewNote:
      '口コミは公開前に確認されます。',
    enlargePhoto:
      '投稿者の写真を拡大',
    submittedPhoto:
      '写真の投稿者：',
    closePhoto: '写真を閉じる',
    enlargedPhoto:
      '写真を拡大表示',
    ratingDescription:
      '星による評価',
  },
}

function getPhotoUrls(
  fotos: string | null,
): string[] {
  if (!fotos) return []

  try {
    const parsed = JSON.parse(fotos)

    return Array.isArray(parsed)
      ? parsed
      : []
  } catch {
    return []
  }
}

function getTourNames(
  passeio: string,
): string[] {
  if (!passeio) return []

  try {
    const parsed = JSON.parse(passeio)

    if (Array.isArray(parsed)) {
      return parsed
    }
  } catch {
    // Depoimentos antigos continuam funcionando normalmente.
  }

  return passeio
    .split(' • ')
    .map((item) => item.trim())
    .filter(Boolean)
}

export function Testimonials() {
  const { locale } = useLocale()

  const content =
    contentByLocale[locale] ||
    contentByLocale.pt

  const [testimonials, setTestimonials] =
    useState<Testimonial[]>([])

  const [loading, setLoading] =
    useState(true)

  const [sending, setSending] =
    useState(false)

  const [message, setMessage] =
    useState('')

  const [name, setName] =
    useState('')

  const [selectedTours, setSelectedTours] =
    useState<string[]>([])

  const [rating, setRating] =
    useState(5)

  const [description, setDescription] =
    useState('')

  const [photos, setPhotos] =
    useState<File[]>([])

  const [selectedPhoto, setSelectedPhoto] =
    useState<string | null>(null)

  useEffect(() => {
    async function loadTestimonials() {
      const { data, error } =
        await supabase
          .from('depoimentos')
          .select(
            'id, nome, passeio, estrelas, descricao, fotos, criado_em',
          )
          .eq('aprovado', true)
          .order('criado_em', {
            ascending: false,
          })

      if (!error && data) {
        setTestimonials(data)
      }

      setLoading(false)
    }

    loadTestimonials()
  }, [])

  useEffect(() => {
    function handleKeyDown(
      event: KeyboardEvent,
    ) {
      if (event.key === 'Escape') {
        setSelectedPhoto(null)
      }
    }

    if (selectedPhoto) {
      document.addEventListener(
        'keydown',
        handleKeyDown,
      )

      document.body.style.overflow =
        'hidden'
    }

    return () => {
      document.removeEventListener(
        'keydown',
        handleKeyDown,
      )

      document.body.style.overflow =
        ''
    }
  }, [selectedPhoto])

  function handlePhotos(
    event: ChangeEvent<HTMLInputElement>,
  ) {
    const selectedFiles = Array.from(
      event.target.files ?? [],
    )
      .filter((file) =>
        file.type.startsWith('image/'),
      )
      .slice(0, 5)

    setPhotos(selectedFiles)
  }

  function handleTourChange(
    tourName: string,
  ) {
    setSelectedTours((current) =>
      current.includes(tourName)
        ? current.filter(
            (item) =>
              item !== tourName,
          )
        : [...current, tourName],
    )
  }

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault()

    if (
      !name.trim() ||
      selectedTours.length === 0 ||
      !description.trim()
    ) {
      setMessage(
        locale === 'pt'
          ? 'Preencha seu nome, escolha pelo menos um passeio e escreva seu depoimento.'
          : locale === 'en'
            ? 'Enter your name, choose at least one tour and write your review.'
            : locale === 'es'
              ? 'Completa tu nombre, elige al menos una excursión y escribe tu testimonio.'
              : locale === 'fr'
                ? 'Indiquez votre nom, choisissez au moins une excursion et écrivez votre témoignage.'
                : locale === 'it'
                  ? 'Inserisci il tuo nome, scegli almeno un’escursione e scrivi la tua testimonianza.'
                  : locale === 'zh'
                    ? '请输入您的姓名，至少选择一个行程并填写评价。'
                    : 'お名前を入力し、少なくとも1つのツアーを選択して口コミを書いてください。',
      )

      return
    }

    setSending(true)
    setMessage('')

    try {
      const photoUrls: string[] = []

      for (const file of photos) {
        const extension =
          file.name.split('.').pop() ||
          'jpg'

        const fileName = `${crypto.randomUUID()}.${extension}`

        const { error: uploadError } =
          await supabase.storage
            .from('depoimentos')
            .upload(
              fileName,
              file,
              {
                cacheControl: '3600',
                upsert: false,
              },
            )

        if (uploadError) {
          throw uploadError
        }

        const { data } =
          supabase.storage
            .from('depoimentos')
            .getPublicUrl(
              fileName,
            )

        if (data.publicUrl) {
          photoUrls.push(
            data.publicUrl,
          )
        }
      }

      const { error: insertError } =
        await supabase
          .from('depoimentos')
          .insert({
            nome: name.trim(),
            passeio:
              JSON.stringify(
                selectedTours,
              ),
            estrelas: rating,
            descricao:
              description.trim(),
            fotos:
              JSON.stringify(
                photoUrls,
              ),
            aprovado: false,
          })

      if (insertError) {
        throw insertError
      }

      setName('')
      setSelectedTours([])
      setRating(5)
      setDescription('')
      setPhotos([])

      setMessage(content.success)
    } catch (error) {
      console.error(
        'Erro ao enviar depoimento:',
        error,
      )

      setMessage(content.error)
    } finally {
      setSending(false)
    }
  }

  const availableTours = [
    ...tours,
    ...privateExperiences,
  ]

  return (
    <section
      id="depoimentos"
      aria-labelledby="depoimentos-title"
      className="bg-sand px-4 py-20 md:px-6 md:py-28"
    >
      <div className="mx-auto max-w-6xl">

        <div className="vem-ver-fade-up">
          <SectionHeading
            id="depoimentos-title"
            eyebrow={content.eyebrow}
            title={content.title}
            description={
              content.description
            }
          />
        </div>

        {!loading &&
          testimonials.length > 0 && (
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map(
                (
                  testimonial,
                  index,
                ) => {
                  const photoUrls =
                    getPhotoUrls(
                      testimonial.fotos,
                    )

                  const tourNames =
                    getTourNames(
                      testimonial.passeio,
                    )

                  return (
                    <article
                      key={
                        testimonial.id
                      }
                      className="vem-ver-card vem-ver-float-in flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                      style={{
                        animationDelay: `${index * 100}ms`,
                      }}
                    >
                      <div
                        className="flex gap-1 text-primary"
                        aria-label={`${content.ratingDescription}: ${testimonial.estrelas}`}
                      >
                        {Array.from({
                          length: 5,
                        }).map(
                          (
                            _,
                            starIndex,
                          ) => (
                            <Star
                              key={
                                starIndex
                              }
                              className={`size-4 transition-transform duration-200 ${
                                starIndex <
                                testimonial.estrelas
                                  ? 'fill-current'
                                  : 'fill-none opacity-30'
                              }`}
                              aria-hidden="true"
                            />
                          ),
                        )}
                      </div>

                      <blockquote className="mt-5 flex-1 text-base leading-relaxed text-muted-foreground">
                        “
                        {
                          testimonial.descricao
                        }
                        ”
                      </blockquote>

                      {photoUrls.length >
                        0 && (
                        <div className="mt-5 grid grid-cols-3 gap-2">
                          {photoUrls
                            .slice(
                              0,
                              5,
                            )
                            .map(
                              (
                                photo,
                                photoIndex,
                              ) => (
                                <button
                                  key={`${photo}-${photoIndex}`}
                                  type="button"
                                  onClick={() =>
                                    setSelectedPhoto(
                                      photo,
                                    )
                                  }
                                  className="vem-ver-image group relative overflow-hidden rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                                  aria-label={`${content.enlargePhoto} ${testimonial.nome}`}
                                >
                                  <img
                                    src={
                                      photo
                                    }
                                    alt={`${content.submittedPhoto} ${testimonial.nome}`}
                                    className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    loading="lazy"
                                  />

                                  <span
                                    className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 text-white transition-colors duration-300 group-hover:bg-black/20"
                                    aria-hidden="true"
                                  >
                                    <span className="rounded-full bg-black/50 px-3 py-1 text-xs opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                                      {locale ===
                                      'pt'
                                        ? 'Ver foto'
                                        : locale ===
                                            'en'
                                          ? 'View photo'
                                          : locale ===
                                              'es'
                                            ? 'Ver foto'
                                            : locale ===
                                                'fr'
                                              ? 'Voir la photo'
                                              : locale ===
                                                  'it'
                                                ? 'Vedi foto'
                                                : locale ===
                                                    'zh'
                                                  ? '查看照片'
                                                  : '写真を見る'}
                                    </span>
                                  </span>
                                </button>
                              ),
                            )}
                        </div>
                      )}

                      <div className="mt-6 border-t border-border pt-4">
                        <p className="font-semibold">
                          {
                            testimonial.nome
                          }
                        </p>

                        {tourNames.length >
                          0 && (
                          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                            {tourNames.join(
                              ' • ',
                            )}
                          </p>
                        )}
                      </div>
                    </article>
                  )
                },
              )}
            </div>
          )}

        {!loading &&
          testimonials.length === 0 && (
            <div className="vem-ver-fade-up mt-12 rounded-2xl border border-border bg-card p-8 text-center shadow-sm">
              <p className="text-muted-foreground">
                {content.empty}
              </p>
            </div>
          )}

        <div className="vem-ver-fade-up mx-auto mt-16 max-w-3xl rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow duration-300 hover:shadow-md md:p-8">

          <div className="mb-8">
            <h3 className="text-2xl font-semibold">
              {content.formTitle}
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {
                content.formDescription
              }
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >

            <div>
              <label
                htmlFor="testimonial-name"
                className="mb-2 block text-sm font-medium"
              >
                {content.nameLabel}
              </label>

              <input
                id="testimonial-name"
                type="text"
                value={name}
                onChange={(event) =>
                  setName(
                    event.target.value,
                  )
                }
                placeholder={
                  content.namePlaceholder
                }
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/10"
                required
              />
            </div>

            <div>
              <span className="mb-2 block text-sm font-medium">
                {content.toursLabel}
              </span>

              <p className="mb-3 text-xs text-muted-foreground">
                {content.toursHelp}
              </p>

              <div className="grid gap-2 sm:grid-cols-2">
                {availableTours.map(
                  (item) => {
                    const isSelected =
                      selectedTours.includes(
                        item.name,
                      )

                    return (
                      <label
                        key={
                          item.slug
                        }
                        className={`flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 text-sm transition-all duration-200 ${
                          isSelected
                            ? 'border-primary bg-primary/10 shadow-sm'
                            : 'border-border bg-background hover:border-primary/50 hover:bg-primary/[0.03]'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={
                            isSelected
                          }
                          onChange={() =>
                            handleTourChange(
                              item.name,
                            )
                          }
                          className="size-4 accent-primary"
                        />

                        <span>
                          {
                            item.name
                          }
                        </span>
                      </label>
                    )
                  },
                )}
              </div>

              {selectedTours.length >
                0 && (
                <p className="mt-3 text-xs text-muted-foreground">
                  {
                    selectedTours.length
                  }{' '}
                  {selectedTours.length ===
                  1
                    ? content.selectedOne
                    : content.selectedMany}
                </p>
              )}
            </div>

            <div>
              <span className="mb-2 block text-sm font-medium">
                {content.ratingLabel}
              </span>

              <div
                className="flex gap-2"
                aria-label={
                  content.ratingAria
                }
              >
                {Array.from({
                  length: 5,
                }).map(
                  (_, index) => {
                    const starNumber =
                      index + 1

                    return (
                      <button
                        key={
                          starNumber
                        }
                        type="button"
                        onClick={() =>
                          setRating(
                            starNumber,
                          )
                        }
                        aria-label={`${starNumber} ${
                          starNumber ===
                          1
                            ? content.ratingStar
                            : content.ratingStars
                        }`}
                        className="vem-ver-button rounded-md p-1 transition-transform hover:scale-110"
                      >
                        <Star
                          className={`size-7 ${
                            starNumber <=
                            rating
                              ? 'fill-primary text-primary'
                              : 'text-muted-foreground'
                          }`}
                        />
                      </button>
                    )
                  },
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="testimonial-description"
                className="mb-2 block text-sm font-medium"
              >
                {
                  content.descriptionLabel
                }
              </label>

              <textarea
                id="testimonial-description"
                value={description}
                onChange={(event) =>
                  setDescription(
                    event.target.value,
                  )
                }
                placeholder={
                  content.descriptionPlaceholder
                }
                rows={5}
                className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm leading-relaxed outline-none transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/10"
                required
              />
            </div>

            <div>
              <label
                htmlFor="testimonial-photos"
                className="mb-2 block text-sm font-medium"
              >
                {content.photosLabel}
              </label>

              <label
                htmlFor="testimonial-photos"
                className="group flex cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-border bg-background px-6 py-8 text-center transition-all duration-300 hover:border-primary hover:bg-primary/[0.03]"
              >
                <ImagePlus className="size-8 text-primary transition-transform duration-300 group-hover:scale-110" />

                <span className="mt-3 text-sm font-medium">
                  {content.addPhotos}
                </span>

                <span className="mt-1 text-xs text-muted-foreground">
                  {content.photosHelp}
                </span>

                <input
                  id="testimonial-photos"
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={
                    handlePhotos
                  }
                  className="sr-only"
                />
              </label>

              {photos.length >
                0 && (
                <p className="mt-2 text-xs text-muted-foreground">
                  {photos.length}{' '}
                  {photos.length ===
                  1
                    ? content.photoSelectedOne
                    : content.photoSelectedMany}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={sending}
              className="vem-ver-button flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 font-semibold text-primary-foreground transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {sending && (
                <Loader2 className="size-4 animate-spin" />
              )}

              {sending
                ? content.sending
                : content.submit}
            </button>

            {message && (
              <p
                role="status"
                className="vem-ver-fade-up rounded-xl border border-border bg-background px-4 py-3 text-sm leading-relaxed text-muted-foreground"
              >
                {message}
              </p>
            )}

            <p className="text-center text-xs leading-relaxed text-muted-foreground">
              {content.reviewNote}
            </p>

          </form>
        </div>
      </div>

      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 vem-ver-float-in"
          role="dialog"
          aria-modal="true"
          aria-label={
            content.enlargedPhoto
          }
          onClick={() =>
            setSelectedPhoto(null)
          }
        >
          <button
            type="button"
            onClick={() =>
              setSelectedPhoto(null)
            }
            className="absolute right-4 top-4 z-10 flex size-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-all duration-200 hover:scale-105 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label={
              content.closePhoto
            }
          >
            <X className="size-6" />
          </button>

          <img
            src={selectedPhoto}
            alt={
              content.enlargedPhoto
            }
            className="max-h-[90vh] max-w-[95vw] rounded-xl object-contain shadow-2xl"
            onClick={(event) =>
              event.stopPropagation()
            }
          />
        </div>
      )}
    </section>
  )
}
