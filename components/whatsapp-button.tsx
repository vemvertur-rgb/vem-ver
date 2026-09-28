import { whatsappLink } from '@/lib/links'
import { WhatsAppIcon } from './brand-icons'

export function WhatsAppButton() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a VEM VER Turismo no WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex size-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-lg ring-4 ring-white/70 transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-ring md:bottom-6 md:right-6 md:size-16"
    >
      <WhatsAppIcon className="size-7 md:size-8" />
    </a>
  )
}
