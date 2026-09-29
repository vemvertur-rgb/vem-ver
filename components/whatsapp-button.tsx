import { whatsappLink } from '@/lib/links'
import { WhatsAppIcon } from './brand-icons'

export function WhatsAppButton() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a Vem Ver Turismo pelo WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex min-h-14 items-center gap-3 rounded-full bg-whatsapp px-4 text-whatsapp-foreground shadow-lg ring-4 ring-white/70 transition-all duration-300 hover:scale-105 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:bottom-6 md:right-6 md:min-h-16 md:px-5"
    >
      <WhatsAppIcon className="size-7 shrink-0 md:size-8" />

      <span className="hidden text-sm font-semibold sm:block">
        Falar no WhatsApp
      </span>
    </a>
  )
}
