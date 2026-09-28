import { BedDouble, HeartHandshake, MessageCircle, Sparkles } from 'lucide-react'
import { SectionHeading } from './section-heading'

const features = [
  {
    icon: Sparkles,
    title: 'Experiências inesquecíveis',
    text: 'Conheça paisagens incríveis e aproveite cada momento dos Lençóis Maranhenses.',
  },
  {
    icon: HeartHandshake,
    title: 'Atendimento próximo',
    text: 'Conte com a VEM VER Turismo para ajudar você a encontrar a experiência ideal.',
  },
  {
    icon: BedDouble,
    title: 'Passeios e pousada',
    text: 'Combine os passeios com hospedagem em pousada e tenha uma estadia tranquila e bem organizada.',
  },
  {
    icon: MessageCircle,
    title: 'Facilidade',
    text: 'Entre em contato pelo WhatsApp para consultar passeios, valores e disponibilidade.',
  },
]

export function Intro() {
  return (
    <section aria-labelledby="intro-title" className="px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="intro-title"
          eyebrow="VEM VER Turismo"
          title="Mais do que um passeio. Uma experiência para guardar."
        />
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, text }) => (
            <li key={title} className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6">
              <span className="flex size-12 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                <Icon className="size-6" aria-hidden="true" />
              </span>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="leading-relaxed text-muted-foreground">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
