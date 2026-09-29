'use client'

import { useState, type FormEvent } from 'react'
import { CheckCircle2 } from 'lucide-react'
import {
  siteConfig,
  tours,
  privateExperiences,
} from '@/lib/site-config'
import { whatsappLink } from '@/lib/links'

type Status =
  | 'idle'
  | 'sending'
  | 'sent-form'
  | 'sent-whatsapp'
  | 'error'

const inputClass =
  'min-h-12 w-full rounded-xl border border-input bg-background px-4 text-base text-foreground placeholder:text-muted-foreground/80 focus-visible:border-ring focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/30'

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const form = event.currentTarget
    const data = new FormData(form)

    const get = (key: string) =>
      String(data.get(key) ?? '').trim()

    const getAll = (key: string) =>
      data
        .getAll(key)
        .map((value) => String(value).trim())
        .filter(Boolean)

    const selectedTours = getAll('tour')

    const { actionUrl, fields } = siteConfig.googleForm

    /* =====================================================
       ENVIO PARA GOOGLE FORMS
    ===================================================== */

    if (actionUrl) {
      setStatus('sending')

      const body = new FormData()

      body.append(fields.name, get('name'))
      body.append(fields.whatsapp, get('whatsapp'))
      body.append(fields.date, get('date'))
      body.append(fields.people, get('people'))
      body.append(fields.tour, selectedTours.join(', '))
      body.append(fields.message, get('message'))

      try {
        await fetch(actionUrl, {
          method: 'POST',
          mode: 'no-cors',
          body,
        })

        form.reset()
        setStatus('sent-form')
      } catch {
        setStatus('error')
      }

      return
    }

    /* =====================================================
       ENVIO PARA WHATSAPP
    ===================================================== */

    const lines = [
      'Olá! Vim pelo site da VEM VER Turismo e gostaria de fazer uma solicitação.',
      '',
      `Nome: ${get('name')}`,
      `WhatsApp: ${get('whatsapp')}`,

      get('date') &&
        `Data pretendida: ${get('date')
          .split('-')
          .reverse()
          .join('/')}`,

      get('days') &&
        `Dias previstos em Barreirinhas: ${get('days')}`,

      get('people') &&
        `Número de pessoas: ${get('people')}`,

      selectedTours.length > 0 &&
        `Passeios de interesse:\n${selectedTours
          .map((tour) => `- ${tour}`)
          .join('\n')}`,

      get('accommodation') &&
        `Hospedagem: ${get('accommodation')}`,

      get('transfer') &&
        `Transfer para Barreirinhas: ${get('transfer')}`,

      get('message') &&
        `Mensagem: ${get('message')}`,
    ].filter(Boolean)

    window.open(
      whatsappLink(lines.join('\n')),
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
      {/* Dados básicos */}
      <div className="grid gap-5 sm:grid-cols-2">

        <Field
          id="name"
          label="Nome"
        >
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={inputClass}
            placeholder="Seu nome"
          />
        </Field>

        <Field
          id="whatsapp"
          label="WhatsApp"
        >
          <input
            id="whatsapp"
            name="whatsapp"
            type="tel"
            required
            inputMode="tel"
            autoComplete="tel"
            className={inputClass}
            placeholder="(98) 90000-0000"
          />
        </Field>

        <Field
          id="date"
          label="Data pretendida"
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
          label="Quantos dias de passeio pretende ter?"
        >
          <select
            id="days"
            name="days"
            defaultValue=""
            className={inputClass}
          >
            <option value="">
              Selecione uma opção
            </option>

            <option value="1 dia">
              1 dia
            </option>

            <option value="2 dias">
              2 dias
            </option>

            <option value="3 dias">
              3 dias
            </option>

            <option value="4 dias">
              4 dias
            </option>

            <option value="5 dias">
              5 dias
            </option>

            <option value="6 dias">
              6 dias
            </option>

            <option value="7 dias ou mais">
              7 dias ou mais
            </option>
          </select>
        </Field>

        <Field
          id="people"
          label="Número de pessoas"
        >
          <input
            id="people"
            name="people"
            type="number"
            min={1}
            inputMode="numeric"
            className={inputClass}
            placeholder="Ex.: 2"
          />
        </Field>

      </div>

      {/* Passeios */}
      <Field
        id="tour"
        label="Quais passeios você tem interesse em fazer?"
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
              value="Ainda não sei / gostaria de receber uma sugestão"
              className="mt-1 size-4 shrink-0 accent-primary"
            />

            <span className="text-sm leading-relaxed">
              Ainda não sei / gostaria de receber uma sugestão
            </span>
          </label>

        </div>

        <p className="text-xs text-muted-foreground">
          Você pode selecionar mais de um passeio.
        </p>
      </Field>

      {/* Hospedagem */}
      <Field
        id="accommodation"
        label="Você já possui hospedagem?"
      >
        <select
          id="accommodation"
          name="accommodation"
          defaultValue=""
          className={inputClass}
        >
          <option value="">
            Selecione uma opção
          </option>

          <option value="Sim, já tenho pousada/hospedagem">
            Sim, já tenho pousada/hospedagem
          </option>

          <option value="Não, ainda não tenho">
            Não, ainda não tenho
          </option>

          <option value="Ainda estou decidindo">
            Ainda estou decidindo
          </option>
        </select>
      </Field>

      {/* Transfer */}
      <Field
        id="transfer"
        label="Precisa de transfer para Barreirinhas?"
      >
        <select
          id="transfer"
          name="transfer"
          defaultValue=""
          className={inputClass}
        >
          <option value="">
            Selecione uma opção
          </option>

          <option value="Sim">
            Sim
          </option>

          <option value="Não">
            Não
          </option>

          <option value="Ainda não sei">
            Ainda não sei
          </option>
        </select>
      </Field>

      {/* Mensagem */}
      <Field
        id="message"
        label="Mensagem"
      >
        <textarea
          id="message"
          name="message"
          rows={5}
          className={`${inputClass} py-3`}
          placeholder="Conte um pouco sobre a sua viagem, suas dúvidas ou o que você gostaria de conhecer."
        />
      </Field>

      {/* Botão */}
      <button
        type="submit"
        disabled={status === 'sending'}
        className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-primary px-6 text-base font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === 'sending'
          ? 'Enviando...'
          : 'Enviar solicitação'}
      </button>

      {/* Status */}
      <div
        aria-live="polite"
        className="text-sm"
      >
        {status === 'sent-form' && (
          <p className="flex items-start gap-2 text-accent-foreground">
            <CheckCircle2
              className="mt-0.5 size-4 shrink-0"
              aria-hidden="true"
            />

            <span>
              Solicitação enviada! Em breve a VEM VER Turismo
              entrará em contato.
            </span>
          </p>
        )}

        {status === 'sent-whatsapp' && (
          <p className="flex items-start gap-2 text-accent-foreground">
            <CheckCircle2
              className="mt-0.5 size-4 shrink-0"
              aria-hidden="true"
            />

            <span>
              Abrimos o WhatsApp com a sua mensagem.
              É só conferir e enviar!
            </span>
          </p>
        )}

        {status === 'error' && (
          <p className="text-destructive">
            Não foi possível enviar a solicitação.
            Tente novamente ou fale diretamente pelo WhatsApp.
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
