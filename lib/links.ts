import { siteConfig } from './site-config'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

/** Prefixa arquivos de /public com o basePath do GitHub Pages (ex.: /nome-do-repo). */
export function asset(path: string) {
  if (/^https?:\/\//.test(path)) return path
  return `${basePath}${path}`
}

export function whatsappLink(message: string = siteConfig.whatsappMessage) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`
}

export function tourWhatsappMessage(tourName: string) {
  return `Olá! Vim pelo site da VEM VER Turismo e gostaria de consultar valores e disponibilidade do passeio ${tourName}.`
}
