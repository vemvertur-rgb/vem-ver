import { SectionHeading } from './section-heading'

const steps = [
  { title: 'Escolha seu passeio', text: 'Veja as opções e escolha a experiência que combina com a sua viagem.' },
  { title: 'Fale com a VEM VER Turismo', text: 'Chame pelo WhatsApp ou envie uma solicitação pelo formulário.' },
  { title: 'Consulte valores e disponibilidade', text: 'Receba as informações para a data que você deseja.' },
  { title: 'Aproveite os Lençóis Maranhenses', text: 'Agora é só viver dunas, lagoas e paisagens inesquecíveis.' },
]

export function HowItWorks() {
  return (
    <section aria-labelledby="como-funciona-title" className="px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading id="como-funciona-title" eyebrow="Como funciona" title="Simples do começo ao fim" />
        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <li key={step.title} className="flex flex-col gap-3 border-t-2 border-primary/20 pt-6">
              <span className="font-serif text-4xl font-semibold text-primary" aria-hidden="true">
                {i + 1}
              </span>
              <h3 className="text-lg font-semibold">
                <span className="sr-only">{`Etapa ${i + 1}: `}</span>
                {step.title}
              </h3>
              <p className="leading-relaxed text-muted-foreground">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
