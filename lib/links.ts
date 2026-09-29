import { siteConfig } from './site-config'

const basePath = (
  process.env.NEXT_PUBLIC_BASE_PATH ?? ''
).replace(/\/$/, '')

/**
 * Prefixa arquivos de /public com o basePath
 * do GitHub Pages.
 *
 * Exemplo:
 * basePath = "/vemver"
 * "/images/logo.png"
 * → "/vemver/images/logo.png"
 */
export function asset(path: string) {
  if (/^https?:\/\//.test(path)) {
    return path
  }

  const normalizedPath = path.startsWith('/')
    ? path
    : `/${path}`

  return `${basePath}${normalizedPath}`
}

/**
 * Cria o link para abrir uma conversa no WhatsApp.
 */
export function whatsappLink(
  message: string = siteConfig.whatsappMessage,
) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`
}

/**
 * Cria a mensagem específica para um passeio.
 */
export function tourWhatsappMessage(
  tourName: string,
) {
  return `Olá! Vim pelo site da VEM VER Turismo e gostaria de consultar valores e disponibilidade do passeio ${tourName}.`
}
