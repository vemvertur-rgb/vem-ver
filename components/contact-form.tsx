'use client'

import { useState, type FormEvent } from 'react'
import { CheckCircle2 } from 'lucide-react'
import { siteConfig, tours } from '@/lib/site-config'
import { whatsappLink } from '@/lib/links'

type Status = 'idle' | 'sending' | 'sent-form' | 'sent-whatsapp' | 'error'

const inputClass =
  'min-h-12 w-full rounded-xl border border-input bg-card px-4 text-base text-foreground placeholder:text-muted-foreground/80 focus-visible:border-ring focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/30'

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const form = event.currentTarget
    const data = new FormData(form)
    const get = (key: string) => String(data.get(key) ?? '').trim()

    const { actionUrl, fields } = siteConfig.googleForm

    if (actionUrl) {
      setStatus('sending')

      const body = new FormData()
      body.append(fields.name, get('name'))
      body.append(fields.whatsapp, get('whatsapp'))
      body.append(fields.date, get('date'))
      body.append(fields.people, get('people'))
      body.append(fields.tour, get('tour'))
      body.append(fields.message, get('message'))

      try {
        // Google Forms não retorna CORS; "no-cors" envia sem ler a resposta.
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

    const lines = [
      'Olá! Vim pelo site da VEM VER Turismo e gostaria de fazer uma solicitação.',
      '',
      `Nome: ${get('name')}`,
      `WhatsApp: ${get('whatsapp')}`,
      get('date') &&
        `Data pretendida: ${get('date').split('-').reverse().join('/')}`,
      get('people') && `Número de pessoas: ${get('people')}`,
      get('tour') && `Passeio de interesse: ${get('tour')}`,
      get('accommodation') &&
        `Hospedagem: ${get('accommodation')}`,
      get('transfer') &&
        `Transfer para Barreirinhas: ${get('transfer')}`,
      get('message') && `Mensagem: ${get('message')}`,
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
      className="flex flex-col gap-5 rounded-3xl border border-border bg-card p-6 shadow-sm md:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label="Nome">
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

        <Field id="whatsapp" label="WhatsApp">
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

        <Field id="date" label="Data pretendida">
          <input
            id="date"
            name="date"
            type="date"
            className={inputClass}
          />
        </Field>

        <Field id="people" label="Número de pessoas">
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

      <Field id="tour" label="Passeio de interesse">
        <select
          id="tour"
          name="tour"
          defaultValue=""
          className={inputClass}
        >
          <option value="">Ainda não sei</option>

          {tours.map((t) => (
            <option key={t.slug} value={t.name}>
              {t.name}
            </option>
          ))}
        </select>
      </Field>

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
          <option value="">Selecione uma opção</option>

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
          <option value="">Selecione uma opção</option>
          <option value="Sim">Sim</option>
          <option value="Não">Não</option>
          <option value="Ainda não sei">Ainda não sei</option>
        </select>
      </Field>

      <Field id="message" label="Mensagem">
        <textarea
          id="message"
          name="message"
          rows={4}
          className={`${inputClass} py-3`}
          placeholder="Conte um pouco sobre a sua viagem"
        />
      </Field>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="inline-flex min-h-12 items-center justify-center rounded-full bg-primary px-6 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50 disabled:opacity-60"
      >
        {status === 'sending'
          ? 'Enviando...'
          : 'Enviar solicitação'}
      </button>

      <div aria-live="polite" className="text-sm">
        {status === 'sent-form' && (
          <p className="flex items-center gap-2 text-accent-foreground">
            <CheckCircle2
              className="size-4"
              aria-hidden="true"
            />
            Solicitação enviada! Em breve a VEM VER Turismo entrará em contato.
          </p>
        )}

        {status === 'sent-whatsapp' && (
          <p className="flex items-center gap-2 text-accent-foreground">
            <CheckCircle2
              className="size-4"
              aria-hidden="true"
            />
            Abrimos o WhatsApp com a sua mensagem. É só enviar!
          </p>
        )}

        {status === 'error' && (
          <p className="text-destructive">
            Não foi possível enviar. Tente novamente ou fale pelo WhatsApp.
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
