'use client'

import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { ImagePlus, Loader2, Star, X } from 'lucide-react'
import { supabase } from '@/lib/supabase'
import { tours, privateExperiences } from '@/lib/site-config'
import { SectionHeading } from './section-heading'

type Testimonial = {
  id: string
  nome: string
  passeio: string
  estrelas: number
  descricao: string
  fotos: string | null
  criado_em: string
}

function getPhotoUrls(fotos: string | null): string[] {
  if (!fotos) return []

  try {
    const parsed = JSON.parse(fotos)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

function getTourNames(passeio: string): string[] {
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
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [loading, setLoading] = useState(true)
  const [sending, setSending] = useState(false)
  const [message, setMessage] = useState('')

  const [name, setName] = useState('')
  const [selectedTours, setSelectedTours] = useState<string[]>([])
  const [rating, setRating] = useState(5)
  const [description, setDescription] = useState('')
  const [photos, setPhotos] = useState<File[]>([])
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null)

  useEffect(() => {
    async function loadTestimonials() {
      const { data, error } = await supabase
        .from('depoimentos')
        .select(
          'id, nome, passeio, estrelas, descricao, fotos, criado_em'
        )
        .eq('aprovado', true)
        .order('criado_em', { ascending: false })

      if (!error && data) {
        setTestimonials(data)
      }

      setLoading(false)
    }

    loadTestimonials()
  }, [])

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setSelectedPhoto(null)
      }
    }

    if (selectedPhoto) {
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [selectedPhoto])

  function handlePhotos(event: ChangeEvent<HTMLInputElement>) {
    const selectedFiles = Array.from(event.target.files ?? [])
      .filter((file) => file.type.startsWith('image/'))
      .slice(0, 5)

    setPhotos(selectedFiles)
  }

  function handleTourChange(tourName: string) {
    setSelectedTours((current) =>
      current.includes(tourName)
        ? current.filter((item) => item !== tourName)
        : [...current, tourName]
    )
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (
      !name.trim() ||
      selectedTours.length === 0 ||
      !description.trim()
    ) {
      setMessage(
        'Preencha seu nome, escolha pelo menos um passeio e escreva seu depoimento.'
      )
      return
    }

    setSending(true)
    setMessage('')

    try {
      const photoUrls: string[] = []

      for (const file of photos) {
        const extension = file.name.split('.').pop() || 'jpg'
        const fileName = `${crypto.randomUUID()}.${extension}`

        const { error: uploadError } = await supabase.storage
          .from('depoimentos')
          .upload(fileName, file, {
            cacheControl: '3600',
            upsert: false,
          })

        if (uploadError) {
          throw uploadError
        }

        const { data } = supabase.storage
          .from('depoimentos')
          .getPublicUrl(fileName)

        if (data.publicUrl) {
          photoUrls.push(data.publicUrl)
        }
      }

      const { error: insertError } = await supabase
        .from('depoimentos')
        .insert({
          nome: name.trim(),
          passeio: JSON.stringify(selectedTours),
          estrelas: rating,
          descricao: description.trim(),
          fotos: JSON.stringify(photoUrls),
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

      setMessage(
        'Obrigado pelo seu depoimento! Ele foi enviado e aparecerá no site após nossa aprovação.'
      )
    } catch (error) {
      console.error('Erro ao enviar depoimento:', error)

      setMessage(
        'Não foi possível enviar seu depoimento agora. Tente novamente em alguns instantes.'
      )
    } finally {
      setSending(false)
    }
  }

  const availableTours = [...tours, ...privateExperiences]

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
            eyebrow="Depoimentos"
            title="Experiências que ficam na memória"
            description="Confira o que nossos clientes têm a dizer sobre suas experiências com a Vem Ver."
          />
        </div>

        {/* Depoimentos aprovados */}
        {!loading && testimonials.length > 0 && (
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => {
              const photoUrls = getPhotoUrls(testimonial.fotos)
              const tourNames = getTourNames(testimonial.passeio)

              return (
                <article
                  key={testimonial.id}
                  className="vem-ver-card vem-ver-float-in flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  {/* Estrelas */}
                  <div
                    className="flex gap-1 text-primary"
                    aria-label={`Avaliação de ${testimonial.estrelas} estrelas`}
                  >
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star
                        key={index}
                        className={`size-4 transition-transform duration-200 ${
                          index < testimonial.estrelas
                            ? 'fill-current'
                            : 'fill-none opacity-30'
                        }`}
                        aria-hidden="true"
                      />
                    ))}
                  </div>

                  {/* Depoimento */}
                  <blockquote className="mt-5 flex-1 text-base leading-relaxed text-muted-foreground">
                    “{testimonial.descricao}”
                  </blockquote>

                  {/* Fotos */}
                  {photoUrls.length > 0 && (
                    <div className="mt-5 grid grid-cols-3 gap-2">
                      {photoUrls.slice(0, 5).map((photo, index) => (
                        <button
                          key={`${photo}-${index}`}
                          type="button"
                          onClick={() => setSelectedPhoto(photo)}
                          className="vem-ver-image group relative overflow-hidden rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                          aria-label={`Ampliar foto enviada por ${testimonial.nome}`}
                        >
                          <img
                            src={photo}
                            alt={`Foto enviada por ${testimonial.nome}`}
                            className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-110"
                            loading="lazy"
                          />

                          <span
                            className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 text-white transition-colors duration-300 group-hover:bg-black/20"
                            aria-hidden="true"
                          >
                            <span className="rounded-full bg-black/50 px-3 py-1 text-xs opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                              Ver foto
                            </span>
                          </span>
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Cliente */}
                  <div className="mt-6 border-t border-border pt-4">
                    <p className="font-semibold">
                      {testimonial.nome}
                    </p>

                    {tourNames.length > 0 && (
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {tourNames.join(' • ')}
                      </p>
                    )}
                  </div>
                </article>
              )
            })}
          </div>
        )}

        {!loading && testimonials.length === 0 && (
          <div className="vem-ver-fade-up mt-12 rounded-2xl border border-border bg-card p-8 text-center shadow-sm">
            <p className="text-muted-foreground">
              Seja o primeiro a compartilhar sua experiência com a Vem Ver.
            </p>
          </div>
        )}

        {/* Formulário de depoimento */}
        <div className="vem-ver-fade-up mx-auto mt-16 max-w-3xl rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow duration-300 hover:shadow-md md:p-8">
          <div className="mb-8">
            <h3 className="text-2xl font-semibold">
              Conte como foi sua experiência
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Avalie seus passeios, escreva um depoimento e, se quiser, envie
              algumas fotos da sua viagem.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Nome */}
            <div>
              <label
                htmlFor="testimonial-name"
                className="mb-2 block text-sm font-medium"
              >
                Seu nome
              </label>

              <input
                id="testimonial-name"
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Como podemos identificar você?"
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/10"
                required
              />
            </div>

            {/* Passeios */}
            <div>
              <span className="mb-2 block text-sm font-medium">
                Quais passeios você fez?
              </span>

              <p className="mb-3 text-xs text-muted-foreground">
                Você pode escolher mais de um passeio.
              </p>

              <div className="grid gap-2 sm:grid-cols-2">
                {availableTours.map((item) => {
                  const isSelected = selectedTours.includes(item.name)

                  return (
                    <label
                      key={item.slug}
                      className={`flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 text-sm transition-all duration-200 ${
                        isSelected
                          ? 'border-primary bg-primary/10 shadow-sm'
                          : 'border-border bg-background hover:border-primary/50 hover:bg-primary/[0.03]'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={() => handleTourChange(item.name)}
                        className="size-4 accent-primary"
                      />

                      <span>{item.name}</span>
                    </label>
                  )
                })}
              </div>

              {selectedTours.length > 0 && (
                <p className="mt-3 text-xs text-muted-foreground">
                  {selectedTours.length} passeio
                  {selectedTours.length > 1 ? 's' : ''} selecionado
                  {selectedTours.length > 1 ? 's' : ''}.
                </p>
              )}
            </div>

            {/* Estrelas */}
            <div>
              <span className="mb-2 block text-sm font-medium">
                Sua avaliação
              </span>

              <div
                className="flex gap-2"
                aria-label="Escolha sua avaliação"
              >
                {Array.from({ length: 5 }).map((_, index) => {
                  const starNumber = index + 1

                  return (
                    <button
                      key={starNumber}
                      type="button"
                      onClick={() => setRating(starNumber)}
                      aria-label={`${starNumber} estrela${
                        starNumber > 1 ? 's' : ''
                      }`}
                      className="vem-ver-button rounded-md p-1 transition-transform hover:scale-110"
                    >
                      <Star
                        className={`size-7 ${
                          starNumber <= rating
                            ? 'fill-primary text-primary'
                            : 'text-muted-foreground'
                        }`}
                      />
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Descrição */}
            <div>
              <label
                htmlFor="testimonial-description"
                className="mb-2 block text-sm font-medium"
              >
                Como foi sua experiência?
              </label>

              <textarea
                id="testimonial-description"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                placeholder="Conte um pouco sobre como foi seu passeio..."
                rows={5}
                className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm leading-relaxed outline-none transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/10"
                required
              />
            </div>

            {/* Fotos */}
            <div>
              <label
                htmlFor="testimonial-photos"
                className="mb-2 block text-sm font-medium"
              >
                Fotos da experiência
              </label>

              <label
                htmlFor="testimonial-photos"
                className="group flex cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-border bg-background px-6 py-8 text-center transition-all duration-300 hover:border-primary hover:bg-primary/[0.03]"
              >
                <ImagePlus className="size-8 text-primary transition-transform duration-300 group-hover:scale-110" />

                <span className="mt-3 text-sm font-medium">
                  Adicionar fotos
                </span>

                <span className="mt-1 text-xs text-muted-foreground">
                  Você pode enviar até 5 fotos.
                </span>

                <input
                  id="testimonial-photos"
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handlePhotos}
                  className="sr-only"
                />
              </label>

              {photos.length > 0 && (
                <p className="mt-2 text-xs text-muted-foreground">
                  {photos.length} foto
                  {photos.length > 1 ? 's' : ''} selecionada
                  {photos.length > 1 ? 's' : ''}.
                </p>
              )}
            </div>

            {/* Botão */}
            <button
              type="submit"
              disabled={sending}
              className="vem-ver-button flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 font-semibold text-primary-foreground transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {sending && <Loader2 className="size-4 animate-spin" />}

              {sending
                ? 'Enviando depoimento...'
                : 'Enviar meu depoimento'}
            </button>

            {/* Mensagem */}
            {message && (
              <p
                role="status"
                className="vem-ver-fade-up rounded-xl border border-border bg-background px-4 py-3 text-sm leading-relaxed text-muted-foreground"
              >
                {message}
              </p>
            )}

            <p className="text-center text-xs leading-relaxed text-muted-foreground">
              Seu depoimento será analisado antes de aparecer publicamente
              no site.
            </p>
          </form>
        </div>
      </div>

      {/* Visualizador da foto */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 vem-ver-float-in"
          role="dialog"
          aria-modal="true"
          aria-label="Visualização ampliada da foto"
          onClick={() => setSelectedPhoto(null)}
        >
          <button
            type="button"
            onClick={() => setSelectedPhoto(null)}
            className="absolute right-4 top-4 z-10 flex size-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-all duration-200 hover:scale-105 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Fechar foto"
          >
            <X className="size-6" />
          </button>

          <img
            src={selectedPhoto}
            alt="Foto ampliada do depoimento"
            className="max-h-[90vh] max-w-[95vw] rounded-xl object-contain shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}
